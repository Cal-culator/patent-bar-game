import {
  ScenarioQuestion,
  QuickFireQuestion,
  ProceduralCascadeData,
} from "@/types";

// ============================================================
// Zone 7: The Agencies — Apply Phase Content
// Scenarios, Quick-Fire, Procedural Cascades
// ============================================================

// --- SCENARIO QUESTIONS (8) ---
// Realistic exam-style fact patterns at escalating difficulty

export const ZONE7_SCENARIOS: ScenarioQuestion[] = [
  // Difficulty 1 — Basic DOE identification
  {
    id: "z7-scenario-1",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    difficulty: 1,
    stem: "Dr. Hartman, a researcher at a national laboratory, files a patent application for a new method of uranium enrichment. The invention was developed entirely under a DOE contract. Which agency has potential property rights in this invention?",
    options: [
      { text: "The USPTO, because the application was filed there" },
      { text: "The Department of Energy, because the invention was made under a DOE contract involving atomic energy" },
      { text: "NASA, because uranium enrichment involves advanced technology" },
      { text: "No agency, because the invention belongs solely to the inventor" },
    ],
    correctIndex: 1,
    explanation:
      "Under 42 USC 2182, the DOE has authority over inventions made or conceived under contracts with the Atomic Energy Commission or DOE. Uranium enrichment falls squarely within atomic energy subject matter.",
    citationRef: "42 USC 2182",
  },
  {
    id: "z7-scenario-2",
    conceptId: "gov-nasa-authority",
    zoneSlug: "the-agencies",
    difficulty: 1,
    stem: "SpaceTech Inc. is a contractor building satellite components under a NASA contract. An engineer at SpaceTech invents a new antenna design during contract work. SpaceTech files a patent application. What happens next?",
    options: [
      { text: "The patent issues normally because SpaceTech is a private company" },
      { text: "NASA may identify the application as involving a contractor invention and the USPTO will send a 45-day letter" },
      { text: "SpaceTech must assign the patent directly to NASA before filing" },
      { text: "The USPTO will reject the application because government contractors cannot file patents" },
    ],
    correctIndex: 1,
    explanation:
      "Under 51 USC 20135, NASA has authority over inventions made by contractors under NASA contracts. The USPTO will send a 45-day letter requiring SpaceTech to file a statement establishing rights.",
    citationRef: "51 USC 20135; MPEP 150",
  },

  // Difficulty 2 — Response process
  {
    id: "z7-scenario-3",
    conceptId: "gov-45day-letter",
    zoneSlug: "the-agencies",
    difficulty: 2,
    stem: "Attorney Williams receives a 45-day letter from the USPTO on behalf of DOE regarding her client's patent application. The letter is dated March 1. By what date must her client file the required statement, and what happens if they miss the deadline?",
    options: [
      { text: "April 15 (45 days); the application will be placed on hold" },
      { text: "March 31 (30 days); the application may be regarded as abandoned" },
      { text: "April 30 (60 days); a surcharge will be imposed" },
      { text: "March 15 (14 days); the application will be transferred to DOE" },
    ],
    correctIndex: 1,
    explanation:
      "The applicant has 30 days from the date of the 45-day letter to respond. A letter dated March 1 requires a response by March 31. Failure to respond may result in the application being regarded as abandoned.",
    citationRef: "MPEP 150",
  },
  {
    id: "z7-scenario-4",
    conceptId: "gov-statement-content",
    zoneSlug: "the-agencies",
    difficulty: 2,
    stem: "Inventor Patel receives a 45-day letter and must prepare a statement. His invention was developed under NASA Contract No. NAS5-12345. Which of the following statements would satisfy the requirements of MPEP 151?",
    options: [
      { text: "A letter stating only that the invention is novel and non-obvious" },
      { text: "A statement identifying Contract NAS5-12345, confirming the invention was made during contract performance, and describing NASA's rights including any waiver" },
      { text: "A declaration of inventorship signed by all named inventors" },
      { text: "A petition to make special requesting expedited examination" },
    ],
    correctIndex: 1,
    explanation:
      "Under MPEP 151, the statement must include: (1) identification of the contract (NAS5-12345), (2) whether the invention was made under the contract, and (3) the government's rights, including any waiver.",
    citationRef: "MPEP 151",
  },

  // Difficulty 3 — Multiple inventors, substitute statements
  {
    id: "z7-scenario-5",
    conceptId: "gov-multiple-inventors",
    zoneSlug: "the-agencies",
    difficulty: 3,
    stem: "A patent application names four joint inventors: Dr. Kim and Dr. Lee worked under DOE Contract DE-AC05-0001, while Dr. Garcia and Dr. Nakamura developed their contributions independently at a university not under any government contract. The USPTO sends a 45-day letter. Who must file statements?",
    options: [
      { text: "All four inventors must file individual statements" },
      { text: "Only Dr. Kim and Dr. Lee, because they are the inventors who worked under the DOE contract" },
      { text: "Only the first-named inventor, who files on behalf of all" },
      { text: "The university files a single statement as the assignee" },
    ],
    correctIndex: 1,
    explanation:
      "Only inventors who worked under the government contract must file statements. Dr. Garcia and Dr. Nakamura, who worked independently at the university, are not required to file. However, the government's property rights may still affect the entire application.",
    citationRef: "MPEP 151",
  },
  {
    id: "z7-scenario-6",
    conceptId: "gov-substitute-statement",
    zoneSlug: "the-agencies",
    difficulty: 3,
    stem: "BioDefense Corp. receives a 45-day letter regarding a patent application naming Dr. Volkov as the sole inventor. Dr. Volkov left the company and returned to Russia, and cannot be reached despite diligent efforts. What can BioDefense do to meet the 30-day deadline?",
    options: [
      { text: "Nothing — without the inventor, the application must be abandoned" },
      { text: "File a substitute statement through a party with sufficient knowledge of the facts, such as BioDefense's R&D director, explaining why Dr. Volkov is unavailable" },
      { text: "Request an indefinite extension until Dr. Volkov can be located" },
      { text: "Assign the application to the government and refile under a different inventor" },
    ],
    correctIndex: 1,
    explanation:
      "When an inventor cannot be reached, a substitute statement may be filed by a party with sufficient knowledge of the facts. The substitute statement must contain all the same information as a regular statement, plus an explanation of why the inventor is unavailable.",
    citationRef: "MPEP 151",
  },

  // Difficulty 4 — Complex integration
  {
    id: "z7-scenario-7",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    difficulty: 4,
    stem: "NuclearTech LLC developed a new reactor cooling system. The initial concept was created under DOE Contract DE-AC02-9999, but the key improvement was made after the contract ended using NuclearTech's own funds. NuclearTech files a patent application covering both the initial concept and the improvement. The USPTO sends a 45-day letter from DOE. What should NuclearTech's statement address?",
    options: [
      { text: "Only the initial concept, since the improvement was not made under the contract" },
      { text: "The statement should identify the contract, explain that the initial concept was made under it but the improvement was not, and describe DOE's rights in the contract-related portion while asserting independent rights in the improvement" },
      { text: "NuclearTech should split the application into two separate applications to avoid DOE claims" },
      { text: "The statement need only confirm the contract existed; DOE cannot claim rights to any post-contract work" },
    ],
    correctIndex: 1,
    explanation:
      "The statement must address the full picture: identify the contract, explain which aspects were made under it and which were not, and describe the government's rights. DOE may have rights in the contract-related concept but not the independently funded improvement. The statement must clearly delineate both.",
    citationRef: "42 USC 2182; MPEP 151",
  },
  {
    id: "z7-scenario-8",
    conceptId: "gov-abandonment",
    zoneSlug: "the-agencies",
    difficulty: 4,
    stem: "AeroSpace Inc. receives a 45-day letter from NASA on June 1. Due to an internal miscommunication, no one at the company responds. On August 15, AeroSpace discovers the missed deadline and wants to revive the application. What is their most significant challenge?",
    options: [
      { text: "There is no challenge — the application can be revived simply by paying a late response fee" },
      { text: "The 30-day statutory deadline cannot be extended, so the application has likely been regarded as abandoned; revival may require demonstrating the delay was unintentional and satisfying agency requirements" },
      { text: "AeroSpace must file a new application because abandoned applications cannot be revived" },
      { text: "The only option is to petition the NASA Administrator directly for reinstatement" },
    ],
    correctIndex: 1,
    explanation:
      "Because the 30-day deadline is statutory and likely non-extendable, AeroSpace's application has probably been regarded as abandoned. Revival may be possible but requires showing the delay was unintentional and complying with both USPTO and agency requirements, which is more complex than standard revival procedures.",
    citationRef: "MPEP 150",
  },
];

