import type { Metadata } from "next";
import { requireAdmin, tryDb } from "@/lib/admin/guard";
import { AdminHeader, DbError, EmptyState } from "../_components/admin-page";
import { SuggestionActions } from "./suggestion-actions";

export const metadata: Metadata = { title: "Suggestions · Admin" };

type Suggestion = {
  id: string;
  compound_name: string;
  status: "pending" | "accepted" | "rejected";
  submitted_ip: string | null;
  created_at: string;
};

export default async function AdminSuggestionsPage() {
  const { supabase } = await requireAdmin();

  const result = await tryDb(async () => {
    const { data, error } = await supabase
      .from("suggestions")
      .select("id, compound_name, status, submitted_ip, created_at")
      .order("created_at", { ascending: false })
      .limit(200);
    if (error) throw new Error(error.message);
    return (data ?? []) as Suggestion[];
  });

  return (
    <div>
      <AdminHeader title="Suggestions" subtitle="Queue" />

      {!result.ok ? (
        <DbError error={result.error} />
      ) : result.data.length === 0 ? (
        <EmptyState
          title="No suggestions yet"
          description="Compound suggestions from the public form will appear here."
        />
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-left">
              <tr>
                <Th>Name</Th>
                <Th>Status</Th>
                <Th>Submitted</Th>
                <Th>IP</Th>
                <Th className="text-right">Actions</Th>
              </tr>
            </thead>
            <tbody>
              {result.data.map((row) => (
                <tr key={row.id} className="border-t border-border/60">
                  <Td className="font-semibold">{row.compound_name}</Td>
                  <Td>
                    <StatusBadge status={row.status} />
                  </Td>
                  <Td className="text-xs text-muted-foreground">
                    {new Date(row.created_at).toLocaleDateString()}
                  </Td>
                  <Td className="font-mono text-[10px] text-muted-foreground">
                    {row.submitted_ip ?? "—"}
                  </Td>
                  <Td className="text-right">
                    {row.status === "pending" && <SuggestionActions id={row.id} />}
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

function StatusBadge({ status }: { status: Suggestion["status"] }) {
  const style =
    status === "accepted"
      ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
      : status === "rejected"
        ? "bg-muted text-muted-foreground"
        : "bg-amber-500/10 text-amber-700 dark:text-amber-300";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${style}`}
    >
      {status}
    </span>
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
