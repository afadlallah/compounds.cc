"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const linkButtonClass = cn(
  "inline-flex items-center rounded-sm px-1 py-0.5",
  "font-mono text-[11px] uppercase tracking-[0.18em]",
  "text-muted-foreground transition-colors hover:text-foreground",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

type ShareRowProps = {
  slug: string;
  name: string;
  /** Optional site origin (e.g. https://example.com) for SSR; client always prefers `window.location.href`. */
  siteUrl?: string;
};

function buildUrlFromSite(siteUrl: string, slug: string) {
  return `${siteUrl.replace(/\/$/, "")}/substances/${slug}`;
}

export function ShareRow({ slug, name, siteUrl }: ShareRowProps) {
  const [url, setUrl] = useState(() =>
    siteUrl ? buildUrlFromSite(siteUrl, slug) : "",
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  const redditHref =
    url.length > 0
      ? `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(name)}`
      : undefined;

  const tweetText = name;
  const xHref =
    url.length > 0
      ? `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(tweetText)}`
      : undefined;

  async function handleCopy() {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied");
    } catch {
      toast.error("Could not copy link");
    }
  }

  return (
    <div
      className="flex flex-wrap items-center gap-x-2 gap-y-1"
      role="group"
      aria-label="Share this compound"
    >
      {redditHref ? (
        <a
          href={redditHref}
          target="_blank"
          rel="noopener noreferrer"
          className={linkButtonClass}
        >
          Reddit
        </a>
      ) : (
        <span className={cn(linkButtonClass, "pointer-events-none opacity-40")} aria-hidden>
          Reddit
        </span>
      )}
      <span className="h-3 w-px shrink-0 bg-border" aria-hidden />
      {xHref ? (
        <a href={xHref} target="_blank" rel="noopener noreferrer" className={linkButtonClass}>
          X
        </a>
      ) : (
        <span className={cn(linkButtonClass, "pointer-events-none opacity-40")} aria-hidden>
          X
        </span>
      )}
      <span className="h-3 w-px shrink-0 bg-border" aria-hidden />
      <button
        type="button"
        onClick={handleCopy}
        disabled={!url}
        className={cn(
          linkButtonClass,
          "disabled:pointer-events-none disabled:opacity-40",
        )}
      >
        Copy Link
      </button>
    </div>
  );
}
