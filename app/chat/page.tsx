import type { Metadata } from "next";
import { ChatClient } from "./chat-client";

export const metadata: Metadata = {
  title: "Chat",
  description: "An AI recommender that reads the compound database for you.",
};

export default function ChatPage() {
  return <ChatClient />;
}