// --- QUICK-FIRE QUESTIONS (12) ---
// True/false rapid recall covering all concept groups

export const ZONE7_QUICK_FIRE: QuickFireQuestion[] = [
  {
    id: "z7-qf-1",
    zoneSlug: "the-agencies",
    statement:
      "DOE derives its authority over contractor inventions from 42 USC 2182, part of the Atomic Energy Act.",
    isTrue: true,
    explanation:
      "42 USC 2182 is the statutory basis for DOE's authority over inventions made under Atomic Energy Commission/DOE contracts.",
    citationRef: "42 USC 2182",
  },
  {
    id: "z7-qf-2",
    zoneSlug: "the-agencies",
    statement:
      "NASA's authority over contractor inventions comes from the same statute as DOE's authority.",
    isTrue: false,
    explanation:
      "DOE's authority is under 42 USC 2182 (Atomic Energy Act), while NASA's authority is under 51 USC 20135 (Space Act). They are separate statutes.",
    citationRef: "42 USC 2182; 51 USC 20135",
  },
  {
    id: "z7-qf-3",
    zoneSlug: "the-agencies",
    statement:
      "The response deadline for a 45-day letter is 45 days from the date of the letter.",
    isTrue: false,
    explanation:
      "Despite being called a '45-day letter,' the response deadline is 30 days from the date of the letter, not 45 days.",
    citationRef: "MPEP 150",
  },
  {
    id: "z7-qf-4",
    zoneSlug: "the-agencies",
    statement:
      "Failure to respond to a 45-day letter within the deadline may result in the application being regarded as abandoned.",
    isTrue: true,
    explanation:
      "Non-response within the 30-day deadline may cause the application to be regarded as abandoned.",
    citationRef: "MPEP 150",
  },
  {
    id: "z7-qf-5",
    zoneSlug: "the-agencies",
    statement:
      "The statement filed in response to a 45-day letter must include identification of the government contract.",
    isTrue: true,
    explanation:
      "Under MPEP 151, one of the three required elements is identification of the government contract under which the invention was made.",
    citationRef: "MPEP 151",
  },
  {
    id: "z7-qf-6",
    zoneSlug: "the-agencies",
    statement:
      "When multiple inventors are on an application, only the lead inventor must file a statement in response to a 45-day letter.",
    isTrue: false,
    explanation:
      "Each inventor who was involved in the government contract must file a separate statement, not just the lead inventor.",
    citationRef: "MPEP 151",
  },
  {
    id: "z7-qf-7",
    zoneSlug: "the-agencies",
    statement:
      "A substitute statement can be filed when the inventor cannot be reached or refuses to cooperate.",
    isTrue: true,
    explanation:
      "A substitute statement is available when the inventor is unreachable or uncooperative, and must be filed by a party with sufficient knowledge of the facts.",
    citationRef: "MPEP 151",
  },
  {
    id: "z7-qf-8",
    zoneSlug: "the-agencies",
    statement:
      "The 30-day deadline for responding to a 45-day letter can be extended by filing a petition under 37 CFR 1.136.",
    isTrue: false,
    explanation:
      "The 30-day deadline is statutory and may not be extendable through the standard 37 CFR 1.136 extension procedures, which apply to regulatory deadlines.",
    citationRef: "MPEP 150",
  },
  {
    id: "z7-qf-9",
    zoneSlug: "the-agencies",
    statement:
      "Both DOE and NASA may waive their rights to contractor inventions in certain circumstances.",
    isTrue: true,
    explanation:
      "Both agencies have the discretion to waive their property rights. The contractor must request the waiver and demonstrate it serves the public interest.",
    citationRef: "MPEP 150",
  },
  {
    id: "z7-qf-10",
    zoneSlug: "the-agencies",
    statement:
      "The government automatically receives title to all inventions made under DOE or NASA contracts without any further action.",
    isTrue: false,
    explanation:
      "The government does not automatically receive title. The agency must identify the application, the USPTO sends a 45-day letter, and the applicant files a statement. The agency may then claim title based on the circumstances.",
    citationRef: "MPEP 150; 42 USC 2182; 51 USC 20135",
  },
  {
    id: "z7-qf-11",
    zoneSlug: "the-agencies",
    statement:
      "A substitute statement must contain all the same information as a regular statement, plus an explanation of why the inventor is unavailable.",
    isTrue: true,
    explanation:
      "The substitute statement has the same substantive requirements as a regular statement, with the additional requirement of explaining the inventor's unavailability.",
    citationRef: "MPEP 151",
  },
  {
    id: "z7-qf-12",
    zoneSlug: "the-agencies",
    statement:
      "If only some joint inventors worked under a government contract, all inventors on the application must file statements.",
    isTrue: false,
    explanation:
      "Only those inventors who actually worked under the government contract must file statements. Inventors not involved in the contract are not required to file.",
    citationRef: "MPEP 151",
  },
];

