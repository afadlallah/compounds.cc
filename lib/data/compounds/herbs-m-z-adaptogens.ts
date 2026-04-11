import type { SeedCompound } from "../seed-compounds";

type PlantSeed = Omit<SeedCompound, "category">;

const LIMITED_RCTS =
  "Most human studies are small, short, or use standardized extracts rather than the raw herb.";
const TRADITIONAL_GAP =
  "Traditional use is long, but modern randomized evidence is thinner than the reputation suggests.";
const FORMULA_CAVEAT =
  "A meaningful share of the literature uses multi-herb formulas, so the herb-specific effect is hard to isolate.";
const EXTRACT_MATTERS =
  "Most of the stronger data comes from standardized extracts rather than tea-strength or loose-powder products.";

const herb = (compound: PlantSeed): SeedCompound => ({
  category: "herb",
  ...compound,
});

const adaptogen = (compound: PlantSeed): SeedCompound => ({
  category: "adaptogen",
  ...compound,
});

export const HERBS_M_Z: SeedCompound[] = [
  herb({
    slug: "marshmallow-root",
    name: "Marshmallow root",
    summary:
      "A mucilage-rich root used to soothe the throat, stomach lining, and irritated mucous membranes.",
    quickVerdict:
      "A gentle demulcent that makes sense for throat and GI comfort, though it relies more on mechanism and tradition than big outcome trials.",
    evidenceScore: 35,
    researchNotes:
      "Marshmallow root contains mucilage that can coat tissues and reduce irritation. Human trial data is limited, but the herb is widely used in cough and GI-soothing formulas.",
    cautions:
      "Its mucilage may reduce absorption of medications if taken at the same time, so separate dosing by a few hours.",
    caveats: TRADITIONAL_GAP,
    benefits: [
      "Soothes dry or irritated throat tissue",
      "May calm mild upper-GI irritation",
      "Useful as a gentle demulcent in cough formulas",
    ],
    dosageNotes:
      "Usually taken as tea, cold infusion, syrup, or 500-1500 mg/day of extract equivalents.",
    sideEffects: ["Mild bloating", "Reduced absorption of nearby medications"],
    tags: ["demulcent", "throat", "digestive"],
    scores: { recovery: 15, immunity: 10 },
  }),
  herb({
    slug: "milk-thistle",
    name: "Milk thistle",
    summary:
      "A liver-focused seed extract standardized for silymarin and used for antioxidant and hepatoprotective support.",
    quickVerdict:
      "One of the most credible liver-support herbs, though the effect size is usually modest and dependent on extract quality.",
    evidenceScore: 52,
    researchNotes:
      "Milk thistle has mixed but generally favorable data for liver enzymes and oxidative stress in some liver conditions. Bioavailability differs widely across products.",
    cautions:
      "May interact with medications via liver enzymes, and allergy is possible in ragweed-sensitive individuals.",
    caveats: EXTRACT_MATTERS,
    benefits: [
      "Supports liver-cell antioxidant defenses",
      "May modestly improve liver-enzyme trends",
      "Widely used in hepatotoxicity-support protocols",
    ],
    dosageNotes:
      "Common use ranges from 140-420 mg/day of silymarin-standardized extract.",
    sideEffects: ["GI upset", "Loose stool", "Allergic reactions"],
    tags: ["liver", "antioxidant", "silymarin"],
    scores: { longevity: 25, recovery: 20 },
  }),
  herb({
    slug: "moringa",
    name: "Moringa",
    summary:
      "A nutrient-dense leaf rich in polyphenols and micronutrients, used for metabolic and antioxidant support.",
    quickVerdict:
      "A useful food-like herb with promising metabolic data, though many claims still outpace the clinical literature.",
    evidenceScore: 38,
    researchNotes:
      "Small trials suggest modest improvements in glucose, inflammation, or nutrient status. Much of the stronger evidence remains preclinical or food-form rather than extract-form.",
    cautions:
      "Leaf is generally safe, but concentrated products can vary in heavy metals and active-compound content.",
    caveats: LIMITED_RCTS,
    benefits: [
      "Provides polyphenols and micronutrients",
      "May support glycemic balance modestly",
      "Functions well as a food-first antioxidant herb",
    ],
    dosageNotes:
      "Common supplemental use ranges from 1-6 g/day of leaf powder or extract.",
    sideEffects: ["GI upset", "Loose stool", "Quality variability between products"],
    tags: ["nutrient-dense", "metabolic", "antioxidant"],
    scores: { recovery: 20, longevity: 20, "weight-loss": 15 },
  }),
  herb({
    slug: "mugwort",
    name: "Mugwort",
    summary:
      "An aromatic bitter herb traditionally used for digestion, menstrual discomfort, and dream-promoting folklore.",
    quickVerdict:
      "Mostly a traditional-use herb; modern clinical evidence is sparse and it requires caution in pregnancy and allergy-prone users.",
    evidenceScore: 15,
    researchNotes:
      "Mugwort has limited human data but longstanding traditional use for digestive bitters and menstrual support. Volatile oils and sesquiterpene lactones contribute activity.",
    cautions:
      "Avoid in pregnancy due to uterine-stimulating concerns, and use caution with ragweed-family allergy.",
    caveats: TRADITIONAL_GAP,
    benefits: [
      "Acts as a traditional bitter aromatic",
      "Sometimes used for menstrual discomfort",
      "Associated with folklore around dream vividness",
    ],
    dosageNotes:
      "Usually consumed as tea or tincture in modest amounts rather than as a high-dose supplement.",
    sideEffects: ["Allergic reactions", "GI irritation", "Possible uterine stimulation"],
    tags: ["traditional", "bitter", "aromatic"],
    scores: { pain: 10, sleep: 10 },
  }),
  herb({
    slug: "mullein",
    name: "Mullein",
    summary:
      "A fuzzy-leaf respiratory herb used to soothe cough, throat irritation, and chest discomfort.",
    quickVerdict:
      "A sensible throat-and-cough support herb with a gentle profile, though hard clinical evidence is limited.",
    evidenceScore: 28,
    researchNotes:
      "Mullein is widely used in respiratory teas and syrups for its soothing and expectorant reputation. Modern controlled human data is limited.",
    cautions:
      "Leaf hairs can irritate the throat if tea is not well strained. Ear-oil use should not replace medical care for infection.",
    caveats: TRADITIONAL_GAP,
    benefits: [
      "Soothes irritated respiratory mucosa",
      "Often used in cough and chest-support formulas",
      "Has a mild expectorant reputation",
    ],
    dosageNotes:
      "Most often used as tea, syrup, or tincture during acute upper-respiratory symptoms.",
    sideEffects: ["Throat irritation from poorly strained tea", "Mild GI upset"],
    tags: ["respiratory", "cough", "demulcent"],
    scores: { recovery: 20, immunity: 15 },
  }),
  herb({
    slug: "nettle",
    name: "Nettle",
    summary:
      "A mineral-rich leaf and root used for seasonal allergies, urinary support, and general nutritive herbalism.",
    quickVerdict:
      "A practical traditional herb with decent support for allergy symptoms and a strong safety profile as food or tea.",
    evidenceScore: 45,
    researchNotes:
      "Freeze-dried nettle has shown benefit in small allergy trials, while root extracts are used in urinary formulas. The leaf also serves as a nutrient-dense traditional tonic.",
    cautions:
      "May mildly increase urination and can interact with diuretics or blood-pressure medications in sensitive users.",
    caveats: LIMITED_RCTS,
    benefits: [
      "May reduce seasonal-allergy symptoms modestly",
      "Provides minerals and chlorophyll-rich plant nutrition",
      "Often used in urinary-support traditions",
    ],
    dosageNotes:
      "Frequently used as tea, cooked greens, or 300-1000 mg/day of freeze-dried leaf extract.",
    sideEffects: ["Frequent urination", "GI upset", "Skin sting from fresh plant contact"],
    tags: ["allergy", "nutritive", "urinary"],
    scores: { immunity: 30, recovery: 15 },
  }),
  herb({
    slug: "olive-leaf",
    name: "Olive leaf",
    summary:
      "A polyphenol-rich leaf extract, especially valued for oleuropein, used for immune and cardiometabolic support.",
    quickVerdict:
      "Promising for mild blood-pressure and antimicrobial support, but the human data is still moderate rather than overwhelming.",
    evidenceScore: 40,
    researchNotes:
      "Small trials suggest olive-leaf extract can improve blood pressure and some inflammatory markers. In vitro antimicrobial claims are stronger than direct human clinical outcomes.",
    cautions:
      "May lower blood pressure or blood sugar, so medication users should monitor for additive effects.",
    caveats: LIMITED_RCTS,
    benefits: [
      "May modestly improve blood-pressure markers",
      "Provides oleuropein and antioxidant polyphenols",
      "Often used for short-course immune support",
    ],
    dosageNotes:
      "Common extract use ranges from 250-1000 mg/day depending on oleuropein standardization.",
    sideEffects: ["Dizziness", "GI upset", "Headache"],
    tags: ["polyphenols", "immune-support", "blood-pressure"],
    scores: { immunity: 30, longevity: 25, recovery: 15 },
  }),
  herb({
    slug: "oregano",
    name: "Oregano",
    summary:
      "A culinary herb whose concentrated oil is used for antimicrobial and digestive support.",
    quickVerdict:
      "Very useful in the kitchen, but supplement-grade oregano oil is potent enough that it should be treated more like a short-term tool than a daily tonic.",
    evidenceScore: 25,
    researchNotes:
      "Oregano oil is rich in carvacrol and thymol with strong in vitro antimicrobial activity. Human outcome data is much thinner than the lab data.",
    cautions:
      "Concentrated oil can burn mucosa, worsen reflux, and disrupt the stomach if used too aggressively.",
    caveats:
      "Antimicrobial test-tube results do not automatically translate to meaningful whole-body effects in humans.",
    benefits: [
      "Provides carvacrol-rich antimicrobial compounds",
      "Acts as a traditional digestive aromatic",
      "Easy to use as a high-polyphenol culinary herb",
    ],
    dosageNotes:
      "Culinary use is safest. Oregano oil is usually taken only short term and in diluted softgel or drop form.",
    sideEffects: ["Heartburn", "Burning sensation", "GI irritation"],
    tags: ["culinary", "antimicrobial", "aromatic"],
    scores: { immunity: 20, recovery: 10 },
  }),
  herb({
    slug: "parsley",
    name: "Parsley",
    summary:
      "A common culinary herb with mild diuretic, antioxidant, and micronutrient benefits.",
    quickVerdict:
      "Best thought of as a healthy food herb rather than a high-impact supplement.",
    evidenceScore: 15,
    researchNotes:
      "Parsley provides vitamin K, flavonoids, and aromatic oils. Direct clinical studies on supplemental parsley are limited.",
    cautions:
      "Very high intakes are not ideal during pregnancy, and concentrated oils can irritate the GI tract.",
    caveats: TRADITIONAL_GAP,
    benefits: [
      "Adds culinary polyphenols and micronutrients",
      "Shows mild traditional diuretic activity",
      "Supports food-first herbal intake",
    ],
    dosageNotes:
      "Usually used as food, tea, or modest extract amounts rather than as a high-dose supplement.",
    sideEffects: ["GI irritation at large doses", "Rare allergy"],
    tags: ["culinary", "micronutrients", "traditional"],
    scores: { recovery: 10 },
  }),
  herb({
    slug: "passionflower",
    name: "Passionflower",
    summary:
      "A calming vine extract used for anxiety, nighttime overthinking, and sleep support.",
    quickVerdict:
      "A worthwhile gentle anxiolytic herb with credible support, especially when tension or racing thoughts are the main issue.",
    evidenceScore: 55,
    researchNotes:
      "Human studies suggest passionflower can reduce anxiety and improve sleep quality, though many trials are small or use it as part of combination formulas.",
    cautions:
      "Can cause drowsiness and should be used cautiously with sedatives, alcohol, or before driving.",
    caveats: FORMULA_CAVEAT,
    benefits: [
      "May reduce anxiety and mental agitation",
      "Often improves sleep quality",
      "Useful for stress-driven restlessness",
    ],
    dosageNotes:
      "Common use ranges from tea to 250-1000 mg/day of extract, often in the evening.",
    sideEffects: ["Drowsiness", "Dizziness", "GI upset"],
    tags: ["anxiety", "sleep", "calming"],
    scores: { anxiety: 45, sleep: 40, stress: 35 },
  }),
  herb({
    slug: "pau-darco",
    name: "Pau d'arco",
    summary:
      "A South American bark used traditionally for antimicrobial and inflammatory support.",
    quickVerdict:
      "Interesting traditional bark, but its clinical evidence remains light and stronger claims around infections or cancer are not well supported.",
    evidenceScore: 15,
    researchNotes:
      "Pau d'arco contains naphthoquinones such as lapachol, with in vitro antimicrobial activity. Human clinical evidence is sparse and safety questions remain at higher doses.",
    cautions:
      "Can increase bleeding risk and may cause nausea or dizziness. It should not be used in pregnancy.",
    caveats: TRADITIONAL_GAP,
    benefits: [
      "Provides antimicrobial quinone compounds",
      "Used traditionally during infections",
      "Has some anti-inflammatory potential in preclinical work",
    ],
    dosageNotes:
      "Usually used as tea or tincture for short-term traditional use.",
    sideEffects: ["Nausea", "Dizziness", "Possible increased bleeding risk"],
    tags: ["traditional", "bark", "antimicrobial"],
    scores: { immunity: 10 },
  }),
  herb({
    slug: "peppermint",
    name: "Peppermint",
    summary:
      "A mint leaf and oil used for IBS, dyspepsia, tension headaches, and post-meal discomfort.",
    quickVerdict:
      "A very practical digestive herb with meaningful support, especially when enteric-coated peppermint oil is used for IBS.",
    evidenceScore: 60,
    researchNotes:
      "Peppermint oil has solid support for IBS symptom reduction and antispasmodic effects. Tea is gentler and more useful for routine digestive comfort than for strong IBS results.",
    cautions:
      "Peppermint can worsen reflux and should be used carefully in people with hiatal hernia or sensitive esophageal symptoms.",
    caveats:
      "The strongest evidence is for enteric-coated oil capsules, not casual tea drinking.",
    benefits: [
      "May reduce IBS cramping and bloating",
      "Acts as a smooth-muscle antispasmodic",
      "Often helps post-meal heaviness and nausea",
    ],
    dosageNotes:
      "For IBS, studies often use 180-225 mg enteric-coated oil capsules before meals; tea is milder.",
    sideEffects: ["Reflux", "Burning sensation", "Nausea from poorly tolerated oil"],
    tags: ["ibs", "digestive", "mint"],
    scores: { recovery: 25, pain: 20 },
  }),
  herb({
    slug: "psyllium",
    name: "Psyllium",
    summary:
      "A soluble-fiber husk used for bowel regularity, LDL reduction, and improved satiety.",
    quickVerdict:
      "One of the highest-value plant fibers in supplements, with good evidence and a strong safety profile when used with enough water.",
    evidenceScore: 72,
    researchNotes:
      "Psyllium has strong clinical support for constipation, stool normalization, modest LDL reduction, and improved fullness. It also helps flatten post-meal glycemic swings in some users.",
    cautions:
      "It must be taken with adequate fluid or it can cause choking or obstruction. It also reduces absorption of some medications.",
    caveats:
      "Benefits are consistent but not flashy, and fiber works best when used daily rather than occasionally.",
    benefits: [
      "Improves bowel regularity",
      "Can modestly reduce LDL cholesterol",
      "Supports satiety and glycemic control",
    ],
    dosageNotes:
      "Typical use is 5-10 g/day with plenty of water, often divided once or twice daily.",
    sideEffects: ["Bloating", "Gas", "Reduced absorption of nearby medications"],
    tags: ["fiber", "satiety", "cholesterol"],
    scores: { "weight-loss": 35, longevity: 30, recovery: 25 },
  }),
  herb({
    slug: "red-clover",
    name: "Red clover",
    summary:
      "A phytoestrogen-containing flower used for menopausal symptoms and bone-health support.",
    quickVerdict:
      "A moderate evidence option for hot flashes, but generally less compelling than the strongest menopause interventions.",
    evidenceScore: 40,
    researchNotes:
      "Red clover extracts contain isoflavones that have shown mixed results for vasomotor symptoms and possible modest bone benefits. Response varies widely between users.",
    cautions:
      "Use cautiously with estrogen-sensitive conditions, tamoxifen, or anticoagulants.",
    caveats: EXTRACT_MATTERS,
    benefits: [
      "May modestly reduce hot flashes",
      "Provides isoflavones for menopausal support",
      "Shows some potential for bone-health maintenance",
    ],
    dosageNotes:
      "Common extract dosing ranges from 40-80 mg/day of isoflavone-containing standardized product.",
    sideEffects: ["GI upset", "Headache", "Possible estrogen-related concerns"],
    tags: ["phytoestrogen", "menopause", "bone-health"],
    scores: { mood: 20, sleep: 15, longevity: 20 },
  }),
  herb({
    slug: "rhubarb-root",
    name: "Rhubarb root",
    summary:
      "A traditional stimulant-laxative root used short term for constipation and bowel clearing.",
    quickVerdict:
      "It works for constipation, but like other anthraquinone laxatives it is better as a short-term tool than a daily habit.",
    evidenceScore: 30,
    researchNotes:
      "Rhubarb root contains anthraquinones similar to other stimulant laxatives. Modern clinical evidence is limited, but the mechanism is well understood.",
    cautions:
      "Not appropriate for chronic use because of cramping, diarrhea, and electrolyte-loss risk. Avoid in pregnancy and bowel inflammation.",
    caveats:
      "Its laxative effect is real, but bowel regularity is usually better built with fiber and hydration than stimulant herbs.",
    benefits: [
      "Stimulates bowel movement when constipated",
      "Acts quickly compared with gentler digestive herbs",
      "Useful for short-term bowel support",
    ],
    dosageNotes:
      "Use short term and according to product directions; avoid chronic daily dosing.",
    sideEffects: ["Cramping", "Diarrhea", "Electrolyte loss"],
    tags: ["laxative", "short-term", "anthraquinone"],
    scores: { recovery: 15 },
  }),
  herb({
    slug: "rosemary",
    name: "Rosemary",
    summary:
      "A culinary evergreen herb used for antioxidant support, alertness, and digestive stimulation.",
    quickVerdict:
      "A worthwhile food-first herb with plausible cognitive and circulatory benefits, though supplement-grade data is still moderate.",
    evidenceScore: 42,
    researchNotes:
      "Rosemary aroma and extracts have shown some cognitive and mood effects in small studies. Rosmarinic acid and volatile oils contribute much of the profile.",
    cautions:
      "Concentrated oils can irritate the GI tract and are not appropriate for casual oral use. Large doses may be problematic in pregnancy.",
    caveats: LIMITED_RCTS,
    benefits: [
      "May support alertness and memory in small studies",
      "Provides antioxidant polyphenols",
      "Useful as a digestive and culinary aromatic",
    ],
    dosageNotes:
      "Most commonly used as food, tea, or modest extract doses rather than aggressive supplementation.",
    sideEffects: ["Reflux", "GI irritation", "Headache from concentrated oils"],
    tags: ["culinary", "memory", "antioxidant"],
    scores: { memory: 25, focus: 25, longevity: 20 },
  }),
  herb({
    slug: "saffron",
    name: "Saffron",
    summary:
      "A crocus stigma extract with unusually strong evidence for mood support and some appetite-regulation benefit.",
    quickVerdict:
      "One of the best-supported mood herbs, with several trials showing antidepressant effects comparable to standard medication in mild-to-moderate cases.",
    evidenceScore: 68,
    researchNotes:
      "Multiple randomized trials and reviews support saffron for depressive symptoms, anxiety, and possibly snacking or appetite control. Standardization for crocin and safranal matters.",
    cautions:
      "Authenticity is a real issue because saffron is expensive and frequently adulterated. Very high doses are not safe in pregnancy.",
    caveats:
      "The strongest data is in standardized extracts and mild-to-moderate symptom ranges, not in severe mood disorders.",
    benefits: [
      "May improve mood and emotional resilience",
      "Has some support for anxiety reduction",
      "Can modestly reduce snacking and appetite in some users",
    ],
    dosageNotes:
      "Most clinical studies use around 28-30 mg/day of standardized saffron extract.",
    sideEffects: ["Headache", "Nausea", "Dizziness"],
    tags: ["mood", "appetite", "standardized-extract"],
    scores: { mood: 65, sleep: 20, "weight-loss": 30, anxiety: 30 },
  }),
  herb({
    slug: "sage",
    name: "Sage",
    summary:
      "A culinary and medicinal herb used for cognition, throat irritation, and menopausal sweating.",
    quickVerdict:
      "A multi-use herb with credible cognitive and throat-support potential, especially when standardized extracts are used.",
    evidenceScore: 55,
    researchNotes:
      "Sage extracts have shown acute memory and attention benefits in small human trials and can also reduce menopausal sweating or support throat comfort.",
    cautions:
      "Essential-oil-heavy products can be problematic because thujone is not desirable at high intake.",
    caveats:
      "Tea and culinary use are gentle, but the stronger cognitive data usually comes from standardized extract products.",
    benefits: [
      "May support memory and attention",
      "Useful for throat or mouth irritation in rinse form",
      "Can reduce sweating in some menopausal users",
    ],
    dosageNotes:
      "Used as tea, culinary herb, rinse, or standardized extract depending on the goal.",
    sideEffects: ["Dry mouth", "GI upset", "Problems with excessive essential-oil intake"],
    tags: ["memory", "culinary", "throat"],
    scores: { memory: 35, focus: 30, sleep: 15 },
  }),
  herb({
    slug: "saw-palmetto",
    name: "Saw palmetto",
    summary:
      "A berry extract used mainly for benign prostatic hyperplasia and androgen-related concerns.",
    quickVerdict:
      "Reasonable for mild urinary symptoms in some men, though the trial record is more mixed than its popularity suggests.",
    evidenceScore: 55,
    researchNotes:
      "Saw palmetto has mixed evidence for BPH symptoms, with some meta-analyses less enthusiastic than earlier reviews. It appears safer than prescription options but also less consistently effective.",
    cautions:
      "May affect hormones or bleeding tendency and can interfere with PSA interpretation in some contexts.",
    caveats:
      "It is more about urinary comfort than major hormonal transformation, and expectations should stay moderate.",
    benefits: [
      "May improve mild urinary symptoms",
      "Commonly used in prostate-support formulas",
      "Generally better tolerated than stronger medications",
    ],
    dosageNotes:
      "A typical extract dose is 320 mg/day of standardized liposterolic extract.",
    sideEffects: ["GI upset", "Headache", "Possible reduced libido in some users"],
    tags: ["prostate", "men's-health", "berry-extract"],
    scores: { libido: 15, recovery: 20 },
  }),
  herb({
    slug: "senna",
    name: "Senna",
    summary:
      "A stimulant-laxative leaf and pod with strong short-term effectiveness for constipation.",
    quickVerdict:
      "It works, but it is a blunt instrument best saved for short-term constipation relief rather than routine bowel management.",
    evidenceScore: 80,
    researchNotes:
      "Senna's sennosides have well-established laxative effects and are used in both over-the-counter and clinical constipation products.",
    cautions:
      "Chronic use can cause cramping, dependency-like bowel reliance, electrolyte imbalance, and dehydration.",
    caveats:
      "The evidence for constipation relief is strong, but the long-term use case is poor compared with fiber-based approaches.",
    benefits: [
      "Reliable short-term constipation relief",
      "Works more predictably than many gentle herbs",
      "Commonly used in bowel-prep and acute-constipation settings",
    ],
    dosageNotes:
      "Use short term according to product directions and with adequate hydration.",
    sideEffects: ["Cramping", "Diarrhea", "Electrolyte loss"],
    tags: ["laxative", "constipation", "short-term"],
    scores: { recovery: 15 },
  }),
  herb({
    slug: "skullcap",
    name: "Skullcap",
    summary:
      "A nervine herb used for tension, irritability, and gentle sleep support.",
    quickVerdict:
      "A useful traditional calming herb, but the best evidence is still modest and products have sometimes suffered from adulteration.",
    evidenceScore: 28,
    researchNotes:
      "Skullcap has small-study support for anxiety and restlessness, along with preclinical GABAergic and anti-inflammatory effects.",
    cautions:
      "Quality control matters because adulterated skullcap products have historically caused safety issues. It can also add to sedatives.",
    caveats: LIMITED_RCTS,
    benefits: [
      "May reduce tension and nervous agitation",
      "Useful in calming tea or tincture blends",
      "Often fits light nighttime support",
    ],
    dosageNotes:
      "Usually used as tea, tincture, or 300-1000 mg/day of extract equivalents.",
    sideEffects: ["Drowsiness", "Dizziness", "GI upset"],
    tags: ["nervine", "calming", "sleep"],
    scores: { anxiety: 30, stress: 25, sleep: 25 },
  }),
  herb({
    slug: "slippery-elm",
    name: "Slippery elm",
    summary:
      "A mucilage-rich bark used for throat, cough, and upper-GI lining support.",
    quickVerdict:
      "A classic soothing demulcent with a good practical niche, though large modern trials are scarce.",
    evidenceScore: 25,
    researchNotes:
      "Slippery elm forms a viscous gel that can coat irritated tissues. It appears in many throat and digestive formulas but has limited standalone trial data.",
    cautions:
      "As with other mucilage herbs, it may reduce absorption of medications if taken simultaneously.",
    caveats: TRADITIONAL_GAP,
    benefits: [
      "Soothes sore throat and dry cough",
      "May calm upper-GI irritation",
      "Useful in lozenges and demulcent teas",
    ],
    dosageNotes:
      "Commonly used as lozenges, powder mixed with water, or tea-like preparations.",
    sideEffects: ["Bloating", "Reduced absorption of nearby medication"],
    tags: ["demulcent", "throat", "digestive"],
    scores: { recovery: 15 },
  }),
  herb({
    slug: "spearmint",
    name: "Spearmint",
    summary:
      "A gentler mint used for digestion, freshness, and in some cases female androgen-related concerns.",
    quickVerdict:
      "A helpful everyday herb with emerging evidence in androgen-related symptoms, though the data is still early.",
    evidenceScore: 35,
    researchNotes:
      "Small studies suggest spearmint tea may lower free-androgen markers in women with hirsutism or PCOS-related symptoms. It also works as a mild digestive mint.",
    cautions:
      "Large intakes are not well studied, and concentrated oils can irritate the GI tract.",
    caveats: LIMITED_RCTS,
    benefits: [
      "May support hormonal symptom management in some women",
      "Useful as a gentle digestive mint",
      "Easy to incorporate as a tea",
    ],
    dosageNotes:
      "Most studies use tea consumed once or twice daily rather than capsules.",
    sideEffects: ["Heartburn", "GI irritation from concentrated products"],
    tags: ["tea", "women's-health", "digestive"],
    scores: { mood: 15, recovery: 10 },
  }),
  herb({
    slug: "st-johns-wort",
    name: "St. John's wort",
    summary:
      "A well-studied antidepressant herb used for mild-to-moderate depressive symptoms.",
    quickVerdict:
      "One of the strongest herbs for mood support, but its interaction profile is serious enough that it cannot be treated casually.",
    evidenceScore: 78,
    researchNotes:
      "Large evidence reviews support St. John's wort for mild-to-moderate depression, often with efficacy comparable to standard antidepressants in those settings. Hyperforin and hypericin are commonly tracked constituents.",
    cautions:
      "It strongly induces drug-metabolizing enzymes and transporters, reducing efficacy of many medications including birth control, immunosuppressants, anticoagulants, and others.",
    caveats:
      "Its efficacy is credible, but medication interactions make it inappropriate for unsupervised stacking with many prescriptions.",
    benefits: [
      "Can improve mild-to-moderate depressive symptoms",
      "Often has fewer sexual side effects than SSRIs",
      "Has a substantial clinical literature for an herb",
    ],
    dosageNotes:
      "Most trials use 300 mg standardized extract taken three times daily or equivalent once-daily products.",
    sideEffects: ["Drug interactions", "GI upset", "Photosensitivity"],
    tags: ["mood", "depression", "interaction-heavy"],
    scores: { mood: 70, anxiety: 25, sleep: 15 },
  }),
  herb({
    slug: "thyme",
    name: "Thyme",
    summary:
      "A culinary and medicinal herb used for cough formulas, antimicrobial support, and aromatic digestive benefit.",
    quickVerdict:
      "Helpful in respiratory support blends, but most of its strongest data is either traditional or formula-based.",
    evidenceScore: 35,
    researchNotes:
      "Thyme contributes antitussive, antimicrobial, and expectorant properties and is often paired with ivy leaf or other herbs in cough syrups.",
    cautions:
      "Concentrated thyme oil can be irritating and should not be used casually internally.",
    caveats: FORMULA_CAVEAT,
    benefits: [
      "Supports cough and upper-respiratory comfort",
      "Provides thymol-rich aromatic compounds",
      "Works well as a culinary antimicrobial herb",
    ],
    dosageNotes:
      "Often used as tea, syrup, or in standardized respiratory combination products.",
    sideEffects: ["GI irritation", "Reflux", "Burning from essential oil"],
    tags: ["respiratory", "culinary", "aromatic"],
    scores: { immunity: 20, recovery: 15 },
  }),
  herb({
    slug: "tribulus",
    name: "Tribulus",
    summary:
      "A spiny fruit extract commonly marketed for libido, sports performance, and testosterone support.",
    quickVerdict:
      "The libido angle is more convincing than the testosterone or muscle-building claims.",
    evidenceScore: 38,
    researchNotes:
      "Trials suggest tribulus may improve sexual desire or function in some men and women, but robust increases in testosterone or strength are generally not seen.",
    cautions:
      "Product adulteration is a concern in sports supplements, and occasional GI or sleep issues occur.",
    caveats:
      "Its marketing is much stronger than its data for testosterone, so expectations should center on libido rather than physique changes.",
    benefits: [
      "May support libido in some users",
      "Popular in sexual-function formulas",
      "Generally well tolerated at typical doses",
    ],
    dosageNotes:
      "Common use ranges from 250-1500 mg/day of extract depending on saponin standardization.",
    sideEffects: ["GI upset", "Restlessness", "Sleep disturbance in some users"],
    tags: ["libido", "sports-marketing", "saponins"],
    scores: { libido: 40, muscle: 15, energy: 15 },
  }),
  herb({
    slug: "turmeric",
    name: "Turmeric",
    summary:
      "A golden rhizome rich in curcuminoids, widely used for pain, inflammation, and cardiometabolic support.",
    quickVerdict:
      "One of the most useful anti-inflammatory herbs, especially when delivered in a bioavailable extract rather than plain kitchen powder alone.",
    evidenceScore: 70,
    researchNotes:
      "Curcumin-rich extracts show meaningful benefit for osteoarthritis pain and inflammatory markers, though bioavailability is a recurring challenge. Piperine and phospholipid-delivery systems often improve performance.",
    cautions:
      "May increase bleeding risk and can irritate the GI tract or gallbladder in susceptible users. Strongly enhanced products also increase interaction potential.",
    caveats:
      "Kitchen turmeric is healthy, but the stronger pain data mostly comes from specialized curcumin extracts with bioavailability enhancers.",
    benefits: [
      "Reduces osteoarthritis pain in some trials",
      "Lowers inflammatory signaling markers",
      "Offers broad antioxidant and cardiometabolic support",
    ],
    dosageNotes:
      "Extract studies often use 500-1500 mg/day of curcuminoid-rich product, often with enhanced absorption technology.",
    sideEffects: ["GI upset", "Loose stool", "Possible increased bleeding tendency"],
    tags: ["curcumin", "anti-inflammatory", "joints"],
    scores: { pain: 50, recovery: 40, longevity: 35 },
  }),
  herb({
    slug: "uva-ursi",
    name: "Uva ursi",
    summary:
      "A urinary-tract herb containing arbutin, traditionally used for short-term bladder support.",
    quickVerdict:
      "A specialized short-course urinary herb with limited modern evidence and too many reasons to avoid chronic use.",
    evidenceScore: 20,
    researchNotes:
      "Uva ursi relies on arbutin-derived hydroquinone activity for urinary antiseptic effects. Human outcome data is limited and best suited to short-term traditional use.",
    cautions:
      "Not for chronic use, pregnancy, or kidney disease. It can irritate the stomach and is often inappropriate for unsupervised repeated use.",
    caveats:
      "The theoretical urinary-antiseptic mechanism is plausible, but stronger modern UTI evidence is lacking.",
    benefits: [
      "Traditionally used for short-term bladder discomfort",
      "Provides arbutin-derived antimicrobial activity",
      "Useful in older urinary-support traditions",
    ],
    dosageNotes:
      "Reserved for short-term use according to product directions rather than routine daily intake.",
    sideEffects: ["Nausea", "GI irritation", "Potential kidney stress with overuse"],
    tags: ["urinary", "short-term", "arbutin"],
    scores: { recovery: 10 },
  }),
  herb({
    slug: "valerian",
    name: "Valerian",
    summary:
      "A root extract used for sleep onset, anxious restlessness, and nighttime tension.",
    quickVerdict:
      "A legitimate sleep herb for some people, though its smell and individual response variability make it less universal than its reputation suggests.",
    evidenceScore: 58,
    researchNotes:
      "Trials show mixed but plausible benefit for sleep latency and subjective sleep quality, especially with repeated use rather than a single acute dose.",
    cautions:
      "Can cause next-morning grogginess and should be used cautiously with alcohol, sedatives, or before operating machinery.",
    caveats:
      "The response curve is individual, and some users paradoxically feel stimulated rather than sedated.",
    benefits: [
      "May shorten sleep latency",
      "Reduces bedtime restlessness in some users",
      "Works well in some multi-herb nighttime formulas",
    ],
    dosageNotes:
      "Common extract or dried-root use ranges from 300-600 mg taken 30-120 minutes before bed.",
    sideEffects: ["Grogginess", "Vivid dreams", "Headache"],
    tags: ["sleep", "sedative", "root"],
    scores: { sleep: 55, anxiety: 30, stress: 30 },
  }),
  herb({
    slug: "vervain",
    name: "Vervain",
    summary:
      "A traditional nervine herb used for stress, tension, and mild digestive stagnation.",
    quickVerdict:
      "Mostly a traditional-use calming herb with very limited modern trial support.",
    evidenceScore: 18,
    researchNotes:
      "Vervain has a long history in European herbalism for tension and overwork states, but contemporary controlled human data is scarce.",
    cautions:
      "May cause stomach upset in larger doses and is usually avoided during pregnancy.",
    caveats: TRADITIONAL_GAP,
    benefits: [
      "Used traditionally for stress and nervous tension",
      "Has a bitter-nervine herbal profile",
      "Can fit lighter calming tea formulas",
    ],
    dosageNotes:
      "Most often used as tea or tincture in modest traditional amounts.",
    sideEffects: ["GI upset", "Drowsiness in some users"],
    tags: ["traditional", "nervine", "bitter"],
    scores: { stress: 15, sleep: 10 },
  }),
  herb({
    slug: "white-willow-bark",
    name: "White willow bark",
    summary:
      "A salicin-containing bark used for pain and inflammation as a botanical precursor to aspirin-like pharmacology.",
    quickVerdict:
      "A credible pain herb, but it carries the same broad caution zone as salicylates and is not appropriate for everyone.",
    evidenceScore: 62,
    researchNotes:
      "Trials support white willow bark for low-back pain and osteoarthritis-like discomfort. Salicin and related compounds drive slower-onset analgesic effects compared with aspirin.",
    cautions:
      "Avoid in children with viral illness, aspirin allergy, ulcers, kidney disease, or with anticoagulants and other salicylates.",
    caveats:
      "It is gentler and slower than aspirin but not free of salicylate-related risks.",
    benefits: [
      "May reduce musculoskeletal pain",
      "Provides botanical salicylate activity",
      "Useful when a slower herbal analgesic is preferred",
    ],
    dosageNotes:
      "Typical extract use depends on salicin standardization, often targeting 120-240 mg/day of salicin equivalents.",
    sideEffects: ["GI upset", "Bleeding risk", "Allergic reactions in salicylate-sensitive users"],
    tags: ["pain", "salicylates", "anti-inflammatory"],
    scores: { pain: 55, recovery: 25 },
  }),
  herb({
    slug: "wild-yam",
    name: "Wild yam",
    summary:
      "A traditional root used for cramps and women's-health formulas, often confused with pharmaceutical progesterone lore.",
    quickVerdict:
      "Its traditional use is real, but the common hormone-marketing narrative around wild yam is misleading.",
    evidenceScore: 18,
    researchNotes:
      "Wild yam contains diosgenin, which can be converted into steroid hormones in a lab but not meaningfully by the human body. Clinical evidence for menopause or hormone support is weak.",
    cautions:
      "People with hormone-sensitive conditions should still be cautious even though the direct hormone-conversion claims are overstated.",
    caveats:
      "The biochemical raw material story should not be mistaken for actual in-body progesterone support.",
    benefits: [
      "Used traditionally for cramping and GI spasm",
      "Provides saponin-rich plant compounds",
      "Common ingredient in legacy women's-health formulas",
    ],
    dosageNotes:
      "Usually taken as tea, tincture, or capsule in modest traditional amounts.",
    sideEffects: ["GI upset", "Nausea", "Headache"],
    tags: ["women's-health", "traditional", "saponins"],
    scores: { pain: 10, mood: 10 },
  }),
  herb({
    slug: "yarrow",
    name: "Yarrow",
    summary:
      "A bitter aromatic herb used for wound care, sweating protocols, and mild digestive support.",
    quickVerdict:
      "A useful traditional first-aid and fever-support herb, but one with limited modern trial data.",
    evidenceScore: 22,
    researchNotes:
      "Yarrow has hemostatic, anti-inflammatory, and bitter-aromatic properties in traditional practice. Most evidence is historical or preclinical rather than modern randomized trials.",
    cautions:
      "May trigger allergy in ragweed-sensitive individuals and should be avoided during pregnancy.",
    caveats: TRADITIONAL_GAP,
    benefits: [
      "Used traditionally for minor wound support",
      "Fits old-school fever-and-sweating tea formulas",
      "Provides bitter-aromatic digestive action",
    ],
    dosageNotes:
      "Usually used as tea, tincture, or topical wash according to traditional practice.",
    sideEffects: ["Allergic reactions", "GI upset", "Skin irritation"],
    tags: ["traditional", "topical", "bitter"],
    scores: { recovery: 15, pain: 10 },
  }),
  herb({
    slug: "yerba-mate",
    name: "Yerba mate",
    summary:
      "A caffeinated South American leaf beverage used for energy, focus, and appetite support.",
    quickVerdict:
      "A practical tea-like stimulant with added polyphenols, though it should be treated like a caffeine source, not a free ride.",
    evidenceScore: 55,
    researchNotes:
      "Yerba mate provides caffeine, theobromine, and polyphenols and has some support for energy expenditure and attention. Chronic very hot mate intake has confounded epidemiology because heat itself may drive risk.",
    cautions:
      "Excess use can cause anxiety, palpitations, and insomnia. Very hot beverages should be avoided.",
    caveats:
      "Its benefits are real but overlap heavily with other caffeinated beverages, so effect size depends on the user and preparation.",
    benefits: [
      "Improves alertness and energy",
      "Provides polyphenols beyond simple caffeine",
      "May modestly support appetite control",
    ],
    dosageNotes:
      "Usually consumed as brewed tea or loose-leaf infusion, with dose determined largely by caffeine tolerance.",
    sideEffects: ["Insomnia", "Anxiety", "Palpitations"],
    tags: ["caffeine", "focus", "tea"],
    scores: { energy: 45, focus: 40, "weight-loss": 25 },
  }),
  herb({
    slug: "yohimbe",
    name: "Yohimbe",
    summary:
      "A bark extract containing yohimbine-like alkaloids used for erectile dysfunction and stimulant-like arousal effects.",
    quickVerdict:
      "It can work for libido and arousal, but the safety margin is narrow enough that it is not a casual wellness herb.",
    evidenceScore: 45,
    researchNotes:
      "Prescription yohimbine has some evidence for erectile dysfunction, but whole-herb yohimbe is less standardized and more side-effect-prone.",
    cautions:
      "Can raise heart rate, blood pressure, anxiety, and panic. It should be avoided in cardiovascular disease, psychiatric instability, and with stimulants.",
    caveats:
      "The underlying pharmacology is real, but the whole-bark supplement form is harder to dose safely than purified prescription yohimbine.",
    benefits: [
      "May increase libido and arousal",
      "Has genuine alpha-2 antagonism",
      "Sometimes used in short-term performance-focused protocols",
    ],
    dosageNotes:
      "Dosing is highly product dependent and safety-sensitive; lower standardized products are preferred if used at all.",
    sideEffects: ["Anxiety", "Palpitations", "High blood pressure"],
    tags: ["libido", "stimulating", "high-risk"],
    scores: { libido: 55, energy: 20 },
  }),
  herb({
    slug: "yucca",
    name: "Yucca",
    summary:
      "A saponin-rich desert plant used traditionally for inflammatory discomfort and topical support.",
    quickVerdict:
      "An interesting traditional herb, but modern human data is too limited for strong confidence.",
    evidenceScore: 20,
    researchNotes:
      "Yucca contains steroidal saponins and phenolics with anti-inflammatory potential in preclinical research. Controlled human studies are limited.",
    cautions:
      "Can irritate the GI tract and should not be treated as a high-dose daily anti-inflammatory supplement without good reason.",
    caveats: TRADITIONAL_GAP,
    benefits: [
      "Provides anti-inflammatory plant saponins",
      "Has some traditional use for joint discomfort",
      "Sometimes used in topical support products",
    ],
    dosageNotes:
      "Most often taken as traditional extract or tincture in modest amounts.",
    sideEffects: ["Nausea", "GI upset", "Loose stool"],
    tags: ["traditional", "saponins", "anti-inflammatory"],
    scores: { pain: 15, recovery: 10 },
  }),
  herb({
    slug: "zedoary",
    name: "Zedoary",
    summary:
      "A lesser-used Curcuma rhizome employed in Asian herbal traditions for digestion and inflammatory complaints.",
    quickVerdict:
      "Pharmacologically interesting, but far less validated than turmeric and best viewed as a niche traditional herb.",
    evidenceScore: 18,
    researchNotes:
      "Zedoary shares some chemistry with other Curcuma species and shows digestive and anti-inflammatory potential in preclinical work. Human trial data is scarce.",
    cautions:
      "May irritate the stomach at higher doses and should be used cautiously during pregnancy.",
    caveats: TRADITIONAL_GAP,
    benefits: [
      "Acts as a traditional aromatic bitter",
      "Shows anti-inflammatory potential in preclinical models",
      "Fits niche digestive herbal formulas",
    ],
    dosageNotes:
      "Usually used as a powder, decoction, or traditional extract in modest amounts.",
    sideEffects: ["GI irritation", "Heartburn", "Nausea"],
    tags: ["curcuma", "traditional", "digestive"],
    scores: { recovery: 10, pain: 10 },
  }),
  herb({
    slug: "ziziphus",
    name: "Ziziphus",
    summary:
      "A jujube-seed herb used in East Asian traditions for sleep, calm, and emotional restlessness.",
    quickVerdict:
      "A legitimate traditional sleep herb with modest modern support, especially in standardized or formula-based preparations.",
    evidenceScore: 35,
    researchNotes:
      "Ziziphus seed has preclinical sedative and anxiolytic activity, and limited human use data exists through traditional formulas and small studies.",
    cautions:
      "Can add to sedatives and may cause next-day drowsiness in sensitive users.",
    caveats: FORMULA_CAVEAT,
    benefits: [
      "May support sleep onset and calm",
      "Useful in East Asian nighttime formulas",
      "Often gentler than stronger sedative herbs",
    ],
    dosageNotes:
      "Typically used as decoction, powder, or traditional formula component rather than as a large standalone modern extract.",
    sideEffects: ["Drowsiness", "GI upset", "Vivid dreams"],
    tags: ["sleep", "traditional", "calming"],
    scores: { sleep: 35, anxiety: 25, stress: 25 },
  }),
];

