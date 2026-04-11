import Link from "next/link";
import { SEED_PROTOCOLS } from "@/lib/data/protocols";

export function ProtocolMentions({ compoundSlug }: { compoundSlug: string }) {
  const mentions = SEED_PROTOCOLS.filter((p) =>
    p.compounds.some((c) => c.slug === compoundSlug),
  );

  if (mentions.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Featured in protocols
      </h2>
      <ul className="space-y-2 text-sm">
        {mentions.map((protocol) => {
          const entry = protocol.compounds.find((c) => c.slug === compoundSlug);
          return (
            <li key={protocol.slug} className="flex items-baseline justify-between gap-4">
              <Link
                href={`/protocols/${protocol.slug}`}
                className="font-medium hover:underline"
              >
                {protocol.name}
              </Link>
              {entry && (
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {entry.role}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
