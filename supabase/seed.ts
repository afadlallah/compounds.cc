/**
 * Idempotent seed script. Run with:
 *
 *     pnpm db:seed
 *
 * Requires NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY in .env.local.
 *
 * Inserts the same objects from `lib/data/seed-compounds.ts`. Upserts by slug
 * so it's safe to re-run after editing the seed file.
 */

import { createClient } from "@supabase/supabase-js";
import { COMPOUNDS, USE_CASES, CATEGORIES } from "../lib/data/seed-compounds";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceRoleKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.",
  );
  process.exit(1);
}

const supabase = createClient(url, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function upsertCategories() {
  const { error } = await supabase
    .from("categories")
    .upsert(
      CATEGORIES.map((c) => ({ slug: c.slug, name: c.name })),
      { onConflict: "slug" },
    );
  if (error) throw error;
  console.info(`Upserted ${CATEGORIES.length} categories`);
}

async function upsertUseCases() {
  const { error } = await supabase
    .from("use_cases")
    .upsert(
      USE_CASES.map((u) => ({
        slug: u.slug,
        name: u.name,
        description: u.description,
      })),
      { onConflict: "slug" },
    );
  if (error) throw error;
  console.info(`Upserted ${USE_CASES.length} use cases`);
}

async function upsertCompounds() {
  const rows = COMPOUNDS.map((c) => ({
    slug: c.slug,
    name: c.name,
    category: c.category,
    summary: c.summary,
    quick_verdict: c.quickVerdict,
    evidence_score: c.evidenceScore,
    research_notes: c.researchNotes,
    cautions: c.cautions,
    caveats: c.caveats,
    benefits: c.benefits,
    dosage_notes: c.dosageNotes,
    side_effects: c.sideEffects,
    published: true,
  }));
  const { error } = await supabase
    .from("compounds")
    .upsert(rows, { onConflict: "slug" });
  if (error) throw error;
  console.info(`Upserted ${rows.length} compounds`);
}

async function upsertScores() {
  // Fetch the ID maps we need.
  const [{ data: compoundRows }, { data: useCaseRows }] = await Promise.all([
    supabase.from("compounds").select("id, slug"),
    supabase.from("use_cases").select("id, slug"),
  ]);
  if (!compoundRows || !useCaseRows) return;

  const compoundIdBySlug = new Map(compoundRows.map((r) => [r.slug, r.id]));
  const useCaseIdBySlug = new Map(useCaseRows.map((r) => [r.slug, r.id]));

  const scoreRows: Array<{
    compound_id: string;
    use_case_id: string;
    score: number;
  }> = [];

  for (const compound of COMPOUNDS) {
    const compoundId = compoundIdBySlug.get(compound.slug);
    if (!compoundId) continue;
    for (const [useCaseSlug, score] of Object.entries(compound.scores)) {
      if (typeof score !== "number") continue;
      const useCaseId = useCaseIdBySlug.get(useCaseSlug);
      if (!useCaseId) continue;
      scoreRows.push({ compound_id: compoundId, use_case_id: useCaseId, score });
    }
  }

  const { error } = await supabase
    .from("compound_use_case_scores")
    .upsert(scoreRows, { onConflict: "compound_id,use_case_id" });
  if (error) throw error;
  console.info(`Upserted ${scoreRows.length} use-case scores`);
}

async function main() {
  console.info("Seeding Supabase...");
  await upsertCategories();
  await upsertUseCases();
  await upsertCompounds();
  await upsertScores();
  console.info("Seed complete.");
}

main().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
