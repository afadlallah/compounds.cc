import type { Metadata } from "next";
import { requireAdmin, tryDb } from "@/lib/admin/guard";
import { AdminHeader, DbError, EmptyState } from "../_components/admin-page";

export const metadata: Metadata = { title: "Scores · Admin" };

type ScoreRow = {
  score: number;
  rationale: string | null;
  compound: { slug: string; name: string } | null;
  use_case: { slug: string; name: string } | null;
};

export default async function AdminScoresPage() {
  const { supabase } = await requireAdmin();

  const result = await tryDb(async () => {
    const { data, error } = await supabase
      .from("compound_use_case_scores")
      .select(
        "score, rationale, compound:compounds(slug, name), use_case:use_cases(slug, name)",
      )
      .order("score", { ascending: false })
      .limit(200);
    if (error) throw new Error(error.message);
    return (data ?? []) as unknown as ScoreRow[];
  });

  return (
    <div>
      <AdminHeader title="Scores" subtitle="Leaderboard inputs" />

      {!result.ok ? (
        <DbError error={result.error} />
      ) : result.data.length === 0 ? (
        <EmptyState
          title="No scores yet"
          description="Use-case scores will appear here once seeded. A dedicated editor is on the roadmap."
        />
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-muted/40 text-left">
              <tr>
                <Th>Compound</Th>
                <Th>Use case</Th>
                <Th>Score</Th>
              </tr>
            </thead>
            <tbody>
              {result.data.map((row, i) => (
                <tr key={`${row.compound?.slug}-${row.use_case?.slug}-${i}`} className="border-t border-border/60">
                  <Td className="font-semibold">{row.compound?.name ?? "—"}</Td>
                  <Td className="text-xs text-muted-foreground">{row.use_case?.name ?? "—"}</Td>
                  <Td className="font-mono tabular-nums">{row.score}</Td>
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
