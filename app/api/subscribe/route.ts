import { NextResponse, type NextRequest } from "next/server";
import { subscribeSchema } from "@/lib/validation/schemas";
import { subscribeLimiter } from "@/lib/ratelimit";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const { success, reset } = await subscribeLimiter.limit(`subscribe:${ip}`);
  if (!success) {
    return NextResponse.json(
      { success: false, error: "Too many requests", retryAfter: reset },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = subscribeSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid email" },
      { status: 422 },
    );
  }

  // TODO: wire to Supabase + Resend double opt-in once env vars are set.
  //   const supabase = createAdminClient();
  //   await supabase.from("subscribers").insert({ email: parsed.data.email });
  //   await resend.emails.send({ ... });

  return NextResponse.json({ success: true, data: { email: parsed.data.email } });
}
