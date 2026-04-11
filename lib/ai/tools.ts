import { tool } from "ai";
import { z } from "zod";
import { COMPOUNDS, USE_CASES } from "@/lib/data/seed-compounds";

/**
 * Tool definitions for the grounded AI recommender.
 *
 * Each tool queries the database (currently falls through to seed data until
 * DATABASE_URL is wired) and returns only the minimum fields the model needs
 * to produce a grounded response.
 *
 * When Supabase is live, swap the seed-data lookups for calls into
 * `lib/db/queries.ts` inside each tool's `execute`.
 */

export const aiTools = {
  search_compounds: tool({
    description:
      "Search the compound database by free-text name. Returns a short list of matches with their slugs, categories, and evidence scores. Use this first when the user names a compound.",
    inputSchema: z.object({
      query: z.string().min(1).describe("Free-text search term — typically a compound name."),
      limit: z.int().min(1).max(20).default(5),
    }),
    execute: async ({ query, limit }) => {
      const q = query.toLowerCase();
      return COMPOUNDS.filter(
        (c) => c.name.toLowerCase().includes(q) || c.slug.includes(q),
      )
        .slice(0, limit)
        .map((c) => ({
          slug: c.slug,
          name: c.name,
          category: c.category,
          evidenceScore: c.evidenceScore,
          summary: c.summary,
        }));
    },
  }),

  get_compound: tool({
    description:
      "Fetch the full detail record for one compound by slug. Use this after search_compounds has identified the right entry.",
    inputSchema: z.object({
      slug: z.string().min(1),
    }),
    execute: async ({ slug }) => {
      const compound = COMPOUNDS.find((c) => c.slug === slug);
      if (!compound) return { found: false, slug };
      return {
        found: true,
        ...compound,
      };
    },
  }),

  top_for_use_case: tool({
    description:
      "Return the top-ranked compounds for a given use case (focus, sleep, anxiety, energy, memory, mood, stress, longevity, weight-loss, muscle, recovery, libido, pain, immunity).",
    inputSchema: z.object({
      useCase: z.string().describe("Use-case slug, e.g. 'sleep' or 'focus'"),
      limit: z.int().min(1).max(20).default(5),
    }),
    execute: async ({ useCase, limit }) => {
      const uc = USE_CASES.find((u) => u.slug === useCase);
      if (!uc) return { found: false, useCase };
      const ranked = COMPOUNDS.map((c) => ({
        slug: c.slug,
        name: c.name,
        category: c.category,
        score: c.scores[uc.slug] ?? 0,
        evidenceScore: c.evidenceScore,
      }))
        .filter((row) => row.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);
      return { found: true, useCase: uc.name, items: ranked };
    },
  }),
};