export const ADAPTOGEN_COMPOUNDS: SeedCompound[] = [
  adaptogen({
    slug: "ashwagandha",
    name: "Ashwagandha",
    summary:
      "A root adaptogen used for stress resilience, sleep quality, strength support, and perceived recovery.",
    quickVerdict:
      "One of the better-supported adaptogens, especially for stress and sleep, though thyroid and GI caution still matter.",
    evidenceScore: 70,
    researchNotes:
      "Multiple randomized trials support ashwagandha for stress scores, cortisol reduction, sleep quality, and some strength or recovery outcomes. Withanolide standardization changes potency considerably.",
    cautions:
      "May worsen hyperthyroid states, cause GI upset, or be inappropriate in pregnancy or certain autoimmune contexts.",
    caveats:
      "Most positive trials use standardized root extracts, not generic powders with unclear withanolide content.",
    benefits: [
      "Reduces stress and anxiety in many users",
      "Often improves sleep quality and resilience",
      "May support strength and recovery training outcomes",
    ],
    dosageNotes:
      "Common extract dosing ranges from 300-600 mg/day of standardized root extract.",
    sideEffects: ["GI upset", "Drowsiness", "Possible thyroid stimulation"],
    tags: ["stress", "sleep", "recovery"],
    scores: { stress: 70, anxiety: 60, sleep: 40, recovery: 35 },
  }),
  adaptogen({
    slug: "astragalus",
    name: "Astragalus",
    summary:
      "A traditional Chinese adaptogen used for immune tone, energy, and long-term vitality support.",
    quickVerdict:
      "A classic adaptogen with decent immune and recovery logic, though the strongest human data is still fairly modest.",
    evidenceScore: 45,
    researchNotes:
      "Astragalus has immunomodulatory polysaccharides and a long history in qi-tonic formulas. Human data is strongest in traditional-formula settings and adjunctive support contexts.",
    cautions:
      "Immune stimulation may be undesirable in some autoimmune conditions, and product quality varies widely.",
    caveats: FORMULA_CAVEAT,
    benefits: [
      "Supports immune resilience",
      "Used traditionally for energy and recovery from illness",
      "Provides polysaccharides and saponins of adaptogenic interest",
    ],
    dosageNotes:
      "Often used as decoction, broth herb, or 500-2000 mg/day of extract depending on the product.",
    sideEffects: ["GI upset", "Rare allergy"],
    tags: ["immune-support", "traditional", "vitality"],
    scores: { immunity: 45, longevity: 30, recovery: 20 },
  }),
  adaptogen({
    slug: "bacopa-monnieri",
    name: "Bacopa monnieri",
    summary:
      "A cognitive adaptogen used for memory consolidation, learning support, and stress resilience.",
    quickVerdict:
      "One of the best adaptogens for memory support, but it works gradually and is not an acute stimulant.",
    evidenceScore: 62,
    researchNotes:
      "Multiple trials support bacopa for memory retention and delayed recall after several weeks of use. Bacoside standardization and patience matter.",
    cautions:
      "Can cause loose stool, nausea, or dream intensity, especially when started too aggressively.",
    caveats:
      "Bacopa is more of a slow-build memory herb than a same-day focus enhancer.",
    benefits: [
      "Supports memory retention and recall",
      "Provides mild stress-buffering effects",
      "Fits long-horizon cognitive support better than stimulant use",
    ],
    dosageNotes:
      "Typical use is 250-320 mg/day of bacoside-standardized extract with food.",
    sideEffects: ["Nausea", "Loose stool", "Fatigue in some users"],
    tags: ["memory", "nootropic", "stress"],
    scores: { memory: 60, focus: 40, stress: 25 },
  }),
  adaptogen({
    slug: "cordyceps",
    name: "Cordyceps",
    summary:
      "A medicinal mushroom adaptogen used for energy, stamina, and recovery support.",
    quickVerdict:
      "Useful for some people seeking non-jittery energy and exercise support, though the evidence is mixed and species matter.",
    evidenceScore: 50,
    researchNotes:
      "Cordyceps militaris and sinensis-related products have shown mixed but plausible benefits for exercise performance, fatigue, and immune signaling. Mushroom identity and beta-glucan content matter.",
    cautions:
      "May stimulate the immune system and can cause GI upset in sensitive users.",
    caveats:
      "The market mixes multiple species and mycelium products, so not all 'cordyceps' products resemble the better studies.",
    benefits: [
      "May improve stamina and perceived energy",
      "Supports post-exercise recovery in some protocols",
      "Provides beta-glucans and nucleoside-related compounds",
    ],
    dosageNotes:
      "Common supplemental use ranges from 1-3 g/day of mushroom powder or concentrated extract equivalents.",
    sideEffects: ["GI upset", "Dry mouth", "Possible immune overstimulation"],
    tags: ["mushroom", "energy", "recovery"],
    scores: { energy: 45, recovery: 35, immunity: 25 },
  }),
  adaptogen({
    slug: "eleuthero",
    name: "Eleuthero",
    summary:
      "Also called Siberian ginseng, this root is used for stress adaptation, stamina, and resilience under fatigue.",
    quickVerdict:
      "A classic fatigue-oriented adaptogen with some support for resilience, though it is subtler than its old sports-marketing reputation suggests.",
    evidenceScore: 40,
    researchNotes:
      "Eleuthero has traditional and Soviet-era research support for endurance and stress adaptation, but modern large randomized trials are limited.",
    cautions:
      "Can feel stimulating in some users and may not suit uncontrolled hypertension or acute insomnia.",
    caveats: TRADITIONAL_GAP,
    benefits: [
      "May improve fatigue resistance",
      "Useful during periods of high workload or stress",
      "Fits the classic adaptogen-resilience model well",
    ],
    dosageNotes:
      "Typical use ranges from 300-1200 mg/day of extract depending on eleutheroside content.",
    sideEffects: ["Insomnia", "Irritability", "Palpitations in sensitive users"],
    tags: ["fatigue", "resilience", "traditional"],
    scores: { energy: 35, stress: 30, recovery: 25 },
  }),
  adaptogen({
    slug: "holy-basil",
    name: "Holy basil",
    summary:
      "Also called tulsi, this aromatic adaptogen is used for stress, mood balance, and metabolic calm.",
    quickVerdict:
      "A practical everyday adaptogen with a gentle calming profile and decent early human data.",
    evidenceScore: 48,
    researchNotes:
      "Small trials suggest holy basil can improve stress scores, mood, and some metabolic markers. It functions well as tea or extract.",
    cautions:
      "May lower blood sugar slightly and can increase bleeding tendency in sensitive users.",
    caveats: LIMITED_RCTS,
    benefits: [
      "May reduce stress and mental fatigue",
      "Offers gentle mood support without heavy sedation",
      "Provides antioxidant and metabolic support",
    ],
    dosageNotes:
      "Common use ranges from tea to 300-1200 mg/day of extract.",
    sideEffects: ["GI upset", "Lightheadedness", "Possible low blood sugar in sensitive users"],
    tags: ["stress", "tea", "mood"],
    scores: { stress: 45, anxiety: 35, mood: 25 },
  }),
  adaptogen({
    slug: "maca",
    name: "Maca",
    summary:
      "A Peruvian root adaptogen used for libido, mood, and perceived vitality rather than direct hormonal boosting.",
    quickVerdict:
      "Maca is more convincing for libido and subjective vitality than for testosterone or dramatic performance claims.",
    evidenceScore: 50,
    researchNotes:
      "Trials suggest maca can improve sexual desire and some menopause-related quality-of-life markers. It does not reliably raise testosterone.",
    cautions:
      "Generally well tolerated, though some users report GI upset or overstimulation from more concentrated products.",
    caveats:
      "Its benefits are best understood as subjective vitality and libido support, not endocrine transformation.",
    benefits: [
      "May improve libido in men and women",
      "Can support mood and vitality in some users",
      "Often fits hormone-symptom formulas without being strongly hormonal",
    ],
    dosageNotes:
      "Typical use ranges from 1.5-3 g/day of powder or lower-dose concentrated extracts.",
    sideEffects: ["Bloating", "GI upset", "Restlessness in some users"],
    tags: ["libido", "vitality", "root"],
    scores: { libido: 50, energy: 25, mood: 20 },
  }),
  adaptogen({
    slug: "panax-ginseng",
    name: "Panax ginseng",
    summary:
      "A classic Asian adaptogen standardized for ginsenosides and used for energy, cognition, and resilience.",
    quickVerdict:
      "One of the flagship adaptogens, with real but moderate benefits for fatigue, cognition, and sexual function when standardized extracts are used.",
    evidenceScore: 68,
    researchNotes:
      "Trials support Panax ginseng for fatigue, cognitive performance, erectile function, and glycemic effects in some settings. Ginsenoside profile drives much of the variability.",
    cautions:
      "Can be stimulating, may interact with anticoagulants or diabetes drugs, and sometimes worsens insomnia or anxiety.",
    caveats:
      "Results depend heavily on extract quality and ginsenoside standardization; generic powders often underperform.",
    benefits: [
      "Improves energy and fatigue resistance in some users",
      "May support focus and working stamina",
      "Has some evidence for sexual-function support",
    ],
    dosageNotes:
      "Common use ranges from 200-400 mg/day of standardized extract or 1-2 g/day of root powder.",
    sideEffects: ["Insomnia", "Headache", "Palpitations in sensitive users"],
    tags: ["energy", "focus", "ginsenosides"],
    scores: { energy: 50, focus: 45, libido: 30, recovery: 25 },
  }),
  adaptogen({
    slug: "reishi",
    name: "Reishi",
    summary:
      "A medicinal mushroom adaptogen used for immune regulation, stress support, and long-term resilience.",
    quickVerdict:
      "Best understood as an immune-and-calm mushroom rather than a quick performance enhancer.",
    evidenceScore: 42,
    researchNotes:
      "Reishi has immunomodulatory beta-glucans and triterpenes, with human data suggesting improvements in some immune and fatigue-related measures. Outcomes are generally modest.",
    cautions:
      "Can increase bleeding tendency and may cause dry mouth, rash, or GI upset in some people.",
    caveats:
      "Whole mushroom, spore, and extract products vary dramatically, and not all are equivalent in beta-glucan content.",
    benefits: [
      "Supports immune regulation rather than blunt stimulation",
      "May improve stress resilience and sleep quality modestly",
      "Fits long-term wellness protocols better than acute use",
    ],
    dosageNotes:
      "Typical use ranges from 1-3 g/day of mushroom powder or lower-dose concentrated extract.",
    sideEffects: ["Dry mouth", "GI upset", "Possible increased bleeding risk"],
    tags: ["mushroom", "immune-support", "calming"],
    scores: { immunity: 35, stress: 25, sleep: 20, longevity: 25 },
  }),
  adaptogen({
    slug: "rhodiola-rosea",
    name: "Rhodiola rosea",
    summary:
      "A cold-climate adaptogen used for fatigue, stress resilience, and mental performance under load.",
    quickVerdict:
      "One of the most practical daytime adaptogens for stress and fatigue, though it can feel too activating for some people.",
    evidenceScore: 60,
    researchNotes:
      "Trials suggest Rhodiola can improve fatigue, stress symptoms, and some aspects of mental performance, especially under stressful conditions. Rosavin and salidroside standardization matters.",
    cautions:
      "May cause overstimulation, irritability, or insomnia if the dose is too high or taken late.",
    caveats:
      "The market is full of poorly standardized products, and authentic species identification is important.",
    benefits: [
      "Reduces stress-related fatigue",
      "Supports focus and mental stamina under pressure",
      "Usually feels energizing rather than sedating",
    ],
    dosageNotes:
      "Common extract use ranges from 200-400 mg/day of standardized product, usually in the morning.",
    sideEffects: ["Jitteriness", "Dry mouth", "Insomnia if dosed late"],
    tags: ["fatigue", "focus", "stress"],
    scores: { energy: 50, stress: 45, focus: 40, mood: 30 },
  }),
  adaptogen({
    slug: "schisandra",
    name: "Schisandra",
    summary:
      "A five-flavor berry adaptogen used for stress resilience, endurance, and liver support in East Asian herbalism.",
    quickVerdict:
      "A solid traditional adaptogen with plausible resilience and liver-support effects, but less direct human data than the category leaders.",
    evidenceScore: 40,
    researchNotes:
      "Schisandra has lignans with antioxidant and hepatoprotective activity, plus a long history in adaptogenic formulas for endurance and stress handling.",
    cautions:
      "Can cause reflux or GI upset and may interact with liver-metabolized drugs.",
    caveats: FORMULA_CAVEAT,
    benefits: [
      "Supports resilience under stress and fatigue",
      "Provides lignans with liver-support relevance",
      "Often used in performance and recovery formulas",
    ],
    dosageNotes:
      "Typical use ranges from tea and tincture to 500-1500 mg/day of extract.",
    sideEffects: ["Heartburn", "GI upset", "Headache"],
    tags: ["stress", "liver", "endurance"],
    scores: { stress: 30, focus: 25, recovery: 20 },
  }),
];
