import type { SeedCompound } from "../seed-compounds";

export const NOOTROPIC_COMPOUNDS: SeedCompound[] = [
  {
    slug: "9-me-bc",
    name: "9-ME-BC",
    category: "nootropic",
    summary:
      "A beta-carboline derivative that upregulates tyrosine hydroxylase and dopaminergic neurotrophic factors in rodent models. Human safety data is essentially absent.",
    quickVerdict:
      "Intriguing preclinical dopaminergic profile, but no human trials exist and photosensitivity risk is a serious concern.",
    evidenceScore: 15,
    researchNotes:
      "Rodent studies show increased dopamine synthesis and dendritic outgrowth in substantia nigra neurons. No published human pharmacokinetic or safety data.",
    cautions:
      "Strongly photosensitizing — UV exposure during use could cause DNA damage. No human safety profile established.",
    caveats:
      "All evidence is preclinical. The gap between rodent dopaminergic data and human cognitive outcomes is large.",
    benefits: [
      "Upregulates tyrosine hydroxylase in animal models",
      "Shows neurotrophic activity in dopaminergic neurons in vitro",
    ],
    dosageNotes:
      "No validated human dosing exists. Online reports typically cite 10–30 mg/day but this is not evidence-based.",
    sideEffects: ["Severe photosensitivity", "Unknown long-term risks"],
    tags: ["experimental", "dopaminergic", "research-only"],
    scores: { focus: 30, mood: 25, energy: 25 },
  },
  {
    slug: "adamax",
    name: "Adamax",
    category: "nootropic",
    summary:
      "A synthetic noopept analog featuring an adamantane moiety, reportedly designed to enhance oral bioavailability and duration relative to noopept.",
    quickVerdict:
      "Extremely limited data even by research-chemical standards. Most information is anecdotal from self-experimenters.",
    evidenceScore: 10,
    researchNotes:
      "No peer-reviewed human or animal studies are readily available. Claims derive from vendor descriptions and user self-reports.",
    cautions:
      "Completely uncharacterized safety profile. Not approved for human use anywhere.",
    caveats:
      "Without published research, any claimed mechanism or benefit is speculative.",
    benefits: [
      "Anecdotal reports of improved verbal fluency",
      "Claimed longer duration of action than noopept",
    ],
    dosageNotes:
      "No validated dosing exists. Anecdotal reports use 10–20 mg sublingually.",
    sideEffects: ["Unknown — no safety data available"],
    tags: ["experimental", "research-only", "uncharacterized"],
    scores: { memory: 20, focus: 20 },
  },
  {
    slug: "adrafinil",
    name: "Adrafinil",
    category: "nootropic",
    summary:
      "A prodrug of modafinil that is converted in the liver to its active metabolite. Originally developed in France for narcolepsy-related drowsiness.",
    quickVerdict:
      "Functionally equivalent to modafinil after hepatic conversion, but adds liver-load concerns and slower onset.",
    evidenceScore: 55,
    researchNotes:
      "Clinical data from the 1980s–90s in elderly patients with vigilance disorders. Largely superseded by modafinil itself. Hepatotoxicity monitoring was recommended during original prescribing.",
    cautions:
      "Hepatotoxicity risk with chronic use — liver enzymes should be monitored. Not available by prescription in most countries.",
    caveats:
      "Most relevant clinical evidence actually pertains to modafinil. Adrafinil-specific human data is older and sparser.",
    benefits: [
      "Promotes wakefulness via modafinil conversion",
      "Available without prescription in some jurisdictions",
      "May improve vigilance in sleep-deprived states",
    ],
    dosageNotes:
      "Historically 600–1200 mg/day in divided doses. Higher doses than modafinil are required due to incomplete conversion.",
    sideEffects: [
      "Elevated liver enzymes with chronic use",
      "Headache",
      "Nausea",
      "Insomnia if dosed late",
    ],
    tags: ["wakefulness", "prodrug", "hepatic-load"],
    scores: { focus: 65, energy: 65, mood: 35 },
  },
  {
    slug: "apoaequorin",
    name: "Apoaequorin",
    category: "nootropic",
    summary:
      "A calcium-binding protein originally isolated from the jellyfish Aequorea victoria, marketed under the brand name Prevagen as a memory supplement.",
    quickVerdict:
      "The FTC challenged Prevagen's advertising claims. The single company-funded trial showed no overall cognitive benefit on the primary endpoint.",
    evidenceScore: 12,
    researchNotes:
      "One manufacturer-sponsored RCT (n=218) failed its primary endpoint. A post-hoc subgroup showed modest memory improvement, but post-hoc findings are hypothesis-generating at best. The protein is likely digested before reaching the brain.",
    cautions:
      "Generally considered safe but expensive relative to evidence. FTC and NY Attorney General filed deceptive-advertising complaints.",
    caveats:
      "As a protein, apoaequorin is almost certainly degraded in the GI tract. The mechanism by which oral ingestion could affect brain calcium is unclear.",
    benefits: [
      "Generally well tolerated",
      "Post-hoc subgroup showed modest verbal-learning improvement",
    ],
    dosageNotes: "Marketed at 10 mg/day (Prevagen Regular).",
    sideEffects: ["Headache", "Dizziness", "Nausea (rare)"],
    tags: ["marketed", "weak-evidence", "jellyfish-derived"],
    scores: { memory: 15 },
  },
  {
    slug: "armodafinil",
    name: "Armodafinil",
    category: "nootropic",
    summary:
      "The R-enantiomer of modafinil, FDA-approved for narcolepsy, obstructive sleep apnea, and shift-work disorder. Longer plasma half-life than racemic modafinil.",
    quickVerdict:
      "A well-characterized prescription wakefulness agent with robust clinical-trial support for its approved indications.",
    evidenceScore: 82,
    researchNotes:
      "Multiple large RCTs support efficacy for excessive sleepiness in narcolepsy and shift-work disorder. Maintains higher late-day plasma levels than modafinil, which may benefit sustained wakefulness.",
    cautions:
      "Prescription-only. Contraindicated with certain cardiac conditions. Reduces efficacy of hormonal contraceptives. Risk of Stevens-Johnson syndrome (rare).",
    caveats:
      "Off-label cognitive-enhancement data in healthy individuals is limited. Most trials are in clinical populations with excessive sleepiness.",
    benefits: [
      "FDA-approved for wakefulness in specific conditions",
      "Longer duration of action than racemic modafinil",
      "Well-characterized safety profile from clinical trials",
    ],
    dosageNotes:
      "150–250 mg once daily in the morning (approved dosing). Lower doses may suffice for off-label use.",
    sideEffects: [
      "Headache",
      "Nausea",
      "Insomnia",
      "Anxiety",
      "Dizziness",
    ],
    tags: ["prescription", "wakefulness", "well-studied"],
    scores: { focus: 80, energy: 82, mood: 40 },
  },
  {
    slug: "bromantane",
    name: "Bromantane",
    category: "nootropic",
    summary:
      "A synthetic adamantane derivative developed in Russia as an actoprotector — a class intended to enhance physical performance without stimulant side effects. Also studied for anxiolytic properties.",
    quickVerdict:
      "Russian clinical studies suggest combined anxiolytic and mild stimulant properties, but Western peer-reviewed evidence is thin.",
    evidenceScore: 30,
    researchNotes:
      "Approved in Russia (Ladasten) for neurasthenia. Proposed mechanism involves upregulation of tyrosine hydroxylase and aromatic L-amino acid decarboxylase gene expression. Western literature is sparse.",
    cautions:
      "Banned by WADA. Not approved outside Russia. Long-term safety data is limited.",
    caveats:
      "Most studies are in Russian-language journals and have not been independently replicated in Western settings.",
    benefits: [
      "Reported combined anxiolytic and activating effects",
      "May upregulate dopamine synthesis enzymes",
      "Does not appear to cause dependence in available data",
    ],
    dosageNotes:
      "Russian prescribing used 50–100 mg/day. Self-experimenters commonly report 25–100 mg.",
    sideEffects: ["Headache", "Insomnia at higher doses", "Skin irritation (topical)"],
    tags: ["actoprotector", "russian-research", "dopaminergic"],
    scores: { focus: 45, anxiety: 50, energy: 45, mood: 40 },
  },
  {
    slug: "centrophenoxine",
    name: "Centrophenoxine",
    category: "nootropic",
    summary:
      "An ester of DMAE and pCPA (parachlorophenoxyacetic acid) studied since the 1960s as a possible anti-aging and memory-enhancing compound.",
    quickVerdict:
      "Older clinical data suggests modest cognitive benefits in elderly populations, but modern rigorous trials are lacking.",
    evidenceScore: 35,
    researchNotes:
      "Studies from the 1970s–80s reported reductions in lipofuscin accumulation and modest memory improvements in elderly subjects. Methodological quality of older trials is poor by modern standards.",
    cautions:
      "May potentiate cholinergic effects. Avoid concurrent use with anticholinergics or cholinesterase inhibitors without medical supervision.",
    caveats:
      "Evidence base is dated. Modern replication with rigorous methodology is absent.",
    benefits: [
      "May reduce lipofuscin deposits in aging neurons",
      "Older studies suggest modest memory improvement in elderly",
      "Raises brain acetylcholine precursor levels",
    ],
    dosageNotes: "Common range is 250–750 mg/day in divided doses.",
    sideEffects: [
      "Nausea",
      "Headache",
      "GI discomfort",
      "Insomnia if taken late",
    ],
    tags: ["cholinergic", "anti-aging", "legacy-research"],
    scores: { memory: 40, longevity: 30, focus: 30 },
  },
  {
    slug: "citicoline",
    name: "Citicoline",
    category: "nootropic",
    summary:
      "An endogenous nucleotide (CDP-choline) involved in phosphatidylcholine synthesis. Studied extensively as a neuroprotectant in stroke and for age-related cognitive decline.",
    quickVerdict:
      "Good safety profile and moderate evidence for cognitive support in aging populations. One of the better-evidenced cholinergic nootropics.",
    evidenceScore: 62,
    researchNotes:
      "Meta-analyses of stroke trials show mixed results for functional recovery. Trials in age-related cognitive decline and glaucoma show modest positive effects. Well-absorbed orally with good CNS penetration.",
    cautions:
      "Generally well tolerated. Rare cases of insomnia, headache, or digestive upset. Interactions with levodopa are possible.",
    caveats:
      "Stroke-recovery evidence is inconsistent. Cognitive benefits in healthy young adults are less established.",
    benefits: [
      "Supports phospholipid membrane synthesis",
      "Modest improvements in memory and attention in older adults",
      "Well tolerated with a strong safety record",
    ],
    dosageNotes:
      "250–1000 mg/day orally. The 500 mg dose is most commonly used in cognitive trials.",
    sideEffects: ["Headache (uncommon)", "Insomnia", "GI discomfort"],
    tags: ["cholinergic", "neuroprotective", "well-tolerated"],
    scores: { memory: 55, focus: 50, longevity: 35 },
  },
  {
    slug: "dihexa",
    name: "Dihexa",
    category: "nootropic",
    summary:
      "A synthetic hexapeptide analog of angiotensin IV, reported to be millions of times more potent than BDNF at promoting hepatocyte growth factor signaling in vitro.",
    quickVerdict:
      "Striking in-vitro and rodent data for synaptogenesis, but zero human trials and serious safety unknowns — including potential cancer-growth risk from HGF/c-Met activation.",
    evidenceScore: 12,
    researchNotes:
      "Rodent studies show cognitive rescue in scopolamine and AD models. Mechanism involves HGF/c-Met pathway activation. The HGF/c-Met axis is also implicated in tumor growth and metastasis, raising theoretical oncological concerns.",
    cautions:
      "HGF/c-Met activation is a known oncogenic pathway. No human safety or toxicology data. Completely experimental.",
    caveats:
      "Extraordinary in-vitro potency claims do not translate directly to in-vivo cognitive effects. Cancer risk is a serious theoretical concern.",
    benefits: [
      "Potent synaptogenic activity in rodent models",
      "Rescued memory deficits in animal dementia models",
    ],
    dosageNotes:
      "No human dosing data. Self-experimenters report 10–20 mg sublingually or intranasally — this is not evidence-based.",
    sideEffects: ["Theoretical cancer risk via HGF/c-Met", "Unknown — no human data"],
    tags: ["experimental", "high-risk", "research-only"],
    scores: { memory: 25, focus: 20 },
  },
  {
    slug: "emoxypine",
    name: "Emoxypine",
    category: "nootropic",
    summary:
      "A synthetic analog of pyridoxine (vitamin B6) developed in Russia and marketed as Mexidol. Studied as an antioxidant and anxiolytic with membrane-stabilizing properties.",
    quickVerdict:
      "Approved in Russia for cerebrovascular conditions and anxiety. Western clinical data is limited, but the safety profile appears benign.",
    evidenceScore: 30,
    researchNotes:
      "Russian clinical trials report neuroprotective and anxiolytic effects in cerebral ischemia and alcohol withdrawal. Mechanism involves free-radical scavenging and modulation of GABA-benzodiazepine receptors. Few studies in Western journals.",
    cautions:
      "Not approved outside Russia and some CIS countries. Limited long-term safety data in Western literature.",
    caveats:
      "Most evidence comes from Russian clinical practice. Independent Western replication is sparse.",
    benefits: [
      "Antioxidant and membrane-stabilizing properties",
      "Reported anxiolytic effects in Russian clinical use",
      "May protect against ischemic neuronal damage",
    ],
    dosageNotes:
      "Russian prescribing typically uses 125–250 mg two to three times daily (oral or injectable).",
    sideEffects: ["Nausea", "Drowsiness", "Allergic reactions (rare)"],
    tags: ["russian-approved", "antioxidant", "anxiolytic"],
    scores: { anxiety: 40, stress: 35, longevity: 25 },
  },
  {
    slug: "hydergine",
    name: "Hydergine",
    category: "nootropic",
    summary:
      "An ergot alkaloid mixture (co-dergocrine mesylate) that was one of the first compounds marketed for age-related cognitive decline. Approved in many countries since the 1950s.",
    quickVerdict:
      "Decades of clinical use and a large trial base, though effect sizes are modest and modern Alzheimer's drugs have largely displaced it.",
    evidenceScore: 50,
    researchNotes:
      "A Cochrane review found statistically significant but clinically modest improvements in cognitive function in dementia patients. Mechanism involves multiple monoamine receptors and cerebral blood flow. Largely obsolete in current clinical practice.",
    cautions:
      "Contraindicated in psychosis and severe bradycardia. May cause hypotension in sensitive individuals.",
    caveats:
      "Most trials predate modern diagnostic criteria for dementia subtypes. Clinical relevance of observed effect sizes is debatable.",
    benefits: [
      "One of the most extensively studied nootropics historically",
      "Modest cognitive improvements in elderly with dementia",
      "Multiple proposed mechanisms including vasodilation",
    ],
    dosageNotes:
      "Original prescribing used 1–4.5 mg/day sublingually or orally.",
    sideEffects: [
      "Nausea",
      "Headache",
      "Nasal congestion",
      "Hypotension",
    ],
    tags: ["legacy-drug", "ergot-derived", "vasodilator"],
    scores: { memory: 40, focus: 35, longevity: 30 },
  },
  {
    slug: "hydrafinil",
    name: "Hydrafinil",
    category: "nootropic",
    summary:
      "A fluorenol compound (9-fluorenol) structurally unrelated to modafinil but sharing wakefulness-promoting properties. Not approved as a pharmaceutical anywhere.",
    quickVerdict:
      "Limited animal data suggests eugeroic properties. No human clinical trials; it remains an unregulated research chemical.",
    evidenceScore: 15,
    researchNotes:
      "A single Cephalon patent application reported greater wakefulness-promoting potency than modafinil in rodents, but the compound was never developed clinically.",
    cautions:
      "No human safety data. Unknown drug interactions. Not approved for any indication.",
    caveats:
      "Claims of superiority to modafinil are based on a single rodent study in a patent application, not peer-reviewed research.",
    benefits: [
      "Reported eugeroic activity in rodent models",
      "Anecdotal reports of clean wakefulness",
    ],
    dosageNotes:
      "No validated dosing. Self-experimenters report 50–150 mg, but this is not evidence-based.",
    sideEffects: ["Headache (anecdotal)", "Insomnia", "Unknown long-term risks"],
    tags: ["experimental", "eugeroic", "research-only"],
    scores: { focus: 35, energy: 40 },
  },
  {
    slug: "huperzine-a",
    name: "Huperzine A",
    category: "nootropic",
    summary:
      "A sesquiterpene alkaloid isolated from the club moss Huperzia serrata that potently and reversibly inhibits acetylcholinesterase. Used traditionally in Chinese medicine.",
    quickVerdict:
      "Multiple Chinese RCTs report memory improvements in Alzheimer's patients, though trial quality is variable. One of the more evidence-backed natural nootropics.",
    evidenceScore: 55,
    researchNotes:
      "A Cochrane review found beneficial effects on cognitive function in AD patients but noted methodological concerns in the included Chinese trials. Phase II trials in the US showed mixed results.",
    cautions:
      "Potent AChE inhibitor — avoid stacking with donepezil, galantamine, or other cholinesterase inhibitors. Contraindicated with certain cardiac arrhythmias.",
    caveats:
      "Most positive trials are from China with methodological limitations. US Phase II results were less convincing.",
    benefits: [
      "Potent and reversible acetylcholinesterase inhibition",
      "Multiple trials show memory improvement in AD",
      "Neuroprotective against glutamate toxicity in vitro",
    ],
    dosageNotes:
      "Typical range is 50–200 mcg twice daily. Cycle use (e.g., 2–4 weeks on, 1 week off) is commonly recommended due to long half-life.",
    sideEffects: [
      "Nausea",
      "Diarrhea",
      "Vivid dreams",
      "Muscle cramps",
    ],
    tags: ["cholinergic", "natural", "ache-inhibitor"],
    scores: { memory: 60, focus: 50 },
  },
  {
    slug: "lions-mane",
    name: "Lion's Mane",
    category: "nootropic",
    summary:
      "An edible medicinal mushroom (Hericium erinaceus) containing hericenones and erinacines that stimulate nerve growth factor synthesis in vitro and in animal models.",
    quickVerdict:
      "Small human trials suggest modest cognitive benefits in older adults with mild impairment. Broader claims about neurogenesis in healthy young adults outrun current data.",
    evidenceScore: 45,
    researchNotes:
      "A 2009 Japanese RCT (n=30) in adults with mild cognitive impairment showed improvements on a cognitive scale over 16 weeks. A few smaller trials show anxiolytic and mood effects. NGF stimulation is well-demonstrated in vitro but CNS relevance of oral dosing is unclear.",
    cautions:
      "Rare allergic reactions, especially in individuals with mushroom sensitivities. Theoretical concern about worsening asthma.",
    caveats:
      "NGF does not readily cross the blood-brain barrier; oral mushroom extract stimulating central NGF is plausible but unconfirmed in humans.",
    benefits: [
      "May improve cognitive function in older adults with mild impairment",
      "Stimulates NGF synthesis in preclinical models",
      "Generally well tolerated",
    ],
    dosageNotes:
      "500–1000 mg of extract (standardized to hericenones/erinacines) twice daily with meals.",
    sideEffects: ["GI discomfort", "Skin rash in sensitive individuals"],
    tags: ["mushroom", "neuroprotective", "cognition"],
    scores: { memory: 55, focus: 50, mood: 45 },
  },
  {
    slug: "methylene-blue",
    name: "Methylene Blue",
    category: "nootropic",
    summary:
      "A synthetic thiazine dye first produced in 1876, used medically for methemoglobinemia and studied for mitochondrial enhancement, tau aggregation inhibition, and neuroprotection.",
    quickVerdict:
      "Genuine pharmaceutical with established medical uses. Cognitive-enhancement and anti-aging applications are supported by preclinical data but not yet by robust human nootropic trials.",
    evidenceScore: 42,
    researchNotes:
      "Acts as an alternative mitochondrial electron carrier at low doses. Phase III trials for Alzheimer's (as LMTX/TRx0237) failed primary endpoints but showed effects in monotherapy subgroups. Low-dose use for cognitive enhancement is largely preclinical.",
    cautions:
      "Serotonin syndrome risk when combined with SSRIs, SNRIs, or MAOIs — this is a serious and potentially fatal interaction. G6PD deficiency is a contraindication.",
    caveats:
      "Hormetic dosing curve — low doses enhance mitochondrial function while high doses impair it. Nootropic claims derive mostly from animal studies.",
    benefits: [
      "Enhances mitochondrial electron transport at low doses",
      "FDA-approved for methemoglobinemia",
      "Preclinical evidence for neuroprotection and tau inhibition",
    ],
    dosageNotes:
      "Nootropic community uses 0.5–2 mg/kg. Only pharmaceutical-grade (USP) should be used — industrial and aquarium grades contain contaminants.",
    sideEffects: [
      "Blue-green discoloration of urine and stool",
      "Serotonin syndrome with serotonergic drugs",
      "Nausea at higher doses",
    ],
    tags: ["mitochondrial", "pharmaceutical", "hormetic"],
    scores: { memory: 40, focus: 35, longevity: 40, energy: 30 },
  },
  {
    slug: "modafinil",
    name: "Modafinil",
    category: "nootropic",
    summary:
      "A prescription eugeroic (wakefulness-promoting agent) FDA-approved for narcolepsy, shift-work disorder, and obstructive sleep apnea. Widely used off-label for cognitive enhancement.",
    quickVerdict:
      "The most evidence-backed pharmaceutical nootropic. Robust data for wakefulness; moderate evidence for cognitive benefits in sleep-deprived individuals.",
    evidenceScore: 78,
    researchNotes:
      "Systematic reviews confirm wakefulness-promoting effects and modest improvements in executive function, working memory, and attention — primarily in sleep-deprived populations. Benefits in well-rested healthy adults are less consistent. Mechanism not fully elucidated but involves dopamine transporter inhibition.",
    cautions:
      "Prescription-only. Rare but serious risk of Stevens-Johnson syndrome. Reduces efficacy of hormonal contraceptives. Potential for psychological dependence.",
    caveats:
      "Cognitive benefits in well-rested individuals are modest and inconsistent across studies. Not a general intelligence enhancer.",
    benefits: [
      "Strong evidence for sustained wakefulness and alertness",
      "Improves executive function in sleep-deprived populations",
      "Lower abuse potential compared to traditional stimulants",
    ],
    dosageNotes:
      "100–200 mg once daily in the morning. Lower doses (50–100 mg) may suffice for some individuals.",
    sideEffects: [
      "Headache",
      "Nausea",
      "Anxiety",
      "Insomnia",
      "Decreased appetite",
    ],
    tags: ["prescription", "eugeroic", "well-studied"],
    scores: { focus: 82, energy: 80, mood: 40, memory: 45 },
  },
  {
    slug: "noopept",
    name: "Noopept",
    category: "nootropic",
    summary:
      "A synthetic dipeptide (N-phenylacetyl-L-prolylglycine ethyl ester) developed in Russia, proposed to modulate AMPA and NMDA receptors and increase BDNF/NGF expression.",
    quickVerdict:
      "Approved in Russia for cognitive disorders. Western evidence is limited to preclinical and a few small clinical studies. Popular among nootropic users for perceived clarity.",
    evidenceScore: 38,
    researchNotes:
      "Russian clinical trials report cognitive benefits in patients with organic brain disorders and post-concussion syndrome. Animal studies show anxiolytic and pro-cognitive effects. Western peer-reviewed literature is sparse.",
    cautions:
      "Not approved outside Russia. May interact with other psychoactive substances. Avoid in pregnancy.",
    caveats:
      "Most clinical evidence is from Russian studies not replicated independently in Western trials.",
    benefits: [
      "Increases BDNF and NGF in rodent hippocampus",
      "Reported cognitive improvement in post-concussion patients in Russian trials",
      "Active at very low doses (10–30 mg)",
    ],
    dosageNotes:
      "10–30 mg/day sublingually or orally, typically in 2–3 divided doses. Cycle use is often recommended.",
    sideEffects: [
      "Irritability",
      "Headache (possibly from choline depletion)",
      "Insomnia",
    ],
    tags: ["russian-approved", "neuropeptide", "low-dose"],
    scores: { memory: 50, focus: 50, anxiety: 35, mood: 35 },
  },
  {
    slug: "nsi-189",
    name: "NSI-189",
    category: "nootropic",
    summary:
      "A benzylpiperazine-aminopyridine compound developed by Neuralstem Inc. that stimulates hippocampal neurogenesis in vitro. Studied in Phase II trials for major depressive disorder.",
    quickVerdict:
      "Phase II depression trials showed patient-reported improvement but failed clinician-rated primary endpoints. Neurogenic mechanism is novel but clinical utility remains unproven.",
    evidenceScore: 28,
    researchNotes:
      "Phase I showed safety and tolerability. Phase II for MDD showed improvement on patient-reported scales (SDQ) but not on the primary MADRS endpoint. Hippocampal volume increases were observed in a small imaging substudy.",
    cautions:
      "Investigational compound — not approved for any indication. Long-term safety unknown. Development status uncertain.",
    caveats:
      "Failing the primary endpoint in Phase II is a significant setback. Patient-reported improvements could reflect expectation effects.",
    benefits: [
      "Stimulates hippocampal neurogenesis in preclinical models",
      "Showed hippocampal volume increase in a small substudy",
      "Patient-reported mood improvement in Phase II",
    ],
    dosageNotes:
      "Phase II used 40 mg/day orally. Self-experimenters report 20–40 mg/day.",
    sideEffects: ["Headache", "Dizziness", "Insomnia", "GI discomfort"],
    tags: ["neurogenic", "investigational", "antidepressant-candidate"],
    scores: { mood: 40, memory: 30, stress: 25 },
  },
  {
    slug: "p7c3",
    name: "P7C3",
    category: "nootropic",
    summary:
      "An aminopropyl carbazole discovered through an in-vivo screen for compounds that enhance hippocampal neurogenesis. Studied preclinically for neuroprotection across multiple disease models.",
    quickVerdict:
      "Impressive and broad preclinical neuroprotective profile, but no human trials have been conducted. Purely a research tool compound.",
    evidenceScore: 10,
    researchNotes:
      "Rodent studies show neuroprotective effects in models of Parkinson's, ALS, TBI, and age-related cognitive decline. Mechanism involves NAD salvage pathway (NAMPT activation). No human pharmacokinetic or safety data.",
    cautions:
      "No human safety data whatsoever. Not available as a commercial product. Source purity from research suppliers varies.",
    caveats:
      "A promising research probe, but the leap from rodent neuroprotection to human cognitive enhancement is enormous and untested.",
    benefits: [
      "Broad neuroprotective profile in rodent disease models",
      "Novel mechanism via NAMPT/NAD pathway",
    ],
    dosageNotes:
      "No human dosing data exists. Used only in laboratory research settings.",
    sideEffects: ["Unknown — no human data available"],
    tags: ["experimental", "neuroprotective", "research-only"],
    scores: { memory: 15, longevity: 20 },
  },
  {
    slug: "phenibut",
    name: "Phenibut",
    category: "nootropic",
    summary:
      "A synthetic GABA analog (beta-phenyl-GABA) that crosses the blood-brain barrier and acts on GABA-B receptors. Developed in Russia and used there as an anxiolytic since the 1960s.",
    quickVerdict:
      "Effective anxiolytic but carries significant dependence and withdrawal risks. Tolerance develops rapidly, and withdrawal can be severe and medically dangerous.",
    evidenceScore: 45,
    researchNotes:
      "Approved in Russia for anxiety, insomnia, and vestibular disorders. Acts primarily on GABA-B receptors (similar to baclofen) with additional effects on voltage-gated calcium channels. Western case reports of dependence and severe withdrawal are increasing.",
    cautions:
      "High dependence potential with daily use. Withdrawal can include seizures, psychosis, and rebound anxiety. Should not be combined with alcohol or other GABAergics. Not approved for medical use in most Western countries.",
    caveats:
      "Anxiolytic effect is real but risk-benefit ratio is unfavorable for chronic use. Tolerance develops within days of daily dosing.",
    benefits: [
      "Potent anxiolytic effect",
      "May improve sleep quality acutely",
      "Crosses blood-brain barrier unlike GABA itself",
    ],
    dosageNotes:
      "Russian prescribing: 250–1000 mg/day. Community consensus is to limit use to 1–2 times per week maximum to avoid dependence.",
    sideEffects: [
      "Dependence with regular use",
      "Severe withdrawal syndrome",
      "Drowsiness",
      "Nausea",
      "Tolerance",
    ],
    tags: ["gabaergic", "anxiolytic", "dependence-risk"],
    scores: { anxiety: 75, sleep: 65, stress: 60, mood: 50 },
  },
  {
    slug: "piritinol",
    name: "Piritinol",
    category: "nootropic",
    summary:
      "A semi-synthetic pyridoxine (vitamin B6) disulfide developed in the 1960s. Used in some European and Asian countries for cognitive support and as an anti-inflammatory.",
    quickVerdict:
      "Modest evidence for cognitive improvement in dementia from older European trials. Also used in rheumatoid arthritis. Rare but serious hepatic and autoimmune side effects limit enthusiasm.",
    evidenceScore: 38,
    researchNotes:
      "European trials from the 1980s–90s showed modest cognitive improvements in age-related dementia. Some evidence for efficacy in rheumatoid arthritis. Mechanism likely involves cholinergic modulation rather than vitamin B6 activity.",
    cautions:
      "Risk of cholestatic hepatitis and severe skin reactions (pemphigus-like). Liver function monitoring recommended.",
    caveats:
      "Older trial methodology. Rare but serious adverse reactions may outweigh modest cognitive benefits.",
    benefits: [
      "Modest cognitive improvement in elderly patients in older trials",
      "Anti-inflammatory properties",
      "Long clinical history in Europe and Asia",
    ],
    dosageNotes: "Typical clinical dosing: 200–600 mg/day in divided doses.",
    sideEffects: [
      "Nausea",
      "Cholestatic hepatitis (rare but serious)",
      "Pemphigus-like skin reactions",
      "GI upset",
    ],
    tags: ["pyridoxine-derivative", "european-approved", "anti-inflammatory"],
    scores: { memory: 35, focus: 30, pain: 25 },
  },
  {
    slug: "souvenaid",
    name: "Souvenaid",
    category: "nootropic",
    summary:
      "A medical food containing Fortasyn Connect — a specific combination of DHA, EPA, UMP, choline, B vitamins, and phospholipids designed to support synaptic membrane formation in early Alzheimer's disease.",
    quickVerdict:
      "The LipiDiDiet trial showed slowed brain atrophy and functional decline in prodromal AD over 3 years. Not a nootropic for healthy users but one of the few nutritional interventions with decent AD trial data.",
    evidenceScore: 52,
    researchNotes:
      "The Souvenir II trial showed improved memory in mild AD. The LipiDiDiet trial (n=311) demonstrated reduced brain atrophy and slowed clinical decline over 36 months in prodromal AD. Effects are specific to early disease stages.",
    cautions:
      "Designed for early Alzheimer's, not healthy cognition. Expensive. Not a substitute for medical care.",
    caveats:
      "Benefits are specific to prodromal/early AD populations. No evidence of cognitive enhancement in healthy individuals.",
    benefits: [
      "Slowed brain atrophy in the LipiDiDiet trial",
      "Improved memory scores in mild AD (Souvenir II)",
      "Well tolerated with a good safety profile",
    ],
    dosageNotes:
      "One 125 mL drink daily, providing the full Fortasyn Connect nutrient combination.",
    sideEffects: ["GI discomfort (uncommon)", "Fishy aftertaste"],
    tags: ["medical-food", "alzheimers", "synaptic-support"],
    scores: { memory: 45, longevity: 30 },
  },
  {
    slug: "sulbutiamine",
    name: "Sulbutiamine",
    category: "nootropic",
    summary:
      "A synthetic dimer of thiamine (vitamin B1) that crosses the blood-brain barrier more readily than thiamine itself. Developed in Japan and used in some countries for asthenia.",
    quickVerdict:
      "May reduce fatigue and improve alertness, particularly in thiamine-depleted states. Evidence for cognitive enhancement in healthy individuals is weak.",
    evidenceScore: 32,
    researchNotes:
      "Originally developed for chronic fatigue (asthenia) in Japan. Small studies suggest improvement in psychogenic erectile dysfunction and post-infectious fatigue. Mechanism involves upregulation of reticulothalamic glutamatergic transmission. Limited rigorous trial data.",
    cautions:
      "Possible habit-forming properties with chronic use. May cause irritability or mood instability at higher doses.",
    caveats:
      "Primarily useful in thiamine-deficient or fatigued states. Benefits in well-nourished, non-fatigued individuals are unsubstantiated.",
    benefits: [
      "Better brain penetration than thiamine",
      "May reduce chronic fatigue in depleted states",
      "Small positive effects on psychogenic erectile dysfunction",
    ],
    dosageNotes: "200–600 mg/day in divided doses. Often cycled to prevent tolerance.",
    sideEffects: [
      "Irritability at higher doses",
      "Insomnia",
      "Headache",
      "Possible tolerance with daily use",
    ],
    tags: ["thiamine-derivative", "anti-fatigue", "japanese-origin"],
    scores: { energy: 45, mood: 35, focus: 30, libido: 25 },
  },
  {
    slug: "sunifiram",
    name: "Sunifiram",
    category: "nootropic",
    summary:
      "A synthetic piperazine-derived AMPAkine structurally related to piracetam but reportedly 1000x more potent by weight in rodent models. Never tested in human clinical trials.",
    quickVerdict:
      "Potent in rodent memory models at microgram doses, but zero human data. The gulf between animal AMPAkine research and safe human use is vast.",
    evidenceScore: 10,
    researchNotes:
      "Rodent studies show memory enhancement via AMPA receptor potentiation, LTP facilitation, and CaMKII/PKC activation. Active at 0.001–1 mg/kg in mice. No human pharmacokinetic, efficacy, or safety data.",
    cautions:
      "No human safety data. AMPAkine overstimulation carries theoretical seizure risk. Not approved for any use.",
    caveats:
      "Extreme potency in rodents does not guarantee efficacy or safety in humans. Self-experimentation at this level carries real risk.",
    benefits: [
      "Potent memory enhancement in rodent models at low doses",
      "Facilitates long-term potentiation in hippocampal slices",
    ],
    dosageNotes:
      "No validated human dose. Self-experimenters report 4–10 mg sublingually.",
    sideEffects: ["Unknown — no human data", "Theoretical seizure risk"],
    tags: ["ampakine", "experimental", "research-only"],
    scores: { memory: 20, focus: 15 },
  },
  {
    slug: "unifiram",
    name: "Unifiram",
    category: "nootropic",
    summary:
      "A synthetic AMPAkine closely related to sunifiram, reported to be similarly potent in rodent memory paradigms. No human clinical data exists.",
    quickVerdict:
      "Nearly identical profile to sunifiram — potent rodent data, zero human evidence, and meaningful safety unknowns.",
    evidenceScore: 10,
    researchNotes:
      "Active in passive-avoidance and Morris water-maze paradigms in mice at very low doses. Proposed mechanism is AMPA receptor positive modulation. Published data is limited to a handful of Italian research papers.",
    cautions:
      "No human safety profile. Theoretical seizure risk from excessive AMPA potentiation. Not approved or regulated.",
    caveats:
      "Even less studied than sunifiram. The total published literature amounts to a few preclinical papers.",
    benefits: [
      "Anti-amnesic effects in rodent models at microgram doses",
      "Proposed AMPA-receptor positive modulation",
    ],
    dosageNotes:
      "No validated human dose. Online reports suggest 2–10 mg sublingually.",
    sideEffects: ["Unknown — no human data", "Theoretical excitotoxicity risk"],
    tags: ["ampakine", "experimental", "research-only"],
    scores: { memory: 20, focus: 15 },
  },
  {
    slug: "vinpocetine",
    name: "Vinpocetine",
    category: "nootropic",
    summary:
      "A semi-synthetic derivative of vincamine from the periwinkle plant (Vinca minor). Used in Europe and Asia for cerebrovascular disorders and cognitive decline.",
    quickVerdict:
      "Decades of clinical use in Europe with a reasonable safety profile. Evidence for cognitive enhancement is modest and mostly in cerebrovascular populations.",
    evidenceScore: 45,
    researchNotes:
      "Inhibits PDE1 and voltage-gated sodium channels, increases cerebral blood flow and glucose utilization. A Cochrane review found insufficient evidence to recommend for dementia, though individual trials show modest positive effects. Widely prescribed in Eastern Europe and Asia.",
    cautions:
      "FDA warning against use during pregnancy (potential fetal harm). May increase bleeding risk. Avoid combining with anticoagulants.",
    caveats:
      "Cochrane review was inconclusive. Heterogeneity in preparations and study quality makes definitive conclusions difficult.",
    benefits: [
      "Increases cerebral blood flow and glucose metabolism",
      "Long clinical track record in Europe",
      "Anti-inflammatory and neuroprotective properties in preclinical models",
    ],
    dosageNotes:
      "5–10 mg three times daily with meals (typical clinical dosing). Higher doses have been used in research settings.",
    sideEffects: [
      "Headache",
      "Facial flushing",
      "GI discomfort",
      "Dizziness",
    ],
    tags: ["cerebrovascular", "plant-derived", "pde-inhibitor"],
    scores: { memory: 45, focus: 40, longevity: 25 },
  },
];

