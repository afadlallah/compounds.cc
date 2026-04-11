import Link from "next/link";

export default function UserProfileNotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        404
      </p>
      <h1 className="font-mono text-4xl font-bold tracking-tight">User not found</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        There is no public profile with this handle. It may have changed or the account may
        not exist.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Home
        </Link>
        <Link
          href="/database"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
        >
          Database
        </Link>
      </div>
    </div>
  );
}
