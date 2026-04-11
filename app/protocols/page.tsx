import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protocols",
  description: "Curated compound stacks grouped by goal.",
};

export default function ProtocolsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="mb-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Stacks
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
          Protocols
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Curated compound stacks for common goals will appear here once the database
          layer is wired in.
        </p>
      </header>
      <div className="rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
        Protocol listings are pending database integration.
      </div>
    </div>
  );
}
