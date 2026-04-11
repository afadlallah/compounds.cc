import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COMPOUNDS, CATEGORIES, USE_CASES } from "@/lib/data/seed-compounds";
import { compoundJsonLd } from "@/lib/seo/jsonld";
import { createClient } from "@/lib/supabase/server";
import { ReviewsSection } from "./reviews-section";
import { ReviewForm } from "./review-form";
import { BookmarkButton } from "./bookmark-button";
import { ProtocolMentions } from "./protocol-mentions";
import { ShareRow } from "@/components/compound/share-row";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return COMPOUNDS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const compound = COMPOUNDS.find((c) => c.slug === slug);
  if (!compound) return { title: "Not found" };
  return {
    title: compound.name,
    description: compound.summary,
  };
}

export default async function CompoundPage({ params }: Props) {
  const { slug } = await params;
  const compound = COMPOUNDS.find((c) => c.slug === slug);
  if (!compound) notFound();

  let isSignedIn = false;
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    isSignedIn = !!user;
  } catch {
    // Supabase not configured — treat as signed out
  }

  const categoryLabel =
    CATEGORIES.find((c) => c.slug === compound.category)?.name ?? compound.category;

  const scoreRows = Object.entries(compound.scores)
    .map(([useCaseSlug, score]) => {
      const useCase = USE_CASES.find((u) => u.slug === useCaseSlug);
      return { useCase, score: score ?? 0 };
    })
    .sort((a, b) => b.score - a.score);

  const jsonLd = compoundJsonLd(compound);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: server-rendered JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="mb-6 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/database" className="hover:text-foreground">
          Database
        </Link>
        <span className="mx-2">/</span>
        <span className="uppercase tracking-wide">{categoryLabel}</span>
      </nav>

      <div className="mb-4">
        <ShareRow slug={compound.slug} name={compound.name} />
      </div>

      <header className="mb-10 border-b border-border pb-10">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {categoryLabel}
        </p>
        <div className="flex items-start justify-between gap-4">
          <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">
            {compound.name}
          </h1>
          <BookmarkButton
            compoundId=""
            slug={compound.slug}
            initialBookmarked={false}
            isSignedIn={isSignedIn}
          />
        </div>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
          {compound.summary}
        </p>
      </header>

      <Section label="Quick verdict">
        <p>{compound.quickVerdict}</p>
      </Section>

      <Section label="Evidence score">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-4xl font-bold tabular-nums">
            {compound.evidenceScore}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            / 100
          </span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          A rough internal score reflecting quantity, quality, and consistency of human
          evidence. Not a clinical recommendation.
        </p>
      </Section>

      <Section label="What the research shows">
        <p>{compound.researchNotes}</p>
      </Section>

      <Section label="Benefits">
        <ul className="list-disc space-y-1 pl-5">
          {compound.benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </Section>

      <Section label="Dosage notes">
        <p>{compound.dosageNotes}</p>
      </Section>

      <Section label="Side effects">
        <ul className="list-disc space-y-1 pl-5">
          {compound.sideEffects.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Section>

      <Section label="Who should be cautious">
        <p>{compound.cautions}</p>
      </Section>

      <Section label="What this page cannot tell you">
        <p>{compound.caveats}</p>
      </Section>

      {scoreRows.length > 0 && (
        <Section label="Leaderboard scores">
          <ul className="space-y-2 text-sm">
            {scoreRows.map(({ useCase, score }) =>
              useCase ? (
                <li
                  key={useCase.slug}
                  className="flex items-center justify-between border-b border-border/50 pb-2 last:border-b-0"
                >
                  <span>{useCase.name}</span>
                  <span className="font-mono tabular-nums">{score}</span>
                </li>
              ) : null,
            )}
          </ul>
        </Section>
      )}

      <ProtocolMentions compoundSlug={compound.slug} />
      <ReviewsSection compoundSlug={compound.slug} />
      <ReviewForm compoundId="" slug={compound.slug} isSignedIn={isSignedIn} />

      <aside className="mt-12 rounded-lg border border-amber-500/30 bg-amber-500/5 p-5 text-xs text-amber-900 dark:text-amber-200">
        <p className="font-semibold uppercase tracking-wide">Medical disclaimer</p>
        <p className="mt-2 leading-relaxed">
          Nothing on this page is medical advice. Evidence is uneven. Individual responses
          vary. Consult a qualified clinician before starting, stopping, or changing any
          compound.
        </p>
      </aside>
    </article>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </h2>
      <div className="text-sm leading-relaxed">{children}</div>
    </section>
  );
}
