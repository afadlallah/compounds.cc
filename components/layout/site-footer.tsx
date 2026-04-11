import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/a-to-z", label: "A–Z" },
  { href: "/database", label: "Database" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/50">
      <div className="mx-auto max-w-6xl px-4 py-10 text-xs text-muted-foreground">
        <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="uppercase tracking-wide hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="max-w-2xl leading-relaxed">
          This site publishes educational information about compounds discussed in
          the scientific literature. Nothing here is medical advice, a diagnosis,
          or a recommendation. Talk to a qualified clinician before making any
          health decision.
        </p>
        <p className="mt-4 font-mono text-[10px] tracking-wider">
          © {new Date().getFullYear()} Compounds.cc
        </p>
      </div>
    </footer>
  );
}