export const RACETAM_COMPOUNDS: SeedCompound[] = [
  {
    slug: "aniracetam",
    name: "Aniracetam",
    category: "racetam",
    summary:
      "A fat-soluble racetam and AMPAkine that modulates AMPA receptors and metabotropic cholinergic transmission. Approved in some European countries for cognitive disorders.",
    quickVerdict:
      "Modest clinical evidence for anxiety and cognitive support in dementia. Popular among nootropic users for its anxiolytic qualities, but robust Western trial data is limited.",
    evidenceScore: 40,
    researchNotes:
      "Approved in Italy and Japan for cognitive impairment. Small trials show anxiolytic and pro-cognitive effects in elderly patients with cerebrovascular disease. Rapidly metabolized to N-anisoyl-GABA and other active metabolites. Western peer-reviewed trial data is sparse.",
    cautions:
      "Fat-soluble — must be taken with a fat source for absorption. Short half-life requires multiple daily doses.",
    caveats:
      "Most published clinical data is from the 1980s–90s with older methodology. Prescription status varies by country.",
    benefits: [
      "Anxiolytic properties without sedation in clinical reports",
      "AMPA receptor modulation supports synaptic plasticity",
      "Approved for cognitive disorders in several countries",
    ],
    dosageNotes:
      "Clinical: 1500 mg/day in divided doses. Nootropic use: 750–1500 mg/day taken with fat.",
    sideEffects: [
      "Headache",
      "Insomnia",
      "GI discomfort",
      "Anxiety in some users",
    ],
    tags: ["ampakine", "anxiolytic", "fat-soluble"],
    scores: { anxiety: 50, memory: 45, focus: 40, mood: 45 },
  },
  {
    slug: "brivaracetam",
    name: "Brivaracetam",
    category: "racetam",
    summary:
      "A high-affinity SV2A ligand and levetiracetam analog FDA-approved as adjunctive therapy for partial-onset seizures. Not used as a nootropic.",
    quickVerdict:
      "A well-studied prescription anticonvulsant with strong RCT support for epilepsy. No nootropic applications — included for completeness in the racetam family.",
    evidenceScore: 85,
    researchNotes:
      "Phase III trials demonstrated significant reduction in partial-onset seizure frequency versus placebo. 15–30x higher affinity for SV2A than levetiracetam. Generally better tolerated than levetiracetam with fewer behavioral side effects.",
    cautions:
      "Prescription-only anticonvulsant. Do not discontinue abruptly. May cause psychiatric symptoms. Hepatic dose adjustment needed.",
    caveats:
      "Included as a racetam-family compound but this is a dedicated anticonvulsant, not a cognitive enhancer.",
    benefits: [
      "FDA-approved for partial-onset seizures",
      "Better tolerability profile than levetiracetam",
      "High affinity and selectivity for SV2A",
    ],
    dosageNotes:
      "50–200 mg/day in twice-daily dosing (FDA-approved range for epilepsy).",
    sideEffects: [
      "Drowsiness",
      "Dizziness",
      "Fatigue",
      "Irritability",
    ],
    tags: ["prescription", "anticonvulsant", "sv2a-ligand"],
    scores: {},
  },
  {
    slug: "cebaracetam",
    name: "Cebaracetam",
    category: "racetam",
    summary:
      "An obscure racetam derivative that appeared in early nootropic patent literature but was never developed clinically. Minimal published data exists.",
    quickVerdict:
      "Essentially an abandoned research compound with no meaningful human or animal data available in the public literature.",
    evidenceScore: 5,
    researchNotes:
      "Referenced in racetam patent filings but lacks published preclinical or clinical studies in peer-reviewed journals.",
    cautions:
      "No safety data available. Not commercially produced by any reputable source.",
    caveats:
      "Included for completeness. There is insufficient published data to characterize this compound.",
    benefits: [
      "Member of the racetam chemical family",
    ],
    dosageNotes: "No dosing data exists.",
    sideEffects: ["Unknown — no data available"],
    tags: ["obscure", "abandoned", "research-only"],
    scores: {},
  },
  {
    slug: "coluracetam",
    name: "Coluracetam",
    category: "racetam",
    summary:
      "A racetam that enhances high-affinity choline uptake (HACU) in hippocampal neurons. Originally developed by Mitsubishi Tanabe Pharma for Alzheimer's disease.",
    quickVerdict:
      "Novel HACU mechanism is pharmacologically interesting but clinical development was abandoned after underwhelming Phase II depression/anxiety results.",
    evidenceScore: 22,
    researchNotes:
      "Phase IIa trials for major depression and generalized anxiety by BrainCells Inc. showed mixed results, and development was not continued. Rodent data demonstrates HACU enhancement and pro-cognitive effects even after washout, suggesting lasting cholinergic plasticity.",
    cautions:
      "Investigational compound with incomplete safety profiling. Not approved anywhere.",
    caveats:
      "Abandoned by its developer after unconvincing Phase II results. Remaining interest is primarily in the nootropic community.",
    benefits: [
      "Unique HACU enhancement mechanism",
      "Sustained pro-cognitive effect in rats even after washout",
      "Anecdotal reports of enhanced color perception and visual clarity",
    ],
    dosageNotes:
      "Phase II used 80 mg three times daily. Nootropic users typically report 20–80 mg/day.",
    sideEffects: ["Headache", "Fatigue", "Anxiety at higher doses"],
    tags: ["cholinergic", "hacu-enhancer", "abandoned-clinical"],
    scores: { memory: 30, focus: 30, mood: 25 },
  },
  {
    slug: "dimiracetam",
    name: "Dimiracetam",
    category: "racetam",
    summary:
      "A racetam derivative studied in preclinical models for neuropathic and visceral pain. Shows activity at glutamatergic systems involved in central sensitization.",
    quickVerdict:
      "Preclinical pain data is interesting and distinguishes it from other racetams, but no human efficacy data has been published.",
    evidenceScore: 15,
    researchNotes:
      "Rodent studies show efficacy in chemotherapy-induced neuropathy and visceral pain models. Proposed mechanism involves modulation of spinal glutamatergic transmission. No published human trials.",
    cautions:
      "Investigational compound. No human safety data published. Not available commercially.",
    caveats:
      "All data is preclinical. Mechanism is interesting but unvalidated in humans.",
    benefits: [
      "Anti-nociceptive effects in rodent neuropathic pain models",
      "Potential for chemotherapy-induced neuropathy",
    ],
    dosageNotes: "No human dosing established. Only used in animal research.",
    sideEffects: ["Unknown — no human data"],
    tags: ["pain-focused", "investigational", "glutamatergic"],
    scores: { pain: 25 },
  },
  {
    slug: "doliracetam",
    name: "Doliracetam",
    category: "racetam",
    summary:
      "A little-known racetam analog referenced in early nootropic and pyrrolidone patent literature. Minimal independent research has been conducted.",
    quickVerdict:
      "An essentially uncharacterized racetam with no meaningful published research to evaluate.",
    evidenceScore: 5,
    researchNotes:
      "Appears in patent literature related to pyrrolidone nootropics. No independent peer-reviewed studies found.",
    cautions:
      "Completely uncharacterized. No safety or efficacy data available.",
    caveats:
      "Listed for family completeness. Insufficient data to make any claims.",
    benefits: [
      "Member of the pyrrolidone/racetam chemical family",
    ],
    dosageNotes: "No dosing data exists.",
    sideEffects: ["Unknown — no data available"],
    tags: ["obscure", "uncharacterized", "research-only"],
    scores: {},
  },
  {
    slug: "dupracetam",
    name: "Dupracetam",
    category: "racetam",
    summary:
      "An early-generation racetam analog that appeared in Parke-Davis nootropic patent filings. It was not advanced into clinical development.",
    quickVerdict:
      "A historical footnote in the racetam family with no available efficacy or safety data.",
    evidenceScore: 5,
    researchNotes:
      "Referenced in 1980s–90s pharmaceutical patent literature exploring structural variations of piracetam. No published preclinical or clinical efficacy data.",
    cautions:
      "No data on safety, pharmacokinetics, or drug interactions. Not available from reputable sources.",
    caveats:
      "Included for completeness. There is no basis for claims about this compound.",
    benefits: [
      "Structural analog within the racetam series",
    ],
    dosageNotes: "No dosing information available.",
    sideEffects: ["Unknown — no data available"],
    tags: ["obscure", "historical", "abandoned"],
    scores: {},
  },
  {
    slug: "etiracetam",
    name: "Etiracetam",
    category: "racetam",
    summary:
      "The S-enantiomer of levetiracetam (Keppra). Unlike its R-enantiomer, etiracetam has markedly lower affinity for SV2A and limited anticonvulsant activity.",
    quickVerdict:
      "Pharmacologically much less active than levetiracetam. Studied primarily to understand enantioselective SV2A binding rather than as a therapeutic agent.",
    evidenceScore: 18,
    researchNotes:
      "Used as a comparator in SV2A binding studies. Demonstrates that the anticonvulsant activity of levetiracetam is stereoselective and resides primarily in the R-enantiomer. Not developed as a standalone drug.",
    cautions:
      "Not a therapeutic agent. No approved uses. Pharmacological activity is minimal compared to levetiracetam.",
    caveats:
      "Studied as a pharmacological tool, not as a treatment. Any purported nootropic use has no scientific basis.",
    benefits: [
      "Helps elucidate structure-activity relationships in the racetam family",
      "Demonstrates enantioselectivity of SV2A binding",
    ],
    dosageNotes: "Not applicable — not used therapeutically.",
    sideEffects: ["Unknown in isolation — not independently studied for safety"],
    tags: ["enantiomer", "pharmacological-tool", "research-only"],
    scores: {},
  },
  {
    slug: "fasoracetam",
    name: "Fasoracetam",
    category: "racetam",
    summary:
      "A racetam that modulates metabotropic glutamate receptors (mGluRs) and upregulates GABA-B receptors. Originally developed for vascular dementia, later investigated for ADHD in adolescents with specific mGluR gene variants.",
    quickVerdict:
      "Novel mechanism among racetams. The ADHD trial in mGluR-variant carriers showed promise, but overall clinical data remains thin.",
    evidenceScore: 25,
    researchNotes:
      "Failed Phase III for dementia in the 1990s (Nippon Shinyaku). A small open-label trial at Cincinnati Children's showed improvement in ADHD symptoms specifically in adolescents carrying mGluR network gene variants. GABA-B upregulation is of particular interest for phenibut withdrawal.",
    cautions:
      "Investigational. Limited safety data. Potential interactions with GABAergic substances.",
    caveats:
      "ADHD findings were from a small, open-label, genotype-selected study — not definitive. Dementia program was abandoned.",
    benefits: [
      "Upregulates GABA-B receptors, potentially useful for GABAergic tolerance",
      "Modulates metabotropic glutamate signaling",
      "Showed promise in mGluR-variant ADHD in a small trial",
    ],
    dosageNotes:
      "The ADHD trial used 50–800 mg/day. Nootropic users typically report 20–100 mg/day.",
    sideEffects: ["Headache", "Fatigue", "Digestive discomfort"],
    tags: ["mglur-modulator", "gaba-b", "investigational"],
    scores: { focus: 35, anxiety: 40, mood: 30 },
  },
  {
    slug: "nefiracetam",
    name: "Nefiracetam",
    category: "racetam",
    summary:
      "A fat-soluble racetam that modulates nicotinic acetylcholine receptors, GABA-A receptors, and calcium channels. Studied for post-stroke cognitive impairment in Japan.",
    quickVerdict:
      "Some positive trial data in post-stroke apathy and cognition in Japan. Development was complicated by renal toxicity findings in dogs at high doses.",
    evidenceScore: 30,
    researchNotes:
      "Japanese Phase II trials showed improvement in post-stroke apathy and depression. Mechanism involves prolonged opening of L-type calcium channels and potentiation of nicotinic and GABAergic signaling. High-dose dog studies revealed renal tubular toxicity that limited clinical development.",
    cautions:
      "Renal toxicity observed in high-dose animal studies. Monitor kidney function with chronic use. Not widely approved.",
    caveats:
      "The renal toxicity signal in animals, though at high doses, raised regulatory concerns and stalled development.",
    benefits: [
      "Multiple receptor targets including nicotinic, GABAergic, and calcium channels",
      "Improved post-stroke apathy in Japanese trials",
      "Enhances long-term potentiation in hippocampal models",
    ],
    dosageNotes:
      "Japanese trials used 600–900 mg/day. Nootropic users report 400–800 mg/day.",
    sideEffects: [
      "GI discomfort",
      "Headache",
      "Potential nephrotoxicity at high doses",
    ],
    tags: ["multi-target", "post-stroke", "calcium-channel"],
    scores: { memory: 40, mood: 40, focus: 35 },
  },
  {
    slug: "oxiracetam",
    name: "Oxiracetam",
    category: "racetam",
    summary:
      "A water-soluble racetam with mild stimulant properties, studied for dementia and traumatic brain injury. Modulates AMPA and cholinergic systems.",
    quickVerdict:
      "Modest evidence from older European trials for cognitive improvement in dementia. Considered the mildly stimulating racetam, often compared to piracetam with added alertness.",
    evidenceScore: 38,
    researchNotes:
      "Italian and other European trials from the 1980s–90s showed improvement in cognitive function in multi-infarct dementia and organic brain syndrome. Effects on memory consolidation are better supported than acute recall. Increases hippocampal glutamate release.",
    cautions:
      "Stimulating properties can cause insomnia if dosed late. Interactions with other stimulants should be considered.",
    caveats:
      "Trial evidence is older and of variable quality. Benefits in healthy young adults are uncertain.",
    benefits: [
      "Mild stimulant quality among racetams",
      "Older trials show cognitive improvement in dementia",
      "May enhance memory consolidation",
    ],
    dosageNotes:
      "Clinical: 1200–2400 mg/day in divided doses. Nootropic: 800–1600 mg/day.",
    sideEffects: ["Insomnia", "Headache", "Nervousness", "GI upset"],
    tags: ["stimulating", "water-soluble", "memory-consolidation"],
    scores: { memory: 40, focus: 45, energy: 35 },
  },
  {
    slug: "phenylpiracetam",
    name: "Phenylpiracetam",
    category: "racetam",
    summary:
      "A phenylated piracetam derivative developed in Russia for cosmonauts. Provides both cognitive and physical stimulation. Banned by WADA as a performance enhancer.",
    quickVerdict:
      "The most stimulating racetam. Russian clinical data supports use in asthenia, cognitive impairment, and post-stroke recovery. WADA-banned, suggesting meaningful performance effects.",
    evidenceScore: 42,
    researchNotes:
      "Russian trials show efficacy in post-stroke cognitive recovery, epilepsy (adjunctive), and asthenia. Cold tolerance enhancement was observed in the original cosmonaut research. Tolerance to stimulant effects develops with daily use. Banned by WADA since 2004.",
    cautions:
      "WADA-banned substance. Tolerance develops rapidly to stimulant effects. Insomnia likely if dosed in the afternoon.",
    caveats:
      "Russian trials are generally not replicated in Western settings. Stimulant tolerance limits chronic use.",
    benefits: [
      "Combined cognitive and physical stimulation",
      "Post-stroke recovery support in Russian trials",
      "Cold tolerance enhancement in original research",
    ],
    dosageNotes:
      "100–200 mg once or twice daily. Best cycled (e.g., every other day or a few times weekly) to avoid tolerance.",
    sideEffects: [
      "Insomnia",
      "Irritability",
      "Headache",
      "Rapid tolerance to stimulant effects",
    ],
    tags: ["stimulating", "wada-banned", "russian-developed"],
    scores: { focus: 55, energy: 60, mood: 40, memory: 40 },
  },
  {
    slug: "picamilon",
    name: "Picamilon",
    category: "racetam",
    summary:
      "A synthetic combination of niacin and GABA that crosses the blood-brain barrier and hydrolyzes into its components intracerebrally. Developed in Russia for cerebrovascular conditions.",
    quickVerdict:
      "Combines cerebral vasodilation (niacin) with GABAergic calming. Used medically in Russia but removed from US supplement market by FDA in 2015.",
    evidenceScore: 30,
    researchNotes:
      "Russian clinical use for migraine, cerebrovascular insufficiency, and anxiety disorders. The niacin moiety provides cerebral vasodilation while released GABA provides anxiolytic effects. FDA determined it does not qualify as a dietary supplement in the US.",
    cautions:
      "FDA removed from US market (not recognized as a supplement). Quality varies by source. GABAergic interactions possible.",
    caveats:
      "Most evidence is from Russian medical practice. Regulatory status varies globally.",
    benefits: [
      "Dual mechanism: cerebral vasodilation plus GABAergic calming",
      "Crosses blood-brain barrier unlike oral GABA alone",
      "Used clinically in Russia for anxiety and cerebrovascular disorders",
    ],
    dosageNotes:
      "Russian prescribing: 50–200 mg two to three times daily.",
    sideEffects: [
      "Niacin flush (less common than pure niacin)",
      "Hypotension",
      "Headache",
      "Drowsiness",
    ],
    tags: ["gaba-niacin", "cerebrovascular", "russian-approved"],
    scores: { anxiety: 45, stress: 40, focus: 25 },
  },
  {
    slug: "piracetam",
    name: "Piracetam",
    category: "racetam",
    summary:
      "The original racetam, synthesized in 1964 by UCB Pharma. Modulates AMPA receptors, improves membrane fluidity, and enhances interhemispheric communication. Used clinically in Europe for myoclonus and cognitive impairment.",
    quickVerdict:
      "The foundational nootropic with the largest racetam evidence base. Benefits are modest and most reliable in elderly or impaired populations. Healthy young adults may notice little.",
    evidenceScore: 52,
    researchNotes:
      "A Cochrane review of 24 trials in dementia found some evidence of global cognitive improvement but recommended more research. Best-supported use is for cortical myoclonus (high-dose). Mechanism involves AMPA receptor modulation, enhanced membrane fluidity, and improved cerebral microcirculation.",
    cautions:
      "Prescription-only in many European countries. May worsen agitation in dementia with Lewy bodies. Theoretically increases bleeding risk.",
    caveats:
      "Effect sizes in healthy adults are small to negligible. Works best in populations with some degree of cognitive impairment.",
    benefits: [
      "Largest evidence base of any racetam",
      "Approved for cortical myoclonus in Europe",
      "May improve cognitive function in age-related decline",
      "Enhances interhemispheric communication",
    ],
    dosageNotes:
      "Cognitive use: 2400–4800 mg/day in 2–3 divided doses. Myoclonus: up to 20g/day under medical supervision.",
    sideEffects: [
      "Headache (common, often from choline depletion)",
      "Insomnia",
      "GI discomfort",
      "Weight gain (rare)",
    ],
    tags: ["foundational", "well-studied", "european-approved"],
    scores: { memory: 45, focus: 40, mood: 25 },
  },
  {
    slug: "pramiracetam",
    name: "Pramiracetam",
    category: "racetam",
    summary:
      "A potent racetam with high oral bioavailability and a long half-life (5–6 hours). Stimulates high-affinity choline uptake (HACU) and nitric oxide synthase activity.",
    quickVerdict:
      "Considered one of the more potent racetams for focused cognitive work. Limited but positive evidence in amnesic patients and traumatic brain injury.",
    evidenceScore: 32,
    researchNotes:
      "Small trials show memory improvement in scopolamine-induced amnesia and traumatic brain injury. Italian studies in elderly with cognitive decline showed improvement. HACU stimulation mechanism differentiates it from piracetam. Low emotional or anxiolytic effect — considered a pure cognitive enhancer.",
    cautions:
      "Fat-soluble — take with dietary fat. Taste is extremely bitter. May cause headaches if choline intake is insufficient.",
    caveats:
      "Trial data is limited to small, older studies. Perceived as potent in the nootropic community but evidence is thinner than for piracetam.",
    benefits: [
      "High oral bioavailability and longer duration than piracetam",
      "Stimulates HACU for increased acetylcholine synthesis",
      "Positive results in amnesia and TBI trials",
    ],
    dosageNotes:
      "400–1200 mg/day in divided doses. Take with fat-containing meals.",
    sideEffects: [
      "Headache (especially without choline supplementation)",
      "GI upset",
      "Irritability",
    ],
    tags: ["potent", "hacu-enhancer", "cognitive-focused"],
    scores: { memory: 45, focus: 50 },
  },
];