// --- PROCEDURAL CASCADES (3) ---
// Multi-step fact patterns with 3 steps each

export const ZONE7_CASCADES: ProceduralCascadeData[] = [
  {
    id: "z7-cascade-1",
    conceptId: "gov-45day-letter",
    zoneSlug: "the-agencies",
    title: "DOE Contract Invention — Full Process",
    setup:
      "AtomCorp, a DOE contractor, files a patent application for a new method of nuclear waste processing developed under DOE Contract DE-AC07-5555. The USPTO sends a 45-day letter on April 10. Walk through the response process.",
    steps: [
      {
        stem: "What is the deadline for AtomCorp to respond to the 45-day letter dated April 10?",
        options: [
          "May 25 (45 days from April 10)",
          "May 10 (30 days from April 10)",
          "June 9 (60 days from April 10)",
          "April 24 (14 days from April 10)",
        ],
        correctIndex: 1,
        explanation:
          "The applicant has 30 days from the date of the letter to respond. April 10 + 30 days = May 10.",
      },
      {
        stem: "What must AtomCorp include in its statement filed with the USPTO?",
        options: [
          "Only a declaration that the invention is patentable",
          "Identification of Contract DE-AC07-5555, whether the invention was made under it, and the government's rights",
          "A complete assignment of all rights to the DOE",
          "A petition for expedited examination",
        ],
        correctIndex: 1,
        explanation:
          "Under MPEP 151, the statement must include: (1) contract identification, (2) whether the invention was made under the contract, and (3) the government's rights.",
      },
      {
        stem: "AtomCorp's statement confirms the invention was made under the contract. DOE reviews and decides to waive its title rights, retaining only a non-exclusive license. What is the effect on the patent application?",
        options: [
          "The application is automatically abandoned because DOE has rights",
          "AtomCorp retains full patent rights subject only to DOE's non-exclusive license, and prosecution continues normally",
          "The application must be refiled naming DOE as co-applicant",
          "AtomCorp must pay DOE a royalty before the patent can issue",
        ],
        correctIndex: 1,
        explanation:
          "When DOE waives title and retains only a non-exclusive license, the applicant retains full patent rights. The application proceeds through normal prosecution with the government's license interest noted.",
      },
    ],
  },
  {
    id: "z7-cascade-2",
    conceptId: "gov-multiple-inventors",
    zoneSlug: "the-agencies",
    title: "Multiple Inventors — Mixed Contract Status",
    setup:
      "A patent application names three inventors: Dr. Chen (NASA contractor under Contract NNX-8888), Dr. Singh (NASA contractor under the same contract), and Dr. Muller (independent university researcher with no government contract). NASA identifies the application. Walk through the statement requirements.",
    steps: [
      {
        stem: "The USPTO sends a 45-day letter. Which inventors must file statements?",
        options: [
          "All three inventors must file statements",
          "Only Dr. Chen and Dr. Singh, who worked under the NASA contract",
          "Only Dr. Chen, as the first-named inventor",
          "Dr. Muller must file to confirm he was NOT under a contract",
        ],
        correctIndex: 1,
        explanation:
          "Only inventors who worked under the government contract must file statements. Dr. Muller, who worked independently, is not required to file a statement.",
      },
      {
        stem: "Dr. Singh has moved abroad and cannot be reached despite diligent efforts. What can be done to satisfy the statement requirement for Dr. Singh?",
        options: [
          "Nothing — the entire application must be abandoned",
          "Dr. Chen can file Dr. Singh's statement on her behalf without further explanation",
          "A substitute statement can be filed by a knowledgeable party, explaining that Dr. Singh is unavailable",
          "The 30-day deadline is automatically extended until Dr. Singh is located",
        ],
        correctIndex: 2,
        explanation:
          "When an inventor cannot be reached, a substitute statement may be filed by a party with sufficient knowledge of the facts. The substitute must include all required elements plus an explanation of Dr. Singh's unavailability.",
      },
      {
        stem: "Both statements are timely filed. NASA reviews them and determines it will claim title to the invention. What are the inventors' options?",
        options: [
          "The inventors have no recourse once NASA claims title",
          "The inventors can petition NASA to waive its rights, arguing that the contractor retaining rights serves the public interest",
          "The inventors can appeal directly to the Federal Circuit",
          "The inventors can file a new application omitting the NASA-related claims",
        ],
        correctIndex: 1,
        explanation:
          "Contractors can petition NASA for a waiver of rights. If granted, the inventors/contractor may retain patent rights, typically subject to a government license. The waiver decision considers whether contractor retention serves the public interest.",
      },
    ],
  },
  {
    id: "z7-cascade-3",
    conceptId: "gov-abandonment",
    zoneSlug: "the-agencies",
    title: "Missed Deadline — Abandonment and Revival",
    setup:
      "EnergyStart Inc. receives a 45-day letter from DOE on January 15 regarding a patent application for a new solar cell technology developed under DOE Contract DE-EE01-2222. Due to a staff transition, no one at EnergyStart reads the letter until March 1. Walk through the consequences and potential remedies.",
    steps: [
      {
        stem: "What was the deadline for EnergyStart's response, and what is the current status of the application?",
        options: [
          "Deadline was March 1 (45 days); the application is still active",
          "Deadline was February 14 (30 days); the application may be regarded as abandoned",
          "Deadline was February 28 (45 days); the application was transferred to DOE",
          "There was no fixed deadline; EnergyStart can still respond",
        ],
        correctIndex: 1,
        explanation:
          "The deadline was 30 days from January 15 = February 14. Since no response was filed by then, the application may be regarded as abandoned.",
      },
      {
        stem: "EnergyStart wants to revive the application. What is their primary obstacle?",
        options: [
          "Revival requires only a petition fee — there are no substantive obstacles",
          "The 30-day deadline is statutory and may not be extendable; revival requires demonstrating the delay was unintentional and satisfying agency requirements",
          "The application cannot be revived under any circumstances",
          "EnergyStart must negotiate directly with DOE before the USPTO will consider revival",
        ],
        correctIndex: 1,
        explanation:
          "Because the deadline derives from statute, standard extension procedures may not apply. Revival is potentially available but requires showing the delay was unintentional and meeting both USPTO and DOE requirements.",
      },
      {
        stem: "Assuming EnergyStart successfully revives the application, what must they still do?",
        options: [
          "Nothing further — revival resolves all issues",
          "File the required statement identifying the DOE contract, confirming whether the invention was made under it, and describing the government's rights",
          "Assign all rights to DOE as a condition of revival",
          "Refile the application with a new filing date",
        ],
        correctIndex: 1,
        explanation:
          "Even after revival, the underlying obligation remains: EnergyStart must file the required statement under MPEP 151 with the three required elements — contract identification, invention nexus, and government rights.",
      },
    ],
  },
];
