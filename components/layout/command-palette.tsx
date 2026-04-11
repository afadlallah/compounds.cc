"use client";

import { Command } from "cmdk";
import {
  Database,
  ListOrdered,
  FlaskConical,
  Scale,
  Sparkles,
  MessageSquare,
  Library,
  Moon,
  Sun,
  Search,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type SearchIndexItem = {
  slug: string;
  name: string;
  category: string;
};

const NAV_PAGES = [
  { href: "/database", label: "Database", icon: Database },
  { href: "/leaderboard", label: "Leaderboard", icon: ListOrdered },
  { href: "/protocols", label: "Protocols", icon: FlaskConical },
  { href: "/compare", label: "Compare", icon: Scale },
  { href: "/match", label: "Match", icon: Sparkles },
  { href: "/chat", label: "Chat", icon: MessageSquare },
  { href: "/a-to-z", label: "A–Z", icon: Library },
] as const;

/** Local map so the client bundle does not import full seed compounds. */
const CATEGORY_LABELS: Record<string, string> = {
  peptide: "Peptide",
  supplement: "Supplement",
  nootropic: "Nootropic",
  sarm: "SARM",
  adaptogen: "Adaptogen",
  glp: "GLP-1",
  racetam: "Racetam",
  amino_acid: "Amino Acid",
  medicine: "Medicine",
  herb: "Herb",
  growth_hormone: "Growth Hormone",
};

function categoryLabel(slug: string) {
  return CATEGORY_LABELS[slug] ?? slug.replace(/_/g, " ");
}

export function CommandPalette() {
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState<SearchIndexItem[] | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open || index !== null || loadFailed) return;
    let cancelled = false;
    void fetch("/api/search-index")
      .then((res) => {
        if (!res.ok) throw new Error("bad status");
        return res.json() as Promise<SearchIndexItem[]>;
      })
      .then((data) => {
        if (!cancelled) setIndex(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (!cancelled) setLoadFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [open, index, loadFailed]);

  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [open]);

  const navigate = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router],
  );

  const toggleTheme = useCallback(() => {
    const current = mounted ? (theme === "system" ? resolvedTheme : theme) : "light";
    const isDark = current === "dark";
    setTheme(isDark ? "light" : "dark");
    setOpen(false);
  }, [mounted, theme, resolvedTheme, setTheme]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <button
        type="button"
        aria-label="Close command palette"
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <Command
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-lg"
        label="Command palette"
        loop
      >
        <div className="flex items-center gap-2 border-b border-border px-3">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
          <Command.Input
            ref={inputRef}
            placeholder="Search compounds or jump to a page…"
            className="flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <Command.List className="max-h-[min(55vh,380px)] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-xs text-muted-foreground">
            No matches.
          </Command.Empty>

          <Command.Group
            heading="Pages"
            className="px-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5"
          >
            {NAV_PAGES.map(({ href, label, icon: Icon }) => (
              <Command.Item
                key={href}
                value={`${label} ${href}`}
                onSelect={() => navigate(href)}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm",
                  "aria-selected:bg-accent aria-selected:text-accent-foreground",
                )}
              >
                <Icon className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                <span>{label}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group
            heading="Compounds"
            className="px-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5"
          >
            {index === null && !loadFailed ? (
              <Command.Loading className="py-6 text-center text-xs text-muted-foreground">
                Loading index…
              </Command.Loading>
            ) : null}
            {loadFailed ? (
              <div className="py-4 text-center text-xs text-muted-foreground">
                Could not load compound index.
              </div>
            ) : null}
            {index?.map((c) => (
              <Command.Item
                key={c.slug}
                value={`${c.name} ${c.slug} ${c.category} ${categoryLabel(c.category)}`}
                onSelect={() => navigate(`/substances/${c.slug}`)}
                className={cn(
                  "flex cursor-pointer flex-col gap-0.5 rounded-md px-2 py-2 text-sm",
                  "aria-selected:bg-accent aria-selected:text-accent-foreground",
                )}
              >
                <span className="font-medium">{c.name}</span>
                <span className="text-xs text-muted-foreground">{categoryLabel(c.category)}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group
            heading="Preferences"
            className="px-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5"
          >
            <Command.Item
              value="toggle dark mode theme appearance"
              onSelect={toggleTheme}
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm",
                "aria-selected:bg-accent aria-selected:text-accent-foreground",
              )}
            >
              {mounted && (theme === "system" ? resolvedTheme : theme) === "dark" ? (
                <Sun className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
              ) : (
                <Moon className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
              )}
              <span>Toggle dark mode</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
        <div className="border-t border-border px-3 py-2 text-[10px] text-muted-foreground">
          <kbd className="rounded border border-border bg-muted px-1 font-mono">↵</kbd> to open ·{" "}
          <kbd className="rounded border border-border bg-muted px-1 font-mono">esc</kbd> to close
        </div>
      </Command>
    </div>
  );
}
