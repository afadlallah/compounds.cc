"use client";

import { useRef, useEffect } from "react";
import { ArrowUp, Square } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputBarProps {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  onStop: () => void;
  isStreaming: boolean;
  isDisabled: boolean;
}

export function InputBar({
  input,
  onInputChange,
  onSubmit,
  onStop,
  isStreaming,
  isDisabled,
}: InputBarProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }, [input]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (isStreaming) {
          onStop();
        } else if (input.trim() && !isDisabled) {
          onSubmit();
        }
      }}
      className="flex items-end gap-2 rounded-xl border border-border bg-card p-3 shadow-sm"
    >
      <textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (input.trim() && !isDisabled && !isStreaming) onSubmit();
          }
        }}
        placeholder="Ask about compounds, use cases, or protocols…"
        rows={1}
        className={cn(
          "flex-1 resize-none bg-transparent text-sm leading-relaxed outline-none",
          "placeholder:text-muted-foreground",
          "min-h-[36px] max-h-[160px]",
        )}
        disabled={isDisabled && !isStreaming}
      />
      {isStreaming ? (
        <button
          type="button"
          onClick={onStop}
          className={cn(
            "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
            "bg-destructive text-destructive-foreground",
          )}
        >
          <Square className="h-3.5 w-3.5" />
        </button>
      ) : (
        <button
          type="submit"
          disabled={!input.trim() || isDisabled}
          className={cn(
            "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
            "bg-primary text-primary-foreground",
            "disabled:opacity-30",
          )}
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </form>
  );
}
