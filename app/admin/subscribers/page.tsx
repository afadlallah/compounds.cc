import type { Metadata } from "next";
import { requireAdmin, tryDb } from "@/lib/admin/guard";
import { AdminHeader, DbError, EmptyState } from "../_components/admin-page";

export const metadata: Metadata = { title: "Subscribers · Admin" };

type Subscriber = {
  id: string;
  email: string;
  confirmed: boolean;
  created_at: string;
};

export default async function AdminSubscribersPage() {
  const { supabase } = await requireAdmin();

  const result = await tryDb(async () => {
    const { data, error } = await supabase
      .from("subscribers")
      .select("id, email, confirmed, created_at")
      .order("created_at", { ascending: false })
      .limit(1000);
    if (error) throw new Error(error.message);
    return (data ?? []) as Subscriber[];
  });

  return (
    <div>
      <AdminHeader
        title="Subscribers"
        subtitle="Newsletter"
        action={
          result.ok && result.data.length > 0
            ? { href: "/admin/subscribers/export", label: "Export CSV" }
            : undefined
        }
      />

      {!result.ok ? (
        <DbError error={result.error} />
      ) : result.data.length === 0 ? (
        <EmptyState
          title="No subscribers yet"
          description="Signups via the public newsletter form will appear here."
        />
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-left">
              <tr>
                <Th>Email</Th>
                <Th>Status</Th>
                <Th>Joined</Th>
              </tr>
            </thead>
            <tbody>
              {result.data.map((row) => (
                <tr key={row.id} className="border-t border-border/60">
                  <Td className="font-mono text-xs">{row.email}</Td>
                  <Td>
                    {row.confirmed ? (
                      <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                        Confirmed
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-700 dark:text-amber-300">
                        Pending
                      </span>
                    )}
                  </Td>
                  <Td className="text-xs text-muted-foreground">
                    {new Date(row.created_at).toLocaleDateString()}
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

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
      {children}
    </th>
  );
}

function Td({ children, className }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3 align-top ${className ?? ""}`}>{children}</td>;
}
