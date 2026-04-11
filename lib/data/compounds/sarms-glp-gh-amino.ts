import type { SeedCompound } from "../seed-compounds";

export const SARM_COMPOUNDS: SeedCompound[] = [
  {
    slug: "ac-262536",
    name: "AC-262536",
    category: "sarm",
    summary:
      "A partial androgen receptor agonist with lower potency than LGD-4033, studied preclinically for tissue-selective anabolic effects with reduced prostate stimulation.",
    quickVerdict:
      "Very early-stage compound with only animal data. Not well characterized in humans.",
    evidenceScore: 20,
    researchNotes:
      "Rodent studies show roughly 66% of the anabolic activity of testosterone with about 27% of its androgenic activity. No published human trials.",
    cautions:
      "Not approved for human use. No human safety or pharmacokinetic data. Gray-market sourcing carries purity risk.",
    caveats:
      "All efficacy data comes from animal models. Translating partial-agonist profiles to humans is unreliable.",
    benefits: [
      "Preclinical tissue selectivity in rodent models",
      "Lower androgenic activity relative to anabolic effect in animals",
    ],
    dosageNotes: "No human-validated dosing exists.",
    sideEffects: ["Unknown in humans", "Potential hormonal suppression"],
    tags: ["experimental", "research-only"],
    scores: { muscle: 30, recovery: 20 },
  },
  {
    slug: "bms-564929",
    name: "BMS-564929",
    category: "sarm",
    summary:
      "A non-steroidal selective androgen receptor modulator developed by Bristol-Myers Squibb, studied preclinically for androgen-deficiency conditions.",
    quickVerdict:
      "An early pharmaceutical SARM candidate with limited public data. Development appears discontinued.",
    evidenceScore: 20,
    researchNotes:
      "Published preclinical data shows oral bioavailability and tissue selectivity in rats. The compound did not advance into publicly reported human efficacy trials.",
    cautions:
      "Not approved for any clinical use. No publicly available human safety data.",
    caveats:
      "Development status is unclear. All published results are from animal models.",
    benefits: [
      "Demonstrated oral bioavailability in preclinical models",
      "Tissue-selective AR binding in vitro",
    ],
    dosageNotes: "No human dosing established.",
    sideEffects: ["Unknown in humans", "Likely hormonal axis suppression"],
    tags: ["experimental", "research-only", "pharma"],
    scores: { muscle: 25 },
  },
  {
    slug: "cardarine",
    name: "Cardarine (GW501516)",
    category: "sarm",
    summary:
      "A PPARδ receptor agonist (not a true SARM) originally developed by GlaxoSmithKline for metabolic and cardiovascular disease. Commonly grouped with SARMs in the performance-enhancement community.",
    quickVerdict:
      "Strong preclinical endurance and fat-oxidation data, but development was halted over cancer findings in rodent studies. No approved human use.",
    evidenceScore: 35,
    researchNotes:
      "Phase I/II data showed improvements in HDL and triglycerides. Rodent studies demonstrated dramatic endurance gains. Development was discontinued after long-term rodent carcinogenicity studies showed tumor proliferation across multiple organs.",
    cautions:
      "Development halted due to cancer risk in animals. Not approved for human use. WADA-banned substance.",
    caveats:
      "The relevance of rodent carcinogenicity data to human risk at lower doses is debated but unresolved.",
    benefits: [
      "Preclinical evidence for enhanced fatty acid oxidation",
      "Improved lipid profiles in early human trials",
      "Dramatic endurance increases in animal models",
    ],
    dosageNotes: "No safe human dosing established. Clinical trials used 2.5–10 mg/day.",
    sideEffects: ["Cancer risk in rodent models", "Unknown long-term human effects"],
    tags: ["endurance", "fat-loss", "WADA-banned"],
    scores: { energy: 50, "weight-loss": 45 },
  },
  {
    slug: "glpg-0492",
    name: "GLPG-0492",
    category: "sarm",
    summary:
      "A non-steroidal SARM developed by Galapagos NV for muscle wasting and sarcopenia, with Phase I data in healthy volunteers.",
    quickVerdict:
      "One of the few SARMs with published Phase I human data. Development appears paused; no Phase II efficacy results are public.",
    evidenceScore: 28,
    researchNotes:
      "Phase I trial in healthy males showed dose-proportional pharmacokinetics and acceptable tolerability. Preclinical models demonstrated partial reversal of muscle atrophy. No efficacy trial results published.",
    cautions:
      "Not approved for clinical use. Only short-duration human safety data available.",
    caveats:
      "Phase I results address safety and pharmacokinetics, not clinical efficacy.",
    benefits: [
      "Phase I human tolerability data available",
      "Preclinical anti-atrophy effects in disuse models",
    ],
    dosageNotes: "Phase I explored doses up to 12 mg/day. No therapeutic dose established.",
    sideEffects: ["Mild headache in Phase I", "Potential hormonal suppression"],
    tags: ["experimental", "pharma", "muscle-wasting"],
    scores: { muscle: 35, recovery: 25 },
  },
  {
    slug: "gsk-2849466",
    name: "GSK-2849466",
    category: "sarm",
    summary:
      "A tissue-selective androgen receptor modulator from GlaxoSmithKline's SARM program, evaluated in early clinical development for androgen-deficiency states.",
    quickVerdict:
      "Limited publicly available data. Appears to have been discontinued in early development.",
    evidenceScore: 18,
    researchNotes:
      "Part of GSK's broader SARM pipeline. Minimal published preclinical or clinical data beyond early patent filings and conference abstracts.",
    cautions:
      "Not approved for any use. Negligible public safety data.",
    caveats:
      "Insufficient published evidence to draw meaningful conclusions about efficacy or safety.",
    benefits: [
      "Part of a major pharmaceutical SARM research program",
      "Designed for tissue selectivity",
    ],
    dosageNotes: "No dosing information available.",
    sideEffects: ["Unknown in humans"],
    tags: ["experimental", "research-only", "pharma"],
    scores: { muscle: 20 },
  },
  {
    slug: "gsk-2881078",
    name: "GSK-2881078",
    category: "sarm",
    summary:
      "A non-steroidal SARM developed by GlaxoSmithKline that reached Phase II trials for muscle wasting associated with chronic disease and cancer cachexia.",
    quickVerdict:
      "Among the most clinically advanced SARMs with published Phase II data showing lean mass increases. Still not approved for any indication.",
    evidenceScore: 38,
    researchNotes:
      "A Phase II trial in older adults and cancer patients showed modest increases in lean body mass over 12 weeks. HDL suppression was observed dose-dependently. Development status is uncertain.",
    cautions:
      "HDL cholesterol suppression was noted. Not approved for clinical use. Hormonal axis effects expected.",
    caveats:
      "Lean mass gains were statistically significant but clinically modest. Functional improvements were not consistently demonstrated.",
    benefits: [
      "Phase II human data showing lean mass gains",
      "Oral dosing with acceptable short-term tolerability",
      "Tissue-selective design reducing prostate effects",
    ],
    dosageNotes: "Phase II studied 1–2 mg/day. No approved therapeutic dose.",
    sideEffects: ["HDL reduction", "Hormonal suppression", "Headache"],
    tags: ["pharma", "muscle-wasting", "clinical-stage"],
    scores: { muscle: 45, recovery: 30 },
  },
  {
    slug: "gsk-971086",
    name: "GSK-971086",
    category: "sarm",
    summary:
      "An early-stage non-steroidal SARM from GlaxoSmithKline evaluated in Phase I for safety and pharmacokinetics in healthy volunteers.",
    quickVerdict:
      "Limited data beyond early Phase I. Development does not appear to have advanced further.",
    evidenceScore: 18,
    researchNotes:
      "Phase I data in healthy males demonstrated tolerability at tested doses. No efficacy data published. The compound appears to have been deprioritized within GSK's SARM portfolio.",
    cautions:
      "Not approved for any indication. Only short-term safety data available.",
    caveats:
      "No efficacy evidence. Phase I safety does not imply therapeutic benefit.",
    benefits: [
      "Completed Phase I safety assessment",
      "Oral bioavailability confirmed in humans",
    ],
    dosageNotes: "No therapeutic dosing established.",
    sideEffects: ["Unknown beyond Phase I tolerability data"],
    tags: ["experimental", "research-only", "pharma"],
    scores: { muscle: 20 },
  },
  {
    slug: "gtx-027",
    name: "GTX-027",
    category: "sarm",
    summary:
      "A next-generation SARM from GTx Inc. (now Oncternal Therapeutics), designed as a follow-up to enobosarm (ostarine) with improved selectivity for muscle and bone.",
    quickVerdict:
      "Preclinical successor to ostarine. Very limited public data on human use.",
    evidenceScore: 22,
    researchNotes:
      "GTx developed this compound as an improved SARM candidate after ostarine's mixed Phase III results. Published data is primarily from patent filings and preclinical pharmacology. No published human efficacy trial results.",
    cautions:
      "Not approved for any use. Minimal human data available.",
    caveats:
      "Clinical development status is unclear following GTx's corporate restructuring.",
    benefits: [
      "Designed for improved tissue selectivity over ostarine",
      "Preclinical anabolic activity in bone and muscle models",
    ],
    dosageNotes: "No human dosing information publicly available.",
    sideEffects: ["Unknown in humans", "Expected hormonal suppression"],
    tags: ["experimental", "research-only"],
    scores: { muscle: 30, recovery: 20 },
  },
  {
    slug: "gw0742",
    name: "GW0742",
    category: "sarm",
    summary:
      "A PPARδ agonist closely related to cardarine (GW501516), studied preclinically for metabolic, anti-inflammatory, and exercise-mimetic effects. Not a true SARM.",
    quickVerdict:
      "Similar mechanism to cardarine with less published data. No approved human use and similar safety uncertainties.",
    evidenceScore: 22,
    researchNotes:
      "Animal studies show anti-inflammatory and lipid-modulating effects. Some preclinical evidence suggests a potentially different safety profile from GW501516, but the data is insufficient to confirm this.",
    cautions:
      "Shares the PPARδ mechanism linked to carcinogenicity concerns with GW501516. Not approved for human use.",
    caveats:
      "Less studied than cardarine. Claims of a better safety profile are not supported by adequate comparative data.",
    benefits: [
      "Preclinical anti-inflammatory effects",
      "Lipid profile improvements in animal models",
      "Potential exercise-mimetic properties",
    ],
    dosageNotes: "No human dosing established.",
    sideEffects: ["Unknown in humans", "Potential carcinogenicity risk (PPARδ class concern)"],
    tags: ["experimental", "metabolic", "research-only"],
    scores: { energy: 30, "weight-loss": 25 },
  },
  {
    slug: "lgd-4033",
    name: "LGD-4033 (Ligandrol)",
    category: "sarm",
    summary:
      "One of the most studied non-steroidal SARMs, originally developed by Ligand Pharmaceuticals and later licensed to Viking Therapeutics. Phase I/II human data is available.",
    quickVerdict:
      "Demonstrated lean mass gains in short-term Phase I/II trials but with dose-dependent hormonal suppression. Not approved for clinical use.",
    evidenceScore: 42,
    researchNotes:
      "A 21-day Phase I trial in healthy men showed dose-dependent increases in lean body mass and decreases in body fat. Significant suppression of total testosterone and SHBG was observed. Viking Therapeutics has advanced VK5211 (ligandrol) in Phase II for hip-fracture recovery.",
    cautions:
      "Causes dose-dependent testosterone suppression. Not approved for human use. WADA-banned substance.",
    caveats:
      "Short trial durations make long-term safety and efficacy uncertain. Functional outcome data is limited.",
    benefits: [
      "Phase I lean mass gains at doses as low as 1 mg/day",
      "Oral bioavailability with once-daily dosing",
      "Phase II trial in hip fracture recovery underway",
    ],
    dosageNotes: "Phase I used 0.1–1 mg/day over 21 days. No approved dose.",
    sideEffects: ["Testosterone suppression", "HDL reduction", "Headache", "Fatigue"],
    tags: ["clinical-stage", "WADA-banned", "muscle"],
    scores: { muscle: 55, recovery: 35, libido: 15 },
  },
  {
    slug: "mk-3984",
    name: "MK-3984",
    category: "sarm",
    summary:
      "A SARM candidate from Merck evaluated in preclinical development for musculoskeletal conditions. Very limited public information exists.",
    quickVerdict:
      "Obscure early-stage compound. Insufficient data for any meaningful assessment.",
    evidenceScore: 15,
    researchNotes:
      "Appears in Merck patent filings as part of a SARM discovery program. No published preclinical or clinical trial reports found in the peer-reviewed literature.",
    cautions:
      "Not approved for any use. No known human data.",
    caveats:
      "Lack of published data makes any assessment speculative.",
    benefits: [
      "Part of a major pharmaceutical SARM research effort",
      "Tissue-selective design intent per patent filings",
    ],
    dosageNotes: "No dosing information available.",
    sideEffects: ["Completely unknown"],
    tags: ["experimental", "research-only"],
    scores: { muscle: 15 },
  },
  {
    slug: "ostarine",
    name: "Ostarine (MK-2866)",
    category: "sarm",
    summary:
      "The most extensively studied SARM, developed by GTx Inc. for muscle wasting and osteoporosis. Reached Phase III trials but did not gain FDA approval.",
    quickVerdict:
      "The best-characterized SARM with Phase III data. Showed lean mass gains but failed to meet primary functional endpoints in pivotal cancer-cachexia trials.",
    evidenceScore: 45,
    researchNotes:
      "Phase II trials showed dose-dependent lean mass increases in healthy elderly and cancer patients. Two Phase III trials (POWER 1 & 2) for cancer cachexia met the lean mass co-primary endpoint but missed the stair-climb power endpoint, leading to an FDA Complete Response Letter.",
    cautions:
      "Suppresses testosterone dose-dependently. Liver enzyme elevations reported in some users. WADA-banned. Not FDA-approved.",
    caveats:
      "Lean mass gains did not consistently translate into functional improvements in Phase III. This is the central limitation of current SARM development.",
    benefits: [
      "Phase III lean mass data in cancer cachexia",
      "Oral once-daily dosing",
      "Most extensive human safety database among SARMs",
    ],
    dosageNotes: "Phase II/III trials used 1–3 mg/day. No approved dose.",
    sideEffects: ["Testosterone suppression", "Liver enzyme elevations", "Headache", "Back pain"],
    tags: ["clinical-stage", "WADA-banned", "most-studied"],
    scores: { muscle: 50, recovery: 30 },
  },
  {
    slug: "rad-140",
    name: "RAD-140 (Testolone)",
    category: "sarm",
    summary:
      "A potent non-steroidal SARM developed by Radius Health, notable for a high anabolic-to-androgenic ratio in preclinical models. Phase I data exists in breast cancer.",
    quickVerdict:
      "High preclinical potency but very limited human data. Reports of liver toxicity in case series raise safety concerns.",
    evidenceScore: 30,
    researchNotes:
      "Preclinical data shows strong anabolic activity with relative prostate sparing. A Phase I trial in ER+/AR+ metastatic breast cancer assessed safety and preliminary efficacy. Multiple published case reports document drug-induced liver injury in recreational users.",
    cautions:
      "Multiple case reports of serious liver injury. Potent hormonal suppression expected. WADA-banned. Not approved for any use.",
    caveats:
      "The only human trial is in metastatic breast cancer — not in healthy or muscle-wasting populations. Liver toxicity reports are concerning.",
    benefits: [
      "High anabolic-to-androgenic ratio in animals",
      "Strong preclinical muscle and bone data",
      "Neuroprotective effects observed in vitro",
    ],
    dosageNotes: "No established safe dose for healthy humans. Phase I cancer trial used 50–150 mg/day.",
    sideEffects: ["Liver toxicity (case reports)", "Severe testosterone suppression", "Aggression"],
    tags: ["potent", "WADA-banned", "liver-risk"],
    scores: { muscle: 50, recovery: 25 },
  },
  {
    slug: "s-23",
    name: "S-23",
    category: "sarm",
    summary:
      "A potent oral SARM studied in rodent models as a potential male hormonal contraceptive due to its strong suppression of gonadotropins and spermatogenesis.",
    quickVerdict:
      "Among the most potent SARMs in animal models but also the most suppressive. No published human data.",
    evidenceScore: 22,
    researchNotes:
      "Rat studies showed full reversible azoospermia alongside significant muscle and bone gains. Potency approaches that of androgens but with substantial hormonal suppression, blurring the line between SARM and anabolic steroid.",
    cautions:
      "Extremely suppressive to the hypothalamic-pituitary-gonadal axis in animals. No human safety data. Not approved for any use.",
    caveats:
      "The high degree of suppression challenges the concept of tissue selectivity. All data is preclinical.",
    benefits: [
      "Strong anabolic effects in rodent models",
      "Reversible contraceptive effect in male rats",
      "Oral bioavailability demonstrated preclinically",
    ],
    dosageNotes: "No human dosing established. Rodent studies used 0.1–3 mg/kg.",
    sideEffects: ["Near-complete gonadal suppression in animals", "Prostate effects at higher doses"],
    tags: ["experimental", "potent", "research-only"],
    scores: { muscle: 45, libido: 10 },
  },
  {
    slug: "slu-pp-332",
    name: "SLU-PP-332",
    category: "sarm",
    summary:
      "An ERRα/ERRγ agonist developed at Washington University, studied as an exercise mimetic that activates endurance-related gene programs without androgen receptor binding. Not a true SARM.",
    quickVerdict:
      "A novel exercise-mimetic compound with promising rodent data. Entirely preclinical and mechanistically distinct from SARMs.",
    evidenceScore: 18,
    researchNotes:
      "Rodent studies published in 2023 showed increased fatigue resistance, enhanced oxidative muscle fiber content, and reduced fat mass without changes in food intake. No human data.",
    cautions:
      "Not approved for human use. No human pharmacokinetic or safety data. Mechanism is distinct from traditional SARMs.",
    caveats:
      "Exercise-mimetic claims are based on rodent treadmill performance. Human translation is entirely speculative.",
    benefits: [
      "Enhanced endurance capacity in mouse models",
      "Reduced fat mass without affecting food intake in animals",
      "Increased oxidative muscle fiber proportion preclinically",
    ],
    dosageNotes: "No human dosing data. Rodent studies used intraperitoneal injection.",
    sideEffects: ["Unknown in humans"],
    tags: ["experimental", "exercise-mimetic", "research-only"],
    scores: { energy: 25, "weight-loss": 20, muscle: 20 },
  },
  {
    slug: "sr-9011",
    name: "SR-9011",
    category: "sarm",
    summary:
      "A Rev-Erbα/β agonist closely related to SR9009, studied as a circadian-clock modulator and exercise mimetic in rodent models. Not a true SARM.",
    quickVerdict:
      "Very similar profile to SR9009 with marginal published evidence. Entirely preclinical.",
    evidenceScore: 18,
    researchNotes:
      "Shares the Rev-Erb agonist mechanism with SR9009. Animal studies suggest effects on metabolism, exercise capacity, and circadian gene expression. No published human pharmacokinetic or efficacy data.",
    cautions:
      "No human safety data. Bioavailability in humans is unknown. Not approved for any use.",
    caveats:
      "Oral bioavailability may be very poor in humans, similar to concerns with SR9009.",
    benefits: [
      "Modulates circadian metabolic pathways in animals",
      "Increased energy expenditure in rodent models",
    ],
    dosageNotes: "No human dosing data available.",
    sideEffects: ["Unknown in humans", "Potential circadian disruption"],
    tags: ["experimental", "circadian", "research-only"],
    scores: { energy: 20, "weight-loss": 15 },
  },
  {
    slug: "sr9009",
    name: "SR9009 (Stenabolic)",
    category: "sarm",
    summary:
      "A synthetic Rev-Erbα agonist developed at Scripps Research, studied as a circadian-rhythm modulator with exercise-mimetic properties in mice. Not a true SARM.",
    quickVerdict:
      "Compelling rodent data for metabolism and endurance, but oral bioavailability in humans is likely very poor. No human clinical trials.",
    evidenceScore: 25,
    researchNotes:
      "Mouse studies showed increased running endurance, fat loss, and altered circadian gene expression. A pharmacokinetic analysis suggests oral bioavailability may be under 5% in primates, raising questions about whether oral dosing achieves effective concentrations in humans.",
    cautions:
      "Extremely low oral bioavailability likely limits human efficacy of oral formulations. Not approved for human use.",
    caveats:
      "The disconnect between dramatic mouse results and poor oral bioavailability is the central issue. Injectable or sublingual routes are unvalidated.",
    benefits: [
      "Robust endurance and fat-loss effects in mice",
      "Modulates circadian metabolism pathways",
      "Reduced anxiety-like behavior in animal models",
    ],
    dosageNotes: "No human dosing established. Mouse studies used 100 mg/kg IP injection.",
    sideEffects: ["Unknown in humans", "Poor oral bioavailability may render oral use ineffective"],
    tags: ["circadian", "exercise-mimetic", "bioavailability-concern"],
    scores: { energy: 30, "weight-loss": 25, longevity: 20 },
  },
];

