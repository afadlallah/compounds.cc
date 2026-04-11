import type { SeedCompound } from "../seed-compounds";

export const SUPPLEMENTS_P_Z: SeedCompound[] = [
  {
    slug: "papain",
    name: "Papain",
    category: "supplement",
    summary:
      "Papain is a proteolytic enzyme derived from papaya fruit used to support digestion and reduce inflammation.",
    quickVerdict:
      "Useful as a digestive aid; anti-inflammatory evidence is preliminary but promising.",
    evidenceScore: 38,
    researchNotes:
      "Most evidence comes from in-vitro and small clinical studies on wound healing and digestion. Larger trials are lacking.",
    cautions:
      "May cause allergic reactions in individuals with latex or papaya allergy. Can interact with blood-thinning medications.",
    caveats:
      "Enzyme activity varies widely between products. Enteric coating may be necessary for systemic effects.",
    benefits: [
      "Supports protein digestion",
      "May reduce inflammation and swelling",
      "Used traditionally for wound debridement",
    ],
    dosageNotes:
      "Typical doses range from 500–1000 mg with meals. Potency is often measured in papain units (PU).",
    sideEffects: [
      "Throat irritation",
      "Allergic reactions in sensitive individuals",
      "GI discomfort at high doses",
    ],
    tags: ["digestive-enzyme", "anti-inflammatory", "papaya"],
    scores: {
      recovery: 35,
      pain: 30,
    },
  },
  {
    slug: "parthenolide",
    name: "Parthenolide",
    category: "supplement",
    summary:
      "Parthenolide is the primary bioactive sesquiterpene lactone in feverfew, studied for migraine prevention and anti-inflammatory activity.",
    quickVerdict:
      "Modest evidence for migraine prophylaxis; anti-inflammatory potential is mainly preclinical.",
    evidenceScore: 42,
    researchNotes:
      "Several small RCTs support feverfew (standardized to parthenolide) for migraine frequency reduction. NF-kB inhibition is well-documented in vitro.",
    cautions:
      "Not recommended during pregnancy. May increase bleeding risk with anticoagulants.",
    caveats:
      "Most clinical trials used whole feverfew extracts, making it hard to isolate parthenolide-specific effects.",
    benefits: [
      "May reduce migraine frequency",
      "Inhibits NF-kB inflammatory signaling",
      "Potential anti-cancer research interest",
    ],
    dosageNotes:
      "Typically 0.2–0.6 mg parthenolide daily from standardized feverfew extract.",
    sideEffects: [
      "Mouth ulcers from chewing leaves",
      "GI upset",
      "Rebound headaches on discontinuation",
    ],
    tags: ["migraine", "anti-inflammatory", "feverfew"],
    scores: {
      pain: 45,
      immunity: 30,
    },
  },
  {
    slug: "pea-palmitoylethanolamide",
    name: "PEA (Palmitoylethanolamide)",
    category: "supplement",
    summary:
      "Palmitoylethanolamide is an endogenous fatty acid amide that modulates pain and inflammation via PPAR-alpha and mast cell stabilization.",
    quickVerdict:
      "Good evidence for chronic pain and neuroinflammation; well-tolerated with a favorable safety profile.",
    evidenceScore: 68,
    researchNotes:
      "Multiple RCTs support PEA for neuropathic pain, sciatica, and chronic inflammatory pain. Meta-analyses show significant pain reduction versus placebo.",
    cautions:
      "Generally well-tolerated. Limited long-term safety data beyond 3 months in trials.",
    caveats:
      "Micronized and ultra-micronized forms have better bioavailability than standard PEA powder.",
    benefits: [
      "Reduces chronic and neuropathic pain",
      "Anti-inflammatory via mast cell stabilization",
      "May support neuroprotection",
      "No known drug interactions",
    ],
    dosageNotes:
      "600–1200 mg daily in divided doses. Micronized (PEA-m) or ultra-micronized (PEA-um) forms preferred.",
    sideEffects: [
      "Mild GI discomfort (rare)",
      "Generally very well tolerated",
    ],
    tags: ["pain-relief", "anti-inflammatory", "neuroprotection"],
    scores: {
      pain: 72,
      recovery: 50,
      mood: 35,
    },
  },
  {
    slug: "phloretin",
    name: "Phloretin",
    category: "supplement",
    summary:
      "Phloretin is a dihydrochalcone flavonoid found in apple skin with antioxidant and glucose transporter–inhibiting properties.",
    quickVerdict:
      "Interesting preclinical profile for metabolic health and skin protection; human data is very limited.",
    evidenceScore: 22,
    researchNotes:
      "In-vitro studies show GLUT2 inhibition, antioxidant activity, and anti-glycation effects. No significant human clinical trials exist.",
    cautions:
      "Low bioavailability when taken orally. Safety profile in supplemental doses not well characterized.",
    caveats:
      "Most research is cell-culture or animal-based. Topical use in dermatology is better studied than oral supplementation.",
    benefits: [
      "Potent antioxidant activity in vitro",
      "May inhibit glucose absorption",
      "Skin-protective properties in topical applications",
    ],
    dosageNotes:
      "No established oral dosage. Topical products typically contain 2% phloretin.",
    sideEffects: [
      "Insufficient human data to characterize",
      "Potential skin irritation with topical use",
    ],
    tags: ["antioxidant", "flavonoid", "apple-derived"],
    scores: {
      longevity: 25,
      "weight-loss": 20,
    },
  },
  {
    slug: "phosphatidylcholine",
    name: "Phosphatidylcholine",
    category: "supplement",
    summary:
      "Phosphatidylcholine is a major phospholipid in cell membranes and a source of choline, supporting liver function and cell membrane integrity.",
    quickVerdict:
      "Solid evidence for liver support and choline delivery; cognitive benefits are less clear than those of other choline forms.",
    evidenceScore: 58,
    researchNotes:
      "Well-studied for fatty liver disease and as a choline source. Clinical trials support hepatoprotective effects. Cognitive data is mixed.",
    cautions:
      "Generally safe. High doses may cause fishy body odor due to trimethylamine production.",
    caveats:
      "Less efficient at raising brain acetylcholine than alpha-GPC or CDP-choline. Quality varies by lecithin source.",
    benefits: [
      "Supports liver health and fat metabolism",
      "Provides bioavailable choline",
      "Maintains cell membrane integrity",
    ],
    dosageNotes:
      "840–2400 mg daily. Often derived from soy or sunflower lecithin.",
    sideEffects: [
      "GI upset at high doses",
      "Fishy body odor",
      "Diarrhea",
    ],
    tags: ["liver-health", "choline-source", "phospholipid"],
    scores: {
      longevity: 50,
      memory: 35,
      focus: 30,
    },
  },
  {
    slug: "phosphatidylserine",
    name: "Phosphatidylserine",
    category: "supplement",
    summary:
      "Phosphatidylserine is a phospholipid concentrated in brain cell membranes, studied for cognitive support and cortisol modulation.",
    quickVerdict:
      "Moderate evidence for age-related cognitive decline and exercise-induced cortisol blunting. Generally well-tolerated.",
    evidenceScore: 62,
    researchNotes:
      "FDA-qualified health claim for cognitive decline risk reduction (limited evidence). Multiple trials show improvements in memory and attention in older adults. Cortisol-lowering effects seen at 600–800 mg.",
    cautions:
      "Modern supplements use soy or sunflower-derived PS (not bovine cortex). May interact with blood thinners.",
    caveats:
      "Earlier studies used bovine-derived PS which may have different efficacy than plant-derived forms.",
    benefits: [
      "Supports memory and cognitive function in aging",
      "May blunt cortisol response to exercise",
      "Maintains neuronal membrane fluidity",
    ],
    dosageNotes:
      "100–300 mg daily for cognitive support. 400–800 mg for cortisol modulation.",
    sideEffects: [
      "Insomnia at high doses",
      "GI discomfort",
      "May increase effect of blood thinners",
    ],
    tags: ["cognitive", "cortisol", "phospholipid", "brain-health"],
    scores: {
      memory: 60,
      focus: 50,
      stress: 45,
      recovery: 35,
    },
  },
  {
    slug: "phylloquinone",
    name: "Phylloquinone (Vitamin K1)",
    category: "supplement",
    summary:
      "Phylloquinone (vitamin K1) is the plant-derived form of vitamin K, essential for blood clotting and bone metabolism.",
    quickVerdict:
      "Well-established role in coagulation. Bone and cardiovascular benefits are better supported by K2 (MK-7).",
    evidenceScore: 72,
    researchNotes:
      "Essential nutrient with strong evidence for coagulation. Observational data links higher K1 intake to reduced fracture risk. K2 appears superior for extra-hepatic effects.",
    cautions:
      "Contraindicated with warfarin and other vitamin K antagonists. Dosing must be consistent for those on anticoagulants.",
    caveats:
      "K1 is preferentially used by the liver for clotting factors. K2 (MK-7) is generally preferred for bone and cardiovascular supplementation.",
    benefits: [
      "Essential for normal blood coagulation",
      "Supports bone mineralization",
      "Abundant in green leafy vegetables",
    ],
    dosageNotes:
      "Adequate intake is 90–120 mcg daily. Supplemental doses typically 100–1000 mcg.",
    sideEffects: [
      "Very well tolerated",
      "No known toxicity from food or supplements",
    ],
    tags: ["vitamin-k", "coagulation", "bone-health"],
    scores: {
      longevity: 55,
    },
  },
  {
    slug: "piceatannol",
    name: "Piceatannol",
    category: "supplement",
    summary:
      "Piceatannol is a stilbenoid and metabolite of resveratrol found in passion fruit seeds, with emerging evidence for metabolic and skin health.",
    quickVerdict:
      "Promising preclinical antioxidant and metabolic data; human evidence is still limited to small trials.",
    evidenceScore: 28,
    researchNotes:
      "Japanese clinical trials suggest improvements in skin moisture and insulin sensitivity. Animal data shows anti-adipogenic effects. Larger confirmatory trials are needed.",
    cautions:
      "Limited safety data in humans. May interact with medications metabolized by CYP enzymes.",
    caveats:
      "Bioavailability is low and variable. Most studies use passion fruit seed extract rather than isolated piceatannol.",
    benefits: [
      "Antioxidant and anti-inflammatory properties",
      "May improve insulin sensitivity",
      "Potential skin health benefits",
    ],
    dosageNotes:
      "5–20 mg daily in studies using passion fruit seed extract.",
    sideEffects: [
      "Insufficient data for comprehensive profile",
      "Mild GI symptoms reported occasionally",
    ],
    tags: ["stilbenoid", "antioxidant", "metabolic"],
    scores: {
      longevity: 30,
      "weight-loss": 25,
    },
  },
  {
    slug: "piperine",
    name: "Piperine",
    category: "supplement",
    summary:
      "Piperine is the bioactive alkaloid in black pepper that enhances absorption of many nutrients and supplements by inhibiting hepatic and intestinal glucuronidation.",
    quickVerdict:
      "Excellent bioavailability enhancer with robust pharmacokinetic evidence. Stand-alone health benefits are secondary.",
    evidenceScore: 70,
    researchNotes:
      "Well-documented enhancement of curcumin bioavailability (up to 2000%). Also improves absorption of CoQ10, resveratrol, and certain drugs. Modest thermogenic and antioxidant effects.",
    cautions:
      "Increases bioavailability of many drugs, which can raise risk of adverse effects. Consult prescriber if on medication.",
    caveats:
      "Primarily valuable as a bioenhancer rather than a stand-alone supplement.",
    benefits: [
      "Dramatically enhances nutrient absorption",
      "Mild thermogenic properties",
      "Antioxidant activity",
    ],
    dosageNotes:
      "5–20 mg daily, typically combined with other supplements. BioPerine is the most studied branded form.",
    sideEffects: [
      "GI irritation at high doses",
      "May alter drug metabolism significantly",
    ],
    tags: ["bioenhancer", "black-pepper", "absorption"],
    scores: {
      energy: 20,
    },
  },
  {
    slug: "pqq",
    name: "PQQ (Pyrroloquinoline Quinone)",
    category: "supplement",
    summary:
      "PQQ is a redox cofactor that supports mitochondrial biogenesis and protects neurons from oxidative damage.",
    quickVerdict:
      "Promising for mitochondrial health and cognitive function in older adults; evidence base is growing but still modest.",
    evidenceScore: 48,
    researchNotes:
      "Small RCTs show improvements in sleep quality, cognitive function, and markers of inflammation. Animal data strongly supports mitochondrial biogenesis via PGC-1alpha activation.",
    cautions:
      "Generally safe at studied doses. No significant drug interactions identified.",
    caveats:
      "Human trials are few and small. Optimal dosing and long-term effects remain uncertain.",
    benefits: [
      "Promotes mitochondrial biogenesis",
      "Neuroprotective antioxidant",
      "May improve sleep quality and cognitive function",
    ],
    dosageNotes:
      "10–20 mg daily. Often combined with CoQ10 for synergistic mitochondrial support.",
    sideEffects: [
      "Headache (uncommon)",
      "Fatigue at initiation",
      "Generally well tolerated",
    ],
    tags: ["mitochondria", "neuroprotection", "antioxidant"],
    scores: {
      longevity: 50,
      energy: 40,
      memory: 38,
      sleep: 35,
    },
  },
  {
    slug: "pregnenolone",
    name: "Pregnenolone",
    category: "supplement",
    summary:
      "Pregnenolone is a steroid hormone precursor synthesized from cholesterol, serving as the upstream precursor to DHEA, progesterone, cortisol, and sex hormones.",
    quickVerdict:
      "Interest in mood and cognitive support, but hormonal downstream effects warrant caution. Clinical evidence is limited.",
    evidenceScore: 35,
    researchNotes:
      "Small trials in schizophrenia and mood disorders show mixed results. Neurosteroid properties are well characterized. Large-scale safety and efficacy trials are lacking.",
    cautions:
      "As a hormone precursor, may affect levels of downstream hormones unpredictably. Not recommended without medical supervision.",
    caveats:
      "OTC availability does not imply safety for unsupervised use. Hormonal cascading effects are complex and individual.",
    benefits: [
      "Precursor to multiple neurosteroids",
      "May support memory and mood",
      "Potential role in stress resilience",
    ],
    dosageNotes:
      "5–50 mg daily in studies. Start low due to hormonal activity. Medical supervision recommended.",
    sideEffects: [
      "Hormonal imbalances",
      "Acne and oily skin",
      "Irritability or mood changes",
      "Insomnia",
    ],
    tags: ["hormone-precursor", "neurosteroid", "mood"],
    scores: {
      mood: 35,
      memory: 30,
      stress: 30,
    },
  },
  {
    slug: "propionyl-l-carnitine",
    name: "Propionyl-L-Carnitine",
    category: "supplement",
    summary:
      "Propionyl-L-carnitine (PLC) is an ester of L-carnitine with particular affinity for cardiac and skeletal muscle tissue, studied for peripheral vascular disease and exercise performance.",
    quickVerdict:
      "Good evidence for intermittent claudication and peripheral circulation; modest exercise performance data.",
    evidenceScore: 55,
    researchNotes:
      "Multiple RCTs support PLC for walking distance in peripheral arterial disease. Also studied for heart failure and male fertility. Exercise performance evidence is modest.",
    cautions:
      "May interact with thyroid hormones and anticoagulants. Use with caution in hypothyroidism.",
    caveats:
      "Benefits are specific to vascular and cardiac tissue; general carnitine may be more appropriate for fat metabolism.",
    benefits: [
      "Improves walking distance in peripheral vascular disease",
      "Supports cardiac energy metabolism",
      "May enhance exercise recovery",
    ],
    dosageNotes:
      "1–3 g daily in divided doses. Often used at 2 g/day in vascular studies.",
    sideEffects: [
      "GI upset",
      "Fishy body odor",
      "Nausea",
    ],
    tags: ["carnitine", "cardiovascular", "circulation"],
    scores: {
      recovery: 45,
      energy: 40,
    },
  },
  {
    slug: "protease",
    name: "Protease",
    category: "supplement",
    summary:
      "Proteases are a class of enzymes that break down proteins into peptides and amino acids, used as digestive aids and for systemic anti-inflammatory effects.",
    quickVerdict:
      "Well-supported as a digestive enzyme; systemic anti-inflammatory use has some evidence but fewer large trials.",
    evidenceScore: 45,
    researchNotes:
      "Digestive benefits are well-accepted. Systemic enzyme therapy (bromelain, trypsin, chymotrypsin blends) has moderate evidence for post-surgical swelling and sports injuries.",
    cautions:
      "May increase bleeding risk. Avoid before surgery and with anticoagulant medications.",
    caveats:
      "Enzyme activity units vary by manufacturer. Enteric coating is important for systemic rather than digestive use.",
    benefits: [
      "Aids protein digestion",
      "May reduce post-surgical and exercise-induced inflammation",
      "Supports nutrient absorption",
    ],
    dosageNotes:
      "Dosage varies by enzyme type and activity units. Take with meals for digestive support or between meals for systemic effects.",
    sideEffects: [
      "GI discomfort",
      "Allergic reactions (rare)",
      "Increased bleeding risk",
    ],
    tags: ["digestive-enzyme", "anti-inflammatory", "recovery"],
    scores: {
      recovery: 40,
      pain: 30,
    },
  },
  {
    slug: "pterostilbene",
    name: "Pterostilbene",
    category: "supplement",
    summary:
      "Pterostilbene is a dimethylated analog of resveratrol found in blueberries, with superior bioavailability and similar sirtuin-activating and antioxidant properties.",
    quickVerdict:
      "Better absorbed than resveratrol with promising preclinical longevity and metabolic data. Human evidence is still developing.",
    evidenceScore: 48,
    researchNotes:
      "Bioavailability roughly 4x that of resveratrol. Clinical trials show reductions in blood pressure and LDL cholesterol. Strong preclinical data on SIRT1 activation and neuroprotection.",
    cautions:
      "May raise LDL in some individuals when used alone (without grape seed extract). Monitor lipids.",
    caveats:
      "Most longevity and neuroprotective claims are extrapolated from animal studies.",
    benefits: [
      "Superior bioavailability compared to resveratrol",
      "May lower blood pressure",
      "Activates sirtuin pathways",
      "Antioxidant and anti-inflammatory",
    ],
    dosageNotes:
      "50–250 mg daily. Often combined with resveratrol or grape seed extract.",
    sideEffects: [
      "Possible LDL increase at high doses",
      "Mild GI discomfort",
    ],
    tags: ["longevity", "sirtuin", "antioxidant", "blueberry"],
    scores: {
      longevity: 55,
      memory: 35,
      mood: 30,
    },
  },
  {
    slug: "punicalagins",
    name: "Punicalagins",
    category: "supplement",
    summary:
      "Punicalagins are ellagitannin polyphenols from pomegranate, responsible for much of its antioxidant activity and metabolized to urolithins by gut bacteria.",
    quickVerdict:
      "Strong antioxidant capacity in vitro; cardiovascular benefits supported by pomegranate extract trials.",
    evidenceScore: 50,
    researchNotes:
      "Clinical trials of pomegranate extract (rich in punicalagins) show reduced blood pressure and improved arterial function. Gut conversion to urolithin A varies individually.",
    cautions:
      "May interact with ACE inhibitors and statins. Pomegranate juice can affect drug metabolism via CYP enzymes.",
    caveats:
      "Benefits depend on individual gut microbiome capacity to produce urolithins. Isolated punicalagin supplements are less studied than whole pomegranate extract.",
    benefits: [
      "Potent antioxidant activity",
      "Supports cardiovascular health",
      "Precursor to beneficial urolithins",
    ],
    dosageNotes:
      "Typically consumed as pomegranate extract providing 200–1000 mg punicalagins daily.",
    sideEffects: [
      "GI discomfort",
      "Potential drug interactions with statins",
    ],
    tags: ["polyphenol", "pomegranate", "cardiovascular"],
    scores: {
      longevity: 50,
      immunity: 35,
    },
  },
  {
    slug: "pycnogenol",
    name: "Pycnogenol",
    category: "supplement",
    summary:
      "Pycnogenol is a standardized extract of French maritime pine bark rich in procyanidins, with extensive clinical research on circulation, inflammation, and skin health.",
    quickVerdict:
      "One of the better-studied plant extracts with evidence across multiple health domains including circulation, blood sugar, and skin aging.",
    evidenceScore: 70,
    researchNotes:
      "Over 160 published studies including multiple RCTs. Evidence supports benefits for chronic venous insufficiency, blood glucose management, skin photoaging, and endothelial function.",
    cautions:
      "May enhance effects of antihypertensive and antidiabetic medications. Mild immunostimulatory effects.",
    caveats:
      "Many studies are industry-funded. Generic pine bark extracts may not have identical composition.",
    benefits: [
      "Improves circulation and venous function",
      "Supports blood glucose regulation",
      "Reduces skin aging markers",
      "Anti-inflammatory and antioxidant",
    ],
    dosageNotes:
      "50–200 mg daily. Most studies use 100–150 mg daily.",
    sideEffects: [
      "Mild GI discomfort",
      "Dizziness (rare)",
      "Headache",
    ],
    tags: ["pine-bark", "circulation", "antioxidant", "skin-health"],
    scores: {
      longevity: 55,
      recovery: 45,
      immunity: 40,
    },
  },
  {
    slug: "pyridoxal-5-phosphate",
    name: "Pyridoxal-5-Phosphate",
    category: "supplement",
    summary:
      "Pyridoxal-5-phosphate (P5P) is the active coenzyme form of vitamin B6, bypassing hepatic conversion and essential for over 100 enzymatic reactions.",
    quickVerdict:
      "Preferred form for those with impaired B6 conversion. Well-supported for mood, homocysteine reduction, and neurotransmitter synthesis.",
    evidenceScore: 68,
    researchNotes:
      "B6 is well-established as essential for neurotransmitter synthesis, homocysteine metabolism, and immune function. P5P form is preferred for individuals with liver impairment or genetic polymorphisms affecting conversion.",
    cautions:
      "High-dose pyridoxine (not P5P) has caused peripheral neuropathy. P5P appears safer but prudent to keep doses reasonable.",
    caveats:
      "For most people, standard pyridoxine is adequate. P5P primarily benefits those with conversion issues.",
    benefits: [
      "Active form requires no hepatic conversion",
      "Supports neurotransmitter synthesis",
      "Helps lower homocysteine levels",
      "Essential for amino acid metabolism",
    ],
    dosageNotes:
      "25–100 mg daily. RDA for B6 is 1.3–2.0 mg; higher therapeutic doses used under guidance.",
    sideEffects: [
      "Generally well tolerated",
      "Vivid dreams at higher doses",
      "Neuropathy risk much lower than with pyridoxine",
    ],
    tags: ["vitamin-b6", "coenzyme", "neurotransmitter"],
    scores: {
      mood: 55,
      energy: 45,
      focus: 40,
    },
  },
  {
    slug: "pyruvic-acid",
    name: "Pyruvic Acid",
    category: "supplement",
    summary:
      "Pyruvic acid (pyruvate) is a key intermediate in glycolysis studied for modest effects on body composition and exercise endurance.",
    quickVerdict:
      "Weak and inconsistent evidence for fat loss and performance. High doses needed for marginal effects.",
    evidenceScore: 25,
    researchNotes:
      "A few small trials showed modest fat loss at very high doses (22–44 g/day). Exercise performance data is mixed. The required doses are impractical and cause GI distress.",
    cautions:
      "High doses cause significant GI side effects. No safety data for chronic high-dose use.",
    caveats:
      "Effective doses in studies are far higher than typical supplement doses (1–5 g). Practical relevance is questionable.",
    benefits: [
      "Central metabolic intermediate",
      "May modestly enhance fat oxidation at high doses",
      "Potential ergogenic aid in theory",
    ],
    dosageNotes:
      "Supplements typically provide 1–5 g, well below the 22–44 g used in positive trials.",
    sideEffects: [
      "GI distress (bloating, gas, diarrhea)",
      "Nausea at high doses",
    ],
    tags: ["metabolism", "weight-management", "glycolysis"],
    scores: {
      "weight-loss": 20,
      energy: 15,
    },
  },
  {
    slug: "quercetin",
    name: "Quercetin",
    category: "supplement",
    summary:
      "Quercetin is a widely distributed flavonoid with antioxidant, anti-inflammatory, and senolytic properties, found in onions, apples, and berries.",
    quickVerdict:
      "Broad evidence for anti-inflammatory and immune-supporting effects. Emerging senolytic interest. Bioavailability is a key limitation.",
    evidenceScore: 65,
    researchNotes:
      "Clinical trials support reductions in blood pressure, upper respiratory infections, and inflammation markers. Senolytic activity (with dasatinib) shown in human trials. Bioavailability is poor without enhancement.",
    cautions:
      "May interact with certain antibiotics and cyclosporine. High doses may affect thyroid function.",
    caveats:
      "Standard quercetin has low oral bioavailability (~2%). Phytosome or glycoside forms are significantly better absorbed.",
    benefits: [
      "Anti-inflammatory and antioxidant",
      "May reduce upper respiratory infection duration",
      "Senolytic activity in combination protocols",
      "Supports cardiovascular health",
    ],
    dosageNotes:
      "500–1000 mg daily. Bioavailability greatly improved with phytosome delivery or co-administration with vitamin C.",
    sideEffects: [
      "Headache",
      "GI discomfort",
      "Tingling sensations (rare)",
    ],
    tags: ["flavonoid", "senolytic", "anti-inflammatory", "immunity"],
    scores: {
      longevity: 60,
      immunity: 55,
      recovery: 40,
    },
  },
  {
    slug: "quercetin-phytosome",
    name: "Quercetin Phytosome",
    category: "supplement",
    summary:
      "Quercetin phytosome is a phospholipid-complexed form of quercetin with dramatically improved bioavailability compared to standard quercetin.",
    quickVerdict:
      "Addresses the main limitation of quercetin. Up to 20x better absorption makes lower doses effective.",
    evidenceScore: 58,
    researchNotes:
      "Pharmacokinetic studies confirm 20-fold higher plasma quercetin levels versus standard form. Clinical trials show immune and anti-inflammatory benefits at 500 mg. Quercefit is the most studied branded form.",
    cautions:
      "Same drug interactions as standard quercetin. Soy-derived phospholipid complex may concern those with soy allergy.",
    caveats:
      "More expensive than standard quercetin. Long-term comparative efficacy data versus standard quercetin is limited.",
    benefits: [
      "Dramatically improved bioavailability",
      "Effective at lower doses than standard quercetin",
      "Retains all quercetin benefits with better delivery",
    ],
    dosageNotes:
      "250–500 mg daily of quercetin phytosome complex (Quercefit).",
    sideEffects: [
      "GI discomfort (less common than standard quercetin due to lower doses)",
      "Headache (rare)",
    ],
    tags: ["quercetin", "phytosome", "bioavailability"],
    scores: {
      longevity: 60,
      immunity: 58,
      recovery: 42,
    },
  },
  {
    slug: "r-alpha-lipoic-acid",
    name: "R-Alpha Lipoic Acid",
    category: "supplement",
    summary:
      "R-alpha lipoic acid is the biologically active enantiomer of alpha-lipoic acid, a potent antioxidant that regenerates other antioxidants and supports glucose metabolism.",
    quickVerdict:
      "Superior to racemic ALA for bioavailability. Good evidence for diabetic neuropathy and blood sugar support.",
    evidenceScore: 62,
    researchNotes:
      "Multiple RCTs support alpha-lipoic acid for diabetic neuropathy (600 mg IV). Oral R-ALA has better pharmacokinetics than racemic ALA. Also studied for weight management and heavy metal chelation.",
    cautions:
      "May lower blood sugar; monitor if diabetic. Can chelate minerals with long-term use. Possible biotin depletion.",
    caveats:
      "Stabilized R-ALA (Na-RALA) is preferred as free R-ALA polymerizes easily. Many ALA studies used the racemic form.",
    benefits: [
      "Potent antioxidant that recycles vitamins C and E",
      "Supports blood sugar regulation",
      "May improve diabetic neuropathy symptoms",
      "Both water- and fat-soluble",
    ],
    dosageNotes:
      "100–300 mg R-ALA daily. Stabilized sodium R-lipoate (Na-RALA) preferred. Take on empty stomach.",
    sideEffects: [
      "Hypoglycemia risk in diabetics",
      "GI discomfort",
      "Skin rash (rare)",
    ],
    tags: ["antioxidant", "blood-sugar", "neuropathy"],
    scores: {
      longevity: 55,
      energy: 35,
      pain: 40,
    },
  },
  {
    slug: "red-yeast-rice",
    name: "Red Yeast Rice",
    category: "supplement",
    summary:
      "Red yeast rice contains monacolin K, which is chemically identical to lovastatin, and effectively lowers LDL cholesterol.",
    quickVerdict:
      "Proven cholesterol-lowering effects, but essentially a natural statin with the same benefits and risks.",
    evidenceScore: 78,
    researchNotes:
      "Multiple RCTs and meta-analyses confirm LDL reduction of 15–25%. A large Chinese trial (CCSPS) showed reduced cardiovascular events. Monacolin K content varies wildly between products.",
    cautions:
      "Carries the same risks as prescription statins: myopathy, liver enzyme elevation, rhabdomyolysis. May contain citrinin (a nephrotoxic mycotoxin) in poorly manufactured products.",
    caveats:
      "Product quality is a major concern. Some products contain negligible monacolin K while others contain therapeutic amounts. Regulatory status varies by country.",
    benefits: [
      "Clinically proven to lower LDL cholesterol",
      "Reduced cardiovascular events in large trial",
      "Alternative for statin-intolerant patients (under supervision)",
    ],
    dosageNotes:
      "Standardized to provide 3–10 mg monacolin K daily. Always choose citrinin-free products.",
    sideEffects: [
      "Muscle pain (same mechanism as statins)",
      "Liver enzyme elevation",
      "GI discomfort",
      "CoQ10 depletion",
    ],
    tags: ["cholesterol", "cardiovascular", "statin-alternative"],
    scores: {
      longevity: 65,
    },
  },
  {
    slug: "resveratrol",
    name: "Resveratrol",
    category: "supplement",
    summary:
      "Resveratrol is a stilbenoid polyphenol from grapes and red wine, extensively studied for sirtuin activation, cardiovascular protection, and longevity.",
    quickVerdict:
      "Massive preclinical promise has not fully translated to humans. Cardiovascular and anti-inflammatory benefits are modest at best.",
    evidenceScore: 55,
    researchNotes:
      "Despite thousands of preclinical studies, human clinical data is mixed. Meta-analyses show modest benefits for blood pressure, glucose, and inflammatory markers. Bioavailability is very poor.",
    cautions:
      "May have estrogenic activity. Interacts with CYP enzymes and anticoagulants. High doses may be pro-oxidant.",
    caveats:
      "Poor oral bioavailability (~1%) limits translation of in-vitro findings. Trans-resveratrol is the active isomer. Pterostilbene may be a superior alternative.",
    benefits: [
      "Activates SIRT1 and AMPK pathways",
      "Anti-inflammatory and antioxidant",
      "May modestly improve cardiometabolic markers",
    ],
    dosageNotes:
      "150–500 mg daily of trans-resveratrol. Higher doses (1–2 g) used in some trials but with more side effects.",
    sideEffects: [
      "GI discomfort at high doses",
      "Diarrhea",
      "Drug interactions via CYP inhibition",
    ],
    tags: ["polyphenol", "sirtuin", "longevity", "antioxidant"],
    scores: {
      longevity: 50,
      immunity: 30,
    },
  },
  {
    slug: "retinol",
    name: "Retinol (Vitamin A)",
    category: "supplement",
    summary:
      "Retinol is the preformed, active form of vitamin A essential for vision, immune function, skin health, and gene expression.",
    quickVerdict:
      "Essential nutrient with robust evidence for deficiency correction. Supplementation in replete individuals offers limited benefit and carries toxicity risk.",
    evidenceScore: 80,
    researchNotes:
      "Deficiency correction is one of the most evidence-based interventions globally. Excess intake is well-documented to cause toxicity including teratogenicity. Beta-carotene is a safer alternative for those not deficient.",
    cautions:
      "Teratogenic at high doses; contraindicated in pregnancy above RDA. Chronic high intake causes liver toxicity and hypervitaminosis A.",
    caveats:
      "Most people in developed countries get adequate vitamin A from diet. Supplementation is mainly warranted in deficiency or malabsorption states.",
    benefits: [
      "Essential for vision and night sight",
      "Critical for immune function",
      "Supports skin cell turnover",
      "Required for reproductive health",
    ],
    dosageNotes:
      "RDA is 700–900 mcg RAE (2300–3000 IU). Upper limit is 3000 mcg RAE (10,000 IU) daily.",
    sideEffects: [
      "Liver toxicity at chronic high doses",
      "Birth defects (teratogenicity)",
      "Headache and nausea in acute excess",
      "Dry skin and hair loss",
    ],
    tags: ["vitamin-a", "vision", "immunity", "essential"],
    scores: {
      immunity: 70,
      longevity: 45,
    },
  },
  {
    slug: "rhoifolin",
    name: "Rhoifolin",
    category: "supplement",
    summary:
      "Rhoifolin is a flavone glycoside found in citrus and certain medicinal plants, with emerging anti-inflammatory and antiviral research interest.",
    quickVerdict:
      "Very early-stage research compound. No human clinical trials. Preclinical data suggests anti-inflammatory potential.",
    evidenceScore: 15,
    researchNotes:
      "In-silico and in-vitro studies suggest inhibition of inflammatory mediators and potential antiviral activity. No human pharmacokinetic or clinical data available.",
    cautions:
      "No established safety profile in humans. Not recommended for supplementation based on current evidence.",
    caveats:
      "Strictly a research-stage compound. Any health claims are premature.",
    benefits: [
      "Anti-inflammatory activity in preclinical models",
      "Antiviral properties under investigation",
      "Antioxidant flavonoid",
    ],
    dosageNotes:
      "No established human dosage. Research use only.",
    sideEffects: [
      "Unknown due to lack of human studies",
    ],
    tags: ["flavonoid", "citrus", "research-stage"],
    scores: {
      immunity: 15,
    },
  },
  {
    slug: "rosmarinic-acid",
    name: "Rosmarinic Acid",
    category: "supplement",
    summary:
      "Rosmarinic acid is a polyphenol ester found in rosemary, lemon balm, and perilla, with anti-inflammatory, antiallergic, and antioxidant properties.",
    quickVerdict:
      "Moderate evidence for allergic rhinitis and inflammation. Often consumed as part of herbal extracts rather than isolated.",
    evidenceScore: 45,
    researchNotes:
      "Clinical trials of perilla extract (rich in rosmarinic acid) show benefit for seasonal allergies. Anti-inflammatory effects via COX-2 and LOX inhibition. Also studied for cognitive enhancement.",
    cautions:
      "Generally safe at food-level doses. May potentiate anticoagulant effects.",
    caveats:
      "Most studies use whole herb extracts. Isolated rosmarinic acid supplementation is less studied.",
    benefits: [
      "Reduces allergic inflammation",
      "Potent antioxidant",
      "May support cognitive function",
    ],
    dosageNotes:
      "50–200 mg daily from standardized extracts. Perilla leaf extract typically provides 50–100 mg rosmarinic acid.",
    sideEffects: [
      "Mild GI discomfort",
      "Generally well tolerated",
    ],
    tags: ["polyphenol", "anti-allergy", "antioxidant"],
    scores: {
      immunity: 45,
      focus: 30,
    },
  },
  {
    slug: "rutin",
    name: "Rutin",
    category: "supplement",
    summary:
      "Rutin is a flavonoid glycoside found in buckwheat, citrus, and asparagus, known for strengthening capillaries and supporting venous health.",
    quickVerdict:
      "Reasonable evidence for chronic venous insufficiency and capillary fragility. Antioxidant benefits are secondary.",
    evidenceScore: 52,
    researchNotes:
      "Clinical trials support rutin and its semi-synthetic derivative (oxerutins) for chronic venous insufficiency, edema, and hemorrhoid symptoms. Also studied as an anti-inflammatory.",
    cautions:
      "Generally well tolerated. May interact with anticoagulants and certain antibiotics.",
    caveats:
      "Bioavailability of rutin is limited. Enzymatically modified isoquercitrin (EMIQ) or oxerutins may be more effective.",
    benefits: [
      "Strengthens capillaries and reduces permeability",
      "Supports venous health",
      "Antioxidant and anti-inflammatory",
    ],
    dosageNotes:
      "500–1000 mg daily. Oxerutins typically dosed at 500–1000 mg daily.",
    sideEffects: [
      "Headache",
      "GI discomfort",
      "Skin flushing (rare)",
    ],
    tags: ["flavonoid", "venous-health", "capillary"],
    scores: {
      recovery: 40,
      longevity: 35,
    },
  },
  {
    slug: "s-acetyl-glutathione",
    name: "S-Acetyl Glutathione",
    category: "supplement",
    summary:
      "S-acetyl glutathione is an acetylated, orally stable form of glutathione that resists degradation in the GI tract and may deliver intact glutathione to cells.",
    quickVerdict:
      "Theoretically superior oral bioavailability over reduced glutathione, but clinical evidence comparing forms is limited.",
    evidenceScore: 38,
    researchNotes:
      "Acetylation protects the sulfhydryl group from oxidation and enzymatic breakdown. Pharmacokinetic data suggests better absorption than reduced glutathione, but head-to-head clinical trials are scarce.",
    cautions:
      "Generally safe. Some individuals report detox-like symptoms when starting.",
    caveats:
      "Liposomal glutathione is another bioavailable option. Direct clinical comparisons between delivery forms are lacking.",
    benefits: [
      "Improved oral stability over reduced glutathione",
      "Supports cellular antioxidant defense",
      "May enhance detoxification pathways",
    ],
    dosageNotes:
      "100–300 mg daily on an empty stomach.",
    sideEffects: [
      "Sulfurous taste or smell",
      "Mild GI discomfort",
      "Temporary detox symptoms",
    ],
    tags: ["glutathione", "antioxidant", "detoxification"],
    scores: {
      longevity: 45,
      immunity: 40,
    },
  },
  {
    slug: "salicin",
    name: "Salicin",
    category: "supplement",
    summary:
      "Salicin is a glucoside found in willow bark that is metabolized to salicylic acid in the body, providing analgesic and anti-inflammatory effects similar to aspirin.",
    quickVerdict:
      "Moderate evidence for low back pain. Gentler on the stomach than aspirin but slower onset.",
    evidenceScore: 50,
    researchNotes:
      "Several RCTs support willow bark extract (standardized to salicin) for low back pain at 120–240 mg salicin daily. Mechanism includes COX inhibition and other anti-inflammatory pathways beyond salicylic acid alone.",
    cautions:
      "Avoid in aspirin allergy, children (Reye syndrome risk), and with anticoagulants. Not a direct aspirin substitute for cardiovascular prevention.",
    caveats:
      "Willow bark contains additional bioactives that may contribute to effects beyond salicin alone. Onset is slower than aspirin.",
    benefits: [
      "Natural analgesic for low back pain",
      "Anti-inflammatory via multiple pathways",
      "Gentler on gastric mucosa than aspirin",
    ],
    dosageNotes:
      "Willow bark extract providing 120–240 mg salicin daily.",
    sideEffects: [
      "GI irritation (less than aspirin)",
      "Allergic reactions in aspirin-sensitive individuals",
      "Potential bleeding risk",
    ],
    tags: ["analgesic", "willow-bark", "anti-inflammatory"],
    scores: {
      pain: 55,
      recovery: 35,
    },
  },
  {
    slug: "same",
    name: "SAMe (S-Adenosylmethionine)",
    category: "supplement",
    summary:
      "SAMe is a naturally occurring methyl donor involved in neurotransmitter synthesis, joint health, and liver function, with strong clinical evidence for depression and osteoarthritis.",
    quickVerdict:
      "One of the better-evidenced supplements for depression and osteoarthritis. Enteric-coated tablets required for stability.",
    evidenceScore: 72,
    researchNotes:
      "Multiple meta-analyses confirm efficacy comparable to tricyclic antidepressants for depression and NSAIDs for osteoarthritis pain. Also well-studied for liver disease (cholestasis). AHRQ evidence review is favorable.",
    cautions:
      "Can trigger mania in bipolar disorder. Serotonin syndrome risk with SSRIs/SNRIs. Not for use with MAOIs.",
    caveats:
      "Expensive and unstable. Enteric-coated, refrigerated tablets recommended. Must avoid butanedisulfonate salt if possible; tosylate form is better studied.",
    benefits: [
      "Evidence-based for depression treatment",
      "Reduces osteoarthritis pain comparable to NSAIDs",
      "Supports liver methylation and detoxification",
      "Methyl donor for epigenetic processes",
    ],
    dosageNotes:
      "400–1600 mg daily for depression. 600–1200 mg daily for osteoarthritis. Start low and titrate up.",
    sideEffects: [
      "GI discomfort and nausea",
      "Anxiety and insomnia",
      "Mania risk in bipolar disorder",
    ],
    tags: ["mood", "joint-health", "methyl-donor", "liver"],
    scores: {
      mood: 72,
      pain: 60,
      longevity: 40,
    },
  },
  {
    slug: "selenium",
    name: "Selenium",
    category: "supplement",
    summary:
      "Selenium is an essential trace mineral incorporated into selenoproteins that are critical for antioxidant defense, thyroid function, and immune regulation.",
    quickVerdict:
      "Essential in deficiency states with clear thyroid and immune benefits. Supplementation in replete individuals may carry risks.",
    evidenceScore: 74,
    researchNotes:
      "Strong evidence for thyroid autoimmunity (Hashimoto's). SELECT trial showed no cancer prevention benefit and potential diabetes risk at 200 mcg. Benefits are most clear in selenium-deficient populations.",
    cautions:
      "Narrow therapeutic window. Chronic intake above 400 mcg/day risks selenosis. SELECT trial raised concerns about prostate cancer and diabetes risk.",
    caveats:
      "Benefits depend on baseline selenium status. Those already replete (>120 mcg/L plasma) are unlikely to benefit and may be harmed.",
    benefits: [
      "Essential for thyroid hormone metabolism",
      "Supports glutathione peroxidase function",
      "May reduce thyroid antibodies in Hashimoto's",
      "Supports immune function in deficiency",
    ],
    dosageNotes:
      "55–200 mcg daily. RDA is 55 mcg. Do not exceed 400 mcg/day. Selenomethionine is the best-absorbed form.",
    sideEffects: [
      "Garlic breath and metallic taste at high doses",
      "Hair and nail brittleness",
      "GI disturbance",
      "Selenosis at chronic high intake",
    ],
    tags: ["mineral", "thyroid", "antioxidant", "essential"],
    scores: {
      immunity: 60,
      longevity: 50,
    },
  },
  {
    slug: "selenomethionine",
    name: "Selenomethionine",
    category: "supplement",
    summary:
      "Selenomethionine is the primary organic form of selenium found in food, offering superior absorption and tissue storage compared to inorganic selenium.",
    quickVerdict:
      "Best-absorbed selenium form with good tissue incorporation. Same benefits and cautions as selenium supplementation generally.",
    evidenceScore: 70,
    researchNotes:
      "Pharmacokinetic studies show ~90% absorption versus ~50% for selenite. Used in the SELECT and NPC trials. Stored in body proteins (methionine pool) which provides a selenium reserve.",
    cautions:
      "Same toxicity concerns as other selenium forms. Do not exceed 400 mcg/day total selenium intake.",
    caveats:
      "Tissue storage means slower response but also longer washout. Sodium selenite may be preferable when rapid selenoprotein upregulation is needed.",
    benefits: [
      "Highest bioavailability among selenium forms",
      "Incorporated into body protein pool as selenium reserve",
      "Supports all selenoprotein functions",
    ],
    dosageNotes:
      "100–200 mcg daily. Most commonly available as 200 mcg capsules.",
    sideEffects: [
      "Same as selenium generally",
      "Garlic-like breath at high doses",
      "GI discomfort",
    ],
    tags: ["selenium", "mineral", "bioavailable"],
    scores: {
      immunity: 60,
      longevity: 50,
    },
  },
  {
    slug: "serrapeptase",
    name: "Serrapeptase",
    category: "supplement",
    summary:
      "Serrapeptase is a proteolytic enzyme originally derived from silkworm bacteria, used for inflammation, pain, and mucus reduction.",
    quickVerdict:
      "Popular in integrative medicine but clinical evidence is mixed and largely from lower-quality trials.",
    evidenceScore: 35,
    researchNotes:
      "Some small trials support post-surgical swelling reduction and sinusitis symptom relief. Systematic reviews note poor study quality. Widely used in Europe and Japan but evidence base is weaker than for bromelain.",
    cautions:
      "May increase bleeding risk. Avoid before surgery and with anticoagulants. Rare reports of pneumonitis.",
    caveats:
      "Many studies are old, small, and of questionable methodology. Enteric coating is essential for activity.",
    benefits: [
      "May reduce post-surgical swelling",
      "Used for sinus congestion and mucus",
      "Anti-inflammatory properties claimed",
    ],
    dosageNotes:
      "10,000–120,000 SPU (serrapeptase units) daily on an empty stomach. Enteric-coated formulations required.",
    sideEffects: [
      "GI disturbance",
      "Increased bleeding risk",
      "Skin reactions (rare)",
      "Pneumonitis (rare case reports)",
    ],
    tags: ["enzyme", "anti-inflammatory", "proteolytic"],
    scores: {
      pain: 35,
      recovery: 35,
      immunity: 25,
    },
  },
  {
    slug: "shilajit",
    name: "Shilajit",
    category: "supplement",
    summary:
      "Shilajit is a mineral-rich resinous substance from Himalayan rocks containing fulvic acid and over 80 minerals, used in Ayurvedic medicine for vitality and testosterone support.",
    quickVerdict:
      "Emerging evidence for testosterone, mitochondrial function, and altitude adaptation. Quality control is a major concern.",
    evidenceScore: 42,
    researchNotes:
      "Small clinical trials show increases in total testosterone and free testosterone in healthy men. Fulvic acid component enhances CoQ10 delivery to mitochondria. Traditionally used as a rejuvenator (rasayana).",
    cautions:
      "Raw, unpurified shilajit may contain heavy metals, mycotoxins, or contaminants. Only use purified, tested products.",
    caveats:
      "Quality varies enormously. Many products are adulterated or contaminated. Third-party testing is essential.",
    benefits: [
      "May increase testosterone in men",
      "Supports mitochondrial energy production",
      "Rich in fulvic acid and trace minerals",
      "Traditional adaptogenic use",
    ],
    dosageNotes:
      "250–500 mg daily of purified shilajit extract. PrimaVie is the most studied branded form.",
    sideEffects: [
      "Heavy metal contamination risk in unverified products",
      "GI discomfort",
      "May lower blood pressure",
    ],
    tags: ["testosterone", "fulvic-acid", "ayurvedic", "mineral"],
    scores: {
      energy: 45,
      libido: 40,
      muscle: 35,
      longevity: 35,
    },
  },
  {
    slug: "silybin",
    name: "Silybin",
    category: "supplement",
    summary:
      "Silybin (silibinin) is the most active flavonolignan in milk thistle (silymarin), with hepatoprotective, antioxidant, and emerging anticancer properties.",
    quickVerdict:
      "Best-studied component of milk thistle with solid evidence for liver protection. Phytosome forms dramatically improve bioavailability.",
    evidenceScore: 60,
    researchNotes:
      "Clinical trials support silymarin/silybin for alcoholic and non-alcoholic liver disease, hepatitis C adjunct therapy, and Amanita mushroom poisoning. Silybin phytosome (Siliphos) achieves 4–10x higher plasma levels.",
    cautions:
      "May lower blood sugar. Possible estrogenic effects at high doses. Interacts with CYP enzymes and UGT substrates.",
    caveats:
      "Standard silymarin extract has poor bioavailability (~1%). Silybin phytosome is the preferred oral form.",
    benefits: [
      "Hepatoprotective and liver-regenerative",
      "Potent antioxidant in liver tissue",
      "Used in Amanita mushroom poisoning treatment",
      "Emerging anti-fibrotic properties",
    ],
    dosageNotes:
      "Silybin phytosome: 120–240 mg twice daily. Standard silymarin: 420–600 mg daily.",
    sideEffects: [
      "Mild laxative effect",
      "GI discomfort",
      "Allergic reactions in ragweed-sensitive individuals",
    ],
    tags: ["liver-health", "milk-thistle", "hepatoprotective"],
    scores: {
      longevity: 50,
    },
  },
  {
    slug: "sodium-ascorbate",
    name: "Sodium Ascorbate",
    category: "supplement",
    summary:
      "Sodium ascorbate is a buffered, non-acidic form of vitamin C that is gentler on the stomach while providing equivalent antioxidant and immune-supporting activity.",
    quickVerdict:
      "Preferred form for those who experience GI distress from ascorbic acid. Same benefits as standard vitamin C.",
    evidenceScore: 75,
    researchNotes:
      "Identical vitamin C activity to ascorbic acid. Buffered pH (~7.4) reduces gastric irritation. Evidence base for vitamin C overall is extensive for immune function, collagen synthesis, and antioxidant protection.",
    cautions:
      "Contains sodium (~131 mg per 1000 mg). Consider in sodium-restricted diets. High doses may cause osmotic diarrhea.",
    caveats:
      "Not meaningfully different from ascorbic acid in efficacy. Main advantage is GI tolerability.",
    benefits: [
      "Non-acidic vitamin C form",
      "Better GI tolerability than ascorbic acid",
      "Full vitamin C antioxidant and immune benefits",
    ],
    dosageNotes:
      "500–2000 mg daily. Same dosing as standard vitamin C.",
    sideEffects: [
      "Osmotic diarrhea at very high doses",
      "Sodium intake consideration",
      "Kidney stone risk at chronic high doses in susceptible individuals",
    ],
    tags: ["vitamin-c", "buffered", "antioxidant"],
    scores: {
      immunity: 65,
      longevity: 45,
      recovery: 40,
    },
  },
  {
    slug: "sodium-bicarbonate",
    name: "Sodium Bicarbonate",
    category: "supplement",
    summary:
      "Sodium bicarbonate (baking soda) is an alkaline compound used as an ergogenic aid to buffer lactic acid during high-intensity exercise.",
    quickVerdict:
      "Well-supported as a performance buffer for high-intensity exercise lasting 1–7 minutes. GI side effects are the main limitation.",
    evidenceScore: 72,
    researchNotes:
      "Meta-analyses confirm a small but significant improvement in high-intensity exercise performance (1–3% improvement). Most effective for repeated sprints and efforts lasting 1–7 minutes. Also used medically as an antacid.",
    cautions:
      "High sodium load. Contraindicated in hypertension, heart failure, and kidney disease. Can cause severe GI distress.",
    caveats:
      "GI side effects limit practical use. Serial loading protocols and enteric-coated capsules may improve tolerability.",
    benefits: [
      "Buffers exercise-induced metabolic acidosis",
      "Improves high-intensity exercise capacity",
      "Well-studied ergogenic aid",
    ],
    dosageNotes:
      "0.2–0.3 g/kg body weight taken 60–150 minutes before exercise. Serial loading (0.1 g/kg for 3 days) is an alternative.",
    sideEffects: [
      "GI distress (bloating, nausea, diarrhea)",
      "Significant sodium load",
      "Vomiting at high acute doses",
    ],
    tags: ["ergogenic", "exercise", "buffer"],
    scores: {
      muscle: 45,
      energy: 40,
      recovery: 30,
    },
  },
  {
    slug: "sodium-butyrate",
    name: "Sodium Butyrate",
    category: "supplement",
    summary:
      "Sodium butyrate is a salt of butyric acid, a short-chain fatty acid that serves as the primary fuel for colonocytes and modulates gut inflammation and gene expression.",
    quickVerdict:
      "Strong biological rationale for gut health. Clinical evidence for oral supplementation is growing but still moderate.",
    evidenceScore: 48,
    researchNotes:
      "Butyrate is well-established as essential for colonocyte health and gut barrier function. Oral supplementation studies show benefits for IBS symptoms and inflammatory markers. Also an HDAC inhibitor with epigenetic implications.",
    cautions:
      "Unpleasant taste and smell. Enteric-coated forms preferred. Limited long-term safety data for supplemental doses.",
    caveats:
      "Endogenous butyrate production from fiber fermentation may be more physiologically relevant than oral supplementation. Tributyrin may be a superior delivery form.",
    benefits: [
      "Primary fuel source for colon cells",
      "Supports gut barrier integrity",
      "HDAC inhibitor with anti-inflammatory effects",
      "May improve IBS symptoms",
    ],
    dosageNotes:
      "150–600 mg daily. Enteric-coated or delayed-release forms preferred to reach the colon.",
    sideEffects: [
      "Strong unpleasant odor and taste",
      "GI discomfort",
      "Bloating",
    ],
    tags: ["gut-health", "short-chain-fatty-acid", "epigenetic"],
    scores: {
      immunity: 45,
      longevity: 40,
    },
  },
  {
    slug: "spermidine",
    name: "Spermidine",
    category: "supplement",
    summary:
      "Spermidine is a natural polyamine that induces autophagy and is associated with longevity in observational studies across multiple populations.",
    quickVerdict:
      "Exciting longevity candidate with strong epidemiological and mechanistic data. Human intervention trials are in early stages.",
    evidenceScore: 50,
    researchNotes:
      "Epidemiological studies link dietary spermidine intake to reduced cardiovascular mortality and improved cognitive function. Mechanism centers on autophagy induction. A small RCT showed memory improvement in older adults.",
    cautions:
      "Theoretical concern about promoting growth of existing tumors due to polyamine-cancer link, though dietary spermidine data does not support this.",
    caveats:
      "Most evidence is observational or preclinical. Supplemental doses may not replicate dietary intake patterns. Wheat germ extract is the most common source.",
    benefits: [
      "Potent autophagy inducer",
      "Associated with cardiovascular longevity",
      "May support cognitive function in aging",
      "Cardioprotective in preclinical models",
    ],
    dosageNotes:
      "1–6 mg daily from wheat germ extract. Dietary intake from aged cheese, mushrooms, and legumes.",
    sideEffects: [
      "Generally well tolerated",
      "Mild GI symptoms possible",
    ],
    tags: ["longevity", "autophagy", "polyamine", "anti-aging"],
    scores: {
      longevity: 60,
      memory: 40,
    },
  },
  {
    slug: "spirulina",
    name: "Spirulina",
    category: "supplement",
    summary:
      "Spirulina is a blue-green microalgae rich in protein, phycocyanin, and micronutrients, with evidence for lipid-lowering, antioxidant, and immune-modulating effects.",
    quickVerdict:
      "Nutrient-dense superfood with moderate evidence for cholesterol and blood pressure reduction. Good safety profile.",
    evidenceScore: 60,
    researchNotes:
      "Meta-analyses show significant reductions in total cholesterol, LDL, triglycerides, and blood pressure. Phycocyanin provides unique antioxidant effects. Also studied for allergic rhinitis and exercise performance.",
    cautions:
      "Risk of contamination with microcystins, heavy metals, or bacteria in unregulated products. Contraindicated in PKU (contains phenylalanine).",
    caveats:
      "Quality control is critical. Only use products tested for contaminants. Immune-stimulating effects may be problematic in autoimmune conditions.",
    benefits: [
      "Reduces total cholesterol and LDL",
      "Rich in phycocyanin antioxidant",
      "Complete protein source",
      "May reduce allergy symptoms",
    ],
    dosageNotes:
      "1–8 g daily. Most clinical benefits seen at 2–4 g daily.",
    sideEffects: [
      "GI discomfort",
      "Green stool discoloration",
      "Contamination risk in low-quality products",
    ],
    tags: ["superfood", "microalgae", "cholesterol", "antioxidant"],
    scores: {
      immunity: 50,
      energy: 40,
      longevity: 45,
    },
  },
  {
    slug: "strontium-citrate",
    name: "Strontium Citrate",
    category: "supplement",
    summary:
      "Strontium citrate is a supplement form of strontium used for bone health. It incorporates into bone matrix and may influence bone metabolism markers.",
    quickVerdict:
      "Prescription strontium ranelate has fracture data; OTC strontium citrate lacks equivalent evidence but may still benefit bone density markers.",
    evidenceScore: 40,
    researchNotes:
      "Strontium ranelate (prescription) has RCT data showing fracture reduction, but was withdrawn in some markets due to cardiovascular concerns. Strontium citrate (OTC) lacks comparable clinical trial data. DXA scans overestimate bone density with strontium use.",
    cautions:
      "May increase cardiovascular risk based on ranelate data. DXA scans are artificially inflated by strontium incorporation. Separate from calcium by 4+ hours.",
    caveats:
      "OTC strontium citrate cannot be assumed equivalent to prescription strontium ranelate. Bone density improvements on DXA may be partly artifact.",
    benefits: [
      "May support bone density markers",
      "Incorporates into bone mineral matrix",
      "Used as adjunct to calcium and vitamin D",
    ],
    dosageNotes:
      "680 mg elemental strontium daily, taken at bedtime away from calcium.",
    sideEffects: [
      "GI discomfort",
      "Potential cardiovascular concerns (from ranelate data)",
      "Falsely elevated DXA readings",
    ],
    tags: ["bone-health", "mineral", "osteoporosis"],
    scores: {
      longevity: 35,
    },
  },
  {
    slug: "sulforaphane",
    name: "Sulforaphane",
    category: "supplement",
    summary:
      "Sulforaphane is an isothiocyanate derived from broccoli sprouts that potently activates Nrf2, the master regulator of cellular antioxidant defenses and detoxification enzymes.",
    quickVerdict:
      "One of the most promising chemopreventive and cytoprotective compounds from food. Clinical evidence is solid for detoxification and anti-inflammatory endpoints.",
    evidenceScore: 68,
    researchNotes:
      "Clinical trials demonstrate enhanced detoxification of airborne pollutants (benzene, acrolein), reduced markers of inflammation, and improved blood glucose in type 2 diabetes. Nrf2 activation is well-documented across multiple tissue types.",
    cautions:
      "May interact with drugs metabolized by CYP enzymes. Raw broccoli sprouts carry food safety risk (E. coli, Salmonella).",
    caveats:
      "Myrosinase enzyme is required to convert glucoraphanin to sulforaphane. Supplements vary in whether they provide preformed sulforaphane or require conversion.",
    benefits: [
      "Potent Nrf2 activator and cytoprotective agent",
      "Enhances Phase II detoxification",
      "Anti-inflammatory across multiple pathways",
      "May support blood glucose regulation",
    ],
    dosageNotes:
      "10–40 mg sulforaphane daily, or 100–400 mg glucoraphanin with myrosinase. Broccoli sprouts are the richest natural source.",
    sideEffects: [
      "GI gas and bloating",
      "Thyroid concerns at extreme doses (goitrogens)",
      "Mild heartburn",
    ],
    tags: ["nrf2", "detoxification", "broccoli", "chemopreventive"],
    scores: {
      longevity: 65,
      immunity: 50,
    },
  },
  {
    slug: "taurine",
    name: "Taurine",
    category: "supplement",
    summary:
      "Taurine is a conditionally essential sulfur amino acid abundant in brain, heart, and muscle tissue, with roles in osmoregulation, antioxidant defense, and cardiovascular function.",
    quickVerdict:
      "Emerging longevity data from a landmark 2023 Science paper. Well-established cardiovascular and exercise benefits. Excellent safety profile.",
    evidenceScore: 65,
    researchNotes:
      "A 2023 Science publication showed taurine decline with aging and lifespan extension in mice. Clinical trials support modest blood pressure reduction, heart failure improvement, and exercise capacity. Safe even at high doses (up to 6 g/day in trials).",
    cautions:
      "Largely considered very safe. May interact with lithium. High doses may have sedative-like effects.",
    caveats:
      "Longevity data in humans is observational; the mouse lifespan study needs human translation. Common in energy drinks but at sub-therapeutic doses.",
    benefits: [
      "Cardioprotective and blood pressure-lowering",
      "Emerging anti-aging candidate",
      "Supports exercise performance",
      "Neuroprotective and anxiolytic properties",
    ],
    dosageNotes:
      "500–3000 mg daily. Up to 6 g/day shown safe in clinical trials.",
    sideEffects: [
      "Generally very well tolerated",
      "Mild GI discomfort at high doses",
      "Drowsiness at very high doses",
    ],
    tags: ["amino-acid", "longevity", "cardiovascular", "exercise"],
    scores: {
      longevity: 60,
      energy: 40,
      recovery: 40,
      anxiety: 30,
    },
  },
  {
    slug: "tetrahydrocurcumin",
    name: "Tetrahydrocurcumin",
    category: "supplement",
    summary:
      "Tetrahydrocurcumin is a major metabolite of curcumin with superior bioavailability and potentially stronger antioxidant activity in certain assays.",
    quickVerdict:
      "Biologically relevant curcumin metabolite with improved stability. Direct clinical evidence is thinner than for curcumin itself.",
    evidenceScore: 35,
    researchNotes:
      "Preclinical studies suggest equal or superior antioxidant and anti-inflammatory effects to curcumin. Better stability and water solubility. Few dedicated human clinical trials exist; most curcumin trial outcomes may partly reflect tetrahydrocurcumin activity.",
    cautions:
      "Limited direct human safety data as an isolated supplement. Likely shares curcumin's interaction profile.",
    caveats:
      "Most of the evidence base is extrapolated from curcumin research. Dedicated clinical trials for tetrahydrocurcumin are needed.",
    benefits: [
      "Superior antioxidant stability to curcumin",
      "Better water solubility",
      "May be the active metabolite behind curcumin benefits",
    ],
    dosageNotes:
      "No well-established dosage. Supplements typically provide 200–500 mg daily.",
    sideEffects: [
      "Likely similar to curcumin",
      "GI discomfort",
      "Potential drug interactions",
    ],
    tags: ["curcumin-metabolite", "antioxidant", "anti-inflammatory"],
    scores: {
      longevity: 40,
      pain: 35,
      recovery: 30,
    },
  },
  {
    slug: "theacrine",
    name: "Theacrine",
    category: "supplement",
    summary:
      "Theacrine is a purine alkaloid structurally similar to caffeine found in kucha tea, providing energy and focus without habituation or tolerance.",
    quickVerdict:
      "Promising caffeine alternative that does not appear to build tolerance. Energy and mood data from initial human trials are encouraging.",
    evidenceScore: 40,
    researchNotes:
      "Early human trials show improved energy, focus, and mood without tolerance development over 8 weeks. Acts on adenosine and dopamine receptors. TeaCrine is the most studied branded form.",
    cautions:
      "Limited long-term safety data. May have additive effects with caffeine. Not recommended in pregnancy.",
    caveats:
      "Evidence base is small and partially industry-funded. Habituation resistance needs confirmation in larger, longer studies.",
    benefits: [
      "Energy boost without tolerance buildup",
      "Enhances mood and motivation",
      "Synergistic with caffeine",
    ],
    dosageNotes:
      "100–300 mg daily. Often combined with caffeine (100–150 mg) for synergy.",
    sideEffects: [
      "Restlessness at high doses",
      "Mild GI discomfort",
      "Insomnia if taken late",
    ],
    tags: ["energy", "focus", "caffeine-alternative", "nootropic"],
    scores: {
      energy: 55,
      focus: 50,
      mood: 40,
    },
  },
  {
    slug: "theobromine",
    name: "Theobromine",
    category: "supplement",
    summary:
      "Theobromine is a xanthine alkaloid in cacao with mild stimulant, vasodilatory, and bronchodilatory effects, lasting longer but weaker than caffeine.",
    quickVerdict:
      "Mild, smooth stimulant with cardiovascular and mood benefits. Less jittery than caffeine but also less potent.",
    evidenceScore: 45,
    researchNotes:
      "Clinical studies show modest blood pressure reduction and mood improvement. Weaker CNS stimulant than caffeine (~10x less potent) but longer half-life. Effective bronchodilator in preclinical models.",
    cautions:
      "Toxic to dogs and cats. May cause reflux by relaxing the lower esophageal sphincter. Mild diuretic effect.",
    caveats:
      "Often consumed as part of dark chocolate or cacao, making it hard to isolate theobromine-specific effects from other cacao components.",
    benefits: [
      "Mild, sustained stimulation without jitters",
      "Vasodilatory and blood pressure-lowering",
      "Mood-enhancing properties",
    ],
    dosageNotes:
      "100–500 mg daily. A 40 g dark chocolate bar contains roughly 200–300 mg.",
    sideEffects: [
      "GI reflux",
      "Headache at high doses",
      "Mild diuresis",
    ],
    tags: ["stimulant", "cacao", "cardiovascular", "mood"],
    scores: {
      energy: 35,
      mood: 35,
    },
  },
  {
    slug: "tocotrienols",
    name: "Tocotrienols",
    category: "supplement",
    summary:
      "Tocotrienols are the lesser-known form of vitamin E with unique neuroprotective, cardiovascular, and anti-inflammatory properties not shared by tocopherols.",
    quickVerdict:
      "Emerging evidence suggests benefits beyond standard vitamin E, particularly for arterial health and brain protection. Research is growing.",
    evidenceScore: 50,
    researchNotes:
      "Clinical trials show reduction in carotid artery stenosis progression, cholesterol-lowering (via HMG-CoA reductase), and neuroprotective effects. Annatto-derived tocotrienols (delta and gamma) are tocopherol-free and may be most effective.",
    cautions:
      "High doses of alpha-tocopherol can deplete tocotrienols. Take separately from alpha-tocopherol supplements by 6+ hours.",
    caveats:
      "The vitamin E field is complex; not all tocotrienol forms are equivalent. Annatto-derived (delta/gamma) may differ from palm-derived (mixed).",
    benefits: [
      "May slow carotid artery stenosis",
      "Neuroprotective properties distinct from tocopherols",
      "Cholesterol-lowering via HMG-CoA reductase",
      "Potent antioxidant at the cell membrane level",
    ],
    dosageNotes:
      "100–300 mg daily of mixed tocotrienols or delta-tocotrienol. Take with fat-containing meal.",
    sideEffects: [
      "Generally well tolerated",
      "Mild GI discomfort",
      "Potential interaction with anticoagulants",
    ],
    tags: ["vitamin-e", "neuroprotection", "cardiovascular"],
    scores: {
      longevity: 50,
      memory: 35,
    },
  },
  {
    slug: "trans-resveratrol",
    name: "Trans-Resveratrol",
    category: "supplement",
    summary:
      "Trans-resveratrol is the biologically active isomer of resveratrol, preferred in supplementation for its stability and SIRT1-activating capacity.",
    quickVerdict:
      "The form that matters for resveratrol benefits. Same evidence profile as resveratrol but ensures you get the active isomer.",
    evidenceScore: 55,
    researchNotes:
      "Trans-isomer is the form active in SIRT1 assays and clinical trials. Cis-resveratrol has little biological activity. Light and heat convert trans to cis form. Same clinical evidence as resveratrol overall.",
    cautions:
      "Same as resveratrol: CYP interactions, estrogenic activity, anticoagulant potentiation.",
    caveats:
      "Product quality matters; look for trans-resveratrol content specifically. Store away from light. Bioavailability is still poor.",
    benefits: [
      "Biologically active isomer of resveratrol",
      "SIRT1 and AMPK activation",
      "Anti-inflammatory and antioxidant",
    ],
    dosageNotes:
      "150–500 mg daily. Verify trans-resveratrol content on label, not total resveratrol.",
    sideEffects: [
      "GI discomfort",
      "Diarrhea at high doses",
      "Drug interactions",
    ],
    tags: ["resveratrol", "sirtuin", "polyphenol", "longevity"],
    scores: {
      longevity: 50,
      immunity: 30,
    },
  },
  {
    slug: "tributyrin",
    name: "Tributyrin",
    category: "supplement",
    summary:
      "Tributyrin is a triglyceride form of butyric acid that delivers butyrate more efficiently to the lower GI tract compared to sodium butyrate.",
    quickVerdict:
      "Superior delivery form for butyrate supplementation. Clinical evidence is growing and supports gut health applications.",
    evidenceScore: 45,
    researchNotes:
      "Pharmacokinetic studies show tributyrin achieves 3–5x higher plasma butyrate than sodium butyrate. Preclinical data is strong for gut barrier function, inflammation, and HDAC inhibition. Clinical trials are underway.",
    cautions:
      "Generally well tolerated. Limited long-term safety data.",
    caveats:
      "Fewer published clinical trials than sodium butyrate despite theoretical advantages. More research needed.",
    benefits: [
      "Superior butyrate delivery to lower GI tract",
      "Supports gut barrier integrity",
      "HDAC inhibitor with anti-inflammatory effects",
    ],
    dosageNotes:
      "150–1000 mg daily. Often dosed at 300–500 mg twice daily.",
    sideEffects: [
      "Butyric acid odor (milder than sodium butyrate)",
      "GI discomfort",
      "Burping",
    ],
    tags: ["butyrate", "gut-health", "epigenetic"],
    scores: {
      immunity: 45,
      longevity: 40,
    },
  },
  {
    slug: "trigonelline",
    name: "Trigonelline",
    category: "supplement",
    summary:
      "Trigonelline is an alkaloid found in coffee and fenugreek seeds, recently identified as an NAD+ precursor that declines with aging and may support muscle health.",
    quickVerdict:
      "Newly identified NAD+ booster with exciting preclinical data for sarcopenia. Human longevity evidence is preliminary.",
    evidenceScore: 30,
    researchNotes:
      "A 2024 Nature Metabolism study identified trigonelline as declining with age and correlating with sarcopenia. Supplementation restored NAD+ and improved muscle function in aged mice. Human trials are in early stages.",
    cautions:
      "Very early in clinical development. Optimal dosing and safety profile not established.",
    caveats:
      "The NAD+ precursor space is crowded (NMN, NR). Comparative efficacy with established precursors is unknown.",
    benefits: [
      "NAD+ precursor that declines with aging",
      "May support muscle health in aging",
      "Naturally present in coffee and fenugreek",
    ],
    dosageNotes:
      "No established supplemental dose. Coffee provides approximately 40–100 mg per cup.",
    sideEffects: [
      "Insufficient data for comprehensive safety profile",
      "GI discomfort possible",
    ],
    tags: ["nad-precursor", "longevity", "muscle-health", "coffee"],
    scores: {
      longevity: 40,
      muscle: 30,
    },
  },
  {
    slug: "tudca",
    name: "TUDCA",
    category: "supplement",
    summary:
      "Tauroursodeoxycholic acid (TUDCA) is a water-soluble bile acid with potent hepatoprotective, neuroprotective, and ER stress-reducing properties.",
    quickVerdict:
      "Strong evidence for cholestatic liver disease and ER stress reduction. Increasingly popular in longevity and liver-support protocols.",
    evidenceScore: 62,
    researchNotes:
      "Approved in some countries for cholestatic liver disease. Clinical trials support use in primary biliary cholangitis and intrahepatic cholestasis. Preclinical neuroprotective and anti-ER stress data is extensive. Improves insulin sensitivity in obese subjects.",
    cautions:
      "May interact with other bile acid therapies. Could theoretically affect absorption of fat-soluble medications.",
    caveats:
      "Prescription-grade TUDCA differs from OTC supplements in purity and dosing. Neuroprotective human data is limited.",
    benefits: [
      "Potent hepatoprotective bile acid",
      "Reduces ER stress and supports protein folding",
      "Neuroprotective in preclinical models",
      "May improve insulin sensitivity",
    ],
    dosageNotes:
      "250–1500 mg daily. Liver support typically 500–1000 mg. Take with or without food.",
    sideEffects: [
      "Diarrhea at high doses",
      "Mild GI discomfort",
      "Generally well tolerated",
    ],
    tags: ["bile-acid", "liver-health", "er-stress", "neuroprotection"],
    scores: {
      longevity: 55,
      recovery: 40,
    },
  },
  {
    slug: "turkesterone",
    name: "Turkesterone",
    category: "supplement",
    summary:
      "Turkesterone is an ecdysteroid from Ajuga turkestanica, marketed for muscle growth and performance. It is structurally related to insect molting hormones.",
    quickVerdict:
      "Social media hype far exceeds the evidence. No rigorous human RCTs confirm meaningful muscle-building effects.",
    evidenceScore: 18,
    researchNotes:
      "Animal and in-vitro studies suggest protein synthesis activation via pathways distinct from androgens. However, no published peer-reviewed human RCTs demonstrate muscle or strength gains. A 2023 pilot study showed no significant effects on body composition.",
    cautions:
      "Supplement market is plagued by adulteration and mislabeling. Many products contain little actual turkesterone.",
    caveats:
      "Despite massive online popularity, the compound lacks basic human efficacy data. Product authenticity is a major concern.",
    benefits: [
      "Theoretically anabolic via non-hormonal pathways",
      "Does not appear to suppress endogenous testosterone",
      "No banned substance classification",
    ],
    dosageNotes:
      "Marketed doses are 500–1000 mg daily of Ajuga turkestanica extract standardized to 10% turkesterone. Optimal dosing is unknown.",
    sideEffects: [
      "GI discomfort and nausea",
      "Headache",
      "Product adulteration risk",
    ],
    tags: ["ecdysteroid", "muscle-building", "overhyped"],
    scores: {
      muscle: 20,
    },
  },
  {
    slug: "udca",
    name: "UDCA (Ursodeoxycholic Acid)",
    category: "supplement",
    summary:
      "Ursodeoxycholic acid (UDCA) is a hydrophilic bile acid used as first-line treatment for primary biliary cholangitis and studied for broader liver and gallbladder conditions.",
    quickVerdict:
      "Prescription medication with robust evidence for cholestatic liver disease. OTC supplementation blurs the line between supplement and drug.",
    evidenceScore: 82,
    researchNotes:
      "First-line therapy for primary biliary cholangitis (PBC) with strong RCT evidence. Also effective for gallstone dissolution and intrahepatic cholestasis of pregnancy. Hepatoprotective and anti-apoptotic mechanisms well characterized.",
    cautions:
      "Prescription medication in most countries. Can cause gallstone calcification. Not for use with bile acid sequestrants.",
    caveats:
      "Clinical evidence is as a pharmaceutical, not a supplement. OTC availability in some markets does not imply appropriateness for unsupervised use.",
    benefits: [
      "First-line treatment for primary biliary cholangitis",
      "Dissolves cholesterol gallstones",
      "Cytoprotective for hepatocytes",
      "Reduces toxic bile acid accumulation",
    ],
    dosageNotes:
      "13–15 mg/kg daily for PBC. Lower doses (250–500 mg) sometimes used in supplement context. Medical supervision essential.",
    sideEffects: [
      "Diarrhea",
      "Weight gain (rare)",
      "Pruritus initially",
    ],
    tags: ["bile-acid", "liver-health", "prescription-grade"],
    scores: {
      longevity: 55,
    },
  },
  {
    slug: "uridine",
    name: "Uridine",
    category: "supplement",
    summary:
      "Uridine is a pyrimidine nucleoside involved in RNA synthesis, neuronal membrane phospholipid formation, and dopamine signaling, studied for cognitive and mood support.",
    quickVerdict:
      "Interesting nootropic with strong biological rationale. Clinical evidence is limited but growing, especially in combination with DHA and choline.",
    evidenceScore: 40,
    researchNotes:
      "Synergistic with DHA and choline for synaptic membrane synthesis (Kennedy Pathway). Small clinical studies suggest benefits in mood disorders (bipolar depression). Uridine monophosphate (UMP) is the preferred oral form.",
    cautions:
      "Limited safety data for long-term supplementation. Theoretically could promote tumor growth due to nucleotide role in DNA/RNA synthesis.",
    caveats:
      "Most promising when combined with DHA and choline. Isolated uridine supplementation is less studied.",
    benefits: [
      "Supports neuronal membrane phospholipid synthesis",
      "Synergistic with DHA and choline for brain health",
      "May modulate dopamine release",
      "Potential mood-stabilizing effects",
    ],
    dosageNotes:
      "150–500 mg uridine monophosphate (UMP) daily. Often stacked with DHA and choline.",
    sideEffects: [
      "GI discomfort",
      "Headache (uncommon)",
      "Fatigue at high doses",
    ],
    tags: ["nucleoside", "nootropic", "brain-health", "mood"],
    scores: {
      mood: 40,
      memory: 38,
      focus: 35,
    },
  },
  {
    slug: "urolithin-a",
    name: "Urolithin A",
    category: "supplement",
    summary:
      "Urolithin A is a gut-derived metabolite of ellagitannins (from pomegranates) that potently induces mitophagy and has demonstrated muscle health benefits in human trials.",
    quickVerdict:
      "One of the most exciting mitophagy-targeting compounds. Human RCTs confirm mitochondrial biomarker improvements. Mitopure is the lead clinical form.",
    evidenceScore: 62,
    researchNotes:
      "Published RCTs show improved mitochondrial biomarkers and muscle endurance in older adults at 500–1000 mg daily. Mitophagy induction is the primary mechanism. Only ~40% of people can naturally produce urolithin A from dietary ellagitannins.",
    cautions:
      "Generally well tolerated in trials up to 4 months. Long-term safety data is limited.",
    caveats:
      "Direct supplementation bypasses the need for gut microbiome conversion. Premium priced. Long-term outcomes (healthspan, lifespan) remain to be demonstrated.",
    benefits: [
      "Potent mitophagy inducer",
      "Improves mitochondrial biomarkers in human trials",
      "Enhances muscle endurance in older adults",
      "Bypasses variable gut microbiome conversion",
    ],
    dosageNotes:
      "500–1000 mg daily. Mitopure (Timeline Nutrition) is the most-studied form.",
    sideEffects: [
      "Mild GI discomfort",
      "Headache (rare)",
      "Generally well tolerated",
    ],
    tags: ["mitophagy", "longevity", "mitochondria", "muscle-health"],
    scores: {
      longevity: 65,
      energy: 45,
      muscle: 40,
      recovery: 40,
    },
  },
  {
    slug: "vanadium",
    name: "Vanadium",
    category: "supplement",
    summary:
      "Vanadium is an ultra-trace mineral that mimics insulin signaling and has been studied for blood glucose management, primarily in animal models.",
    quickVerdict:
      "Insulin-mimetic properties are well-documented in vitro and in animals, but human evidence is limited and toxicity concerns are real.",
    evidenceScore: 28,
    researchNotes:
      "Animal studies show robust insulin-mimetic effects. A few small human trials of vanadyl sulfate (100–300 mg/day) showed modest glucose improvements in type 2 diabetes. Narrow therapeutic index and potential toxicity limit clinical utility.",
    cautions:
      "Potential kidney and liver toxicity. Not an essential nutrient in humans at supplemental doses. May accumulate in tissues.",
    caveats:
      "Therapeutic doses are close to toxic doses. Not recommended for unsupervised supplementation. Better glucose-management options exist.",
    benefits: [
      "Insulin-mimetic properties",
      "May improve insulin sensitivity",
      "Research interest in diabetes management",
    ],
    dosageNotes:
      "Upper limit not established. Studies used 25–100 mg vanadyl sulfate daily. Typical supplement doses are 10–30 mg.",
    sideEffects: [
      "GI distress (common)",
      "Green tongue discoloration",
      "Potential renal and hepatic toxicity",
    ],
    tags: ["trace-mineral", "insulin-mimetic", "blood-sugar"],
    scores: {
      "weight-loss": 20,
    },
  },
  {
    slug: "vitamin-b-complex",
    name: "Vitamin B Complex",
    category: "supplement",
    summary:
      "A comprehensive formula providing all eight B vitamins (B1, B2, B3, B5, B6, B7, B9, B12) essential for energy metabolism, nervous system function, and methylation.",
    quickVerdict:
      "Well-established essential nutrients. Supplementation is beneficial for deficiency prevention and populations with increased needs.",
    evidenceScore: 78,
    researchNotes:
      "Individual B vitamins have extensive evidence bases. B-complex supplementation shown to support energy metabolism, reduce homocysteine, and improve mood in stressed populations. Particularly important for vegans, elderly, and those on certain medications.",
    cautions:
      "High-dose B6 can cause peripheral neuropathy. Excess folic acid may mask B12 deficiency. Niacin flushing at high doses.",
    caveats:
      "Quality varies enormously. Active (methylated) forms preferred for B9 (methylfolate) and B12 (methylcobalamin). Many people get adequate B vitamins from diet.",
    benefits: [
      "Essential for cellular energy production",
      "Supports nervous system function",
      "Required for methylation and homocysteine metabolism",
      "May improve energy and mood in deficient individuals",
    ],
    dosageNotes:
      "Doses vary by individual B vitamin. Most B-complex supplements provide 100–500% of daily values. Active forms preferred.",
    sideEffects: [
      "Bright yellow urine (riboflavin; harmless)",
      "Niacin flush",
      "GI discomfort",
    ],
    tags: ["b-vitamins", "essential", "energy", "methylation"],
    scores: {
      energy: 65,
      mood: 50,
      focus: 45,
      stress: 40,
    },
  },
  {
    slug: "vitamin-b1",
    name: "Vitamin B1 (Thiamine)",
    category: "supplement",
    summary:
      "Thiamine is an essential B vitamin required for glucose metabolism, nerve function, and the production of ATP via the pyruvate dehydrogenase complex.",
    quickVerdict:
      "Deficiency causes severe disease (beriberi, Wernicke's). Supplementation is critical in at-risk populations. Benefits beyond deficiency correction are limited.",
    evidenceScore: 72,
    researchNotes:
      "Essential for carbohydrate metabolism. Deficiency is common in alcoholism, bariatric surgery patients, and some diabetics. High-dose thiamine (benfotiamine) studied for diabetic neuropathy and nephropathy with mixed results.",
    cautions:
      "Very safe even at high doses (water-soluble). IV thiamine can rarely cause anaphylaxis. No known oral toxicity.",
    caveats:
      "Benfotiamine (fat-soluble derivative) has better tissue penetration for neuropathy applications. Standard thiamine is adequate for basic needs.",
    benefits: [
      "Essential for glucose and energy metabolism",
      "Critical for nervous system function",
      "Prevents and treats beriberi and Wernicke-Korsakoff",
    ],
    dosageNotes:
      "RDA is 1.1–1.2 mg. Therapeutic doses 50–300 mg. Benfotiamine 150–600 mg for neuropathy.",
    sideEffects: [
      "Essentially non-toxic orally",
      "Rare allergic reactions with IV administration",
    ],
    tags: ["b-vitamin", "essential", "energy-metabolism"],
    scores: {
      energy: 50,
    },
  },
  {
    slug: "vitamin-b12",
    name: "Vitamin B12 (Cobalamin)",
    category: "supplement",
    summary:
      "Cobalamin is an essential vitamin required for DNA synthesis, red blood cell formation, and myelin maintenance, with deficiency common in vegans and older adults.",
    quickVerdict:
      "Supplementation is essential for vegans and highly beneficial for older adults with declining absorption. Methylcobalamin and adenosylcobalamin are the active forms.",
    evidenceScore: 82,
    researchNotes:
      "Deficiency causes megaloblastic anemia, neuropathy, and cognitive impairment. Prevalence increases with age due to reduced intrinsic factor. Sublingual or injectable forms bypass absorption issues. Well-studied for homocysteine reduction with folate.",
    cautions:
      "Very safe. Cyanocobalamin contains trace cyanide but is clinically insignificant at normal doses. Check for B12 deficiency before high-dose folate.",
    caveats:
      "Serum B12 is a poor marker of tissue status. Methylmalonic acid and homocysteine are better functional markers.",
    benefits: [
      "Essential for red blood cell formation",
      "Required for nervous system myelination",
      "Supports DNA synthesis and methylation",
      "Reduces homocysteine with folate",
    ],
    dosageNotes:
      "RDA is 2.4 mcg. Supplemental doses of 500–2000 mcg for deficiency correction. Sublingual or injectable for malabsorption.",
    sideEffects: [
      "Essentially non-toxic",
      "Acne-like eruptions (rare, high-dose)",
    ],
    tags: ["b-vitamin", "essential", "vegan-critical", "nerve-health"],
    scores: {
      energy: 60,
      mood: 45,
      memory: 40,
    },
  },
  {
    slug: "vitamin-b2",
    name: "Vitamin B2 (Riboflavin)",
    category: "supplement",
    summary:
      "Riboflavin is an essential B vitamin that serves as a precursor to FAD and FMN, coenzymes critical for energy production, antioxidant recycling, and drug metabolism.",
    quickVerdict:
      "Evidence-based for migraine prevention at 400 mg daily. Otherwise mainly relevant for deficiency correction.",
    evidenceScore: 65,
    researchNotes:
      "Multiple RCTs support 400 mg riboflavin for migraine prophylaxis. Essential for glutathione recycling and mitochondrial electron transport. Deficiency is common globally and in older adults.",
    cautions:
      "Very safe. High doses cause harmless bright yellow urine (flavinuria). No known toxicity.",
    caveats:
      "Absorption plateaus around 27 mg per single dose. For migraine, high-dose effects may involve mechanisms beyond simple nutrient repletion.",
    benefits: [
      "Clinically proven migraine prophylaxis at 400 mg",
      "Essential for FAD/FMN-dependent enzymes",
      "Supports glutathione recycling and antioxidant defense",
    ],
    dosageNotes:
      "RDA is 1.1–1.3 mg. Migraine prophylaxis: 400 mg daily. Split doses improve absorption.",
    sideEffects: [
      "Bright yellow urine (harmless)",
      "Diarrhea at very high doses",
    ],
    tags: ["b-vitamin", "migraine", "essential", "antioxidant"],
    scores: {
      pain: 50,
      energy: 40,
    },
  },
  {
    slug: "vitamin-b3",
    name: "Vitamin B3 (Niacin)",
    category: "supplement",
    summary:
      "Niacin is an essential B vitamin and NAD+ precursor available in multiple forms (nicotinic acid, niacinamide, NR, NMN), each with distinct clinical profiles.",
    quickVerdict:
      "Nicotinic acid is proven for lipid modulation. Niacinamide supports skin and joints. NR and NMN are NAD+ boosters for longevity research.",
    evidenceScore: 75,
    researchNotes:
      "Nicotinic acid robustly raises HDL and lowers triglycerides but AIM-HIGH and HPS2-THRIVE trials questioned cardiovascular mortality benefit. Niacinamide studied for osteoarthritis and skin. NAD+ precursor forms (NR, NMN) are rapidly advancing.",
    cautions:
      "Nicotinic acid causes flushing and can elevate liver enzymes and blood glucose. Extended-release forms reduce flushing but increase hepatotoxicity risk.",
    caveats:
      "Different forms have very different profiles. Nicotinic acid, niacinamide, NR, and NMN should not be considered interchangeable.",
    benefits: [
      "Potent HDL-raising and triglyceride-lowering (nicotinic acid)",
      "NAD+ precursor supporting cellular energy",
      "Niacinamide benefits for skin and joints",
    ],
    dosageNotes:
      "RDA is 14–16 mg NE. Lipid doses: 1–3 g nicotinic acid. Niacinamide: 500–1500 mg. NR/NMN: see specific entries.",
    sideEffects: [
      "Flushing (nicotinic acid)",
      "Liver enzyme elevation at high doses",
      "GI discomfort",
      "Blood glucose elevation",
    ],
    tags: ["b-vitamin", "nad-precursor", "lipids", "essential"],
    scores: {
      longevity: 55,
      energy: 50,
    },
  },
  {
    slug: "vitamin-b5",
    name: "Vitamin B5 (Pantothenic Acid)",
    category: "supplement",
    summary:
      "Pantothenic acid is an essential B vitamin and component of coenzyme A, required for fatty acid synthesis, energy production, and steroid hormone synthesis.",
    quickVerdict:
      "Deficiency is extremely rare due to widespread food occurrence. Supplementation beyond basic needs has limited evidence.",
    evidenceScore: 45,
    researchNotes:
      "As part of CoA, involved in hundreds of metabolic reactions. Pantethine (derivative) has moderate evidence for cholesterol reduction. High-dose pantothenic acid historically used for acne with limited trial support.",
    cautions:
      "Very safe. No established upper limit. Pantethine may cause GI issues.",
    caveats:
      "Deficiency is so rare it's called the universal vitamin. Most benefit claims are theoretical rather than clinically demonstrated.",
    benefits: [
      "Essential component of coenzyme A",
      "Pantethine form may lower cholesterol",
      "Supports adrenal hormone production",
    ],
    dosageNotes:
      "AI is 5 mg. Therapeutic pantethine doses: 600–900 mg daily in divided doses.",
    sideEffects: [
      "Diarrhea at high doses",
      "Generally very safe",
    ],
    tags: ["b-vitamin", "coenzyme-a", "essential", "metabolism"],
    scores: {
      energy: 35,
    },
  },
  {
    slug: "vitamin-b6",
    name: "Vitamin B6 (Pyridoxine)",
    category: "supplement",
    summary:
      "Pyridoxine is the most common supplemental form of vitamin B6, converted in the liver to the active coenzyme P5P for neurotransmitter synthesis and amino acid metabolism.",
    quickVerdict:
      "Essential with broad metabolic roles. Effective for morning sickness and PMS. Chronic high doses carry neuropathy risk.",
    evidenceScore: 70,
    researchNotes:
      "Well-established for nausea of pregnancy, carpal tunnel (debated), PMS symptoms, and homocysteine lowering. Chronic intake above 100 mg/day can cause sensory neuropathy. P5P form may be safer at high doses.",
    cautions:
      "Peripheral neuropathy reported at chronic doses above 100–200 mg/day. Symptoms include numbness and tingling. Usually reversible on discontinuation.",
    caveats:
      "P5P is the active form and may be preferred for those needing higher doses or with impaired liver conversion.",
    benefits: [
      "Supports over 100 enzymatic reactions",
      "Effective for pregnancy-related nausea",
      "Essential for neurotransmitter synthesis",
      "Reduces homocysteine levels",
    ],
    dosageNotes:
      "RDA is 1.3–2.0 mg. Therapeutic doses up to 50–100 mg. Do not exceed 100 mg long-term without supervision.",
    sideEffects: [
      "Peripheral neuropathy at chronic high doses",
      "Photosensitivity",
      "GI discomfort",
    ],
    tags: ["b-vitamin", "essential", "neurotransmitter", "mood"],
    scores: {
      mood: 50,
      energy: 45,
      focus: 35,
    },
  },
  {
    slug: "vitamin-b8",
    name: "Vitamin B8 (Inositol)",
    category: "supplement",
    summary:
      "Inositol (myo-inositol) is a carbocyclic sugar involved in insulin signaling and serotonin receptor function, with strong evidence for PCOS, anxiety, and panic disorder.",
    quickVerdict:
      "Robust evidence for PCOS and panic disorder. One of the better-supported supplements for anxiety. High doses required for effect.",
    evidenceScore: 68,
    researchNotes:
      "Multiple RCTs support myo-inositol for PCOS (ovulation, insulin sensitivity, androgen levels). Meta-analyses confirm efficacy comparable to SSRIs for panic disorder. D-chiro-inositol also relevant for PCOS at lower doses.",
    cautions:
      "High doses (12–18 g) can cause GI side effects. Myo:D-chiro ratio matters for PCOS (typically 40:1).",
    caveats:
      "Not technically a vitamin despite the B8 designation. Effective doses for anxiety (12–18 g) are much higher than for PCOS (2–4 g).",
    benefits: [
      "Improves insulin sensitivity in PCOS",
      "Reduces anxiety and panic attack frequency",
      "Supports ovulation and hormonal balance",
      "Second-messenger role in serotonin signaling",
    ],
    dosageNotes:
      "PCOS: 2000–4000 mg myo-inositol daily. Anxiety/panic: 12,000–18,000 mg daily in divided doses.",
    sideEffects: [
      "GI discomfort at high doses",
      "Nausea",
      "Flatulence",
    ],
    tags: ["pcos", "anxiety", "insulin-signaling", "mood"],
    scores: {
      anxiety: 65,
      mood: 55,
      stress: 45,
    },
  },
  {
    slug: "vitamin-b9",
    name: "Vitamin B9 (Folate)",
    category: "supplement",
    summary:
      "Folate is an essential B vitamin required for DNA synthesis, methylation, and neural tube development. Methylfolate (5-MTHF) is the biologically active form.",
    quickVerdict:
      "Critical for pregnancy and methylation. Methylfolate preferred over folic acid for those with MTHFR polymorphisms.",
    evidenceScore: 85,
    researchNotes:
      "Unequivocal evidence for neural tube defect prevention. Essential for DNA synthesis and one-carbon metabolism. MTHFR C677T polymorphism affects folic acid conversion; 5-MTHF bypasses this. Excessive folic acid may mask B12 deficiency.",
    cautions:
      "High-dose folic acid (>1 mg) may mask B12 deficiency. Potential concern about unmetabolized folic acid and cancer risk at high chronic doses.",
    caveats:
      "5-MTHF (methylfolate) is preferred for supplementation, especially for MTHFR carriers. Folinic acid is another active option.",
    benefits: [
      "Prevents neural tube defects in pregnancy",
      "Essential for DNA synthesis and repair",
      "Supports methylation and homocysteine metabolism",
      "Critical for red blood cell production",
    ],
    dosageNotes:
      "RDA is 400 mcg DFE (600 mcg in pregnancy). Methylfolate 400–1000 mcg for general supplementation.",
    sideEffects: [
      "May mask B12 deficiency symptoms (folic acid form)",
      "GI discomfort at high doses",
      "Insomnia (methylfolate, rare)",
    ],
    tags: ["b-vitamin", "essential", "pregnancy", "methylation"],
    scores: {
      mood: 45,
      longevity: 50,
      energy: 40,
    },
  },
  {
    slug: "vitamin-c",
    name: "Vitamin C",
    category: "supplement",
    summary:
      "Vitamin C (ascorbic acid) is a water-soluble essential antioxidant required for collagen synthesis, immune function, and iron absorption, and is one of the most widely studied nutrients.",
    quickVerdict:
      "Strong evidence for immune support and deficiency prevention. Megadose claims are mostly unsupported. Regular intake may modestly reduce cold duration.",
    evidenceScore: 82,
    researchNotes:
      "Cochrane reviews show regular supplementation reduces cold duration by 8% in adults. Essential for collagen synthesis, carnitine production, and neurotransmitter synthesis. Megadose IV vitamin C studied in sepsis and cancer with mixed results.",
    cautions:
      "High doses (>2 g/day) increase kidney stone risk in susceptible individuals. Osmotic diarrhea at high oral doses. May interfere with certain lab tests.",
    caveats:
      "Plasma saturation occurs around 200 mg/day. Doses above 400 mg/day provide diminishing absorption returns.",
    benefits: [
      "Essential antioxidant and collagen cofactor",
      "Modestly reduces cold duration with regular use",
      "Enhances non-heme iron absorption",
      "Supports immune cell function",
    ],
    dosageNotes:
      "RDA is 75–90 mg. Common supplemental doses: 250–1000 mg daily. Upper limit is 2000 mg/day.",
    sideEffects: [
      "Osmotic diarrhea at high doses",
      "Kidney stones in susceptible individuals",
      "GI discomfort",
    ],
    tags: ["essential", "antioxidant", "immunity", "collagen"],
    scores: {
      immunity: 65,
      recovery: 45,
      longevity: 45,
    },
  },
  {
    slug: "vitamin-d3",
    name: "Vitamin D3 (Cholecalciferol)",
    category: "supplement",
    summary:
      "Vitamin D3 is the most effective supplemental form of vitamin D, essential for calcium absorption, bone health, immune modulation, and increasingly linked to reduced mortality.",
    quickVerdict:
      "One of the most evidence-based supplements overall. Deficiency is extremely common. Regular supplementation reduces all-cause mortality in meta-analyses.",
    evidenceScore: 90,
    researchNotes:
      "Large meta-analyses (VITAL, etc.) confirm fracture reduction, reduced respiratory infections, and modest all-cause mortality reduction. Deficiency associated with depression, autoimmunity, and cancer risk. D3 is 2–3x more effective than D2 at raising serum levels.",
    cautions:
      "Toxicity possible at chronic intake above 10,000 IU/day (hypercalcemia). Monitor 25(OH)D levels. K2 co-supplementation recommended at high doses.",
    caveats:
      "Optimal serum level debated (30–60 ng/mL commonly recommended). Individual response varies with body weight, skin color, and sun exposure.",
    benefits: [
      "Essential for calcium absorption and bone health",
      "Modulates innate and adaptive immune function",
      "Meta-analyses show reduced all-cause mortality",
      "May reduce risk of respiratory infections",
    ],
    dosageNotes:
      "1000–5000 IU daily for most adults. Dose based on serum 25(OH)D levels. Take with fat-containing meal.",
    sideEffects: [
      "Hypercalcemia at chronic high doses",
      "Nausea and vomiting (toxicity)",
      "Kidney stones with excess calcium",
    ],
    tags: ["essential", "bone-health", "immunity", "mortality"],
    scores: {
      immunity: 75,
      longevity: 70,
      mood: 45,
      muscle: 35,
    },
  },
  {
    slug: "vitamin-e",
    name: "Vitamin E",
    category: "supplement",
    summary:
      "Vitamin E is a group of fat-soluble antioxidants (tocopherols and tocotrienols) that protect cell membranes from lipid peroxidation.",
    quickVerdict:
      "Essential at dietary levels. High-dose alpha-tocopherol supplementation has been associated with increased mortality in meta-analyses and is no longer recommended.",
    evidenceScore: 65,
    researchNotes:
      "Early promise from observational studies was not confirmed in large RCTs (HOPE, SELECT). Meta-analyses of high-dose alpha-tocopherol (>400 IU) show potential increased all-cause mortality. Mixed tocopherols and tocotrienols may be safer and more beneficial.",
    cautions:
      "High-dose alpha-tocopherol may increase hemorrhagic stroke and prostate cancer risk (SELECT). Avoid above 400 IU/day. Interacts with anticoagulants.",
    caveats:
      "Alpha-tocopherol alone may deplete gamma-tocopherol. Mixed vitamin E or tocotrienol forms are likely preferable.",
    benefits: [
      "Essential antioxidant protecting cell membranes",
      "Prevents lipid peroxidation",
      "Supports immune function at moderate doses",
    ],
    dosageNotes:
      "RDA is 15 mg (22 IU). Do not exceed 400 IU/day of alpha-tocopherol. Mixed tocopherols preferred.",
    sideEffects: [
      "Increased bleeding risk",
      "Potential increased mortality at high doses",
      "GI discomfort",
      "Fatigue",
    ],
    tags: ["antioxidant", "essential", "fat-soluble", "caution-high-dose"],
    scores: {
      longevity: 40,
      immunity: 40,
    },
  },
  {
    slug: "vitamin-k",
    name: "Vitamin K (MK-7)",
    category: "supplement",
    summary:
      "Vitamin K2 (menaquinone-7) is the preferred supplemental form for bone and cardiovascular health, activating osteocalcin and matrix Gla protein to direct calcium appropriately.",
    quickVerdict:
      "Strong rationale and growing evidence for bone density and arterial calcification prevention. Important companion to vitamin D3 supplementation.",
    evidenceScore: 65,
    researchNotes:
      "MK-7 has the longest half-life among K2 forms (~72 hours). Clinical trials show improved bone mineral density and reduced fracture risk in some populations. Observational data links K2 intake to reduced cardiovascular calcification.",
    cautions:
      "Contraindicated with warfarin and vitamin K antagonist anticoagulants. DOACs (rivaroxaban, apixaban) are less affected.",
    caveats:
      "Cardiovascular calcification data is mostly observational. Large RCTs are ongoing. K1 and K2 have different primary functions.",
    benefits: [
      "Activates osteocalcin for bone mineralization",
      "Activates matrix Gla protein to prevent vascular calcification",
      "Long half-life allows once-daily dosing",
      "Synergistic with vitamin D3",
    ],
    dosageNotes:
      "100–200 mcg MK-7 daily. Higher doses (up to 360 mcg) used in some bone density studies. Take with fat-containing meal.",
    sideEffects: [
      "Very well tolerated",
      "No known toxicity",
      "Warfarin interaction is the primary concern",
    ],
    tags: ["vitamin-k2", "bone-health", "cardiovascular", "calcium"],
    scores: {
      longevity: 60,
    },
  },
  {
    slug: "whey-protein-isolate",
    name: "Whey Protein Isolate",
    category: "supplement",
    summary:
      "Whey protein isolate is a highly filtered form of whey with 90%+ protein content, minimal lactose and fat, and the highest leucine content among common proteins.",
    quickVerdict:
      "Gold-standard protein supplement for muscle protein synthesis. Robust evidence for muscle building, recovery, and satiety.",
    evidenceScore: 88,
    researchNotes:
      "Hundreds of studies confirm superior muscle protein synthesis stimulation versus other protein sources due to high leucine content and rapid absorption. Meta-analyses confirm benefits for lean mass, strength, and post-exercise recovery.",
    cautions:
      "Dairy-derived; avoid in milk protein allergy. Lactose content is minimal in isolate but not zero. Kidney concerns at very high intakes are overstated in healthy individuals.",
    caveats:
      "Isolate is preferred over concentrate for lactose intolerance and lower calorie goals. Plant proteins can be equally effective when leucine-matched.",
    benefits: [
      "Maximally stimulates muscle protein synthesis",
      "Highest leucine content among common proteins",
      "Supports lean mass gain and strength",
      "Promotes satiety and weight management",
    ],
    dosageNotes:
      "20–40 g per serving, 1–3 servings daily based on total protein needs. 2.4 g leucine per ~25 g serving.",
    sideEffects: [
      "Bloating and gas in lactose-sensitive individuals",
      "Acne exacerbation (anecdotal)",
      "GI discomfort at high single doses",
    ],
    tags: ["protein", "muscle", "recovery", "leucine"],
    scores: {
      muscle: 85,
      recovery: 70,
      "weight-loss": 50,
    },
  },
  {
    slug: "wogonin",
    name: "Wogonin",
    category: "supplement",
    summary:
      "Wogonin is a flavone from Scutellaria baicalensis (Chinese skullcap) with anxiolytic, anti-inflammatory, and neuroprotective properties studied primarily in preclinical models.",
    quickVerdict:
      "Interesting GABAergic and anti-inflammatory preclinical data. Very limited human evidence for isolated wogonin supplementation.",
    evidenceScore: 22,
    researchNotes:
      "In-vitro and animal studies show GABAergic anxiolytic activity, COX-2 inhibition, and neuroprotection. Most human data uses whole Scutellaria baicalensis extract. Isolated wogonin supplementation is not well studied in humans.",
    cautions:
      "Limited safety data in isolation. Scutellaria species have been associated with liver injury in rare cases.",
    caveats:
      "Benefits are primarily extrapolated from baicalensis extract studies and preclinical wogonin research.",
    benefits: [
      "GABAergic anxiolytic activity in preclinical models",
      "Anti-inflammatory via COX-2 and LOX inhibition",
      "Neuroprotective properties under investigation",
    ],
    dosageNotes:
      "No established human dosage for isolated wogonin. Scutellaria baicalensis extracts typically dosed at 250–500 mg.",
    sideEffects: [
      "Potential hepatotoxicity (rare, from whole plant)",
      "Drowsiness",
      "Insufficient human safety data",
    ],
    tags: ["flavone", "anxiolytic", "skullcap", "research-stage"],
    scores: {
      anxiety: 25,
      stress: 20,
    },
  },
  {
    slug: "xanthohumol",
    name: "Xanthohumol",
    category: "supplement",
    summary:
      "Xanthohumol is a prenylated chalcone from hops with broad preclinical activity including anti-cancer, anti-inflammatory, and metabolic syndrome modulation.",
    quickVerdict:
      "Promising preclinical multi-target compound. Human evidence is emerging but limited to small trials.",
    evidenceScore: 30,
    researchNotes:
      "Preclinical studies demonstrate anti-proliferative, anti-angiogenic, and lipid-lowering effects. A phase I human trial confirmed safety and showed improved metabolic markers. Larger efficacy trials are needed.",
    cautions:
      "Estrogenic metabolites (8-prenylnaringenin) may be produced. Use with caution in hormone-sensitive conditions.",
    caveats:
      "Beer is a very poor source (concentrations are too low). Supplemental doses are needed for bioactivity.",
    benefits: [
      "Broad-spectrum anti-inflammatory activity",
      "Preclinical anti-cancer properties",
      "May improve metabolic syndrome markers",
    ],
    dosageNotes:
      "12–24 mg daily in human studies. Derived from hops extract.",
    sideEffects: [
      "GI discomfort",
      "Potential estrogenic metabolite production",
      "Limited long-term data",
    ],
    tags: ["hops", "polyphenol", "metabolic", "research-stage"],
    scores: {
      longevity: 30,
    },
  },
  {
    slug: "zeaxanthin",
    name: "Zeaxanthin",
    category: "supplement",
    summary:
      "Zeaxanthin is a carotenoid pigment concentrated in the macula of the eye, where it filters blue light and provides antioxidant protection against age-related macular degeneration.",
    quickVerdict:
      "Strong evidence from AREDS2 for slowing macular degeneration progression when combined with lutein. Standard of care for eye health.",
    evidenceScore: 75,
    researchNotes:
      "AREDS2 trial demonstrated that lutein/zeaxanthin (10 mg/2 mg) was as effective as beta-carotene for AMD progression and safer (no lung cancer risk in smokers). Macular pigment optical density is a validated biomarker.",
    cautions:
      "Generally very safe. Carotenemia (yellow skin) at high doses is harmless and reversible.",
    caveats:
      "Almost always studied in combination with lutein. Benefits are primarily for eye health, not systemic antioxidant use.",
    benefits: [
      "Filters harmful blue light in the macula",
      "Reduces AMD progression (AREDS2)",
      "Supports macular pigment optical density",
    ],
    dosageNotes:
      "2 mg daily (AREDS2 dose) combined with 10 mg lutein. Some supplements provide up to 4 mg.",
    sideEffects: [
      "Carotenemia at very high doses (harmless)",
      "Generally very well tolerated",
    ],
    tags: ["eye-health", "carotenoid", "macular", "areds2"],
    scores: {
      longevity: 50,
    },
  },
  {
    slug: "zinc",
    name: "Zinc",
    category: "supplement",
    summary:
      "Zinc is an essential trace mineral involved in over 300 enzymatic reactions, critical for immune function, wound healing, protein synthesis, and DNA repair.",
    quickVerdict:
      "One of the most important mineral supplements for immune health. Well-studied for cold duration, wound healing, and testosterone support in deficiency.",
    evidenceScore: 82,
    researchNotes:
      "Meta-analyses confirm zinc lozenges reduce cold duration by 1–2 days. Essential for immune cell function (T-cells, NK cells). Deficiency impairs testosterone, wound healing, and taste. SELECT trial found slight prostate cancer risk increase at 80 mg zinc oxide.",
    cautions:
      "Chronic intake above 40 mg/day can cause copper deficiency. GI upset is common. Intranasal zinc is linked to permanent anosmia.",
    caveats:
      "Different zinc forms vary in elemental zinc content and tolerability. Zinc picolinate and glycinate are better absorbed than zinc oxide.",
    benefits: [
      "Reduces duration of common cold symptoms",
      "Essential for immune cell function",
      "Supports wound healing and skin health",
      "Required for testosterone production",
    ],
    dosageNotes:
      "RDA is 8–11 mg. Supplemental doses typically 15–30 mg elemental zinc. Upper limit is 40 mg/day. Balance with 1–2 mg copper.",
    sideEffects: [
      "Nausea on empty stomach",
      "Copper depletion at chronic high doses",
      "Metallic taste",
      "GI discomfort",
    ],
    tags: ["mineral", "essential", "immunity", "wound-healing"],
    scores: {
      immunity: 75,
      recovery: 50,
      libido: 35,
    },
  },
  {
    slug: "zinc-carnosine",
    name: "Zinc Carnosine",
    category: "supplement",
    summary:
      "Zinc carnosine (ZnC or polaprezinc) is a chelated compound of zinc and L-carnosine with specific affinity for gastric mucosa, used for GI lining repair and ulcer support.",
    quickVerdict:
      "Well-studied in Japan for gastric ulcers and GI mucosal protection. A targeted zinc form for gut health rather than general zinc supplementation.",
    evidenceScore: 58,
    researchNotes:
      "Approved in Japan for gastric ulcers. Clinical trials show enhanced mucosal healing and protection from NSAID-induced GI damage. The zinc-carnosine chelate dissociates slowly at the gastric lining, providing sustained local activity.",
    cautions:
      "Contains zinc; factor into total daily zinc intake to avoid copper depletion. Provides less elemental zinc per dose than other forms.",
    caveats:
      "Primary benefit is GI-specific. Not interchangeable with other zinc forms for general immune support.",
    benefits: [
      "Protects and repairs gastric mucosal lining",
      "May reduce NSAID-induced GI damage",
      "Supports gut barrier integrity",
    ],
    dosageNotes:
      "75–150 mg daily (providing 16–34 mg elemental zinc). Typically taken between meals for gastric effects.",
    sideEffects: [
      "Mild GI discomfort",
      "Constipation (rare)",
      "Factor zinc content into daily total",
    ],
    tags: ["gut-health", "gastric", "zinc", "mucosal"],
    scores: {
      immunity: 45,
      recovery: 40,
    },
  },
  {
    slug: "zinc-picolinate",
    name: "Zinc Picolinate",
    category: "supplement",
    summary:
      "Zinc picolinate is zinc chelated with picolinic acid, providing one of the best-absorbed forms of supplemental zinc for general immune and metabolic support.",
    quickVerdict:
      "Premium-absorbed zinc form. Clinical studies confirm superior absorption over zinc gluconate and zinc citrate.",
    evidenceScore: 72,
    researchNotes:
      "A 1987 study showed significantly greater zinc absorption from picolinate versus citrate and gluconate. Widely recommended by integrative practitioners. Shares the same clinical evidence base as zinc supplementation generally.",
    cautions:
      "Same as general zinc supplementation. Monitor copper levels at chronic doses above 30 mg. Upper limit is 40 mg/day.",
    caveats:
      "Higher absorption means lower doses may suffice. More expensive than zinc gluconate or zinc oxide.",
    benefits: [
      "Superior bioavailability among zinc forms",
      "Supports immune function and wound healing",
      "Well-tolerated chelated form",
    ],
    dosageNotes:
      "15–30 mg elemental zinc daily. Often available in 15 mg, 22 mg, and 30 mg elemental zinc capsules.",
    sideEffects: [
      "Nausea if taken on empty stomach",
      "Copper depletion at high chronic doses",
      "Metallic taste (less common than with other forms)",
    ],
    tags: ["zinc", "mineral", "bioavailable", "immunity"],
    scores: {
      immunity: 75,
      recovery: 50,
      libido: 35,
    },
  },
  {
    slug: "ergocalciferol",
    name: "Ergocalciferol (Vitamin D2)",
    category: "supplement",
    summary:
      "Ergocalciferol (vitamin D2) is the plant-derived form of vitamin D, less effective than D3 at raising and maintaining serum 25(OH)D levels.",
    quickVerdict:
      "Functional but inferior to vitamin D3 for supplementation. Primarily relevant for vegans who avoid D3 (typically lanolin-derived).",
    evidenceScore: 65,
    researchNotes:
      "Head-to-head trials consistently show D3 is 2–3x more effective at raising serum 25(OH)D. D2 has a shorter half-life and lower binding affinity to vitamin D-binding protein. Still used in prescription megadoses (50,000 IU).",
    cautions:
      "Same toxicity potential as D3 at high doses (hypercalcemia). Less efficient dosing means higher risk of under-supplementation.",
    caveats:
      "D3 is preferred unless there are specific reasons to use D2 (vegan preference, prescription availability). Lichen-derived D3 is now available as a vegan alternative.",
    benefits: [
      "Plant-derived vitamin D suitable for vegans",
      "Raises serum 25(OH)D levels (less efficiently than D3)",
      "Available in high-dose prescription forms",
    ],
    dosageNotes:
      "Higher doses needed compared to D3 to achieve equivalent serum levels. Typically 1000–4000 IU daily, or 50,000 IU weekly for deficiency correction.",
    sideEffects: [
      "Hypercalcemia at chronic high doses",
      "GI discomfort",
      "Same toxicity profile as D3",
    ],
    tags: ["vitamin-d", "vegan", "bone-health", "essential"],
    scores: {
      immunity: 60,
      longevity: 55,
      mood: 35,
    },
  },
];
