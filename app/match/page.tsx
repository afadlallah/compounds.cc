import Link from "next/link";
import type { Metadata } from "next";
import { COMPOUNDS, USE_CASES, type UseCaseSlug } from "@/lib/data/seed-compounds";

type Props = {
  searchParams: Promise<{ goal?: string }>;
};

export const metadata: Metadata = {
  title: "Match",
  description: "Tell us your goal and see the best-matched compounds.",
};

export default async function MatchPage({ searchParams }: Props) {
  const { goal } = await searchParams;
  const useCase = USE_CASES.find((u) => u.slug === goal);

  const matches = useCase
    ? COMPOUNDS.map((c) => ({
        compound: c,
        score: c.scores[useCase.slug as UseCaseSlug] ?? 0,
      }))
        .filter((row) => row.score >= 50)
        .sort((a, b) => b.score - a.score)
    : [];

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <header className="mb-10">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Goal picker
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">Match</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Pick a goal. We&apos;ll rank compounds by our editorial score for that use case.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Choose a goal
        </h2>
        <div className="flex flex-wrap gap-2 text-xs">
          {USE_CASES.map((u) => {
            const isActive = u.slug === useCase?.slug;
            return (
              <Link
                key={u.slug}
                href={`/match?goal=${u.slug}`}
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
        </div>
      </section>

      {useCase && (
        <section>
          <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Ranked for {useCase.name.toLowerCase()}
          </h2>
          {matches.length === 0 ? (
            <p className="rounded-lg border border-border p-8 text-center text-sm text-muted-foreground">
              No strong matches in the seed data yet.
            </p>
          ) : (
            <ul className="space-y-2">
              {matches.map(({ compound, score }) => (
                <li key={compound.slug}>
                  <Link
                    href={`/substances/${compound.slug}`}
                    className="flex items-center justify-between gap-4 rounded-lg border border-border p-4 hover:bg-muted"
                  >
                    <div>
                      <p className="font-semibold tracking-tight">{compound.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{compound.summary}</p>
                    </div>
                    <span className="font-mono text-lg font-bold tabular-nums">{score}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </div>
  );
}
