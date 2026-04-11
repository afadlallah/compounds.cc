import Link from "next/link";
import type { Metadata } from "next";
import { requireAdmin, tryDb } from "@/lib/admin/guard";
import { AdminHeader, DbError, EmptyState } from "../_components/admin-page";

export const metadata: Metadata = { title: "Protocols · Admin" };

type Protocol = {
  id: string;
  slug: string;
  name: string;
  goal: string | null;
  published: boolean;
  updated_at: string;
};

export default async function AdminProtocolsPage() {
  const { supabase } = await requireAdmin();

  const result = await tryDb(async () => {
    const { data, error } = await supabase
      .from("protocols")
      .select("id, slug, name, goal, published, updated_at")
      .order("name");
    if (error) throw new Error(error.message);
    return (data ?? []) as Protocol[];
  });

  return (
    <div>
      <AdminHeader
        title="Protocols"
        subtitle="Stacks"
        action={{ href: "/admin/protocols/new", label: "New protocol" }}
      />

      {!result.ok ? (
        <DbError error={result.error} />
      ) : result.data.length === 0 ? (
        <EmptyState
          title="No protocols yet"
          description="Create your first protocol or run `bun db:seed` to populate seed data."
        />
      ) : (
        <ul className="divide-y divide-border rounded-lg border border-border">
          {result.data.map((row) => (
            <li key={row.id}>
              <Link
                href={`/admin/protocols/${row.id}`}
                className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-muted/50"
              >
                <div>
                  <p className="font-semibold">{row.name}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{row.slug}</p>
                </div>
                <span
                  className={
                    row.published
                      ? "inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-300"
                      : "inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground"
                  }
                >
                  {row.published ? "Published" : "Draft"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
