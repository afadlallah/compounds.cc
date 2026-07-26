export type Compound = {
  id: string;
  name: string;
  classification: string;
  concentration: string;
  price: number;
  originalPrice?: number;
  subscribePrice: number;
  badge?: "new" | "sale" | "bestseller" | "founders";
  rating?: number;
  reviews?: number;
  tagline: string;
  blurb: string;
  effects: string[];
  halfLife: string;
  form: string;
  stock: "in" | "low" | "waitlist";
  accent: "gold" | "clay" | "moss" | "bone";
};

// Prices & names preserved from 5arsociety.com. Copy is original, written for
// this landing — intentionally editorial, restrained, physician-voiced.
export const compounds: Compound[] = [
  {
    id: "dht-enanthate",
    name: "DHT Enanthate",
    classification: "Pure Androgen · Long Ester",
    concentration: "100 mg/mL · 10 mL",
    price: 220,
    subscribePrice: 187,
    badge: "bestseller",
    rating: 5.0,
    reviews: 148,
    tagline: "The one the founder built the company around.",
    blurb:
      "5α-dihydrotestosterone with a seven-carbon ester for a slow, even release. The molecule your body can't aromatize — pure androgenic signal, delivered weekly.",
    effects: ["Drive & confidence", "Dry, lean physique", "Libido without noise"],
    halfLife: "~6 days",
    form: "Intramuscular oil",
    stock: "in",
    accent: "gold",
  },
  {
    id: "androsterone-enanthate",
    name: "Androsterone Enanthate",
    classification: "Weak Androgen · Metabolite",
    concentration: "100 mg/mL · 10 mL",
    price: 200,
    subscribePrice: 170,
    badge: "new",
    rating: 5.0,
    reviews: 19,
    tagline: "The metabolite that taught us what calm confidence feels like.",
    blurb:
      "A downstream 5α metabolite with mild androgenic tone and a surprisingly clean anxiolytic profile. Think of it as the quiet cousin to DHT — same family, different temperament.",
    effects: ["Steady mood floor", "Subtle recomposition", "Social ease"],
    halfLife: "~6 days",
    form: "Intramuscular oil",
    stock: "in",
    accent: "bone",
  },
  {
    id: "allopregnanolone",
    name: "Allopregnanolone",
    classification: "Neurosteroid · GABAergic",
    concentration: "10 mg/mL · 10 mL",
    price: 120,
    subscribePrice: 102,
    tagline: "Waitlist-only. The nervous system's off switch.",
    blurb:
      "The body's own positive allosteric modulator of GABA-A. Used under protocol for acute anxiolysis and sleep architecture — not recreationally, not casually.",
    effects: ["Rapid anxiolysis", "Deeper sleep stages", "Parasympathetic tone"],
    halfLife: "~45 min (IM)",
    form: "Intramuscular oil",
    stock: "waitlist",
    accent: "moss",
  },
  {
    id: "allopregnanolone-balm",
    name: "Allo Sleep Balm",
    classification: "Topical Neurosteroid",
    concentration: "150 mg per 30 mL · Lavender",
    price: 150,
    subscribePrice: 127,
    tagline: "A nightstand ritual. One pea, behind the ears, before bed.",
    blurb:
      "Allopregnanolone carried in a cold-pressed MCT base with French lavender. Designed to bridge you into sleep the way nothing else in the catalogue can — gently, from the outside in.",
    effects: ["Fall-asleep latency", "Calmer night waking", "No morning haze"],
    halfLife: "Topical · nightly",
    form: "Transdermal balm",
    stock: "in",
    accent: "moss",
  },
  {
    id: "dht-propionate",
    name: "DHT Propionate",
    classification: "Pure Androgen · Short Ester",
    concentration: "50 mg/mL · 10 mL",
    price: 150,
    subscribePrice: 127,
    tagline: "Small doses, frequent windows, precise response.",
    blurb:
      "Same molecule as Enanthate, shorter ester. Peaks fast, clears fast — the right tool for dialing in response before committing to a long ester, or for men who prefer to feel the titration.",
    effects: ["Same-day onset", "Fine-grained control", "Low water retention"],
    halfLife: "~2 days",
    form: "Intramuscular oil",
    stock: "in",
    accent: "gold",
  },
  {
    id: "dhea-enanthate",
    name: "DHEA Enanthate",
    classification: "Prohormone · Long Ester",
    concentration: "100 mg/mL · 10 mL",
    price: 160,
    subscribePrice: 136,
    tagline: "The upstream hormone — finally in a form your body can actually use.",
    blurb:
      "Oral DHEA is a metabolic detour. Injected DHEA with a long ester bypasses first-pass, restoring the substrate your adrenals used to provide in your twenties.",
    effects: ["Upstream restoration", "Skin quality", "Cognitive clarity"],
    halfLife: "~7 days",
    form: "Intramuscular oil",
    stock: "in",
    accent: "bone",
  },
  {
    id: "testosterone-isocaproate",
    name: "Testosterone Isocaproate",
    classification: "Anchor Hormone · Medium Ester",
    concentration: "200 mg/mL · 10 mL",
    price: 75,
    subscribePrice: 64,
    tagline: "The quiet workhorse. Every protocol needs a foundation.",
    blurb:
      "A medium-chain ester of the molecule itself. Priced as an entry point, formulated as an anchor. This is how men start, and how most continue.",
    effects: ["Foundational support", "Smooth kinetics", "Twice-weekly rhythm"],
    halfLife: "~4 days",
    form: "Intramuscular oil",
    stock: "in",
    accent: "bone",
  },
  {
    id: "allopregnanolone-caproate",
    name: "Allopregnanolone Caproate",
    classification: "Esterified Neurosteroid",
    concentration: "100 mg/mL · 10 mL",
    price: 180,
    originalPrice: 200,
    subscribePrice: 153,
    badge: "sale",
    tagline: "The long-acting version. For men who measure sleep in weeks, not nights.",
    blurb:
      "An esterified allopregnanolone with meaningful duration. Weekly dosing, sustained parasympathetic tone, no nightly ritual required — the first of its kind in the consumer catalogue.",
    effects: ["Weekly rhythm", "Sustained calm", "Restorative sleep arc"],
    halfLife: "~5 days",
    form: "Intramuscular oil",
    stock: "low",
    accent: "moss",
  },
  {
    id: "estradiol-cypionate",
    name: "Estradiol Cypionate",
    classification: "Counter-balance · Long Ester",
    concentration: "10 mg/mL · 10 mL",
    price: 75,
    subscribePrice: 64,
    tagline: "Not an afterthought. The number that decides how the rest feel.",
    blurb:
      "Low-dose estradiol, esterified for steady release. The correct counter-balance in an androgen-forward protocol — joints, skin, mood, libido, all downstream of getting this right.",
    effects: ["Joint comfort", "Emotional texture", "Libido ceiling"],
    halfLife: "~8 days",
    form: "Intramuscular oil",
    stock: "in",
    accent: "gold",
  },
];

