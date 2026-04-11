"use client";

import { useRef, useEffect } from "react";
import type { UIMessage } from "ai";
import { MessageBubble, parseSlugCitations } from "./message-bubble";
import { ToolCallCard } from "./tool-call-card";

interface MessageListProps {
  messages: UIMessage[];
  isStreaming: boolean;
}

export function MessageList({ messages, isStreaming }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isStreaming]);

  if (messages.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 py-20 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Ask anything
        </p>
        <p className="max-w-sm text-sm text-muted-foreground">
          Try &ldquo;what&rsquo;s good for sleep?&rdquo; or &ldquo;compare
          creatine and ashwagandha&rdquo; — the AI reads the database so it
          cites real entries.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto py-4">
      {messages.map((message) => (
        <MessageRow key={message.id} message={message} />
      ))}
      {isStreaming && messages.at(-1)?.role !== "assistant" && (
        <div className="flex justify-start">
          <div className="rounded-2xl bg-muted px-4 py-3">
            <ThinkingDots />
          </div>
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}

function MessageRow({ message }: { message: UIMessage }) {
  const isUser = message.role === "user";

  if (isUser) {
    const text = message.parts
      .filter((p): p is { type: "text"; text: string } => p.type === "text")
      .map((p) => p.text)
      .join("");
    return <MessageBubble role="user">{text}</MessageBubble>;
  }

  const parts = message.parts;
  return (
    <div className="flex flex-col gap-1">
      {parts.map((part, i) => {
        if (part.type === "text") {
          if (!part.text) return null;
          return (
            <MessageBubble key={`${message.id}-text-${i}`} role="assistant">
              {parseSlugCitations(part.text)}
            </MessageBubble>
          );
        }

        if (part.type === "step-start") return null;

        if (part.type.startsWith("tool-")) {
          const toolPart = part as unknown as {
            type: string;
            toolCallId: string;
            state: "input-streaming" | "input-available" | "output-available" | "output-error";
            input: unknown;
            output: unknown;
          };
          const toolName = toolPart.type.replace(/^tool-/, "");
          return (
            <ToolCallCard
              key={toolPart.toolCallId}
              toolName={toolName}
              state={toolPart.state}
              input={toolPart.input}
              output={toolPart.output}
            />
          );
        }

        return null;
      })}
    </div>
  );
}

function ThinkingDots() {
  return (
    <span className="inline-flex gap-1">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground" />
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground [animation-delay:150ms]" />
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground [animation-delay:300ms]" />
    </span>
  );
}
