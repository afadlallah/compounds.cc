export type CompoundCategory =
  | "peptide"
  | "supplement"
  | "nootropic"
  | "sarm"
  | "adaptogen"
  | "glp"
  | "racetam"
  | "amino_acid"
  | "medicine"
  | "herb"
  | "growth_hormone";

export type UseCaseSlug =
  | "focus"
  | "anxiety"
  | "energy"
  | "memory"
  | "mood"
  | "stress"
  | "longevity"
  | "weight-loss"
  | "muscle"
  | "recovery"
  | "libido"
  | "pain"
  | "immunity"
  | "sleep";

export type SeedCompound = {
  slug: string;
  name: string;
  category: CompoundCategory;
  summary: string;
  quickVerdict: string;
  evidenceScore: number;
  researchNotes: string;
  cautions: string;
  caveats: string;
  benefits: string[];
  dosageNotes: string;
  sideEffects: string[];
  tags: string[];
  scores: Partial<Record<UseCaseSlug, number>>;
};

export type Category = { slug: CompoundCategory; name: string };

import { PEPTIDE_COMPOUNDS } from "./compounds/peptides";
import { SUPPLEMENTS_A_F } from "./compounds/supplements-a-f";
import { SUPPLEMENTS_G_O } from "./compounds/supplements-g-o";
import { SUPPLEMENTS_P_Z } from "./compounds/supplements-p-z";
import {
  NOOTROPIC_COMPOUNDS,
  RACETAM_COMPOUNDS,
  MEDICINE_COMPOUNDS,
} from "./compounds/nootropics-racetams-medicines";
import {
  SARM_COMPOUNDS,
  GLP_COMPOUNDS,
  GH_COMPOUNDS,
  AMINO_ACID_COMPOUNDS,
} from "./compounds/sarms-glp-gh-amino";
import { HERBS_A_L } from "./compounds/herbs-a-l";
import {
  HERBS_M_Z,
  ADAPTOGEN_COMPOUNDS,
} from "./compounds/herbs-m-z-adaptogens";

export const COMPOUNDS: SeedCompound[] = [
  ...PEPTIDE_COMPOUNDS,
  ...SUPPLEMENTS_A_F,
  ...SUPPLEMENTS_G_O,
  ...SUPPLEMENTS_P_Z,
  ...NOOTROPIC_COMPOUNDS,
  ...RACETAM_COMPOUNDS,
  ...MEDICINE_COMPOUNDS,
  ...SARM_COMPOUNDS,
  ...GLP_COMPOUNDS,
  ...GH_COMPOUNDS,
  ...AMINO_ACID_COMPOUNDS,
  ...HERBS_A_L,
  ...HERBS_M_Z,
  ...ADAPTOGEN_COMPOUNDS,
];

export const CATEGORIES: Category[] = [
  { slug: "peptide", name: "Peptide" },
  { slug: "supplement", name: "Supplement" },
  { slug: "nootropic", name: "Nootropic" },
  { slug: "sarm", name: "SARM" },
  { slug: "adaptogen", name: "Adaptogen" },
  { slug: "glp", name: "GLP-1" },
  { slug: "racetam", name: "Racetam" },
  { slug: "amino_acid", name: "Amino Acid" },
  { slug: "medicine", name: "Medicine" },
  { slug: "herb", name: "Herb" },
  { slug: "growth_hormone", name: "Growth Hormone" },
];

export type UseCase = { slug: UseCaseSlug; name: string; description: string };

export const USE_CASES: UseCase[] = [
  { slug: "focus", name: "Focus", description: "Sustained attention and cognitive clarity." },
  { slug: "anxiety", name: "Anxiety", description: "Calm, lowered autonomic reactivity." },
  { slug: "energy", name: "Energy", description: "Daytime alertness and stamina." },
  { slug: "memory", name: "Memory", description: "Encoding, recall, and working memory." },
  { slug: "mood", name: "Mood", description: "Subjective wellbeing and affect." },
  { slug: "stress", name: "Stress", description: "Resilience under psychological load." },
  { slug: "longevity", name: "Longevity", description: "Cellular health and lifespan markers." },
  { slug: "weight-loss", name: "Weight loss", description: "Adiposity reduction." },
  { slug: "muscle", name: "Muscle", description: "Strength, hypertrophy, and recovery." },
  { slug: "recovery", name: "Recovery", description: "Tissue repair and post-exertion return." },
  { slug: "libido", name: "Libido", description: "Sexual function and desire." },
  { slug: "pain", name: "Pain", description: "Nociceptive and inflammatory pain." },
  { slug: "immunity", name: "Immunity", description: "Host defense and inflammation balance." },
  { slug: "sleep", name: "Sleep", description: "Sleep onset, depth, and maintenance." },
];
