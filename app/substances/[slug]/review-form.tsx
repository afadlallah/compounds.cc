"use client";

import { useRef, useState, useTransition } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { createReview, type ActionResult } from "./actions";

type Props = {
  compoundId: string;
  slug: string;
  isSignedIn: boolean;
};

export function ReviewForm({ compoundId, slug, isSignedIn }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [rating, setRating] = useState(0);
  const [fieldErrors, setFieldErrors] = useState<
    Record<string, string[]> | undefined
  >();
  const [error, setError] = useState<string | undefined>();

  if (!isSignedIn) {
    return (
      <section className="mb-10">
        <h2 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Write a review
        </h2>
        <p className="text-sm text-muted-foreground">
          <Link
            href={`/sign-in?next=/substances/${slug}`}
            className="underline underline-offset-4 hover:text-foreground"
          >
            Sign in
          </Link>{" "}
          to write a review.
        </p>
      </section>
    );
  }

  function handleSubmit(formData: FormData) {
    setFieldErrors(undefined);
    setError(undefined);

    startTransition(async () => {
      const result: ActionResult = await createReview(
        compoundId,
        slug,
        formData,
      );

      if (result.ok) {
        toast.success(
          "Review submitted! It will appear after moderation.",
        );
        setRating(0);
        formRef.current?.reset();
      } else if (result.fieldErrors) {
        setFieldErrors(result.fieldErrors);
      } else if (result.error) {
        setError(result.error);
        toast.error(result.error);
      }
    });
  }

  return (
    <section className="mb-10">
      <h2 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Write a review
      </h2>

      <form ref={formRef} action={handleSubmit} className="space-y-4">
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}

        {/* Rating selector */}
        <fieldset>
          <legend className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Rating
          </legend>
          <input type="hidden" name="rating" value={rating} />
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className={cn(
                  "text-2xl transition-colors",
                  value <= rating
                    ? "text-amber-500"
                    : "text-muted-foreground/30 hover:text-amber-500/60",
                )}
                aria-label={`Rate ${value} star${value > 1 ? "s" : ""}`}
              >
                ★
              </button>
            ))}
          </div>
          <FieldError errors={fieldErrors?.rating} />
        </fieldset>

        {/* Title */}
        <div>
          <label
            htmlFor="review-title"
            className="mb-1 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Title
          </label>
          <input
            id="review-title"
            name="title"
            type="text"
            required
            minLength={3}
            maxLength={160}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Summarise your experience"
          />
          <FieldError errors={fieldErrors?.title} />
        </div>

        {/* Body */}
        <div>
          <label
            htmlFor="review-body"
            className="mb-1 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Review
          </label>
          <textarea
            id="review-body"
            name="body"
            required
            minLength={20}
            maxLength={4000}
            rows={5}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Share your experience with this compound (min 20 characters)"
          />
          <FieldError errors={fieldErrors?.body} />
        </div>

        <button
          type="submit"
          disabled={isPending || rating === 0}
          className={cn(
            "rounded-md px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] transition-colors",
            "bg-foreground text-background hover:bg-foreground/90",
            "disabled:pointer-events-none disabled:opacity-50",
          )}
        >
          {isPending ? "Submitting…" : "Submit review"}
        </button>
      </form>
    </section>
  );
}

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;
  return (
    <p className="mt-1 text-xs text-destructive">{errors.join(", ")}</p>
  );
}
