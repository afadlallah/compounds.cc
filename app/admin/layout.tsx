import Link from "next/link";
import { requireAdmin } from "@/lib/admin/guard";

export const dynamic = "force-dynamic";

const nav = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/compounds", label: "Compounds" },
  { href: "/admin/protocols", label: "Protocols" },
  { href: "/admin/scores", label: "Scores" },
  { href: "/admin/reviews", label: "Reviews" },
  { href: "/admin/suggestions", label: "Suggestions" },
  { href: "/admin/subscribers", label: "Subscribers" },
  { href: "/admin/audit-log", label: "Audit log" },
] as const;

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { profile } = await requireAdmin();

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-[200px_1fr]">
      <aside className="md:sticky md:top-20 md:self-start">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Admin · {profile.display_name ?? profile.handle ?? "you"}
        </p>
        <nav className="flex flex-col gap-1 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 text-[11px] leading-relaxed text-amber-900 dark:text-amber-200">
          You are editing production content. Every write is recorded in the
          audit log.
        </div>
      </aside>
      <div>{children}</div>
    </div>
  );
}
