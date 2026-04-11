import type { SeedCompound } from "../seed-compounds";

export const PEPTIDE_COMPOUNDS: SeedCompound[] = [
  {
    slug: "a4-amyloid-beta",
    name: "A4 Amyloid Beta",
    category: "peptide",
    summary:
      "A fragment of amyloid precursor protein central to Alzheimer's disease research, studied as both a biomarker and an immunotherapy target.",
    quickVerdict:
      "Not a therapeutic peptide itself; anti-amyloid strategies targeting it have yielded mixed clinical results with significant adverse-event profiles.",
    evidenceScore: 22,
    researchNotes:
      "Vast basic-science literature. Clinical anti-amyloid antibodies show modest efficacy. Direct peptide use is not a recognized therapy.",
    cautions:
      "Not used directly as a therapeutic. Anti-amyloid immunotherapies carry risk of amyloid-related imaging abnormalities (ARIA).",
    caveats:
      "The amyloid hypothesis remains debated. No standalone peptide therapeutic exists for consumer use.",
    benefits: [
      "Central target in Alzheimer's immunotherapy research",
      "Biomarker utility in neurodegeneration diagnostics",
    ],
    dosageNotes: "Not applicable as a standalone therapeutic peptide.",
    sideEffects: [
      "Not administered directly as a therapeutic",
      "Anti-amyloid therapies carry ARIA risk",
    ],
    tags: ["research-only", "neuroscience"],
    scores: { memory: 15, longevity: 15 },
  },
  {
    slug: "ace-031",
    name: "ACE-031",
    category: "peptide",
    summary:
      "A soluble activin receptor type IIB (ActRIIB-Fc) that acts as a myostatin/activin trap, investigated for muscle-wasting conditions.",
    quickVerdict:
      "Phase II trial in Duchenne muscular dystrophy was halted due to vascular safety signals. Clinical development has been discontinued.",
    evidenceScore: 25,
    researchNotes:
      "One completed phase II trial showed lean mass gains but was stopped for epistaxis and telangiectasia. No further development announced.",
    cautions:
      "Development halted due to safety concerns. No approved use in any jurisdiction.",
    caveats:
      "Only short-term human data exists from a discontinued trial. Long-term safety is unknown.",
    benefits: [
      "Increased lean body mass in early trial data",
      "Theoretical utility in severe muscle-wasting disorders",
    ],
    dosageNotes:
      "No validated dosing for general use. Trial doses were 0.5–3 mg/kg IV every two weeks.",
    sideEffects: [
      "Epistaxis",
      "Gingival bleeding",
      "Skin telangiectasia",
      "Dilated superficial blood vessels",
    ],
    tags: ["discontinued", "experimental", "muscle-wasting"],
    scores: { muscle: 35, recovery: 20 },
  },
  {
    slug: "adamantyl-carbonyl-proline",
    name: "Adamantyl Carbonyl Proline",
    category: "peptide",
    summary:
      "A synthetic peptidomimetic studied for retinoid-like skin-remodeling activity without the irritation profile of retinoids.",
    quickVerdict:
      "Cosmetic ingredient with limited peer-reviewed evidence. May offer mild retinoid-like benefits topically with less irritation.",
    evidenceScore: 18,
    researchNotes:
      "Primarily manufacturer-sponsored in-vitro and small cosmetic studies. No large independent RCTs.",
    cautions:
      "Cosmetic use only. Not evaluated by regulatory agencies as a drug.",
    caveats:
      "Evidence is almost entirely from cosmetic industry studies. Independent verification is lacking.",
    benefits: [
      "May stimulate collagen production topically",
      "Potentially less irritating than retinoids",
      "Used in anti-aging skincare formulations",
    ],
    dosageNotes:
      "Used topically in cosmetic formulations, typically at proprietary concentrations.",
    sideEffects: ["Mild skin irritation possible", "Contact dermatitis in sensitive individuals"],
    tags: ["cosmetic", "topical", "skin"],
    scores: { longevity: 10 },
  },
  {
    slug: "adiponectin",
    name: "Adiponectin",
    category: "peptide",
    summary:
      "An adipocyte-secreted hormone involved in glucose regulation, fatty acid oxidation, and insulin sensitization.",
    quickVerdict:
      "Well-characterized endogenous hormone with strong epidemiological links to metabolic health, but exogenous peptide therapy is not established.",
    evidenceScore: 35,
    researchNotes:
      "Extensive observational and preclinical data. Low adiponectin correlates with metabolic syndrome. Therapeutic delivery remains a challenge.",
    cautions:
      "Not available as an approved exogenous therapy. Recombinant forms are research-use only.",
    caveats:
      "Observational associations are strong but do not prove exogenous supplementation is beneficial. Delivery and half-life issues persist.",
    benefits: [
      "Insulin-sensitizing effects in preclinical models",
      "Anti-inflammatory properties observed in vitro",
      "Cardioprotective associations in epidemiological data",
    ],
    dosageNotes: "No validated exogenous human dosing exists.",
    sideEffects: ["Unknown for exogenous administration", "Theoretical hypoglycemia risk"],
    tags: ["endogenous", "metabolic", "research-only"],
    scores: { "weight-loss": 25, longevity: 30 },
  },
  {
    slug: "adipotide",
    name: "Adipotide",
    category: "peptide",
    summary:
      "A peptidomimetic that targets the vascular supply of adipose tissue by binding prohibitin on fat blood vessels, inducing fat-cell apoptosis.",
    quickVerdict:
      "Showed dramatic fat loss in primate studies but caused significant renal toxicity. Human trials are very limited.",
    evidenceScore: 20,
    researchNotes:
      "Primate data showed rapid fat loss with concurrent renal side effects. A small human pilot has been referenced but full data remain unpublished.",
    cautions:
      "Renal toxicity observed in primates. Not approved for human use. Gray-market sourcing is risky.",
    caveats:
      "Near-zero published human trial data. Animal efficacy came at the cost of kidney damage.",
    benefits: [
      "Rapid fat loss demonstrated in non-human primates",
      "Novel mechanism targeting adipose vasculature",
    ],
    dosageNotes:
      "No validated human dosing. Primate studies used low mg/kg subcutaneous doses.",
    sideEffects: [
      "Renal tubular damage",
      "Dehydration",
      "Injection-site reactions",
      "Possible electrolyte imbalance",
    ],
    tags: ["experimental", "research-only", "high-risk"],
    scores: { "weight-loss": 35 },
  },
  {
    slug: "ahk-tripeptide-3",
    name: "AHK (Tripeptide-3)",
    category: "peptide",
    summary:
      "A copper-binding tripeptide (Ala-His-Lys) used in cosmetic formulations for its purported wound-healing and collagen-stimulating properties.",
    quickVerdict:
      "Cosmetic peptide with limited independent evidence. Mechanistically plausible for skin repair but clinical proof is thin.",
    evidenceScore: 16,
    researchNotes:
      "Mostly in-vitro studies showing copper-dependent collagen stimulation. No significant clinical trials.",
    cautions: "Cosmetic use only. Not evaluated as a drug.",
    caveats:
      "Evidence base is largely manufacturer-driven in-vitro work. No robust human efficacy data.",
    benefits: [
      "Copper-dependent collagen stimulation in vitro",
      "Used in topical wound-care and anti-aging products",
    ],
    dosageNotes: "Applied topically in cosmetic products at proprietary concentrations.",
    sideEffects: ["Possible skin irritation", "Allergic reaction in copper-sensitive individuals"],
    tags: ["cosmetic", "topical", "copper-peptide"],
    scores: { recovery: 15 },
  },
  {
    slug: "ahk-cu",
    name: "AHK-Cu",
    category: "peptide",
    summary:
      "The copper complex of the AHK tripeptide, studied for skin-regenerative and hair-growth properties similar to GHK-Cu.",
    quickVerdict:
      "Less studied than GHK-Cu but shares a similar copper-peptide mechanism. Evidence is predominantly preclinical and cosmetic-grade.",
    evidenceScore: 15,
    researchNotes:
      "Limited independent literature. Some in-vitro data on fibroblast stimulation. Often referenced alongside GHK-Cu research.",
    cautions: "For topical cosmetic use only. Not a regulated therapeutic.",
    caveats:
      "Far less studied than GHK-Cu. Claims are largely extrapolated from the broader copper-peptide literature.",
    benefits: [
      "May promote collagen synthesis topically",
      "Potential hair-follicle stimulation in preclinical models",
    ],
    dosageNotes: "Topical application in cosmetic serums at proprietary concentrations.",
    sideEffects: ["Skin irritation", "Possible copper sensitivity reactions"],
    tags: ["cosmetic", "copper-peptide", "topical"],
    scores: { recovery: 12 },
  },
  {
    slug: "anserine",
    name: "Anserine",
    category: "peptide",
    summary:
      "A naturally occurring dipeptide (beta-alanyl-1-methylhistidine) found in skeletal muscle of birds and fish, with antioxidant and anti-glycation properties.",
    quickVerdict:
      "Modest human trial data for uric acid reduction and anti-glycation. Generally safe as a dietary supplement but effects are mild.",
    evidenceScore: 35,
    researchNotes:
      "Several small Japanese RCTs show modest uric-acid-lowering and anti-glycation effects. Often studied alongside carnosine.",
    cautions: "Generally well tolerated. Sourced from fish/poultry, so allergen risk applies.",
    caveats:
      "Human trials are small and mostly from a single research group. Effect sizes are modest.",
    benefits: [
      "Mild uric acid reduction in clinical trials",
      "Antioxidant and anti-glycation properties",
      "Generally recognized as safe in food-derived doses",
    ],
    dosageNotes: "Human trials typically use 500–1000 mg/day of anserine/carnosine mixtures.",
    sideEffects: ["GI discomfort at high doses", "Fish/poultry allergen risk"],
    tags: ["supplement", "antioxidant", "dipeptide"],
    scores: { longevity: 30, recovery: 20 },
  },
  {
    slug: "aod-9604",
    name: "AOD-9604",
    category: "peptide",
    summary:
      "A modified fragment of human growth hormone (amino acids 177-191) studied for fat-metabolism effects without the growth-promoting actions of full hGH.",
    quickVerdict:
      "Failed to show significant weight loss in a phase IIb obesity trial. TGA-approved in Australia as a complementary medicine ingredient for osteoarthritis.",
    evidenceScore: 30,
    researchNotes:
      "Phase IIb obesity trial did not meet primary endpoint. Some preclinical cartilage data. TGA listing in Australia is as a complementary medicine, not a prescription drug.",
    cautions:
      "Not FDA-approved. Gray-market injectable versions carry purity and sterility risks.",
    caveats:
      "The largest human obesity trial was negative. Osteoarthritis claims rest on limited data.",
    benefits: [
      "TGA-listed for osteoarthritis in oral form",
      "Does not appear to raise IGF-1 or cause hGH side effects",
      "Preclinical evidence for cartilage protection",
    ],
    dosageNotes:
      "Oral doses of 1–2 mg/day used in Australian complementary medicine. Injectable protocols are not validated.",
    sideEffects: [
      "Injection-site reactions",
      "Headache",
      "Generally well tolerated in trials",
    ],
    tags: ["fat-loss", "complementary-medicine", "hgh-fragment"],
    scores: { "weight-loss": 25, recovery: 25 },
  },
  {
    slug: "ara-290",
    name: "ARA-290",
    category: "peptide",
    summary:
      "An 11-amino-acid peptide derived from erythropoietin that activates the innate repair receptor without erythropoietic activity, studied for neuropathy and tissue repair.",
    quickVerdict:
      "Promising phase II data for sarcoidosis-related neuropathy and diabetic neuropathy. Development has been slow and no product is approved.",
    evidenceScore: 38,
    researchNotes:
      "Multiple small phase II trials in neuropathic pain and sarcoidosis show modest benefit. Larger confirmatory trials have not been completed.",
    cautions:
      "Investigational compound. Not approved in any jurisdiction for clinical use.",
    caveats:
      "Phase II results are encouraging but sample sizes are small. No phase III data exist.",
    benefits: [
      "Reduced neuropathic symptoms in phase II sarcoidosis trial",
      "Tissue-protective without erythropoietic side effects",
      "Anti-inflammatory properties in preclinical models",
    ],
    dosageNotes:
      "Clinical trials used 2–8 mg subcutaneously. No commercial dosing established.",
    sideEffects: [
      "Injection-site reactions",
      "Headache",
      "Generally well tolerated in short-term trials",
    ],
    tags: ["neuroprotective", "investigational", "tissue-repair"],
    scores: { pain: 35, recovery: 30 },
  },
  {
    slug: "argireline",
    name: "Argireline",
    category: "peptide",
    summary:
      "Acetyl hexapeptide-3, a cosmetic peptide that inhibits SNARE complex formation to reduce neurotransmitter release at the neuromuscular junction, marketed as a topical alternative to botulinum toxin.",
    quickVerdict:
      "Modest wrinkle-depth reduction shown in small cosmetic studies. Far less potent than botulinum toxin and limited to surface application.",
    evidenceScore: 30,
    researchNotes:
      "Several small manufacturer-sponsored trials show 10–30% wrinkle-depth reduction over 30 days. No large independent RCTs.",
    cautions:
      "Cosmetic use only. Topical penetration is limited. Not a substitute for medical-grade treatments.",
    caveats:
      "Effect sizes are modest compared to injectable neuromodulators. Most studies are industry-funded.",
    benefits: [
      "Mild reduction in expression-line depth",
      "Non-invasive topical application",
      "Generally well tolerated on skin",
    ],
    dosageNotes:
      "Used topically at 5–10% concentration in cosmetic serums.",
    sideEffects: ["Mild skin irritation", "Contact dermatitis in rare cases"],
    tags: ["cosmetic", "anti-wrinkle", "topical"],
    scores: { longevity: 15 },
  },
  {
    slug: "b7-33",
    name: "B7-33",
    category: "peptide",
    summary:
      "A single-chain relaxin peptide analog that selectively activates RXFP1 receptors, studied for anti-fibrotic and cardiovascular effects.",
    quickVerdict:
      "Preclinical-stage analog designed to replicate relaxin-2 benefits with simpler manufacturing. No human trial data yet.",
    evidenceScore: 15,
    researchNotes:
      "Rodent studies show anti-fibrotic effects in cardiac and renal models. No human trials have been initiated.",
    cautions:
      "Purely preclinical. No safety data in humans.",
    caveats:
      "All data are from animal models. Translation to humans is uncertain.",
    benefits: [
      "Anti-fibrotic effects in preclinical cardiac models",
      "Simpler to synthesize than native relaxin-2",
    ],
    dosageNotes: "No human dosing data available.",
    sideEffects: ["Unknown in humans", "Hypotension possible based on relaxin biology"],
    tags: ["preclinical", "anti-fibrotic", "cardiovascular"],
    scores: { longevity: 15, recovery: 15 },
  },
  {
    slug: "bpc-157",
    name: "BPC-157",
    category: "peptide",
    summary:
      "A synthetic pentadecapeptide originally identified in a fragment of a gastric protein and studied preclinically for tissue-repair effects.",
    quickVerdict:
      "Intriguing rodent data for tendon, ligament, and GI repair. Human evidence is largely anecdotal; it is not an approved drug in most jurisdictions.",
    evidenceScore: 32,
    researchNotes:
      "Most published work is in rodents. Randomized human trials are sparse.",
    cautions:
      "Not approved for human use in most jurisdictions. Product purity from gray-market sources is inconsistent.",
    caveats:
      "Human effects — including long-term safety — are not established. Evidence quality is low.",
    benefits: ["Anecdotal reports for tendon and joint recovery"],
    dosageNotes: "No human-validated dosing exists. Consult a clinician.",
    sideEffects: ["Unknown in humans", "Injection-site reactions"],
    tags: ["experimental", "research-only"],
    scores: { recovery: 55, pain: 45 },
  },
  {
    slug: "bronchogen",
    name: "Bronchogen",
    category: "peptide",
    summary:
      "A Khavinson bioregulator tripeptide (Ala-Glu-Asp) purported to support bronchial and lung tissue function.",
    quickVerdict:
      "Part of the Khavinson bioregulator series from Russian research. Published evidence is limited to small Russian-language studies.",
    evidenceScore: 12,
    researchNotes:
      "Primarily Russian-language publications from the Khavinson group. No international peer-reviewed RCTs.",
    cautions:
      "Not approved outside Russia. Quality control of commercially available products is uncertain.",
    caveats:
      "Evidence base is very narrow and not independently replicated.",
    benefits: [
      "Claimed respiratory tissue support in Russian literature",
      "Oral bioregulator peptide format",
    ],
    dosageNotes:
      "Russian protocols suggest 5–10 mg/day orally in capsule form for 10–30 day courses.",
    sideEffects: ["Not well characterized", "Possible GI discomfort"],
    tags: ["bioregulator", "khavinson", "respiratory"],
    scores: { immunity: 15 },
  },
  {
    slug: "cardiogen",
    name: "Cardiogen",
    category: "peptide",
    summary:
      "A Khavinson bioregulator tripeptide (Ala-Glu-Asp-Arg) designed to support cardiac tissue function and repair.",
    quickVerdict:
      "Limited to small Russian studies. No international clinical trials or regulatory approval outside Russia.",
    evidenceScore: 12,
    researchNotes:
      "Published data come from the Khavinson research group. Claims of cardiomyocyte gene expression modulation are not independently validated.",
    cautions:
      "Not approved outside Russia. No independent safety or efficacy data.",
    caveats:
      "All evidence originates from a single research group without independent replication.",
    benefits: [
      "Claimed cardioprotective effects in Russian studies",
      "Oral peptide bioregulator format",
    ],
    dosageNotes: "Russian protocols: 5–10 mg/day orally for 10–30 day courses.",
    sideEffects: ["Not well characterized", "Theoretical hypotension"],
    tags: ["bioregulator", "khavinson", "cardiovascular"],
    scores: { longevity: 15 },
  },
  {
    slug: "cartalax",
    name: "Cartalax",
    category: "peptide",
    summary:
      "A Khavinson bioregulator tripeptide (Ala-Glu-Asp) studied for cartilage and musculoskeletal tissue support and potential geroprotective effects.",
    quickVerdict:
      "Very limited data outside Russian bioregulator research. No international trials or regulatory approvals.",
    evidenceScore: 12,
    researchNotes:
      "Small Russian studies suggest effects on cartilage gene expression and possible lifespan extension in animal models. Not replicated internationally.",
    cautions:
      "Not approved outside Russia. Product authenticity and purity are hard to verify.",
    caveats:
      "Evidence is confined to Russian-language publications from a single research group.",
    benefits: [
      "Claimed cartilage-protective properties",
      "Possible geroprotective effects in animal models",
    ],
    dosageNotes: "Russian protocols: 5–10 mg/day orally for 10–30 day courses.",
    sideEffects: ["Not well characterized", "GI discomfort possible"],
    tags: ["bioregulator", "khavinson", "cartilage"],
    scores: { recovery: 15, longevity: 15 },
  },
  {
    slug: "cerebrolysin",
    name: "Cerebrolysin",
    category: "peptide",
    summary:
      "A porcine brain-derived peptide preparation containing neurotrophic-factor-like peptides, approved in several countries for stroke and dementia.",
    quickVerdict:
      "Multiple human trials exist, particularly for stroke recovery and vascular dementia. Cochrane reviews note methodological concerns but some positive signals.",
    evidenceScore: 45,
    researchNotes:
      "Several RCTs and Cochrane reviews cover stroke and dementia indications. Methodological quality is variable. Approved in ~50 countries but not in the US.",
    cautions:
      "Biological product derived from animal brain tissue carries theoretical prion risk. Not FDA-approved.",
    caveats:
      "Cochrane reviews flag high risk of bias in many trials. Effect sizes are modest.",
    benefits: [
      "Some RCT evidence for post-stroke cognitive improvement",
      "Approved in multiple countries for neurological indications",
      "Generally well tolerated in clinical trials",
    ],
    dosageNotes:
      "Clinical protocols use 10–30 mL IV daily for 10–20 day courses. Must be administered by a clinician.",
    sideEffects: [
      "Injection-site pain",
      "Dizziness",
      "Headache",
      "Rare allergic reactions",
    ],
    tags: ["neuroprotective", "approved-in-some-countries", "injectable"],
    scores: { memory: 40, recovery: 35 },
  },
  {
    slug: "cerebroprotein-hydrolysate",
    name: "Cerebroprotein Hydrolysate",
    category: "peptide",
    summary:
      "A mixture of low-molecular-weight neuropeptides and amino acids derived from porcine brain, similar to Cerebrolysin, used in some countries for neurological conditions.",
    quickVerdict:
      "Similar concept to Cerebrolysin with overlapping but distinct formulations. Evidence base is smaller and primarily from Asian clinical studies.",
    evidenceScore: 30,
    researchNotes:
      "Multiple small trials from China and India for traumatic brain injury and stroke. Methodological quality is generally low.",
    cautions:
      "Animal-derived biological product. Not approved in Western countries. Quality varies by manufacturer.",
    caveats:
      "Smaller evidence base than Cerebrolysin with higher heterogeneity across formulations.",
    benefits: [
      "Some clinical trial data for traumatic brain injury",
      "Used clinically in several Asian countries",
    ],
    dosageNotes:
      "Clinical use typically 10–30 mL IV daily. Requires clinical administration.",
    sideEffects: [
      "Injection-site reactions",
      "Headache",
      "Nausea",
      "Allergic reactions possible",
    ],
    tags: ["neuroprotective", "injectable", "biological"],
    scores: { memory: 30, recovery: 25 },
  },
  {
    slug: "chonluten",
    name: "Chonluten",
    category: "peptide",
    summary:
      "A Khavinson bioregulator tripeptide purported to normalize lung and bronchial mucosa function at the gene-expression level.",
    quickVerdict:
      "Part of the Khavinson peptide series. Evidence limited to small Russian studies without international replication.",
    evidenceScore: 12,
    researchNotes:
      "Russian-language publications from the Khavinson group. No international peer-reviewed trials.",
    cautions:
      "Not approved outside Russia. Product quality from online sources is unverified.",
    caveats:
      "Narrow evidence base from a single research group.",
    benefits: [
      "Claimed normalization of bronchial mucosa function",
      "Oral bioregulator peptide format",
    ],
    dosageNotes: "Russian protocols: 5–10 mg/day orally for 10–30 day courses.",
    sideEffects: ["Not well characterized", "GI discomfort possible"],
    tags: ["bioregulator", "khavinson", "respiratory"],
    scores: { immunity: 12 },
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    category: "peptide",
    summary:
      "A synthetic 30-amino-acid growth-hormone-releasing-hormone (GHRH) analog with extended half-life, used to stimulate endogenous GH secretion.",
    quickVerdict:
      "Reliably raises GH and IGF-1 in human studies. Not FDA-approved; widely used off-label in anti-aging clinics.",
    evidenceScore: 40,
    researchNotes:
      "Multiple human pharmacokinetic studies confirm sustained GH elevation. Limited long-term safety data. Typically refers to the version without DAC (Drug Affinity Complex).",
    cautions:
      "Not FDA-approved. Long-term effects of chronic GH elevation are a concern. Avoid in individuals with active malignancies.",
    caveats:
      "GH-axis stimulation is confirmed but clinical outcome data (body composition, aging) are limited.",
    benefits: [
      "Sustained increase in GH and IGF-1 levels",
      "Pulsatile GH release pattern preserved",
      "Used in combination with GH secretagogues in clinical protocols",
    ],
    dosageNotes:
      "Typical clinic protocols: 100–300 mcg subcutaneously at bedtime. Often combined with ipamorelin.",
    sideEffects: [
      "Flushing",
      "Headache",
      "Water retention",
      "Injection-site reactions",
      "Transient numbness or tingling",
    ],
    tags: ["growth-hormone", "ghrh-analog", "anti-aging"],
    scores: { muscle: 40, recovery: 35, longevity: 25 },
  },
  {
    slug: "cjc-dac",
    name: "CJC-1295 with DAC",
    category: "peptide",
    summary:
      "CJC-1295 conjugated with a Drug Affinity Complex that binds albumin, extending plasma half-life to ~8 days and producing sustained GH elevation.",
    quickVerdict:
      "Produces more continuous (less pulsatile) GH elevation than CJC-1295 without DAC. Some clinicians prefer the non-DAC version for a more physiologic GH pulse pattern.",
    evidenceScore: 38,
    researchNotes:
      "Human PK studies confirm prolonged GH elevation. The blunted pulsatility is considered less physiologic by some researchers.",
    cautions:
      "Not FDA-approved. Chronic non-pulsatile GH elevation may carry different risks than pulsatile release.",
    caveats:
      "Clinical outcome data are sparse. The DAC version is less commonly recommended in current anti-aging protocols.",
    benefits: [
      "Extended half-life reduces injection frequency",
      "Confirmed sustained GH and IGF-1 elevation in humans",
    ],
    dosageNotes:
      "Typical protocols: 1–2 mg subcutaneously once or twice weekly.",
    sideEffects: [
      "Water retention",
      "Flushing",
      "Headache",
      "Injection-site reactions",
      "Joint stiffness",
    ],
    tags: ["growth-hormone", "ghrh-analog", "long-acting"],
    scores: { muscle: 38, recovery: 30, longevity: 22 },
  },
  {
    slug: "collagen-peptides",
    name: "Collagen Peptides",
    category: "peptide",
    summary:
      "Hydrolyzed collagen fragments (typically types I and III) widely consumed as a dietary supplement for skin, joint, and bone health.",
    quickVerdict:
      "Among the better-studied peptide supplements. Multiple RCTs show modest improvements in skin elasticity, joint pain, and bone density.",
    evidenceScore: 62,
    researchNotes:
      "Systematic reviews covering 15+ RCTs support modest benefits for skin hydration, wrinkle reduction, and joint pain. Effect sizes are small to moderate.",
    cautions:
      "Generally safe. Sourced from bovine, porcine, or marine origins — allergen and dietary restrictions apply.",
    caveats:
      "Benefits are modest and take 8–12 weeks to manifest. Product quality varies significantly.",
    benefits: [
      "Improved skin elasticity and hydration in multiple RCTs",
      "Reduced joint pain in osteoarthritis studies",
      "Possible bone-density support in postmenopausal women",
    ],
    dosageNotes:
      "Most trials use 2.5–15 g/day of hydrolyzed collagen orally.",
    sideEffects: [
      "Mild GI discomfort",
      "Unpleasant taste",
      "Rare allergic reactions to source protein",
    ],
    tags: ["supplement", "well-studied", "skin", "joint"],
    scores: { recovery: 45, longevity: 30, pain: 30 },
  },
  {
    slug: "collagen-type-ii",
    name: "Collagen Type II",
    category: "peptide",
    summary:
      "Undenatured type II collagen (UC-II), derived from chicken sternum cartilage, studied for immune-mediated joint-health benefits via oral tolerance.",
    quickVerdict:
      "Small but positive RCTs for knee osteoarthritis and exercise-related joint pain. Works via a different mechanism (oral tolerance) than hydrolyzed collagen.",
    evidenceScore: 48,
    researchNotes:
      "Several RCTs show UC-II (40 mg/day) outperforms glucosamine/chondroitin for joint comfort. Mechanism is oral tolerance modulation of T-cell response to collagen.",
    cautions:
      "Poultry-derived — allergen consideration. Should not be confused with hydrolyzed collagen, which works differently.",
    caveats:
      "Studies are relatively small. Long-term effects and disease modification are not established.",
    benefits: [
      "Improved joint comfort in OA trials",
      "Reduced exercise-related joint stiffness",
      "Low effective dose (40 mg/day)",
    ],
    dosageNotes:
      "Standard dose is 40 mg/day of undenatured type II collagen taken on an empty stomach.",
    sideEffects: [
      "Mild GI discomfort",
      "Rare allergic reactions to poultry-derived protein",
    ],
    tags: ["supplement", "joint", "oral-tolerance"],
    scores: { pain: 40, recovery: 35 },
  },
  {
    slug: "cortagen",
    name: "Cortagen",
    category: "peptide",
    summary:
      "A Khavinson bioregulator tetrapeptide targeted at brain cortex tissue normalization.",
    quickVerdict:
      "Very limited evidence outside Russian bioregulator research. No international trials or approvals.",
    evidenceScore: 12,
    researchNotes:
      "Khavinson group publications only. No independent replication or international peer review.",
    cautions:
      "Not approved outside Russia. Product authenticity cannot be verified from online sources.",
    caveats:
      "All data originate from a single research group in Russia.",
    benefits: [
      "Claimed neuroprotective and cognitive support in Russian literature",
      "Oral bioregulator format",
    ],
    dosageNotes: "Russian protocols: 5–10 mg/day orally for 10–30 day courses.",
    sideEffects: ["Not well characterized", "Headache possible"],
    tags: ["bioregulator", "khavinson", "neuroprotective"],
    scores: { memory: 15, focus: 12 },
  },
  {
    slug: "cortexin",
    name: "Cortexin",
    category: "peptide",
    summary:
      "A polypeptide preparation extracted from calf brain cortex, approved in Russia for neurological conditions including stroke, TBI, and cognitive impairment.",
    quickVerdict:
      "Approved in Russia with several local clinical trials. Not recognized internationally; study quality is variable.",
    evidenceScore: 30,
    researchNotes:
      "Multiple Russian clinical studies for stroke rehabilitation and pediatric neurology. Limited international publication or independent replication.",
    cautions:
      "Animal-derived biological. Not approved outside Russia/CIS countries. Theoretical prion risk.",
    caveats:
      "Studies are predominantly Russian with variable methodological quality. Not independently validated.",
    benefits: [
      "Approved in Russia for post-stroke cognitive support",
      "Used in pediatric neurology in CIS countries",
      "Generally well tolerated in published studies",
    ],
    dosageNotes:
      "Russian clinical use: 10 mg IM daily for 10-day courses.",
    sideEffects: [
      "Injection-site pain",
      "Allergic reactions rare",
      "Headache",
    ],
    tags: ["neuroprotective", "biological", "approved-in-russia"],
    scores: { memory: 28, focus: 22, recovery: 20 },
  },
  {
    slug: "decapeptide-12",
    name: "Decapeptide-12",
    category: "peptide",
    summary:
      "A synthetic 10-amino-acid peptide used in cosmetic formulations to inhibit melanin synthesis for skin-lightening effects.",
    quickVerdict:
      "Cosmetic ingredient with limited published evidence. Claimed to be more potent than kojic acid in in-vitro melanin inhibition.",
    evidenceScore: 14,
    researchNotes:
      "Manufacturer data show in-vitro melanogenesis inhibition. No significant independent clinical trials published.",
    cautions:
      "Cosmetic use only. Skin-lightening products carry regulatory and safety considerations in many markets.",
    caveats:
      "Evidence is almost entirely manufacturer-supplied in-vitro data.",
    benefits: [
      "In-vitro melanin synthesis inhibition",
      "Non-irritating topical format claimed",
    ],
    dosageNotes: "Applied topically in cosmetic formulations at proprietary concentrations.",
    sideEffects: ["Possible skin irritation", "Uneven skin tone if misapplied"],
    tags: ["cosmetic", "skin-lightening", "topical"],
    scores: {},
  },
  {
    slug: "demoxytocin",
    name: "Demoxytocin",
    category: "peptide",
    summary:
      "A synthetic analog of oxytocin (deamino-oxytocin) that can be administered buccally, used to induce labor and support lactation in some countries.",
    quickVerdict:
      "Approved in some countries for labor induction and lactation support. Less commonly used than oxytocin itself due to the availability of IV oxytocin.",
    evidenceScore: 45,
    researchNotes:
      "Historical clinical use in obstetrics. Published trials support efficacy for labor induction and milk let-down. Largely replaced by IV oxytocin in modern practice.",
    cautions:
      "Must be used under medical supervision. Risk of uterine hyperstimulation. Contraindicated in certain obstetric conditions.",
    caveats:
      "Older literature. Largely supplanted by IV oxytocin in current obstetric practice.",
    benefits: [
      "Buccal administration avoids IV access requirement",
      "Established use for labor induction in some regions",
      "Supports lactation initiation",
    ],
    dosageNotes:
      "50–100 IU buccally for labor induction under medical supervision.",
    sideEffects: [
      "Uterine hyperstimulation",
      "Nausea",
      "Water retention",
      "Buccal mucosal irritation",
    ],
    tags: ["obstetric", "approved-in-some-countries", "oxytocin-analog"],
    scores: {},
  },
  {
    slug: "dsip",
    name: "DSIP (Delta Sleep-Inducing Peptide)",
    category: "peptide",
    summary:
      "A naturally occurring nonapeptide originally isolated from rabbit brain, studied for effects on sleep architecture, stress, and pain modulation.",
    quickVerdict:
      "Despite its name, evidence for reliable sleep induction in humans is inconsistent. Small studies show mixed results for insomnia and chronic pain.",
    evidenceScore: 25,
    researchNotes:
      "Early European studies showed some effects on sleep EEG patterns. Results have been inconsistent across trials. Interest has waned in mainstream research.",
    cautions:
      "Not approved in any major market. Gray-market products may have quality issues. Blood-brain barrier penetration is uncertain.",
    caveats:
      "The peptide's name oversells the evidence. Sleep-inducing effects are not consistently replicated.",
    benefits: [
      "Some EEG data suggesting modulation of sleep architecture",
      "Possible stress-response modulation in small studies",
      "Opioid-withdrawal symptom reduction in limited data",
    ],
    dosageNotes:
      "Historical protocols: 100–300 mcg IV or intranasal. No standardized dosing exists.",
    sideEffects: [
      "Headache",
      "Transient hypotension",
      "Injection-site reactions",
    ],
    tags: ["sleep", "neuropeptide", "experimental"],
    scores: { sleep: 30, stress: 20, pain: 20 },
  },
  {
    slug: "epitalon",
    name: "Epitalon",
    category: "peptide",
    summary:
      "A synthetic tetrapeptide (Ala-Glu-Asp-Gly) based on the pineal gland extract epithalamin, studied by the Khavinson group for telomerase activation and anti-aging effects.",
    quickVerdict:
      "Intriguing in-vitro telomerase activation data and rodent lifespan studies, but human evidence is extremely limited and confined to Russian publications.",
    evidenceScore: 22,
    researchNotes:
      "Khavinson group publications report telomerase activation in human cell cultures and lifespan extension in rodents. No international replication or large human trials.",
    cautions:
      "Not approved in any Western country. Telomerase activation carries theoretical oncogenic risk.",
    caveats:
      "All significant data come from a single research group. Telomerase activation in a dish does not equate to anti-aging in humans.",
    benefits: [
      "In-vitro telomerase activation demonstrated",
      "Rodent lifespan extension reported by one group",
      "Minimal reported side effects in available literature",
    ],
    dosageNotes:
      "Community protocols: 5–10 mg subcutaneously daily for 10–20 day cycles. No validated dosing.",
    sideEffects: [
      "Injection-site reactions",
      "Theoretical oncogenic risk from telomerase activation",
    ],
    tags: ["anti-aging", "telomerase", "khavinson"],
    scores: { longevity: 30, sleep: 15 },
  },
  {
    slug: "follistatin-344",
    name: "Follistatin 344",
    category: "peptide",
    summary:
      "A single-chain glycoprotein that binds and neutralizes activin and myostatin, studied for muscle growth and potential therapeutic applications in muscular dystrophy.",
    quickVerdict:
      "Gene therapy approaches using follistatin have entered early clinical trials for muscular dystrophy. Exogenous peptide injection is unvalidated and commercially available products are suspect.",
    evidenceScore: 28,
    researchNotes:
      "AAV-follistatin gene therapy trials show safety and modest efficacy in inclusion body myositis. Exogenous injectable follistatin PK data are very limited.",
    cautions:
      "Gray-market injectable products are unlikely to contain functional follistatin at claimed doses. Myostatin inhibition may affect cardiac tissue.",
    caveats:
      "Gene therapy evidence does not validate exogenous injection. Product authenticity is a major concern.",
    benefits: [
      "Myostatin inhibition demonstrated preclinically",
      "Gene therapy approach shows early promise for myopathies",
    ],
    dosageNotes:
      "No validated injectable dosing. Gene therapy uses viral vector delivery, not direct peptide injection.",
    sideEffects: [
      "Unknown for exogenous injection",
      "Theoretical cardiac effects from myostatin suppression",
    ],
    tags: ["muscle-growth", "gene-therapy", "experimental"],
    scores: { muscle: 35 },
  },
  {
    slug: "foxo4-dri",
    name: "FOXO4-DRI",
    category: "peptide",
    summary:
      "A D-retro-inverso peptide that disrupts the FOXO4-p53 interaction in senescent cells, triggering selective apoptosis of those cells (senolytic activity).",
    quickVerdict:
      "Striking results in aged mice (restored fur, fitness, renal function). No human trials. Extremely expensive to synthesize.",
    evidenceScore: 18,
    researchNotes:
      "One landmark 2017 paper in Cell demonstrated senolytic effects in naturally aged mice. No follow-up human trials. Synthesis cost is prohibitive for most.",
    cautions:
      "No human safety data. Senolytic mechanisms could theoretically affect non-senescent cells. Gray-market products are of questionable authenticity.",
    caveats:
      "Single mouse study, not replicated in humans. Cost and synthesis complexity are significant barriers.",
    benefits: [
      "Selective senescent cell clearance in mice",
      "Improved physical fitness and organ function in aged mice",
    ],
    dosageNotes:
      "Mouse study used high doses relative to body weight. No human dosing established.",
    sideEffects: [
      "Unknown in humans",
      "Theoretical off-target apoptosis",
      "Injection-site reactions",
    ],
    tags: ["senolytic", "anti-aging", "preclinical"],
    scores: { longevity: 30 },
  },
  {
    slug: "gdf-11",
    name: "GDF-11",
    category: "peptide",
    summary:
      "Growth Differentiation Factor 11, a TGF-beta family member studied for rejuvenation effects after parabiosis experiments suggested declining levels contribute to aging.",
    quickVerdict:
      "Initial excitement from parabiosis studies has been tempered by conflicting results and challenges distinguishing GDF-11 from GDF-8 (myostatin). Still preclinical.",
    evidenceScore: 20,
    researchNotes:
      "2013–2014 parabiosis papers claimed cardiac and neural rejuvenation. Subsequent studies produced conflicting results. Assay specificity between GDF-11 and myostatin is problematic.",
    cautions:
      "No human therapeutic use. Conflicting preclinical data raise concerns about true effects.",
    caveats:
      "The rejuvenation narrative is based on disputed parabiosis data. Measurement of endogenous GDF-11 vs GDF-8 remains technically challenging.",
    benefits: [
      "Initial parabiosis data suggested cardiac and neural rejuvenation",
      "Ongoing basic science interest in aging biology",
    ],
    dosageNotes: "No human dosing data. Research use only.",
    sideEffects: ["Unknown in humans", "Possible muscle wasting if GDF-8/11 overlap exists"],
    tags: ["preclinical", "anti-aging", "controversial"],
    scores: { longevity: 20 },
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    category: "peptide",
    summary:
      "A naturally occurring copper-binding tripeptide (Gly-His-Lys-Cu) that declines with age, studied for wound healing, skin remodeling, hair growth, and anti-inflammatory effects.",
    quickVerdict:
      "Among the better-studied cosmetic peptides. Solid in-vitro evidence for collagen synthesis and wound healing; clinical evidence is moderate, mostly for topical skin applications.",
    evidenceScore: 42,
    researchNotes:
      "Dozens of in-vitro and animal studies. Several small human trials for wound healing and skin quality. Broad gene-expression effects documented in cell culture.",
    cautions:
      "Topical use is generally safe. Injectable use is off-label and not well studied for safety in humans.",
    caveats:
      "Most clinical data are for topical use. Systemic injectable claims extrapolate from in-vitro and topical evidence.",
    benefits: [
      "Stimulates collagen and glycosaminoglycan synthesis",
      "Promotes wound healing in clinical and preclinical studies",
      "Anti-inflammatory gene expression modulation in vitro",
      "Hair-growth-promoting effects in small studies",
    ],
    dosageNotes:
      "Topical: serums at 1–3% concentration. Injectable community protocols: 1–2 mg subcutaneously (not validated).",
    sideEffects: [
      "Skin irritation with topical use",
      "Injection-site reactions",
      "Copper sensitivity in rare cases",
    ],
    tags: ["copper-peptide", "skin", "wound-healing", "anti-aging"],
    scores: { recovery: 40, longevity: 30 },
  },
  {
    slug: "ghrelin",
    name: "Ghrelin",
    category: "peptide",
    summary:
      "A 28-amino-acid endogenous peptide hormone produced primarily by the stomach that stimulates appetite, GH release, and gastric motility.",
    quickVerdict:
      "Well-characterized endogenous hormone with clinical trials for cachexia and gastroparesis. Therapeutic use is limited by short half-life and appetite-stimulating effects.",
    evidenceScore: 50,
    researchNotes:
      "Multiple human studies confirm orexigenic and GH-releasing effects. Clinical trials in cancer cachexia and gastroparesis show moderate efficacy. Synthetic analogs are in development.",
    cautions:
      "Potent appetite stimulant. Not suitable for weight management. Short half-life requires frequent dosing.",
    caveats:
      "Therapeutic utility is limited to conditions where appetite/GH stimulation is desired. Not a general-purpose peptide.",
    benefits: [
      "Appetite stimulation in cachexia and wasting syndromes",
      "GH release confirmed in human studies",
      "Gastric motility improvement in gastroparesis trials",
    ],
    dosageNotes:
      "Research studies: 1–5 mcg/kg IV. Clinical use requires medical supervision.",
    sideEffects: [
      "Increased appetite and hunger",
      "Transient hyperglycemia",
      "Flushing",
      "GI discomfort",
    ],
    tags: ["endogenous", "appetite", "growth-hormone"],
    scores: { muscle: 30, recovery: 25, energy: 20 },
  },
  {
    slug: "ghrp-2",
    name: "GHRP-2",
    category: "peptide",
    summary:
      "A synthetic hexapeptide growth-hormone secretagogue that stimulates GH release via the ghrelin receptor (GHS-R1a).",
    quickVerdict:
      "Reliably increases GH in human studies. Not FDA-approved but widely used in anti-aging clinics. Increases appetite and cortisol/prolactin more than GHRP-6.",
    evidenceScore: 40,
    researchNotes:
      "Multiple human pharmacologic studies confirm dose-dependent GH release. Also raises cortisol and prolactin mildly. Used clinically in some countries as a GH stimulation test.",
    cautions:
      "Not FDA-approved. May increase cortisol and prolactin. Appetite stimulation can be significant.",
    caveats:
      "GH-releasing effect is confirmed but clinical outcome data are limited. Long-term safety unknown.",
    benefits: [
      "Potent GH secretagogue effect confirmed in humans",
      "Useful in diagnostic GH stimulation testing",
      "Preserves pulsatile GH release pattern",
    ],
    dosageNotes:
      "Typical protocols: 100–300 mcg subcutaneously 2–3 times daily, often before meals or at bedtime.",
    sideEffects: [
      "Increased appetite",
      "Elevated cortisol and prolactin",
      "Water retention",
      "Injection-site reactions",
    ],
    tags: ["growth-hormone", "secretagogue", "ghrelin-receptor"],
    scores: { muscle: 40, recovery: 30, energy: 20 },
  },
  {
    slug: "ghrp-6",
    name: "GHRP-6",
    category: "peptide",
    summary:
      "A synthetic hexapeptide growth-hormone secretagogue acting on the ghrelin receptor, known for potent GH release and strong appetite stimulation.",
    quickVerdict:
      "Effective GH secretagogue with well-documented appetite increase. Less selective than newer alternatives like ipamorelin.",
    evidenceScore: 40,
    researchNotes:
      "Extensive human pharmacologic data. Significant GH release but also strong appetite stimulation and modest cortisol/prolactin elevation. One of the earliest GHRPs studied.",
    cautions:
      "Not FDA-approved. Intense hunger can be undesirable. May affect glucose metabolism.",
    caveats:
      "Replaced in many protocols by more selective secretagogues (ipamorelin). Long-term data are limited.",
    benefits: [
      "Robust GH release in human studies",
      "Well-characterized pharmacology",
      "Useful when appetite stimulation is desired",
    ],
    dosageNotes:
      "Typical: 100–300 mcg subcutaneously 2–3 times daily on an empty stomach.",
    sideEffects: [
      "Intense hunger",
      "Water retention",
      "Mild cortisol and prolactin elevation",
      "Injection-site reactions",
    ],
    tags: ["growth-hormone", "secretagogue", "appetite-stimulant"],
    scores: { muscle: 38, recovery: 28, energy: 18 },
  },
  {
    slug: "gonadorelin",
    name: "Gonadorelin",
    category: "peptide",
    summary:
      "Synthetic gonadotropin-releasing hormone (GnRH) used diagnostically to assess pituitary gonadotroph function and therapeutically to maintain LH/FSH pulsatility.",
    quickVerdict:
      "FDA-approved diagnostic agent. Also used off-label to preserve fertility during testosterone therapy. Well-characterized safety profile.",
    evidenceScore: 65,
    researchNotes:
      "Approved product with well-established pharmacology. Off-label use for fertility preservation during TRT is supported by clinical experience but not large RCTs.",
    cautions:
      "Pulsatile administration is required for therapeutic effect. Continuous administration paradoxically suppresses gonadotropins.",
    caveats:
      "Diagnostic use is well validated. Therapeutic fertility-preservation use during TRT is based on clinical practice, not large trials.",
    benefits: [
      "FDA-approved for pituitary function testing",
      "Maintains LH/FSH pulsatility when dosed properly",
      "Preserves testicular function during exogenous testosterone",
    ],
    dosageNotes:
      "Diagnostic: 100 mcg IV. Therapeutic (off-label): 50–100 mcg subcutaneously 2–3 times weekly.",
    sideEffects: [
      "Injection-site reactions",
      "Headache",
      "Flushing",
      "Rare hypersensitivity",
    ],
    tags: ["approved", "fertility", "diagnostic"],
    scores: { libido: 40 },
  },
  {
    slug: "hcg",
    name: "HCG",
    category: "peptide",
    summary:
      "Human chorionic gonadotropin, a glycoprotein hormone that mimics LH, FDA-approved for fertility treatment and widely used off-label to support testosterone therapy.",
    quickVerdict:
      "Well-established pharmaceutical with decades of clinical use. FDA-approved for hypogonadotropic hypogonadism and fertility. Effective for maintaining testicular function during TRT.",
    evidenceScore: 72,
    researchNotes:
      "Extensive clinical literature for fertility and hypogonadism. Off-label TRT adjunct use is well supported by clinical practice and smaller trials.",
    cautions:
      "Prescription-only. Can elevate estradiol significantly. FDA warning against use as a weight-loss agent.",
    caveats:
      "Off-label uses (TRT support, weight loss) vary in evidence quality. Estrogen management may be needed.",
    benefits: [
      "Maintains testicular function and size during TRT",
      "FDA-approved for male and female infertility",
      "Preserves intratesticular testosterone production",
    ],
    dosageNotes:
      "Fertility: 1000–10000 IU IM per protocol. TRT adjunct: 250–500 IU subcutaneously 2–3 times weekly.",
    sideEffects: [
      "Estradiol elevation",
      "Injection-site pain",
      "Headache",
      "Gynecomastia risk",
      "Ovarian hyperstimulation in women",
    ],
    tags: ["approved", "fertility", "hormonal"],
    scores: { libido: 50, muscle: 25 },
  },
  {
    slug: "hexarelin",
    name: "Hexarelin",
    category: "peptide",
    summary:
      "A synthetic hexapeptide growth-hormone secretagogue that acts on the ghrelin receptor, notable for potent GH release and documented cardiac effects.",
    quickVerdict:
      "Among the most potent GHRPs. Notable for cardioprotective properties in preclinical studies. GH response desensitizes with chronic use.",
    evidenceScore: 38,
    researchNotes:
      "Human studies confirm potent GH release but show tachyphylaxis with repeated dosing. Cardioprotective effects demonstrated in vitro and animal models.",
    cautions:
      "Not FDA-approved. GH response diminishes with chronic use. Raises cortisol and prolactin.",
    caveats:
      "Desensitization limits chronic use. Cardiac benefits are preclinical only.",
    benefits: [
      "Potent acute GH secretagogue effect",
      "Cardioprotective properties in preclinical models",
      "Well-characterized in human pharmacology studies",
    ],
    dosageNotes:
      "Typical: 100–200 mcg subcutaneously. Cycling is recommended to avoid desensitization.",
    sideEffects: [
      "Elevated cortisol and prolactin",
      "Water retention",
      "Desensitization with chronic use",
      "Injection-site reactions",
    ],
    tags: ["growth-hormone", "secretagogue", "cardioprotective"],
    scores: { muscle: 38, recovery: 25 },
  },
  {
    slug: "hgh-fragment-176-191",
    name: "HGH Fragment 176-191",
    category: "peptide",
    summary:
      "A synthetic fragment of human growth hormone (amino acids 176-191) studied for lipolytic effects without the growth-promoting or diabetogenic actions of full hGH.",
    quickVerdict:
      "Preclinical data show lipolytic activity. Closely related to AOD-9604. Limited human evidence and no regulatory approval.",
    evidenceScore: 22,
    researchNotes:
      "In-vitro and animal studies show fat-metabolism effects. The closely related AOD-9604 failed its phase IIb obesity trial. Standalone human data are sparse.",
    cautions:
      "Not approved for human use. Gray-market products may be mislabeled AOD-9604 or impure.",
    caveats:
      "The parent compound AOD-9604 failed clinical trials for weight loss. Extrapolation to this fragment is uncertain.",
    benefits: [
      "Lipolytic activity without IGF-1 elevation in preclinical data",
      "Does not appear to cause insulin resistance like full hGH",
    ],
    dosageNotes:
      "Community protocols: 250–500 mcg subcutaneously daily. Not clinically validated.",
    sideEffects: [
      "Injection-site irritation",
      "Possible hypoglycemia",
      "Unknown long-term effects",
    ],
    tags: ["fat-loss", "hgh-fragment", "experimental"],
    scores: { "weight-loss": 25 },
  },
  {
    slug: "human-relaxin-2",
    name: "Human Relaxin-2",
    category: "peptide",
    summary:
      "A naturally occurring peptide hormone with vasodilatory, anti-fibrotic, and connective-tissue-remodeling properties. Recombinant form (serelaxin) was tested for acute heart failure.",
    quickVerdict:
      "Serelaxin showed early promise in RELAX-AHF but failed the confirmatory RELAX-AHF-2 trial. Development for heart failure was discontinued.",
    evidenceScore: 42,
    researchNotes:
      "RELAX-AHF showed dyspnea relief and a trend toward reduced mortality. The larger RELAX-AHF-2 trial failed to confirm survival benefit. Development was halted.",
    cautions:
      "IV infusion only. Development discontinued after failed phase III. Causes hypotension.",
    caveats:
      "Despite positive phase II signals, the pivotal phase III trial was negative for both primary endpoints.",
    benefits: [
      "Dyspnea relief in acute heart failure in RELAX-AHF",
      "Anti-fibrotic and vasodilatory properties well characterized",
      "Possible renal protective effects observed",
    ],
    dosageNotes:
      "RELAX-AHF used 30 mcg/kg/day IV infusion for 48 hours. Not commercially available.",
    sideEffects: [
      "Hypotension",
      "Renal impairment at higher doses",
      "Infusion-site reactions",
    ],
    tags: ["cardiovascular", "discontinued", "anti-fibrotic"],
    scores: { longevity: 20 },
  },
  {
    slug: "humanin",
    name: "Humanin",
    category: "peptide",
    summary:
      "A 24-amino-acid mitochondrial-derived peptide (MDP) with cytoprotective effects against Alzheimer's-related toxicity, oxidative stress, and apoptosis.",
    quickVerdict:
      "Fascinating basic science implicating it in cellular stress protection and aging. Entirely preclinical with no human therapeutic trials.",
    evidenceScore: 20,
    researchNotes:
      "Extensive cell-culture and animal data on neuroprotection and metabolic effects. Circulating levels correlate with longevity in epidemiological studies. No therapeutic trials.",
    cautions:
      "Not available as a therapeutic. Research reagent only. Theoretical concerns about promoting survival of damaged cells.",
    caveats:
      "All data are preclinical or epidemiological. Translation to human therapy is entirely speculative.",
    benefits: [
      "Neuroprotective against amyloid-beta toxicity in vitro",
      "Metabolic protection in animal diabetes models",
      "Epidemiological association with longevity",
    ],
    dosageNotes: "No human dosing established. Research use only.",
    sideEffects: ["Unknown in humans", "Theoretical pro-survival effects on damaged cells"],
    tags: ["mitochondrial", "neuroprotective", "preclinical"],
    scores: { longevity: 25, memory: 15 },
  },
  {
    slug: "igf-1",
    name: "IGF-1",
    category: "peptide",
    summary:
      "Insulin-like Growth Factor 1, the primary mediator of growth hormone effects. Recombinant form (mecasermin) is FDA-approved for severe primary IGF-1 deficiency.",
    quickVerdict:
      "Proven pharmaceutical for severe IGF-1 deficiency. Off-label use for muscle growth or anti-aging carries significant risk, including hypoglycemia and potential cancer promotion.",
    evidenceScore: 60,
    researchNotes:
      "Well-characterized endocrine biology. FDA-approved for a narrow indication. Epidemiological data associate high IGF-1 with increased cancer risk.",
    cautions:
      "Severe hypoglycemia risk. Epidemiological cancer associations. Must be used under medical supervision.",
    caveats:
      "Approved only for severe primary IGF-1 deficiency (Laron syndrome). Off-label use extrapolation is not supported by trial data.",
    benefits: [
      "FDA-approved for severe IGF-1 deficiency",
      "Promotes linear growth and anabolic effects",
      "Well-characterized pharmacology",
    ],
    dosageNotes:
      "Mecasermin (Increlex): 0.04–0.12 mg/kg subcutaneously twice daily with meals.",
    sideEffects: [
      "Severe hypoglycemia",
      "Injection-site lipohypertrophy",
      "Intracranial hypertension",
      "Theoretical cancer risk with supraphysiologic levels",
    ],
    tags: ["approved", "growth-factor", "high-risk"],
    scores: { muscle: 50, recovery: 40 },
  },
  {
    slug: "igf-1-des",
    name: "IGF-1 DES",
    category: "peptide",
    summary:
      "A truncated form of IGF-1 lacking the first 3 amino acids (des(1-3) IGF-1), resulting in reduced binding to IGF-binding proteins and increased bioactivity.",
    quickVerdict:
      "More potent than native IGF-1 at the receptor level due to reduced protein binding. No approved clinical use; carries amplified risks of IGF-1 including hypoglycemia.",
    evidenceScore: 18,
    researchNotes:
      "Well-characterized biochemically. No clinical trials for any indication. Used in cell-culture research and illicitly in bodybuilding.",
    cautions:
      "Higher potency means amplified risks. Severe hypoglycemia danger. No quality-controlled products available.",
    caveats:
      "Entirely preclinical from a therapeutic perspective. Potency increase does not mean improved safety profile.",
    benefits: [
      "Higher receptor-level potency than native IGF-1",
      "Reduced sequestration by binding proteins in vitro",
    ],
    dosageNotes:
      "No validated human dosing. Research use only.",
    sideEffects: [
      "Severe hypoglycemia",
      "Theoretical increased cancer risk",
      "Injection-site reactions",
    ],
    tags: ["research-only", "growth-factor", "high-risk"],
    scores: { muscle: 40 },
  },
  {
    slug: "igf-1-lr3",
    name: "IGF-1 LR3",
    category: "peptide",
    summary:
      "A modified form of IGF-1 with an arginine substitution at position 3 and a 13-amino-acid extension, giving it a much longer half-life and reduced binding-protein affinity.",
    quickVerdict:
      "Research reagent commonly used in cell culture. Not approved for human use. Extreme potency and prolonged activity amplify all IGF-1 risks.",
    evidenceScore: 16,
    researchNotes:
      "Standard cell-culture tool. No clinical trials. Widely used illicitly in bodybuilding. Pharmacologic potency is several-fold higher than native IGF-1.",
    cautions:
      "Extreme hypoglycemia risk. Prolonged activity compared to native IGF-1. No quality control for gray-market products.",
    caveats:
      "Zero clinical data. All use is extrapolated from in-vitro pharmacology and anecdotal bodybuilding reports.",
    benefits: [
      "Extended half-life reduces dosing frequency in research",
      "Potent anabolic activity in cell-culture models",
    ],
    dosageNotes:
      "No validated human dosing. Research use only. Bodybuilding forums cite 20–100 mcg but this is not medically validated.",
    sideEffects: [
      "Severe hypoglycemia",
      "Organ growth with chronic use",
      "Theoretical cancer promotion",
      "Injection-site reactions",
    ],
    tags: ["research-only", "growth-factor", "high-risk"],
    scores: { muscle: 45 },
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    category: "peptide",
    summary:
      "A selective growth-hormone secretagogue pentapeptide that stimulates GH release with minimal effect on cortisol, prolactin, and appetite compared to other GHRPs.",
    quickVerdict:
      "Considered the most selective GHRP available. Popular in anti-aging clinics for its clean side-effect profile. Not FDA-approved.",
    evidenceScore: 42,
    researchNotes:
      "Human studies confirm GH release with minimal cortisol/prolactin elevation. No desensitization observed in available data. Phase II trial for post-operative ileus was conducted.",
    cautions:
      "Not FDA-approved. Long-term safety of chronic GH stimulation remains a concern.",
    caveats:
      "Clinical outcome data (body composition, aging) are limited despite good pharmacologic characterization.",
    benefits: [
      "Selective GH release without significant cortisol or prolactin increase",
      "Minimal appetite stimulation compared to GHRP-6",
      "No observed desensitization with repeated dosing",
    ],
    dosageNotes:
      "Typical clinic protocols: 100–300 mcg subcutaneously at bedtime. Often combined with CJC-1295.",
    sideEffects: [
      "Mild water retention",
      "Injection-site reactions",
      "Occasional headache",
      "Transient numbness or tingling",
    ],
    tags: ["growth-hormone", "secretagogue", "anti-aging"],
    scores: { muscle: 38, recovery: 35, sleep: 25, longevity: 22 },
  },
  {
    slug: "irisin",
    name: "Irisin",
    category: "peptide",
    summary:
      "A myokine cleaved from fibronectin type III domain-containing protein 5 (FNDC5), released during exercise and proposed to mediate browning of white adipose tissue.",
    quickVerdict:
      "Intriguing exercise-mimetic concept but exogenous therapeutic use is entirely preclinical. Its role as a circulating hormone is still debated.",
    evidenceScore: 22,
    researchNotes:
      "Initial 2012 discovery generated excitement. Subsequent controversy about detection methods and true circulating levels. Preclinical data on fat browning are inconsistent.",
    cautions:
      "Not available as a therapeutic. Assay reliability for measuring irisin is debated.",
    caveats:
      "The irisin field has been marked by controversy over detection methods. Translation to therapy is speculative.",
    benefits: [
      "Exercise-mediated adipose browning proposed in animal models",
      "Possible bone-health effects in preclinical data",
    ],
    dosageNotes: "No human dosing established. Research use only.",
    sideEffects: ["Unknown in humans"],
    tags: ["myokine", "preclinical", "exercise-mimetic"],
    scores: { "weight-loss": 15, energy: 10 },
  },
  {
    slug: "kisspeptin",
    name: "Kisspeptin",
    category: "peptide",
    summary:
      "An endogenous neuropeptide that potently stimulates GnRH release, playing a critical role in puberty onset and reproductive function.",
    quickVerdict:
      "Well-studied in reproductive endocrinology with clinical trial data for infertility and hypogonadism. Potential as a diagnostic tool and IVF adjunct.",
    evidenceScore: 48,
    researchNotes:
      "Multiple human studies confirm potent LH release. Clinical trials in IVF as an alternative to hCG trigger show reduced OHSS risk. Ongoing research in hypogonadism.",
    cautions:
      "Investigational for most uses. Continuous administration can paradoxically suppress the reproductive axis.",
    caveats:
      "Most promising as an IVF trigger alternative. Broader therapeutic applications remain under investigation.",
    benefits: [
      "Potent LH/FSH stimulation in human studies",
      "Reduced ovarian hyperstimulation risk as IVF trigger",
      "Diagnostic potential for reproductive disorders",
    ],
    dosageNotes:
      "Clinical trials: 1.6–12.8 nmol/kg IV or subcutaneously. Not commercially available for general use.",
    sideEffects: [
      "Injection-site reactions",
      "Headache",
      "Paradoxical suppression with continuous dosing",
    ],
    tags: ["reproductive", "investigational", "endocrine"],
    scores: { libido: 35 },
  },
  {
    slug: "kpv",
    name: "KPV",
    category: "peptide",
    summary:
      "A C-terminal tripeptide fragment (Lys-Pro-Val) of alpha-melanocyte-stimulating hormone (alpha-MSH) with anti-inflammatory properties.",
    quickVerdict:
      "Preclinical data support anti-inflammatory activity in colitis and skin inflammation models. No human clinical trials published.",
    evidenceScore: 18,
    researchNotes:
      "Animal studies show reduced intestinal inflammation and skin inflammation. Mechanism involves NF-kB pathway inhibition. No human trials.",
    cautions:
      "Not approved for any use. Gray-market products for oral or topical use are not validated.",
    caveats:
      "All data are preclinical. Oral bioavailability and systemic effects in humans are unknown.",
    benefits: [
      "Anti-inflammatory activity in colitis animal models",
      "NF-kB pathway modulation demonstrated in vitro",
      "Lacks melanogenic side effects of full alpha-MSH",
    ],
    dosageNotes:
      "No validated human dosing. Community protocols vary widely.",
    sideEffects: ["Unknown in humans", "Theoretical immunosuppression"],
    tags: ["anti-inflammatory", "preclinical", "gut-health"],
    scores: { immunity: 20, pain: 15 },
  },
  {
    slug: "ll-37",
    name: "LL-37",
    category: "peptide",
    summary:
      "The only human cathelicidin antimicrobial peptide, with broad-spectrum antimicrobial, anti-biofilm, and immunomodulatory properties.",
    quickVerdict:
      "Extensively studied innate immune effector. Therapeutic development is limited by stability, cost, and potential inflammatory side effects at high doses.",
    evidenceScore: 35,
    researchNotes:
      "Hundreds of in-vitro and animal studies. Clinical interest in wound healing, infections, and cancer. A few early-phase human trials for wound applications.",
    cautions:
      "Can be pro-inflammatory at high concentrations. Implicated in rosacea and psoriasis pathogenesis. Not approved as a drug.",
    caveats:
      "Dual nature as both antimicrobial and pro-inflammatory complicates therapeutic development.",
    benefits: [
      "Broad-spectrum antimicrobial and anti-biofilm activity",
      "Wound-healing promotion in preclinical studies",
      "Immunomodulatory properties beyond direct killing",
    ],
    dosageNotes:
      "No established therapeutic dosing. Research and early clinical studies use topical application at varying concentrations.",
    sideEffects: [
      "Pro-inflammatory effects at high doses",
      "Potential to exacerbate rosacea or psoriasis",
      "Injection-site reactions",
    ],
    tags: ["antimicrobial", "innate-immunity", "wound-healing"],
    scores: { immunity: 35, recovery: 25 },
  },
  {
    slug: "lunasin",
    name: "Lunasin",
    category: "peptide",
    summary:
      "A 43-amino-acid soy-derived peptide with epigenetic and anti-inflammatory properties, studied for cholesterol reduction and cancer chemoprevention.",
    quickVerdict:
      "Small human trials show LDL cholesterol reduction. Cancer-preventive claims are preclinical only. Available as a dietary supplement.",
    evidenceScore: 32,
    researchNotes:
      "Several small human trials for cholesterol. In-vitro and animal cancer-prevention data. Epigenetic mechanism (histone acetylation inhibition) is well characterized in vitro.",
    cautions:
      "Soy allergen. Cancer-preventive claims are not established in humans.",
    caveats:
      "Cholesterol trials are small. Cancer data are preclinical. Bioavailability after oral ingestion is debated.",
    benefits: [
      "LDL cholesterol reduction in small human trials",
      "Anti-inflammatory properties in vitro",
      "Soy-derived with generally safe dietary profile",
    ],
    dosageNotes:
      "Supplement products typically provide 10–30 mg/day of lunasin-enriched soy extract.",
    sideEffects: ["Soy allergy risk", "Mild GI discomfort", "Potential estrogenic effects from soy matrix"],
    tags: ["supplement", "cholesterol", "soy-derived"],
    scores: { longevity: 25, immunity: 15 },
  },
  {
    slug: "melanotan-1",
    name: "Melanotan 1",
    category: "peptide",
    summary:
      "A linear alpha-MSH analog (afamelanotide) that stimulates melanogenesis. EMA-approved as Scenesse for erythropoietic protoporphyria (EPP).",
    quickVerdict:
      "One of the few peptides in this list with full regulatory approval for a specific condition (EPP). More selective and safer than Melanotan II.",
    evidenceScore: 58,
    researchNotes:
      "EMA-approved for EPP based on RCT data. Does not cross-activate MC1R/MC4R receptors as broadly as MT-II. Additional research for vitiligo and photoprotection.",
    cautions:
      "Prescription-only for EPP. Implant formulation. Dark-skinned individuals may develop hyperpigmentation.",
    caveats:
      "Approved only for EPP. Cosmetic tanning use is off-label and not evaluated for safety in that context.",
    benefits: [
      "EMA-approved for erythropoietic protoporphyria",
      "Increased pain-free sun exposure in EPP patients",
      "More selective melanocortin receptor profile than MT-II",
    ],
    dosageNotes:
      "Scenesse: 16 mg subcutaneous implant every 2 months (prescribed for EPP only).",
    sideEffects: [
      "Nausea",
      "Headache",
      "Skin darkening",
      "Implant-site reactions",
      "Rare mole changes requiring monitoring",
    ],
    tags: ["approved", "melanocortin", "photoprotection"],
    scores: {},
  },
  {
    slug: "melanotan-2",
    name: "Melanotan 2",
    category: "peptide",
    summary:
      "A cyclic alpha-MSH analog that activates multiple melanocortin receptors, producing skin tanning, appetite suppression, and sexual arousal effects.",
    quickVerdict:
      "Potent tanning and pro-sexual effects. Not approved anywhere. Carries significant risks including mole changes, nausea, and cardiovascular effects.",
    evidenceScore: 35,
    researchNotes:
      "Human studies confirm melanogenic, anorectic, and pro-erectile effects. Safety profile is concerning. FDA has issued warnings against its use.",
    cautions:
      "Not approved in any jurisdiction. Changes to existing moles raise melanoma screening concerns. Cardiovascular and CNS effects possible.",
    caveats:
      "Broad melanocortin receptor activation produces multiple off-target effects. Long-term melanoma risk is unknown.",
    benefits: [
      "Effective skin tanning without UV exposure",
      "Pro-sexual effects documented in clinical studies",
      "Appetite suppression observed",
    ],
    dosageNotes:
      "Community protocols: 0.25–1 mg subcutaneously. Loading phase followed by maintenance. Not medically validated.",
    sideEffects: [
      "Nausea",
      "Facial flushing",
      "Mole darkening and changes",
      "Unintended erections",
      "Increased blood pressure",
      "Fatigue",
    ],
    tags: ["melanocortin", "tanning", "unapproved"],
    scores: { libido: 50, "weight-loss": 20 },
  },
  {
    slug: "mgf",
    name: "MGF",
    category: "peptide",
    summary:
      "Mechano Growth Factor, a splice variant of IGF-1 (IGF-1Ec) released by mechanically stimulated muscle, proposed to activate satellite cells for muscle repair.",
    quickVerdict:
      "Interesting biology linking mechanical loading to muscle repair. No human clinical trials. Extremely short half-life limits injectable utility.",
    evidenceScore: 16,
    researchNotes:
      "Identified in mechanically loaded muscle. In-vitro data show satellite cell activation. No human pharmacokinetic or efficacy data. Half-life is minutes.",
    cautions:
      "No clinical data. Ultra-short half-life makes unmodified MGF impractical. Gray-market product quality is suspect.",
    caveats:
      "Biological concept is sound but translation to injectable therapy is unvalidated. PEGylated form (PEG-MGF) attempts to address half-life.",
    benefits: [
      "Satellite cell activation demonstrated in vitro",
      "Endogenous role in exercise-induced muscle repair",
    ],
    dosageNotes:
      "No validated human dosing. Community protocols cite 100–200 mcg locally injected but this is not evidence-based.",
    sideEffects: ["Unknown in humans", "Injection-site reactions", "Theoretical IGF-related risks"],
    tags: ["research-only", "muscle-repair", "igf-variant"],
    scores: { muscle: 20, recovery: 20 },
  },
  {
    slug: "mif-1",
    name: "MIF-1",
    category: "peptide",
    summary:
      "Melanocyte-stimulating hormone release-inhibiting factor (Pro-Leu-Gly-NH2), a small endogenous peptide with anti-opiate and antidepressant properties in early studies.",
    quickVerdict:
      "Studied in the 1970s–90s for depression and opiate withdrawal. Results were modest and research interest faded. Not developed commercially.",
    evidenceScore: 22,
    researchNotes:
      "Small clinical studies from the 1970s–90s showed modest antidepressant and anti-opiate effects. Research did not progress to modern clinical development.",
    cautions:
      "Not commercially available. Historical research compound only.",
    caveats:
      "Data are decades old and methodologically dated by modern standards.",
    benefits: [
      "Modest antidepressant effects in early human studies",
      "Anti-opiate withdrawal activity reported",
      "Crosses the blood-brain barrier",
    ],
    dosageNotes:
      "Historical trials used 10–60 mg IV or oral. No current clinical protocols.",
    sideEffects: ["Minimal side effects reported in historical studies", "Headache"],
    tags: ["neuropeptide", "historical", "antidepressant"],
    scores: { mood: 20, pain: 15 },
  },
  {
    slug: "modified-grf-1-29",
    name: "Modified GRF 1-29",
    category: "peptide",
    summary:
      "A modified fragment of growth-hormone-releasing hormone (amino acids 1-29) with amino acid substitutions at positions 2, 8, 15, and 27 for improved stability. Often called CJC-1295 without DAC or Mod GRF.",
    quickVerdict:
      "The most commonly used GHRH analog in peptide clinic protocols. Produces physiologic pulsatile GH release when combined with a GHRP.",
    evidenceScore: 40,
    researchNotes:
      "Human pharmacologic data confirm GH release. Widely used in anti-aging protocols combined with ipamorelin. Formally identical to CJC-1295 without DAC.",
    cautions:
      "Not FDA-approved. Long-term effects of chronic GH-axis stimulation are uncertain.",
    caveats:
      "Clinical outcome data are limited to GH/IGF-1 levels. Body composition and aging outcomes are not well studied.",
    benefits: [
      "Preserves physiologic pulsatile GH release",
      "Synergistic with GH secretagogues like ipamorelin",
      "Improved stability over native GRF 1-29",
    ],
    dosageNotes:
      "Typical: 100 mcg subcutaneously at bedtime, combined with 100–300 mcg ipamorelin.",
    sideEffects: [
      "Flushing",
      "Headache",
      "Injection-site reactions",
      "Mild water retention",
    ],
    tags: ["growth-hormone", "ghrh-analog", "anti-aging"],
    scores: { muscle: 38, recovery: 32, sleep: 22, longevity: 22 },
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    category: "peptide",
    summary:
      "A mitochondrial-derived peptide encoded in the 12S rRNA gene, proposed as an exercise mimetic with effects on AMPK activation and metabolic regulation.",
    quickVerdict:
      "Exciting preclinical data as an exercise and metabolic mimetic. Human studies are beginning but no therapeutic product exists.",
    evidenceScore: 25,
    researchNotes:
      "Rodent studies show improved glucose homeostasis, exercise capacity, and lifespan effects. A small human pharmacokinetic study has been completed. Circulating levels decline with age.",
    cautions:
      "Not approved for any use. Injectable products from gray-market sources are unvalidated.",
    caveats:
      "Primarily rodent data. The human PK study did not evaluate efficacy endpoints.",
    benefits: [
      "AMPK activation and improved insulin sensitivity in mice",
      "Exercise-mimetic effects in aged mouse models",
      "Circulating levels correlate with metabolic health in observational data",
    ],
    dosageNotes:
      "No validated human dosing. Rodent studies use 5–15 mg/kg IP. Community protocols cite 5–10 mg subcutaneously weekly.",
    sideEffects: ["Unknown in humans", "Injection-site reactions"],
    tags: ["mitochondrial", "exercise-mimetic", "metabolic"],
    scores: { energy: 25, longevity: 30, "weight-loss": 20 },
  },
  {
    slug: "n-acetyl-epitalon",
    name: "N-Acetyl Epitalon",
    category: "peptide",
    summary:
      "An N-acetylated form of epitalon designed for improved stability and potentially enhanced bioavailability compared to standard epitalon.",
    quickVerdict:
      "Theoretically more stable than epitalon but even less studied. No independent clinical data exist for this specific modification.",
    evidenceScore: 12,
    researchNotes:
      "No independent publications on this specific acetylated form. Rationale is extrapolated from general N-acetylation peptide chemistry and epitalon literature.",
    cautions:
      "Even less studied than epitalon. No safety or efficacy data specific to this form.",
    caveats:
      "Claims of improved bioavailability are theoretical. No comparative studies with standard epitalon.",
    benefits: [
      "Potentially improved stability over standard epitalon",
      "Theoretical improved oral or nasal bioavailability",
    ],
    dosageNotes: "No validated dosing. Extrapolated from epitalon community protocols.",
    sideEffects: ["Unknown", "Theoretical oncogenic risk from telomerase activation"],
    tags: ["anti-aging", "modified-peptide", "experimental"],
    scores: { longevity: 20 },
  },
  {
    slug: "n-acetyl-selank",
    name: "N-Acetyl Selank",
    category: "peptide",
    summary:
      "An N-acetylated form of selank designed for improved intranasal bioavailability and resistance to enzymatic degradation.",
    quickVerdict:
      "Based on the selank platform with theoretical pharmacokinetic improvements. Specific data on this acetylated form are very limited.",
    evidenceScore: 22,
    researchNotes:
      "Extrapolated from selank literature. N-acetylation is a common peptide modification to improve stability. Specific comparative data are lacking.",
    cautions:
      "Not approved in Western countries. Even the parent compound selank is only approved in Russia.",
    caveats:
      "Benefits are inferred from selank data. No independent validation of the acetylated form.",
    benefits: [
      "Potentially improved nasal bioavailability",
      "Anxiolytic effects extrapolated from selank data",
      "Enhanced enzymatic stability theorized",
    ],
    dosageNotes:
      "Community protocols mirror selank dosing: 200–600 mcg intranasally. Not clinically validated for this form.",
    sideEffects: ["Nasal irritation", "Fatigue", "Headache"],
    tags: ["nootropic", "anxiolytic", "modified-peptide"],
    scores: { anxiety: 30, stress: 25, focus: 20 },
  },
  {
    slug: "n-acetyl-semax",
    name: "N-Acetyl Semax",
    category: "peptide",
    summary:
      "An N-acetylated form of semax designed for enhanced stability and bioavailability, with claimed nootropic and neuroprotective properties.",
    quickVerdict:
      "Popular in the nootropics community as a more potent version of semax. Specific clinical data on this acetylated form are minimal.",
    evidenceScore: 24,
    researchNotes:
      "Evidence is largely extrapolated from semax studies. Anecdotal reports suggest stronger nootropic effects than standard semax. No comparative clinical trials.",
    cautions:
      "Not approved in Western countries. Parent compound semax is approved only in Russia.",
    caveats:
      "Comparative efficacy over standard semax is not clinically established.",
    benefits: [
      "Enhanced stability over standard semax",
      "Nootropic effects inferred from semax literature",
      "Convenient intranasal administration",
    ],
    dosageNotes:
      "Community protocols: 200–600 mcg intranasally daily. Not clinically validated.",
    sideEffects: ["Nasal irritation", "Headache", "Irritability at higher doses"],
    tags: ["nootropic", "neuroprotective", "modified-peptide"],
    scores: { focus: 30, memory: 28, mood: 18 },
  },
  {
    slug: "neurotrophin-3",
    name: "Neurotrophin-3",
    category: "peptide",
    summary:
      "A neurotrophic factor (NT-3) that supports survival and differentiation of neurons, particularly proprioceptive sensory neurons and motor neurons.",
    quickVerdict:
      "Well-characterized neurotrophic factor in basic neuroscience. Clinical development has been limited by delivery challenges across the blood-brain barrier.",
    evidenceScore: 28,
    researchNotes:
      "Extensive preclinical data on neuronal survival and regeneration. Small clinical trials for neuropathy. Delivery remains a major pharmacological challenge.",
    cautions:
      "Not commercially available as a therapeutic. BBB penetration is poor with systemic administration.",
    caveats:
      "Strong preclinical rationale but clinical translation has been hampered by pharmacokinetic limitations.",
    benefits: [
      "Supports neuronal survival and differentiation preclinically",
      "Potential for peripheral neuropathy treatment",
      "Well-studied neurotrophic signaling biology",
    ],
    dosageNotes:
      "Clinical trials used subcutaneous injections at varying doses. No standard therapeutic protocol.",
    sideEffects: ["Injection-site reactions", "Paresthesias", "Cough reported in trials"],
    tags: ["neurotrophic", "neuroprotective", "investigational"],
    scores: { recovery: 20, pain: 18 },
  },
  {
    slug: "oxytocin",
    name: "Oxytocin",
    category: "peptide",
    summary:
      "A nine-amino-acid neuropeptide hormone involved in social bonding, uterine contraction, and milk ejection. FDA-approved for labor induction and postpartum hemorrhage.",
    quickVerdict:
      "Well-established pharmaceutical with decades of obstetric use. Intranasal forms are studied for social cognition, autism, and anxiety with mixed results.",
    evidenceScore: 70,
    researchNotes:
      "Extensive clinical use in obstetrics. Intranasal oxytocin research for social cognition and psychiatry has produced inconsistent results in RCTs despite popular interest.",
    cautions:
      "IV oxytocin requires medical supervision due to uterine hyperstimulation and water-intoxication risk. Intranasal safety for chronic use is not established.",
    caveats:
      "Obstetric use is well validated. Psychiatric and social-cognition applications remain investigational with mixed trial results.",
    benefits: [
      "FDA-approved for labor induction and postpartum hemorrhage",
      "Well-characterized safety profile in obstetric use",
      "Some evidence for improved social cognition in specific populations",
    ],
    dosageNotes:
      "Obstetric: IV titration per hospital protocol. Intranasal research: 24–40 IU per dose.",
    sideEffects: [
      "Uterine hyperstimulation (IV)",
      "Water intoxication at high doses",
      "Nausea",
      "Headache",
      "Nasal irritation (intranasal)",
    ],
    tags: ["approved", "neuropeptide", "hormonal"],
    scores: { mood: 35, anxiety: 30, stress: 28 },
  },
  {
    slug: "p21",
    name: "P21",
    category: "peptide",
    summary:
      "A synthetic peptide derived from ciliary neurotrophic factor (CNTF) that promotes neurogenesis by inhibiting leukemia inhibitory factor signaling, studied for cognitive enhancement.",
    quickVerdict:
      "Preclinical data in Alzheimer's mouse models show increased neurogenesis and reduced tau pathology. No human clinical trials exist.",
    evidenceScore: 16,
    researchNotes:
      "Mouse studies from a single group show improved memory and neurogenesis. Mechanism involves LIF receptor antagonism. No human data.",
    cautions:
      "Not approved for any use. No human safety data. Gray-market products are unverified.",
    caveats:
      "All data from a single research group in mouse models. Human translation is speculative.",
    benefits: [
      "Increased neurogenesis in Alzheimer's mouse models",
      "Reduced tau hyperphosphorylation in mice",
      "Novel mechanism distinct from cholinesterase inhibitors",
    ],
    dosageNotes:
      "No validated human dosing. Mouse studies use 50 mcg/day IP.",
    sideEffects: ["Unknown in humans", "Injection-site reactions possible"],
    tags: ["nootropic", "neurogenesis", "preclinical"],
    scores: { memory: 20, focus: 15 },
  },
  {
    slug: "pacap",
    name: "PACAP",
    category: "peptide",
    summary:
      "Pituitary Adenylate Cyclase-Activating Polypeptide, a pleiotropic neuropeptide with roles in neuroprotection, vasodilation, immune modulation, and migraine pathophysiology.",
    quickVerdict:
      "Important research neuropeptide linked to migraine and neuroprotection. PACAP receptor antagonists are under clinical development for migraine, but PACAP itself is not used therapeutically.",
    evidenceScore: 35,
    researchNotes:
      "PACAP infusion triggers migraine in susceptible individuals, validating it as a target. PACAP receptor (PAC1) antagonists are in clinical trials. Neuroprotective effects are preclinical.",
    cautions:
      "Exogenous PACAP administration causes migraine, flushing, and hypotension. Not suitable as a general therapeutic.",
    caveats:
      "Value is primarily as a research tool and drug target, not as an exogenous therapeutic agent.",
    benefits: [
      "Validates migraine pathophysiology research",
      "Neuroprotective effects in preclinical stroke models",
      "Important target for next-generation migraine therapies",
    ],
    dosageNotes:
      "Research use: IV infusion at pmol/kg/min. Not a therapeutic peptide for self-administration.",
    sideEffects: [
      "Migraine induction",
      "Flushing",
      "Hypotension",
      "Palpitations",
    ],
    tags: ["neuropeptide", "migraine-research", "neuroprotective"],
    scores: { pain: 15, stress: 15 },
  },
  {
    slug: "pal-ghk",
    name: "PAL-GHK (Palmitoyl Tripeptide-1)",
    category: "peptide",
    summary:
      "A lipophilic derivative of the GHK peptide (palmitoyl tripeptide-1) designed for improved skin penetration, widely used in anti-aging cosmetic formulations.",
    quickVerdict:
      "Popular cosmetic active ingredient. The palmitoyl modification improves skin absorption. Clinical evidence is mostly manufacturer-sponsored.",
    evidenceScore: 28,
    researchNotes:
      "In-vitro and small clinical studies show collagen stimulation and wrinkle reduction. Often paired with palmitoyl tetrapeptide-7 (Matrixyl 3000). Independent data are limited.",
    cautions:
      "Cosmetic ingredient only. Not a drug. Efficacy claims may be overstated by manufacturers.",
    caveats:
      "Evidence is primarily from cosmetic industry studies. Independent academic replication is sparse.",
    benefits: [
      "Improved skin penetration over GHK alone",
      "Collagen stimulation in vitro and small clinical studies",
      "Widely available in commercial skincare products",
    ],
    dosageNotes:
      "Topical use in cosmetic serums and creams at proprietary concentrations.",
    sideEffects: ["Mild skin irritation possible", "Contact dermatitis in sensitive skin"],
    tags: ["cosmetic", "anti-aging", "topical"],
    scores: { longevity: 15 },
  },
  {
    slug: "peg-mgf",
    name: "PEG-MGF",
    category: "peptide",
    summary:
      "PEGylated Mechano Growth Factor, a modified IGF-1 splice variant with polyethylene glycol conjugation to extend its otherwise ultra-short half-life.",
    quickVerdict:
      "PEGylation addresses native MGF's minutes-long half-life. No human clinical data. Used primarily in bodybuilding circles with unverified products.",
    evidenceScore: 14,
    researchNotes:
      "Rationale is to extend MGF half-life for practical dosing. No published human pharmacokinetic or efficacy studies. Animal data are sparse.",
    cautions:
      "No clinical data. Gray-market PEG-MGF products may not contain the claimed compound. PEGylation adds immunogenicity risk.",
    caveats:
      "Entirely speculative therapeutic utility. PEGylation may alter bioactivity in unpredictable ways.",
    benefits: [
      "Extended half-life over native MGF",
      "Theoretical satellite cell activation for muscle repair",
    ],
    dosageNotes:
      "No validated dosing. Bodybuilding forums cite 200 mcg intramuscularly 2–3 times weekly.",
    sideEffects: [
      "Unknown in humans",
      "PEG-related immune reactions possible",
      "Injection-site reactions",
    ],
    tags: ["experimental", "muscle-repair", "pegylated"],
    scores: { muscle: 18, recovery: 15 },
  },
  {
    slug: "pinealon",
    name: "Pinealon",
    category: "peptide",
    summary:
      "A Khavinson bioregulator tripeptide (Glu-Asp-Arg) targeted at pineal gland function and central nervous system regulation.",
    quickVerdict:
      "Part of the Khavinson peptide series. Evidence limited to Russian publications without international replication.",
    evidenceScore: 12,
    researchNotes:
      "Russian-language studies from the Khavinson group claim neuroprotective and sleep-regulatory effects. No independent validation.",
    cautions:
      "Not approved outside Russia. Product authenticity from commercial sources is unverified.",
    caveats:
      "All data from a single research group. Claims are not independently replicated.",
    benefits: [
      "Claimed CNS and pineal gland support in Russian literature",
      "Oral bioregulator format",
    ],
    dosageNotes: "Russian protocols: 5–10 mg/day orally for 10–30 day courses.",
    sideEffects: ["Not well characterized", "Drowsiness possible"],
    tags: ["bioregulator", "khavinson", "neuroprotective"],
    scores: { sleep: 15, mood: 12 },
  },
  {
    slug: "prostatilen",
    name: "Prostatilen",
    category: "peptide",
    summary:
      "A peptide extract from bovine prostate tissue, approved in Russia for chronic prostatitis and benign prostatic hyperplasia.",
    quickVerdict:
      "Approved and widely used in Russia/CIS for prostate conditions. Not recognized by Western regulatory agencies. Evidence quality is variable.",
    evidenceScore: 30,
    researchNotes:
      "Multiple Russian clinical studies for chronic prostatitis and BPH. Limited international publication. Not evaluated by EMA or FDA.",
    cautions:
      "Animal-derived biological. Not approved outside Russia/CIS. Quality varies by manufacturer.",
    caveats:
      "Evidence is predominantly from Russian literature with variable methodology. Not independently validated internationally.",
    benefits: [
      "Approved in Russia for chronic prostatitis",
      "Some clinical data for BPH symptom improvement",
      "Generally well tolerated in published studies",
    ],
    dosageNotes:
      "Russian protocols: 30–50 mg rectal suppositories daily for 5–10 days, or 5 mg IM daily.",
    sideEffects: [
      "Local irritation with suppositories",
      "Allergic reactions rare",
      "Injection-site pain",
    ],
    tags: ["approved-in-russia", "prostate", "biological"],
    scores: { pain: 20 },
  },
  {
    slug: "pt-141",
    name: "PT-141",
    category: "peptide",
    summary:
      "Bremelanotide, a cyclic melanocortin peptide that activates MC4R in the CNS to produce pro-sexual effects. FDA-approved as Vyleesi for hypoactive sexual desire disorder in premenopausal women.",
    quickVerdict:
      "One of the few peptides on this list with FDA approval. Demonstrated efficacy for female HSDD. Nausea is a significant side effect.",
    evidenceScore: 62,
    researchNotes:
      "Two pivotal RCTs (RECONNECT) led to FDA approval in 2019. Statistically significant improvement in sexual desire. Nausea affected ~40% of patients. Also studied for male erectile dysfunction.",
    cautions:
      "FDA-approved for premenopausal women only. Not for use with cardiovascular disease. Causes transient blood pressure increase. Limited to 8 doses per month per label.",
    caveats:
      "Effect size is modest. High nausea rate limits tolerability. Male ED use is off-label and less well studied.",
    benefits: [
      "FDA-approved for hypoactive sexual desire disorder",
      "CNS mechanism distinct from peripheral vasodilators",
      "Demonstrated efficacy in pivotal RCTs",
    ],
    dosageNotes:
      "Vyleesi: 1.75 mg subcutaneously at least 45 minutes before anticipated activity. Maximum 8 doses/month.",
    sideEffects: [
      "Nausea (40%+)",
      "Flushing",
      "Headache",
      "Transient blood pressure elevation",
      "Injection-site reactions",
      "Skin hyperpigmentation with repeated use",
    ],
    tags: ["approved", "melanocortin", "sexual-health"],
    scores: { libido: 55 },
  },
  {
    slug: "rapastinel",
    name: "Rapastinel",
    category: "peptide",
    summary:
      "A tetrapeptide (GLYX-13) that acts as an NMDA receptor modulator with glycine-site partial agonist activity, developed as a rapid-acting antidepressant.",
    quickVerdict:
      "Phase II data showed rapid antidepressant effects within hours. Phase III trials failed to meet primary endpoints and development was discontinued.",
    evidenceScore: 35,
    researchNotes:
      "Phase II trial showed antidepressant effects at 2 hours post-dose lasting ~7 days. Three phase III trials failed to separate from placebo. Allergan discontinued development.",
    cautions:
      "Clinical development discontinued after phase III failure. Not commercially available.",
    caveats:
      "Promising mechanism but failed in confirmatory trials. Reasons for phase III failure are debated.",
    benefits: [
      "Rapid antidepressant effect within hours in phase II",
      "NMDA modulation without dissociative side effects",
      "Novel mechanism of action",
    ],
    dosageNotes:
      "Phase II: single IV dose of 5–10 mg/kg. Not commercially available.",
    sideEffects: [
      "Generally well tolerated in trials",
      "Headache",
      "Dizziness",
      "Dissociation not observed at therapeutic doses",
    ],
    tags: ["antidepressant", "discontinued", "nmda-modulator"],
    scores: { mood: 30, anxiety: 20 },
  },
  {
    slug: "retinalamin",
    name: "Retinalamin",
    category: "peptide",
    summary:
      "A polypeptide extract from bovine retinal tissue, approved in Russia for diabetic retinopathy and other retinal degenerative conditions.",
    quickVerdict:
      "Approved in Russia with local clinical data. Not recognized by Western regulators. Evidence quality is limited to Russian publications.",
    evidenceScore: 25,
    researchNotes:
      "Russian clinical studies report improved visual function in diabetic retinopathy and age-related macular degeneration. No international trials or replication.",
    cautions:
      "Animal-derived biological. Not approved outside Russia/CIS. Requires periocular or IM injection.",
    caveats:
      "Evidence base is confined to Russian literature. Methodological quality is variable.",
    benefits: [
      "Approved in Russia for retinal degenerative conditions",
      "Some clinical data for diabetic retinopathy symptom improvement",
    ],
    dosageNotes:
      "Russian protocols: 5 mg parabulbar or IM injection daily for 10 days.",
    sideEffects: [
      "Injection-site reactions",
      "Allergic reactions rare",
      "Eye irritation with periocular injection",
    ],
    tags: ["approved-in-russia", "ophthalmology", "biological"],
    scores: {},
  },
  {
    slug: "selank",
    name: "Selank",
    category: "peptide",
    summary:
      "A synthetic heptapeptide analog of the immunomodulatory peptide tuftsin, developed in Russia and approved there as an anxiolytic and nootropic nasal spray.",
    quickVerdict:
      "Approved in Russia for generalized anxiety. Mechanism involves GABA, serotonin, and BDNF modulation. Not evaluated by Western regulators.",
    evidenceScore: 40,
    researchNotes:
      "Several Russian clinical trials support anxiolytic efficacy comparable to benzodiazepines without sedation or dependence. Limited international replication.",
    cautions:
      "Approved only in Russia. Western regulatory evaluation has not occurred. Product sourcing outside Russia may be unreliable.",
    caveats:
      "Clinical data are predominantly Russian. Independent replication in Western trials would strengthen the evidence considerably.",
    benefits: [
      "Anxiolytic effects without sedation or dependence potential",
      "BDNF upregulation and nootropic properties reported",
      "Immunomodulatory effects from tuftsin backbone",
    ],
    dosageNotes:
      "Russian approved dose: 0.15% nasal spray, 2–3 drops per nostril, 3 times daily for 14 days.",
    sideEffects: [
      "Nasal irritation",
      "Mild fatigue",
      "Headache occasionally",
    ],
    tags: ["anxiolytic", "nootropic", "approved-in-russia"],
    scores: { anxiety: 45, stress: 40, focus: 28, mood: 25 },
  },
  {
    slug: "semax",
    name: "Semax",
    category: "peptide",
    summary:
      "A synthetic heptapeptide analog of ACTH (4-10) with an added Pro-Gly-Pro sequence, approved in Russia as a nootropic and neuroprotective nasal spray.",
    quickVerdict:
      "Approved in Russia for cognitive impairment and stroke recovery. Upregulates BDNF and modulates monoamine systems. Not evaluated by Western regulators.",
    evidenceScore: 42,
    researchNotes:
      "Russian clinical trials and approved uses include stroke recovery, cognitive impairment, and optic nerve disease. BDNF upregulation is well documented. Limited Western data.",
    cautions:
      "Approved only in Russia. May modulate the HPA axis at higher doses. Product quality from non-Russian sources varies.",
    caveats:
      "Strong Russian clinical data but lacking independent Western replication. Publication bias is possible.",
    benefits: [
      "BDNF upregulation well documented",
      "Approved for post-stroke cognitive recovery in Russia",
      "Nootropic and neuroprotective properties reported",
      "Non-sedating with no dependence potential",
    ],
    dosageNotes:
      "Russian approved dose: 0.1% nasal spray, 2–3 drops per nostril 2–3 times daily. Higher-dose 1% formulation exists for stroke.",
    sideEffects: [
      "Nasal irritation",
      "Headache",
      "Irritability at higher doses",
    ],
    tags: ["nootropic", "neuroprotective", "approved-in-russia"],
    scores: { focus: 42, memory: 38, mood: 22, energy: 20 },
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    category: "peptide",
    summary:
      "A synthetic 29-amino-acid fragment of growth-hormone-releasing hormone (GHRH 1-29). Previously FDA-approved for pediatric growth hormone deficiency, now used off-label in anti-aging medicine.",
    quickVerdict:
      "The original GHRH analog with the longest track record. FDA approval was withdrawn for commercial reasons, not safety. Widely used in anti-aging clinics.",
    evidenceScore: 55,
    researchNotes:
      "Was FDA-approved as Geref for GH deficiency testing. Clinical data support GH/IGF-1 increase and body-composition improvements. Manufacturing difficulties led to market withdrawal.",
    cautions:
      "No longer FDA-approved (market withdrawal, not safety recall). Long-term safety of chronic use is not fully established.",
    caveats:
      "Solid pharmacological data but clinical outcome studies for anti-aging are limited. Market withdrawal was business-related.",
    benefits: [
      "Longest clinical track record among GHRH analogs",
      "Preserves physiologic pulsatile GH release",
      "Documented improvements in body composition and sleep quality",
    ],
    dosageNotes:
      "Typical anti-aging clinic dose: 200–500 mcg subcutaneously at bedtime.",
    sideEffects: [
      "Injection-site reactions",
      "Facial flushing",
      "Headache",
      "Dizziness",
      "Mild water retention",
    ],
    tags: ["growth-hormone", "ghrh-analog", "anti-aging"],
    scores: { muscle: 38, recovery: 35, sleep: 30, longevity: 25 },
  },
  {
    slug: "solcoseryl",
    name: "Solcoseryl",
    category: "peptide",
    summary:
      "A deproteinized hemodialysate of calf blood containing a mixture of low-molecular-weight peptides, amino acids, and metabolites. Used in some countries for wound healing and tissue repair.",
    quickVerdict:
      "Available in many countries outside the US for wound healing and mucosal repair. Evidence quality is moderate, largely from European and Asian studies.",
    evidenceScore: 32,
    researchNotes:
      "Clinical studies in dental ulcer healing, wound repair, and peripheral vascular disease. Not FDA-approved. Approved in various forms (topical, injectable) in multiple countries.",
    cautions:
      "Animal-derived product. Theoretical prion risk. Not available in the US or UK.",
    caveats:
      "Clinical evidence is moderate but dated. Modern formulation consistency across manufacturers may vary.",
    benefits: [
      "Accelerated wound healing in dental and dermal studies",
      "Improved tissue oxygenation in preclinical models",
      "Available in topical and injectable forms in multiple countries",
    ],
    dosageNotes:
      "Topical: apply gel or ointment 2–3 times daily. Injectable: 2–4 mL IM or IV per clinical protocol.",
    sideEffects: [
      "Local burning with topical application",
      "Allergic reactions rare",
      "Injection-site pain",
    ],
    tags: ["wound-healing", "biological", "approved-in-some-countries"],
    scores: { recovery: 30 },
  },
  {
    slug: "somatostatin",
    name: "Somatostatin",
    category: "peptide",
    summary:
      "An endogenous cyclic peptide hormone that inhibits the release of growth hormone, insulin, glucagon, and numerous GI hormones. Synthetic analogs (octreotide, lanreotide) are widely used clinically.",
    quickVerdict:
      "Well-established endocrine biology. Native somatostatin is rarely used due to its very short half-life; synthetic analogs are standard of care for acromegaly and neuroendocrine tumors.",
    evidenceScore: 68,
    researchNotes:
      "Extensive clinical use via analogs (octreotide, lanreotide, pasireotide). Native somatostatin used in acute variceal bleeding. One of the most well-characterized regulatory peptides.",
    cautions:
      "Native form requires continuous IV infusion. Analogs can cause gallstones, hyperglycemia, and GI effects.",
    caveats:
      "Clinical utility is through analogs, not native somatostatin for most indications.",
    benefits: [
      "Standard-of-care analogs for acromegaly and carcinoid tumors",
      "Native peptide used in acute variceal bleeding",
      "Well-characterized endocrine inhibitory functions",
    ],
    dosageNotes:
      "Native: 250 mcg/hr IV infusion for variceal bleeding. Octreotide: 100–500 mcg SC 2–3 times daily.",
    sideEffects: [
      "Gallstones (with chronic analog use)",
      "Hyperglycemia or hypoglycemia",
      "GI disturbances (diarrhea, steatorrhea)",
      "Injection-site reactions",
    ],
    tags: ["endogenous", "hormonal", "well-studied"],
    scores: {},
  },
  {
    slug: "ss-31",
    name: "SS-31",
    category: "peptide",
    summary:
      "Elamipretide, a mitochondria-targeted tetrapeptide that concentrates in the inner mitochondrial membrane to stabilize cardiolipin and improve oxidative phosphorylation.",
    quickVerdict:
      "Advanced clinical pipeline for mitochondrial myopathies (Barth syndrome) and heart failure. Phase III results have been mixed.",
    evidenceScore: 42,
    researchNotes:
      "Phase II/III trials for Barth syndrome, primary mitochondrial myopathy, and heart failure. Barth syndrome data were promising; heart failure phase III (PROGRESS-HF) did not meet primary endpoint.",
    cautions:
      "Investigational drug. Not approved. Mixed phase III results raise efficacy questions.",
    caveats:
      "Promising mechanism and phase II data but phase III confirmation has been inconsistent.",
    benefits: [
      "Mitochondrial-targeted mechanism well characterized",
      "Improved cardiac function in Barth syndrome studies",
      "Potential for broad mitochondrial disease applications",
    ],
    dosageNotes:
      "Clinical trials: 4–40 mg subcutaneously daily. Not commercially available.",
    sideEffects: [
      "Injection-site reactions",
      "Headache",
      "Contact urticaria at injection site",
    ],
    tags: ["mitochondrial", "investigational", "cardioprotective"],
    scores: { energy: 30, longevity: 30, recovery: 25 },
  },
  {
    slug: "tau-peptide",
    name: "Tau Peptide",
    category: "peptide",
    summary:
      "Synthetic peptide fragments derived from or targeting the tau protein, studied in the context of tauopathy immunotherapy and Alzheimer's disease vaccine development.",
    quickVerdict:
      "Research tool and immunotherapy target. Anti-tau vaccines and antibodies are in clinical development but individual tau peptide fragments are not standalone therapeutics.",
    evidenceScore: 22,
    researchNotes:
      "Multiple anti-tau immunotherapy trials ongoing (semorinemab, zagotenemab, AADvac1). Tau peptide fragments are used as immunogens, not as direct therapies.",
    cautions:
      "Not a standalone therapeutic. Anti-tau immunotherapy carries immune-related risks.",
    caveats:
      "Value is as a research and immunotherapy component, not as an injectable peptide for consumers.",
    benefits: [
      "Central target in tauopathy immunotherapy development",
      "AADvac1 tau-peptide vaccine showed immune response in phase II",
    ],
    dosageNotes: "Not applicable as a standalone consumer peptide.",
    sideEffects: ["Injection-site reactions with vaccine formulations", "Immune-mediated reactions possible"],
    tags: ["research-only", "immunotherapy", "neuroscience"],
    scores: { memory: 15 },
  },
  {
    slug: "tb-500",
    name: "TB-500",
    category: "peptide",
    summary:
      "A synthetic fragment of thymosin beta-4, a naturally occurring 43-amino-acid peptide involved in cell migration, angiogenesis, and wound healing.",
    quickVerdict:
      "Widely used in veterinary medicine (racehorses). Human evidence is largely anecdotal. Preclinical wound-healing and cardiac-repair data are promising.",
    evidenceScore: 28,
    researchNotes:
      "Extensive preclinical data on wound healing, cardiac repair, and neuroplasticity. Veterinary use is common. Human clinical trials are sparse but some are underway.",
    cautions:
      "Not approved for human use. Gray-market products may contain partial sequences. Veterinary use does not validate human safety.",
    caveats:
      "Strong preclinical rationale but near-zero published human trial data. Veterinary anecdotes are not substitutes for RCTs.",
    benefits: [
      "Promotes cell migration and angiogenesis preclinically",
      "Cardiac repair effects in animal models",
      "Anti-inflammatory properties documented in vitro",
    ],
    dosageNotes:
      "Community protocols: 2–5 mg subcutaneously twice weekly during loading, then weekly. Not clinically validated.",
    sideEffects: [
      "Injection-site reactions",
      "Headache",
      "Lethargy reported anecdotally",
    ],
    tags: ["wound-healing", "experimental", "veterinary-use"],
    scores: { recovery: 45, pain: 30 },
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    category: "peptide",
    summary:
      "A synthetic GHRH analog (trans-3-hexenoic acid modified GRF 1-44) FDA-approved as Egrifta for the reduction of excess abdominal fat in HIV-associated lipodystrophy.",
    quickVerdict:
      "One of the few peptides with full FDA approval. Demonstrated visceral fat reduction in RCTs. Off-label use in anti-aging is growing but not approved for that indication.",
    evidenceScore: 68,
    researchNotes:
      "Pivotal RCTs demonstrated significant visceral adipose tissue reduction in HIV lipodystrophy. Also studied for NAFLD/NASH and cognitive function. Well-characterized safety profile.",
    cautions:
      "FDA-approved for HIV lipodystrophy only. Contraindicated in pituitary disease and active malignancy. Fluid retention possible.",
    caveats:
      "Efficacy proven for HIV lipodystrophy. Off-label anti-aging use extrapolates from a different patient population.",
    benefits: [
      "FDA-approved with robust RCT evidence",
      "Significant visceral fat reduction demonstrated",
      "Improved IGF-1 and trunk fat ratio",
      "Possible NAFLD improvement in early data",
    ],
    dosageNotes:
      "Egrifta: 2 mg subcutaneously once daily.",
    sideEffects: [
      "Injection-site reactions (erythema, pruritus)",
      "Peripheral edema",
      "Arthralgia",
      "Myalgia",
      "Elevated IGF-1",
    ],
    tags: ["approved", "growth-hormone", "ghrh-analog"],
    scores: { "weight-loss": 50, muscle: 35, longevity: 28 },
  },
  {
    slug: "thymalin",
    name: "Thymalin",
    category: "peptide",
    summary:
      "A peptide extract from calf thymus gland, used in Russia as an immunomodulatory agent. Studied by the Khavinson group for immune restoration and anti-aging effects.",
    quickVerdict:
      "Approved in Russia for immune deficiency states. Long-term Khavinson studies claim lifespan extension in elderly cohorts, but these are not independently confirmed.",
    evidenceScore: 28,
    researchNotes:
      "Russian clinical use for decades. Khavinson group published a 6-year elderly cohort study claiming reduced mortality. Methodology has been questioned. Not evaluated internationally.",
    cautions:
      "Animal-derived biological. Not approved outside Russia. Product authenticity from online sources is uncertain.",
    caveats:
      "The mortality reduction claim from the Khavinson cohort study is not independently replicated and has methodological concerns.",
    benefits: [
      "Immune-modulating effects in Russian clinical practice",
      "Claimed mortality reduction in elderly cohort study",
      "Decades of clinical use in Russia",
    ],
    dosageNotes:
      "Russian protocols: 10 mg IM daily for 5–10 days. Repeated courses every 3–6 months.",
    sideEffects: [
      "Injection-site reactions",
      "Allergic reactions rare",
      "Theoretical autoimmune activation",
    ],
    tags: ["immunomodulator", "approved-in-russia", "anti-aging"],
    scores: { immunity: 35, longevity: 25 },
  },
  {
    slug: "thymus-extract",
    name: "Thymus Extract",
    category: "peptide",
    summary:
      "A preparation of polypeptides and thymic hormones (thymosin, thymulin, thymopoietin) derived from calf thymus gland, used historically for immune support.",
    quickVerdict:
      "Used in complementary medicine for decades. Some clinical data for immune support in hepatitis B and cancer adjunctive therapy. Product standardization is poor.",
    evidenceScore: 30,
    researchNotes:
      "Cochrane review for hepatitis B adjunct therapy found some benefit. Variable product quality makes interpretation difficult. Several European countries have used thymic extracts clinically.",
    cautions:
      "Animal-derived product with theoretical prion and infection risk. Product standardization varies enormously.",
    caveats:
      "Clinical evidence exists but product heterogeneity is a fundamental limitation. What you buy may differ significantly from what was studied.",
    benefits: [
      "Some Cochrane evidence for hepatitis B adjunct therapy",
      "Historical immune-support use in European medicine",
      "Multiple thymic peptides with distinct immunomodulatory roles",
    ],
    dosageNotes:
      "Highly variable by product. Oral: 100–500 mg/day. Injectable: per clinical protocol.",
    sideEffects: [
      "Allergic reactions",
      "Injection-site reactions",
      "GI discomfort with oral forms",
    ],
    tags: ["immunomodulator", "biological", "complementary-medicine"],
    scores: { immunity: 32, longevity: 18 },
  },
  {
    slug: "trh",
    name: "TRH",
    category: "peptide",
    summary:
      "Thyrotropin-Releasing Hormone, a tripeptide (pyroGlu-His-Pro-NH2) from the hypothalamus that stimulates TSH and prolactin release. Used diagnostically.",
    quickVerdict:
      "Well-characterized endocrine hormone with approved diagnostic use. Also studied for depression and consciousness disorders with mixed results.",
    evidenceScore: 55,
    researchNotes:
      "Established diagnostic tool for pituitary TSH reserve testing. Research interest in depression (rapid transient antidepressant effect) and disorders of consciousness. Therapeutic utility limited by short half-life.",
    cautions:
      "Transient blood pressure increase and nausea with IV injection. Not for chronic use.",
    caveats:
      "Diagnostic utility is clear. Therapeutic antidepressant effects are transient (hours) and not practical for chronic treatment.",
    benefits: [
      "Established diagnostic tool for thyroid-pituitary axis assessment",
      "Rapid transient antidepressant effect documented",
      "Research interest in arousal and consciousness",
    ],
    dosageNotes:
      "Diagnostic: 200–500 mcg IV. Research use only for other indications.",
    sideEffects: [
      "Nausea",
      "Urgency to urinate",
      "Flushing",
      "Transient hypertension",
      "Metallic taste",
    ],
    tags: ["diagnostic", "endocrine", "well-studied"],
    scores: { mood: 18, energy: 15 },
  },
  {
    slug: "vasopressin",
    name: "Vasopressin",
    category: "peptide",
    summary:
      "Antidiuretic hormone (ADH), a nine-amino-acid peptide that regulates water reabsorption, blood pressure, and social behavior. FDA-approved for multiple indications.",
    quickVerdict:
      "Established pharmaceutical with decades of clinical use. FDA-approved for diabetes insipidus, vasodilatory shock, and as a diagnostic agent.",
    evidenceScore: 75,
    researchNotes:
      "Extensive clinical use and research. Vasopressin and analogs (desmopressin, terlipressin) are standard of care for multiple indications. Social behavior research (intranasal) is more recent.",
    cautions:
      "Potent vasopressor. Water intoxication risk with overuse. Must be used under medical supervision for approved indications.",
    caveats:
      "Approved medical uses are well established. Cognitive/social enhancement research is investigational.",
    benefits: [
      "FDA-approved for diabetes insipidus and vasodilatory shock",
      "Standard of care in critical care medicine",
      "Research interest in social cognition and memory",
    ],
    dosageNotes:
      "Diabetes insipidus: 5–10 units IM/SC 2–3 times daily. Vasodilatory shock: 0.01–0.04 units/min IV.",
    sideEffects: [
      "Water intoxication/hyponatremia",
      "Peripheral vasoconstriction",
      "Abdominal cramps",
      "Nausea",
      "Skin pallor",
    ],
    tags: ["approved", "hormonal", "critical-care"],
    scores: { memory: 20, stress: 15 },
  },
  {
    slug: "vesilute",
    name: "Vesilute",
    category: "peptide",
    summary:
      "A Khavinson bioregulator dipeptide (Lys-Glu) claimed to normalize urinary and immune system function.",
    quickVerdict:
      "Part of the Khavinson peptide bioregulator series. Minimal evidence outside Russian-language publications.",
    evidenceScore: 12,
    researchNotes:
      "Russian-language publications from the Khavinson group only. No independent replication or international peer review.",
    cautions:
      "Not approved outside Russia. Product authenticity cannot be verified from online sources.",
    caveats:
      "All data from a single research group. Claims are unverified internationally.",
    benefits: [
      "Claimed immune and urinary system support in Russian literature",
      "Oral bioregulator format",
    ],
    dosageNotes: "Russian protocols: 5–10 mg/day orally for 10–30 day courses.",
    sideEffects: ["Not well characterized"],
    tags: ["bioregulator", "khavinson", "immune"],
    scores: { immunity: 12 },
  },
  {
    slug: "vilon",
    name: "Vilon",
    category: "peptide",
    summary:
      "A Khavinson bioregulator dipeptide (Lys-Glu) studied for thymus-like immunomodulatory and potential geroprotective effects.",
    quickVerdict:
      "One of the simplest Khavinson peptides (just two amino acids). Evidence for bioactive effects of a dipeptide at oral doses is inherently implausible without strong evidence, which is lacking.",
    evidenceScore: 10,
    researchNotes:
      "Khavinson group publications claim gene-expression effects and geroprotective activity. Biological plausibility of an oral dipeptide reaching target tissues intact is questioned.",
    cautions:
      "No evidence of efficacy by international standards. Oral dipeptide bioavailability is a fundamental concern.",
    caveats:
      "Biological plausibility is very low for a simple dipeptide at oral doses. Evidence is confined to a single research group.",
    benefits: [
      "Claimed immune modulation in Khavinson research",
      "Simple and inexpensive to synthesize",
    ],
    dosageNotes: "Russian protocols: 5–10 mg/day orally for 10–30 day courses.",
    sideEffects: ["Not well characterized"],
    tags: ["bioregulator", "khavinson", "minimal-evidence"],
    scores: { immunity: 10, longevity: 10 },
  },
  {
    slug: "vip-peptide",
    name: "VIP Peptide",
    category: "peptide",
    summary:
      "Vasoactive Intestinal Peptide, a 28-amino-acid neuropeptide with vasodilatory, anti-inflammatory, and immunomodulatory properties. Studied for CIRS, pulmonary hypertension, and inflammatory conditions.",
    quickVerdict:
      "Well-characterized neuropeptide with diverse biology. Used off-label for chronic inflammatory response syndrome (CIRS) by some practitioners. Clinical trial data are limited but a few exist for pulmonary conditions.",
    evidenceScore: 35,
    researchNotes:
      "Small clinical trials for pulmonary hypertension and sarcoidosis. Off-label CIRS use promoted by Shoemaker protocol but not validated in large RCTs. Broad anti-inflammatory preclinical data.",
    cautions:
      "Potent vasodilator — hypotension risk. Not FDA-approved for any indication. Off-label use is controversial.",
    caveats:
      "CIRS use is based on one practitioner's protocol without rigorous trial validation. Pulmonary data are from small studies.",
    benefits: [
      "Anti-inflammatory and immunomodulatory effects well characterized",
      "Small clinical trials for pulmonary hypertension",
      "Inhaled delivery route avoids some systemic side effects",
    ],
    dosageNotes:
      "Inhaled: 50 mcg 4 times daily (Shoemaker CIRS protocol). Clinical trials have used IV infusion. No standardized dosing.",
    sideEffects: [
      "Hypotension",
      "Diarrhea",
      "Flushing",
      "Nasal congestion with inhaled use",
    ],
    tags: ["neuropeptide", "anti-inflammatory", "off-label"],
    scores: { immunity: 30, stress: 20, pain: 18 },
  },
  {
    slug: "wolverine-stack",
    name: "Wolverine Stack",
    category: "peptide",
    summary:
      "A colloquial name for the combination of BPC-157 and TB-500, popular in biohacking communities for accelerated tissue repair and recovery.",
    quickVerdict:
      "Combines two individually unproven (in humans) peptides. Synergy is hypothetical based on complementary preclinical mechanisms. No clinical trials on the combination.",
    evidenceScore: 22,
    researchNotes:
      "No published studies on the BPC-157 + TB-500 combination. Rationale is based on complementary mechanisms: BPC-157 for GI/tendon repair and TB-500 for systemic wound healing. Entirely anecdotal in humans.",
    cautions:
      "Neither component is approved for human use. Combining unvalidated peptides compounds the uncertainty. Product quality from gray-market sources is unreliable.",
    caveats:
      "Synergy is speculative. Individual components lack human trial data; the combination has even less evidence.",
    benefits: [
      "Complementary repair mechanisms hypothesized",
      "Widespread anecdotal reports of accelerated injury recovery",
      "Two of the most popular recovery peptides combined",
    ],
    dosageNotes:
      "Community protocols: BPC-157 250–500 mcg + TB-500 2–5 mg subcutaneously. Typically run for 4–8 week cycles. Not clinically validated.",
    sideEffects: [
      "Injection-site reactions",
      "Headache",
      "Lethargy",
      "Unknown drug interactions",
    ],
    tags: ["stack", "recovery", "anecdotal"],
    scores: { recovery: 50, pain: 38 },
  },
];
