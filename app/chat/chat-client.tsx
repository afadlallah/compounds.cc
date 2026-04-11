"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageList } from "@/components/chat/message-list";
import { InputBar } from "@/components/chat/input-bar";

const transport = new DefaultChatTransport({ api: "/api/chat" });

export function ChatClient() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, stop, status, error, clearError } = useChat({
    transport,
  });

  const isStreaming = status === "streaming" || status === "submitted";

  function handleSubmit() {
    const text = input.trim();
    if (!text) return;
    clearError();
    sendMessage({ text });
    setInput("");
  }

  return (
    <div className="flex h-[calc(100dvh-3.5rem)] flex-col">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col overflow-hidden px-4">
        <MessageList messages={messages} isStreaming={isStreaming} />

        {error && <ErrorBanner error={error} onDismiss={clearError} />}

        <div className="shrink-0 pb-2 pt-2">
          <InputBar
            input={input}
            onInputChange={setInput}
            onSubmit={handleSubmit}
            onStop={stop}
            isStreaming={isStreaming}
            isDisabled={status === "error"}
          />
          <p className="mt-2 text-center text-[11px] text-muted-foreground">
            Educational information only — not medical advice. Always consult a
            clinician.
          </p>
        </div>
      </div>
    </div>
  );
}

function ErrorBanner({
  error,
  onDismiss,
}: {
  error: Error;
  onDismiss: () => void;
}) {
  const message = errorToUserMessage(error);

  return (
    <div className="mx-auto mb-2 w-full max-w-3xl rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
      <div className="flex items-start justify-between gap-3">
        <p>{message}</p>
        <button
          type="button"
          onClick={onDismiss}
          className="shrink-0 text-xs font-medium underline underline-offset-2"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}

function errorToUserMessage(error: Error): string {
  const msg = error.message.toLowerCase();

  if (msg.includes("not configured") || msg.includes("503")) {
    return "The AI recommender isn\u2019t configured yet. Ask the site admin to add the API key.";
  }
  if (msg.includes("rate limit") || msg.includes("429")) {
    return "You\u2019re sending messages too quickly. Wait a moment and try again.";
  }
  if (msg.includes("not authenticated") || msg.includes("401")) {
    return "Please sign in to use the chat.";
  }

  return "Something went wrong. Try again in a moment.";
}
