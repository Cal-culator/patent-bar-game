import { RuleLayer, AnalogyMapping, VisualTimelineData } from "@study-game/engine";

// ============================================================
// Zone 7: The Agencies — DOE & NASA Property Rights
// MPEP Sections 150, 151 | 42 USC 2182 | 51 USC 20135
// ============================================================

// --- ABSORB PHASE: Rule Layers ---

export const ZONE7_RULE_LAYERS: RuleLayer[] = [
  // --- Concept Group 1: DOE Authority (42 USC 2182) ---
  {
    id: "z7-layer-1",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "The Department of Energy (DOE) has authority over inventions made or conceived under contracts with the Atomic Energy Commission or DOE, pursuant to 42 USC 2182.",
    highlightedAddition:
      "inventions made or conceived under contracts with the Atomic Energy Commission or DOE",
    question: {
      stem: "Under what statute does the DOE derive authority over inventions made under government contracts?",
      options: [
        "35 USC 184",
        "42 USC 2182 (Atomic Energy Act)",
        "51 USC 20135 (Space Act)",
        "37 CFR 5.25",
      ],
      correctIndex: 1,
      explanation:
        "42 USC 2182, part of the Atomic Energy Act, gives the DOE authority over inventions made or conceived under contracts with the Atomic Energy Commission or DOE.",
    },
  },
  {
    id: "z7-layer-2",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "Under 42 USC 2182, when an invention is made under a DOE contract, DOE may claim title to the patent application unless the contractor establishes rights.",
    highlightedAddition: "DOE may claim title to the patent application",
    question: {
      stem: "What right does DOE have when an invention is made under a DOE contract?",
      options: [
        "DOE may only receive a non-exclusive license",
        "DOE may claim title to the patent application",
        "DOE must allow the contractor to retain all rights",
        "DOE can only claim title after the patent issues",
      ],
      correctIndex: 1,
      explanation:
        "Under 42 USC 2182, the DOE may claim title to patent applications for inventions made under DOE contracts, unless the contractor establishes that it has rights.",
    },
  },
  {
    id: "z7-layer-3",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "The USPTO cooperates with DOE by notifying applicants when a patent application may involve subject matter related to atomic energy or DOE contracts, as described in MPEP 150.",
    highlightedAddition:
      "USPTO cooperates with DOE by notifying applicants",
    question: {
      stem: "What role does the USPTO play regarding DOE-related inventions?",
      options: [
        "The USPTO independently determines DOE rights",
        "The USPTO cooperates with DOE by notifying applicants of potential government interest",
        "The USPTO transfers the application directly to DOE",
        "The USPTO has no role in DOE matters",
      ],
      correctIndex: 1,
      explanation:
        "Under MPEP 150, the USPTO cooperates with DOE by notifying applicants when their patent application may involve inventions with potential DOE interest.",
    },
  },

  // --- Concept Group 2: NASA Authority (51 USC 20135) ---
  {
    id: "z7-layer-4",
    conceptId: "gov-nasa-authority",
    zoneSlug: "the-agencies",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "NASA has authority over inventions made by contractors performing work under NASA contracts, pursuant to 51 USC 20135 (the Space Act).",
    highlightedAddition:
      "inventions made by contractors performing work under NASA contracts",
    question: {
      stem: "What is the statutory basis for NASA's authority over contractor inventions?",
      options: [
        "42 USC 2182 (Atomic Energy Act)",
        "35 USC 184",
        "51 USC 20135 (Space Act)",
        "37 CFR 5.11",
      ],
      correctIndex: 2,
      explanation:
        "51 USC 20135, part of the National Aeronautics and Space Act, gives NASA authority over inventions made by contractors under NASA contracts.",
    },
  },
  {
    id: "z7-layer-5",
    conceptId: "gov-nasa-authority",
    zoneSlug: "the-agencies",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "Under 51 USC 20135, NASA may claim title to inventions made under NASA contracts. The contractor must disclose the invention to NASA and may request a waiver of NASA's rights.",
    highlightedAddition:
      "NASA may claim title ... contractor may request a waiver",
    question: {
      stem: "Under the Space Act, what can a NASA contractor do if they want to retain rights to an invention?",
      options: [
        "File a US patent application before NASA can claim title",
        "Request a waiver of NASA's rights",
        "Assign the patent to a third party",
        "Nothing — NASA always retains title",
      ],
      correctIndex: 1,
      explanation:
        "Under 51 USC 20135, a contractor may request a waiver of NASA's rights. NASA will evaluate the request and may grant a waiver in certain circumstances.",
    },
  },
  {
    id: "z7-layer-6",
    conceptId: "gov-nasa-authority",
    zoneSlug: "the-agencies",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "The USPTO cooperates with NASA similarly to DOE: when a patent application may involve a NASA contractor invention, the USPTO notifies the applicant of NASA's potential property interest.",
    highlightedAddition:
      "USPTO notifies the applicant of NASA's potential property interest",
    question: {
      stem: "How does the USPTO handle applications that may involve NASA contractor inventions?",
      options: [
        "The USPTO rejects the application automatically",
        "The USPTO notifies the applicant of NASA's potential property interest",
        "The USPTO forwards the application to the NASA Administrator",
        "The USPTO publishes a notice in the Official Gazette",
      ],
      correctIndex: 1,
      explanation:
        "Similar to DOE procedures, the USPTO notifies applicants when their patent application may involve an invention subject to NASA's property rights under 51 USC 20135.",
    },
  },

  // --- Concept Group 3: The 45-Day Letter ---
  {
    id: "z7-layer-7",
    conceptId: "gov-45day-letter",
    zoneSlug: "the-agencies",
    layerNumber: 1,
    totalLayers: 2,
    ruleText:
      "When DOE or NASA identifies a patent application with potential government interest, the USPTO sends a 45-day letter to the applicant notifying them that they must respond.",
    highlightedAddition:
      "USPTO sends a 45-day letter to the applicant",
    question: {
      stem: "What triggers the issuance of a 45-day letter to a patent applicant?",
      options: [
        "Filing an application without a foreign filing license",
        "DOE or NASA identifying potential government interest in the application",
        "Failure to pay filing fees within 30 days",
        "A request from the applicant for expedited examination",
      ],
      correctIndex: 1,
      explanation:
        "The 45-day letter is sent when DOE or NASA identifies a patent application as potentially involving an invention made under a government contract.",
    },
  },
  {
    id: "z7-layer-8",
    conceptId: "gov-45day-letter",
    zoneSlug: "the-agencies",
    layerNumber: 2,
    totalLayers: 2,
    ruleText:
      "The 45-day letter informs the applicant of the government agency's interest and instructs the applicant to file a statement establishing rights within a specific deadline.",
    highlightedAddition:
      "instructs the applicant to file a statement establishing rights",
    question: {
      stem: "What does the 45-day letter instruct the applicant to do?",
      options: [
        "Abandon the application and refile with the agency",
        "File a statement establishing rights within a deadline",
        "Assign the patent to the federal government",
        "Respond with a petition to the Commissioner",
      ],
      correctIndex: 1,
      explanation:
        "The 45-day letter instructs the applicant to file a statement with the USPTO establishing their rights in the invention, within the statutory response deadline.",
    },
  },

  // --- Concept Group 4: The 30-Day Response ---
  {
    id: "z7-layer-9",
    conceptId: "gov-30day-response",
    zoneSlug: "the-agencies",
    layerNumber: 1,
    totalLayers: 2,
    ruleText:
      "After receiving the 45-day letter, the applicant has 30 days to respond with a statement establishing their rights in the invention.",
    highlightedAddition: "30 days to respond with a statement",
    question: {
      stem: "How long does an applicant have to respond to a 45-day letter from the USPTO regarding DOE/NASA interest?",
      options: [
        "14 days",
        "30 days",
        "45 days",
        "60 days",
      ],
      correctIndex: 1,
      explanation:
        "The applicant has a 30-day statutory deadline to respond to the 45-day letter with a statement establishing their rights in the invention.",
    },
  },
  {
    id: "z7-layer-10",
    conceptId: "gov-30day-response",
    zoneSlug: "the-agencies",
    layerNumber: 2,
    totalLayers: 2,
    ruleText:
      "The 30-day response period is measured from the date of the letter. Extensions of time may not be available for this deadline because it is set by statute, not by regulation.",
    highlightedAddition:
      "Extensions of time may not be available ... set by statute",
    question: {
      stem: "Why might extensions of time not be available for responding to a 45-day letter?",
      options: [
        "Because the USPTO does not grant extensions for any deadline",
        "Because the deadline is set by statute, not by regulation",
        "Because the agency must receive the response within 30 days",
        "Because the applicant waived the right to extensions",
      ],
      correctIndex: 1,
      explanation:
        "Statutory deadlines, unlike regulatory deadlines, typically cannot be extended. Since the 30-day response period derives from statute, extensions may not be available.",
    },
  },

  // --- Concept Group 5: Abandonment Consequences ---
  {
    id: "z7-layer-11",
    conceptId: "gov-abandonment",
    zoneSlug: "the-agencies",
    layerNumber: 1,
    totalLayers: 2,
    ruleText:
      "If the applicant fails to respond to the 45-day letter within the 30-day deadline, the application may be regarded as abandoned.",
    highlightedAddition:
      "application may be regarded as abandoned",
    question: {
      stem: "What is the consequence of failing to respond to a 45-day letter within 30 days?",
      options: [
        "A surcharge is added to the filing fee",
        "The application may be regarded as abandoned",
        "The patent examiner continues prosecution normally",
        "The application is transferred to the agency",
      ],
      correctIndex: 1,
      explanation:
        "Failure to respond within the 30-day deadline may result in the application being regarded as abandoned under the applicable statutory provisions.",
    },
  },
  {
    id: "z7-layer-12",
    conceptId: "gov-abandonment",
    zoneSlug: "the-agencies",
    layerNumber: 2,
    totalLayers: 2,
    ruleText:
      "Abandonment due to failure to respond to a government agency letter is distinct from other forms of abandonment. Revival may require showing the delay was unintentional and complying with the agency's requirements.",
    highlightedAddition:
      "Revival may require showing the delay was unintentional",
    question: {
      stem: "How might an applicant revive an application abandoned for failure to respond to a DOE/NASA letter?",
      options: [
        "Revival is never possible in these circumstances",
        "By showing the delay was unintentional and complying with agency requirements",
        "By filing a new application with the same claims",
        "By paying an abandonment surcharge within 6 months",
      ],
      correctIndex: 1,
      explanation:
        "Revival may be available if the applicant demonstrates the delay was unintentional and satisfies the applicable agency requirements, though the process is more complex than standard revival.",
    },
  },

  // --- Concept Group 6: Statement Content Requirements ---
  {
    id: "z7-layer-13",
    conceptId: "gov-statement-content",
    zoneSlug: "the-agencies",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "The statement filed in response to the 45-day letter must include identification of the government contract under which the invention was made.",
    highlightedAddition:
      "identification of the government contract",
    question: {
      stem: "What is the first required element of a statement filed in response to a DOE/NASA 45-day letter?",
      options: [
        "A claim chart showing novelty over prior art",
        "Identification of the government contract under which the invention was made",
        "A complete assignment of rights to the government",
        "A declaration of inventorship",
      ],
      correctIndex: 1,
      explanation:
        "Under MPEP 151, the statement must identify the specific government contract under which the invention was made or conceived.",
    },
  },
  {
    id: "z7-layer-14",
    conceptId: "gov-statement-content",
    zoneSlug: "the-agencies",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "The statement must also indicate whether the invention was made or conceived under the identified contract, and describe the circumstances of the invention's creation.",
    highlightedAddition:
      "whether the invention was made or conceived under the contract",
    question: {
      stem: "In addition to identifying the contract, what else must the statement address?",
      options: [
        "The commercial value of the invention",
        "Whether the invention was made or conceived under the identified contract",
        "The number of hours spent on the invention",
        "The names of all subcontractors involved",
      ],
      correctIndex: 1,
      explanation:
        "The statement must address the nexus between the invention and the contract, specifically whether the invention was made or conceived during performance of the contract.",
    },
  },
  {
    id: "z7-layer-15",
    conceptId: "gov-statement-content",
    zoneSlug: "the-agencies",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "The statement must further describe the rights of the government in the invention, including whether the government has a license, owns the invention, or has waived its rights.",
    highlightedAddition:
      "rights of the government in the invention",
    question: {
      stem: "What must the statement describe regarding the government's rights?",
      options: [
        "Only whether the government funded the invention",
        "Whether the government has a license, owns the invention, or has waived its rights",
        "Only whether the invention is classified",
        "The patent examination timeline",
      ],
      correctIndex: 1,
      explanation:
        "Under MPEP 151, the statement must describe the government's rights, such as whether it holds a license, has title, or has waived its interest in the invention.",
    },
  },

  // --- Concept Group 7: Multiple Inventors ---
  {
    id: "z7-layer-16",
    conceptId: "gov-multiple-inventors",
    zoneSlug: "the-agencies",
    layerNumber: 1,
    totalLayers: 2,
    ruleText:
      "When there are multiple inventors on an application subject to DOE or NASA interest, each inventor who was involved in the government contract must file a separate statement.",
    highlightedAddition:
      "each inventor ... must file a separate statement",
    question: {
      stem: "If a patent application with DOE interest has three joint inventors, how many statements are needed?",
      options: [
        "Only one statement from the lead inventor",
        "Each inventor involved in the government contract must file a separate statement",
        "The employer files a single statement on behalf of all inventors",
        "No statements are needed for joint inventions",
      ],
      correctIndex: 1,
      explanation:
        "Each inventor who participated in the government contract must individually file a statement addressing their relationship to the contract and the invention.",
    },
  },
  {
    id: "z7-layer-17",
    conceptId: "gov-multiple-inventors",
    zoneSlug: "the-agencies",
    layerNumber: 2,
    totalLayers: 2,
    ruleText:
      "If some inventors were under the government contract and others were not, only those under the contract must file the statement. However, the application may still be subject to the government's property rights.",
    highlightedAddition:
      "only those under the contract must file the statement",
    question: {
      stem: "If only two of four joint inventors worked under a NASA contract, who must file a statement?",
      options: [
        "All four inventors",
        "Only the two inventors who worked under the contract",
        "The first-named inventor only",
        "The assignee of the application",
      ],
      correctIndex: 1,
      explanation:
        "Only inventors who were actually under the government contract need to file statements, though the government's property rights may still affect the entire application.",
    },
  },

  // --- Concept Group 8: Substitute Statements ---
  {
    id: "z7-layer-18",
    conceptId: "gov-substitute-statement",
    zoneSlug: "the-agencies",
    layerNumber: 1,
    totalLayers: 2,
    ruleText:
      "When an inventor cannot be reached or refuses to cooperate, a substitute statement may be filed by a party with sufficient knowledge of the facts, such as the assignee or an obligated assignee.",
    highlightedAddition:
      "substitute statement may be filed by a party with sufficient knowledge",
    question: {
      stem: "When can a substitute statement be filed in response to a DOE/NASA 45-day letter?",
      options: [
        "Whenever the applicant prefers not to file personally",
        "When the inventor cannot be reached or refuses to cooperate",
        "Only when the application has been assigned to a corporation",
        "Only after the application has been published",
      ],
      correctIndex: 1,
      explanation:
        "A substitute statement is available when the inventor cannot be reached or refuses to cooperate. It must be filed by someone with sufficient knowledge of the relevant facts.",
    },
  },
  {
    id: "z7-layer-19",
    conceptId: "gov-substitute-statement",
    zoneSlug: "the-agencies",
    layerNumber: 2,
    totalLayers: 2,
    ruleText:
      "The substitute statement must contain all the same information as a regular statement: contract identification, whether the invention was made under the contract, and the government's rights. The filer must explain why the inventor is unavailable.",
    highlightedAddition:
      "must contain all the same information ... explain why the inventor is unavailable",
    question: {
      stem: "What additional requirement does a substitute statement have beyond a regular statement?",
      options: [
        "It must include a higher filing fee",
        "It must explain why the inventor is unavailable",
        "It must be signed by a government official",
        "It must include a petition to make special",
      ],
      correctIndex: 1,
      explanation:
        "A substitute statement must include all the same substantive content as a regular statement, plus an explanation of why the inventor is unavailable to sign.",
    },
  },
];