export type Protocol = {
  id: string;
  name: string;
  subtitle: string;
  positioning: string;
  items: string[];
  bundlePrice: number;
  standalonePrice: number;
  savings: number;
};

export const protocols: Protocol[] = [
  {
    id: "foundation",
    name: "The Foundation",
    subtitle: "Four weeks. Three vials. One baseline.",
    positioning:
      "For the man who's never used anything, but has read enough to be dangerous. Anchor hormone, the right ester, and the counter-balance that keeps it honest.",
    items: ["Testosterone Isocaproate", "Estradiol Cypionate", "Intro Protocol Guide"],
    bundlePrice: 135,
    standalonePrice: 150,
    savings: 15,
  },
  {
    id: "signal",
    name: "The Signal Stack",
    subtitle: "For the man who already has a foundation and wants the signal raised.",
    positioning:
      "Pure androgen on a long ester, paired with the counter-balance. This is what the founder runs, and it's what most long-term members converge on by year two.",
    items: ["DHT Enanthate", "Estradiol Cypionate", "Signal Protocol Guide"],
    bundlePrice: 269,
    standalonePrice: 295,
    savings: 26,
  },
  {
    id: "nocturne",
    name: "The Nocturne",
    subtitle: "Sleep is the protocol most men neglect. Stop neglecting it.",
    positioning:
      "A nightly ritual balm paired with a long-acting injection for men who've optimized everything but the eight hours that make all of it work.",
    items: ["Allopregnanolone Caproate", "Allo Sleep Balm", "Sleep Architecture Guide"],
    bundlePrice: 299,
    standalonePrice: 330,
    savings: 31,
  },
];

export const testimonials = [
  {
    initials: "TM",
    city: "Austin, TX",
    since: "Member since Feb 2025",
    vials: "4 vials · 2 orders",
    quote:
      "DHTE from 5AR has made a tremendous impact on my everyday life. My drive, my clarity, the way I walk into a room — all of it. This is the part of the protocol I wasn't willing to go without once I felt it.",
    compound: "DHT Enanthate",
  },
  {
    initials: "IK",
    city: "Athens, Greece",
    since: "Member since Dec 2024",
    vials: "4 vials · 2 orders",
    quote:
      "I'd tried Proviron. I'd tried 10% transdermal DHT cream. Estered DHT is a different category. Even at conservative replacement doses, the difference in how I feel from week one is honestly hard to overstate.",
    compound: "DHT Enanthate",
  },
  {
    initials: "RB",
    city: "Toronto, ON",
    since: "Founders' Circle",
    vials: "Full protocol · subscribe & save",
    quote:
      "I came in skeptical and I've stayed because everything they've shipped me has been exactly what the COA said it was. Cold chain, glass, label, the guide in the box — this is a company built by someone who cares.",
    compound: "The Foundation",
  },
];

export const faqs = [
  {
    q: "Who is this for, actually?",
    a: "Men over 25 operating a considered hormone protocol, typically under the guidance of a physician or within a harm-reduction framework. We don't write prescriptions and we don't pretend to. We formulate, test, and ship — you decide how to use it.",
  },
  {
    q: "How do I know what's in the vial matches the label?",
    a: "Every batch is third-party tested by a licensed mass-spec lab, and every vial ships with a lot-specific Certificate of Analysis. We publish COAs openly, we don't white-label anyone else's oil, and we don't buy API from sources we haven't personally audited.",
  },
  {
    q: "What does Subscribe & Save change?",
    a: "You lock in 15% off every order, jump the queue on restocks of low-stock items, and get first access to compounds still in trial. You can pause, skip, or cancel in two clicks — no phone calls, no retention scripts.",
  },
  {
    q: "Is there a membership beyond subscribe & save?",
    a: "Yes. Founders' Circle is $199/year and includes a private protocol consult, early access to new compounds (48 hours before public), a curated quarterly drop, and lifetime pricing locks. We cap it at 500 members per cohort.",
  },
  {
    q: "Shipping, packaging, discretion?",
    a: "Plain brown box, no branding on the exterior, ice packs for any compound that needs them, signed-for delivery in the US and EU. Every shipment is covered — if it's damaged in transit, we replace it without a photo dance.",
  },
  {
    q: "What if a compound doesn't agree with me?",
    a: "We offer a 30-day protocol guarantee on your first order. Message the physician-on-call, and if the compound isn't right for your protocol, we'll swap it or credit the account — no restocking fee.",
  },
];
