import Link from "next/link";

export function AdminHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: { href: string; label: string };
}) {
  return (
    <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        {subtitle && (
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {subtitle}
          </p>
        )}
        <h1 className="font-mono text-3xl font-bold tracking-tight">{title}</h1>
      </div>
      {action && (
        <Link
          href={action.href}
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          {action.label}
        </Link>
      )}
    </header>
  );
}

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-dashed border-border p-10 text-center">
      <p className="font-semibold">{title}</p>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export function DbError({ error }: { error: string }) {
  return (
    <div className="rounded-lg border border-dashed border-border p-10 text-center">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Supabase not connected
      </p>
      <p className="text-sm text-muted-foreground">
        Add your keys to
        <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-xs">.env.local</code>
        and run the migration.
      </p>
      <p className="mt-4 font-mono text-[10px] text-muted-foreground">{error}</p>
    </div>
  );
}
