"use client";

import { useOptimistic, useTransition } from "react";
import Link from "next/link";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { toggleBookmark } from "./bookmark-actions";

type Props = {
  compoundId: string;
  slug: string;
  initialBookmarked: boolean;
  isSignedIn: boolean;
};

export function BookmarkButton({
  compoundId,
  slug,
  initialBookmarked,
  isSignedIn,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const [optimisticBookmarked, setOptimisticBookmarked] =
    useOptimistic(initialBookmarked);

  if (!isSignedIn) {
    return (
      <Link
        href={`/sign-in?next=/substances/${slug}`}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md px-2 py-1",
          "font-mono text-xs uppercase tracking-[0.2em]",
          "text-muted-foreground transition-colors hover:text-foreground",
        )}
      >
        <Bookmark className="size-4" />
        <span>Save</span>
      </Link>
    );
  }

  const Icon = optimisticBookmarked ? BookmarkCheck : Bookmark;

  function handleToggle() {
    startTransition(async () => {
      setOptimisticBookmarked(!optimisticBookmarked);
      const result = await toggleBookmark(compoundId, slug);
      if (!result.ok) {
        toast.error(result.error ?? "Could not update bookmark");
      }
    });
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={isPending}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2 py-1",
        "font-mono text-xs uppercase tracking-[0.2em]",
        "transition-colors disabled:opacity-50",
        optimisticBookmarked
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      <Icon className="size-4" />
      <span>{optimisticBookmarked ? "Saved" : "Save"}</span>
    </button>
  );
}
