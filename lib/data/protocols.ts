export type ProtocolCompound = {
  slug: string;
  role: "core" | "adjunct" | "optional";
  dosageNotes: string;
  orderIndex: number;
};

export type SeedProtocol = {
  slug: string;
  name: string;
  description: string;
  goal: string;
  compounds: ProtocolCompound[];
};

export const SEED_PROTOCOLS: SeedProtocol[] = [
  {
    slug: "cognitive-performance",
    name: "Cognitive Performance Stack",
    description:
      "A foundational stack aimed at sustaining focus, working memory, and mental clarity throughout the day. The core compounds target cholinergic tone and neurotrophic support, while adjuncts address long-term neuroprotection. Individual responses vary significantly — start low, introduce one compound at a time, and track subjective changes.",
    goal: "Sharpen focus, working memory, and sustained attention",
    compounds: [
      { slug: "citicoline", role: "core", dosageNotes: "250–500 mg/day, morning", orderIndex: 0 },
      { slug: "lions-mane", role: "core", dosageNotes: "500–1000 mg extract, morning with food", orderIndex: 1 },
      { slug: "alpha-gpc", role: "core", dosageNotes: "300–600 mg/day, morning", orderIndex: 2 },
      { slug: "bacopa-monnieri", role: "adjunct", dosageNotes: "300 mg standardized extract, with meals; effects build over 8–12 weeks", orderIndex: 3 },
      { slug: "phosphatidylserine", role: "adjunct", dosageNotes: "100–200 mg/day", orderIndex: 4 },
      { slug: "omega-3", role: "optional", dosageNotes: "1–2 g combined EPA/DHA daily", orderIndex: 5 },
      { slug: "caffeine", role: "optional", dosageNotes: "50–100 mg as needed; pair with L-theanine to smooth the curve", orderIndex: 6 },
    ],
  },
  {
    slug: "sleep-optimization",
    name: "Sleep Optimization Stack",
    description:
      "Designed to support faster sleep onset, deeper slow-wave stages, and more consistent sleep architecture. The core compounds lower arousal and prime GABA tone, while adjuncts work on circadian signaling. Timing matters more than dose for most of these — take them 30–60 minutes before bed. Effects vary with age, stress load, and individual neurochemistry.",
    goal: "Improve sleep onset, depth, and overnight recovery",
    compounds: [
      { slug: "magnesium-glycinate", role: "core", dosageNotes: "200–400 mg elemental Mg, 30–60 min before bed", orderIndex: 0 },
      { slug: "l-theanine", role: "core", dosageNotes: "200 mg before bed", orderIndex: 1 },
      { slug: "apigenin", role: "core", dosageNotes: "50 mg before bed", orderIndex: 2 },
      { slug: "glycine", role: "adjunct", dosageNotes: "3 g before bed", orderIndex: 3 },
      { slug: "melatonin", role: "optional", dosageNotes: "0.3–0.5 mg; less is more — high doses can disrupt architecture", orderIndex: 4 },
      { slug: "valerian", role: "optional", dosageNotes: "300–600 mg extract, 30 min before bed", orderIndex: 5 },
    ],
  },
  {
    slug: "stress-resilience",
    name: "Stress Resilience Stack",
    description:
      "Built around adaptogenic herbs that modulate cortisol and HPA-axis reactivity. The goal is not to suppress the stress response but to widen the window of tolerance so you recover faster. Core adaptogens have the most clinical support; adjuncts add anxiolytic or calming layers. Allow 4–8 weeks for adaptogens to reach steady-state effects. Individual responses vary widely.",
    goal: "Buffer cortisol spikes and accelerate stress recovery",
    compounds: [
      { slug: "ashwagandha", role: "core", dosageNotes: "300–600 mg KSM-66 or Sensoril extract, morning or evening", orderIndex: 0 },
      { slug: "rhodiola-rosea", role: "core", dosageNotes: "200–400 mg standardized to 3% rosavins, morning on empty stomach", orderIndex: 1 },
      { slug: "l-theanine", role: "core", dosageNotes: "200 mg as needed for acute calm", orderIndex: 2 },
      { slug: "magnesium-glycinate", role: "adjunct", dosageNotes: "200–400 mg elemental Mg, evening", orderIndex: 3 },
      { slug: "holy-basil", role: "adjunct", dosageNotes: "300–600 mg extract daily", orderIndex: 4 },
      { slug: "phosphatidylserine", role: "optional", dosageNotes: "100 mg/day — may blunt cortisol post-exercise", orderIndex: 5 },
    ],
  },
  {
    slug: "metabolic-health",
    name: "Metabolic Health Stack",
    description:
      "Targets insulin sensitivity, glucose disposal, and lipid markers. Berberine anchors the stack with strong clinical evidence for blood-sugar management. Supporting compounds address oxidative stress and peripheral insulin action. This stack is not a substitute for diet and movement — treat it as an adjunct to a well-structured metabolic baseline. Individual responses differ based on metabolic status.",
    goal: "Support insulin sensitivity and healthy blood-sugar regulation",
    compounds: [
      { slug: "berberine", role: "core", dosageNotes: "500 mg 2–3× daily with meals", orderIndex: 0 },
      { slug: "alpha-lipoic-acid", role: "core", dosageNotes: "300–600 mg/day", orderIndex: 1 },
      { slug: "chromium-picolinate", role: "adjunct", dosageNotes: "200–500 mcg/day with food", orderIndex: 2 },
      { slug: "cinnamon", role: "adjunct", dosageNotes: "1–3 g Ceylon cinnamon extract daily", orderIndex: 3 },
      { slug: "omega-3", role: "optional", dosageNotes: "2 g combined EPA/DHA for lipid support", orderIndex: 4 },
    ],
  },
  {
    slug: "muscle-recovery",
    name: "Muscle Recovery Stack",
    description:
      "Focused on accelerating tissue repair, reducing delayed-onset soreness, and supporting satellite-cell activity after intense training. Creatine and HMB form the evidence-backed core, while peptides offer more speculative regenerative support. Timing around training sessions matters — most compounds in this stack perform best peri-workout or immediately after. Effects vary with training intensity and baseline nutrition.",
    goal: "Speed post-exercise recovery and reduce muscle soreness",
    compounds: [
      { slug: "creatine-monohydrate", role: "core", dosageNotes: "5 g/day, timing flexible", orderIndex: 0 },
      { slug: "hmb", role: "core", dosageNotes: "3 g/day split into doses around training", orderIndex: 1 },
      { slug: "taurine", role: "adjunct", dosageNotes: "1–3 g/day, peri-workout", orderIndex: 2 },
      { slug: "glutamine", role: "adjunct", dosageNotes: "5–10 g/day post-training", orderIndex: 3 },
      { slug: "bpc-157", role: "optional", dosageNotes: "Research peptide — 250–500 mcg/day subcutaneous near injury site; not FDA-approved", orderIndex: 4 },
      { slug: "tb-500", role: "optional", dosageNotes: "Research peptide — 2–5 mg 2×/week during loading; not FDA-approved", orderIndex: 5 },
    ],
  },
  {
    slug: "immune-support",
    name: "Immune Support Stack",
    description:
      "A defense-oriented stack combining micronutrients that are commonly deficient in modern diets with botanicals that prime innate immunity. The core trio of vitamin C, D, and zinc addresses the most frequently studied immune-nutrition gaps. Botanical adjuncts add polysaccharide-based immunomodulation. This is maintenance-level support — not a treatment for active illness. Individual responses and needs vary.",
    goal: "Strengthen baseline immune readiness and resilience",
    compounds: [
      { slug: "vitamin-c", role: "core", dosageNotes: "500–1000 mg/day in divided doses", orderIndex: 0 },
      { slug: "vitamin-d3", role: "core", dosageNotes: "2000–5000 IU/day; test serum levels and adjust", orderIndex: 1 },
      { slug: "zinc", role: "core", dosageNotes: "15–30 mg/day with food; avoid chronic high doses", orderIndex: 2 },
      { slug: "elderberry", role: "adjunct", dosageNotes: "500 mg extract daily during high-exposure periods", orderIndex: 3 },
      { slug: "beta-glucans", role: "adjunct", dosageNotes: "250–500 mg/day", orderIndex: 4 },
      { slug: "echinacea", role: "optional", dosageNotes: "300–500 mg extract; most studied for short-term use at onset of symptoms", orderIndex: 5 },
    ],
  },
  {
    slug: "mood-support",
    name: "Mood Support Stack",
    description:
      "Aimed at supporting serotonergic tone, reducing neuroinflammation, and improving subjective well-being. Saffron and SAMe have the strongest controlled-trial evidence for low mood among natural compounds. This stack is not a replacement for therapy, lifestyle changes, or prescribed medication — it is a complementary layer. Onset varies: some compounds act within days, others need 4–6 weeks. Effects differ by individual.",
    goal: "Elevate baseline mood and emotional resilience",
    compounds: [
      { slug: "saffron", role: "core", dosageNotes: "30 mg standardized extract daily", orderIndex: 0 },
      { slug: "same", role: "core", dosageNotes: "400–800 mg/day on empty stomach; start at 200 mg", orderIndex: 1 },
      { slug: "omega-3", role: "core", dosageNotes: "1–2 g EPA-dominant fish oil daily", orderIndex: 2 },
      { slug: "5-htp", role: "adjunct", dosageNotes: "50–100 mg before bed; do not combine with SSRIs", orderIndex: 3 },
      { slug: "st-johns-wort", role: "optional", dosageNotes: "300 mg 3×/day standardized to 0.3% hypericin; many drug interactions — check carefully", orderIndex: 4 },
    ],
  },
  {
    slug: "longevity-stack",
    name: "Longevity Stack",
    description:
      "Targets hallmarks of aging: NAD+ decline, senescent cell accumulation, mTOR overactivation, and mitochondrial dysfunction. Evidence ranges from robust animal data to emerging human trials. This is a speculative, long-horizon stack — none of these compounds are proven to extend human lifespan. Use with full awareness that the science is early and individual responses vary. Rapamycin especially requires medical supervision.",
    goal: "Target cellular aging pathways and promote healthspan",
    compounds: [
      { slug: "nad-boosters", role: "core", dosageNotes: "NMN 250–500 mg or NR 300 mg daily, morning", orderIndex: 0 },
      { slug: "resveratrol", role: "core", dosageNotes: "250–500 mg/day with a fat-containing meal", orderIndex: 1 },
      { slug: "spermidine", role: "adjunct", dosageNotes: "1–5 mg/day; or wheat germ extract", orderIndex: 2 },
      { slug: "fisetin", role: "adjunct", dosageNotes: "100–500 mg/day; intermittent high-dose protocols under study", orderIndex: 3 },
      { slug: "quercetin", role: "adjunct", dosageNotes: "500 mg/day; often paired with fisetin in senolytic protocols", orderIndex: 4 },
      { slug: "rapamycin", role: "optional", dosageNotes: "Low-dose pulsed protocol (e.g. 5–6 mg weekly) — prescription only, requires physician oversight", orderIndex: 5 },
    ],
  },
  {
    slug: "energy-endurance",
    name: "Energy & Endurance Stack",
    description:
      "Designed for sustained physical and mental energy without jittery stimulant crashes. The core compounds improve mitochondrial output and buffer fatigue metabolites, while adjuncts enhance oxygen delivery and nitric-oxide-mediated blood flow. Best paired with structured training and adequate sleep. Caffeine is kept optional because not everyone tolerates it well. Effects vary based on fitness level and diet.",
    goal: "Sustain energy output and delay exercise fatigue",
    compounds: [
      { slug: "creatine-monohydrate", role: "core", dosageNotes: "5 g/day, any time", orderIndex: 0 },
      { slug: "coq10", role: "core", dosageNotes: "100–200 mg ubiquinol form, with food", orderIndex: 1 },
      { slug: "beta-alanine", role: "core", dosageNotes: "3.2–6.4 g/day in split doses; expect transient tingling", orderIndex: 2 },
      { slug: "cordyceps", role: "adjunct", dosageNotes: "1–3 g extract daily", orderIndex: 3 },
      { slug: "citrulline-malate", role: "adjunct", dosageNotes: "6–8 g 30 min pre-workout", orderIndex: 4 },
      { slug: "caffeine", role: "optional", dosageNotes: "100–200 mg 30–60 min pre-workout; cycle off periodically", orderIndex: 5 },
    ],
  },
  {
    slug: "joint-connective-tissue",
    name: "Joint & Connective Tissue Stack",
    description:
      "A maintenance and repair stack for cartilage, tendons, and ligaments. Collagen peptides provide the raw substrate, while glucosamine and chondroitin support glycosaminoglycan synthesis. Anti-inflammatory botanicals round out the stack. Results typically take 8–12 weeks of consistent use to become noticeable. Efficacy varies with the nature and severity of joint issues — this stack is supportive, not curative.",
    goal: "Maintain joint health and support connective-tissue repair",
    compounds: [
      { slug: "collagen-peptides", role: "core", dosageNotes: "10–15 g hydrolyzed collagen daily, ideally with vitamin C", orderIndex: 0 },
      { slug: "glucosamine", role: "core", dosageNotes: "1500 mg/day", orderIndex: 1 },
      { slug: "chondroitin", role: "core", dosageNotes: "800–1200 mg/day", orderIndex: 2 },
      { slug: "msm", role: "adjunct", dosageNotes: "1–3 g/day", orderIndex: 3 },
      { slug: "boswellia", role: "adjunct", dosageNotes: "300–500 mg standardized extract daily", orderIndex: 4 },
      { slug: "hyaluronic-acid", role: "optional", dosageNotes: "100–200 mg/day oral supplement", orderIndex: 5 },
    ],
  },
];