export const GLP_COMPOUNDS: SeedCompound[] = [
  {
    slug: "albiglutide",
    name: "Albiglutide",
    category: "glp",
    summary:
      "A once-weekly GLP-1 receptor agonist (brand name Tanzeum) that was FDA-approved for type 2 diabetes but voluntarily withdrawn from the market in 2018 for commercial reasons.",
    quickVerdict:
      "Proven glycemic efficacy but less weight loss than newer GLP-1 RAs. No longer commercially available.",
    evidenceScore: 78,
    researchNotes:
      "The HARMONY outcomes trial demonstrated cardiovascular benefit. Glycemic efficacy was established in the HARMONY Phase III program. Weight loss was modest compared to liraglutide and semaglutide. Withdrawal was due to low market uptake, not safety.",
    cautions:
      "No longer manufactured. Contraindicated in personal or family history of medullary thyroid carcinoma or MEN2. GI side effects are common with all GLP-1 RAs.",
    caveats:
      "Market withdrawal limits practical relevance. Cardiovascular outcome data was positive but the trial completed after commercial withdrawal.",
    benefits: [
      "Demonstrated cardiovascular risk reduction (HARMONY)",
      "Once-weekly dosing convenience",
      "Established glycemic efficacy in Phase III",
    ],
    dosageNotes: "Was dosed at 30–50 mg subcutaneously once weekly.",
    sideEffects: ["Nausea", "Injection site reactions", "Diarrhea"],
    tags: ["discontinued", "GLP-1", "diabetes"],
    scores: { "weight-loss": 45 },
  },
  {
    slug: "cagrilintide",
    name: "Cagrilintide",
    category: "glp",
    summary:
      "A long-acting acylated amylin analog developed by Novo Nordisk, designed to reduce appetite and food intake through amylin receptor signaling. Studied as monotherapy and in combination with semaglutide.",
    quickVerdict:
      "Significant weight loss in Phase II as monotherapy. The combination with semaglutide (CagriSema) is the primary development focus.",
    evidenceScore: 65,
    researchNotes:
      "Phase II monotherapy data showed up to ~10% weight loss over 26 weeks. The mechanism complements GLP-1 by targeting the amylin pathway. Most development resources are now focused on the CagriSema combination.",
    cautions:
      "Not yet approved. GI side effects are common. Long-term safety data is still being collected.",
    caveats:
      "Phase II data only. The standalone clinical profile may be less relevant than the combination product.",
    benefits: [
      "Novel amylin-based mechanism distinct from GLP-1",
      "Meaningful Phase II weight loss as monotherapy",
      "Complementary to GLP-1 receptor agonism",
    ],
    dosageNotes: "Phase II studied 1.2–4.5 mg subcutaneously once weekly.",
    sideEffects: ["Nausea", "Vomiting", "Diarrhea", "Injection site reactions"],
    tags: ["amylin", "weight-loss", "investigational"],
    scores: { "weight-loss": 60 },
  },
  {
    slug: "cagrisema",
    name: "CagriSema",
    category: "glp",
    summary:
      "A fixed-dose combination of cagrilintide (amylin analog) and semaglutide (GLP-1 RA) developed by Novo Nordisk, targeting weight loss through dual hormonal pathways.",
    quickVerdict:
      "Phase III data shows ~25% mean weight loss, rivaling surgical outcomes. Regulatory submission expected. Could become a best-in-class obesity treatment.",
    evidenceScore: 72,
    researchNotes:
      "The REDEFINE Phase III program reported approximately 25% mean body weight loss at 68 weeks, exceeding semaglutide 2.4 mg monotherapy. The dual mechanism targets both GLP-1 and amylin receptors for additive appetite suppression.",
    cautions:
      "Not yet approved. GI tolerability burden may be higher than either component alone. Cost and access will be considerations.",
    caveats:
      "Phase III results are strong but regulatory approval is still pending. Long-term weight maintenance data is not yet available.",
    benefits: [
      "~25% mean weight loss in Phase III trials",
      "Dual-mechanism approach exceeding GLP-1 monotherapy",
      "Once-weekly subcutaneous injection",
    ],
    dosageNotes: "Fixed combination of cagrilintide 2.4 mg + semaglutide 2.4 mg once weekly in Phase III.",
    sideEffects: ["Nausea", "Vomiting", "Diarrhea", "Constipation"],
    tags: ["dual-mechanism", "weight-loss", "Phase-III"],
    scores: { "weight-loss": 85 },
  },
  {
    slug: "dulaglutide",
    name: "Dulaglutide",
    category: "glp",
    summary:
      "A once-weekly GLP-1 receptor agonist (brand name Trulicity) FDA-approved for type 2 diabetes with demonstrated cardiovascular benefit in the REWIND outcomes trial.",
    quickVerdict:
      "A well-established diabetes medication with cardiovascular benefit. Weight loss is moderate relative to semaglutide and tirzepatide.",
    evidenceScore: 88,
    researchNotes:
      "The AWARD Phase III program established glycemic efficacy across multiple comparators. REWIND demonstrated a reduction in major adverse cardiovascular events in a broad type 2 diabetes population. Weight loss averages 3–5 kg, less than semaglutide.",
    cautions:
      "Contraindicated in personal or family history of medullary thyroid carcinoma or MEN2. GI side effects are common during titration.",
    caveats:
      "Weight loss is less than newer GLP-1 RAs. Not FDA-approved specifically for obesity.",
    benefits: [
      "FDA-approved with extensive safety database",
      "Cardiovascular risk reduction (REWIND)",
      "Simple autoinjector with once-weekly dosing",
    ],
    dosageNotes: "0.75 mg or 1.5 mg subcutaneously once weekly. Up to 4.5 mg for additional glycemic control.",
    sideEffects: ["Nausea", "Diarrhea", "Abdominal pain", "Decreased appetite"],
    tags: ["FDA-approved", "diabetes", "cardiovascular"],
    scores: { "weight-loss": 55 },
  },
  {
    slug: "exenatide",
    name: "Exenatide",
    category: "glp",
    summary:
      "The first commercially available GLP-1 receptor agonist, derived from Gila monster venom (exendin-4). Available as twice-daily (Byetta) and once-weekly (Bydureon) formulations.",
    quickVerdict:
      "A pioneering GLP-1 RA with a long safety track record. Largely superseded by once-weekly agents with greater efficacy.",
    evidenceScore: 85,
    researchNotes:
      "Extensive clinical trial data supports glycemic efficacy. The EXSCEL cardiovascular outcomes trial showed non-inferiority but not superiority for MACE. Weight loss is modest (2–3 kg). The drug has the longest post-marketing surveillance of any GLP-1 RA.",
    cautions:
      "Contraindicated in personal or family history of medullary thyroid carcinoma or MEN2. Not recommended in severe renal impairment. Injection-site nodules with extended-release formulation.",
    caveats:
      "Largely been replaced by newer agents with better efficacy and dosing convenience. Cardiovascular superiority was not demonstrated.",
    benefits: [
      "Longest post-marketing safety track record in GLP-1 class",
      "Available in twice-daily and once-weekly formulations",
      "Proven glycemic efficacy",
    ],
    dosageNotes: "Byetta: 5–10 mcg twice daily. Bydureon: 2 mg once weekly.",
    sideEffects: ["Nausea", "Vomiting", "Injection-site nodules (Bydureon)", "Headache"],
    tags: ["FDA-approved", "first-in-class", "diabetes"],
    scores: { "weight-loss": 40 },
  },
  {
    slug: "glp-1",
    name: "GLP-1",
    category: "glp",
    summary:
      "Glucagon-like peptide-1, an endogenous incretin hormone secreted by intestinal L-cells in response to food intake. It stimulates insulin secretion, suppresses glucagon, slows gastric emptying, and promotes satiety.",
    quickVerdict:
      "The physiological hormone that all GLP-1 receptor agonist drugs are designed to mimic. Native GLP-1 has a half-life of only 2–3 minutes due to rapid DPP-4 degradation.",
    evidenceScore: 90,
    researchNotes:
      "GLP-1 physiology is extremely well characterized. Infusion studies confirm glucose-dependent insulinotropic effects, appetite suppression, and gastric emptying delay. The incretin effect accounts for roughly 50–70% of postprandial insulin secretion. Deficient GLP-1 signaling contributes to type 2 diabetes pathophysiology.",
    cautions:
      "Native GLP-1 is not used therapeutically due to its ultra-short half-life. Continuous IV infusion has been used in research settings only.",
    caveats:
      "Understanding GLP-1 physiology is well established, but translating endogenous hormone biology to exogenous drug effects involves important pharmacological differences.",
    benefits: [
      "Central role in glucose homeostasis and the incretin effect",
      "Well-characterized appetite and satiety signaling",
      "Foundation for the entire GLP-1 RA drug class",
    ],
    dosageNotes: "Not used as a therapeutic agent. Research infusions used 0.5–1.5 pmol/kg/min IV.",
    sideEffects: ["Nausea at supraphysiological concentrations", "Transient hypoglycemia risk with exogenous insulin"],
    tags: ["endogenous", "incretin", "physiology"],
    scores: { "weight-loss": 50 },
  },
  {
    slug: "liraglutide",
    name: "Liraglutide",
    category: "glp",
    summary:
      "A once-daily GLP-1 receptor agonist FDA-approved for type 2 diabetes (Victoza, 1.8 mg) and obesity (Saxenda, 3.0 mg). Demonstrated cardiovascular benefit in the LEADER trial.",
    quickVerdict:
      "A well-proven GLP-1 RA with dual FDA approvals and cardiovascular outcome data. Weight loss (~8% in SCALE trials) is less than semaglutide but clinically meaningful.",
    evidenceScore: 92,
    researchNotes:
      "The LEADER trial showed a 13% reduction in major cardiovascular events. The SCALE obesity trials demonstrated approximately 8% mean weight loss versus placebo at 3.0 mg/day. Extensive post-marketing safety data is available.",
    cautions:
      "Contraindicated in personal or family history of medullary thyroid carcinoma or MEN2. GI side effects are common, especially during dose escalation.",
    caveats:
      "Daily injection is less convenient than weekly alternatives. Weight loss magnitude is surpassed by semaglutide and tirzepatide.",
    benefits: [
      "Dual FDA approval for diabetes and obesity",
      "Cardiovascular risk reduction (LEADER)",
      "Extensive long-term safety data",
    ],
    dosageNotes: "Diabetes: titrate to 1.8 mg/day. Obesity: titrate to 3.0 mg/day over 4–5 weeks.",
    sideEffects: ["Nausea", "Vomiting", "Diarrhea", "Constipation", "Injection site reactions"],
    tags: ["FDA-approved", "obesity", "cardiovascular"],
    scores: { "weight-loss": 72 },
  },
  {
    slug: "pramlintide",
    name: "Pramlintide",
    category: "glp",
    summary:
      "A synthetic analog of amylin (brand name Symlin), FDA-approved as an adjunct to insulin in type 1 and type 2 diabetes. Slows gastric emptying, suppresses glucagon, and reduces appetite.",
    quickVerdict:
      "The only FDA-approved amylin analog. Modest weight loss and glucose-smoothing effects, but three-times-daily dosing limits adoption.",
    evidenceScore: 80,
    researchNotes:
      "FDA-approved since 2005. Clinical trials showed reduced postprandial glucose excursions and modest weight loss (1–2 kg) when added to insulin. Requires careful insulin dose adjustment to avoid hypoglycemia. Commercial uptake has been limited by injection frequency.",
    cautions:
      "Must reduce prandial insulin dose by 50% when initiating to avoid hypoglycemia. Contraindicated in gastroparesis. Requires injection before each meal.",
    caveats:
      "Weight loss is modest. The need for premeal injection alongside insulin reduces practicality.",
    benefits: [
      "FDA-approved with established safety profile",
      "Reduces postprandial glucose spikes",
      "Modest weight loss as add-on to insulin",
    ],
    dosageNotes: "Type 2: 120 mcg before major meals. Type 1: 15–60 mcg before meals, titrated.",
    sideEffects: ["Nausea", "Hypoglycemia (with insulin)", "Headache", "Anorexia"],
    tags: ["FDA-approved", "amylin", "diabetes"],
    scores: { "weight-loss": 40 },
  },
  {
    slug: "retatrutide",
    name: "Retatrutide",
    category: "glp",
    summary:
      "A triple agonist targeting GLP-1, GIP, and glucagon receptors, developed by Eli Lilly. Phase II data showed unprecedented weight loss exceeding 24% at 48 weeks.",
    quickVerdict:
      "Potentially the most efficacious obesity compound in development. Phase II weight loss rivaled bariatric surgery outcomes. Phase III trials are ongoing.",
    evidenceScore: 68,
    researchNotes:
      "Phase II data showed up to 24.2% mean weight loss at the 12 mg dose over 48 weeks. The glucagon receptor component may contribute additional energy expenditure and hepatic fat reduction. Phase III trials are underway for obesity and type 2 diabetes.",
    cautions:
      "Not yet approved. GI side effects are common. Long-term safety of triple agonism, particularly the glucagon component, requires further evaluation.",
    caveats:
      "Phase II results, while striking, involve relatively small sample sizes. Phase III confirmation is needed.",
    benefits: [
      "~24% mean weight loss in Phase II at highest dose",
      "Triple-receptor mechanism targeting multiple metabolic pathways",
      "Once-weekly subcutaneous dosing",
      "Potential hepatic fat reduction via glucagon agonism",
    ],
    dosageNotes: "Phase II studied 1–12 mg subcutaneously once weekly with dose titration.",
    sideEffects: ["Nausea", "Diarrhea", "Vomiting", "Constipation"],
    tags: ["triple-agonist", "weight-loss", "investigational"],
    scores: { "weight-loss": 82, longevity: 35 },
  },
  {
    slug: "semaglutide",
    name: "Semaglutide",
    category: "glp",
    summary:
      "A once-weekly GLP-1 receptor agonist FDA-approved for type 2 diabetes (Ozempic), obesity (Wegovy), and available in oral form (Rybelsus). Demonstrated cardiovascular and renal benefits.",
    quickVerdict:
      "The current standard-bearer for GLP-1 therapy with robust efficacy across diabetes, obesity, cardiovascular, and kidney endpoints. Transformative weight loss (~15% in STEP trials).",
    evidenceScore: 95,
    researchNotes:
      "The STEP program demonstrated ~15% mean weight loss at 2.4 mg/week. SUSTAIN-6 and SELECT showed cardiovascular benefit in diabetes and obesity populations respectively. Oral semaglutide (Rybelsus) provides a non-injectable option. SELECT showed a 20% reduction in MACE in people with obesity without diabetes.",
    cautions:
      "Contraindicated in personal or family history of medullary thyroid carcinoma or MEN2. GI side effects are common. Concerns about pancreatitis, gallbladder events, and potential thyroid C-cell tumors.",
    caveats:
      "Long-term weight regain after discontinuation is well documented. Cost and access remain barriers. GI tolerability can limit titration in some patients.",
    benefits: [
      "~15% mean weight loss in obesity trials",
      "Cardiovascular risk reduction in diabetes and obesity",
      "Available as injectable and oral formulations",
      "Renal protective effects emerging from trial data",
    ],
    dosageNotes: "Obesity: titrate to 2.4 mg SC weekly over 16 weeks. Diabetes: up to 1 mg SC weekly. Oral: 7–14 mg daily.",
    sideEffects: ["Nausea", "Vomiting", "Diarrhea", "Constipation", "Gallbladder events"],
    tags: ["FDA-approved", "weight-loss", "cardiovascular"],
    scores: { "weight-loss": 90, longevity: 55 },
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    category: "glp",
    summary:
      "A dual GLP-1/GIP receptor agonist (Mounjaro for diabetes, Zepbound for obesity) that demonstrated weight loss exceeding 20% in the SURMOUNT trials, surpassing GLP-1 monotherapy.",
    quickVerdict:
      "Currently the most efficacious approved anti-obesity medication, with ~21% mean weight loss in SURMOUNT-1. Dual mechanism may offer advantages over pure GLP-1 RAs.",
    evidenceScore: 93,
    researchNotes:
      "SURMOUNT-1 showed 20.9% mean weight loss at the highest dose (15 mg) over 72 weeks. SURPASS trials demonstrated superior glycemic control versus semaglutide 1 mg. The GIP receptor component may enhance tolerability and provide additional metabolic effects beyond GLP-1 alone.",
    cautions:
      "Contraindicated in personal or family history of medullary thyroid carcinoma or MEN2. GI side effects are the most common reason for discontinuation.",
    caveats:
      "Long-term cardiovascular outcomes data (SURPASS-CVOT) is not yet reported. Weight regain after discontinuation is expected, as with other GLP-1 RAs.",
    benefits: [
      "~21% mean weight loss at highest dose in SURMOUNT-1",
      "Superior glycemic control versus semaglutide 1 mg",
      "Dual GLP-1/GIP mechanism with potentially better tolerability",
      "Once-weekly subcutaneous injection",
    ],
    dosageNotes: "Titrate from 2.5 mg to 5, 10, or 15 mg SC weekly based on tolerability and response.",
    sideEffects: ["Nausea", "Diarrhea", "Vomiting", "Constipation", "Injection site reactions"],
    tags: ["FDA-approved", "dual-agonist", "weight-loss"],
    scores: { "weight-loss": 92, longevity: 50 },
  },
];

