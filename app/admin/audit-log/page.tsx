import type { Metadata } from "next";
import { requireAdmin, tryDb } from "@/lib/admin/guard";
import { AdminHeader, DbError, EmptyState } from "../_components/admin-page";

export const metadata: Metadata = { title: "Audit log · Admin" };

type AuditRow = {
  id: string;
  action: string;
  target_table: string;
  target_id: string | null;
  payload: Record<string, unknown> | null;
  created_at: string;
  actor: { handle: string | null; display_name: string | null } | null;
};

export default async function AuditLogPage() {
  const { supabase } = await requireAdmin();

  const result = await tryDb(async () => {
    const { data, error } = await supabase
      .from("admin_audit_log")
      .select(
        "id, action, target_table, target_id, payload, created_at, actor:profiles(handle, display_name)",
      )
      .order("created_at", { ascending: false })
      .limit(200);
    if (error) throw new Error(error.message);
    return (data ?? []) as unknown as AuditRow[];
  });

  return (
    <div>
      <AdminHeader title="Audit log" subtitle="History" />

      {!result.ok ? (
        <DbError error={result.error} />
      ) : result.data.length === 0 ? (
        <EmptyState
          title="No audit entries"
          description="Every admin write will be recorded here for compliance and rollback."
        />
      ) : (
        <ol className="space-y-2">
          {result.data.map((row) => (
            <li
              key={row.id}
              className="rounded-lg border border-border p-4 text-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wide">
                    {row.action}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {row.target_table}
                    {row.target_id ? ` · ${row.target_id.slice(0, 8)}` : ""}
                  </span>
                </div>
                <div className="text-[10px] text-muted-foreground">
                  {row.actor?.display_name ?? row.actor?.handle ?? "system"} ·{" "}
                  {new Date(row.created_at).toLocaleString()}
                </div>
              </div>
              {row.payload && (
                <pre className="mt-2 overflow-x-auto rounded bg-muted/40 p-2 text-[11px] leading-snug text-muted-foreground">
                  {JSON.stringify(row.payload, null, 2)}
                </pre>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
