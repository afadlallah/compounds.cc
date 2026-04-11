import { type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SLUG_CITATION = /\(slug:\s*([a-z0-9-]+)\)/g;

/**
 * Parse text for `(slug: some-compound)` citations and convert them into
 * clickable links. Everything else passes through as plain text.
 */
export function parseSlugCitations(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const re = new RegExp(SLUG_CITATION.source, SLUG_CITATION.flags);
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const slug = match[1];
    nodes.push(
      <Link
        key={`${slug}-${match.index}`}
        href={`/substances/${slug}`}
        className="font-medium text-primary underline underline-offset-2 decoration-primary/40 hover:decoration-primary"
      >
        {slug
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")}
      </Link>,
    );
    lastIndex = re.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

interface MessageBubbleProps {
  role: "user" | "assistant";
  children: ReactNode;
}

export function MessageBubble({ role, children }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground",
        )}
      >
        {children}
      </div>
    </div>
  );
}
