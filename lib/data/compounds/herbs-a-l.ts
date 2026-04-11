import type { SeedCompound } from "../seed-compounds";

type PlantSeed = Omit<SeedCompound, "category">;

const LIMITED_RCTS =
  "Most human studies are small, short, or use standardized extracts rather than the raw herb.";
const TOPICAL_STRONGER =
  "Evidence is stronger for topical use than for oral use, and results vary a lot by preparation.";
const FORMULA_CAVEAT =
  "A meaningful share of the literature uses multi-herb formulas, so the herb-specific effect is hard to isolate.";
const TRADITIONAL_GAP =
  "Traditional use is long, but modern randomized evidence is thinner than the reputation suggests.";

const herb = (compound: PlantSeed): SeedCompound => ({
  category: "herb",
  ...compound,
});

export const HERBS_A_L: SeedCompound[] = [
  herb({
    slug: "aloe-vera",
    name: "Aloe vera",
    summary:
      "A succulent plant whose inner gel is used topically for burns and irritation and orally for GI support.",
    quickVerdict:
      "Useful topically for minor skin irritation, but oral aloe products are less consistent and latex-containing products are harder to justify.",
    evidenceScore: 55,
    researchNotes:
      "Topical aloe gel has small-trial support for reducing burn-healing time and soothing inflamed skin. Oral gel has mixed data for constipation and glycemic control, while latex has stronger laxative effects but worse safety.",
    cautions:
      "Aloe latex can cause diarrhea, cramping, electrolyte loss, and drug interactions. Avoid chronic oral use in pregnancy, kidney disease, or with stimulant laxatives.",
    caveats: TOPICAL_STRONGER,
    benefits: [
      "May soothe minor burns and irritated skin",
      "Provides anti-inflammatory polysaccharides",
      "Inner-gel products may offer modest digestive support",
    ],
    dosageNotes:
      "Topical gels are used as needed. Oral inner-gel products are typically used in the 50-200 mL/day range; latex-containing products are best avoided for routine use.",
    sideEffects: ["Diarrhea from latex products", "Abdominal cramping", "Skin irritation in sensitive users"],
    tags: ["topical", "skin", "digestion"],
    scores: { recovery: 35, pain: 20, immunity: 15 },
  }),
  herb({
    slug: "angelica",
    name: "Angelica",
    summary:
      "Angelica sinensis, often called dong quai, is a traditional women's-health herb used for menstrual discomfort and circulation support.",
    quickVerdict:
      "Commonly used for menstrual symptoms, but modern trial evidence is modest and much of it comes from formulas rather than angelica alone.",
    evidenceScore: 35,
    researchNotes:
      "Preclinical data suggest antispasmodic and vasodilatory activity. Clinical studies for dysmenorrhea and menopausal symptoms are mixed and frequently use combination formulas.",
    cautions:
      "May increase bleeding risk, interact with anticoagulants, and cause photosensitivity. Avoid during pregnancy unless medically supervised.",
    caveats: FORMULA_CAVEAT,
    benefits: [
      "Traditionally used for menstrual cramping",
      "May offer mild vasodilatory effects",
      "Provides coumarins and ferulic-acid derivatives",
    ],
    dosageNotes:
      "Traditional extracts commonly provide 500-1500 mg/day or are used as decoctions; standardized modern dosing is inconsistent.",
    sideEffects: ["GI upset", "Headache", "Possible photosensitivity"],
    tags: ["women's-health", "circulation", "traditional"],
    scores: { pain: 30, mood: 20, recovery: 15 },
  }),
  herb({
    slug: "anise",
    name: "Anise",
    summary:
      "An aromatic seed from Pimpinella anisum used for bloating, cough formulas, and mild antispasmodic support.",
    quickVerdict:
      "A reasonable traditional digestive herb, though most of the evidence base is small and symptom-focused.",
    evidenceScore: 25,
    researchNotes:
      "Small studies suggest anise may help functional dyspepsia, bloating, and some respiratory symptoms. The essential-oil fraction appears responsible for much of the spasm-relieving activity.",
    cautions:
      "Concentrated oils can irritate the GI tract and may trigger allergy in people sensitive to Apiaceae plants like fennel or celery.",
    caveats: LIMITED_RCTS,
    benefits: [
      "May reduce bloating and post-meal discomfort",
      "Shows mild antispasmodic activity",
      "Often included in cough and throat formulas",
    ],
    dosageNotes:
      "Usually taken as tea or as 300-1000 mg/day of seed or extract equivalents.",
    sideEffects: ["Heartburn", "Allergic reactions", "GI irritation from essential oil"],
    tags: ["digestive", "aromatic", "carminative"],
    scores: { recovery: 15, immunity: 10 },
  }),
  herb({
    slug: "arnica",
    name: "Arnica",
    summary:
      "A topical mountain flower extract used for bruising, soreness, and localized pain relief.",
    quickVerdict:
      "Reasonable topical option for bumps and mild soreness, but it should not be used orally or on broken skin.",
    evidenceScore: 45,
    researchNotes:
      "Trials of gels and creams show mixed but generally plausible benefit for bruising, swelling, and post-exercise soreness. Oral arnica is not considered safe.",
    cautions:
      "Do not ingest. Avoid broken skin because systemic absorption can increase toxicity risk. People sensitive to ragweed-family plants may react.",
    caveats: TOPICAL_STRONGER,
    benefits: [
      "May reduce bruising and local swelling",
      "Useful for short-term topical soreness support",
      "Has anti-inflammatory sesquiterpene lactones",
    ],
    dosageNotes:
      "Use only as a topical gel, cream, or ointment according to the product directions.",
    sideEffects: ["Skin rash", "Contact dermatitis", "Toxic if swallowed"],
    tags: ["topical", "pain", "bruising"],
    scores: { pain: 50, recovery: 40 },
  }),
  herb({
    slug: "artichoke-leaf",
    name: "Artichoke leaf",
    summary:
      "A bitter leaf extract used for dyspepsia, bile flow, and modest lipid support.",
    quickVerdict:
      "One of the better digestive bitters, with decent support for bloating and mild cholesterol improvement.",
    evidenceScore: 52,
    researchNotes:
      "Standardized artichoke-leaf extract has shown improvements in dyspepsia symptoms and modest LDL reduction in some trials. Cynarin and chlorogenic-acid derivatives likely contribute.",
    cautions:
      "Can aggravate gallstone symptoms in susceptible individuals and may cause allergy in people sensitive to Asteraceae plants.",
    caveats: LIMITED_RCTS,
    benefits: [
      "May reduce dyspepsia and bloating",
      "Can modestly improve lipid markers",
      "Supports bile flow and bitter digestive signaling",
    ],
    dosageNotes:
      "Common extract dosing ranges from 300-1800 mg/day divided with meals.",
    sideEffects: ["Gas", "Loose stool", "Allergic reactions"],
    tags: ["digestive", "bile-flow", "lipids"],
    scores: { longevity: 30, recovery: 20, "weight-loss": 15 },
  }),
  herb({
    slug: "bilberry",
    name: "Bilberry",
    summary:
      "A dark berry rich in anthocyanins, used for vascular support and eye-strain complaints.",
    quickVerdict:
      "Bilberry is a credible anthocyanin source, but eye-health claims are often overstated relative to the clinical data.",
    evidenceScore: 40,
    researchNotes:
      "Human studies support improved oxidative-stress and vascular markers, while evidence for night vision is weak. Extract quality and anthocyanin standardization matter a lot.",
    cautions:
      "May slightly increase bleeding risk with anticoagulants and can lower blood glucose modestly in sensitive people.",
    caveats: LIMITED_RCTS,
    benefits: [
      "Provides anthocyanins with antioxidant activity",
      "May support microvascular function",
      "Sometimes reduces subjective eye strain",
    ],
    dosageNotes:
      "Standardized extracts typically provide 80-320 mg/day standardized to anthocyanins.",
    sideEffects: ["GI upset", "Rare headache", "Possible interaction with blood thinners"],
    tags: ["anthocyanins", "vascular", "eye-health"],
    scores: { longevity: 25, recovery: 15 },
  }),
  herb({
    slug: "black-cohosh",
    name: "Black cohosh",
    summary:
      "A North American root extract used mainly for menopausal hot flashes and mood-related symptoms.",
    quickVerdict:
      "A reasonable menopause-focused herb with mixed but real symptom-relief data and better support than many alternatives.",
    evidenceScore: 55,
    researchNotes:
      "Clinical studies show mixed effects on hot flashes and sleep, but several trials and reviews suggest modest benefit in peri- and postmenopausal women. It does not appear to act like a classic phytoestrogen.",
    cautions:
      "Rare liver-injury reports exist, so persistent fatigue, dark urine, or jaundice should prompt discontinuation. Avoid in pregnancy.",
    caveats: LIMITED_RCTS,
    benefits: [
      "May reduce menopausal vasomotor symptoms",
      "Can modestly improve sleep and mood in some users",
      "Non-estrogenic mechanism may suit some patients better",
    ],
    dosageNotes:
      "Most studies use 20-80 mg/day of standardized extract for 8-24 weeks.",
    sideEffects: ["GI upset", "Headache", "Rare liver-related adverse events"],
    tags: ["menopause", "sleep", "women's-health"],
    scores: { sleep: 30, mood: 25, pain: 15 },
  }),
  herb({
    slug: "black-cumin",
    name: "Black cumin",
    summary:
      "Nigella sativa seed is used for immune, metabolic, and inflammatory support, with thymoquinone as a major active compound.",
    quickVerdict:
      "One of the stronger traditional herbs for broad metabolic and inflammatory support, though the data is still medium strength rather than definitive.",
    evidenceScore: 58,
    researchNotes:
      "Meta-analyses suggest modest improvements in glucose, lipids, inflammatory markers, and allergic symptoms. Effects vary by oil vs seed powder and dose.",
    cautions:
      "Can lower blood glucose and blood pressure slightly, so people on medication should monitor response. Concentrated oil may irritate the stomach.",
    caveats: LIMITED_RCTS,
    benefits: [
      "May modestly improve glycemic markers",
      "Shows anti-inflammatory and antioxidant activity",
      "Has some support for allergy and immune symptoms",
    ],
    dosageNotes:
      "Typical dosing is 1-3 g/day of seed powder or 500-1000 mg/day of oil.",
    sideEffects: ["Reflux", "GI irritation", "Possible excessive lowering of glucose or blood pressure"],
    tags: ["metabolic", "immune-support", "anti-inflammatory"],
    scores: { immunity: 40, pain: 25, longevity: 25 },
  }),
  herb({
    slug: "blessed-thistle",
    name: "Blessed thistle",
    summary:
      "A bitter Mediterranean herb historically used for digestion and lactation support.",
    quickVerdict:
      "Its reputation is mostly traditional; modern trial support is thin and it is better viewed as a legacy bitter herb than a high-evidence remedy.",
    evidenceScore: 18,
    researchNotes:
      "Blessed thistle has limited direct human trial data. It is mostly used in traditional digestive bitters and postpartum herbal formulas.",
    cautions:
      "Can irritate the stomach at higher doses and may trigger allergy in ragweed-sensitive individuals.",
    caveats: TRADITIONAL_GAP,
    benefits: [
      "Acts as a traditional bitter tonic",
      "Commonly used in lactation-support formulas",
      "May stimulate digestive secretions",
    ],
    dosageNotes:
      "Usually taken as tea or as 300-1000 mg/day of extract equivalents.",
    sideEffects: ["Nausea", "Stomach irritation", "Allergic reactions"],
    tags: ["bitter", "traditional", "digestion"],
    scores: { recovery: 10 },
  }),
  herb({
    slug: "boswellia",
    name: "Boswellia",
    summary:
      "The resin of Boswellia serrata, standardized for boswellic acids, is used for joint pain and inflammatory conditions.",
    quickVerdict:
      "One of the more evidence-backed herbal anti-inflammatories, especially for osteoarthritis and pain reduction.",
    evidenceScore: 68,
    researchNotes:
      "Randomized trials and meta-analyses support Boswellia extracts for osteoarthritis pain and function, with some data in inflammatory bowel conditions as well. 5-LOX inhibition is a key proposed mechanism.",
    cautions:
      "Can interact with NSAIDs or anticoagulants in sensitive users and may cause reflux or stomach upset.",
    caveats:
      "Most positive studies use standardized extracts such as AKBA-rich products rather than raw resin powder.",
    benefits: [
      "Reduces pain and stiffness in some osteoarthritis trials",
      "Targets leukotriene-driven inflammation",
      "Often better tolerated than chronic NSAID use",
    ],
    dosageNotes:
      "Typical extract dosing ranges from 250-500 mg one to three times daily depending on standardization.",
    sideEffects: ["Reflux", "Nausea", "Mild diarrhea"],
    tags: ["anti-inflammatory", "joints", "pain"],
    scores: { pain: 60, recovery: 45 },
  }),
  herb({
    slug: "burdock-root",
    name: "Burdock root",
    summary:
      "A traditional root used for mild diuretic, digestive, and skin-support purposes.",
    quickVerdict:
      "Burdock is mostly a traditional herb with plausible prebiotic and antioxidant effects, but modern clinical data is sparse.",
    evidenceScore: 22,
    researchNotes:
      "Burdock contains inulin and polyphenols that may support gut ecology and antioxidant status. Human outcome data is limited and mostly observational or formula-based.",
    cautions:
      "May alter blood sugar or fluid balance slightly and can be confused with toxic look-alike roots if wild-harvested.",
    caveats: TRADITIONAL_GAP,
    benefits: [
      "Provides inulin and polyphenols",
      "Traditionally used for skin and digestive complaints",
      "May offer mild diuretic support",
    ],
    dosageNotes:
      "Often used as tea, decoction, or 500-1500 mg/day of dried extract.",
    sideEffects: ["Gas", "Loose stool", "Allergic reactions"],
    tags: ["root", "prebiotic", "traditional"],
    scores: { recovery: 15, immunity: 10 },
  }),
  herb({
    slug: "calendula",
    name: "Calendula",
    summary:
      "A marigold flower extract widely used topically for minor wounds, dermatitis, and oral inflammation.",
    quickVerdict:
      "A solid topical herb for mild skin irritation, with better support externally than internally.",
    evidenceScore: 40,
    researchNotes:
      "Small clinical studies support calendula creams, ointments, and rinses for dermatitis, nipple soreness, and oral mucositis support. Its triterpenes and flavonoids drive much of the activity.",
    cautions:
      "Avoid if allergic to ragweed-family plants, and do not rely on it for serious or infected wounds.",
    caveats: TOPICAL_STRONGER,
    benefits: [
      "May speed healing of minor irritated skin",
      "Useful in gentle topical anti-inflammatory products",
      "Can soothe mouth and gum irritation in rinse form",
    ],
    dosageNotes:
      "Applied topically as a cream, salve, or rinse according to the product instructions.",
    sideEffects: ["Skin allergy", "Contact dermatitis", "Rare oral irritation"],
    tags: ["topical", "skin", "inflammation"],
    scores: { recovery: 40, pain: 20 },
  }),
  herb({
    slug: "california-poppy",
    name: "California poppy",
    summary:
      "A mild sedative herb used for nervousness, tension, and sleep support without the opioid profile of true opium poppy.",
    quickVerdict:
      "A gentle sleep-and-stress herb with more traditional than rigorous clinical backing.",
    evidenceScore: 30,
    researchNotes:
      "California poppy is commonly used in European sleep and calm formulas. Human data is limited, but preclinical work suggests mild anxiolytic and sedative activity.",
    cautions:
      "Can add to the effects of alcohol, benzodiazepines, or sleep medications. Avoid before driving until response is known.",
    caveats: FORMULA_CAVEAT,
    benefits: [
      "May reduce nervous tension",
      "Often supports sleep-onset formulas",
      "Less likely to feel heavy than stronger sedatives",
    ],
    dosageNotes:
      "Usually used as tea, tincture, or 300-1000 mg/day of extract equivalents in the evening.",
    sideEffects: ["Drowsiness", "Dizziness", "Dry mouth"],
    tags: ["sleep", "calming", "sedative"],
    scores: { sleep: 45, anxiety: 35, stress: 35 },
  }),
  herb({
    slug: "caraway",
    name: "Caraway",
    summary:
      "A carminative seed used for bloating, cramps, and functional dyspepsia, often paired with peppermint oil.",
    quickVerdict:
      "A credible digestive herb, especially when used with peppermint, but less often effective as a solo hero ingredient.",
    evidenceScore: 42,
    researchNotes:
      "Caraway oil is part of several digestive combination products with supportive dyspepsia data. Alone, evidence is thinner but its antispasmodic role is plausible.",
    cautions:
      "Concentrated oil can worsen reflux in some people and may irritate the GI tract when overdosed.",
    caveats: FORMULA_CAVEAT,
    benefits: [
      "May reduce bloating and cramping",
      "Shows mild antispasmodic effects",
      "Pairs well with peppermint for dyspepsia",
    ],
    dosageNotes:
      "Often taken as tea or oil-containing digestive formulas with meals.",
    sideEffects: ["Reflux", "Nausea", "Burping from volatile oils"],
    tags: ["digestive", "carminative", "bloating"],
    scores: { recovery: 15 },
  }),
  herb({
    slug: "cardamom",
    name: "Cardamom",
    summary:
      "A fragrant spice used traditionally for digestion, breath, and cardiometabolic support.",
    quickVerdict:
      "A healthy culinary herb with promising but still early data for blood pressure and metabolic markers.",
    evidenceScore: 28,
    researchNotes:
      "Small trials suggest possible reductions in blood pressure and oxidative-stress markers. Most evidence remains preliminary and dose standardization is inconsistent.",
    cautions:
      "Generally safe as a food, but concentrated extracts may irritate the stomach or gallbladder in sensitive people.",
    caveats: LIMITED_RCTS,
    benefits: [
      "Provides polyphenols with antioxidant activity",
      "May offer mild digestive support",
      "Shows early promise for blood pressure support",
    ],
    dosageNotes:
      "Most supplemental use ranges from 500 mg to 3 g/day of seed or extract.",
    sideEffects: ["GI irritation at higher doses", "Rare allergy"],
    tags: ["spice", "antioxidant", "cardiometabolic"],
    scores: { longevity: 20, recovery: 10 },
  }),
  herb({
    slug: "chamomile",
    name: "Chamomile",
    summary:
      "A well-known daisy-family herb used for calm, sleep, and digestive soothing.",
    quickVerdict:
      "One of the better-supported gentle calming herbs, especially for mild anxiety and bedtime use.",
    evidenceScore: 60,
    researchNotes:
      "Chamomile extract has shown modest benefit in generalized anxiety symptoms and sleep quality in small-to-medium trials. Apigenin is one notable active constituent, though whole-herb extracts are more typical clinically.",
    cautions:
      "Can trigger allergy in ragweed-sensitive individuals and may slightly increase bleeding risk with anticoagulants.",
    caveats:
      "Benefits are usually modest rather than dramatic, and tea-strength doses are milder than concentrated extracts used in studies.",
    benefits: [
      "May reduce mild anxiety and tension",
      "Often helps with sleep onset and winding down",
      "Can soothe mild digestive upset",
    ],
    dosageNotes:
      "Commonly taken as tea or as 220-1100 mg/day of extract, often in the evening.",
    sideEffects: ["Drowsiness", "Allergic reactions", "Mild GI upset"],
    tags: ["sleep", "anxiety", "tea"],
    scores: { anxiety: 45, sleep: 50, stress: 40 },
  }),
  herb({
    slug: "chanca-piedra",
    name: "Chanca piedra",
    summary:
      "Phyllanthus niruri is a tropical herb used for kidney-stone support and urinary comfort.",
    quickVerdict:
      "Its 'stone breaker' reputation is plausible, but human evidence is still modest and better for symptom support than guaranteed stone dissolution.",
    evidenceScore: 28,
    researchNotes:
      "Small human and animal studies suggest chanca piedra may reduce stone-forming tendencies and smooth-muscle spasm. Evidence is encouraging but not definitive.",
    cautions:
      "May lower blood sugar or blood pressure slightly. People with kidney disease or on diuretics should be cautious.",
    caveats: LIMITED_RCTS,
    benefits: [
      "May support urinary comfort",
      "Shows anti-spasmodic activity in preclinical work",
      "Could modestly reduce some stone-forming markers",
    ],
    dosageNotes:
      "Typically used as tea or 500-1500 mg/day of extract equivalents.",
    sideEffects: ["GI upset", "Dizziness", "Low blood pressure in sensitive users"],
    tags: ["urinary", "kidney-stones", "traditional"],
    scores: { recovery: 20, pain: 15 },
  }),
  herb({
    slug: "cinnamon",
    name: "Cinnamon",
    summary:
      "A common bark spice with some of the best herbal data for glycemic support and insulin sensitivity.",
    quickVerdict:
      "Useful for modest blood-sugar support, but not a substitute for diet, exercise, or diabetes medication.",
    evidenceScore: 65,
    researchNotes:
      "Meta-analyses show small-to-moderate improvements in fasting glucose and related metabolic markers, especially in people with poor baseline control. Cassia and Ceylon cinnamon differ meaningfully in coumarin content.",
    cautions:
      "Cassia cinnamon can be high in coumarin, which may stress the liver at chronic high doses. Monitor if using diabetes medication.",
    caveats:
      "Effects are modest and depend on dose, baseline glucose status, and the specific cinnamon species used.",
    benefits: [
      "May modestly lower fasting glucose",
      "Provides insulin-sensitizing polyphenols",
      "Easy to use as a food-first intervention",
    ],
    dosageNotes:
      "Common supplemental use ranges from 1-6 g/day of powder or 250-500 mg/day of extract.",
    sideEffects: ["Heartburn", "Liver concern with high-coumarin cassia", "Hypoglycemia when stacked with medication"],
    tags: ["blood-sugar", "spice", "metabolism"],
    scores: { "weight-loss": 35, longevity: 30, recovery: 15 },
  }),
  herb({
    slug: "clove",
    name: "Clove",
    summary:
      "An aromatic flower bud used for oral discomfort, antimicrobial support, and culinary antioxidant activity.",
    quickVerdict:
      "Best justified for short-term oral or topical use, while broader health claims rely more on lab data than clinical outcomes.",
    evidenceScore: 30,
    researchNotes:
      "Eugenol-rich clove oil is well known for dental numbing and antimicrobial action. Human trial data outside oral care is limited.",
    cautions:
      "Clove oil is potent and can burn tissue or stress the liver if overused. Avoid unsupervised high-dose internal use.",
    caveats:
      "The clearest use case is short-term dental or mouth comfort; broader whole-body claims rely much more on lab data than clinical outcomes.",
    benefits: [
      "Temporarily numbs dental discomfort",
      "Shows strong antimicrobial activity in vitro",
      "Provides antioxidant phenolics",
    ],
    dosageNotes:
      "Whole clove is mainly culinary. Clove oil should be diluted and used sparingly for topical or oral comfort.",
    sideEffects: ["Mouth irritation", "Burning sensation", "GI irritation from concentrated oil"],
    tags: ["oral-care", "spice", "topical"],
    scores: { pain: 30, immunity: 15 },
  }),
  herb({
    slug: "coriander",
    name: "Coriander",
    summary:
      "The seed and leaf of Coriandrum sativum are used for digestion, appetite, and gentle metabolic support.",
    quickVerdict:
      "Primarily a culinary herb with some useful digestive and antioxidant activity, but limited clinical depth as a supplement.",
    evidenceScore: 20,
    researchNotes:
      "Coriander has shown antimicrobial, carminative, and mild metabolic effects in preclinical work. Human evidence is limited and generally low intensity.",
    cautions:
      "Essential oils can irritate the stomach in concentrated doses, and allergy is possible.",
    caveats: TRADITIONAL_GAP,
    benefits: [
      "Provides culinary polyphenols and terpenes",
      "May help mild post-meal bloating",
      "Shows modest antimicrobial activity",
    ],
    dosageNotes:
      "Usually used as food, tea, or in small extract amounts rather than as a high-dose supplement.",
    sideEffects: ["GI irritation at high doses", "Rare allergy"],
    tags: ["culinary", "digestive", "traditional"],
    scores: { recovery: 10 },
  }),
  herb({
    slug: "dandelion",
    name: "Dandelion",
    summary:
      "A leaf and root herb used for gentle diuretic action, bitter digestive support, and traditional liver formulas.",
    quickVerdict:
      "Useful as a mild bitter and diuretic herb, but the hard clinical evidence is still light.",
    evidenceScore: 25,
    researchNotes:
      "Dandelion leaf has mild diuretic support from small human work, while root is more often used as a bitter digestive. Prebiotic fibers and polyphenols are likely part of its profile.",
    cautions:
      "May increase urination, interact with lithium or diuretics, and irritate people with ragweed-family allergy.",
    caveats: TRADITIONAL_GAP,
    benefits: [
      "Acts as a gentle traditional diuretic",
      "Supports bitter digestive signaling",
      "Provides inulin and antioxidant polyphenols",
    ],
    dosageNotes:
      "Typically used as tea, tincture, or 500-1500 mg/day of dried extract.",
    sideEffects: ["Frequent urination", "GI upset", "Allergic reactions"],
    tags: ["bitter", "diuretic", "traditional"],
    scores: { recovery: 15 },
  }),
  herb({
    slug: "devils-claw",
    name: "Devil's claw",
    summary:
      "A South African root used for back pain and osteoarthritis, standardized for harpagoside.",
    quickVerdict:
      "A credible pain herb, especially for back and joint discomfort, with better human support than many traditional anti-inflammatory roots.",
    evidenceScore: 60,
    researchNotes:
      "Trials and reviews suggest devil's claw can reduce low-back and osteoarthritis pain, though effect sizes vary by extract and harpagoside content.",
    cautions:
      "Can irritate the stomach and may not suit people with ulcers, gallstones, or anticoagulant use.",
    caveats:
      "Standardized extracts perform better than loosely defined powders, and not all commercial products are equivalent.",
    benefits: [
      "May reduce low-back pain and stiffness",
      "Useful in some osteoarthritis protocols",
      "Offers non-NSAID pain support",
    ],
    dosageNotes:
      "Common extract dosing ranges from 600-2400 mg/day depending on harpagoside standardization.",
    sideEffects: ["GI upset", "Diarrhea", "Bitter aftertaste"],
    tags: ["pain", "joints", "anti-inflammatory"],
    scores: { pain: 55, recovery: 35 },
  }),
  herb({
    slug: "echinacea",
    name: "Echinacea",
    summary:
      "A widely used immune-support herb taken at the start of colds and upper-respiratory infections.",
    quickVerdict:
      "Helpful for some people when taken early in a respiratory illness, but it is not a miracle cold cure.",
    evidenceScore: 50,
    researchNotes:
      "Meta-analyses suggest small reductions in symptom duration or incidence, though the literature is heterogeneous because species, plant part, and extraction methods differ.",
    cautions:
      "Can provoke allergy in ragweed-sensitive individuals and may not suit some autoimmune conditions.",
    caveats:
      "Results vary sharply by product, and many negative trials used different species or preparations than the positive ones.",
    benefits: [
      "May modestly shorten cold symptoms",
      "Supports innate immune signaling",
      "Best used early rather than late in an illness",
    ],
    dosageNotes:
      "Often used for 7-10 days at the start of symptoms as tea, tincture, or standardized extract.",
    sideEffects: ["Nausea", "Rash", "Allergic reactions"],
    tags: ["immune-support", "cold", "short-term"],
    scores: { immunity: 45, recovery: 20 },
  }),
  herb({
    slug: "elderberry",
    name: "Elderberry",
    summary:
      "A dark berry extract used for upper-respiratory symptom support and antioxidant intake.",
    quickVerdict:
      "Reasonable short-course immune herb with supportive flu-like symptom data, though it should not be oversold as antiviral magic.",
    evidenceScore: 52,
    researchNotes:
      "Small trials and reviews suggest elderberry may reduce duration or severity of viral upper-respiratory symptoms. Most evidence uses standardized syrups or extracts rather than homemade preparations.",
    cautions:
      "Raw berries, leaves, and stems are not safe to eat because they contain cyanogenic compounds. People with autoimmune disorders sometimes prefer caution.",
    caveats: LIMITED_RCTS,
    benefits: [
      "May modestly reduce flu-like symptom burden",
      "Provides anthocyanins and polyphenols",
      "Often useful as a short-term seasonal product",
    ],
    dosageNotes:
      "Most products use syrup, lozenge, or extract dosing during acute respiratory symptoms for several days.",
    sideEffects: ["GI upset", "Nausea", "Problems with improperly prepared raw berry products"],
    tags: ["immune-support", "berries", "seasonal"],
    scores: { immunity: 50, recovery: 25 },
  }),
  herb({
    slug: "evening-primrose",
    name: "Evening primrose",
    summary:
      "An oil-rich plant best known for its gamma-linolenic acid content and use in PMS, mastalgia, and skin support.",
    quickVerdict:
      "A niche option with mixed evidence, but some people do get relief for cyclical breast discomfort and inflammatory skin symptoms.",
    evidenceScore: 48,
    researchNotes:
      "Evening primrose oil has mixed trials for eczema and PMS, with somewhat better support for cyclical mastalgia. GLA metabolism likely explains much of the interest.",
    cautions:
      "May increase bleeding risk slightly and should be used cautiously with seizure disorders or phenothiazine drugs.",
    caveats: LIMITED_RCTS,
    benefits: [
      "May reduce cyclical breast tenderness",
      "Provides gamma-linolenic acid for inflammatory balance",
      "Sometimes used for dry or irritated skin",
    ],
    dosageNotes:
      "Common supplemental use is 500-3000 mg/day of the oil in divided doses.",
    sideEffects: ["Soft stool", "Headache", "Possible nausea"],
    tags: ["women's-health", "gla", "skin"],
    scores: { pain: 25, mood: 20, recovery: 15 },
  }),
  herb({
    slug: "eyebright",
    name: "Eyebright",
    summary:
      "A traditional herb used for irritated eyes, allergies, and mild sinus complaints.",
    quickVerdict:
      "Eyebright has a strong traditional reputation, but robust modern evidence is quite limited.",
    evidenceScore: 18,
    researchNotes:
      "Most support comes from traditional use and topical preparations. Controlled human trials are scarce, especially for single-herb oral use.",
    cautions:
      "Do not improvise homemade eye drops because sterility matters. People with eye pain, vision loss, or infection need medical evaluation.",
    caveats:
      "The herb's reputation comes mostly from traditional use and older preparations, while modern high-quality eye-specific trials remain limited.",
    benefits: [
      "Traditionally used for mild eye irritation",
      "Contains tannins and flavonoids",
      "Sometimes paired with allergy-support herbs",
    ],
    dosageNotes:
      "Most often used as tea, tincture, or professionally prepared sterile eye products where available.",
    sideEffects: ["Eye irritation from poor-quality products", "Allergic reactions", "GI upset"],
    tags: ["traditional", "eye-health", "topical"],
    scores: { recovery: 10 },
  }),
  herb({
    slug: "feverfew",
    name: "Feverfew",
    summary:
      "A bitter daisy-family herb used mainly for migraine prevention and inflammatory pain.",
    quickVerdict:
      "Worth considering for migraine prevention, though responses are mixed and standardized extracts matter.",
    evidenceScore: 55,
    researchNotes:
      "Clinical data for migraine prevention is mixed but credible enough that feverfew remains one of the more established headache herbs. Parthenolide content is often used for standardization.",
    cautions:
      "Avoid in pregnancy and around surgery because of bleeding concerns. Fresh leaf can irritate the mouth significantly.",
    caveats:
      "Migraine benefit is more about prevention than acute relief, and not every extract replicates the better trials.",
    benefits: [
      "May reduce migraine frequency in some users",
      "Shows anti-inflammatory platelet and prostaglandin effects",
      "Long history of headache-focused use",
    ],
    dosageNotes:
      "Often used as 50-150 mg/day of standardized extract rather than fresh leaf.",
    sideEffects: ["Mouth ulcers from fresh leaf", "GI upset", "Possible rebound symptoms if stopped abruptly"],
    tags: ["migraine", "headache", "anti-inflammatory"],
    scores: { pain: 45 },
  }),
  herb({
    slug: "fenugreek",
    name: "Fenugreek",
    summary:
      "A fiber-rich seed used for glucose control, appetite modulation, libido support, and lactation formulas.",
    quickVerdict:
      "A versatile seed with decent metabolic support and some libido data, though it is not equally helpful for every advertised use.",
    evidenceScore: 58,
    researchNotes:
      "Trials suggest fenugreek can modestly improve glucose handling and may increase subjective libido or sexual function in some adults. Fiber content and saponins both matter.",
    cautions:
      "Can lower blood glucose and may interact with anticoagulants. It often causes a maple-syrup body odor.",
    caveats:
      "Benefits vary by extract type, and stronger claims about testosterone or muscle gain are usually overstated.",
    benefits: [
      "May support blood-sugar control",
      "Has some evidence for libido support",
      "Provides soluble fiber that can help satiety",
    ],
    dosageNotes:
      "Common use ranges from 500-2000 mg/day of extract or several grams of seed powder.",
    sideEffects: ["Gas", "Loose stool", "Maple-syrup body odor"],
    tags: ["metabolic", "libido", "fiber"],
    scores: { libido: 35, "weight-loss": 25, recovery: 15 },
  }),
  herb({
    slug: "garlic",
    name: "Garlic",
    summary:
      "A sulfur-rich bulb with some of the strongest herb data for cardiovascular and immune support.",
    quickVerdict:
      "Garlic is one of the most evidence-backed culinary herbs, especially for blood pressure and modest lipid support.",
    evidenceScore: 75,
    researchNotes:
      "Meta-analyses show modest reductions in blood pressure and lipids, with additional evidence for immune and vascular support. Allicin potential depends heavily on preparation and freshness.",
    cautions:
      "Can increase bleeding risk and cause substantial reflux or odor. High doses may interact with anticoagulants and antiplatelet drugs.",
    caveats:
      "Aged extract, powder, oil, and fresh garlic are not interchangeable, and allicin yield varies dramatically.",
    benefits: [
      "May modestly reduce blood pressure",
      "Provides antimicrobial sulfur compounds",
      "Supports vascular and immune health",
    ],
    dosageNotes:
      "Typical supplemental use ranges from 600-1200 mg/day of aged extract or powder; culinary use remains valuable.",
    sideEffects: ["Reflux", "Garlic odor", "Increased bleeding tendency"],
    tags: ["cardiovascular", "immune-support", "culinary"],
    scores: { immunity: 55, longevity: 45, recovery: 20 },
  }),
  herb({
    slug: "ginger",
    name: "Ginger",
    summary:
      "A warming rhizome with strong traditional and clinical support for nausea, dysmenorrhea, and mild inflammatory pain.",
    quickVerdict:
      "One of the best all-around herbs for nausea and a legitimately useful anti-inflammatory kitchen staple.",
    evidenceScore: 78,
    researchNotes:
      "Meta-analyses support ginger for pregnancy-related nausea, motion sickness support, osteoarthritis symptoms, and dysmenorrhea. Gingerols and shogaols drive much of the activity.",
    cautions:
      "Large doses can worsen reflux and may increase bleeding tendency slightly when stacked with anticoagulants.",
    caveats:
      "It works best for nausea and mild inflammatory pain, not as a cure-all anti-inflammatory.",
    benefits: [
      "Strong support for nausea relief",
      "May reduce menstrual and joint pain",
      "Provides anti-inflammatory and digestive benefits",
    ],
    dosageNotes:
      "Typical use ranges from 1-2 g/day of powdered root or equivalent extract; lower doses are often enough for nausea.",
    sideEffects: ["Heartburn", "Burping", "GI irritation at high doses"],
    tags: ["nausea", "anti-inflammatory", "culinary"],
    scores: { pain: 50, recovery: 30, immunity: 20 },
  }),
  herb({
    slug: "ginkgo-biloba",
    name: "Ginkgo biloba",
    summary:
      "A standardized leaf extract used for memory, circulation, and age-related cognitive support.",
    quickVerdict:
      "A credible cognitive-support herb, especially in older adults, though benefits are usually modest rather than dramatic.",
    evidenceScore: 66,
    researchNotes:
      "Standardized EGb 761-style extracts have the most supportive data for age-related cognitive symptoms and peripheral circulation. Healthy-young-adult enhancement is less clear.",
    cautions:
      "May increase bleeding risk and can interact with anticoagulants, antiplatelets, and some seizure-prone states.",
    caveats:
      "Benefits depend heavily on using standardized extracts; raw leaf products are not equivalent to the best-studied preparations.",
    benefits: [
      "May modestly support memory in older adults",
      "Improves blood flow and endothelial signaling",
      "Provides antioxidant flavone glycosides and terpene lactones",
    ],
    dosageNotes:
      "The common clinical range is 120-240 mg/day of standardized extract divided once or twice daily.",
    sideEffects: ["Headache", "GI upset", "Possible increased bleeding risk"],
    tags: ["memory", "circulation", "standardized-extract"],
    scores: { memory: 50, focus: 45, longevity: 25 },
  }),
  herb({
    slug: "goldenseal",
    name: "Goldenseal",
    summary:
      "A berberine-rich North American herb traditionally used for mucosal and GI support.",
    quickVerdict:
      "Historically important but often overused; much of the modern rationale comes from berberine rather than the whole herb, and sustainability is a real concern.",
    evidenceScore: 20,
    researchNotes:
      "Goldenseal's activity is driven largely by alkaloids such as berberine and hydrastine. Direct modern clinical data on whole-herb goldenseal is limited.",
    cautions:
      "Can interact with many drugs through CYP and P-gp effects, and it should be avoided in pregnancy. Overharvesting has also made sustainability an issue.",
    caveats:
      "Better-studied berberine supplements are often a clearer choice than goldenseal itself for metabolic use.",
    benefits: [
      "Provides antimicrobial alkaloids",
      "Traditionally used for mucosal support",
      "Has some GI-focused herbal utility",
    ],
    dosageNotes:
      "Usually used short term as tincture or extract rather than chronic daily use.",
    sideEffects: ["Nausea", "Drug interactions", "Bitter GI irritation"],
    tags: ["berberine-source", "traditional", "mucosal-support"],
    scores: { immunity: 20, recovery: 10 },
  }),
  herb({
    slug: "gotu-kola",
    name: "Gotu kola",
    summary:
      "Centella asiatica is a traditional herb used for wound healing, circulation, calm focus, and connective-tissue support.",
    quickVerdict:
      "A versatile herb with better evidence for wound healing and venous support than for dramatic nootropic effects.",
    evidenceScore: 45,
    researchNotes:
      "Centella extracts have shown benefit for venous insufficiency, wound healing, and some anxiety-related symptoms. Cognitive claims are plausible but less firmly established.",
    cautions:
      "Rare liver-enzyme elevations and drowsiness have been reported, especially with high-dose or prolonged use.",
    caveats:
      "Topical and circulation data are stronger than the more popular 'brain herb' marketing angle.",
    benefits: [
      "May support collagen remodeling and wound healing",
      "Can improve venous tone and circulation comfort",
      "Shows mild anxiolytic and focus-support effects in some users",
    ],
    dosageNotes:
      "Common extract dosing ranges from 300-1000 mg/day depending on triterpene standardization.",
    sideEffects: ["Drowsiness", "Headache", "Rare liver-enzyme elevation"],
    tags: ["circulation", "skin", "focus"],
    scores: { memory: 30, anxiety: 25, recovery: 25 },
  }),
  herb({
    slug: "green-tea",
    name: "Green tea",
    summary:
      "A catechin-rich tea that combines L-theanine, caffeine, and polyphenols for focus, metabolic support, and long-term cardiometabolic benefit.",
    quickVerdict:
      "One of the most useful plant beverages for daily health, with real support for alertness, weight management, and long-term risk reduction.",
    evidenceScore: 75,
    researchNotes:
      "Green tea and EGCG-rich extracts have support for cardiometabolic markers, thermogenesis, and alert calm from the caffeine plus L-theanine combination. Beverage use has a better safety track record than aggressive extracts.",
    cautions:
      "High-EGCG extracts can stress the liver, and caffeine-sensitive users may experience anxiety, insomnia, or palpitations.",
    caveats:
      "Tea drinking is generally safer than concentrated extract use, and weight-loss effects are modest rather than dramatic.",
    benefits: [
      "Supports alertness and focus",
      "Provides catechins linked to cardiometabolic benefits",
      "May modestly increase fat oxidation",
    ],
    dosageNotes:
      "Common intake is 1-4 cups/day of tea or moderate-dose extracts; avoid very high-EGCG products on an empty stomach.",
    sideEffects: ["Insomnia", "Anxiety", "Liver concerns with aggressive extracts"],
    tags: ["caffeine", "polyphenols", "metabolism"],
    scores: { focus: 45, energy: 40, longevity: 45, "weight-loss": 35 },
  }),
  herb({
    slug: "hawthorn",
    name: "Hawthorn",
    summary:
      "A berry, leaf, and flower herb used for cardiovascular tone and mild heart-failure support.",
    quickVerdict:
      "One of the more credible heart herbs, though it belongs in a supportive role rather than as a replacement for medical care.",
    evidenceScore: 58,
    researchNotes:
      "Standardized hawthorn extracts have shown modest improvement in symptoms and exercise tolerance in mild heart failure, plus antioxidant vascular effects.",
    cautions:
      "People on heart medications, blood-pressure drugs, or digoxin should use it carefully because additive effects are possible.",
    caveats:
      "Most positive outcomes are adjunctive and symptom-based, not major hard-endpoint improvements.",
    benefits: [
      "May support mild heart-failure symptoms",
      "Provides flavonoids for vascular function",
      "Can modestly improve exercise tolerance in some trials",
    ],
    dosageNotes:
      "Clinical extract dosing often ranges from 160-900 mg/day depending on standardization.",
    sideEffects: ["Dizziness", "GI upset", "Palpitations in sensitive users"],
    tags: ["cardiovascular", "circulation", "berry"],
    scores: { longevity: 40, recovery: 20 },
  }),
  herb({
    slug: "hibiscus",
    name: "Hibiscus",
    summary:
      "A tart flower tea rich in anthocyanins and organic acids, often used for blood pressure and metabolic support.",
    quickVerdict:
      "An evidence-backed tea-level intervention for mild blood-pressure support with an excellent everyday-use profile.",
    evidenceScore: 62,
    researchNotes:
      "Meta-analyses suggest hibiscus tea or extract can modestly reduce blood pressure and improve some lipid markers. Effects are strongest in mildly hypertensive populations.",
    cautions:
      "Can lower blood pressure or blood sugar modestly, so medication users should monitor response.",
    caveats:
      "The benefits are helpful but modest, and the biggest wins often come from consistent tea use rather than sporadic supplementation.",
    benefits: [
      "May modestly reduce blood pressure",
      "Provides anthocyanins and antioxidant acids",
      "Easy to use as a daily unsweetened tea",
    ],
    dosageNotes:
      "Often used as 1-3 cups/day of tea or 250-1000 mg/day of extract.",
    sideEffects: ["Acid reflux in sensitive users", "Dizziness if pressure drops too much"],
    tags: ["tea", "blood-pressure", "anthocyanins"],
    scores: { longevity: 35, recovery: 15 },
  }),
  herb({
    slug: "kava",
    name: "Kava",
    summary:
      "A Pacific root beverage used for anxiety, stress, and social relaxation through kavalactone-rich extracts.",
    quickVerdict:
      "One of the most effective herbal anxiolytics, but liver-safety and sedation concerns mean it should be used thoughtfully.",
    evidenceScore: 70,
    researchNotes:
      "Clinical trials and reviews support kava for anxiety reduction, particularly standardized noble-kava extracts. Mechanisms appear to include GABAergic, sodium-channel, and endocannabinoid modulation.",
    cautions:
      "Sedation is real, alcohol should not be combined with it, and rare hepatotoxicity concerns remain important. Avoid driving after use.",
    caveats:
      "Product quality matters enormously because solvent extraction, cultivar choice, and plant-part sourcing all change the safety profile.",
    benefits: [
      "Strong anxiety-reduction potential for an herb",
      "Can ease tension without classic alcohol intoxication",
      "Often useful for situational stress or social unease",
    ],
    dosageNotes:
      "Most studies use 60-250 mg/day of kavalactones from standardized extract or traditional beverage equivalents.",
    sideEffects: ["Drowsiness", "Dizziness", "Rare liver-related adverse events"],
    tags: ["anxiety", "stress", "sedating"],
    scores: { anxiety: 65, stress: 60, sleep: 35 },
  }),
  herb({
    slug: "lavender",
    name: "Lavender",
    summary:
      "A fragrant herb used as tea, essential oil, and oral extract for anxiety, stress, and sleep quality.",
    quickVerdict:
      "A versatile calming herb with better evidence for anxiety than many people realize, especially in standardized oral-oil products.",
    evidenceScore: 60,
    researchNotes:
      "The standardized lavender-oil product Silexan has several controlled trials supporting benefit in anxiety symptoms. Aromatherapy data is more variable but still directionally positive.",
    cautions:
      "Essential oil should not be taken casually, and oral use is best limited to reputable preparations. Some people feel sedated or get reflux.",
    caveats:
      "The best data is on standardized oral lavender oil, not any random tea bag or essential-oil diffuser setup.",
    benefits: [
      "May reduce anxiety and nervous tension",
      "Often supports better sleep quality",
      "Useful across tea, aroma, and standardized oral formats",
    ],
    dosageNotes:
      "Tea is common, while standardized oral lavender oil is often used at 80 mg/day.",
    sideEffects: ["Belching", "Drowsiness", "Headache"],
    tags: ["anxiety", "aromatherapy", "sleep"],
    scores: { anxiety: 50, stress: 45, sleep: 35 },
  }),
  herb({
    slug: "lemon-balm",
    name: "Lemon balm",
    summary:
      "Melissa officinalis is a lemon-scented mint used for calm, sleep, and stress-related digestive tension.",
    quickVerdict:
      "A gentle, practical calming herb that fits daytime stress or evening wind-down better than severe insomnia.",
    evidenceScore: 55,
    researchNotes:
      "Human studies support modest reductions in anxiety, stress, and sleep disturbance, with some evidence for improved calm focus. Rosmarinic acid and GABA-transaminase effects are often cited.",
    cautions:
      "May cause drowsiness and can theoretically add to sedatives or thyroid medications in sensitive users.",
    caveats:
      "Effects are usually subtle and best for mild stress states rather than heavy clinical anxiety or insomnia.",
    benefits: [
      "May reduce mild anxiety and restlessness",
      "Supports evening relaxation and sleep quality",
      "Can help stress-related digestive tension",
    ],
    dosageNotes:
      "Often used as tea or as 300-600 mg/day of extract, once or several times daily.",
    sideEffects: ["Drowsiness", "GI upset", "Headache"],
    tags: ["calming", "sleep", "digestive"],
    scores: { anxiety: 45, stress: 40, sleep: 35, focus: 20 },
  }),
  herb({
    slug: "licorice-root",
    name: "Licorice root",
    summary:
      "A sweet root used for throat soothing, GI lining support, and traditional adrenal-stress formulas.",
    quickVerdict:
      "Useful in the right context, but whole licorice is a herb that can meaningfully raise blood pressure and lower potassium if overused.",
    evidenceScore: 35,
    researchNotes:
      "Licorice contains glycyrrhizin, which can prolong cortisol activity and help with mucosal soothing, while DGL products are often used for upper-GI support with less mineralocorticoid activity.",
    cautions:
      "Chronic high-dose use can cause hypertension, edema, low potassium, and dangerous drug interactions. People with heart, kidney, or blood-pressure issues should be especially careful.",
    caveats:
      "Whole licorice and DGL licorice behave differently, so benefits and risks are not interchangeable across products.",
    benefits: [
      "Can soothe the throat and upper GI tract",
      "Useful in some cough and mucosal-support formulas",
      "Traditionally used for fatigue and stress formulas",
    ],
    dosageNotes:
      "Short-term use is preferred. DGL chewables are commonly used before meals, while whole-root extracts require more caution.",
    sideEffects: ["High blood pressure", "Low potassium", "Edema"],
    tags: ["mucosal-support", "traditional", "caution-required"],
    scores: { immunity: 20, stress: 15, recovery: 10 },
  }),
];
