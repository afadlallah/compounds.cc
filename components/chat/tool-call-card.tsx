"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Search, BookOpen, Trophy, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const TOOL_META: Record<string, { label: string; icon: typeof Search }> = {
  search_compounds: { label: "Searched compounds", icon: Search },
  get_compound: { label: "Fetched compound details", icon: BookOpen },
  top_for_use_case: { label: "Top ranked for use case", icon: Trophy },
};

type ToolState =
  | "input-streaming"
  | "input-available"
  | "output-available"
  | "output-error";

interface ToolCallCardProps {
  toolName: string;
  state: ToolState;
  input: unknown;
  output: unknown;
}

export function ToolCallCard({ toolName, state, input, output }: ToolCallCardProps) {
  const [expanded, setExpanded] = useState(false);
  const meta = TOOL_META[toolName] ?? { label: toolName, icon: Search };
  const Icon = meta.icon;
  const isLoading = state === "input-streaming" || state === "input-available";
  const hasOutput = state === "output-available";
  const hasError = state === "output-error";

  return (
    <div className="my-1.5 rounded-lg border border-border/60 bg-card text-xs">
      <button
        type="button"
        onClick={() => hasOutput && setExpanded((v) => !v)}
        disabled={!hasOutput}
        className={cn(
          "flex w-full items-center gap-2 px-3 py-2 text-left",
          hasOutput && "cursor-pointer hover:bg-muted/50",
        )}
      >
        {isLoading ? (
          <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin text-muted-foreground" />
        ) : (
          <Icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        )}
        <span className="flex-1 font-medium text-muted-foreground">
          {meta.label}
          {isLoading && "…"}
        </span>
        {hasOutput && (
          expanded ? (
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          )
        )}
      </button>

      {hasError && (
        <div className="border-t border-border/60 px-3 py-2 text-destructive">
          Tool call failed.
        </div>
      )}

      {expanded && hasOutput && (
        <div className="border-t border-border/60 px-3 py-2">
          <ToolOutput toolName={toolName} output={output} />
        </div>
      )}
    </div>
  );
}

function ToolOutput({ toolName, output }: { toolName: string; output: unknown }) {
  if (toolName === "search_compounds" && Array.isArray(output)) {
    if (output.length === 0) return <p className="text-muted-foreground">No matches found.</p>;
    return (
      <ul className="space-y-1">
        {output.map((c: { slug: string; name: string; category: string; evidenceScore: number }) => (
          <li key={c.slug} className="flex items-baseline justify-between gap-2">
            <Link
              href={`/substances/${c.slug}`}
              className="font-medium text-primary hover:underline"
            >
              {c.name}
            </Link>
            <span className="shrink-0 text-muted-foreground">
              {c.category} · {c.evidenceScore}/100
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (toolName === "get_compound" && typeof output === "object" && output !== null) {
    const data = output as Record<string, unknown>;
    if (!data.found) return <p className="text-muted-foreground">Compound not found.</p>;
    return (
      <div className="space-y-1">
        <Link
          href={`/substances/${data.slug}`}
          className="font-medium text-primary hover:underline"
        >
          {String(data.name)}
        </Link>
        {data.summary != null && (
          <p className="text-muted-foreground line-clamp-3">{String(data.summary)}</p>
        )}
      </div>
    );
  }

  if (toolName === "top_for_use_case" && typeof output === "object" && output !== null) {
    const data = output as { found: boolean; useCase?: string; items?: Array<{ slug: string; name: string; score: number }> };
    if (!data.found) return <p className="text-muted-foreground">Use case not found.</p>;
    return (
      <div>
        <p className="mb-1.5 text-muted-foreground">Top for {data.useCase}:</p>
        <ol className="space-y-0.5">
          {data.items?.map((item, i) => (
            <li key={item.slug} className="flex items-baseline gap-2">
              <span className="w-4 shrink-0 text-right text-muted-foreground">{i + 1}.</span>
              <Link
                href={`/substances/${item.slug}`}
                className="font-medium text-primary hover:underline"
              >
                {item.name}
              </Link>
              <span className="text-muted-foreground">({item.score})</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return <pre className="overflow-x-auto whitespace-pre-wrap text-muted-foreground">{JSON.stringify(output, null, 2)}</pre>;
}
