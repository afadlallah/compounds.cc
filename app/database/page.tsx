import type { Metadata } from "next";
import { COMPOUNDS, CATEGORIES } from "@/lib/data/seed-compounds";
import CompoundGrid from "./compound-grid";

export const metadata: Metadata = {
  title: "Database",
  description: "Every compound in the library, searchable and filtered by category.",
};

export default function DatabasePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-10">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Library
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
          Compound database
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          {COMPOUNDS.length} compounds across {CATEGORIES.length} categories.
          Click a category below to filter.
        </p>
      </header>

      <CompoundGrid compounds={COMPOUNDS} categories={CATEGORIES} />
    </div>
  );
}
