import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SuggestForm } from "@/components/forms/suggest-form";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <section className="mb-24 grid gap-10 md:grid-cols-[2fr_1fr] md:items-end">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Evidence-forward reference library
          </p>
          <h1 className="font-mono text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Compounds.cc —
            <br />
            <span className="text-muted-foreground">one place to read the research.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
            An open, neutral reference for peptides, nootropics, supplements, and other
            compounds discussed in the scientific literature. Short verdicts, linked
            research, dosage notes, and community reviews — so you can form your own view
            before talking to a clinician.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/database"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Browse the database
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/match"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
            >
              Find your match
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
            Explore
          </h2>
          <Link href="/database" className="text-xs text-muted-foreground hover:text-foreground">
            View all →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group rounded-lg border border-border p-5 transition-colors hover:bg-muted"
            >
              <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {f.label}
              </p>
              <p className="text-lg font-semibold tracking-tight">{f.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-muted/30 p-8">
        <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
          What this site is — and isn&apos;t
        </h2>
        <div className="mt-4 grid gap-6 text-sm text-muted-foreground md:grid-cols-2">
          <p>
            <strong className="text-foreground">It is:</strong> a neutral summary of
            published research, organized so you can compare compounds by what they&apos;re
            studied for, read the caveats, and see what other readers experienced.
          </p>
          <p>
            <strong className="text-foreground">It is not:</strong> medical advice, a
            diagnosis, a prescription, or an endorsement of any specific product or
            protocol. Evidence is uneven. Talk to a clinician.
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-xl border border-border bg-muted/30 p-8">
        <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
          Missing a compound?
        </h2>
        <p className="mt-2 mb-4 text-sm text-muted-foreground">
          Suggest a compound you&apos;d like us to add to the database.
        </p>
        <SuggestForm />
      </section>
    </div>
  );
}

const FEATURES = [
  {
    href: "/database",
    label: "01",
    title: "Database",
    description: "Every compound, filtered by category and use case.",
  },
  {
    href: "/leaderboard",
    label: "02",
    title: "Leaderboard",
    description: "Top-rated compounds per use case — focus, sleep, recovery.",
  },
  {
    href: "/protocols",
    label: "03",
    title: "Protocols",
    description: "Curated stacks for common goals, with role and dosage notes.",
  },
  {
    href: "/chat",
    label: "04",
    title: "AI recommender",
    description: "Ask a grounded AI that reads the database for you.",
  },
] as const;
