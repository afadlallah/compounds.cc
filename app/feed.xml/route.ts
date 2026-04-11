import { COMPOUNDS } from "@/lib/data/seed-compounds";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const dynamic = "force-static";

function escapeXml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const now = new Date().toUTCString();

  const items = COMPOUNDS.slice(0, 20)
    .map(
      (c) => `
    <item>
      <title>${escapeXml(c.name)}</title>
      <link>${siteUrl}/substances/${c.slug}</link>
      <guid isPermaLink="true">${siteUrl}/substances/${c.slug}</guid>
      <pubDate>${now}</pubDate>
      <description>${escapeXml(c.summary)}</description>
      <category>${escapeXml(c.category)}</category>
    </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Compounds.cc — Latest compounds</title>
    <link>${siteUrl}</link>
    <description>Evidence-forward reference library for nootropics, peptides, and supplements.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
