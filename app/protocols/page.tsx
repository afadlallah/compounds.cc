import Link from "next/link";
import type { Metadata } from "next";
import { SEED_PROTOCOLS } from "@/lib/data/protocols";

export const metadata: Metadata = {
  title: "Protocols",
  description: "Curated compound stacks grouped by goal.",
};

export default function ProtocolsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="mb-10">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Stacks
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
          Protocols
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Curated compound stacks for common goals. Each protocol groups
          compounds by role and includes dosage context.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {SEED_PROTOCOLS.map((protocol) => (
          <Link
            key={protocol.slug}
            href={`/protocols/${protocol.slug}`}
            className="group rounded-lg border border-border p-5 transition-colors hover:bg-muted/50"
          >
            <p className="font-mono text-sm font-semibold group-hover:underline">
              {protocol.name}
            </p>
            <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
              {protocol.goal}
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {protocol.compounds.length} compounds
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
