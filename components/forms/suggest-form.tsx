"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { suggestSchema } from "@/lib/validation/schemas";

function parseSuggestError(body: unknown): string {
  if (
    typeof body === "object" &&
    body !== null &&
    "error" in body &&
    typeof (body as { error: unknown }).error === "string"
  ) {
    return (body as { error: string }).error;
  }
  return "Something went wrong. Please try again.";
}

export function SuggestForm() {
  const [compoundName, setCompoundName] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const parsed = suggestSchema.safeParse({ compoundName });
    if (!parsed.success) {
      const msg = parsed.error.issues[0]?.message ?? "Invalid suggestion";
      toast.error(msg);
      return;
    }

    startTransition(async () => {
      const res = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ compoundName: parsed.data.compoundName }),
      });

      let body: unknown;
      try {
        body = await res.json();
      } catch {
        toast.error("Something went wrong. Please try again.");
        return;
      }

      if (
        res.ok &&
        typeof body === "object" &&
        body !== null &&
        "success" in body &&
        (body as { success: boolean }).success === true
      ) {
        toast.success("Thanks! We'll review your suggestion.");
        setCompoundName("");
        return;
      }

      toast.error(parseSuggestError(body));
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-3 sm:flex-row sm:items-stretch")}
    >
      <div className="min-w-0 flex-1">
        <label htmlFor="compound-suggestion" className="sr-only">
          Compound name
        </label>
        <input
          id="compound-suggestion"
          type="text"
          name="compoundName"
          autoComplete="off"
          maxLength={120}
          value={compoundName}
          onChange={(e) => setCompoundName(e.target.value)}
          placeholder="e.g. Semax"
          disabled={isPending}
          className={cn(
            "h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className={cn(
          "h-10 shrink-0 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground",
          "hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
        )}
      >
        {isPending ? "Sending…" : "Suggest"}
      </button>
    </form>
  );
}
