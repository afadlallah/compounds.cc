import Link from "next/link";
import type { Metadata } from "next";
import { requireAdmin, tryDb } from "@/lib/admin/guard";

export const metadata: Metadata = { title: "Admin overview" };

type Counts = {
  compounds: { total: number; published: number };
  protocols: { total: number; published: number };
  reviews: { pending: number };
  suggestions: { pending: number };
  subscribers: { total: number; confirmed: number };
};

async function loadCounts(supabase: Awaited<ReturnType<typeof requireAdmin>>["supabase"]) {
  const [compoundTotal, compoundPublished, protocolTotal, protocolPublished, reviewsPending, suggestionsPending, subscribersTotal, subscribersConfirmed] =
    await Promise.all([
      supabase.from("compounds").select("*", { count: "exact", head: true }),
      supabase.from("compounds").select("*", { count: "exact", head: true }).eq("published", true),
      supabase.from("protocols").select("*", { count: "exact", head: true }),
      supabase.from("protocols").select("*", { count: "exact", head: true }).eq("published", true),
      supabase.from("reviews").select("*", { count: "exact", head: true }).eq("published", false),
      supabase.from("suggestions").select("*", { count: "exact", head: true }).eq("status", "pending"),
      supabase.from("subscribers").select("*", { count: "exact", head: true }),
      supabase.from("subscribers").select("*", { count: "exact", head: true }).eq("confirmed", true),
    ]);

  const counts: Counts = {
    compounds: { total: compoundTotal.count ?? 0, published: compoundPublished.count ?? 0 },
    protocols: { total: protocolTotal.count ?? 0, published: protocolPublished.count ?? 0 },
    reviews: { pending: reviewsPending.count ?? 0 },
    suggestions: { pending: suggestionsPending.count ?? 0 },
    subscribers: {
      total: subscribersTotal.count ?? 0,
      confirmed: subscribersConfirmed.count ?? 0,
    },
  };
  return counts;
}

export default async function AdminOverviewPage() {
  const { supabase, profile } = await requireAdmin();
  const result = await tryDb(() => loadCounts(supabase));

  return (
    <div>
      <header className="mb-10">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Signed in as {profile.display_name ?? profile.handle ?? "admin"}
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">Overview</h1>
      </header>

      {!result.ok ? (
        <NotConnected error={result.error} />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            label="Compounds"
            primary={`${result.data.compounds.published} / ${result.data.compounds.total}`}
            sub="published / total"
            href="/admin/compounds"
          />
          <StatCard
            label="Protocols"
            primary={`${result.data.protocols.published} / ${result.data.protocols.total}`}
            sub="published / total"
            href="/admin/protocols"
          />
          <StatCard
            label="Reviews in moderation"
            primary={String(result.data.reviews.pending)}
            sub="awaiting approval"
            href="/admin/reviews"
            highlight={result.data.reviews.pending > 0}
          />
          <StatCard
            label="Suggestions"
            primary={String(result.data.suggestions.pending)}
            sub="pending"
            href="/admin/suggestions"
            highlight={result.data.suggestions.pending > 0}
          />
          <StatCard
            label="Subscribers"
            primary={`${result.data.subscribers.confirmed} / ${result.data.subscribers.total}`}
            sub="confirmed / total"
            href="/admin/subscribers"
          />
        </div>
      )}
    </div>
  );
}

function StatCard({
  label,
  primary,
  sub,
  href,
  highlight,
}: {
  label: string;
  primary: string;
  sub: string;
  href: string;
  highlight?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-lg border p-5 transition-colors hover:bg-muted ${
        highlight ? "border-amber-500/50" : "border-border"
      }`}
    >
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 font-mono text-3xl font-bold tabular-nums">{primary}</p>
      <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
    </Link>
  );
}

function NotConnected({ error }: { error: string }) {
  return (
    <div className="rounded-lg border border-dashed border-border p-10 text-center">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Supabase not connected
      </p>
      <p className="text-sm text-muted-foreground">
        The admin dashboard needs a live Supabase project. Add your keys to
        <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-xs">.env.local</code>
        and run the migration.
      </p>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        error
      </p>
      <p className="mt-1 font-mono text-[10px] text-muted-foreground">{error}</p>
    </div>
  );
}
