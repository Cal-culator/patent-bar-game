import {
  TrapDetectorQuestion,
  SourceSortItem,
  PatternHighlightExcerpt,
  SpotTheErrorData,
} from "@/types";

// ============================================================
// Zone 7: The Agencies — Recognize Phase Content
// Trap Detectors, Source Sorts, Pattern Highlights
// ============================================================

// --- TRAP DETECTOR QUESTIONS (10) ---
// Each has 1 verbatim_correct + 3 trap-type distractors

export const ZONE7_TRAP_DETECTORS: TrapDetectorQuestion[] = [
  {
    id: "z7-trap-1",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    stem: "Under what statute does the DOE derive authority over inventions made under government contracts related to atomic energy?",
    options: [
      {
        text: "42 USC 2182 (Atomic Energy Act)",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. 42 USC 2182 grants the DOE authority over inventions made or conceived under Atomic Energy Commission/DOE contracts.",
      },
      {
        text: "51 USC 20135 (Space Act)",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — 51 USC 20135 is NASA's authority under the Space Act, not DOE's. The DOE statute is 42 USC 2182.",
      },
      {
        text: "35 USC 184 (Foreign Filing Licenses)",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — 35 USC 184 covers foreign filing licenses, not agency property rights over contractor inventions.",
      },
      {
        text: "42 USC 2182 (Space Act)",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — the statute number is correct (42 USC 2182), but it is part of the Atomic Energy Act, not the Space Act.",
      },
    ],
    correctIndex: 0,
    explanation:
      "42 USC 2182, part of the Atomic Energy Act, provides the DOE with authority over inventions made or conceived under contracts with the Atomic Energy Commission or DOE.",
    citationRef: "42 USC 2182",
  },
  {
    id: "z7-trap-2",
    conceptId: "gov-nasa-authority",
    zoneSlug: "the-agencies",
    stem: "Under 51 USC 20135, what right does NASA have regarding inventions made by contractors under NASA contracts?",
    options: [
      {
        text: "NASA may claim title to the patent application",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Under the Space Act, NASA may claim title to inventions made under NASA contracts.",
      },
      {
        text: "NASA automatically receives title to all contractor inventions without exception",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — NASA may claim title, but it is not automatic and there are exceptions. Contractors can request waivers.",
      },
      {
        text: "NASA may claim title to the patent application under 42 USC 2182",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — the correct statute for NASA is 51 USC 20135, not 42 USC 2182 which is the DOE/Atomic Energy Act statute.",
      },
      {
        text: "NASA may only receive a non-exclusive license to the invention",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — replaces 'claim title' with 'non-exclusive license.' NASA can claim full title, not just a license.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Under 51 USC 20135 (Space Act), NASA may claim title to inventions made by contractors performing work under NASA contracts.",
    citationRef: "51 USC 20135",
  },
  {
    id: "z7-trap-3",
    conceptId: "gov-45day-letter",
    zoneSlug: "the-agencies",
    stem: "What triggers the USPTO to send a 45-day letter to a patent applicant regarding DOE or NASA interest?",
    options: [
      {
        text: "The applicant requests a determination of government rights",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — the 45-day letter is initiated by the agency identifying government interest, not by the applicant's request.",
      },
      {
        text: "DOE or NASA identifies the application as potentially involving an invention made under a government contract",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. The 45-day letter is triggered when DOE or NASA identifies a potential government interest in the application.",
      },
      {
        text: "The patent examiner determines the invention relates to national defense",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — confuses DOE/NASA property rights with national defense secrecy orders. The 45-day letter is about contract rights, not defense classification.",
      },
      {
        text: "DOE or NASA identifies the application as potentially involving an invention made under a government contract, triggering a 30-day letter",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — changes '45-day letter' to '30-day letter.' The notification is a 45-day letter; the 30-day period is the response deadline.",
      },
    ],
    correctIndex: 1,
    explanation:
      "The 45-day letter is sent when DOE or NASA identifies a patent application as potentially involving an invention made under a government contract.",
    citationRef: "MPEP 150",
  },
  {
    id: "z7-trap-4",
    conceptId: "gov-30day-response",
    zoneSlug: "the-agencies",
    stem: "How long does an applicant have to respond to a 45-day letter from the USPTO regarding DOE or NASA interest?",
    options: [
      {
        text: "45 days from the date of the letter",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — confuses the name of the letter (45-day letter) with the response deadline (30 days). The letter is called a '45-day letter' but the response period is 30 days.",
      },
      {
        text: "30 days from the date of the letter",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. The applicant has 30 days from the date of the letter to file a statement establishing rights.",
      },
      {
        text: "60 days from the date of the letter, with extensions available",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — the deadline is 30 days, not 60 days, and extensions may not be available because the deadline is statutory.",
      },
      {
        text: "30 days from the date the applicant receives the letter",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — the 30-day period runs from the date of the letter, not from the date of receipt.",
      },
    ],
    correctIndex: 1,
    explanation:
      "The applicant has 30 days from the date of the 45-day letter to respond with a statement establishing rights in the invention.",
    citationRef: "MPEP 150",
  },
  {
    id: "z7-trap-5",
    conceptId: "gov-abandonment",
    zoneSlug: "the-agencies",
    stem: "What is the consequence of failing to respond to a DOE/NASA 45-day letter within the required deadline?",
    options: [
      {
        text: "The application may be regarded as abandoned",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Failure to respond within the deadline may result in the application being regarded as abandoned.",
      },
      {
        text: "The government automatically receives title to the invention",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — the consequence is abandonment of the application, not automatic transfer of title to the government.",
      },
      {
        text: "The application may be regarded as abandoned under 35 USC 186",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — 35 USC 186 covers criminal penalties for foreign filing violations. Abandonment for failure to respond to a DOE/NASA letter is under a different authority.",
      },
      {
        text: "The applicant receives an additional 30-day extension automatically",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — there is no automatic extension. The statutory deadline is firm and failure to meet it triggers abandonment.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Failure to respond to the 45-day letter within the 30-day statutory deadline may result in the application being regarded as abandoned.",
    citationRef: "MPEP 150",
  },
  {
    id: "z7-trap-6",
    conceptId: "gov-statement-content",
    zoneSlug: "the-agencies",
    stem: "Under MPEP 151, what must be included in the statement filed in response to a DOE/NASA 45-day letter?",
    options: [
      {
        text: "Identification of the contract, whether the invention was made under the contract, and the government's rights",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. These are the three core elements required in the statement under MPEP 151.",
      },
      {
        text: "Identification of the contract and a complete assignment of rights to the government",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — the statement does not require assigning rights to the government. It requires describing the government's rights, which may include a waiver.",
      },
      {
        text: "Identification of the contract, whether the invention was made under the contract, and a petition fee",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — no petition fee is a required element of the statement itself. The third element is a description of the government's rights.",
      },
      {
        text: "A claim chart, identification of the contract, and the commercial value of the invention",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — neither a claim chart nor commercial value assessment is required. The statement focuses on the contract and government rights.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Under MPEP 151, the statement must include: (1) identification of the contract, (2) whether the invention was made under the contract, and (3) the rights of the government.",
    citationRef: "MPEP 151",
  },
  {
    id: "z7-trap-7",
    conceptId: "gov-multiple-inventors",
    zoneSlug: "the-agencies",
    stem: "When multiple inventors are named on an application subject to DOE/NASA interest, who must file a statement?",
    options: [
      {
        text: "Only the first-named inventor files on behalf of all",
        trapType: "wrong_anchor",
        trapExplanation:
          "Wrong anchor — each inventor under the contract must file separately. There is no provision for one inventor to file on behalf of others.",
      },
      {
        text: "Each inventor who was involved in the government contract must file a separate statement",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Each inventor who worked under the government contract must individually file a statement.",
      },
      {
        text: "All inventors on the application must file statements, regardless of contract involvement",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — only inventors who were under the government contract must file. Inventors not involved in the contract are not required to file.",
      },
      {
        text: "Each inventor who was involved in the government contract must file a joint statement",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — changes 'separate statement' to 'joint statement.' Each inventor must file individually, not jointly.",
      },
    ],
    correctIndex: 1,
    explanation:
      "Each inventor who participated in the government contract must individually file a statement addressing their relationship to the contract and the invention.",
    citationRef: "MPEP 151",
  },
  {
    id: "z7-trap-8",
    conceptId: "gov-substitute-statement",
    zoneSlug: "the-agencies",
    stem: "Under what circumstances can a substitute statement be filed in response to a DOE/NASA 45-day letter?",
    options: [
      {
        text: "Whenever the applicant prefers to have their attorney respond instead",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — convenience is not a basis for a substitute statement. It is only available when the inventor cannot be reached or refuses to cooperate.",
      },
      {
        text: "When the inventor cannot be reached or refuses to cooperate",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. A substitute statement is available when the inventor is unreachable or uncooperative.",
      },
      {
        text: "When the inventor cannot be reached, and a petition fee is paid under 37 CFR 5.25",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — 37 CFR 5.25 covers retroactive foreign filing licenses, not substitute statements for DOE/NASA matters.",
      },
      {
        text: "When the inventor has been deceased for more than 1 year",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — there is no one-year waiting period. A substitute statement is available whenever the inventor cannot be reached, regardless of the duration.",
      },
    ],
    correctIndex: 1,
    explanation:
      "A substitute statement is available when the inventor cannot be reached or refuses to cooperate. It must be filed by a person with sufficient knowledge of the facts.",
    citationRef: "MPEP 151",
  },
  {
    id: "z7-trap-9",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    stem: "Under 42 USC 2182, what can the DOE do regarding inventions made under Atomic Energy Act contracts?",
    options: [
      {
        text: "DOE may claim title to the patent application unless the contractor establishes rights",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Under 42 USC 2182, DOE may claim title unless the contractor demonstrates that it has rights to the invention.",
      },
      {
        text: "DOE may claim title to the patent application regardless of any contractor rights",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — adds 'regardless of any contractor rights.' The contractor CAN establish rights to defeat DOE's claim.",
      },
      {
        text: "DOE may only request a non-exclusive license from the contractor",
        trapType: "one_word_trap",
        trapExplanation:
          "One-word trap — DOE's authority extends to claiming title, not merely requesting a license.",
      },
      {
        text: "DOE may claim title to the patent application unless the contractor establishes rights under 51 USC 20135",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — 51 USC 20135 is the NASA/Space Act statute. DOE's authority is under 42 USC 2182.",
      },
    ],
    correctIndex: 0,
    explanation:
      "Under 42 USC 2182, DOE may claim title to inventions made under Atomic Energy Act contracts unless the contractor establishes that it has rights.",
    citationRef: "42 USC 2182",
  },
  {
    id: "z7-trap-10",
    conceptId: "gov-30day-response",
    zoneSlug: "the-agencies",
    stem: "Why might the 30-day deadline for responding to a 45-day letter not be extendable?",
    options: [
      {
        text: "Because the USPTO never grants extensions for any deadline",
        trapType: "scope_creep",
        trapExplanation:
          "Scope creep — the USPTO does grant extensions for many deadlines. This specific deadline is different because it derives from statute.",
      },
      {
        text: "Because the agency must resolve the matter within 60 days total",
        trapType: "timeline_trap",
        trapExplanation:
          "Timeline trap — introduces a fabricated 60-day total deadline. The non-extendability is due to the statutory nature of the deadline.",
      },
      {
        text: "Because the deadline is set by statute, not by regulation",
        trapType: "verbatim_correct",
        trapExplanation:
          "Correct. Statutory deadlines typically cannot be extended, unlike regulatory deadlines that may have extension provisions.",
      },
      {
        text: "Because the deadline is set by regulation under 37 CFR 1.136",
        trapType: "source_swap",
        trapExplanation:
          "Source swap — 37 CFR 1.136 covers extensions for regulatory deadlines. The 30-day DOE/NASA deadline is statutory, which is precisely why it is not extendable.",
      },
    ],
    correctIndex: 2,
    explanation:
      "The 30-day deadline is set by statute rather than regulation, which typically means it cannot be extended under the standard USPTO extension procedures.",
    citationRef: "MPEP 150",
  },
];

// --- SOURCE SORT ITEMS (12) ---
// 4 statutes, 4 regulations/MPEP-codified procedures, 4 MPEP guidance

export const ZONE7_SOURCE_SORTS: SourceSortItem[] = [
  // Statutes
  {
    id: "z7-sort-1",
    zoneSlug: "the-agencies",
    ruleText:
      "The Department of Energy has authority over inventions made or conceived under contracts with the Atomic Energy Commission or the Department of Energy.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 42 USC 2182, part of the Atomic Energy Act, establishing DOE's authority over contractor inventions.",
    specificRef: "42 USC 2182",
  },
  {
    id: "z7-sort-2",
    zoneSlug: "the-agencies",
    ruleText:
      "NASA may acquire title to any invention made by a contractor under a NASA contract if the Administrator determines it is in the interest of the United States.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 51 USC 20135, part of the Space Act, granting NASA authority over contractor inventions.",
    specificRef: "51 USC 20135",
  },
  {
    id: "z7-sort-3",
    zoneSlug: "the-agencies",
    ruleText:
      "The Administrator of NASA shall determine whether any person who has made an invention under a NASA contract has rights in such invention.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 51 USC 20135 establishing NASA's role in determining rights to contractor inventions.",
    specificRef: "51 USC 20135",
  },
  {
    id: "z7-sort-4",
    zoneSlug: "the-agencies",
    ruleText:
      "Any invention or discovery useful in the production or utilization of special nuclear material or atomic energy made under any contract with the Commission shall be deemed to have been made under the Atomic Energy Act.",
    correctSource: "statute",
    explanation:
      "This is statutory language from 42 USC 2182 defining the scope of inventions subject to DOE authority under the Atomic Energy Act.",
    specificRef: "42 USC 2182",
  },
  // Regulation / MPEP-codified procedure
  {
    id: "z7-sort-5",
    zoneSlug: "the-agencies",
    ruleText:
      "When the USPTO identifies an application with potential DOE or NASA interest, a 45-day letter shall be sent to the applicant requiring a response within 30 days.",
    correctSource: "regulation",
    explanation:
      "This describes the formal procedural requirement codified in USPTO practice under MPEP 150, which implements the statutory framework through regulatory procedure.",
    specificRef: "MPEP 150",
  },
  {
    id: "z7-sort-6",
    zoneSlug: "the-agencies",
    ruleText:
      "The statement filed in response to the 45-day letter must include identification of the government contract, whether the invention was made under the contract, and the rights of the government.",
    correctSource: "regulation",
    explanation:
      "This describes the formal procedural requirements for the statement as codified in MPEP 151, implementing the statutory framework.",
    specificRef: "MPEP 151",
  },
  {
    id: "z7-sort-7",
    zoneSlug: "the-agencies",
    ruleText:
      "Each inventor who was involved in the government contract must file a separate statement. If the inventor is unavailable, a substitute statement may be filed by a knowledgeable party.",
    correctSource: "regulation",
    explanation:
      "This describes the procedural requirements for multiple inventors and substitute statements as codified in MPEP 151.",
    specificRef: "MPEP 151",
  },
  {
    id: "z7-sort-8",
    zoneSlug: "the-agencies",
    ruleText:
      "Failure to respond to the 45-day letter within the 30-day statutory deadline may result in the application being regarded as abandoned.",
    correctSource: "regulation",
    explanation:
      "This describes the formal procedural consequence of non-response as codified in MPEP 150, implementing the statutory abandonment provision.",
    specificRef: "MPEP 150",
  },
  // MPEP guidance
  {
    id: "z7-sort-9",
    zoneSlug: "the-agencies",
    ruleText:
      "Practitioners should carefully review any 45-day letter to determine which agency (DOE or NASA) has identified potential government interest, as the specific procedures and rights may differ.",
    correctSource: "mpep_guidance",
    explanation:
      "This is practical advice from MPEP 150 to practitioners, not a binding statutory or regulatory requirement.",
    specificRef: "MPEP 150",
  },
  {
    id: "z7-sort-10",
    zoneSlug: "the-agencies",
    ruleText:
      "Applicants are advised to maintain complete records of government contracts and the circumstances under which inventions are made, as this information is essential for preparing the required statement.",
    correctSource: "mpep_guidance",
    explanation:
      "This is practical best-practice guidance from MPEP 151 about record-keeping, not a binding legal requirement.",
    specificRef: "MPEP 151",
  },
  {
    id: "z7-sort-11",
    zoneSlug: "the-agencies",
    ruleText:
      "When preparing a substitute statement, it is advisable to include as much detail as possible about the inventor's relationship to the contract, even if some information is based on the filer's best knowledge rather than the inventor's direct testimony.",
    correctSource: "mpep_guidance",
    explanation:
      "This is advisory guidance from MPEP 151 about best practices for substitute statements, not a codified legal requirement.",
    specificRef: "MPEP 151",
  },
  {
    id: "z7-sort-12",
    zoneSlug: "the-agencies",
    ruleText:
      "In practice, DOE and NASA typically coordinate with the USPTO to identify relevant applications early in the prosecution process, and most applicants receive the 45-day letter before the first office action is issued.",
    correctSource: "mpep_guidance",
    explanation:
      "This describes typical USPTO practice as noted in MPEP 150, not a legal requirement found in statute or regulation.",
    specificRef: "MPEP 150",
  },
];

// --- PATTERN HIGHLIGHT EXCERPTS (6) ---
// MPEP-style text with testable segments

export const ZONE7_PATTERN_HIGHLIGHTS: PatternHighlightExcerpt[] = [
  {
    id: "z7-ph-1",
    zoneSlug: "the-agencies",
    title: "DOE Authority Under the Atomic Energy Act",
    mpepRef: "42 USC 2182",
    instruction:
      "Tap the phrases most likely to be tested on the patent bar exam.",
    segments: [
      { text: "Any invention or discovery useful in the ", isTestable: false },
      {
        text: "production or utilization of special nuclear material or atomic energy",
        isTestable: true,
        explanation: "Key scope definition — defines what subject matter falls under DOE authority.",
      },
      { text: " that is ", isTestable: false },
      {
        text: "made or conceived under any contract with the Commission",
        isTestable: true,
        explanation: "Critical nexus requirement — the invention must be connected to a government contract.",
      },
      { text: " shall be subject to the provisions of the Atomic Energy Act. ", isTestable: false },
      {
        text: "The Department of Energy may claim title",
        isTestable: true,
        explanation: "DOE's core power — the right to claim title is the most significant government right.",
      },
      { text: " to any such invention or discovery.", isTestable: false },
    ],
  },
  {
    id: "z7-ph-2",
    zoneSlug: "the-agencies",
    title: "NASA Authority Under the Space Act",
    mpepRef: "51 USC 20135",
    instruction:
      "Identify the exam-critical phrases about NASA's property rights.",
    segments: [
      { text: "Whenever any invention is ", isTestable: false },
      {
        text: "made by any person in the performance of work under a NASA contract",
        isTestable: true,
        explanation: "The trigger for NASA's rights — the invention must be made during NASA contract work.",
      },
      { text: ", the ", isTestable: false },
      {
        text: "Administrator shall determine whether to acquire title",
        isTestable: true,
        explanation: "Key decision-maker — the NASA Administrator makes the title determination.",
      },
      { text: " to such invention. The contractor ", isTestable: false },
      {
        text: "may request a waiver of NASA's rights",
        isTestable: true,
        explanation: "Waiver mechanism — contractors are not without recourse; they can request that NASA waive its claim.",
      },
      { text: " under regulations prescribed by the Administrator.", isTestable: false },
    ],
  },
  {
    id: "z7-ph-3",
    zoneSlug: "the-agencies",
    title: "The 45-Day Letter Process",
    mpepRef: "MPEP 150",
    instruction:
      "Highlight the deadlines and procedural triggers examiners test.",
    segments: [
      { text: "When ", isTestable: false },
      {
        text: "DOE or NASA identifies a patent application",
        isTestable: true,
        explanation: "The trigger — the agency must identify the application, not the applicant or the examiner.",
      },
      { text: " with potential government interest, ", isTestable: false },
      {
        text: "the USPTO sends a 45-day letter",
        isTestable: true,
        explanation: "The notification mechanism — the letter comes from the USPTO on behalf of the agency.",
      },
      { text: " to the applicant. The applicant must respond ", isTestable: false },
      {
        text: "within 30 days",
        isTestable: true,
        explanation: "Critical deadline — do not confuse the letter name (45-day) with the response period (30 days).",
      },
      { text: " with a statement establishing rights. ", isTestable: false },
      {
        text: "Failure to respond may result in abandonment",
        isTestable: true,
        explanation: "The consequence — abandonment is the penalty for non-response, a frequently tested point.",
      },
      { text: " of the application.", isTestable: false },
    ],
  },
  {
    id: "z7-ph-4",
    zoneSlug: "the-agencies",
    title: "Statement Content Requirements",
    mpepRef: "MPEP 151",
    instruction:
      "Tap the required elements of the statement filed in response to the 45-day letter.",
    segments: [
      { text: "The statement must include: ", isTestable: false },
      {
        text: "identification of the government contract",
        isTestable: true,
        explanation: "Required element 1 — the specific contract must be identified by name or number.",
      },
      { text: " under which the invention was made; ", isTestable: false },
      {
        text: "whether the invention was made or conceived under the contract",
        isTestable: true,
        explanation: "Required element 2 — the nexus between invention and contract must be addressed.",
      },
      { text: "; and ", isTestable: false },
      {
        text: "the rights of the government in the invention",
        isTestable: true,
        explanation: "Required element 3 — government rights (license, title, or waiver) must be described.",
      },
      { text: ", including any licenses or waivers granted by the agency.", isTestable: false },
    ],
  },
  {
    id: "z7-ph-5",
    zoneSlug: "the-agencies",
    title: "Multiple Inventor Requirements",
    mpepRef: "MPEP 151",
    instruction:
      "Identify the rules about multiple inventors and substitute statements.",
    segments: [
      { text: "When there are multiple inventors, ", isTestable: false },
      {
        text: "each inventor involved in the government contract must file a separate statement",
        isTestable: true,
        explanation: "Individual requirement — statements cannot be combined; each contract inventor must file separately.",
      },
      { text: ". If ", isTestable: false },
      {
        text: "an inventor cannot be reached or refuses to cooperate",
        isTestable: true,
        explanation: "Substitute trigger — these are the only two grounds for filing a substitute statement.",
      },
      { text: ", a ", isTestable: false },
      {
        text: "substitute statement may be filed by a party with sufficient knowledge",
        isTestable: true,
        explanation: "The substitute mechanism — the filer must have actual knowledge of the relevant facts.",
      },
      { text: " of the circumstances.", isTestable: false },
    ],
  },
  {
    id: "z7-ph-6",
    zoneSlug: "the-agencies",
    title: "Government Waiver of Rights",
    mpepRef: "MPEP 150",
    instruction:
      "Highlight the waiver-related phrases that distinguish DOE/NASA procedures.",
    segments: [
      { text: "In certain circumstances, ", isTestable: false },
      {
        text: "the government agency may waive its rights",
        isTestable: true,
        explanation: "Waiver availability — both DOE and NASA have discretion to waive their property rights.",
      },
      { text: " to an invention made under a government contract. ", isTestable: false },
      {
        text: "The contractor must request the waiver",
        isTestable: true,
        explanation: "Affirmative obligation — the waiver is not automatic; the contractor must actively request it.",
      },
      { text: " and demonstrate that ", isTestable: false },
      {
        text: "retaining rights serves the public interest",
        isTestable: true,
        explanation: "The standard — waivers are evaluated based on whether the public interest is served.",
      },
      { text: ". If granted, the applicant may retain full patent rights.", isTestable: false },
    ],
  },
];

// --- SPOT THE ERROR ITEMS (4) ---
// Passages with deliberate errors in legal facts

export const ZONE7_SPOT_ERRORS: SpotTheErrorData[] = [
  {
    id: "z7-spot-1",
    zoneSlug: "the-agencies",
    title: "DOE and NASA Authority Errors",
    mpepRef: "MPEP 150 / 42 USC 2182 / 51 USC 20135",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "The Department of Energy derives its authority over contractor inventions from 42 USC 2182, part of the Atomic Energy Act.",
        hasError: false,
      },
      {
        text: "Under this statute, inventions made or conceived under contracts with the Atomic Energy Commission or the DOE are subject to government claims.",
        hasError: false,
      },
      {
        text: "Similarly, NASA derives its authority from 51 USC 20135, part of the Atomic Energy Act,",
        hasError: true,
        correctedText: "Similarly, NASA derives its authority from 51 USC 20135, part of the National Aeronautics and Space Act (Space Act),",
        explanation: "51 USC 20135 is part of the Space Act, not the Atomic Energy Act. The Atomic Energy Act (42 USC 2182) is the DOE statute. NASA's authority comes from the Space Act.",
      },
      {
        text: "which allows the Administrator to determine whether to acquire title to inventions made by contractors performing work under NASA contracts.",
        hasError: false,
      },
      {
        text: "Under both statutes, the government may only receive a non-exclusive license to the invention, not full title.",
        hasError: true,
        correctedText: "Under both statutes, the government may claim full title to the invention, not merely a non-exclusive license.",
        explanation: "Both DOE under 42 USC 2182 and NASA under 51 USC 20135 may claim full title to contractor inventions, not just a non-exclusive license. The right to claim title is the most significant government power under these statutes.",
      },
      {
        text: "Contractors may request waivers of the government's rights under regulations prescribed by the relevant agency.",
        hasError: false,
      },
      {
        text: "These provisions ensure that the public interest is served when government-funded research produces patentable inventions.",
        hasError: false,
      },
    ],
  },
  {
    id: "z7-spot-2",
    zoneSlug: "the-agencies",
    title: "45-Day Letter Process Errors",
    mpepRef: "MPEP 150",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "When DOE or NASA identifies a patent application as potentially involving an invention made under a government contract,",
        hasError: false,
      },
      {
        text: "the USPTO sends a 45-day letter to the applicant.",
        hasError: false,
      },
      {
        text: "The applicant must respond within 45 days from the date of the letter",
        hasError: true,
        correctedText: "The applicant must respond within 30 days from the date of the letter",
        explanation: "The response deadline is 30 days, not 45 days. A common exam trap is confusing the name of the letter (the '45-day letter') with the response period (30 days). The 30-day period runs from the date of the letter, not from receipt.",
      },
      {
        text: "with a statement establishing the applicant's rights in the invention.",
        hasError: false,
      },
      {
        text: "This deadline is statutory in nature, which means it typically cannot be extended under the standard USPTO extension procedures of 37 CFR 1.136.",
        hasError: false,
      },
      {
        text: "Failure to respond within the deadline may result in the application being regarded as abandoned.",
        hasError: false,
      },
      {
        text: "The 45-day letter is initiated when the patent examiner determines the invention relates to national defense,",
        hasError: true,
        correctedText: "The 45-day letter is initiated when DOE or NASA identifies the application as involving a potential government contract invention,",
        explanation: "The 45-day letter is triggered by DOE or NASA identifying potential government interest, not by the patent examiner determining a national defense connection. The examiner's role is in prosecution, not in identifying agency contract rights.",
      },
      {
        text: "and the applicant is notified of the government's potential interest.",
        hasError: false,
      },
    ],
  },
  {
    id: "z7-spot-3",
    zoneSlug: "the-agencies",
    title: "Statement Requirements and Multiple Inventors Errors",
    mpepRef: "MPEP 150 / MPEP 151",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "Under MPEP 151, the statement filed in response to a 45-day letter must include three elements:",
        hasError: false,
      },
      {
        text: "identification of the government contract, whether the invention was made under the contract, and the rights of the government in the invention.",
        hasError: false,
      },
      {
        text: "When multiple inventors are named on the application, only the first-named inventor must file a statement on behalf of all inventors.",
        hasError: true,
        correctedText: "When multiple inventors are named on the application, each inventor who was involved in the government contract must file a separate statement.",
        explanation: "Each inventor involved in the government contract must file a separate, individual statement. There is no provision for one inventor to file on behalf of others.",
      },
      {
        text: "If an inventor cannot be reached or refuses to cooperate, a substitute statement may be filed by a party with sufficient knowledge of the circumstances.",
        hasError: false,
      },
      {
        text: "The statement should address the relationship between each inventor and the government contract.",
        hasError: false,
      },
      {
        text: "Failure to respond within the deadline results in an automatic transfer of title to the government.",
        hasError: true,
        correctedText: "Failure to respond within the deadline may result in the application being regarded as abandoned.",
        explanation: "The consequence of not responding is that the application may be regarded as abandoned, not an automatic transfer of title to the government. Abandonment and title transfer are very different outcomes.",
      },
    ],
  },
  {
    id: "z7-spot-4",
    zoneSlug: "the-agencies",
    title: "Government Waiver and Contractor Rights Errors",
    mpepRef: "MPEP 150 / 42 USC 2182 / 51 USC 20135",
    instruction: "Read the passage and tap any segments that contain errors.",
    segments: [
      {
        text: "Under both the Atomic Energy Act and the Space Act, contractors may request waivers of the government's rights to inventions made under government contracts.",
        hasError: false,
      },
      {
        text: "The DOE may claim title to inventions under 42 USC 2182 unless the contractor establishes that it has rights in the invention.",
        hasError: false,
      },
      {
        text: "NASA automatically receives title to all contractor inventions without exception under 51 USC 20135.",
        hasError: true,
        correctedText: "NASA may claim title to contractor inventions under 51 USC 20135, but contractors can request waivers of NASA's rights.",
        explanation: "NASA does not automatically receive title without exception. Under 51 USC 20135, the Administrator determines whether to acquire title, and contractors can request waivers. The process involves discretion and the possibility of waiver.",
      },
      {
        text: "The contractor must affirmatively request a waiver; it is not granted automatically.",
        hasError: false,
      },
      {
        text: "Waivers are evaluated based on whether retaining rights serves the public interest.",
        hasError: false,
      },
      {
        text: "Practitioners should maintain complete records of government contracts and the circumstances under which inventions are made,",
        hasError: false,
      },
      {
        text: "as this information is essential for preparing the required statement in response to the 45-day letter.",
        hasError: false,
      },
      {
        text: "In practice, DOE and NASA typically coordinate with the USPTO to identify relevant applications early in the prosecution process, often before the first office action.",
        hasError: false,
      },
    ],
  },
];
