import { NextResponse } from "next/server";
import { COMPOUNDS } from "@/lib/data/seed-compounds";

export const dynamic = "force-static";

export async function GET() {
  const body = COMPOUNDS.map((c) => ({
    slug: c.slug,
    name: c.name,
    category: c.category,
  }));

  return NextResponse.json(body, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
