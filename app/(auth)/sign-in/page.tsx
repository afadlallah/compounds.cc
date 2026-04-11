import type { Metadata } from "next";
import Link from "next/link";
import { SignInForm } from "./sign-in-form";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to write reviews, save bookmarks, and use the AI recommender.",
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const next = typeof params.next === "string" ? params.next : "/";
  const error = typeof params.error === "string" ? params.error : undefined;

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Account
      </p>
      <h1 className="mb-8 font-mono text-3xl font-bold tracking-tight">Sign in</h1>
      <SignInForm next={next} error={error} />
      <Link
        href="/"
        className="mt-10 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
      >
        &larr; Back home
      </Link>
    </div>
  );
}
