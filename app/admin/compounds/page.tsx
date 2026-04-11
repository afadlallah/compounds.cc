import Link from "next/link";
import type { Metadata } from "next";
import { requireAdmin, tryDb } from "@/lib/admin/guard";
import { AdminHeader, DbError, EmptyState } from "../_components/admin-page";

export const metadata: Metadata = { title: "Compounds · Admin" };

type Row = {
  id: string;
  slug: string;
  name: string;
  category: string;
  evidence_score: number;
  published: boolean;
  updated_at: string;
};

export default async function AdminCompoundsPage() {
  const { supabase } = await requireAdmin();
  const result = await tryDb(async () => {
    const { data, error } = await supabase
      .from("compounds")
      .select("id, slug, name, category, evidence_score, published, updated_at")
      .order("name");
    if (error) throw new Error(error.message);
    return (data ?? []) as Row[];
  });

  return (
    <div>
      <AdminHeader
        title="Compounds"
        subtitle="Library"
        action={{ href: "/admin/compounds/new", label: "New compound" }}
      />

      {!result.ok ? (
        <DbError error={result.error} />
      ) : result.data.length === 0 ? (
        <EmptyState
          title="No compounds yet"
          description="Run `pnpm db:seed` to load the initial 8 compounds, or create one manually."
        />
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-left">
              <tr>
                <Th>Name</Th>
                <Th>Category</Th>
                <Th>Score</Th>
                <Th>Status</Th>
                <Th>Updated</Th>
                <Th className="text-right">Actions</Th>
              </tr>
            </thead>
            <tbody>
              {result.data.map((row) => (
                <tr key={row.id} className="border-t border-border/60">
                  <Td>
                    <Link
                      href={`/admin/compounds/${row.id}`}
                      className="font-semibold hover:underline"
                    >
                      {row.name}
                    </Link>
                    <p className="font-mono text-[10px] text-muted-foreground">
                      {row.slug}
                    </p>
                  </Td>
                  <Td className="text-xs uppercase tracking-wide text-muted-foreground">
                    {row.category.replace("_", " ")}
                  </Td>
                  <Td className="font-mono tabular-nums">{row.evidence_score}</Td>
                  <Td>
                    {row.published ? (
                      <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                        Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                        Draft
                      </span>
                    )}
                  </Td>
                  <Td className="text-xs text-muted-foreground">
                    {new Date(row.updated_at).toLocaleDateString()}
                  </Td>
                  <Td className="text-right">
                    <Link
                      href={`/admin/compounds/${row.id}`}
                      className="text-xs font-medium text-muted-foreground hover:text-foreground"
                    >
                      Edit →
                    </Link>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Th({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <th
      className={`px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground ${className ?? ""}`}
    >
      {children}
    </th>
  );
}

function Td({ children, className }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3 align-top ${className ?? ""}`}>{children}</td>;
}