export const GH_COMPOUNDS: SeedCompound[] = [
  {
    slug: "ibutamoren",
    name: "Ibutamoren (MK-677)",
    category: "growth_hormone",
    summary:
      "A non-peptide ghrelin receptor agonist (growth hormone secretagogue) that stimulates pulsatile GH and IGF-1 release orally. Studied in elderly, GH-deficient, and obese populations.",
    quickVerdict:
      "Reliably raises GH and IGF-1 levels with oral dosing. Clinical benefits for body composition and function are modest and accompanied by notable side effects including increased appetite and insulin resistance.",
    evidenceScore: 55,
    researchNotes:
      "Multiple trials in elderly subjects show sustained increases in GH and IGF-1 over months. Some trials report modest lean mass gains and improved sleep quality. However, fasting glucose and insulin resistance consistently worsen. A 2-year trial in elderly adults did not demonstrate functional benefits despite hormonal changes.",
    cautions:
      "Worsens insulin sensitivity. May elevate fasting glucose. Not FDA-approved. Contraindicated in diabetes or pre-diabetes. Cancer risk from chronically elevated IGF-1 is a theoretical concern.",
    caveats:
      "Raising GH/IGF-1 levels does not automatically translate to clinical benefit. The 2-year elderly trial is a key cautionary result.",
    benefits: [
      "Reliable oral GH and IGF-1 elevation",
      "May improve sleep quality and REM duration",
      "Modest lean mass gains in some trials",
      "Convenient oral dosing unlike GH peptides",
    ],
    dosageNotes: "Clinical trials used 25 mg once daily, typically in the evening.",
    sideEffects: ["Increased appetite", "Water retention", "Insulin resistance", "Elevated fasting glucose", "Lethargy"],
    tags: ["GH-secretagogue", "oral", "insulin-risk"],
    scores: { muscle: 50, recovery: 45, sleep: 55, longevity: 25 },
  },
];

