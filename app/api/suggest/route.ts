import { NextResponse, type NextRequest } from "next/server";
import { suggestSchema } from "@/lib/validation/schemas";
import { suggestLimiter } from "@/lib/ratelimit";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const { success, reset } = await suggestLimiter.limit(`suggest:${ip}`);
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

  const parsed = suggestSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid suggestion" },
      { status: 422 },
    );
  }

  // TODO: wire to Supabase once env vars are set.
  //   const supabase = createAdminClient();
  //   await supabase.from("suggestions").insert({
  //     compound_name: parsed.data.compoundName,
  //     submitted_ip: ip,
  //   });

  return NextResponse.json({
    success: true,
    data: { compoundName: parsed.data.compoundName },
  });
}
