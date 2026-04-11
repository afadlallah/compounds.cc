import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { cn, formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ handle: string }>;
};

type ProfileRow = {
  id: string;
  handle: string | null;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
};

type CompoundEmbed = {
  name: string;
  slug: string;
  published: boolean | null;
} | null;

type ReviewRow = {
  id: string;
  title: string;
  body: string;
  rating: number;
  created_at: string;
  compounds: CompoundEmbed | CompoundEmbed[] | null;
};

type BookmarkRow = {
  created_at: string;
  compounds: CompoundEmbed | CompoundEmbed[] | null;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  return {
    title: `@${handle}`,
  };
}

function normalizeCompound(embed: CompoundEmbed | CompoundEmbed[] | null): CompoundEmbed {
  if (!embed) return null;
  return Array.isArray(embed) ? embed[0] ?? null : embed;
}

function initialsFrom(displayName: string | null, handle: string | null): string {
  const source = (displayName?.trim() || handle?.trim() || "?").replace(/^@/, "");
  const parts = source.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0]![0]! + parts[1]![0]!).toUpperCase();
  }
  return source.slice(0, 2).toUpperCase() || "?";
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-primary" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (i < rating ? "★" : "☆")).join("")}
    </span>
  );
}

function ProfileUnavailable({ handle }: { handle: string }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Profile
      </p>
      <h1 className="font-mono text-3xl font-bold tracking-tight">@{handle}</h1>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
        Profile data is temporarily unavailable. This usually means the app is missing
        Supabase environment variables, or the database could not be reached.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
        >
          Home
        </Link>
        <Link
          href="/database"
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Browse database
        </Link>
      </div>
    </div>
  );
}

export default async function UserProfilePage({ params }: Props) {
  const { handle } = await params;

  let supabase: Awaited<ReturnType<typeof createClient>>;
  try {
    supabase = await createClient();
  } catch {
    return <ProfileUnavailable handle={handle} />;
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id, handle, display_name, avatar_url, bio")
    .eq("handle", handle)
    .maybeSingle();

  if (profileError) {
    return <ProfileUnavailable handle={handle} />;
  }

  if (!profile) {
    notFound();
  }

  const typedProfile = profile as ProfileRow;

  let reviews: ReviewRow[] = [];
  let bookmarks: BookmarkRow[] = [];

  try {
    const [reviewsRes, bookmarksRes] = await Promise.all([
      supabase
        .from("reviews")
        .select(
          "id, title, body, rating, created_at, compounds(name, slug, published)",
        )
        .eq("user_id", typedProfile.id)
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(50),
      supabase
        .from("bookmarks")
        .select("created_at, compounds(name, slug, published)")
        .eq("user_id", typedProfile.id)
        .order("created_at", { ascending: false })
        .limit(100),
    ]);

    if (!reviewsRes.error && reviewsRes.data) {
      reviews = (reviewsRes.data as ReviewRow[]).filter((r) => {
        const c = normalizeCompound(r.compounds);
        return c?.published === true;
      });
    }
    if (!bookmarksRes.error && bookmarksRes.data) {
      bookmarks = (bookmarksRes.data as BookmarkRow[]).filter((b) => {
        const c = normalizeCompound(b.compounds);
        return !!c?.slug && c.published === true;
      });
    }
  } catch {
    reviews = [];
    bookmarks = [];
  }

  const displayName =
    typedProfile.display_name?.trim() ||
    (typedProfile.handle ? `@${typedProfile.handle}` : "Member");
  const initials = initialsFrom(typedProfile.display_name, typedProfile.handle);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-8 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="uppercase tracking-wide">@{typedProfile.handle ?? handle}</span>
      </nav>

      <header className="mb-12 border-b border-border pb-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {typedProfile.avatar_url ? (
            // eslint-disable-next-line @next/next/no-img-element -- remote Supabase URLs; avoids image domain config
            <img
              src={typedProfile.avatar_url}
              alt=""
              className={cn(
                "h-24 w-24 shrink-0 rounded-full border border-border object-cover",
              )}
            />
          ) : (
            <div
              className={cn(
                "flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-border bg-muted font-mono text-lg font-semibold text-foreground",
              )}
              aria-hidden
            >
              {initials}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Public profile
            </p>
            <h1 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
              {displayName}
            </h1>
            <p className="mt-1 font-mono text-sm text-muted-foreground">
              @{typedProfile.handle ?? handle}
            </p>
            {typedProfile.bio?.trim() ? (
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {typedProfile.bio}
              </p>
            ) : null}
          </div>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Published reviews
        </h2>
        {reviews.length === 0 ? (
          <p className="text-sm text-muted-foreground">No reviews yet</p>
        ) : (
          <ul className="space-y-4">
            {reviews.map((review) => {
              const compound = normalizeCompound(review.compounds);
              const compoundHref = compound
                ? `/substances/${compound.slug}`
                : null;

              return (
                <li
                  key={review.id}
                  className="rounded-lg border border-border p-4 transition-colors hover:bg-muted/30"
                >
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Stars rating={review.rating} />
                      {compoundHref && compound ? (
                        <Link
                          href={compoundHref}
                          className="text-sm font-medium text-foreground hover:underline"
                        >
                          {compound.name}
                        </Link>
                      ) : (
                        <span className="text-sm text-muted-foreground">Compound</span>
                      )}
                    </div>
                    <time className="font-mono text-xs text-muted-foreground">
                      {formatDate(review.created_at)}
                    </time>
                  </div>
                  <h3 className="mb-1 text-sm font-semibold">{review.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {review.body}
                  </p>
                  {compoundHref ? (
                    <Link
                      href={compoundHref}
                      className="mt-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
                    >
                      View compound →
                    </Link>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <section>
        <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Bookmarked compounds
        </h2>
        {bookmarks.length === 0 ? (
          <p className="text-sm text-muted-foreground">No bookmarks yet</p>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2">
            {bookmarks.flatMap((row) => {
              const compound = normalizeCompound(row.compounds);
              if (!compound?.slug) return [];
              const href = `/substances/${compound.slug}`;
              return [
                <li key={compound.slug}>
                  <Link
                    href={href}
                    className="block rounded-lg border border-border p-4 transition-colors hover:bg-muted/30"
                  >
                    <p className="font-medium text-foreground">{compound.name}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      Saved {formatDate(row.created_at)}
                    </p>
                  </Link>
                </li>,
              ];
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
