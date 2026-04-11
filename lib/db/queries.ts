import { and, desc, eq, inArray, ilike } from "drizzle-orm";
import { db, schema } from "./client";

/**
 * Typed query helpers. Used by Server Components and Server Actions after
 * the Supabase + DATABASE_URL env vars are set. For user-scoped queries
 * that rely on RLS, prefer `lib/supabase/server.ts` instead.
 */

export async function getPublishedCompounds() {
  return db()
    .select()
    .from(schema.compounds)
    .where(eq(schema.compounds.published, true))
    .orderBy(schema.compounds.name);
}

export async function getCompoundBySlug(slug: string) {
  const [compound] = await db()
    .select()
    .from(schema.compounds)
    .where(and(eq(schema.compounds.slug, slug), eq(schema.compounds.published, true)))
    .limit(1);
  return compound ?? null;
}

export async function getCompoundsByCategory(
  category: (typeof schema.compoundCategoryEnum.enumValues)[number],
) {
  return db()
    .select()
    .from(schema.compounds)
    .where(
      and(eq(schema.compounds.category, category), eq(schema.compounds.published, true)),
    )
    .orderBy(schema.compounds.name);
}

export async function searchCompounds(query: string) {
  if (!query.trim()) return [];
  return db()
    .select()
    .from(schema.compounds)
    .where(
      and(
        eq(schema.compounds.published, true),
        ilike(schema.compounds.name, `%${query}%`),
      ),
    )
    .orderBy(schema.compounds.name)
    .limit(50);
}

export async function getLeaderboard(useCaseSlug: string, limit = 10) {
  const [useCase] = await db()
    .select()
    .from(schema.useCases)
    .where(eq(schema.useCases.slug, useCaseSlug))
    .limit(1);
  if (!useCase) return [];

  return db()
    .select({
      compound: schema.compounds,
      score: schema.compoundUseCaseScores.score,
    })
    .from(schema.compoundUseCaseScores)
    .innerJoin(
      schema.compounds,
      eq(schema.compounds.id, schema.compoundUseCaseScores.compoundId),
    )
    .where(
      and(
        eq(schema.compoundUseCaseScores.useCaseId, useCase.id),
        eq(schema.compounds.published, true),
      ),
    )
    .orderBy(desc(schema.compoundUseCaseScores.score))
    .limit(limit);
}

export async function getCompoundsBySlugs(slugs: string[]) {
  if (slugs.length === 0) return [];
  return db()
    .select()
    .from(schema.compounds)
    .where(
      and(
        inArray(schema.compounds.slug, slugs),
        eq(schema.compounds.published, true),
      ),
    );
}

export async function getPublishedProtocols() {
  return db()
    .select()
    .from(schema.protocols)
    .where(eq(schema.protocols.published, true))
    .orderBy(schema.protocols.name);
}

export async function getProtocolBySlug(slug: string) {
  const [protocol] = await db()
    .select()
    .from(schema.protocols)
    .where(and(eq(schema.protocols.slug, slug), eq(schema.protocols.published, true)))
    .limit(1);
  if (!protocol) return null;

  const items = await db()
    .select({
      compound: schema.compounds,
      role: schema.protocolCompounds.role,
      dosageNotes: schema.protocolCompounds.dosageNotes,
      orderIndex: schema.protocolCompounds.orderIndex,
    })
    .from(schema.protocolCompounds)
    .innerJoin(
      schema.compounds,
      eq(schema.compounds.id, schema.protocolCompounds.compoundId),
    )
    .where(eq(schema.protocolCompounds.protocolId, protocol.id))
    .orderBy(schema.protocolCompounds.orderIndex);

  return { protocol, items };
}

export async function getReviewsForCompound(compoundId: string) {
  return db()
    .select()
    .from(schema.reviews)
    .where(
      and(
        eq(schema.reviews.compoundId, compoundId),
        eq(schema.reviews.published, true),
      ),
    )
    .orderBy(desc(schema.reviews.createdAt))
    .limit(50);
}
