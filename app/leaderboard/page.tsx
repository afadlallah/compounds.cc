import Link from "next/link";
import type { Metadata } from "next";
import { COMPOUNDS, USE_CASES, type UseCaseSlug } from "@/lib/data/seed-compounds";

type Props = {
  searchParams: Promise<{ use?: string }>;
};

export const metadata: Metadata = {
  title: "Leaderboard",
  description: "Top-rated compounds by use case, scored from the research literature.",
};

export default async function LeaderboardPage({ searchParams }: Props) {
  const { use } = await searchParams;
  const activeSlug: UseCaseSlug =
    USE_CASES.find((u) => u.slug === use)?.slug ?? "sleep";
  const active = USE_CASES.find((u) => u.slug === activeSlug)!;

  const ranked = COMPOUNDS.map((c) => ({
    compound: c,
    score: c.scores[activeSlug] ?? 0,
  }))
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="mb-10">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Ranked
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
          Leaderboard
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Top-rated compounds per use case. Scores are editorial summaries of the
          evidence, not clinical endpoints.
        </p>
      </header>

      <nav aria-label="Use case tabs" className="mb-8 flex flex-wrap gap-2 text-xs">
        {USE_CASES.map((u) => {
          const isActive = u.slug === activeSlug;
          return (
            <Link
              key={u.slug}
              href={`/leaderboard?use=${u.slug}`}
              className={
                isActive
                  ? "rounded-full bg-foreground px-3 py-1 font-medium uppercase tracking-wide text-background"
                  : "rounded-full border border-border px-3 py-1 font-medium uppercase tracking-wide text-muted-foreground hover:bg-muted"
              }
            >
              {u.name}
            </Link>
          );
        })}
      </nav>

      <section>
        <h2 className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Best for {active.name.toLowerCase()}
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">{active.description}</p>
        {ranked.length === 0 ? (
          <p className="rounded-lg border border-border p-8 text-center text-sm text-muted-foreground">
            No scored compounds yet for this use case.
          </p>
        ) : (
          <ol className="space-y-2">
            {ranked.map(({ compound, score }, index) => (
              <li key={compound.slug}>
                <Link
                  href={`/substances/${compound.slug}`}
                  className="flex items-center justify-between gap-4 rounded-lg border border-border p-4 hover:bg-muted"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-lg font-bold tabular-nums text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-semibold tracking-tight">{compound.name}</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {compound.category.replace("_", " ")}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-lg font-bold tabular-nums">{score}</span>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </section>
    </div>
  );
}
