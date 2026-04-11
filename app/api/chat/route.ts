import { anthropic } from "@ai-sdk/anthropic";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { NextResponse, type NextRequest } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/ai/prompt";
import { aiTools } from "@/lib/ai/tools";
import { chatLimiter } from "@/lib/ratelimit";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const maxDuration = 60;

/**
 * Streaming chat endpoint. Auth-gated via `proxy.ts`; we still check here as
 * a defense-in-depth measure so the route cannot be hit by a bypassed proxy.
 */
export async function POST(request: NextRequest) {
  // Gracefully fail if the API key is missing — avoids crashes when the stub
  // is opened before provisioning credentials.
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      {
        success: false,
        error: "ANTHROPIC_API_KEY is not configured. Chat is disabled.",
      },
      { status: 503 },
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { success: false, error: "Not authenticated" },
      { status: 401 },
    );
  }

  const { success, reset } = await chatLimiter.limit(`chat:${user.id}`);
  if (!success) {
    return NextResponse.json(
      { success: false, error: "Rate limit exceeded", retryAfter: reset },
      { status: 429 },
    );
  }

  const body = (await request.json()) as { messages: UIMessage[] };
  const messages = await convertToModelMessages(body.messages);

  const result = streamText({
    model: anthropic("claude-sonnet-4-6"),
    system: SYSTEM_PROMPT,
    messages,
    tools: aiTools,
    // Loop the model through tool calls so it can ground each answer.
    stopWhen: ({ steps }) => steps.length >= 5,
  });

  return result.toUIMessageStreamResponse();
}
