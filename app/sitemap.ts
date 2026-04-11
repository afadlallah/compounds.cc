import type { MetadataRoute } from "next";
import { COMPOUNDS } from "@/lib/data/seed-compounds";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${siteUrl}/database`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${siteUrl}/a-to-z`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${siteUrl}/leaderboard`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${siteUrl}/protocols`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${siteUrl}/compare`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${siteUrl}/match`, priority: 0.7, changeFrequency: "monthly" },
  ];

  const compoundRoutes: MetadataRoute.Sitemap = COMPOUNDS.map((c) => ({
    url: `${siteUrl}/substances/${c.slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...compoundRoutes];
}
