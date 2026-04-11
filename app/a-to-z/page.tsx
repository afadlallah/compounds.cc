import Link from "next/link";
import type { Metadata } from "next";
import { COMPOUNDS } from "@/lib/data/seed-compounds";

export const metadata: Metadata = {
  title: "A–Z",
  description: "Alphabetical index of every compound in the library.",
};

export default function AtoZPage() {
  const groups = new Map<string, typeof COMPOUNDS>();
  for (const compound of COMPOUNDS) {
    const letter = compound.name[0].toUpperCase();
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter)!.push(compound);
  }
  const sortedGroups = [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="mb-10">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Index
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">A–Z</h1>
      </header>
      <div className="space-y-10">
        {sortedGroups.map(([letter, items]) => (
          <section key={letter}>
            <h2 className="mb-3 font-mono text-lg font-bold tracking-tight">{letter}</h2>
            <ul className="space-y-1 border-t border-border">
              {items
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((c) => (
                  <li
                    key={c.slug}
                    className="flex items-center justify-between border-b border-border/50 py-2"
                  >
                    <Link
                      href={`/substances/${c.slug}`}
                      className="text-sm hover:text-foreground"
                    >
                      {c.name}
                    </Link>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {c.category.replace("_", " ")}
                    </span>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
