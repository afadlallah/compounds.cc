import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { UserMenu } from "./user-menu";

const nav = [
  { href: "/database", label: "Database" },
  { href: "/a-to-z", label: "A\u2013Z" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/protocols", label: "Protocols" },
  { href: "/compare", label: "Compare" },
  { href: "/match", label: "Match" },
  { href: "/chat", label: "Chat" },
] as const;

async function getUser() {
  try {
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return null;

    const { data: profile } = await supabase
      .from("profiles")
      .select("display_name, handle, avatar_url, role")
      .eq("id", user.id)
      .single();

    return {
      displayName: profile?.display_name ?? null,
      handle: profile?.handle ?? null,
      avatarUrl: profile?.avatar_url ?? user.user_metadata?.avatar_url ?? null,
      isAdmin: profile?.role === "admin",
    };
  } catch {
    return null;
  }
}

export async function SiteHeader() {
  const user = await getUser();

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
          {user ? (
            <UserMenu user={user} />
          ) : (
            <Link
              href="/sign-in"
              className="rounded-md border border-border/60 px-3 py-1.5 text-xs font-medium uppercase tracking-wide hover:bg-muted"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
