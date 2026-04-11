"use client";

import Link from "next/link";
import { useState, useMemo, useRef, useEffect } from "react";
import type { SeedCompound, CompoundCategory } from "@/lib/data/seed-compounds";

type Category = { slug: CompoundCategory; name: string };

export default function CompoundGrid({
  compounds,
  categories,
}: {
  compounds: SeedCompound[];
  categories: Category[];
}) {
  const [active, setActive] = useState<CompoundCategory | null>(null);
  const [visible, setVisible] = useState(true);
  const pendingCategory = useRef<CompoundCategory | null>(null);

  const filtered = useMemo(
    () => (active ? compounds.filter((c) => c.category === active) : compounds),
    [active, compounds],
  );

  function selectCategory(slug: CompoundCategory | null) {
    if (slug === active) return;
    pendingCategory.current = slug;
    setVisible(false);
  }

  useEffect(() => {
    if (!visible) {
      const id = setTimeout(() => {
        setActive(pendingCategory.current);
        setVisible(true);
      }, 150);
      return () => clearTimeout(id);
    }
  }, [visible]);

  return (
    <>
      <nav aria-label="Category filters" className="mb-8 flex flex-wrap gap-2 text-xs">
        <button
          onClick={() => selectCategory(null)}
          className={`cursor-pointer rounded-full border px-3 py-1 font-medium uppercase tracking-wide transition-colors ${
            active === null
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted-foreground hover:border-foreground/40"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => selectCategory(active === c.slug ? null : c.slug)}
            className={`cursor-pointer rounded-full border px-3 py-1 font-medium uppercase tracking-wide transition-colors ${
              active === c.slug
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/40"
            }`}
          >
            {c.name}
          </button>
        ))}
      </nav>

      <p className="mb-4 font-mono text-xs text-muted-foreground">
        {filtered.length} compound{filtered.length !== 1 ? "s" : ""}
        {active && (
          <>
            {" in "}
            <span className="text-foreground">
              {categories.find((c) => c.slug === active)?.name}
            </span>
          </>
        )}
      </p>

      <ul
        className="grid gap-4 transition-opacity duration-150 sm:grid-cols-2 lg:grid-cols-3"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {filtered.map((compound) => {
          const categoryLabel =
            categories.find((c) => c.slug === compound.category)?.name ?? compound.category;
          return (
            <li key={compound.slug}>
              <Link
                href={`/substances/${compound.slug}`}
                className="group block h-full rounded-lg border border-border p-5 transition-colors hover:bg-muted"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {categoryLabel}
                  </span>
                  <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                    {compound.evidenceScore}/100
                  </span>
                </div>
                <h2 className="text-lg font-semibold tracking-tight">{compound.name}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  {compound.summary}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
