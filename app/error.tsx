"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Report to observability (Sentry etc.) once wired.
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Error
      </p>
      <h1 className="font-mono text-4xl font-bold tracking-tight">Something broke</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        An unexpected error occurred while rendering this page.
      </p>
      {error.digest && (
        <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          digest: {error.digest}
        </p>
      )}
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