// --- ABSORB PHASE: Analogies ---

export const ZONE7_ANALOGIES: AnalogyMapping[] = [
  {
    id: "z7-analogy-1",
    conceptId: "gov-45day-letter",
    zoneSlug: "the-agencies",
    analogyText:
      "The 45-day letter process is like a landlord sending a 'claim your belongings' notice after a tenant moves out. The government (landlord) identifies property it may own (inventions under contract). The applicant (tenant) gets a letter saying 'prove these belongings are yours within 30 days, or we will keep them.' If the tenant does not respond, the belongings (patent rights) are forfeited.",
    mappings: [
      { analogyTerm: "Landlord", formalTerm: "DOE or NASA" },
      { analogyTerm: "Tenant", formalTerm: "Patent applicant / contractor" },
      {
        analogyTerm: "Claim your belongings notice",
        formalTerm: "45-day letter from USPTO",
      },
      {
        analogyTerm: "30-day deadline",
        formalTerm: "Statutory response period",
      },
      {
        analogyTerm: "Belongings forfeited",
        formalTerm: "Application regarded as abandoned",
      },
    ],
    followUp: {
      stem: "Unlike a landlord dispute, can the applicant get an extension of the 30-day deadline?",
      options: [
        "Yes, extensions are freely available just like other USPTO deadlines",
        "Extensions may not be available because the deadline is statutory, not regulatory",
        "Yes, but only if the applicant pays an extension fee",
        "Extensions are always granted for government agency matters",
      ],
      correctIndex: 1,
      explanation:
        "The analogy breaks here. Unlike many USPTO deadlines that can be extended, the 30-day response period for the 45-day letter is statutory and may not be extendable.",
    },
  },
  {
    id: "z7-analogy-2",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    analogyText:
      "DOE and NASA authority over contractor inventions is like a work-for-hire clause in an employment contract. When a company (DOE/NASA) pays a worker (contractor) to develop something, the company may own what is created. The worker can ask for rights back (waiver), but the default is that the company gets first claim. The key question is always: was this work done under the contract, or on the worker's own time?",
    mappings: [
      { analogyTerm: "Company", formalTerm: "DOE or NASA" },
      { analogyTerm: "Worker", formalTerm: "Government contractor" },
      {
        analogyTerm: "Work-for-hire clause",
        formalTerm: "42 USC 2182 / 51 USC 20135",
      },
      {
        analogyTerm: "Asking for rights back",
        formalTerm: "Government waiver of rights",
      },
      {
        analogyTerm: "Under contract vs. own time",
        formalTerm: "Made under the contract vs. independent invention",
      },
    ],
    followUp: {
      stem: "Unlike typical work-for-hire, what unique mechanism exists for DOE/NASA inventions?",
      options: [
        "The contractor automatically keeps all rights after the contract ends",
        "The USPTO sends a 45-day letter requiring the applicant to establish rights",
        "The contractor must assign all inventions to the government without exception",
        "The government cannot claim title if the contractor files first",
      ],
      correctIndex: 1,
      explanation:
        "Unlike typical work-for-hire where the employer automatically owns the work, the DOE/NASA process involves the USPTO sending a 45-day letter requiring the applicant to affirmatively establish their rights through a formal statement.",
    },
  },
  {
    id: "z7-analogy-3",
    conceptId: "gov-statement-content",
    zoneSlug: "the-agencies",
    analogyText:
      "Filing the required statement is like answering an audit from the IRS. You receive a letter (45-day notice), you must respond by the deadline (30 days), and your response must include specific documentation: which contract (which tax year), what was done under it (what income sources), and what the government is owed (tax liability). Missing the deadline means penalties (abandonment).",
    mappings: [
      { analogyTerm: "IRS audit letter", formalTerm: "45-day letter" },
      { analogyTerm: "Which tax year", formalTerm: "Contract identification" },
      {
        analogyTerm: "Income sources",
        formalTerm: "Whether invention was made under the contract",
      },
      {
        analogyTerm: "Tax liability owed",
        formalTerm: "Government's rights in the invention",
      },
      { analogyTerm: "Penalties for missing deadline", formalTerm: "Abandonment" },
    ],
    followUp: {
      stem: "What happens if only some of multiple joint inventors were under the government contract?",
      options: [
        "All inventors must file the statement regardless of contract involvement",
        "Only the inventors who worked under the contract must file statements",
        "No statements are required if fewer than half the inventors were under the contract",
        "The lead inventor files on behalf of all others",
      ],
      correctIndex: 1,
      explanation:
        "Unlike a joint tax return, each inventor's obligation is individual. Only those who actually worked under the government contract must file the statement, though the government's property rights may still affect the entire application.",
    },
  },
];