export const AMINO_ACID_COMPOUNDS: SeedCompound[] = [
  {
    slug: "agmatine",
    name: "Agmatine",
    category: "amino_acid",
    summary:
      "A biogenic amine produced by decarboxylation of arginine, acting on imidazoline receptors, NMDA receptors, and nitric oxide pathways. Studied for pain, mood, and neuroprotection.",
    quickVerdict:
      "Preliminary human evidence for neuropathic pain and mood. Interesting multi-target pharmacology but most data is preclinical.",
    evidenceScore: 45,
    researchNotes:
      "Small open-label studies suggest benefits for neuropathic pain and as an adjunct in depression. Preclinical data shows NMDA antagonism, NOS inhibition, and imidazoline receptor activation. Randomized controlled trial data is sparse.",
    cautions:
      "May interact with blood-pressure medications. Theoretical interactions with NMDA-active drugs. Not well studied in pregnancy.",
    caveats:
      "Most human studies are open-label or case series. The multi-target mechanism makes specific claims difficult to validate.",
    benefits: [
      "Preliminary evidence for neuropathic pain reduction",
      "Possible mood-enhancing effects as adjunct therapy",
      "Nitric oxide modulation supporting blood flow",
    ],
    dosageNotes: "Typical supplemental range is 500–2000 mg/day in divided doses.",
    sideEffects: ["GI discomfort", "Mild hypotension in sensitive individuals"],
    tags: ["pain", "mood", "nitric-oxide"],
    scores: { pain: 50, mood: 40, muscle: 25 },
  },
  {
    slug: "arginine",
    name: "Arginine",
    category: "amino_acid",
    summary:
      "A conditionally essential amino acid and the direct substrate for nitric oxide synthase. Widely used for cardiovascular support, exercise performance, and erectile function.",
    quickVerdict:
      "Reasonable evidence for blood-pressure reduction and mild exercise-performance effects. Citrulline may be a more effective NO precursor due to better oral bioavailability.",
    evidenceScore: 62,
    researchNotes:
      "Meta-analyses support a small but consistent blood-pressure-lowering effect (2–5 mmHg systolic). Exercise studies show mixed results for performance. Oral bioavailability is limited by extensive first-pass metabolism. Citrulline raises plasma arginine more effectively.",
    cautions:
      "Avoid in active herpes outbreaks (theoretical concern of promoting viral replication). May interact with blood-pressure and nitrate medications.",
    caveats:
      "Oral absorption is suboptimal. Citrulline often achieves higher plasma arginine levels than arginine itself.",
    benefits: [
      "Modest blood-pressure reduction in meta-analyses",
      "Substrate for nitric oxide production",
      "May improve erectile function in mild cases",
    ],
    dosageNotes: "3–6 g/day in divided doses. Higher doses may cause GI distress.",
    sideEffects: ["GI discomfort at high doses", "Bloating", "Diarrhea"],
    tags: ["nitric-oxide", "cardiovascular", "performance"],
    scores: { muscle: 30, recovery: 35, libido: 35 },
  },
  {
    slug: "citrulline",
    name: "Citrulline",
    category: "amino_acid",
    summary:
      "A non-protein amino acid that serves as a more effective oral precursor to arginine and nitric oxide than arginine itself, bypassing hepatic first-pass metabolism.",
    quickVerdict:
      "Better at raising plasma arginine than arginine supplements. Moderate evidence for blood-pressure reduction and exercise performance.",
    evidenceScore: 65,
    researchNotes:
      "Citrulline bypasses hepatic arginase, resulting in higher sustained plasma arginine than equivalent oral arginine doses. Meta-analyses show small blood-pressure reductions. Exercise studies show modest improvements in high-repetition resistance training and reduced perceived exertion.",
    cautions:
      "Low risk profile. Theoretical interactions with PDE5 inhibitors and nitrates due to NO pathway effects.",
    caveats:
      "Performance benefits are modest and most evident in high-volume training protocols. Acute effects on maximal strength are inconsistent.",
    benefits: [
      "Raises plasma arginine more effectively than arginine itself",
      "May reduce blood pressure modestly",
      "Improves exercise tolerance in high-rep protocols",
    ],
    dosageNotes: "3–6 g/day of L-citrulline. Often taken 30–60 minutes before exercise.",
    sideEffects: ["Mild GI discomfort at high doses"],
    tags: ["nitric-oxide", "performance", "blood-flow"],
    scores: { muscle: 35, recovery: 40, energy: 30 },
  },
  {
    slug: "citrulline-malate",
    name: "Citrulline malate",
    category: "amino_acid",
    summary:
      "A 2:1 compound of L-citrulline and malic acid, widely used in pre-workout supplements. The malate component may contribute to aerobic energy production via the TCA cycle.",
    quickVerdict:
      "The most commonly studied form for exercise performance. Benefits appear slightly greater than citrulline alone, possibly due to the malate contribution.",
    evidenceScore: 63,
    researchNotes:
      "Several studies show increased repetitions to failure in resistance exercise (typically 1–3 extra reps per set) and reduced muscle soreness 24–48 hours post-exercise. The contribution of malate versus citrulline alone is not well isolated in most trials.",
    cautions:
      "Generally well tolerated. Verify the ratio — some products labeled citrulline malate contain less than the 2:1 ratio used in studies.",
    caveats:
      "It is unclear how much of the benefit comes from malate versus citrulline. The 2:1 ratio means 8 g of citrulline malate provides roughly 5.3 g of citrulline.",
    benefits: [
      "Increased repetitions to failure in resistance training",
      "Reduced delayed-onset muscle soreness",
      "Malic acid may support aerobic energy production",
    ],
    dosageNotes: "6–8 g taken 30–60 minutes before exercise. Look for 2:1 citrulline-to-malate ratio.",
    sideEffects: ["Mild GI discomfort", "Sour taste"],
    tags: ["pre-workout", "performance", "recovery"],
    scores: { muscle: 40, recovery: 45, energy: 35 },
  },
  {
    slug: "glycine",
    name: "Glycine",
    category: "amino_acid",
    summary:
      "The simplest amino acid, serving as a neurotransmitter co-agonist at NMDA receptors, a precursor to glutathione, and a structural component of collagen. Studied for sleep, cognition, and metabolic health.",
    quickVerdict:
      "Solid evidence for improving subjective sleep quality when taken before bed. Also important as a glutathione precursor, especially in older adults.",
    evidenceScore: 65,
    researchNotes:
      "Multiple small trials show 3 g of glycine before bed improves subjective sleep quality, reduces next-day fatigue, and may improve sleep efficiency. Glycine + N-acetylcysteine (GlyNAC) supplementation restored glutathione levels and improved several aging biomarkers in a randomized trial of older adults.",
    cautions:
      "Generally very safe. Theoretical concern at very high doses in schizophrenia treatment (used adjunctively at 30–60 g/day in research).",
    caveats:
      "Sleep studies are small and primarily rely on subjective measures. The GlyNAC longevity data, while promising, comes from a single research group.",
    benefits: [
      "Improves subjective sleep quality at 3 g before bed",
      "Glutathione precursor supporting antioxidant defense",
      "Collagen synthesis support",
    ],
    dosageNotes: "Sleep: 3 g before bed. Glutathione support: 1–3 g/day. Collagen: 5–15 g/day with vitamin C.",
    sideEffects: ["Rare at typical doses", "Sweet taste may be noticeable in powder form"],
    tags: ["sleep", "collagen", "antioxidant"],
    scores: { sleep: 65, longevity: 50, recovery: 40 },
  },
  {
    slug: "l-glutamine",
    name: "L-Glutamine",
    category: "amino_acid",
    summary:
      "The most abundant amino acid in the body, conditionally essential during physiological stress. Serves as fuel for enterocytes and immune cells, and is heavily marketed for gut health and recovery.",
    quickVerdict:
      "Clear benefit in clinical settings (burns, critical illness, gut-barrier dysfunction). Benefits for healthy exercisers are much less convincing.",
    evidenceScore: 60,
    researchNotes:
      "Strong evidence in clinical populations for reducing infections and supporting gut-barrier integrity. In healthy athletes, meta-analyses show minimal effects on performance or muscle recovery. Plasma glutamine does drop during prolonged exercise, but supplementation has not consistently improved outcomes.",
    cautions:
      "Generally safe at typical doses. Caution in liver disease (ammonia metabolism). Avoid in renal insufficiency at high doses.",
    caveats:
      "The gap between clinical and sports-nutrition evidence is large. Healthy individuals synthesize adequate glutamine under normal conditions.",
    benefits: [
      "Supports gut-barrier integrity in clinical populations",
      "Fuel source for immune cells during physiological stress",
      "May reduce infection rates in critical illness",
    ],
    dosageNotes: "Clinical: 20–30 g/day in divided doses. Sports: 5–10 g/day, though evidence for benefit in healthy athletes is weak.",
    sideEffects: ["Generally well tolerated", "High doses may cause GI discomfort"],
    tags: ["gut-health", "immune", "recovery"],
    scores: { recovery: 40, immunity: 50 },
  },
  {
    slug: "l-serine",
    name: "L-Serine",
    category: "amino_acid",
    summary:
      "A non-essential amino acid involved in phospholipid synthesis, one-carbon metabolism, and the production of glycine and D-serine. Investigated for neurodegenerative conditions.",
    quickVerdict:
      "Emerging interest for neuroprotection, particularly in ALS and hereditary sensory neuropathy, but clinical evidence is very early-stage.",
    evidenceScore: 40,
    researchNotes:
      "A small Phase I/II trial in ALS patients suggested possible slowing of functional decline at high doses (30 g/day). Research in hereditary sensory neuropathy type 1 (HSAN1) showed correction of neurotoxic deoxysphingolipid levels. Large-scale efficacy trials are lacking.",
    cautions:
      "Very high doses (15–30 g/day used in trials) may cause GI distress. Not an established treatment for any neurological condition.",
    caveats:
      "ALS data is from a very small, Phase I-level trial. Broader neuroprotection claims are speculative.",
    benefits: [
      "Precursor to glycine and D-serine in the brain",
      "Preliminary ALS data suggesting possible neuroprotection",
      "Corrects toxic lipid profiles in HSAN1",
    ],
    dosageNotes: "General: 1–3 g/day. Research trials used 15–30 g/day for neurological conditions.",
    sideEffects: ["GI discomfort at high doses", "Nausea"],
    tags: ["neuroprotection", "emerging", "phospholipid"],
    scores: { longevity: 30, mood: 20 },
  },
  {
    slug: "l-theanine",
    name: "L-Theanine",
    category: "amino_acid",
    summary:
      "A non-protein amino acid found predominantly in tea leaves that crosses the blood-brain barrier and promotes alpha-wave activity, supporting calm attentiveness without sedation.",
    quickVerdict:
      "Consistent small-trial evidence for calm focus, especially synergistic with caffeine. One of the best-tolerated amino acid supplements.",
    evidenceScore: 70,
    researchNotes:
      "Multiple randomized trials show improvements in subjective calm, attention, and reaction time, particularly when combined with caffeine. EEG studies confirm increased alpha-wave activity within 30–60 minutes of dosing. Effect sizes are moderate.",
    cautions:
      "Very low risk at normal intakes. Theoretical interaction with blood-pressure medications due to mild hypotensive effect.",
    caveats:
      "Most studies are short-duration, small-sample. The caffeine combination is better studied than theanine alone.",
    benefits: [
      "Promotes calm focus without drowsiness",
      "Synergistic with caffeine for attention and alertness",
      "May modestly improve sleep quality",
    ],
    dosageNotes: "100–200 mg, often combined with 50–100 mg caffeine. Can also be taken alone before bed for relaxation.",
    sideEffects: ["Rare headache at high doses"],
    tags: ["calm", "focus", "pairs-with-caffeine"],
    scores: { focus: 78, anxiety: 72, sleep: 60, stress: 55 },
  },
  {
    slug: "l-tyrosine",
    name: "L-Tyrosine",
    category: "amino_acid",
    summary:
      "A non-essential amino acid and precursor to dopamine, norepinephrine, and epinephrine. Studied for cognitive performance under stress, sleep deprivation, and cold exposure.",
    quickVerdict:
      "Consistent evidence for preserving cognitive performance under acute stress conditions. Benefits in non-stressed states are much less clear.",
    evidenceScore: 65,
    researchNotes:
      "Military and laboratory studies show tyrosine supplementation preserves working memory, cognitive flexibility, and mood during cold stress, sleep deprivation, and multitasking. Effects in rested, non-stressed individuals are minimal, consistent with the rate-limiting step being relevant only when catecholamine demand is high.",
    cautions:
      "Avoid combining with MAOIs. Caution with thyroid disorders (tyrosine is a thyroid hormone precursor). Theoretical interaction with L-DOPA.",
    caveats:
      "Benefits are specific to high-demand or stress conditions. Everyday cognitive enhancement in non-stressed individuals is not well supported.",
    benefits: [
      "Preserves cognitive function under acute stress",
      "Supports catecholamine synthesis during high demand",
      "May help maintain mood during sleep deprivation",
    ],
    dosageNotes: "500–2000 mg taken 30–60 minutes before a stressful task or demanding cognitive work.",
    sideEffects: ["Headache at high doses", "GI discomfort", "Insomnia if taken late"],
    tags: ["focus", "stress-resilience", "catecholamine"],
    scores: { focus: 65, stress: 60, energy: 45, mood: 40 },
  },
  {
    slug: "n-acetyl-l-tyrosine",
    name: "N-Acetyl L-Tyrosine (NALT)",
    category: "amino_acid",
    summary:
      "An acetylated form of L-tyrosine marketed as having superior water solubility and bioavailability. In practice, conversion to free tyrosine appears limited, making it a less efficient precursor.",
    quickVerdict:
      "More soluble but likely less effective than plain L-tyrosine for raising plasma tyrosine. Standard L-tyrosine is generally preferred.",
    evidenceScore: 45,
    researchNotes:
      "Pharmacokinetic data suggests NALT is largely excreted unchanged in urine rather than being efficiently deacetylated to free tyrosine. The improved solubility does not appear to translate into better bioavailability. Most cognitive studies used plain L-tyrosine, not NALT.",
    cautions:
      "Same precautions as L-tyrosine. The higher cost relative to L-tyrosine is not justified by the evidence.",
    caveats:
      "Marketing claims of superior bioavailability are not supported by pharmacokinetic data. Plain L-tyrosine is the better-studied and likely more effective form.",
    benefits: [
      "Higher water solubility for mixing convenience",
      "Same theoretical catecholamine precursor role as L-tyrosine",
    ],
    dosageNotes: "300–600 mg if used, though plain L-tyrosine at 500–2000 mg is generally preferred.",
    sideEffects: ["Same profile as L-tyrosine", "Headache", "GI discomfort"],
    tags: ["tyrosine-variant", "soluble", "less-efficient"],
    scores: { focus: 50, stress: 45, energy: 35 },
  },
  {
    slug: "ornithine",
    name: "Ornithine",
    category: "amino_acid",
    summary:
      "A non-protein amino acid that participates in the urea cycle, facilitating ammonia detoxification. Studied for exercise-induced fatigue reduction, sleep quality, and stress hormone modulation.",
    quickVerdict:
      "Limited but interesting evidence for reducing exercise-related fatigue and improving subjective sleep. Effects are modest.",
    evidenceScore: 50,
    researchNotes:
      "Small trials show ornithine supplementation may reduce subjective fatigue during prolonged exercise, likely through enhanced ammonia clearance. A few Japanese studies report improved sleep quality and reduced cortisol. Evidence quality is moderate at best.",
    cautions:
      "Generally well tolerated. GI distress possible at high doses. Limited data in pregnancy.",
    caveats:
      "Most studies are small and many come from a single research group. Replication in larger, diverse populations is needed.",
    benefits: [
      "May reduce exercise-related fatigue via ammonia clearance",
      "Preliminary evidence for improved sleep quality",
      "Potential stress-hormone modulation",
    ],
    dosageNotes: "400–2000 mg before exercise or before bed, depending on intended use.",
    sideEffects: ["GI distress at high doses", "Diarrhea"],
    tags: ["urea-cycle", "fatigue", "sleep"],
    scores: { recovery: 40, sleep: 40, energy: 30 },
  },
  {
    slug: "phenylalanine",
    name: "Phenylalanine",
    category: "amino_acid",
    summary:
      "An essential amino acid and precursor to tyrosine, which in turn produces dopamine, norepinephrine, and epinephrine. Available in L-, D-, and DL- forms with different applications.",
    quickVerdict:
      "Adequate dietary intake supports catecholamine synthesis. Supplementation beyond dietary needs has limited evidence for cognitive or mood benefits in healthy individuals.",
    evidenceScore: 52,
    researchNotes:
      "L-phenylalanine is an essential amino acid obtained through diet. D-phenylalanine has been studied for pain (via enkephalinase inhibition) with mixed results. DL-phenylalanine has preliminary data for depression. Most individuals obtain sufficient phenylalanine from dietary protein.",
    cautions:
      "Contraindicated in phenylketonuria (PKU). May interact with MAOIs and L-DOPA. Caution with anxiety disorders as it may increase catecholamine tone.",
    caveats:
      "Supplementation is unlikely to benefit people with adequate protein intake. D-phenylalanine pain data is old and poorly replicated.",
    benefits: [
      "Essential precursor in the catecholamine synthesis pathway",
      "DL-form has preliminary antidepressant data",
      "D-form may modulate enkephalin breakdown",
    ],
    dosageNotes: "500–1500 mg/day if supplementing. Most people get sufficient amounts from dietary protein.",
    sideEffects: ["Headache", "Nausea", "Anxiety at high doses", "Contraindicated in PKU"],
    tags: ["essential", "catecholamine", "mood"],
    scores: { mood: 40, focus: 35, energy: 30, pain: 30 },
  },
  {
    slug: "sarcosine",
    name: "Sarcosine",
    category: "amino_acid",
    summary:
      "N-methylglycine, an intermediate in glycine metabolism that acts as a glycine transporter (GlyT1) inhibitor, increasing synaptic glycine levels and thereby modulating NMDA receptor function.",
    quickVerdict:
      "Promising adjunctive data in schizophrenia for negative symptoms. Niche compound with limited mainstream supplementation data.",
    evidenceScore: 50,
    researchNotes:
      "Several small randomized trials in schizophrenia patients showed improvements in negative symptoms and overall functioning when sarcosine was added to antipsychotic treatment. The mechanism (GlyT1 inhibition) enhances glutamatergic neurotransmission via the NMDA glycine site. Data outside of psychiatric populations is very limited.",
    cautions:
      "Should not be combined with clozapine (may reduce its efficacy via shared glycine-site mechanism). Limited safety data for long-term use in healthy populations.",
    caveats:
      "Evidence is primarily in schizophrenia. Extrapolating to cognitive enhancement in healthy individuals is speculative.",
    benefits: [
      "Adjunctive improvement in schizophrenia negative symptoms",
      "Enhances NMDA function via glycine-site modulation",
      "Novel mechanism distinct from most supplements",
    ],
    dosageNotes: "Clinical trials used 1–2 g/day as adjunct to antipsychotics.",
    sideEffects: ["Generally well tolerated in trials", "Nausea", "Insomnia at higher doses"],
    tags: ["NMDA", "psychiatric", "glycine-modulator"],
    scores: { mood: 45, focus: 35, memory: 30 },
  },
  {
    slug: "tryptophan",
    name: "Tryptophan",
    category: "amino_acid",
    summary:
      "An essential amino acid and the sole dietary precursor to serotonin and melatonin. Rate-limiting for serotonin synthesis in the brain, making it relevant to mood, sleep, and appetite regulation.",
    quickVerdict:
      "Established role in serotonin synthesis. Supplementation can improve sleep onset and mood in some populations, but 5-HTP is a more direct serotonin precursor.",
    evidenceScore: 62,
    researchNotes:
      "Tryptophan depletion studies clearly demonstrate its role in serotonin-dependent mood regulation. Supplementation trials show modest improvements in sleep latency and mood, particularly in individuals with lower baseline serotonin status. 5-HTP bypasses the rate-limiting tryptophan hydroxylase step.",
    cautions:
      "Historical concern from the 1989 eosinophilia-myalgia syndrome outbreak (traced to a contaminated batch, not tryptophan itself). Avoid combining with SSRIs or MAOIs (serotonin syndrome risk).",
    caveats:
      "Competition with other large neutral amino acids for brain uptake means effects depend on the protein context of the diet. 5-HTP may be more efficient for serotonin-specific goals.",
    benefits: [
      "Essential precursor to serotonin and melatonin",
      "May improve sleep onset latency",
      "Supports mood in low-serotonin states",
    ],
    dosageNotes: "Sleep: 500–1000 mg before bed on an empty stomach. Mood: 1–3 g/day in divided doses.",
    sideEffects: ["Drowsiness", "Nausea", "Serotonin syndrome risk with serotonergic drugs"],
    tags: ["serotonin", "sleep", "mood"],
    scores: { sleep: 60, mood: 55, anxiety: 40 },
  },
];
