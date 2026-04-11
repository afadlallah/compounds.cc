import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin, tryDb } from "@/lib/admin/guard";
import { AdminHeader, DbError, EmptyState } from "../_components/admin-page";
import { ReviewActions } from "./review-actions";

export const metadata: Metadata = { title: "Reviews · Admin" };

type PendingReview = {
  id: string;
  title: string;
  body: string;
  rating: number;
  created_at: string;
  user_id: string;
  compound_id: string;
  compound: { slug: string; name: string } | null;
  profile: { handle: string | null; display_name: string | null } | null;
};

export default async function AdminReviewsPage() {
  const { supabase } = await requireAdmin();

  const result = await tryDb(async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select(
        "id, title, body, rating, created_at, user_id, compound_id, compound:compounds(slug, name), profile:profiles(handle, display_name)",
      )
      .eq("published", false)
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (data ?? []) as unknown as PendingReview[];
  });

  return (
    <div>
      <AdminHeader title="Reviews" subtitle="Moderation" />

      {!result.ok ? (
        <DbError error={result.error} />
      ) : result.data.length === 0 ? (
        <EmptyState
          title="No pending reviews"
          description="User reviews marked unpublished will appear here for moderation."
        />
      ) : (
        <ul className="space-y-4">
          {result.data.map((review) => (
            <li
              key={review.id}
              className="rounded-lg border border-border p-5"
            >
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  {review.compound && (
                    <Link
                      href={`/substances/${review.compound.slug}`}
                      className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground"
                    >
                      {review.compound.name}
                    </Link>
                  )}
                  <h2 className="text-lg font-semibold tracking-tight">
                    {review.title}
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Rating {review.rating}/5 ·{" "}
                    {review.profile?.display_name ??
                      review.profile?.handle ??
                      "unknown user"}{" "}
                    · {new Date(review.created_at).toLocaleDateString()}
                  </p>
                </div>
                <ReviewActions id={review.id} />
              </div>
              <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                {review.body}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
