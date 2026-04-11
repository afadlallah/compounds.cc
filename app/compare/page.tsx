import Link from "next/link";
import type { Metadata } from "next";
import { COMPOUNDS, USE_CASES } from "@/lib/data/seed-compounds";

type Props = {
  searchParams: Promise<{ a?: string; b?: string; c?: string; d?: string }>;
};

export const metadata: Metadata = {
  title: "Compare",
  description: "Compare compounds side by side.",
};

export default async function ComparePage({ searchParams }: Props) {
  const params = await searchParams;
  const slugs = [params.a, params.b, params.c, params.d].filter(
    (s): s is string => typeof s === "string" && s.length > 0,
  );
  const chosen = slugs
    .map((slug) => COMPOUNDS.find((c) => c.slug === slug))
    .filter((c): c is (typeof COMPOUNDS)[number] => Boolean(c));

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Side by side
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">Compare</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Add compounds to the URL as <code>?a=slug&amp;b=slug</code> (up to four).
        </p>
      </header>

      {chosen.length < 2 ? (
        <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          <p className="mb-4">Try one of these example comparisons:</p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <Link
              href="/compare?a=creatine-monohydrate&b=l-theanine"
              className="rounded-full border border-border px-3 py-1 hover:bg-muted"
            >
              Creatine vs L-theanine
            </Link>
            <Link
              href="/compare?a=ashwagandha&b=magnesium-glycinate&c=melatonin"
              className="rounded-full border border-border px-3 py-1 hover:bg-muted"
            >
              Ashwagandha vs Magnesium vs Melatonin
            </Link>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="w-40 py-3 text-left font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Field
                </th>
                {chosen.map((c) => (
                  <th key={c.slug} className="py-3 text-left">
                    <Link href={`/substances/${c.slug}`} className="font-semibold tracking-tight hover:underline">
                      {c.name}
                    </Link>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {c.category.replace("_", " ")}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <Row label="Evidence score" compounds={chosen} render={(c) => `${c.evidenceScore}/100`} />
              <Row label="Summary" compounds={chosen} render={(c) => c.summary} />
              <Row label="Verdict" compounds={chosen} render={(c) => c.quickVerdict} />
              <Row label="Dosage" compounds={chosen} render={(c) => c.dosageNotes} />
              <Row
                label="Top use case"
                compounds={chosen}
                render={(c) => {
                  const top = Object.entries(c.scores).sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0))[0];
                  if (!top) return "—";
                  const u = USE_CASES.find((x) => x.slug === top[0]);
                  return u ? `${u.name} (${top[1]})` : "—";
                }}
              />
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Row({
  label,
  compounds,
  render,
}: {
  label: string;
  compounds: (typeof COMPOUNDS)[number][];
  render: (c: (typeof COMPOUNDS)[number]) => string;
}) {
  return (
    <tr className="border-b border-border/50 align-top">
      <td className="py-3 pr-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </td>
      {compounds.map((c) => (
        <td key={c.slug} className="py-3 pr-4 text-sm">
          {render(c)}
        </td>
      ))}
    </tr>
  );
}
