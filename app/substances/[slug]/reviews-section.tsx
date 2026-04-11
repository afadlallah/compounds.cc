import { createClient } from "@/lib/supabase/server";
import { formatDate } from "@/lib/utils";

type ProfileRow = { display_name: string | null; handle: string | null };

type Review = {
  id: string;
  title: string;
  body: string;
  rating: number;
  created_at: string;
  profiles: ProfileRow | ProfileRow[] | null;
};

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-amber-500" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (i < rating ? "★" : "☆")).join("")}
    </span>
  );
}

export async function ReviewsSection({ compoundSlug }: { compoundSlug: string }) {
  let reviews: Review[] = [];

  try {
    const supabase = await createClient();

    const { data } = await supabase
      .from("reviews")
      .select(
        "id, title, body, rating, created_at, profiles(display_name, handle)",
      )
      .eq("compound_id", compoundSlug)
      .eq("published", true)
      .order("created_at", { ascending: false })
      .limit(50);

    if (data) reviews = data as Review[];
  } catch {
    // Supabase not configured — render empty state
  }

  return (
    <section className="mb-10">
      <h2 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Community reviews
      </h2>

      {reviews.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No reviews yet. Be the first to share your experience.
        </p>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => {
            const profile = Array.isArray(review.profiles)
              ? review.profiles[0]
              : review.profiles;
            const author =
              profile?.display_name ?? profile?.handle ?? "Anonymous";

            return (
              <div
                key={review.id}
                className="rounded-lg border border-border p-4"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Stars rating={review.rating} />
                    <span className="font-mono text-xs text-muted-foreground">
                      {author}
                    </span>
                  </div>
                  <time className="font-mono text-xs text-muted-foreground">
                    {formatDate(review.created_at)}
                  </time>
                </div>
                <h3 className="mb-1 text-sm font-semibold">{review.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {review.body}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
