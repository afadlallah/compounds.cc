import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SEED_PROTOCOLS } from "@/lib/data/protocols";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SEED_PROTOCOLS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const protocol = SEED_PROTOCOLS.find((p) => p.slug === slug);
  if (!protocol) return { title: "Not found" };
  return {
    title: protocol.name,
    description: protocol.goal,
  };
}

const ROLE_ORDER = ["core", "adjunct", "optional"] as const;
const ROLE_LABELS: Record<string, string> = {
  core: "Core compounds",
  adjunct: "Adjunct compounds",
  optional: "Optional compounds",
};

export default async function ProtocolPage({ params }: Props) {
  const { slug } = await params;
  const protocol = SEED_PROTOCOLS.find((p) => p.slug === slug);
  if (!protocol) notFound();

  const grouped = ROLE_ORDER.map((role) => ({
    role,
    label: ROLE_LABELS[role],
    compounds: protocol.compounds
      .filter((c) => c.role === role)
      .sort((a, b) => a.orderIndex - b.orderIndex),
  })).filter((g) => g.compounds.length > 0);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/protocols" className="hover:text-foreground">
          Protocols
        </Link>
        <span className="mx-2">/</span>
        <span className="uppercase tracking-wide">{protocol.name}</span>
      </nav>

      <header className="mb-10 border-b border-border pb-10">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Protocol
        </p>
        <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">
          {protocol.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
          {protocol.goal}
        </p>
      </header>

      <Section label="About this protocol">
        <p>{protocol.description}</p>
      </Section>

      {grouped.map((group) => (
        <Section key={group.role} label={group.label}>
          <ul className="space-y-4">
            {group.compounds.map((compound) => (
              <li key={compound.slug} className="border-b border-border/50 pb-4 last:border-b-0">
                <Link
                  href={`/substances/${compound.slug}`}
                  className="font-medium hover:underline"
                >
                  {compound.slug}
                </Link>
                <p className="mt-1 text-xs text-muted-foreground">
                  {compound.dosageNotes}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <aside className="mt-12 rounded-lg border border-amber-500/30 bg-amber-500/5 p-5 text-xs text-amber-900 dark:text-amber-200">
        <p className="font-semibold uppercase tracking-wide">Medical disclaimer</p>
        <p className="mt-2 leading-relaxed">
          Nothing on this page is medical advice. Evidence quality varies across
          the compounds listed. Individual responses differ significantly.
          Consult a qualified clinician before starting, stopping, or changing
          any compound or protocol.
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
