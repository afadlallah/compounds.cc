import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { href: "/database", label: "Database" },
  { href: "/a-to-z", label: "A–Z" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/protocols", label: "Protocols" },
  { href: "/compare", label: "Compare" },
  { href: "/match", label: "Match" },
  { href: "/chat", label: "Chat" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
          Compounds.cc
        </Link>
        <nav className="hidden items-center gap-5 text-xs font-medium uppercase tracking-wide md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/sign-in"
            className="rounded-md border border-border/60 px-3 py-1.5 text-xs font-medium uppercase tracking-wide hover:bg-muted"
          >
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
