import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to write reviews, save bookmarks, and use the AI recommender.",
};

export default function SignInPage() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Account
      </p>
      <h1 className="font-mono text-3xl font-bold tracking-tight">Sign in</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Auth is pending a Supabase project — add your keys to
        <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-xs">.env.local</code>
        to wire up magic-link sign-in.
      </p>
      <Link
        href="/"
        className="mt-8 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
      >
        ← Back home
      </Link>
    </div>
  );
}