export const MEDICINE_COMPOUNDS: SeedCompound[] = [
  {
    slug: "artemisinin",
    name: "Artemisinin",
    category: "medicine",
    summary:
      "A sesquiterpene lactone derived from sweet wormwood (Artemisia annua) that is the cornerstone of modern malaria treatment. Also investigated for anticancer and anti-inflammatory properties.",
    quickVerdict:
      "Nobel Prize-winning antimalarial with robust efficacy data. Longevity and anticancer research is preclinical but growing.",
    evidenceScore: 88,
    researchNotes:
      "Artemisinin-based combination therapies (ACTs) are WHO first-line treatment for P. falciparum malaria. Mechanism involves endoperoxide bridge activation by iron-rich heme in parasites. Preclinical anticancer activity via iron-dependent oxidative damage and ferroptosis is under active investigation.",
    cautions:
      "Should only be used as part of combination therapy for malaria to prevent resistance. Drug interactions with CYP enzymes. Not a standalone anticancer treatment.",
    caveats:
      "Antimalarial evidence is world-class. Anticancer and longevity applications remain preclinical.",
    benefits: [
      "WHO-recommended first-line antimalarial treatment",
      "Novel iron-dependent mechanism of action",
      "Active preclinical anticancer research program",
    ],
    dosageNotes:
      "Malaria: weight-based dosing in combination regimens (e.g., artemether-lumefantrine). Not for self-dosing.",
    sideEffects: [
      "Nausea",
      "Dizziness",
      "Neutropenia (rare with short courses)",
      "QT prolongation (some derivatives)",
    ],
    tags: ["antimalarial", "nobel-prize", "who-essential"],
    scores: { immunity: 75, longevity: 25 },
  },
  {
    slug: "atomoxetine",
    name: "Atomoxetine",
    category: "medicine",
    summary:
      "A selective norepinephrine reuptake inhibitor (NRI) FDA-approved for ADHD in children and adults. Unlike stimulants, it is not a controlled substance.",
    quickVerdict:
      "Well-studied non-stimulant ADHD treatment with robust RCT support. Slower onset than stimulants (2–6 weeks) but no abuse potential.",
    evidenceScore: 80,
    researchNotes:
      "Multiple large RCTs demonstrate efficacy for ADHD symptoms in children and adults versus placebo. Effect sizes are moderate and generally smaller than stimulant medications. Full therapeutic effect takes 2–6 weeks. Also increases prefrontal dopamine via noradrenergic mechanisms.",
    cautions:
      "Black box warning for suicidal ideation in children and adolescents. Hepatotoxicity (rare). CYP2D6 poor metabolizers require dose adjustment. Cardiovascular effects (heart rate, blood pressure increases).",
    caveats:
      "Less effective than stimulants for most ADHD patients but preferred when stimulant abuse risk, anxiety comorbidity, or tic disorders are concerns.",
    benefits: [
      "FDA-approved non-stimulant ADHD treatment",
      "No abuse potential or controlled-substance scheduling",
      "Effective for ADHD with comorbid anxiety",
    ],
    dosageNotes:
      "Adults: start 40 mg/day, target 80 mg/day, max 100 mg/day. Titrate over 2–4 weeks.",
    sideEffects: [
      "Decreased appetite",
      "Nausea",
      "Insomnia",
      "Dry mouth",
      "Increased heart rate",
    ],
    tags: ["prescription", "adhd", "non-stimulant"],
    scores: { focus: 70, mood: 35, anxiety: 30 },
  },
  {
    slug: "colchicine",
    name: "Colchicine",
    category: "medicine",
    summary:
      "An ancient alkaloid from Colchicum autumnale used for gout and familial Mediterranean fever. Increasingly studied for cardiovascular risk reduction and as a potential longevity compound due to anti-inflammatory effects.",
    quickVerdict:
      "Established anti-inflammatory with strong evidence for gout and cardiovascular event reduction (COLCOT, LoDoCo2 trials). Narrow therapeutic window requires careful dosing.",
    evidenceScore: 82,
    researchNotes:
      "COLCOT and LoDoCo2 trials demonstrated significant reduction in cardiovascular events in post-MI and chronic coronary disease patients. Mechanism involves microtubule disruption, NLRP3 inflammasome inhibition, and neutrophil chemotaxis reduction. FDA-approved for gout and FMF; cardiovascular use is expanding.",
    cautions:
      "Narrow therapeutic index — overdose can be fatal. GI toxicity is dose-limiting. Severe interactions with CYP3A4 inhibitors and P-glycoprotein inhibitors. Contraindicated in severe renal or hepatic impairment.",
    caveats:
      "Cardiovascular benefit is well-established but the longevity extension hypothesis requires more data.",
    benefits: [
      "Proven cardiovascular event reduction in major RCTs",
      "Established treatment for gout and FMF",
      "Potent anti-inflammatory via NLRP3 inhibition",
    ],
    dosageNotes:
      "Gout flare: 1.2 mg then 0.6 mg one hour later. Prophylaxis: 0.6 mg once or twice daily. Cardiovascular: 0.5 mg/day (LoDoCo2 dose).",
    sideEffects: [
      "Diarrhea (dose-limiting)",
      "Nausea",
      "Abdominal pain",
      "Myelosuppression (overdose)",
    ],
    tags: ["anti-inflammatory", "cardiovascular", "narrow-therapeutic-index"],
    scores: { longevity: 55, immunity: 45, pain: 60 },
  },
  {
    slug: "dasatinib",
    name: "Dasatinib",
    category: "medicine",
    summary:
      "A multi-kinase inhibitor FDA-approved for chronic myeloid leukemia and Ph+ ALL. Investigated in combination with quercetin as a senolytic regimen to clear senescent cells.",
    quickVerdict:
      "Well-established oncology drug. The dasatinib + quercetin senolytic combination shows promise in early human trials for age-related conditions, but longevity data is preliminary.",
    evidenceScore: 75,
    researchNotes:
      "Robust Phase III oncology data for CML and ALL. Senolytic research: the D+Q combination cleared senescent cells and improved physical function in open-label trials of idiopathic pulmonary fibrosis and diabetic kidney disease. Mechanism involves inhibition of survival pathways (BCR-ABL, SRC family, ephrin receptors) that senescent cells depend on.",
    cautions:
      "Serious oncology-grade side effects including pleural effusion, myelosuppression, and pulmonary hypertension. Senolytic dosing is intermittent but still carries risk. Not for unsupervised self-experimentation.",
    caveats:
      "Senolytic trials are small, open-label, and short-term. Using a chemotherapy agent for anti-aging requires careful risk-benefit analysis.",
    benefits: [
      "FDA-approved for CML and Ph+ ALL",
      "Demonstrated senescent cell clearance in early human trials",
      "Improved physical function in senolytic pilot studies",
    ],
    dosageNotes:
      "Oncology: 100–140 mg/day. Senolytic protocol: 100 mg dasatinib + 1000 mg quercetin for 3 consecutive days per month (investigational).",
    sideEffects: [
      "Pleural effusion",
      "Myelosuppression",
      "Nausea",
      "Diarrhea",
      "Pulmonary arterial hypertension",
    ],
    tags: ["senolytic", "oncology", "prescription"],
    scores: { longevity: 45, immunity: 30 },
  },
  {
    slug: "donepezil",
    name: "Donepezil",
    category: "medicine",
    summary:
      "A reversible acetylcholinesterase inhibitor FDA-approved for all stages of Alzheimer's disease. One of the most widely prescribed dementia medications globally.",
    quickVerdict:
      "Standard-of-care for Alzheimer's with robust evidence for modest symptomatic improvement. Does not halt disease progression.",
    evidenceScore: 85,
    researchNotes:
      "Multiple large RCTs demonstrate statistically significant improvements on ADAS-cog and global clinical impression scales in mild-to-severe AD. Effect size is modest (1.5–3 point improvement on ADAS-cog). Long-acting with once-daily dosing. Does not modify underlying disease progression.",
    cautions:
      "Cholinergic effects can worsen bradycardia, asthma, and peptic ulcers. GI side effects are dose-limiting. Gradual titration required.",
    caveats:
      "Symptomatic treatment only — does not slow neurodegeneration. Clinical meaningfulness of observed effect sizes is debated.",
    benefits: [
      "FDA-approved for mild, moderate, and severe Alzheimer's",
      "Once-daily dosing with long half-life",
      "Well-characterized safety profile from extensive post-marketing use",
    ],
    dosageNotes:
      "Start 5 mg/day, increase to 10 mg/day after 4–6 weeks. 23 mg/day formulation available for moderate-severe AD.",
    sideEffects: [
      "Nausea",
      "Diarrhea",
      "Insomnia",
      "Muscle cramps",
      "Bradycardia",
    ],
    tags: ["prescription", "alzheimers", "ache-inhibitor"],
    scores: { memory: 55, focus: 40 },
  },
  {
    slug: "everolimus",
    name: "Everolimus",
    category: "medicine",
    summary:
      "An mTOR inhibitor (rapalog) FDA-approved for organ transplant rejection, certain cancers, and tuberous sclerosis. Studied for immunosenescence reversal and longevity at low doses.",
    quickVerdict:
      "Proven oncology and transplant drug. The resTORbio trial showed improved immune function in elderly at low doses, but the company's clinical programs were ultimately discontinued.",
    evidenceScore: 78,
    researchNotes:
      "Robust oncology data for RCC, breast cancer (with exemestane), and TSC. A low-dose trial in elderly volunteers showed improved influenza vaccine response and reduced infections, suggesting immune rejuvenation. resTORbio's Phase III PROTECTOR trial in respiratory infections failed, dampening clinical longevity enthusiasm.",
    cautions:
      "Immunosuppression increases infection risk. Stomatitis (mouth sores) is very common. Metabolic effects include hyperglycemia and dyslipidemia. Interstitial lung disease risk.",
    caveats:
      "Longevity applications hit a setback with the failed PROTECTOR trial. Low-dose immune benefits from a single positive study need replication.",
    benefits: [
      "FDA-approved for multiple cancers and transplant rejection",
      "Demonstrated immune function improvement in elderly at low doses",
      "Well-characterized pharmacology as an mTOR inhibitor",
    ],
    dosageNotes:
      "Oncology: 10 mg/day. Transplant: titrated to trough levels. Longevity research used 0.5 mg/day or 5 mg/week.",
    sideEffects: [
      "Stomatitis",
      "Infections",
      "Hyperglycemia",
      "Dyslipidemia",
      "Pneumonitis",
    ],
    tags: ["mtor-inhibitor", "oncology", "immunosenescence"],
    scores: { longevity: 50, immunity: 40 },
  },
  {
    slug: "galantamine",
    name: "Galantamine",
    category: "medicine",
    summary:
      "An acetylcholinesterase inhibitor and allosteric nicotinic receptor modulator FDA-approved for mild-to-moderate Alzheimer's disease. Originally derived from snowdrop flowers.",
    quickVerdict:
      "Dual mechanism (AChE inhibition + nicotinic modulation) distinguishes it from donepezil. Similar modest efficacy for Alzheimer's symptoms. Also used off-label for lucid dreaming.",
    evidenceScore: 80,
    researchNotes:
      "Multiple large RCTs show significant improvement in cognition (ADAS-cog) and global function in mild-to-moderate AD. Dual mechanism may provide theoretical advantages but head-to-head superiority over donepezil is not established. Notable off-label popularity for enhancing lucid dreaming due to REM sleep modulation.",
    cautions:
      "Same cholinergic cautions as donepezil: bradycardia, GI effects, worsening of asthma/COPD. Hepatic impairment requires dose adjustment.",
    caveats:
      "Symptomatic treatment only. No head-to-head superiority over other AChE inhibitors demonstrated.",
    benefits: [
      "Dual AChE inhibition and nicotinic receptor modulation",
      "FDA-approved for mild-to-moderate Alzheimer's",
      "Well-established efficacy from large clinical programs",
    ],
    dosageNotes:
      "Start 4 mg twice daily with meals. Increase to 8 mg twice daily after 4 weeks, then 12 mg twice daily. Extended-release: 8–24 mg once daily.",
    sideEffects: [
      "Nausea",
      "Vomiting",
      "Diarrhea",
      "Decreased appetite",
      "Dizziness",
    ],
    tags: ["prescription", "alzheimers", "dual-mechanism"],
    scores: { memory: 55, focus: 40, sleep: 20 },
  },
  {
    slug: "ivermectin",
    name: "Ivermectin",
    category: "medicine",
    summary:
      "A broad-spectrum antiparasitic drug on the WHO Essential Medicines list. Nobel Prize-winning treatment for river blindness and lymphatic filariasis. Extensively repurposed and controversially promoted for COVID-19.",
    quickVerdict:
      "Outstanding antiparasitic with decades of safe mass-administration experience. COVID-19 claims were not supported by well-designed RCTs.",
    evidenceScore: 90,
    researchNotes:
      "Unquestioned efficacy for onchocerciasis, strongyloidiasis, and other parasitic infections. Over 3.7 billion doses distributed in mass drug administration programs. Large, well-designed COVID-19 RCTs (TOGETHER, ACTIV-6) showed no significant clinical benefit. Mechanism involves glutamate-gated chloride channel activation in invertebrates.",
    cautions:
      "Neurotoxic in patients with compromised blood-brain barrier or Loa loa co-infection. Drug interactions with CYP3A4 substrates. Do not use veterinary formulations.",
    caveats:
      "An extraordinary antiparasitic that does not translate to antiviral utility. Evidence score reflects parasitology use, not repurposed applications.",
    benefits: [
      "WHO Essential Medicine for parasitic diseases",
      "Decades of safe mass-administration data",
      "Broad antiparasitic spectrum",
    ],
    dosageNotes:
      "Parasitic infections: 150–200 mcg/kg as a single dose or short course. Dosing varies by indication and parasite.",
    sideEffects: [
      "Mazzotti reaction (in onchocerciasis treatment)",
      "Dizziness",
      "Nausea",
      "Diarrhea",
    ],
    tags: ["antiparasitic", "who-essential", "nobel-prize"],
    scores: { immunity: 80 },
  },
  {
    slug: "l-dopa",
    name: "L-DOPA",
    category: "medicine",
    summary:
      "Levodopa, the immediate biosynthetic precursor to dopamine, is the gold-standard treatment for Parkinson's disease. Always co-administered with a peripheral decarboxylase inhibitor (carbidopa or benserazide).",
    quickVerdict:
      "The most effective treatment for Parkinson's motor symptoms. Long-term use is complicated by motor fluctuations and dyskinesias.",
    evidenceScore: 92,
    researchNotes:
      "Decades of RCT and clinical data confirming superior efficacy for Parkinson's motor symptoms versus dopamine agonists and other agents. Wearing-off and dyskinesia emerge in most patients after 5–10 years. Combined with carbidopa to prevent peripheral conversion and nausea.",
    cautions:
      "Prescription-only. Interactions with MAO inhibitors, antipsychotics, and protein-rich meals. Psychiatric side effects including hallucinations and impulse-control disorders.",
    caveats:
      "Motor complications are nearly inevitable with long-term use. Timing of initiation relative to disease stage is an active clinical debate.",
    benefits: [
      "Gold-standard treatment for Parkinson's motor symptoms",
      "Most effective available therapy for bradykinesia and rigidity",
      "Dramatic and rapid symptomatic improvement",
    ],
    dosageNotes:
      "Carbidopa/levodopa 25/100 mg three times daily is a common starting regimen. Highly individualized titration.",
    sideEffects: [
      "Nausea",
      "Dyskinesia with chronic use",
      "Orthostatic hypotension",
      "Hallucinations",
      "Wearing-off fluctuations",
    ],
    tags: ["prescription", "parkinsons", "gold-standard"],
    scores: { mood: 50, energy: 45, focus: 35 },
  },
  {
    slug: "memantine",
    name: "Memantine",
    category: "medicine",
    summary:
      "An uncompetitive NMDA receptor antagonist FDA-approved for moderate-to-severe Alzheimer's disease. Blocks pathological tonic glutamate signaling while preserving physiological phasic activation.",
    quickVerdict:
      "The only approved non-cholinergic Alzheimer's drug. Modest benefits in moderate-to-severe AD, often combined with donepezil. Unique NMDA mechanism.",
    evidenceScore: 78,
    researchNotes:
      "RCTs demonstrate improvement in cognition, global function, behavior, and ADLs in moderate-to-severe AD. Combining with donepezil (Namzaric) provides additive benefit. Mechanism is voltage-dependent NMDA channel blockade that reduces excitotoxic noise without impairing normal synaptic signaling.",
    cautions:
      "Renal dose adjustment required. Avoid with other NMDA antagonists (dextromethorphan, ketamine). May cause confusion in some patients.",
    caveats:
      "Effect sizes are modest. Benefit in mild AD is not established.",
    benefits: [
      "FDA-approved for moderate-to-severe Alzheimer's",
      "Unique NMDA-based mechanism complements cholinesterase inhibitors",
      "Generally well tolerated relative to cholinergic agents",
    ],
    dosageNotes:
      "Start 5 mg/day, titrate by 5 mg/week to target 10 mg twice daily. Extended-release: 7–28 mg once daily.",
    sideEffects: [
      "Dizziness",
      "Headache",
      "Confusion",
      "Constipation",
    ],
    tags: ["prescription", "alzheimers", "nmda-antagonist"],
    scores: { memory: 45, mood: 30 },
  },
  {
    slug: "prucalopride",
    name: "Prucalopride",
    category: "medicine",
    summary:
      "A selective, high-affinity 5-HT4 receptor agonist FDA-approved for chronic idiopathic constipation. Promotes colonic motility without the cardiac effects of older serotonergic prokinetics.",
    quickVerdict:
      "Well-studied prokinetic with a cleaner cardiac safety profile than cisapride or tegaserod. Effective for chronic constipation with potential gut-brain axis implications.",
    evidenceScore: 82,
    researchNotes:
      "Large Phase III trials demonstrated significant improvement in spontaneous complete bowel movements versus placebo. Selective for 5-HT4 over hERG channels, avoiding the QT prolongation that plagued earlier prokinetics. Emerging interest in gut-brain applications and gastroparesis.",
    cautions:
      "Headache is very common in the first days. Diarrhea and abdominal pain occur. Caution in severe renal or hepatic impairment.",
    caveats:
      "Primarily a GI motility drug. Cognitive or mood effects via the gut-brain axis are speculative.",
    benefits: [
      "FDA-approved for chronic idiopathic constipation",
      "Superior cardiac safety profile versus older prokinetics",
      "Effective improvement in bowel movement frequency",
    ],
    dosageNotes: "2 mg once daily (1 mg in patients over 65 or with severe renal impairment).",
    sideEffects: [
      "Headache (very common initially)",
      "Abdominal pain",
      "Nausea",
      "Diarrhea",
    ],
    tags: ["prescription", "prokinetic", "gut-motility"],
    scores: { recovery: 30 },
  },
  {
    slug: "rapamycin",
    name: "Rapamycin",
    category: "medicine",
    summary:
      "An mTOR inhibitor (sirolimus) FDA-approved as an immunosuppressant for organ transplant rejection. The most studied pharmaceutical candidate for lifespan extension, with consistent effects across multiple species.",
    quickVerdict:
      "The only drug to consistently extend lifespan in mice when started even at older ages. Human longevity trials are ongoing but the immunosuppressive trade-off remains the central challenge.",
    evidenceScore: 72,
    researchNotes:
      "Extended lifespan in mice by 10–25% across multiple studies (ITP program). Mechanism involves mTOR Complex 1 inhibition, enhancing autophagy, reducing cellular senescence, and improving stem cell function. Human data for longevity is limited to biomarker studies and the PEARL trial. Intermittent dosing may preserve immune function while retaining benefits.",
    cautions:
      "Immunosuppression at chronic doses. Mouth ulcers, impaired wound healing, dyslipidemia, and insulin resistance. Requires monitoring of lipids, glucose, and CBC.",
    caveats:
      "Mouse lifespan extension is robust but translation to human healthspan/lifespan is unproven. Optimal dosing schedule for longevity versus immunosuppression is still being researched.",
    benefits: [
      "Consistent lifespan extension across species in controlled studies",
      "FDA-approved with well-understood pharmacology",
      "Enhances autophagy and reduces cellular senescence",
    ],
    dosageNotes:
      "Transplant: 2–5 mg/day (trough-guided). Longevity community: 3–6 mg once weekly (investigational, not FDA-approved for this use).",
    sideEffects: [
      "Mouth ulcers",
      "Dyslipidemia",
      "Impaired wound healing",
      "Immunosuppression",
      "Insulin resistance",
    ],
    tags: ["mtor-inhibitor", "longevity", "immunosuppressant"],
    scores: { longevity: 70, immunity: 30 },
  },
  {
    slug: "sapropterin",
    name: "Sapropterin",
    category: "medicine",
    summary:
      "Synthetic BH4 (tetrahydrobiopterin), FDA-approved for phenylketonuria (PKU) in BH4-responsive patients. BH4 is an essential cofactor for phenylalanine hydroxylase, tyrosine hydroxylase, and tryptophan hydroxylase.",
    quickVerdict:
      "Effective in a subset of PKU patients with BH4-responsive mutations. Interest in broader neurotransmitter support is based on BH4's cofactor role but not yet clinically validated outside PKU.",
    evidenceScore: 75,
    researchNotes:
      "Phase III trials demonstrated significant reduction in blood phenylalanine in BH4-responsive PKU patients. BH4 is also a cofactor for NOS (nitric oxide synthase), TH (tyrosine hydroxylase), and TPH (tryptophan hydroxylase), leading to interest in mood and vascular applications. Non-PKU applications lack robust trial data.",
    cautions:
      "Prescription-only. Must verify BH4 responsiveness before initiating in PKU. GI side effects and headache are common. Monitor amino acid levels.",
    caveats:
      "PKU application is well-validated. Broader nootropic or mood applications are theoretical and not supported by clinical trials.",
    benefits: [
      "FDA-approved for BH4-responsive PKU",
      "Essential cofactor for monoamine neurotransmitter synthesis",
      "Reduces blood phenylalanine and allows dietary flexibility in PKU",
    ],
    dosageNotes:
      "PKU: 10–20 mg/kg/day once daily with food. Dose titrated based on phenylalanine response.",
    sideEffects: [
      "Headache",
      "Rhinorrhea",
      "Diarrhea",
      "Pharyngolaryngeal pain",
    ],
    tags: ["prescription", "pku", "cofactor"],
    scores: { mood: 25, focus: 20 },
  },
  {
    slug: "skf-38393",
    name: "SKF-38393",
    category: "medicine",
    summary:
      "A selective dopamine D1 receptor partial agonist used primarily as a pharmacological research tool. Not developed as a therapeutic agent.",
    quickVerdict:
      "An important D1-selective tool compound in neuroscience research. No clinical development or human therapeutic use.",
    evidenceScore: 20,
    researchNotes:
      "Widely used in preclinical research to study D1 receptor function in cognition, motor control, and reward. Partial agonist activity means it can both activate and partially block D1 receptors depending on endogenous dopamine tone. Enabled fundamental discoveries about D1's role in working memory and prefrontal function.",
    cautions:
      "Not a therapeutic agent. Not manufactured for human use. Research-grade compound only.",
    caveats:
      "Purely a pharmacological tool. Any self-experimentation would be inappropriate and unsupported.",
    benefits: [
      "Foundational research tool for understanding D1 receptor function",
      "Selective D1 partial agonism clarifies receptor-specific effects",
    ],
    dosageNotes: "Not applicable — research tool compound with no human dosing.",
    sideEffects: ["Not characterized in humans"],
    tags: ["research-tool", "d1-agonist", "pharmacological-probe"],
    scores: { focus: 15, memory: 15 },
  },
  {
    slug: "skq1",
    name: "SKQ1",
    category: "medicine",
    summary:
      "A mitochondria-targeted antioxidant (plastoquinone linked to a triphenylphosphonium cation) developed by the Skulachev group in Russia. Studied for age-related diseases and marketed for dry eye.",
    quickVerdict:
      "Approved in Russia as Visomitin eye drops for dry eye. Systemic longevity applications are based on promising animal data but lack human clinical validation.",
    evidenceScore: 35,
    researchNotes:
      "Extended lifespan in short-lived fish, fungal, and some mouse models. Mechanism involves selective scavenging of mitochondrial ROS. Phase III clinical data supports efficacy for dry eye disease. Systemic anti-aging trials are in earlier stages. The Skulachev ion concept allows mitochondrial targeting.",
    cautions:
      "Systemic use in humans is not well-characterized. Ophthalmic use appears safe. Quality and availability outside Russia varies.",
    caveats:
      "Dry-eye efficacy is supported. Systemic longevity claims rely on animal data and have not been validated in human aging trials.",
    benefits: [
      "Mitochondria-targeted antioxidant with precise subcellular localization",
      "Lifespan extension in multiple short-lived model organisms",
      "Approved for dry eye in Russia (Visomitin)",
    ],
    dosageNotes:
      "Ophthalmic: 1 drop in each eye 3 times daily (Visomitin). Systemic dosing for anti-aging is investigational.",
    sideEffects: ["Ocular stinging (topical)", "Unknown systemic profile in humans"],
    tags: ["mitochondrial", "antioxidant", "russian-developed"],
    scores: { longevity: 40 },
  },
  {
    slug: "testosterone",
    name: "Testosterone",
    category: "medicine",
    summary:
      "The primary male sex hormone and an anabolic steroid. FDA-approved for testosterone replacement therapy (TRT) in hypogonadal men. Critical for muscle mass, bone density, libido, and mood.",
    quickVerdict:
      "Strong evidence for restoring function in clinically hypogonadal men. Supraphysiologic use for performance carries significant cardiovascular and endocrine risks.",
    evidenceScore: 88,
    researchNotes:
      "The Testosterone Trials (TTrials) demonstrated improvements in sexual function, physical activity, bone density, and anemia in hypogonadal men over 65. TRAVERSE trial showed no excess MACE risk at replacement doses. Supraphysiologic doses increase muscle mass but with dose-dependent cardiovascular and hepatic risk.",
    cautions:
      "Polycythemia, sleep apnea exacerbation, prostate monitoring required. Suppresses endogenous production (HPG axis). Contraindicated in breast or prostate cancer. Controlled substance.",
    caveats:
      "Benefits are clearest in men with confirmed hypogonadism. Healthy eugonadal men see less benefit and more risk. Female use requires specialist guidance.",
    benefits: [
      "Restores libido, energy, and mood in hypogonadal men",
      "Increases muscle mass and bone mineral density",
      "Improves anemia in elderly hypogonadal men",
    ],
    dosageNotes:
      "TRT: 50–100 mg IM weekly or 1% gel 50–100 mg daily, targeting mid-normal range levels. Requires monitoring of hematocrit, PSA, and lipids.",
    sideEffects: [
      "Polycythemia",
      "Acne",
      "Testicular atrophy",
      "Sleep apnea worsening",
      "Mood changes",
    ],
    tags: ["hormone", "prescription", "controlled-substance"],
    scores: { muscle: 80, libido: 85, energy: 65, mood: 55, recovery: 55 },
  },
  {
    slug: "toremifene",
    name: "Toremifene",
    category: "medicine",
    summary:
      "A selective estrogen receptor modulator (SERM) FDA-approved for metastatic breast cancer in postmenopausal women. Structurally related to tamoxifen with a chlorine substitution.",
    quickVerdict:
      "Established oncology SERM with comparable efficacy to tamoxifen in ER+ breast cancer. Off-label interest for gynecomastia prevention in androgen users.",
    evidenceScore: 78,
    researchNotes:
      "Phase III trials demonstrate equivalent efficacy to tamoxifen in metastatic ER+ breast cancer. Lower risk of endometrial cancer than tamoxifen in some analyses. Also studied in prostate cancer (prevention of bone loss and fractures on ADT). Used off-label by anabolic steroid users for estrogen management.",
    cautions:
      "QT prolongation risk — avoid with other QT-prolonging drugs or in patients with hypokalemia/hypomagnesemia. Thromboembolic events. Endometrial changes. Hepatic dose considerations.",
    caveats:
      "Oncology evidence is solid. Off-label use for gynecomastia prevention in steroid users lacks rigorous trial support.",
    benefits: [
      "FDA-approved SERM for metastatic breast cancer",
      "May carry lower endometrial cancer risk than tamoxifen",
      "Preserves bone density on androgen deprivation therapy",
    ],
    dosageNotes:
      "Breast cancer: 60 mg once daily. Off-label SERM use: 30–60 mg/day (not evidence-based for this indication).",
    sideEffects: [
      "Hot flashes",
      "Nausea",
      "QT prolongation",
      "Thromboembolic events",
      "Vaginal discharge",
    ],
    tags: ["prescription", "serm", "oncology"],
    scores: { muscle: 20, libido: 15 },
  },
];
