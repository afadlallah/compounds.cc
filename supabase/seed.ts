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
import { SEED_PROTOCOLS } from "../lib/data/protocols";

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

function tagDisplayName(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

async function upsertTags() {
  const unique = [...new Set(COMPOUNDS.flatMap((c) => c.tags))].sort();
  const rows = unique.map((slug) => ({ slug, name: tagDisplayName(slug) }));
  if (rows.length === 0) {
    console.info("No tags to upsert");
    return;
  }
  const { error } = await supabase.from("tags").upsert(rows, { onConflict: "slug" });
  if (error) throw error;
  console.info(`Upserted ${rows.length} tags`);
}

async function upsertCompoundTags() {
  const [{ data: compoundRows }, { data: tagRows }] = await Promise.all([
    supabase.from("compounds").select("id, slug"),
    supabase.from("tags").select("id, slug"),
  ]);
  if (!compoundRows || !tagRows) return;

  const compoundIdBySlug = new Map(compoundRows.map((r) => [r.slug, r.id]));
  const tagIdBySlug = new Map(tagRows.map((r) => [r.slug, r.id]));

  const joinRows: Array<{ compound_id: string; tag_id: string }> = [];
  for (const compound of COMPOUNDS) {
    const compoundId = compoundIdBySlug.get(compound.slug);
    if (!compoundId) continue;
    for (const tagSlug of compound.tags) {
      const tagId = tagIdBySlug.get(tagSlug);
      if (!tagId) continue;
      joinRows.push({ compound_id: compoundId, tag_id: tagId });
    }
  }

  if (joinRows.length === 0) {
    console.info("No compound_tags to upsert");
    return;
  }
  const { error } = await supabase
    .from("compound_tags")
    .upsert(joinRows, { onConflict: "compound_id,tag_id" });
  if (error) throw error;
  console.info(`Upserted ${joinRows.length} compound tag links`);
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

async function upsertProtocols() {
  const rows = SEED_PROTOCOLS.map((p) => ({
    slug: p.slug,
    name: p.name,
    description: p.description,
    goal: p.goal,
    published: true,
  }));
  const { error } = await supabase
    .from("protocols")
    .upsert(rows, { onConflict: "slug" });
  if (error) throw error;
  console.info(`Upserted ${rows.length} protocols`);
}

async function upsertProtocolCompounds() {
  const [{ data: protocolRows }, { data: compoundRows }] = await Promise.all([
    supabase.from("protocols").select("id, slug"),
    supabase.from("compounds").select("id, slug"),
  ]);
  if (!protocolRows || !compoundRows) return;

  const protocolIdBySlug = new Map(protocolRows.map((r) => [r.slug, r.id]));
  const compoundIdBySlug = new Map(compoundRows.map((r) => [r.slug, r.id]));

  const joinRows: Array<{
    protocol_id: string;
    compound_id: string;
    role: string;
    dosage_notes: string;
    order_index: number;
  }> = [];

  for (const protocol of SEED_PROTOCOLS) {
    const protocolId = protocolIdBySlug.get(protocol.slug);
    if (!protocolId) continue;
    for (const compound of protocol.compounds) {
      const compoundId = compoundIdBySlug.get(compound.slug);
      if (!compoundId) continue;
      joinRows.push({
        protocol_id: protocolId,
        compound_id: compoundId,
        role: compound.role,
        dosage_notes: compound.dosageNotes,
        order_index: compound.orderIndex,
      });
    }
  }

  const { error } = await supabase
    .from("protocol_compounds")
    .upsert(joinRows, { onConflict: "protocol_id,compound_id" });
  if (error) throw error;
  console.info(`Upserted ${joinRows.length} protocol-compound links`);
}

async function main() {
  console.info("Seeding Supabase...");
  await upsertCategories();
  await upsertUseCases();
  await upsertCompounds();
  await upsertScores();
  await upsertTags();
  await upsertCompoundTags();
  await upsertProtocols();
  await upsertProtocolCompounds();
  console.info("Seed complete.");
}

main().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
