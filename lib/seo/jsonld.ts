import type { SeedCompound } from "@/lib/data/seed-compounds";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * Structured data for a compound detail page. Uses schema.org `MedicalWebPage`
 * with a nested `Drug` mainEntity so search engines can parse the dosage and
 * side-effect fields.
 */
export function compoundJsonLd(compound: SeedCompound) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: compound.name,
    description: compound.summary,
    url: `${siteUrl}/substances/${compound.slug}`,
    audience: {
      "@type": "PeopleAudience",
      audienceType: "general public",
    },
    mainEntity: {
      "@type": "Drug",
      name: compound.name,
      description: compound.summary,
      category: compound.category,
      dosageForm: compound.dosageNotes,
      warning: compound.cautions,
      adverseOutcome: compound.sideEffects?.map((s) => ({
        "@type": "MedicalEntity",
        name: s,
      })),
    },
    about: compound.benefits?.map((benefit) => ({
      "@type": "Thing",
      name: benefit,
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Compounds.cc",
    url: siteUrl,
    description:
      "Evidence-forward reference library for nootropics, peptides, and supplements.",
  };
}
