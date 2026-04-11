import type { SeedCompound } from "../seed-compounds";

export const SUPPLEMENTS_G_O: SeedCompound[] = [
  {
    slug: "gaba",
    name: "GABA",
    category: "supplement",
    summary:
      "Gamma-aminobutyric acid is the primary inhibitory neurotransmitter in the brain. Oral supplements may have limited blood-brain barrier penetration, though some users report calming effects.",
    quickVerdict:
      "Oral GABA has questionable CNS bioavailability; calming effects may be partly peripheral or placebo-mediated.",
    evidenceScore: 32,
    researchNotes:
      "Most evidence for anxiolytic effects comes from small trials. Whether oral GABA meaningfully crosses the blood-brain barrier remains debated. Some studies suggest peripheral GABAergic signaling may contribute to subjective relaxation.",
    cautions:
      "May cause drowsiness. Avoid combining with sedatives or alcohol. Not recommended during pregnancy.",
    caveats:
      "Blood-brain barrier permeability of oral GABA is poorly established. Many positive studies are industry-funded or small.",
    benefits: [
      "May reduce subjective anxiety and stress",
      "Some evidence for improved sleep onset",
      "Generally well-tolerated at typical doses",
    ],
    dosageNotes:
      "Typical doses range from 100-750 mg daily, often taken before bed or during stressful periods.",
    sideEffects: [
      "Drowsiness",
      "Tingling or flushing at higher doses",
      "Mild GI discomfort",
    ],
    tags: ["relaxation", "sleep", "neurotransmitter"],
    scores: { anxiety: 35, sleep: 38, stress: 30, mood: 25 },
  },
  {
    slug: "gamma-tocopherol",
    name: "Gamma-Tocopherol",
    category: "supplement",
    summary:
      "A form of vitamin E found abundantly in nuts and seeds. It has anti-inflammatory and antioxidant properties distinct from alpha-tocopherol.",
    quickVerdict:
      "Emerging evidence suggests anti-inflammatory benefits, but clinical trial data specific to gamma-tocopherol supplementation is limited.",
    evidenceScore: 30,
    researchNotes:
      "Gamma-tocopherol traps reactive nitrogen species more effectively than alpha-tocopherol. Observational data links higher gamma-tocopherol levels with reduced cardiovascular and cancer risk, but interventional trials are scarce.",
    cautions:
      "High-dose alpha-tocopherol supplementation can deplete gamma-tocopherol. May interact with anticoagulants.",
    caveats:
      "Most vitamin E trials used alpha-tocopherol only. Specific gamma-tocopherol supplementation trials are few and small.",
    benefits: [
      "Traps reactive nitrogen species not addressed by alpha-tocopherol",
      "Anti-inflammatory properties in preclinical models",
      "May support cardiovascular health",
    ],
    dosageNotes:
      "No established RDA. Supplemental doses typically range from 50-200 mg daily, often as part of mixed tocopherol formulas.",
    sideEffects: [
      "Generally well-tolerated",
      "Possible increased bleeding risk at high doses",
    ],
    tags: ["antioxidant", "vitamin-e", "anti-inflammatory"],
    scores: { longevity: 30, immunity: 25 },
  },
  {
    slug: "gelatin",
    name: "Gelatin",
    category: "supplement",
    summary:
      "A protein derived from collagen-rich animal tissues. Provides glycine and proline, amino acids important for connective tissue, skin, and joint health.",
    quickVerdict:
      "A whole-food collagen source with reasonable evidence for joint and skin support, though most trials use hydrolyzed collagen peptides rather than plain gelatin.",
    evidenceScore: 45,
    researchNotes:
      "Gelatin shares amino acid composition with hydrolyzed collagen. Studies on collagen peptides show benefits for joint pain and skin elasticity. Gelatin combined with vitamin C before exercise may enhance collagen synthesis.",
    cautions:
      "Not suitable for vegetarians or vegans. Source quality matters for heavy metal contamination.",
    caveats:
      "Most clinical evidence uses hydrolyzed collagen peptides, which have better bioavailability than intact gelatin.",
    benefits: [
      "Provides glycine and proline for connective tissue repair",
      "May support joint health and reduce exercise-related joint pain",
      "Potential skin elasticity improvement",
    ],
    dosageNotes:
      "Typical doses are 10-15 g daily, ideally with vitamin C 30-60 minutes before exercise for collagen synthesis support.",
    sideEffects: [
      "Mild GI bloating",
      "Unpleasant taste for some users",
      "Rare allergic reactions",
    ],
    tags: ["collagen", "joint-health", "protein"],
    scores: { recovery: 45, pain: 35, muscle: 25 },
  },
  {
    slug: "genistein",
    name: "Genistein",
    category: "supplement",
    summary:
      "An isoflavone phytoestrogen found primarily in soy. It has weak estrogenic activity and has been studied for bone health, menopausal symptoms, and cancer prevention.",
    quickVerdict:
      "Moderate evidence for bone density and menopausal symptom relief; cancer prevention data is mixed and context-dependent.",
    evidenceScore: 48,
    researchNotes:
      "Multiple RCTs show genistein can reduce bone loss in postmenopausal women. It modulates estrogen receptors and may have both estrogenic and anti-estrogenic effects depending on tissue type. Epidemiological data from Asian populations suggests protective effects, though supplementation trials are less consistent.",
    cautions:
      "Controversial in estrogen-sensitive cancers. Should be avoided by those on tamoxifen or with ER-positive breast cancer without medical guidance.",
    caveats:
      "Effects are dose- and context-dependent. Equol-producer status affects individual response. Most positive data is from postmenopausal women.",
    benefits: [
      "May preserve bone mineral density in postmenopausal women",
      "Reduces hot flash frequency in some trials",
      "Antioxidant and anti-inflammatory properties",
    ],
    dosageNotes:
      "Typical doses range from 40-80 mg daily of aglycone genistein for bone and menopausal outcomes.",
    sideEffects: [
      "Mild GI symptoms",
      "Theoretical concern for estrogen-sensitive conditions",
      "May affect thyroid function at very high doses",
    ],
    tags: ["isoflavone", "phytoestrogen", "bone-health"],
    scores: { longevity: 40, immunity: 30 },
  },
  {
    slug: "ginsenoside-rg1",
    name: "Ginsenoside Rg1",
    category: "supplement",
    summary:
      "A specific saponin isolated from Panax ginseng with neuroprotective and anti-fatigue properties studied primarily in preclinical models.",
    quickVerdict:
      "Promising preclinical data for neuroprotection and stamina, but human trials with isolated Rg1 are very limited.",
    evidenceScore: 22,
    researchNotes:
      "Animal studies show Rg1 promotes neurogenesis, reduces oxidative stress, and improves endurance. It modulates the HPA axis and may enhance mitochondrial function. However, most human studies use whole ginseng extracts rather than isolated Rg1.",
    cautions:
      "Limited human safety data for isolated Rg1. May interact with anticoagulants and diabetes medications.",
    caveats:
      "Nearly all evidence is preclinical. Bioavailability of oral Rg1 is low without specialized delivery systems.",
    benefits: [
      "Neuroprotective effects in animal models",
      "May reduce fatigue and improve exercise capacity",
      "Preclinical anti-inflammatory activity",
    ],
    dosageNotes:
      "No established human dose for isolated Rg1. Whole ginseng extracts standardized to ginsenosides are more commonly used at 200-400 mg daily.",
    sideEffects: [
      "Insomnia at high doses",
      "Headache",
      "GI discomfort",
    ],
    tags: ["ginsenoside", "neuroprotection", "adaptogenic"],
    scores: { energy: 30, memory: 28, focus: 25, recovery: 22 },
  },
  {
    slug: "ginsenosides",
    name: "Ginsenosides",
    category: "supplement",
    summary:
      "A class of triterpene saponins found in Panax ginseng responsible for most of its adaptogenic, cognitive, and anti-fatigue effects.",
    quickVerdict:
      "Solid evidence for anti-fatigue and modest cognitive benefits from standardized ginseng extracts; individual ginsenosides vary in effect.",
    evidenceScore: 58,
    researchNotes:
      "Systematic reviews support ginseng for reducing fatigue and modestly improving cognitive performance. Ginsenosides modulate the HPA axis, nitric oxide pathways, and inflammatory signaling. Effects depend on the ratio of protopanaxadiol to protopanaxatriol ginsenosides.",
    cautions:
      "May interact with warfarin, diabetes drugs, and MAOIs. Stimulatory effects can worsen insomnia or anxiety in sensitive individuals.",
    caveats:
      "Product standardization varies widely. Effects are modest in most trials and depend on extract type and duration of use.",
    benefits: [
      "Reduces mental and physical fatigue",
      "Modest improvement in cognitive performance",
      "May support immune function during stress",
      "Anti-inflammatory and antioxidant activity",
    ],
    dosageNotes:
      "Standardized extracts typically provide 200-400 mg daily with 4-7% ginsenosides. Cycling (8 weeks on, 2 weeks off) is commonly recommended.",
    sideEffects: [
      "Insomnia",
      "Headache",
      "GI upset",
      "Elevated blood pressure in sensitive individuals",
    ],
    tags: ["adaptogen", "ginseng", "anti-fatigue"],
    scores: { energy: 55, focus: 45, memory: 40, stress: 45, immunity: 35 },
  },
  {
    slug: "gla",
    name: "GLA (Gamma-Linolenic Acid)",
    category: "supplement",
    summary:
      "An omega-6 fatty acid found in borage, evening primrose, and black currant seed oils. Unlike most omega-6 fats, GLA is converted to anti-inflammatory DGLA.",
    quickVerdict:
      "Moderate evidence for skin conditions and inflammatory disorders; effects are modest and require consistent supplementation.",
    evidenceScore: 45,
    researchNotes:
      "GLA is metabolized to DGLA, which competes with arachidonic acid and produces anti-inflammatory eicosanoids. RCTs show benefit for eczema, rheumatoid arthritis symptoms, and diabetic neuropathy, though effect sizes are generally small to moderate.",
    cautions:
      "May increase bleeding risk when combined with anticoagulants. Some borage oil products may contain pyrrolizidine alkaloids.",
    caveats:
      "Response varies by individual delta-6-desaturase activity. Benefits require weeks to months of consistent use. Source quality matters.",
    benefits: [
      "Anti-inflammatory via DGLA production",
      "May improve eczema and skin barrier function",
      "Some evidence for rheumatoid arthritis symptom relief",
    ],
    dosageNotes:
      "Typical GLA doses are 240-480 mg daily from evening primrose oil (providing ~9% GLA) or borage oil (~24% GLA).",
    sideEffects: [
      "Mild GI upset",
      "Soft stools",
      "Headache in some users",
    ],
    tags: ["omega-6", "anti-inflammatory", "skin-health"],
    scores: { pain: 40, immunity: 35, recovery: 30 },
  },
  {
    slug: "glucosamine",
    name: "Glucosamine",
    category: "supplement",
    summary:
      "An amino sugar naturally present in cartilage. Widely used for osteoarthritis, though large trials have shown mixed results compared to placebo.",
    quickVerdict:
      "Once a top-selling joint supplement, but large rigorous trials (GAIT, LEGS) show modest or no benefit over placebo for most osteoarthritis patients.",
    evidenceScore: 52,
    researchNotes:
      "The GAIT trial found glucosamine sulfate no better than placebo for knee OA pain overall, though a subgroup with moderate-to-severe pain showed improvement. European trials using crystalline glucosamine sulfate (Rottapharm) report better outcomes. The discrepancy may relate to formulation, dose, or trial design.",
    cautions:
      "Derived from shellfish in most formulations; alternatives exist for shellfish allergy. May affect blood glucose levels.",
    caveats:
      "Results depend heavily on formulation (sulfate vs. HCl) and manufacturer. Prescription-grade crystalline glucosamine sulfate may differ from OTC products.",
    benefits: [
      "May reduce joint pain in some osteoarthritis patients",
      "Possible cartilage-protective effects with long-term use",
      "Well-tolerated in most individuals",
    ],
    dosageNotes:
      "Standard dose is 1500 mg glucosamine sulfate daily, typically taken as 500 mg three times daily or as a single dose.",
    sideEffects: [
      "Mild GI discomfort",
      "Nausea",
      "Possible allergic reaction in shellfish-sensitive individuals",
    ],
    tags: ["joint-health", "cartilage", "osteoarthritis"],
    scores: { pain: 45, recovery: 35 },
  },
  {
    slug: "glutamine",
    name: "Glutamine",
    category: "supplement",
    summary:
      "The most abundant amino acid in the body, important for gut barrier integrity, immune cell fuel, and muscle recovery. Conditionally essential during illness or intense exercise.",
    quickVerdict:
      "Well-supported for gut health and immune function during physiological stress; evidence for muscle-building in healthy individuals is weak.",
    evidenceScore: 58,
    researchNotes:
      "Strong evidence supports glutamine for maintaining gut barrier function and reducing infection rates in critically ill patients. For athletes, it may reduce upper respiratory infections after prolonged exercise. Muscle-building claims in healthy, well-fed individuals are not well-supported.",
    cautions:
      "Avoid in severe liver disease or hepatic encephalopathy. High doses may affect kidney function in susceptible individuals.",
    caveats:
      "The body produces ample glutamine under normal conditions. Benefits are most apparent during catabolic stress, illness, or very intense training.",
    benefits: [
      "Supports gut barrier integrity and reduces intestinal permeability",
      "May reduce infection risk after intense exercise",
      "Conditionally essential during illness and catabolic states",
    ],
    dosageNotes:
      "General supplementation: 5-10 g daily. For gut health: 10-20 g daily in divided doses. Clinical use may go higher under supervision.",
    sideEffects: [
      "Generally well-tolerated",
      "Mild GI discomfort at very high doses",
      "Constipation in some users",
    ],
    tags: ["amino-acid", "gut-health", "immune-support"],
    scores: { immunity: 55, recovery: 50, muscle: 30 },
  },
  {
    slug: "glutathione",
    name: "Glutathione",
    category: "supplement",
    summary:
      "The body's master antioxidant, a tripeptide critical for detoxification, immune function, and cellular protection. Oral bioavailability has historically been poor, though liposomal and reduced forms may improve absorption.",
    quickVerdict:
      "Essential endogenous antioxidant, but oral supplementation has bioavailability challenges. Liposomal and sublingual forms show more promise than standard oral glutathione.",
    evidenceScore: 42,
    researchNotes:
      "Intravenous glutathione reliably raises tissue levels. Oral reduced glutathione at 1000 mg/day showed some increase in blood levels in a small RCT. Liposomal glutathione appears to have better bioavailability. Raising glutathione via precursors (NAC, glycine, cysteine) may be more effective.",
    cautions:
      "May interact with chemotherapy drugs. IV administration should only be done under medical supervision.",
    caveats:
      "Standard oral glutathione is largely degraded in the GI tract. Liposomal formulations or precursor strategies (NAC, whey protein) may be more practical.",
    benefits: [
      "Master antioxidant protecting cells from oxidative damage",
      "Critical for phase II liver detoxification",
      "Supports immune cell function, particularly lymphocytes",
    ],
    dosageNotes:
      "Oral reduced glutathione: 250-1000 mg daily. Liposomal forms may be effective at lower doses. NAC (600-1800 mg) is an alternative precursor strategy.",
    sideEffects: [
      "Generally well-tolerated",
      "Mild GI discomfort",
      "Bloating at higher doses",
    ],
    tags: ["antioxidant", "detoxification", "immune-support"],
    scores: { longevity: 50, immunity: 45 },
  },
  {
    slug: "glycerol",
    name: "Glycerol",
    category: "supplement",
    summary:
      "A sugar alcohol used as a hyperhydration agent in sports. Glycerol draws water into tissues, expanding plasma volume and potentially improving endurance performance in heat.",
    quickVerdict:
      "Effective for hyperhydration and thermoregulation during prolonged exercise in heat; limited utility outside of endurance sport contexts.",
    evidenceScore: 48,
    researchNotes:
      "Meta-analyses show glycerol hyperhydration can reduce heart rate and core temperature during exercise in the heat, with small improvements in endurance performance. Effects are most pronounced in hot conditions and prolonged exercise lasting over 60 minutes.",
    cautions:
      "Can cause headache, bloating, and nausea. Banned by WADA from 2010-2018 but currently permitted. Not suitable for those with kidney disease.",
    caveats:
      "Benefits are specific to endurance exercise in hot conditions. Negligible benefit for short-duration or thermoneutral exercise. Requires specific loading protocols.",
    benefits: [
      "Expands plasma volume for improved thermoregulation",
      "May improve endurance performance in heat",
      "Reduces cardiovascular strain during prolonged exercise",
    ],
    dosageNotes:
      "Typical loading protocol: 1-1.5 g/kg body weight with 25-30 mL water per gram of glycerol, consumed 60-120 minutes before exercise.",
    sideEffects: [
      "Bloating and GI discomfort",
      "Headache",
      "Nausea",
    ],
    tags: ["hydration", "endurance", "thermoregulation"],
    scores: { energy: 40, recovery: 35 },
  },
  {
    slug: "hmb",
    name: "HMB (Beta-Hydroxy Beta-Methylbutyrate)",
    category: "supplement",
    summary:
      "A metabolite of leucine that reduces muscle protein breakdown. Most beneficial for untrained individuals, older adults, or during caloric restriction.",
    quickVerdict:
      "Good evidence for reducing muscle loss in catabolic states and untrained individuals; minimal additional benefit for well-trained athletes already consuming adequate protein.",
    evidenceScore: 55,
    researchNotes:
      "Meta-analyses support HMB for reducing muscle damage markers and preserving lean mass during caloric restriction or in elderly populations. Benefits in trained athletes are inconsistent and generally small. The free acid form may be better absorbed than calcium HMB.",
    cautions:
      "Generally very safe. Some concern about a 2014 study showing implausibly large effects, which has been questioned methodologically.",
    caveats:
      "Most impressive results are in untrained, elderly, or catabolic populations. Trained athletes consuming adequate leucine/protein see diminished returns.",
    benefits: [
      "Reduces muscle protein breakdown during catabolic states",
      "May preserve lean mass during caloric restriction",
      "Supports recovery in untrained individuals beginning exercise",
    ],
    dosageNotes:
      "Standard dose is 3 g daily, split into 1 g three times daily. Free acid form (HMB-FA) may be taken 30-60 minutes before exercise.",
    sideEffects: [
      "Very well-tolerated",
      "Rare mild GI discomfort",
    ],
    tags: ["muscle-preservation", "recovery", "leucine-metabolite"],
    scores: { muscle: 50, recovery: 50, "weight-loss": 30 },
  },
  {
    slug: "hmg",
    name: "HMG (3-Hydroxy-3-Methylglutaric Acid)",
    category: "supplement",
    summary:
      "An organic acid intermediate in leucine metabolism, upstream of HMB. Sometimes marketed for muscle-building, but with far less evidence than HMB itself.",
    quickVerdict:
      "Very limited human evidence. It is a precursor in the same leucine metabolic pathway as HMB, but direct supplementation data is nearly absent.",
    evidenceScore: 12,
    researchNotes:
      "HMG is an intermediate metabolite between alpha-ketoisocaproate (KIC) and HMB in leucine catabolism. Theoretical rationale for supplementation exists based on the HMB pathway, but dedicated human trials on HMG supplementation are essentially nonexistent.",
    cautions:
      "Very limited safety data. Should not be confused with HMG-CoA (a different molecule relevant to cholesterol synthesis).",
    caveats:
      "Almost no direct clinical evidence. Supplementing HMB directly is far better supported. Marketing claims substantially outpace the science.",
    benefits: [
      "Theoretical metabolic precursor to HMB",
      "Part of the leucine catabolic pathway",
    ],
    dosageNotes:
      "No established dose. HMB (3 g/day) is the better-studied downstream metabolite.",
    sideEffects: [
      "Unknown due to lack of human trials",
      "GI discomfort possible",
    ],
    tags: ["leucine-metabolite", "experimental"],
    scores: { muscle: 15, recovery: 12 },
  },
  {
    slug: "honokiol",
    name: "Honokiol",
    category: "supplement",
    summary:
      "A lignan from Magnolia bark with anxiolytic, anti-inflammatory, and neuroprotective properties demonstrated primarily in preclinical research.",
    quickVerdict:
      "Strong preclinical profile for anxiety and neuroprotection, but human clinical trials are very limited. Often consumed as part of magnolia bark extract.",
    evidenceScore: 30,
    researchNotes:
      "Honokiol modulates GABA-A receptors, inhibits NF-kB signaling, and crosses the blood-brain barrier in animal models. It shows potent anxiolytic effects in rodents without sedation at moderate doses. Human data is mostly from magnolia bark extracts containing both honokiol and magnolol.",
    cautions:
      "May potentiate sedatives and alcohol. Insufficient safety data in pregnancy. May have anticoagulant effects.",
    caveats:
      "Nearly all mechanistic data is from animal and in vitro studies. Human trials are few and use combination magnolia bark extracts rather than isolated honokiol.",
    benefits: [
      "Anxiolytic activity via GABA-A receptor modulation",
      "Anti-inflammatory through NF-kB inhibition",
      "Neuroprotective in preclinical models",
    ],
    dosageNotes:
      "Magnolia bark extract standardized to honokiol/magnolol is typically dosed at 200-400 mg daily. Isolated honokiol doses are not well-established.",
    sideEffects: [
      "Drowsiness at higher doses",
      "Potential GI upset",
      "Dizziness",
    ],
    tags: ["magnolia", "anxiolytic", "neuroprotection"],
    scores: { anxiety: 40, stress: 38, sleep: 35, mood: 30 },
  },
  {
    slug: "humic-acid",
    name: "Humic Acid",
    category: "supplement",
    summary:
      "A complex organic compound derived from decomposed plant matter in soil. Marketed for detoxification and gut health, but human clinical evidence is very sparse.",
    quickVerdict:
      "Largely unsupported by human clinical data. Preclinical studies suggest antiviral and gut-modulating properties, but rigorous trials are needed.",
    evidenceScore: 15,
    researchNotes:
      "In vitro studies show humic substances can bind heavy metals and have antiviral activity against certain enveloped viruses. Some veterinary use for gut health exists. Human clinical trials are extremely limited, and health claims are largely extrapolated from in vitro or animal data.",
    cautions:
      "May contain heavy metals depending on source. Quality control varies dramatically between products. Not recommended during pregnancy.",
    caveats:
      "Virtually no rigorous human clinical trials. Product purity and composition are highly variable. Most claims are based on in vitro or veterinary data.",
    benefits: [
      "May bind heavy metals in vitro",
      "Preclinical antiviral activity against enveloped viruses",
      "Theoretical gut barrier support",
    ],
    dosageNotes:
      "No established dose. Products vary widely; fulvic acid content is often used as a standardization marker.",
    sideEffects: [
      "Potential heavy metal contamination from poor-quality sources",
      "GI discomfort",
      "Diarrhea",
    ],
    tags: ["detoxification", "soil-derived", "experimental"],
    scores: { immunity: 15 },
  },
  {
    slug: "hyaluronic-acid",
    name: "Hyaluronic Acid",
    category: "supplement",
    summary:
      "A glycosaminoglycan that is a major component of skin, joints, and connective tissue. Oral supplementation has shown modest benefits for skin hydration and joint comfort.",
    quickVerdict:
      "Reasonable evidence for skin hydration and mild joint comfort improvement. Oral bioavailability was once questioned but appears sufficient at higher molecular weights.",
    evidenceScore: 50,
    researchNotes:
      "Multiple RCTs demonstrate that oral hyaluronic acid (80-200 mg/day) can improve skin moisture and reduce wrinkles over 6-12 weeks. Joint studies show modest pain reduction in knee osteoarthritis. Labeled studies using isotope-tagged HA confirm oral absorption and tissue distribution.",
    cautions:
      "Theoretical concern about promoting cancer cell migration in those with active malignancy. Generally well-tolerated.",
    caveats:
      "Molecular weight of the supplement affects absorption and distribution. Benefits are modest and require consistent use over weeks.",
    benefits: [
      "Improves skin hydration and elasticity",
      "May reduce joint discomfort in mild osteoarthritis",
      "Supports connective tissue moisture retention",
    ],
    dosageNotes:
      "Oral doses of 80-200 mg daily, typically for at least 8-12 weeks to see benefits. Both low and high molecular weight forms have shown effects.",
    sideEffects: [
      "Generally very well-tolerated",
      "Rare mild GI upset",
    ],
    tags: ["skin-health", "joint-health", "glycosaminoglycan"],
    scores: { pain: 40, recovery: 30, longevity: 30 },
  },
  {
    slug: "hydroxytyrosol",
    name: "Hydroxytyrosol",
    category: "supplement",
    summary:
      "A potent polyphenol antioxidant found in olive oil and olive leaf. It has one of the highest ORAC values of any natural compound and is linked to cardiovascular and neuroprotective benefits.",
    quickVerdict:
      "EFSA-approved health claim for cardiovascular protection from olive oil polyphenols. Isolated supplementation data is growing but still limited compared to dietary olive oil studies.",
    evidenceScore: 52,
    researchNotes:
      "EFSA authorized a health claim that olive oil polyphenols (including hydroxytyrosol) protect LDL from oxidative damage at 5 mg/day. Studies show anti-inflammatory, anti-atherogenic, and neuroprotective effects. Most evidence comes from olive oil consumption rather than isolated supplementation.",
    cautions:
      "May lower blood pressure; caution with antihypertensives. May interact with diabetes medications.",
    caveats:
      "Strongest evidence is for dietary olive oil consumption. Isolated hydroxytyrosol supplements have fewer clinical trials. Bioavailability varies by formulation.",
    benefits: [
      "Protects LDL cholesterol from oxidation (EFSA-approved claim)",
      "Potent antioxidant and anti-inflammatory",
      "May support cardiovascular and brain health",
    ],
    dosageNotes:
      "EFSA recommends at least 5 mg hydroxytyrosol daily from olive oil. Supplements typically provide 5-25 mg daily.",
    sideEffects: [
      "Generally well-tolerated",
      "Mild GI effects at higher doses",
    ],
    tags: ["polyphenol", "olive-oil", "cardiovascular"],
    scores: { longevity: 55, immunity: 35 },
  },
  {
    slug: "hyperforin",
    name: "Hyperforin",
    category: "supplement",
    summary:
      "The primary active compound in St. John's Wort responsible for its antidepressant effects. It inhibits reuptake of serotonin, norepinephrine, dopamine, GABA, and glutamate.",
    quickVerdict:
      "Well-established antidepressant mechanism, but typically consumed as part of St. John's Wort extract. Known for significant drug interactions via CYP3A4 induction.",
    evidenceScore: 60,
    researchNotes:
      "Hyperforin activates TRPC6 channels and broadly inhibits monoamine reuptake. St. John's Wort extracts standardized to hyperforin are effective for mild-to-moderate depression in multiple meta-analyses. However, hyperforin is the main driver of CYP3A4/PXR activation causing serious drug interactions.",
    cautions:
      "Major CYP3A4 inducer; contraindicated with oral contraceptives, HIV antiretrovirals, warfarin, cyclosporine, and many other drugs. May cause photosensitivity.",
    caveats:
      "Inseparable from drug interaction concerns. Low-hyperforin extracts may reduce interaction risk but also reduce efficacy. Not a substitute for professional mental health treatment.",
    benefits: [
      "Broad monoamine reuptake inhibition for antidepressant effects",
      "Effective for mild-to-moderate depression in meta-analyses",
      "Anti-inflammatory properties via NF-kB modulation",
    ],
    dosageNotes:
      "St. John's Wort extracts typically standardized to 3-5% hyperforin, dosed at 300 mg extract three times daily.",
    sideEffects: [
      "Photosensitivity",
      "GI discomfort",
      "Serious drug interactions via CYP3A4 induction",
      "Insomnia or vivid dreams",
    ],
    tags: ["antidepressant", "st-johns-wort", "monoamine"],
    scores: { mood: 62, anxiety: 45, stress: 40 },
  },
  {
    slug: "hypericin",
    name: "Hypericin",
    category: "supplement",
    summary:
      "A naphthodianthrone compound from St. John's Wort. Once thought to be the main antidepressant constituent, it is now known to contribute primarily to photosensitivity and may have antiviral properties.",
    quickVerdict:
      "Less relevant for antidepressant effects than hyperforin, but studied for antiviral and photodynamic therapy applications. Primarily a marker compound in St. John's Wort standardization.",
    evidenceScore: 28,
    researchNotes:
      "Hypericin was initially believed to be the antidepressant component of St. John's Wort, but hyperforin is now considered primary. Hypericin has demonstrated antiviral activity against enveloped viruses in vitro and is being investigated for photodynamic cancer therapy. It is a potent photosensitizer.",
    cautions:
      "Strong photosensitizer; avoid sun exposure at high doses. Same drug interaction concerns as St. John's Wort overall.",
    caveats:
      "Most antidepressant activity now attributed to hyperforin, not hypericin. Antiviral and anticancer applications are experimental.",
    benefits: [
      "Antiviral activity against enveloped viruses in vitro",
      "Potential photodynamic therapy agent for cancer research",
      "Marker compound for St. John's Wort quality control",
    ],
    dosageNotes:
      "Not typically dosed independently. St. John's Wort extracts are often standardized to 0.3% hypericin as a quality marker.",
    sideEffects: [
      "Photosensitivity (primary concern)",
      "Skin rash with sun exposure",
      "GI discomfort",
    ],
    tags: ["st-johns-wort", "photosensitizer", "antiviral"],
    scores: { mood: 25, immunity: 20 },
  },
  {
    slug: "i3c",
    name: "I3C (Indole-3-Carbinol)",
    category: "supplement",
    summary:
      "A compound derived from cruciferous vegetables that modulates estrogen metabolism. Converted in the stomach to DIM and other metabolites that shift estrogen toward less potent forms.",
    quickVerdict:
      "Reasonable evidence for modulating estrogen metabolism; studied for cancer prevention but not yet proven. DIM may be a more consistent choice due to I3C's variable conversion.",
    evidenceScore: 42,
    researchNotes:
      "I3C upregulates CYP1A1 and shifts estrogen metabolism toward 2-hydroxyestrone (less proliferative) over 16-alpha-hydroxyestrone. Clinical studies show changes in urinary estrogen metabolite ratios. Being investigated for cervical dysplasia and breast cancer prevention. Conversion to DIM and other products is pH-dependent and variable.",
    cautions:
      "May interact with medications metabolized by CYP enzymes. Long-term safety at high doses not established. Theoretical concern about tumor promotion at very high doses in some animal models.",
    caveats:
      "Conversion to active metabolites is variable and pH-dependent. DIM supplementation may provide more consistent effects. Cancer prevention data is preliminary.",
    benefits: [
      "Modulates estrogen metabolism toward less potent forms",
      "May support healthy estrogen balance",
      "Under investigation for cervical and breast health",
    ],
    dosageNotes:
      "Typical doses range from 200-400 mg daily. Best taken with food to facilitate gastric acid conversion to DIM.",
    sideEffects: [
      "GI discomfort",
      "Skin rash in some individuals",
      "May alter hormone levels",
    ],
    tags: ["estrogen-metabolism", "cruciferous", "cancer-prevention"],
    scores: { longevity: 35, immunity: 30 },
  },
  {
    slug: "idebenone",
    name: "Idebenone",
    category: "supplement",
    summary:
      "A synthetic analogue of CoQ10 with superior ability to function under low-oxygen conditions. Used as a prescription drug for mitochondrial disorders in some countries.",
    quickVerdict:
      "Approved in Europe for Leber hereditary optic neuropathy. As a general supplement, evidence for cognitive or anti-aging benefits is limited to small or preclinical studies.",
    evidenceScore: 38,
    researchNotes:
      "Idebenone transfers electrons in the mitochondrial chain even under low-oxygen conditions where CoQ10 fails. EU-approved for LHON (Raxone). Small studies suggest cognitive and skin benefits. It does not inhibit Complex I like CoQ10, which may be advantageous in some mitochondrial disorders.",
    cautions:
      "Prescription drug in some jurisdictions. May interact with anticoagulants. Limited long-term safety data as a supplement.",
    caveats:
      "Strongest evidence is for specific mitochondrial diseases, not general supplementation. Cognitive and anti-aging claims are based on limited data.",
    benefits: [
      "Functions as an electron carrier under low-oxygen conditions",
      "EU-approved for Leber hereditary optic neuropathy",
      "Potent antioxidant with better solubility than CoQ10",
    ],
    dosageNotes:
      "Supplement doses typically range from 45-150 mg daily. Prescription doses for LHON are 900 mg daily.",
    sideEffects: [
      "GI discomfort",
      "Insomnia",
      "Mild headache",
    ],
    tags: ["mitochondrial", "coq10-analogue", "antioxidant"],
    scores: { energy: 35, longevity: 38, focus: 28, memory: 25 },
  },
  {
    slug: "immunoglobulins",
    name: "Immunoglobulins",
    category: "supplement",
    summary:
      "Antibody proteins derived from bovine colostrum or serum. Oral immunoglobulins may support gut barrier function and immune defense in the GI tract.",
    quickVerdict:
      "Moderate evidence for GI immune support, particularly in IBS-D and gut barrier dysfunction. Serum-derived bovine immunoglobulins (SBI) have the most clinical data.",
    evidenceScore: 42,
    researchNotes:
      "Serum-derived bovine immunoglobulin/protein isolate (SBI, as EnteraGam) has shown benefit in IBS-diarrhea and HIV-associated enteropathy in clinical trials. Immunoglobulins bind microbial antigens in the gut lumen, reducing immune activation. Colostrum-derived immunoglobulins have additional growth factors.",
    cautions:
      "Derived from bovine sources; not suitable for those with cow milk protein allergy. Quality and immunoglobulin content vary between products.",
    caveats:
      "Most rigorous data is from the medical food EnteraGam rather than general supplements. Colostrum products vary in immunoglobulin concentration.",
    benefits: [
      "Supports gut barrier function and reduces intestinal inflammation",
      "Binds microbial antigens in the GI tract",
      "May reduce diarrhea in IBS and immune-compromised patients",
    ],
    dosageNotes:
      "SBI (EnteraGam): 5 g twice daily as a medical food. Colostrum: 10-20 g daily for immunoglobulin content.",
    sideEffects: [
      "Mild GI bloating",
      "Constipation in some users",
      "Rare allergic reactions in dairy-sensitive individuals",
    ],
    tags: ["immune-support", "gut-health", "bovine-derived"],
    scores: { immunity: 50, recovery: 35 },
  },
  {
    slug: "iodine",
    name: "Iodine",
    category: "supplement",
    summary:
      "An essential trace mineral required for thyroid hormone synthesis. Deficiency causes goiter and hypothyroidism, but excess iodine can also disrupt thyroid function.",
    quickVerdict:
      "Essential for thyroid health with strong evidence for deficiency correction. Supplementation is unnecessary and potentially harmful in iodine-replete populations.",
    evidenceScore: 75,
    researchNotes:
      "Iodine is a core component of T3 and T4 thyroid hormones. WHO estimates 2 billion people are at risk of iodine deficiency globally. Salt iodization has dramatically reduced deficiency-related disorders. Excess iodine can paradoxically cause hypothyroidism or hyperthyroidism, particularly in those with underlying thyroid disease.",
    cautions:
      "Excess iodine can cause or worsen thyroid dysfunction. Those with Hashimoto's thyroiditis may be particularly sensitive. Do not exceed UL of 1100 mcg/day.",
    caveats:
      "Most people in developed countries get adequate iodine from iodized salt and dairy. Supplementation is primarily indicated for documented deficiency, pregnancy, or restricted diets.",
    benefits: [
      "Essential for thyroid hormone synthesis",
      "Critical during pregnancy for fetal brain development",
      "Corrects deficiency-related cognitive and metabolic impairment",
    ],
    dosageNotes:
      "RDA: 150 mcg for adults, 220-290 mcg during pregnancy/lactation. Supplementation beyond RDA is rarely needed in iodine-sufficient regions.",
    sideEffects: [
      "Thyroid dysfunction at excessive doses",
      "Metallic taste",
      "GI irritation",
      "Acne-like skin eruptions",
    ],
    tags: ["essential-mineral", "thyroid", "prenatal"],
    scores: { energy: 45, longevity: 40 },
  },
  {
    slug: "iron",
    name: "Iron",
    category: "supplement",
    summary:
      "An essential mineral required for oxygen transport, energy production, and numerous enzymatic reactions. Deficiency is the most common nutritional deficiency worldwide.",
    quickVerdict:
      "Critical for those with documented deficiency; evidence is overwhelming for treating iron-deficiency anemia. Supplementation without deficiency risks iron overload and oxidative damage.",
    evidenceScore: 85,
    researchNotes:
      "Iron is a component of hemoglobin, myoglobin, and cytochromes. Iron-deficiency anemia affects over 1 billion people globally. Supplementation reliably corrects anemia and associated fatigue, cognitive impairment, and exercise intolerance. Excess iron is pro-oxidant and associated with increased cardiovascular and cancer risk.",
    cautions:
      "Do not supplement without documented deficiency or medical guidance. Iron overload (hemochromatosis) is dangerous. Keep away from children; iron poisoning can be fatal.",
    caveats:
      "Supplementation is only appropriate for documented deficiency. Routine supplementation in iron-replete individuals may be harmful. Ferritin testing should guide supplementation decisions.",
    benefits: [
      "Corrects iron-deficiency anemia and associated fatigue",
      "Restores cognitive function impaired by deficiency",
      "Essential for oxygen transport and energy metabolism",
    ],
    dosageNotes:
      "Deficiency treatment: 65-200 mg elemental iron daily, ideally on empty stomach with vitamin C. Maintenance: based on ferritin levels. Alternate-day dosing may improve absorption.",
    sideEffects: [
      "Constipation and GI discomfort (common)",
      "Nausea",
      "Dark stools",
      "Risk of iron overload with chronic excess",
    ],
    tags: ["essential-mineral", "anemia", "oxygen-transport"],
    scores: { energy: 70, focus: 45, immunity: 40 },
  },
  {
    slug: "iron-bisglycinate",
    name: "Iron Bisglycinate",
    category: "supplement",
    summary:
      "A chelated form of iron bound to two glycine molecules, offering superior absorption and significantly fewer GI side effects compared to ferrous sulfate.",
    quickVerdict:
      "Well-supported as a better-tolerated alternative to standard iron salts. Comparable or superior efficacy for correcting deficiency with fewer side effects.",
    evidenceScore: 68,
    researchNotes:
      "Multiple comparative trials show iron bisglycinate achieves similar or better iron status improvement as ferrous sulfate at lower elemental iron doses, with significantly less GI distress. The chelated form resists interactions with phytates and other absorption inhibitors. Particularly useful in populations with GI sensitivity.",
    cautions:
      "Same general iron supplementation cautions apply. Do not use without documented deficiency.",
    caveats:
      "More expensive than ferrous sulfate. While better tolerated, it is still iron supplementation and requires monitoring.",
    benefits: [
      "Better GI tolerability than ferrous sulfate",
      "Higher bioavailability at lower doses",
      "Less affected by dietary absorption inhibitors",
    ],
    dosageNotes:
      "Typically 20-25 mg elemental iron from bisglycinate can achieve similar effects to 50-65 mg from ferrous sulfate. Dose based on deficiency severity.",
    sideEffects: [
      "Significantly fewer GI effects than ferrous sulfate",
      "Mild constipation possible",
      "Dark stools",
    ],
    tags: ["chelated-iron", "bioavailable", "anemia"],
    scores: { energy: 65, focus: 40, immunity: 35 },
  },
  {
    slug: "kaempferol",
    name: "Kaempferol",
    category: "supplement",
    summary:
      "A flavonoid found in tea, broccoli, kale, and berries with anti-inflammatory, antioxidant, and potential anticancer properties in preclinical research.",
    quickVerdict:
      "Promising preclinical profile but very limited human clinical data for isolated kaempferol supplementation. Dietary intake is associated with health benefits in epidemiological studies.",
    evidenceScore: 22,
    researchNotes:
      "Epidemiological studies associate higher dietary kaempferol intake with reduced cardiovascular and cancer risk. Preclinical studies show anti-inflammatory, antioxidant, and pro-apoptotic activity. However, oral bioavailability is low, and human trials with isolated kaempferol are essentially absent.",
    cautions:
      "Limited safety data for isolated supplementation. May interact with CYP enzymes at high doses.",
    caveats:
      "Nearly all evidence is epidemiological or preclinical. Bioavailability of isolated kaempferol is poor. Benefits from whole foods may involve synergy with other phytochemicals.",
    benefits: [
      "Anti-inflammatory and antioxidant in preclinical models",
      "Epidemiological association with reduced cardiovascular risk",
      "Preclinical anticancer properties",
    ],
    dosageNotes:
      "No established supplemental dose. Dietary intake from food sources averages 5-20 mg daily.",
    sideEffects: [
      "Limited data on isolated supplementation",
      "Generally considered safe from dietary sources",
    ],
    tags: ["flavonoid", "antioxidant", "anti-inflammatory"],
    scores: { longevity: 25, immunity: 22 },
  },
  {
    slug: "l-carnitine",
    name: "L-Carnitine",
    category: "supplement",
    summary:
      "An amino acid derivative essential for transporting long-chain fatty acids into mitochondria for beta-oxidation. The body synthesizes sufficient amounts in healthy individuals, but levels decline with age.",
    quickVerdict:
      "Good evidence for cardiovascular outcomes post-MI and in elderly with carnitine deficiency. Fat-burning claims for healthy young adults are largely unsupported.",
    evidenceScore: 55,
    researchNotes:
      "A meta-analysis of 13 RCTs found L-carnitine reduced all-cause mortality by 27% in acute MI patients. Acetyl-L-carnitine shows benefit for diabetic neuropathy and cognitive decline in elderly. Fat-burning effects in healthy, carnitine-replete individuals are minimal. TMAO production from carnitine metabolism is a theoretical cardiovascular concern.",
    cautions:
      "Gut bacteria convert carnitine to TMAO, which is associated with cardiovascular risk. This may offset benefits in some individuals, particularly red meat consumers.",
    caveats:
      "Benefits are most pronounced in deficient populations (elderly, vegetarians, certain genetic conditions). Healthy omnivores may derive limited additional benefit.",
    benefits: [
      "Facilitates mitochondrial fatty acid oxidation",
      "May reduce mortality post-myocardial infarction",
      "Acetyl-L-carnitine supports cognitive function in elderly",
    ],
    dosageNotes:
      "L-carnitine: 1-3 g daily. Acetyl-L-carnitine: 500-2000 mg daily for cognitive effects. Take with carbohydrates to enhance muscle uptake.",
    sideEffects: [
      "Fishy body odor at high doses",
      "GI discomfort",
      "Nausea",
      "TMAO elevation (theoretical cardiovascular concern)",
    ],
    tags: ["mitochondrial", "fat-metabolism", "cardiovascular"],
    scores: { energy: 45, longevity: 45, recovery: 40, "weight-loss": 25, memory: 35 },
  },
  {
    slug: "lactase",
    name: "Lactase",
    category: "supplement",
    summary:
      "A digestive enzyme that breaks down lactose into glucose and galactose. Taken by lactose-intolerant individuals to prevent symptoms from dairy consumption.",
    quickVerdict:
      "Effective and well-proven for managing lactose intolerance symptoms when taken with dairy products. One of the best-supported digestive enzyme supplements.",
    evidenceScore: 78,
    researchNotes:
      "Multiple well-designed trials confirm that exogenous lactase taken with dairy significantly reduces symptoms of lactose maldigestion including bloating, gas, diarrhea, and cramping. Efficacy depends on dose, timing, and individual severity of lactase deficiency.",
    cautions:
      "Does not treat underlying lactase deficiency. Must be taken with each dairy-containing meal. Ineffective if taken too early or too late relative to dairy consumption.",
    caveats:
      "Only addresses lactose intolerance, not milk protein allergy. Dose needs vary by individual and amount of lactose consumed.",
    benefits: [
      "Reliably reduces lactose intolerance symptoms",
      "Allows dairy consumption without GI distress",
      "Very well-tolerated with no significant side effects",
    ],
    dosageNotes:
      "6000-9000 FCC lactase units taken with the first bite of dairy-containing food. May need to repeat with prolonged meals.",
    sideEffects: [
      "Extremely well-tolerated",
      "Rare allergic reaction to fungal-derived enzyme",
    ],
    tags: ["digestive-enzyme", "lactose-intolerance", "dairy"],
    scores: { recovery: 30 },
  },
  {
    slug: "lactoferrin",
    name: "Lactoferrin",
    category: "supplement",
    summary:
      "An iron-binding glycoprotein found in milk, colostrum, and mucosal secretions with antimicrobial, anti-inflammatory, and immune-modulating properties.",
    quickVerdict:
      "Good evidence for immune support and iron absorption enhancement. Particularly well-studied in infants and for GI infections.",
    evidenceScore: 55,
    researchNotes:
      "Lactoferrin sequesters iron from pathogenic bacteria, disrupts bacterial biofilms, and modulates innate and adaptive immunity. RCTs show benefit for reducing GI infections in infants and improving iron absorption (sometimes better than ferrous sulfate with fewer side effects). Also studied for H. pylori as adjunct therapy.",
    cautions:
      "Derived from bovine milk; not suitable for those with cow milk protein allergy. Quality varies between products.",
    caveats:
      "Most robust evidence is in pediatric and GI infection contexts. General immune-boosting claims in healthy adults are less well-supported.",
    benefits: [
      "Antimicrobial activity by sequestering iron from pathogens",
      "Enhances iron absorption with fewer GI side effects than iron salts",
      "Modulates immune function and reduces GI infections",
    ],
    dosageNotes:
      "Typical doses: 100-400 mg daily for immune support. For iron absorption: 100-200 mg with iron supplements.",
    sideEffects: [
      "Generally very well-tolerated",
      "Mild GI discomfort at high doses",
      "Rare allergic reactions in dairy-sensitive individuals",
    ],
    tags: ["immune-support", "antimicrobial", "iron-absorption"],
    scores: { immunity: 55, recovery: 35 },
  },
  {
    slug: "laminarin",
    name: "Laminarin",
    category: "supplement",
    summary:
      "A beta-glucan polysaccharide from brown seaweed (kelp). Studied for immune modulation, prebiotic effects, and potential anti-tumor properties in preclinical research.",
    quickVerdict:
      "Interesting preclinical immune-modulating and prebiotic properties, but human clinical data is very limited. Better studied in animal nutrition than human supplementation.",
    evidenceScore: 18,
    researchNotes:
      "Laminarin activates innate immune cells via Dectin-1 receptor binding (beta-glucan pathway). It shows prebiotic effects and anti-tumor activity in animal models. Extensively used in animal feed for gut health. Human clinical trials are scarce.",
    cautions:
      "May contain iodine from seaweed source; caution with thyroid conditions. Potential for heavy metal contamination depending on seaweed source.",
    caveats:
      "Most evidence is from animal studies and in vitro work. Human supplementation data is nearly nonexistent. Other beta-glucans (from yeast, mushrooms) have more human evidence.",
    benefits: [
      "Activates innate immunity via beta-glucan receptor",
      "Prebiotic effects supporting gut microbiome",
      "Anti-tumor activity in preclinical models",
    ],
    dosageNotes:
      "No established human dose. Animal studies use varying concentrations of seaweed-derived extracts.",
    sideEffects: [
      "Potential iodine excess from seaweed source",
      "GI bloating",
      "Unknown long-term safety profile",
    ],
    tags: ["beta-glucan", "seaweed", "prebiotic"],
    scores: { immunity: 22 },
  },
  {
    slug: "leucine",
    name: "Leucine",
    category: "supplement",
    summary:
      "A branched-chain amino acid (BCAA) that is the primary dietary activator of mTOR and muscle protein synthesis. The most anabolic of the three BCAAs.",
    quickVerdict:
      "Strong mechanistic evidence as the key mTOR activator. Supplementation may benefit elderly or those with low protein intake, but adds little for those consuming adequate protein.",
    evidenceScore: 62,
    researchNotes:
      "Leucine activates mTORC1 signaling, the primary switch for muscle protein synthesis. A leucine threshold (~2-3 g per meal) maximizes MPS. Studies in elderly show leucine-enriched meals improve MPS rates. In well-fed athletes consuming adequate protein, additional leucine provides minimal extra benefit.",
    cautions:
      "High doses may deplete other BCAAs. Not appropriate as sole therapy for sarcopenia without adequate total protein.",
    caveats:
      "Benefits are primarily for those not meeting the leucine threshold per meal (elderly, low-protein diets). Athletes consuming 1.6+ g/kg protein likely get sufficient leucine.",
    benefits: [
      "Primary dietary activator of muscle protein synthesis via mTOR",
      "Can enhance anabolic response to suboptimal protein meals",
      "May help preserve muscle mass in elderly populations",
    ],
    dosageNotes:
      "2-5 g per meal to maximize muscle protein synthesis. Total daily intake of 8-14 g from diet plus supplements. Most effective with meals containing at least 20 g total protein.",
    sideEffects: [
      "Generally well-tolerated",
      "May deplete isoleucine and valine at very high isolated doses",
      "Rare GI discomfort",
    ],
    tags: ["bcaa", "muscle-protein-synthesis", "mtor"],
    scores: { muscle: 60, recovery: 50 },
  },
  {
    slug: "limonene",
    name: "Limonene",
    category: "supplement",
    summary:
      "A monoterpene found abundantly in citrus peel oils. Studied for GI benefits, including gastroesophageal reflux, and for potential chemopreventive properties.",
    quickVerdict:
      "Some evidence for GERD symptom relief and interesting preclinical cancer data, but human clinical trials are limited and small.",
    evidenceScore: 25,
    researchNotes:
      "D-limonene has shown gastroprotective effects, possibly by promoting peristalsis and gastric acid neutralization. A small trial found relief of GERD symptoms. Animal studies show chemopreventive activity in breast and colon cancer models. Phase I cancer trials used high doses (up to 8 g/m2/day).",
    cautions:
      "May cause heartburn in some individuals despite GERD claims. High doses can cause GI irritation. Contact sensitization risk with concentrated topical forms.",
    caveats:
      "GERD evidence is from a single small trial. Cancer prevention data is preclinical or early-phase only. Dual use as a solvent complicates product quality.",
    benefits: [
      "May relieve GERD symptoms in some individuals",
      "Gastroprotective effects in animal models",
      "Chemopreventive properties in preclinical research",
    ],
    dosageNotes:
      "For GERD: 1000 mg every other day for 20 days has been used in limited trials. General supplementation: 500-1000 mg daily.",
    sideEffects: [
      "GI discomfort or heartburn",
      "Belching with citrus taste",
      "Diarrhea at high doses",
    ],
    tags: ["terpene", "citrus", "gastroprotective"],
    scores: { recovery: 20 },
  },
  {
    slug: "linalool",
    name: "Linalool",
    category: "supplement",
    summary:
      "A monoterpene alcohol found in lavender, basil, and many aromatic plants. Primarily studied via inhalation (aromatherapy) for anxiolytic and sedative effects.",
    quickVerdict:
      "Modest evidence for calming effects primarily through inhalation. Oral supplementation data is very limited compared to aromatherapy studies.",
    evidenceScore: 25,
    researchNotes:
      "Linalool modulates glutamate signaling and enhances GABAergic transmission in animal models. Lavender essential oil (containing linalool and linalyl acetate) as Silexan has positive clinical trials for anxiety. Isolated oral linalool supplementation has minimal human data.",
    cautions:
      "Essential oil should not be ingested in concentrated form without proper formulation. May cause sedation. Contact sensitization risk topically.",
    caveats:
      "Most positive data is from inhaled lavender oil or the pharmaceutical preparation Silexan, not isolated linalool supplements. Oral bioavailability and dosing are poorly characterized.",
    benefits: [
      "Anxiolytic effects in animal models and aromatherapy studies",
      "Sedative properties that may support sleep",
      "Anti-inflammatory activity in preclinical research",
    ],
    dosageNotes:
      "Aromatherapy: lavender oil diffusion. Silexan (lavender oil capsules): 80-160 mg daily. Isolated linalool oral dosing is not well-established.",
    sideEffects: [
      "Drowsiness",
      "GI discomfort with oral use",
      "Contact sensitization with topical use",
    ],
    tags: ["terpene", "aromatherapy", "anxiolytic"],
    scores: { anxiety: 30, sleep: 28, stress: 25 },
  },
  {
    slug: "lipase",
    name: "Lipase",
    category: "supplement",
    summary:
      "A digestive enzyme that breaks down dietary fats into fatty acids and glycerol. Used in pancreatic enzyme replacement therapy and general digestive support.",
    quickVerdict:
      "Well-established for pancreatic insufficiency (prescription PERT). Over-the-counter lipase supplements for general digestive support have less rigorous evidence.",
    evidenceScore: 60,
    researchNotes:
      "Pancreatic enzyme replacement therapy (PERT) containing lipase is the standard of care for exocrine pancreatic insufficiency. For general digestive discomfort from high-fat meals, OTC lipase may reduce bloating and steatorrhea. Evidence quality for non-clinical use is lower.",
    cautions:
      "High-dose lipase (as PERT) requires medical supervision. Fibrosing colonopathy risk with very high doses in cystic fibrosis patients.",
    caveats:
      "Prescription PERT is well-supported, but OTC digestive enzyme blends with lipase have variable evidence. Individual response depends on degree of lipase insufficiency.",
    benefits: [
      "Essential for managing exocrine pancreatic insufficiency",
      "May reduce bloating and discomfort from high-fat meals",
      "Improves fat-soluble vitamin absorption when lipase is deficient",
    ],
    dosageNotes:
      "PERT: 25,000-75,000 USP lipase units per meal (prescription). OTC supplements: typically 3,000-10,000 FIP units per meal.",
    sideEffects: [
      "GI cramps at high doses",
      "Nausea",
      "Diarrhea or constipation",
    ],
    tags: ["digestive-enzyme", "fat-digestion", "pancreatic"],
    scores: { recovery: 30 },
  },
  {
    slug: "liposomal-vitamin-c",
    name: "Liposomal Vitamin C",
    category: "supplement",
    summary:
      "Vitamin C encapsulated in phospholipid liposomes to improve oral bioavailability. May achieve higher plasma levels than standard oral vitamin C without the GI side effects of megadoses.",
    quickVerdict:
      "Likely achieves higher blood levels than standard oral vitamin C, but whether this translates to clinically meaningful advantages is unproven for most applications.",
    evidenceScore: 45,
    researchNotes:
      "Pharmacokinetic studies show liposomal vitamin C produces higher peak and AUC plasma levels than standard oral vitamin C. One study found liposomal vitamin C achieved ~70% of IV levels. However, clinical outcome studies comparing liposomal to standard oral vitamin C are lacking.",
    cautions:
      "More expensive than standard vitamin C. Liposome quality varies between manufacturers. High doses still carry risk of kidney stones in susceptible individuals.",
    caveats:
      "Superior pharmacokinetics do not guarantee superior clinical outcomes. Standard vitamin C at 200-400 mg achieves near-maximal tissue saturation. The additional bioavailability may only matter for supra-physiological dosing strategies.",
    benefits: [
      "Higher oral bioavailability than standard vitamin C",
      "Reduced GI side effects compared to high-dose standard forms",
      "May be useful when higher plasma levels are desired without IV access",
    ],
    dosageNotes:
      "Typical doses: 500-2000 mg daily. The liposomal encapsulation may allow lower total doses to achieve similar plasma levels as higher standard oral doses.",
    sideEffects: [
      "Generally well-tolerated",
      "Mild GI effects less common than standard high-dose vitamin C",
      "Kidney stone risk at very high chronic doses",
    ],
    tags: ["vitamin-c", "liposomal", "bioavailability"],
    scores: { immunity: 55, longevity: 40 },
  },
  {
    slug: "lithium-orotate",
    name: "Lithium Orotate",
    category: "supplement",
    summary:
      "A low-dose lithium salt marketed as a mood and neuroprotective supplement. Provides far lower lithium doses than pharmaceutical lithium carbonate used for bipolar disorder.",
    quickVerdict:
      "Ecological and epidemiological data suggest low-dose lithium may support mood and longevity, but supplement-dose clinical trials are very limited. Not interchangeable with prescription lithium.",
    evidenceScore: 32,
    researchNotes:
      "Ecological studies associate higher lithium levels in drinking water with lower suicide rates, reduced dementia incidence, and greater longevity. Lithium promotes BDNF expression and inhibits GSK-3beta, relevant to neuroprotection. However, clinical trials at supplement doses (5-20 mg elemental lithium) are nearly nonexistent.",
    cautions:
      "Even low-dose lithium can affect thyroid and kidney function with long-term use. Should not be combined with prescription lithium without medical supervision. Not appropriate for self-treating bipolar disorder.",
    caveats:
      "Claims that orotate salt provides superior brain penetration are unverified in humans. Epidemiological associations with drinking water lithium do not prove supplementation benefits.",
    benefits: [
      "Epidemiological association with lower suicide rates and dementia risk",
      "Neuroprotective via GSK-3beta inhibition and BDNF promotion",
      "May support mood stability at low doses",
    ],
    dosageNotes:
      "Supplement doses typically provide 5-20 mg elemental lithium daily, far below therapeutic psychiatric doses (900-1200 mg lithium carbonate).",
    sideEffects: [
      "Potential thyroid suppression with chronic use",
      "GI discomfort",
      "Mild tremor",
      "Kidney impact with long-term use (even at low doses, monitoring advised)",
    ],
    tags: ["neuroprotective", "mood-support", "trace-mineral"],
    scores: { mood: 35, longevity: 30, memory: 25 },
  },
  {
    slug: "lumbrokinase",
    name: "Lumbrokinase",
    category: "supplement",
    summary:
      "A fibrinolytic enzyme complex derived from earthworms. Used in traditional Chinese medicine and studied for its ability to break down fibrin and support cardiovascular health.",
    quickVerdict:
      "Preliminary evidence for fibrinolytic activity, primarily from Asian clinical studies of variable quality. Less data than nattokinase but may be more potent per unit.",
    evidenceScore: 28,
    researchNotes:
      "Lumbrokinase demonstrates fibrinolytic activity by activating plasminogen and directly degrading fibrin. Chinese clinical studies suggest benefit for stroke recovery and deep vein thrombosis. However, most studies are small, not blinded, and published in Chinese-language journals, limiting external validation.",
    cautions:
      "Significant bleeding risk, especially with anticoagulants. Should be discontinued before surgery. Not for use in active bleeding disorders.",
    caveats:
      "Quality of published clinical evidence is generally low by Western standards. Product standardization is challenging. Direct comparison with nattokinase is limited.",
    benefits: [
      "Potent fibrinolytic activity in vitro and in animal models",
      "May support healthy blood viscosity and circulation",
      "Used traditionally for cardiovascular support",
    ],
    dosageNotes:
      "Typical doses: 20-40 mg (or 200,000-400,000 units) daily in divided doses on an empty stomach. Standardization varies between products.",
    sideEffects: [
      "Increased bleeding risk",
      "GI discomfort",
      "Allergic reactions possible",
    ],
    tags: ["fibrinolytic", "cardiovascular", "enzyme"],
    scores: { longevity: 28 },
  },
  {
    slug: "lutein",
    name: "Lutein",
    category: "supplement",
    summary:
      "A carotenoid that accumulates in the macula of the eye, providing protection against blue light and oxidative damage. One of the best-studied nutrients for age-related macular degeneration.",
    quickVerdict:
      "Strong evidence from the AREDS2 trial for reducing progression of age-related macular degeneration. One of the most well-supported eye health supplements.",
    evidenceScore: 75,
    researchNotes:
      "The AREDS2 trial demonstrated that lutein (10 mg) plus zeaxanthin (2 mg) was a suitable and safer replacement for beta-carotene in the AREDS formula for AMD prevention. Observational studies consistently link higher lutein intake with reduced AMD and cataract risk. Emerging evidence suggests cognitive benefits via increased macular pigment optical density.",
    cautions:
      "Well-tolerated. Those who smoke should prefer lutein over beta-carotene for eye health supplementation.",
    caveats:
      "Benefits are best established for AMD progression prevention, not necessarily primary prevention. Cognitive benefits are emerging but not yet definitive.",
    benefits: [
      "Reduces AMD progression (AREDS2 evidence)",
      "Filters blue light and protects retinal cells",
      "May support cognitive function in older adults",
    ],
    dosageNotes:
      "10 mg lutein daily (AREDS2 dose), ideally with a fat-containing meal for absorption. Often paired with 2 mg zeaxanthin.",
    sideEffects: [
      "Very well-tolerated",
      "Mild yellowing of skin at very high chronic doses (harmless carotenodermia)",
    ],
    tags: ["carotenoid", "eye-health", "macular"],
    scores: { longevity: 55, focus: 30 },
  },
  {
    slug: "luteolin",
    name: "Luteolin",
    category: "supplement",
    summary:
      "A flavone found in celery, parsley, and chamomile with anti-inflammatory, neuroprotective, and mast cell-stabilizing properties demonstrated primarily in preclinical research.",
    quickVerdict:
      "Promising preclinical anti-neuroinflammatory and mast cell-stabilizing properties, but human clinical data is sparse. Often used anecdotally for mast cell activation issues.",
    evidenceScore: 28,
    researchNotes:
      "Luteolin inhibits NF-kB, reduces pro-inflammatory cytokine release, and stabilizes mast cells in vitro and animal models. Some clinical interest for neuroinflammatory conditions and autism (as a mast cell stabilizer). Bioavailability is low and enhanced by co-administration with quercetin or liposomal delivery.",
    cautions:
      "Limited human safety data at supplement doses. May interact with CYP enzymes. Potential iron chelation at high doses.",
    caveats:
      "Most evidence is preclinical. Oral bioavailability is poor without enhanced delivery. Clinical trials are very few and mostly pilot-scale.",
    benefits: [
      "Potent mast cell stabilizer in vitro",
      "Anti-neuroinflammatory properties in preclinical models",
      "Antioxidant and anti-allergic activity",
    ],
    dosageNotes:
      "Supplement doses typically range from 100-400 mg daily. Often combined with quercetin or in liposomal formulations to improve absorption.",
    sideEffects: [
      "GI discomfort",
      "Possible iron absorption interference",
      "Limited safety data at high doses",
    ],
    tags: ["flavone", "mast-cell-stabilizer", "anti-inflammatory"],
    scores: { immunity: 30, anxiety: 22 },
  },
  {
    slug: "lycopene",
    name: "Lycopene",
    category: "supplement",
    summary:
      "A red carotenoid pigment abundant in tomatoes and watermelon. Epidemiological studies consistently associate higher lycopene intake with reduced prostate cancer risk and cardiovascular benefit.",
    quickVerdict:
      "Strong epidemiological associations with prostate and cardiovascular health, but interventional trials are less consistent. Dietary sources (cooked tomatoes) may be superior to supplements.",
    evidenceScore: 55,
    researchNotes:
      "Multiple prospective cohort studies associate higher lycopene intake with reduced prostate cancer risk (20-30% reduction in highest vs. lowest intake). It reduces LDL oxidation and may improve endothelial function. However, interventional trials have produced mixed results, and dietary lycopene from tomato products may work synergistically with other tomato compounds.",
    cautions:
      "Generally very safe. High supplemental doses may interact with blood thinners. Lycopenodermia (orange skin) at very high doses is harmless but cosmetically notable.",
    caveats:
      "Epidemiological associations do not prove causation. Tomato products may be more effective than isolated lycopene due to food matrix effects. Interventional trial results are inconsistent.",
    benefits: [
      "Associated with reduced prostate cancer risk in epidemiological studies",
      "Potent antioxidant that reduces LDL oxidation",
      "May support cardiovascular health and skin photoprotection",
    ],
    dosageNotes:
      "Supplemental doses: 10-30 mg daily. Lycopene from cooked tomatoes (with fat) has superior bioavailability.",
    sideEffects: [
      "Very well-tolerated",
      "Lycopenodermia (orange skin discoloration) at very high doses",
      "Rare GI discomfort",
    ],
    tags: ["carotenoid", "prostate-health", "antioxidant"],
    scores: { longevity: 50, immunity: 30 },
  },
  {
    slug: "lysine",
    name: "Lysine",
    category: "supplement",
    summary:
      "An essential amino acid important for collagen synthesis, calcium absorption, and immune function. Best known for its use in managing herpes simplex virus outbreaks.",
    quickVerdict:
      "Moderate evidence for reducing herpes simplex recurrence frequency. Otherwise an essential amino acid with importance primarily when dietary intake is inadequate.",
    evidenceScore: 48,
    researchNotes:
      "Lysine competes with arginine for absorption and may reduce HSV replication by lowering intracellular arginine. Several older trials show reduced HSV recurrence at 1-3 g/day, though study quality is variable. Also important for collagen synthesis, carnitine production, and calcium absorption.",
    cautions:
      "High doses may increase calcium absorption excessively. Theoretical concern about increased cholesterol via carnitine pathway. Avoid in those with hyperlysinemia.",
    caveats:
      "HSV evidence is based on older trials of moderate quality. Benefits for cold sores are modest and not universal. Most people consuming adequate protein are not lysine-deficient.",
    benefits: [
      "May reduce frequency and severity of herpes simplex outbreaks",
      "Essential for collagen synthesis and tissue repair",
      "Supports calcium absorption and carnitine production",
    ],
    dosageNotes:
      "For HSV prevention: 1000-3000 mg daily. General supplementation: 500-1000 mg daily. Best taken on empty stomach away from arginine-rich foods.",
    sideEffects: [
      "GI discomfort at high doses",
      "Nausea",
      "Diarrhea",
      "Abdominal cramps",
    ],
    tags: ["essential-amino-acid", "herpes", "collagen"],
    scores: { immunity: 40, recovery: 30 },
  },
  {
    slug: "magnesium-citrate",
    name: "Magnesium Citrate",
    category: "supplement",
    summary:
      "A well-absorbed form of magnesium bound to citric acid. Commonly used for general magnesium repletion and has a mild laxative effect that can benefit constipation.",
    quickVerdict:
      "A solid, affordable, well-absorbed magnesium form. Good general-purpose choice, particularly for those who also experience constipation.",
    evidenceScore: 70,
    researchNotes:
      "Magnesium citrate has higher bioavailability than magnesium oxide in comparative studies. Magnesium deficiency is common (up to 50% of the US population may consume inadequate magnesium). Supplementation supports muscle function, blood pressure, blood glucose regulation, and bone health.",
    cautions:
      "Laxative effect may cause loose stools, especially initially. Reduce dose in those with renal impairment. May interact with certain antibiotics and bisphosphonates.",
    caveats:
      "The laxative effect is a feature for constipation but a drawback for those with loose stools. For sleep or cognitive goals, other forms (glycinate, threonate) may be preferred.",
    benefits: [
      "Well-absorbed and affordable magnesium form",
      "Gentle laxative effect beneficial for constipation",
      "Supports muscle, cardiovascular, and metabolic function",
    ],
    dosageNotes:
      "200-400 mg elemental magnesium daily. Start with lower doses to assess GI tolerance. Can be split into multiple doses.",
    sideEffects: [
      "Loose stools or diarrhea (dose-dependent)",
      "Abdominal cramping",
      "Nausea at high doses",
    ],
    tags: ["magnesium", "mineral", "laxative"],
    scores: { energy: 45, recovery: 45, sleep: 40, stress: 40, muscle: 35 },
  },
  {
    slug: "magnesium-glycinate",
    name: "Magnesium Glycinate",
    category: "supplement",
    summary:
      "Magnesium bound to the amino acid glycine, offering high bioavailability with minimal laxative effect. The glycine component may independently contribute to calming and sleep-promoting effects.",
    quickVerdict:
      "One of the best-tolerated magnesium forms. Preferred for sleep, anxiety, and muscle relaxation due to dual benefits of magnesium and glycine.",
    evidenceScore: 68,
    researchNotes:
      "Magnesium glycinate (bisglycinate) has high bioavailability and low GI side effects compared to citrate or oxide. Glycine itself is an inhibitory neurotransmitter that promotes sleep and calm. The combination may be synergistic for sleep quality and stress reduction.",
    cautions:
      "Well-tolerated. Still requires caution in renal impairment. May cause mild drowsiness.",
    caveats:
      "More expensive per milligram of elemental magnesium than citrate or oxide. Calming effects may partly reflect glycine rather than magnesium per se.",
    benefits: [
      "Highly bioavailable with minimal GI side effects",
      "Glycine component supports sleep and relaxation",
      "Well-suited for long-term daily magnesium supplementation",
    ],
    dosageNotes:
      "200-400 mg elemental magnesium daily. Often taken in the evening for sleep support. Can be split into two doses.",
    sideEffects: [
      "Very well-tolerated",
      "Mild drowsiness (often desired)",
      "Rare GI effects compared to other forms",
    ],
    tags: ["magnesium", "sleep", "calming"],
    scores: { sleep: 55, anxiety: 50, stress: 50, recovery: 45, muscle: 40 },
  },
  {
    slug: "magnesium-l-threonate",
    name: "Magnesium L-Threonate",
    category: "supplement",
    summary:
      "A form of magnesium developed at MIT specifically to increase brain magnesium levels. Threonate is a metabolite of vitamin C that enhances magnesium transport across the blood-brain barrier.",
    quickVerdict:
      "Promising for cognitive applications based on animal data and a small human trial, but evidence is early. Expensive relative to other magnesium forms for general supplementation.",
    evidenceScore: 42,
    researchNotes:
      "Animal studies show magnesium threonate (Magtein) elevates brain Mg2+ levels more effectively than other magnesium forms and improves synaptic plasticity, learning, and memory. One human RCT in older adults showed cognitive improvement. Mechanistically increases synaptic density in hippocampus and prefrontal cortex.",
    cautions:
      "Provides relatively low elemental magnesium per capsule (48 mg per 2 g dose). Not ideal as sole magnesium source for general repletion.",
    caveats:
      "Only one published human RCT. Animal data is strong but translation is uncertain. Very low elemental magnesium content makes it impractical for correcting general magnesium deficiency.",
    benefits: [
      "Specifically designed to increase brain magnesium concentrations",
      "Improved learning and memory in animal models",
      "One human trial showed cognitive improvement in older adults",
    ],
    dosageNotes:
      "Standard dose: 1500-2000 mg magnesium L-threonate daily (providing ~144 mg elemental Mg), split into two doses. Often combined with another magnesium form for adequate total intake.",
    sideEffects: [
      "Generally well-tolerated",
      "Headache in some users",
      "Drowsiness",
      "Mild GI discomfort",
    ],
    tags: ["magnesium", "cognitive", "brain-health"],
    scores: { memory: 45, focus: 40, sleep: 40, longevity: 35 },
  },
  {
    slug: "magnesium-orotate",
    name: "Magnesium Orotate",
    category: "supplement",
    summary:
      "Magnesium bound to orotic acid, which plays a role in pyrimidine synthesis and cellular energy. Studied primarily in cardiovascular contexts, particularly heart failure.",
    quickVerdict:
      "Niche cardiovascular application with limited but positive data for congestive heart failure. Expensive and low elemental magnesium content limits general use.",
    evidenceScore: 35,
    researchNotes:
      "A few clinical studies suggest magnesium orotate improves survival and symptoms in congestive heart failure. Orotic acid may support cardiac energy metabolism via pyrimidine synthesis. However, trials are small and old. The form provides only ~6.5% elemental magnesium by weight.",
    cautions:
      "Very low elemental magnesium content. Not a practical choice for correcting general magnesium deficiency. Expensive per mg of elemental magnesium.",
    caveats:
      "Cardiovascular studies are few and of moderate quality. Whether orotic acid adds meaningful benefit over other magnesium forms is unclear. Historical interest exceeds current evidence base.",
    benefits: [
      "May support cardiac function in heart failure patients",
      "Orotic acid supports cellular energy metabolism",
      "Well-absorbed magnesium form",
    ],
    dosageNotes:
      "Cardiovascular studies used 3000-6000 mg magnesium orotate daily (providing ~200-400 mg elemental Mg). General supplementation is uncommon due to cost.",
    sideEffects: [
      "GI discomfort",
      "Diarrhea at higher doses",
      "Expensive for adequate dosing",
    ],
    tags: ["magnesium", "cardiovascular", "cardiac-support"],
    scores: { longevity: 30, energy: 25 },
  },
  {
    slug: "magnesium-taurate",
    name: "Magnesium Taurate",
    category: "supplement",
    summary:
      "Magnesium combined with the amino acid taurine. Both components independently support cardiovascular and neurological health, making this form particularly favored for heart and blood pressure support.",
    quickVerdict:
      "Theoretically synergistic for cardiovascular health since both magnesium and taurine lower blood pressure, but specific clinical trials on the combined form are lacking.",
    evidenceScore: 40,
    researchNotes:
      "Both magnesium and taurine independently reduce blood pressure, support cardiac rhythm, and have neuroprotective effects. Taurine also modulates calcium channels and acts as an osmolyte. The combination is theoretically synergistic, but clinical trials specifically testing magnesium taurate as a chelate are absent.",
    cautions:
      "Well-tolerated. Standard magnesium cautions apply for renal impairment. Low elemental magnesium content per capsule.",
    caveats:
      "No clinical trials have tested magnesium taurate specifically as a chelate vs. taking magnesium and taurine separately. Synergistic claims are theoretical.",
    benefits: [
      "Combines cardiovascular benefits of both magnesium and taurine",
      "Both components support healthy blood pressure",
      "Taurine adds calming and cardiac rhythm support",
    ],
    dosageNotes:
      "Typical doses provide 200-400 mg elemental magnesium daily. Often taken in divided doses. Taurine content varies by product.",
    sideEffects: [
      "Generally well-tolerated",
      "Mild GI effects",
      "Less laxative than magnesium citrate",
    ],
    tags: ["magnesium", "taurine", "cardiovascular"],
    scores: { stress: 45, sleep: 40, anxiety: 40, longevity: 35 },
  },
  {
    slug: "malic-acid",
    name: "Malic Acid",
    category: "supplement",
    summary:
      "An organic acid found in apples and involved in the Krebs cycle of cellular energy production. Often combined with magnesium (as magnesium malate) for fibromyalgia and energy support.",
    quickVerdict:
      "Limited evidence as a standalone supplement. Most commonly studied in combination with magnesium for fibromyalgia, with mixed results.",
    evidenceScore: 25,
    researchNotes:
      "Malic acid is a Krebs cycle intermediate that supports ATP production. Magnesium malate has been studied for fibromyalgia pain with some positive results, but trial quality is generally low. Standalone malic acid supplementation data is very limited.",
    cautions:
      "Acidic; may cause GI irritation. Dental erosion risk with frequent oral exposure to acidic solutions.",
    caveats:
      "Most interest is in the magnesium malate combination rather than standalone malic acid. Fibromyalgia evidence is preliminary and inconsistent.",
    benefits: [
      "Krebs cycle intermediate supporting cellular energy production",
      "May reduce muscle pain and fatigue in combination with magnesium",
      "Natural chelating agent for mineral absorption",
    ],
    dosageNotes:
      "Typical doses: 1200-2400 mg daily, often as magnesium malate providing both magnesium and malic acid. Usually split into two or three doses.",
    sideEffects: [
      "GI discomfort",
      "Diarrhea at high doses",
      "Dental erosion with chronic acidic exposure",
    ],
    tags: ["organic-acid", "energy-metabolism", "krebs-cycle"],
    scores: { energy: 25, pain: 25, recovery: 20 },
  },
  {
    slug: "matrine",
    name: "Matrine",
    category: "supplement",
    summary:
      "An alkaloid from Sophora flavescens root used in traditional Chinese medicine. Studied for anti-inflammatory, antiviral, and potential anti-tumor properties, primarily in preclinical settings.",
    quickVerdict:
      "Interesting preclinical pharmacology but very limited Western clinical data. Used in Chinese hospitals as an injection for hepatitis and certain cancers.",
    evidenceScore: 20,
    researchNotes:
      "Matrine and oxymatrine have shown anti-HBV activity, anti-fibrotic effects in liver disease, and anti-tumor activity in multiple cancer cell lines. Injectable forms are used clinically in China for hepatitis B and as adjuvant cancer therapy. Western clinical trials are scarce.",
    cautions:
      "Potential hepatotoxicity at high doses. Narrow therapeutic window. Quality control of supplements is a concern. Not recommended without medical supervision.",
    caveats:
      "Most clinical evidence is from Chinese-language publications and may not meet Western trial quality standards. Oral supplement bioavailability and dosing are poorly characterized.",
    benefits: [
      "Anti-HBV activity demonstrated clinically in Chinese trials",
      "Anti-inflammatory and anti-fibrotic in liver disease models",
      "Preclinical anti-tumor activity",
    ],
    dosageNotes:
      "No established Western supplemental dose. Chinese clinical use involves injection or standardized oral forms under medical supervision.",
    sideEffects: [
      "Potential hepatotoxicity",
      "Dizziness",
      "GI discomfort",
      "Allergic reactions",
    ],
    tags: ["alkaloid", "traditional-chinese-medicine", "hepatoprotective"],
    scores: { immunity: 22 },
  },
  {
    slug: "melatonin",
    name: "Melatonin",
    category: "supplement",
    summary:
      "A hormone produced by the pineal gland that regulates circadian rhythm. One of the most well-studied supplements for sleep onset, jet lag, and circadian rhythm disorders.",
    quickVerdict:
      "Strong evidence for circadian rhythm adjustment, jet lag, and delayed sleep phase. Lower doses (0.3-1 mg) are often more effective than the high doses commonly sold.",
    evidenceScore: 82,
    researchNotes:
      "Meta-analyses confirm melatonin reduces sleep onset latency by ~7 minutes and improves overall sleep quality. Most effective for circadian misalignment (jet lag, shift work, DSPD). Emerging evidence for antioxidant, anti-inflammatory, and oncostatic properties. Dose-response is non-linear; physiological doses (0.3-0.5 mg) may be optimal for sleep timing.",
    cautions:
      "May suppress endogenous production with long-term use (debated). Can affect reproductive hormones at high doses. Not recommended for autoimmune conditions without guidance.",
    caveats:
      "Most beneficial for circadian timing issues rather than primary insomnia. Commonly sold at supraphysiological doses (5-10 mg) which may cause morning grogginess. Lower doses are often more effective.",
    benefits: [
      "Reliably shifts circadian rhythm for jet lag and shift work",
      "Reduces sleep onset latency",
      "Potent antioxidant with emerging anti-aging research",
      "May support immune function",
    ],
    dosageNotes:
      "Sleep timing: 0.3-1 mg taken 30-60 minutes before desired sleep time. Jet lag: 0.5-3 mg at destination bedtime. Higher doses (3-5 mg) may be useful for antioxidant purposes.",
    sideEffects: [
      "Morning grogginess (especially at high doses)",
      "Vivid dreams",
      "Mild headache",
      "Possible hormonal effects at high chronic doses",
    ],
    tags: ["sleep", "circadian-rhythm", "hormone"],
    scores: { sleep: 78, longevity: 40, immunity: 30, stress: 25 },
  },
  {
    slug: "menaquinone-7",
    name: "Menaquinone-7 (Vitamin K2 MK-7)",
    category: "supplement",
    summary:
      "The most bioavailable and long-acting form of vitamin K2. Activates proteins that direct calcium into bones and away from arteries, supporting both skeletal and cardiovascular health.",
    quickVerdict:
      "Growing evidence for bone and cardiovascular health. Particularly important when supplementing vitamin D and calcium. MK-7 is superior to MK-4 in bioavailability and half-life.",
    evidenceScore: 60,
    researchNotes:
      "MK-7 has a half-life of ~72 hours versus ~1 hour for MK-4, allowing once-daily dosing. It carboxylates osteocalcin (bone mineralization) and matrix Gla protein (arterial calcification prevention). The 3-year Rotterdam study found MK-7 reduced arterial stiffness. Important co-factor with vitamin D for calcium metabolism.",
    cautions:
      "Contraindicated with warfarin and other vitamin K-sensitive anticoagulants. Direct-acting oral anticoagulants (DOACs) are less affected.",
    caveats:
      "Large-scale cardiovascular outcome trials are still limited. Most bone studies use surrogate markers. Optimal dose is still debated.",
    benefits: [
      "Activates osteocalcin for proper bone mineralization",
      "Activates matrix Gla protein to prevent arterial calcification",
      "Long half-life allows once-daily dosing",
    ],
    dosageNotes:
      "100-200 mcg daily for general bone and cardiovascular support. Higher doses (up to 360 mcg) used in some clinical studies. Take with fat-containing meal.",
    sideEffects: [
      "Very well-tolerated",
      "Contraindicated with warfarin",
    ],
    tags: ["vitamin-k2", "bone-health", "cardiovascular"],
    scores: { longevity: 55 },
  },
  {
    slug: "menthol",
    name: "Menthol",
    category: "supplement",
    summary:
      "A cyclic monoterpene alcohol from peppermint oil that activates TRPM8 cold receptors. Used topically for pain relief and orally (as peppermint oil capsules) for IBS symptoms.",
    quickVerdict:
      "Good evidence for IBS symptom relief as enteric-coated peppermint oil and for topical pain relief. One of the better-studied natural compounds for functional GI disorders.",
    evidenceScore: 58,
    researchNotes:
      "Meta-analyses of enteric-coated peppermint oil (containing menthol as primary active) show significant benefit for IBS symptoms, particularly abdominal pain and bloating. Topical menthol activates TRPM8 receptors providing analgesic and cooling effects. NNT for IBS is approximately 4.",
    cautions:
      "Enteric coating is important to prevent heartburn. May worsen GERD. Not suitable for those with bile duct obstruction or gallstones. Topical use can cause skin irritation.",
    caveats:
      "Benefits are specific to enteric-coated peppermint oil formulations for IBS. Non-enteric forms often cause heartburn. Topical pain relief is temporary.",
    benefits: [
      "Reduces IBS symptoms including abdominal pain and bloating",
      "Topical analgesic via TRPM8 cold receptor activation",
      "Antispasmodic effects on smooth muscle",
    ],
    dosageNotes:
      "Enteric-coated peppermint oil: 180-225 mg (0.2-0.4 mL oil) two to three times daily before meals for IBS. Topical: 5-16% menthol preparations as needed.",
    sideEffects: [
      "Heartburn if non-enteric-coated",
      "Perianal burning",
      "Allergic reactions (rare)",
      "Skin irritation with topical use",
    ],
    tags: ["peppermint", "ibs", "analgesic"],
    scores: { pain: 50, recovery: 30 },
  },
  {
    slug: "mitoq",
    name: "MitoQ (Mitoquinone)",
    category: "supplement",
    summary:
      "A mitochondria-targeted form of CoQ10 conjugated to a triphenylphosphonium cation. It accumulates in mitochondria at concentrations hundreds of times higher than untargeted CoQ10.",
    quickVerdict:
      "Innovative delivery mechanism with strong preclinical data and emerging human evidence for vascular and mitochondrial health. More expensive than standard CoQ10.",
    evidenceScore: 42,
    researchNotes:
      "MitoQ concentrates in mitochondria 100-1000x more than dietary CoQ10 due to its lipophilic cation. Human trials show improved vascular endothelial function in older adults (reversed ~15-20 years of aging in one measure). Being studied for Parkinson's disease, liver disease, and metabolic syndrome. A Phase II PD trial was negative.",
    cautions:
      "Limited long-term human safety data. Phase II Parkinson's trial showed no efficacy despite mechanistic rationale. Expensive.",
    caveats:
      "Clinical trial data is still limited. The failed Parkinson's trial tempers enthusiasm despite positive vascular data. Long-term effects of sustained mitochondrial antioxidant supplementation are unknown.",
    benefits: [
      "Mitochondria-targeted delivery far exceeding standard CoQ10",
      "Improved vascular endothelial function in older adults",
      "Reduces mitochondrial oxidative stress",
    ],
    dosageNotes:
      "Standard dose: 10-20 mg daily, taken in the morning on an empty stomach.",
    sideEffects: [
      "Generally well-tolerated",
      "Mild GI discomfort",
      "Headache",
    ],
    tags: ["mitochondrial", "targeted-antioxidant", "coq10"],
    scores: { longevity: 45, energy: 35 },
  },
  {
    slug: "msm",
    name: "MSM (Methylsulfonylmethane)",
    category: "supplement",
    summary:
      "An organic sulfur compound found naturally in some foods. Used for joint pain, inflammation, and exercise recovery, with sulfur being important for connective tissue integrity.",
    quickVerdict:
      "Moderate evidence for joint pain relief in osteoarthritis and exercise recovery. Well-tolerated with a good safety profile.",
    evidenceScore: 48,
    researchNotes:
      "Several RCTs show MSM reduces joint pain and improves physical function in knee osteoarthritis, though effect sizes are generally modest. May reduce exercise-induced muscle damage and oxidative stress. Provides bioavailable sulfur for glutathione synthesis and connective tissue maintenance. Often combined with glucosamine.",
    cautions:
      "Well-tolerated. May have mild blood-thinning effects. Quality varies between products.",
    caveats:
      "Effect sizes in OA trials are modest. Many positive studies are industry-funded. Optimal dose and duration for different conditions are not well-established.",
    benefits: [
      "Reduces joint pain and inflammation in osteoarthritis",
      "Provides bioavailable sulfur for connective tissue and glutathione",
      "May reduce exercise-induced muscle damage and soreness",
    ],
    dosageNotes:
      "1500-6000 mg daily in divided doses. Most OA studies use 1500-3000 mg daily. May take 2-4 weeks for noticeable effects.",
    sideEffects: [
      "GI discomfort at higher doses",
      "Bloating",
      "Headache (usually transient)",
    ],
    tags: ["sulfur", "joint-health", "anti-inflammatory"],
    scores: { pain: 45, recovery: 40, muscle: 25 },
  },
  {
    slug: "myricetin",
    name: "Myricetin",
    category: "supplement",
    summary:
      "A flavonoid found in berries, walnuts, and red wine with antioxidant, anti-inflammatory, and potential neuroprotective properties. Studied primarily in preclinical models.",
    quickVerdict:
      "Interesting preclinical data for neuroprotection and metabolic health, but human clinical trials are extremely scarce. Low oral bioavailability is a significant limitation.",
    evidenceScore: 18,
    researchNotes:
      "Myricetin inhibits amyloid-beta aggregation, reduces tau phosphorylation, and improves insulin sensitivity in animal models. It has broad antioxidant and anti-inflammatory activity. However, oral bioavailability is very low due to extensive first-pass metabolism, and human clinical trials are nearly nonexistent.",
    cautions:
      "Limited safety data for isolated supplementation. May interact with CYP enzymes. Iron chelation potential.",
    caveats:
      "Virtually all evidence is preclinical. Very poor oral bioavailability limits translation. Benefits from dietary sources may involve synergy with other food compounds.",
    benefits: [
      "Anti-amyloid and neuroprotective in preclinical models",
      "May improve insulin sensitivity in animal studies",
      "Broad antioxidant activity",
    ],
    dosageNotes:
      "No established supplemental dose. Dietary intake from berries, walnuts, and grapes is typically 1-10 mg daily.",
    sideEffects: [
      "Limited data on isolated supplementation",
      "Potential GI effects",
      "May affect iron absorption",
    ],
    tags: ["flavonoid", "neuroprotective", "antioxidant"],
    scores: { longevity: 20, memory: 18 },
  },
  {
    slug: "n-acetyl-glucosamine",
    name: "N-Acetyl Glucosamine",
    category: "supplement",
    summary:
      "An acetylated form of glucosamine that is a building block of hyaluronic acid and glycosaminoglycans. Studied for joint health, gut barrier function, and inflammatory bowel disease.",
    quickVerdict:
      "Modest evidence for joint and gut health, with some interesting IBD data. May offer distinct benefits from standard glucosamine through different metabolic pathways.",
    evidenceScore: 38,
    researchNotes:
      "N-acetyl glucosamine (NAG) is a precursor to hyaluronic acid and glycosaminoglycans in the gut lining. Small studies in children with IBD showed mucosal healing. It enters the hexosamine biosynthetic pathway differently from glucosamine sulfate. Joint health evidence is more limited than standard glucosamine.",
    cautions:
      "Derived from shellfish in most forms. May affect blood glucose via hexosamine pathway signaling.",
    caveats:
      "IBD studies are small and uncontrolled. Joint health evidence is more limited than for glucosamine sulfate. The two forms are not interchangeable.",
    benefits: [
      "Building block for hyaluronic acid and gut glycosaminoglycans",
      "May support gut mucosal barrier integrity",
      "Preliminary evidence for inflammatory bowel disease",
    ],
    dosageNotes:
      "Typical doses: 500-1500 mg daily. IBD studies used higher doses under medical supervision. Often combined with other joint support compounds.",
    sideEffects: [
      "Generally well-tolerated",
      "Mild GI discomfort",
      "Shellfish allergy concern for some products",
    ],
    tags: ["glycosaminoglycan", "gut-health", "joint-health"],
    scores: { pain: 32, recovery: 28, immunity: 25 },
  },
  {
    slug: "nac",
    name: "NAC (N-Acetyl Cysteine)",
    category: "supplement",
    summary:
      "A precursor to glutathione and a mucolytic agent. One of the most versatile supplements with applications ranging from liver protection to psychiatric conditions and respiratory health.",
    quickVerdict:
      "Strong evidence as a glutathione precursor and mucolytic. Well-established for acetaminophen overdose. Growing evidence for psychiatric, respiratory, and metabolic applications.",
    evidenceScore: 72,
    researchNotes:
      "NAC is the standard treatment for acetaminophen toxicity. It reliably raises glutathione levels. Meta-analyses support NAC for COPD exacerbation reduction, and emerging evidence exists for OCD, trichotillomania, substance use disorders, and PCOS. It modulates glutamate via the cystine-glutamate antiporter, explaining psychiatric applications.",
    cautions:
      "FDA has debated its classification as a supplement vs. drug. May reduce the effectiveness of some chemotherapy agents. High doses can cause nausea.",
    caveats:
      "Psychiatric applications are promising but still need larger confirmatory trials. Oral bioavailability is only ~6-10%. Some positive studies are small or open-label.",
    benefits: [
      "Reliably increases glutathione levels",
      "Mucolytic properties for respiratory health",
      "Promising for psychiatric conditions via glutamate modulation",
      "Hepatoprotective effects",
    ],
    dosageNotes:
      "General antioxidant support: 600-1200 mg daily. Psychiatric applications: 1200-2400 mg daily. Respiratory: 600 mg twice daily. Take on empty stomach.",
    sideEffects: [
      "Nausea and GI discomfort",
      "Sulfurous taste or body odor",
      "Rare allergic reactions",
      "Headache",
    ],
    tags: ["glutathione-precursor", "antioxidant", "mucolytic"],
    scores: { longevity: 55, immunity: 50, mood: 40, recovery: 40 },
  },
  {
    slug: "nad-boosters",
    name: "NAD+ Boosters (NMN/NR)",
    category: "supplement",
    summary:
      "Nicotinamide mononucleotide (NMN) and nicotinamide riboside (NR) are precursors to NAD+, a coenzyme critical for energy metabolism, DNA repair, and sirtuin activation that declines with age.",
    quickVerdict:
      "Strong mechanistic rationale and impressive animal data. Human trials show NAD+ levels increase, but clinical outcome benefits in healthy humans remain unproven.",
    evidenceScore: 48,
    researchNotes:
      "NAD+ declines 50% between ages 40-60. NMN and NR both reliably raise NAD+ levels in human trials. Animal studies show dramatic anti-aging effects: improved insulin sensitivity, endurance, neuroprotection, and lifespan extension. Human trials confirm NAD+ elevation but clinical outcome data is limited. NR (as Niagen) has more published human data; NMN research is catching up.",
    cautions:
      "Long-term safety data in humans is limited. Theoretical concern about promoting cancer cell metabolism. Expensive for chronic use.",
    caveats:
      "Spectacular animal results have not yet translated to proven clinical benefits in healthy humans. NAD+ elevation is confirmed, but whether this meaningfully slows aging in humans is unproven. The field is rapidly evolving.",
    benefits: [
      "Reliably increases NAD+ levels in human studies",
      "Supports cellular energy metabolism and DNA repair",
      "Activates sirtuins and PARPs involved in longevity pathways",
      "Impressive anti-aging results in animal models",
    ],
    dosageNotes:
      "NR: 300-1000 mg daily. NMN: 250-1000 mg daily. Often taken in the morning. Sublingual NMN may improve bioavailability.",
    sideEffects: [
      "Generally well-tolerated",
      "Mild GI discomfort",
      "Flushing (less than with niacin)",
      "Insomnia if taken late in the day",
    ],
    tags: ["nad+", "longevity", "anti-aging", "sirtuin"],
    scores: { longevity: 55, energy: 45, recovery: 35, memory: 30 },
  },
  {
    slug: "nadh",
    name: "NADH",
    category: "supplement",
    summary:
      "The reduced form of NAD+ that directly participates in mitochondrial electron transport. Marketed for energy, cognitive function, and chronic fatigue syndrome.",
    quickVerdict:
      "Limited but interesting evidence for chronic fatigue syndrome. Oral bioavailability is questionable, and most energy claims exceed the evidence base.",
    evidenceScore: 30,
    researchNotes:
      "A small crossover RCT found NADH (10 mg) improved symptoms in 31% of CFS patients vs. 8% placebo. It serves as a direct electron donor in Complex I of the electron transport chain. Oral stability and bioavailability are concerns that enteric-coated formulations attempt to address.",
    cautions:
      "Unstable in acidic environments; requires enteric coating. Limited safety data for long-term high-dose use.",
    caveats:
      "The landmark CFS study was small. Oral NADH bioavailability is problematic. Whether oral NADH meaningfully increases cellular NADH levels is debated. NAD+ precursors (NMN, NR) may be more practical.",
    benefits: [
      "Direct electron donor in mitochondrial energy production",
      "May improve symptoms in chronic fatigue syndrome",
      "Supports dopamine and ATP synthesis",
    ],
    dosageNotes:
      "Typical doses: 5-20 mg daily on an empty stomach. Enteric-coated formulations recommended. Usually taken in the morning.",
    sideEffects: [
      "Generally well-tolerated",
      "Mild GI discomfort",
      "Overstimulation or anxiety in sensitive individuals",
    ],
    tags: ["mitochondrial", "energy", "chronic-fatigue"],
    scores: { energy: 32, focus: 25, recovery: 22 },
  },
  {
    slug: "nattokinase",
    name: "Nattokinase",
    category: "supplement",
    summary:
      "A fibrinolytic enzyme extracted from natto (fermented soybeans). It degrades fibrin and may support cardiovascular health by reducing blood clot risk and improving circulation.",
    quickVerdict:
      "Moderate evidence for fibrinolytic activity and blood pressure reduction. One of the better-studied fibrinolytic enzymes with a long history of safe use in Japan.",
    evidenceScore: 50,
    researchNotes:
      "Nattokinase degrades fibrin directly and enhances endogenous fibrinolysis by increasing tissue plasminogen activator. A meta-analysis of RCTs found significant blood pressure reduction (~5-7 mmHg systolic). It also reduces blood viscosity and may lower LDL cholesterol. Widely consumed in Japan with a long safety record.",
    cautions:
      "Contraindicated with anticoagulants. Discontinue 2 weeks before surgery. Avoid with bleeding disorders. Soy-derived; not suitable for severe soy allergy.",
    caveats:
      "Fibrinolytic activity is demonstrated, but clinical cardiovascular outcome data (MI, stroke prevention) from RCTs is absent. Blood pressure effects are modest. Product standardization (in FU units) varies.",
    benefits: [
      "Degrades fibrin and reduces blood viscosity",
      "Modest blood pressure reduction in meta-analyses",
      "Long safety history in Japanese dietary tradition",
    ],
    dosageNotes:
      "Typical dose: 2000-4000 FU (fibrinolysis units) daily, equivalent to approximately 100-200 mg. Take on empty stomach for best absorption.",
    sideEffects: [
      "Increased bleeding risk",
      "GI discomfort",
      "Rare allergic reactions (soy-derived)",
    ],
    tags: ["fibrinolytic", "cardiovascular", "fermented"],
    scores: { longevity: 45 },
  },
  {
    slug: "nobiletin",
    name: "Nobiletin",
    category: "supplement",
    summary:
      "A polymethoxylated flavone found in citrus peel, particularly tangerines. Shows potent circadian rhythm-enhancing and metabolic benefits in animal models.",
    quickVerdict:
      "Exciting preclinical data for circadian rhythm modulation and metabolic health, but human clinical data is essentially absent. A compound to watch in longevity research.",
    evidenceScore: 22,
    researchNotes:
      "Nobiletin enhances circadian clock amplitude via ROR activation and prevents metabolic syndrome in high-fat-diet mice even without caloric restriction. It also shows anti-inflammatory, neuroprotective, and anti-tumor activity in preclinical models. Bioavailability is moderate and may be enhanced by other citrus flavonoids.",
    cautions:
      "Very limited human safety data. May interact with CYP enzymes. Concentrated supplemental forms are relatively new to market.",
    caveats:
      "Animal data is impressive but human translation is entirely unproven. Oral bioavailability and optimal dosing in humans are unknown.",
    benefits: [
      "Enhances circadian clock amplitude in preclinical models",
      "Prevents metabolic syndrome in animal studies",
      "Anti-inflammatory and neuroprotective properties",
    ],
    dosageNotes:
      "No established human dose. Animal studies use doses roughly equivalent to 200-500 mg in humans. Citrus peel extracts standardized to nobiletin are available.",
    sideEffects: [
      "Limited safety data",
      "Mild GI effects expected",
      "Unknown long-term profile",
    ],
    tags: ["citrus-flavone", "circadian", "metabolic"],
    scores: { longevity: 28, sleep: 22 },
  },
  {
    slug: "oleic-acid",
    name: "Oleic Acid",
    category: "supplement",
    summary:
      "The primary monounsaturated fatty acid in olive oil. A cornerstone of the Mediterranean diet associated with cardiovascular health, reduced inflammation, and improved lipid profiles.",
    quickVerdict:
      "Strong epidemiological evidence for cardiovascular benefits from olive oil consumption. Isolated supplementation is less studied than dietary olive oil intake.",
    evidenceScore: 65,
    researchNotes:
      "The PREDIMED trial demonstrated that a Mediterranean diet supplemented with extra-virgin olive oil (rich in oleic acid) reduced cardiovascular events by 30%. Oleic acid replaces saturated fat in membranes, reduces LDL oxidation, and activates AMPK. FDA allows a qualified health claim for oleic acid and cardiovascular risk reduction.",
    cautions:
      "High caloric density. Benefits are strongest in context of overall dietary pattern rather than isolated supplementation.",
    caveats:
      "PREDIMED benefits may reflect the whole olive oil matrix (including polyphenols) rather than oleic acid alone. Isolated oleic acid supplementation has less evidence than olive oil consumption.",
    benefits: [
      "Cardiovascular risk reduction in PREDIMED and other trials",
      "Improves lipid profile by raising HDL and lowering LDL",
      "Anti-inflammatory properties and reduced LDL oxidation",
    ],
    dosageNotes:
      "Best obtained from extra-virgin olive oil: 2-4 tablespoons daily (providing ~15-30 g oleic acid). Supplement forms exist but dietary intake is preferred.",
    sideEffects: [
      "Generally very well-tolerated",
      "Caloric contribution (9 kcal/g fat)",
      "GI discomfort at very high doses",
    ],
    tags: ["monounsaturated-fat", "mediterranean-diet", "cardiovascular"],
    scores: { longevity: 60 },
  },
  {
    slug: "omega-3",
    name: "Omega-3 Fatty Acids",
    category: "supplement",
    summary:
      "Essential polyunsaturated fatty acids (EPA and DHA) with anti-inflammatory properties. Among the most studied supplements, with evidence spanning cardiovascular, neurological, and inflammatory conditions.",
    quickVerdict:
      "Strong evidence for triglyceride reduction and cardiovascular benefit at therapeutic doses. One of the best-supported supplements overall, though recent mega-trials have tempered some earlier enthusiasm.",
    evidenceScore: 82,
    researchNotes:
      "REDUCE-IT showed high-dose EPA (4g icosapent ethyl) reduced cardiovascular events by 25%. Omega-3s reduce triglycerides dose-dependently. DHA is critical for brain structure and development. Anti-inflammatory via specialized pro-resolving mediators (resolvins, protectins). VITAL trial showed modest benefit for MI reduction but not overall cardiovascular events at standard doses.",
    cautions:
      "High doses increase bleeding risk. Fish oil may contain mercury and PCBs if not properly purified. May increase LDL slightly at high doses. Fishy aftertaste and burping common.",
    caveats:
      "Cardiovascular benefits are strongest at high doses (2-4 g EPA+DHA) and for triglyceride-focused outcomes. Standard 1 g fish oil doses may have more modest effects. EPA and DHA have somewhat different effect profiles.",
    benefits: [
      "Reduces triglycerides dose-dependently",
      "REDUCE-IT showed cardiovascular event reduction with high-dose EPA",
      "Anti-inflammatory via specialized pro-resolving mediators",
      "DHA supports brain structure and cognitive function",
    ],
    dosageNotes:
      "General health: 1-2 g combined EPA+DHA daily. Triglyceride reduction: 2-4 g EPA+DHA daily. Take with fatty meals for absorption. Choose products tested for purity.",
    sideEffects: [
      "Fishy aftertaste and burping",
      "GI discomfort",
      "Increased bleeding risk at high doses",
      "Slight LDL increase possible with DHA",
    ],
    tags: ["essential-fatty-acid", "anti-inflammatory", "cardiovascular"],
    scores: { longevity: 70, mood: 50, recovery: 45, focus: 40, immunity: 40, pain: 40 },
  },
  {
    slug: "oxaloacetate",
    name: "Oxaloacetate",
    category: "supplement",
    summary:
      "A Krebs cycle intermediate that mimics caloric restriction by shifting the NAD+/NADH ratio. Marketed for longevity and energy, with limited but intriguing early research.",
    quickVerdict:
      "Interesting caloric restriction mimetic mechanism, but human evidence is very preliminary. One small trial showed reduced brain glutamate levels. An early-stage longevity compound.",
    evidenceScore: 20,
    researchNotes:
      "Oxaloacetate supplementation shifts the cytoplasmic NAD+/NADH ratio, mimicking aspects of caloric restriction. Animal studies show lifespan extension in C. elegans. One small human trial found it reduced brain glutamate levels (measured by MRS). Thermally stabilized forms (as benaGene or enOXA) are required for oral supplementation.",
    cautions:
      "Very limited human safety data. Chemically unstable; requires specific stabilization. Expensive.",
    caveats:
      "Animal lifespan data is in simple organisms only. The single human brain study was very small. Caloric restriction mimicry is theoretical and unproven to extend human lifespan. Very early-stage research.",
    benefits: [
      "Caloric restriction mimetic via NAD+/NADH ratio modulation",
      "May reduce brain glutamate levels",
      "Krebs cycle intermediate supporting energy metabolism",
    ],
    dosageNotes:
      "Typical supplement doses: 100-200 mg thermally stabilized oxaloacetate daily. Must be in stabilized form as raw oxaloacetate degrades rapidly.",
    sideEffects: [
      "Limited safety data",
      "GI discomfort",
      "Hunger or fatigue (CR mimetic effects)",
    ],
    tags: ["caloric-restriction-mimetic", "krebs-cycle", "longevity"],
    scores: { longevity: 25, energy: 20 },
  },
];