// --- ABSORB PHASE: Visual Timelines ---

export const ZONE7_TIMELINES: VisualTimelineData[] = [
  {
    id: "z7-timeline-1",
    conceptId: "gov-45day-letter",
    zoneSlug: "the-agencies",
    title: "DOE/NASA 45-Day Letter Response Process",
    description:
      "Timeline from identification of government interest to resolution of property rights.",
    startLabel: "Application Filed",
    endLabel: "Resolution",
    milestones: [
      {
        id: "t1-m1",
        label: "Patent application filed at USPTO",
        description:
          "Application enters normal prosecution. USPTO screens for potential DOE/NASA interest.",
        position: 0,
      },
      {
        id: "t1-m2",
        label: "DOE or NASA identifies government interest",
        description:
          "Agency reviews application and determines potential connection to government contract.",
        position: 25,
      },
      {
        id: "t1-m3",
        label: "45-day letter sent to applicant",
        description:
          "USPTO sends notification letter informing applicant of government interest and requiring a response.",
        position: 40,
      },
      {
        id: "t1-m4",
        label: "30-day response deadline",
        description:
          "Applicant must file a statement within 30 days establishing rights. Failure may result in abandonment.",
        position: 65,
      },
      {
        id: "t1-m5",
        label: "Rights determination",
        description:
          "Based on the statement, the government's property rights are resolved and prosecution may continue.",
        position: 100,
      },
    ],
  },
  {
    id: "z7-timeline-2",
    conceptId: "gov-statement-content",
    zoneSlug: "the-agencies",
    title: "Statement Filing and Review Process",
    description:
      "Steps from receiving the 45-day letter through filing the statement and resolving rights.",
    startLabel: "Letter Received",
    endLabel: "Rights Resolved",
    milestones: [
      {
        id: "t2-m1",
        label: "Applicant receives 45-day letter",
        description:
          "Letter identifies the government agency (DOE or NASA) and the potential contract connection.",
        position: 0,
      },
      {
        id: "t2-m2",
        label: "Applicant gathers contract information",
        description:
          "Applicant identifies the relevant contract, determines invention circumstances, and assesses government rights.",
        position: 20,
      },
      {
        id: "t2-m3",
        label: "Statement filed within 30 days",
        description:
          "Statement includes: contract ID, whether invention was made under contract, and government rights description.",
        position: 50,
      },
      {
        id: "t2-m4",
        label: "Agency reviews statement",
        description:
          "DOE or NASA evaluates the statement and may accept, challenge, or request additional information.",
        position: 75,
      },
      {
        id: "t2-m5",
        label: "Rights resolved, prosecution continues",
        description:
          "Government property rights are determined. If waiver granted, applicant retains full rights. Patent prosecution proceeds.",
        position: 100,
      },
    ],
  },
];
