import { requireAdmin } from "@/lib/admin/guard";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const { supabase } = await requireAdmin();

  const { data, error } = await supabase
    .from("subscribers")
    .select("email, confirmed, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return new Response(`Export failed: ${error.message}`, { status: 500 });
  }

  const rows = data ?? [];
  const header = "email,confirmed,created_at\n";
  const body = rows
    .map(
      (row) =>
        `${escapeCsv(row.email)},${row.confirmed ? "yes" : "no"},${row.created_at}`,
    )
    .join("\n");
  const csv = header + body;

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="subscribers-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}

function escapeCsv(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}
