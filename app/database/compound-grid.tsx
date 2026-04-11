"use client";

import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useMemo, useCallback } from "react";
import { cn } from "@/lib/utils";
import type { SeedCompound, CompoundCategory } from "@/lib/data/seed-compounds";

type Category = { slug: CompoundCategory; name: string };

function parseCategoryParam(
  raw: string | null,
  categories: Category[],
): CompoundCategory | null {
  if (!raw) return null;
  return categories.some((c) => c.slug === raw) ? (raw as CompoundCategory) : null;
}

function tagLabel(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

export default function CompoundGrid({
  compounds,
  categories,
  tags,
}: {
  compounds: SeedCompound[];
  categories: Category[];
  tags: string[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const validTagSet = useMemo(() => new Set(tags), [tags]);

  const active = useMemo(
    () => parseCategoryParam(searchParams.get("cat"), categories),
    [searchParams, categories],
  );

  const activeTags = useMemo(() => {
    return searchParams.getAll("tag").filter((t) => validTagSet.has(t));
  }, [searchParams, validTagSet]);

  const replaceQuery = useCallback(
    (params: URLSearchParams) => {
      const q = params.toString();
      router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
    },
    [router, pathname],
  );

  const setCategory = useCallback(
    (next: CompoundCategory | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (next) params.set("cat", next);
      else params.delete("cat");
      replaceQuery(params);
    },
    [searchParams, replaceQuery],
  );

  const selectCategory = useCallback(
    (slug: CompoundCategory | null) => {
      if (slug === null) {
        setCategory(null);
        return;
      }
      setCategory(active === slug ? null : slug);
    },
    [active, setCategory],
  );

  const toggleTag = useCallback(
    (tag: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const current = params.getAll("tag");
      params.delete("tag");
      const next = current.includes(tag)
        ? current.filter((t) => t !== tag)
        : [...current, tag];
      next.filter((t) => validTagSet.has(t)).forEach((t) => params.append("tag", t));
      replaceQuery(params);
    },
    [searchParams, replaceQuery, validTagSet],
  );

  const baseFiltered = useMemo(
    () => (active ? compounds.filter((c) => c.category === active) : compounds),
    [active, compounds],
  );

  const filtered = useMemo(() => {
    if (activeTags.length === 0) return baseFiltered;
    return baseFiltered.filter((c) => activeTags.every((t) => c.tags.includes(t)));
  }, [baseFiltered, activeTags]);

  return (
    <>
      <nav aria-label="Category filters" className="mb-4 flex flex-wrap gap-2 text-xs">
        <button
          type="button"
          onClick={() => selectCategory(null)}
          className={cn(
            "cursor-pointer rounded-full border px-3 py-1 font-medium uppercase tracking-wide transition-colors",
            active === null
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted-foreground hover:border-foreground/40",
          )}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            type="button"
            key={c.slug}
            onClick={() => selectCategory(c.slug)}
            className={cn(
              "cursor-pointer rounded-full border px-3 py-1 font-medium uppercase tracking-wide transition-colors",
              active === c.slug
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/40",
            )}
          >
            {c.name}
          </button>
        ))}
      </nav>

      <nav aria-label="Tag filters" className="mb-8 flex flex-wrap gap-1.5 text-[11px]">
        {tags.map((tag) => {
          const on = activeTags.includes(tag);
          return (
            <button
              type="button"
              key={tag}
              onClick={() => toggleTag(tag)}
              className={cn(
                "cursor-pointer rounded-full px-2 py-0.5 font-medium tracking-wide transition-colors",
                on
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {tagLabel(tag)}
            </button>
          );
        })}
      </nav>

      <p className="mb-4 font-mono text-xs text-muted-foreground">
        {filtered.length} compound{filtered.length !== 1 ? "s" : ""}
        {activeTags.length > 0
          ? `, ${activeTags.length} tag${activeTags.length !== 1 ? "s" : ""} active`
          : ""}
        {active && (
          <>
            {" in "}
            <span className="text-foreground">
              {categories.find((c) => c.slug === active)?.name}
            </span>
          </>
        )}
      </p>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
