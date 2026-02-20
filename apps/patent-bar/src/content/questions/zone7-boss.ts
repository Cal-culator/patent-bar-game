import { BossQuestion } from "@study-game/engine";

// ============================================================
// Zone 7: The Agencies — Boss Battle Questions
// 10 mixed questions (7 scenario, 3 true/false) at difficulty 3-4
// ============================================================

export const ZONE7_BOSS: BossQuestion[] = [
  // Q1: Scenario — DOE contract scope (difficulty 3)
  {
    id: "z7-boss-1",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    questionType: "scenario",
    difficulty: 3,
    stem: "Dr. Franklin works for NucleoLab under DOE Contract DE-AC05-7777. During work hours, she conceives a new method of isotope separation related to her contract work. On weekends, she independently invents a novel gardening tool with no connection to atomic energy. She files patent applications for both inventions. Which application is subject to DOE's property rights under 42 USC 2182?",
    options: [
      { text: "Both applications, because Dr. Franklin is a DOE contractor" },
      { text: "Only the isotope separation method, because it was made under the DOE contract and relates to atomic energy" },
      { text: "Neither application, because DOE rights only apply after the patent issues" },
      { text: "Only the gardening tool, because it was conceived outside work hours" },
    ],
    correctIndex: 1,
    explanation:
      "DOE's authority under 42 USC 2182 applies to inventions made or conceived under DOE contracts relating to atomic energy. The isotope separation method was made under the contract and relates to atomic energy. The gardening tool has no connection to the contract or atomic energy and is not subject to DOE's property rights.",
    citationRef: "42 USC 2182; MPEP 150",
  },
  // Q2: Scenario — NASA waiver process (difficulty 3)
  {
    id: "z7-boss-2",
    conceptId: "gov-nasa-authority",
    zoneSlug: "the-agencies",
    questionType: "scenario",
    difficulty: 3,
    stem: "OrbitalTech Inc. develops a lightweight thermal shield under NASA Contract NNX-3333. After receiving a 45-day letter, OrbitalTech files the required statement confirming the invention was made under the contract. NASA determines it will claim title. OrbitalTech believes it can commercialize the technology more effectively than NASA. What is OrbitalTech's best option?",
    options: [
      { text: "File a lawsuit against NASA in federal court to retain title" },
      { text: "Request a waiver of NASA's rights, arguing that OrbitalTech retaining rights serves the public interest through commercialization" },
      { text: "Abandon the application and file a new one without mentioning the NASA contract" },
      { text: "Appeal directly to the Commissioner for Patents to override NASA's determination" },
    ],
    correctIndex: 1,
    explanation:
      "Under 51 USC 20135, contractors can request a waiver of NASA's rights. NASA evaluates waiver requests based on factors including whether contractor retention of rights would better serve the public interest. The ability to commercialize the technology effectively is a strong argument for a waiver.",
    citationRef: "51 USC 20135; MPEP 150",
  },
  // Q3: Scenario — Timing and 30-day deadline (difficulty 3)
  {
    id: "z7-boss-3",
    conceptId: "gov-30day-response",
    zoneSlug: "the-agencies",
    questionType: "scenario",
    difficulty: 3,
    stem: "Attorney Romero receives a 45-day letter dated July 1 for her client's application related to a DOE contract. She contacts her client on July 5, but the client is on vacation until July 20. The client gathers contract documents by July 25 and wants to request a 30-day extension. What should Attorney Romero advise?",
    options: [
      { text: "File for a 30-day extension under 37 CFR 1.136 — it will be granted automatically" },
      { text: "The 30-day deadline (July 31) is statutory and may not be extendable; she should file the best statement possible by July 31" },
      { text: "The deadline is 45 days from July 1, giving them until August 15, so there is no urgency" },
      { text: "Request the examiner to suspend prosecution until the client returns" },
    ],
    correctIndex: 1,
    explanation:
      "The 30-day response deadline is statutory, not regulatory, which means standard extension procedures under 37 CFR 1.136 may not apply. Attorney Romero should advise filing the best possible statement by July 31 (30 days from July 1) to avoid abandonment.",
    citationRef: "MPEP 150",
  },
  // Q4: True/False — Statement requirements (difficulty 3)
  {
    id: "z7-boss-4",
    conceptId: "gov-statement-content",
    zoneSlug: "the-agencies",
    questionType: "true_false",
    difficulty: 3,
    stem: "True or False: The statement filed in response to a DOE/NASA 45-day letter requires the applicant to assign all patent rights to the government.",
    isTrue: false,
    explanation:
      "The statement does not require assignment. It requires: (1) identification of the contract, (2) whether the invention was made under the contract, and (3) a description of the government's rights. The government may ultimately claim title, but the statement itself is an informational filing, not an assignment document.",
    citationRef: "MPEP 151",
  },
  // Q5: True/False — Substitute statement scope (difficulty 3)
  {
    id: "z7-boss-5",
    conceptId: "gov-substitute-statement",
    zoneSlug: "the-agencies",
    questionType: "true_false",
    difficulty: 3,
    stem: "True or False: A substitute statement filed when an inventor is unavailable does not need to contain the same substantive information as a regular statement.",
    isTrue: false,
    explanation:
      "A substitute statement must contain all the same substantive elements as a regular statement — contract identification, invention nexus, and government rights — plus an additional explanation of why the inventor is unavailable. It is not a reduced-content alternative.",
    citationRef: "MPEP 151",
  },
  // Q6: Scenario — Complex multi-contract (difficulty 4)
  {
    id: "z7-boss-6",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    questionType: "scenario",
    difficulty: 4,
    stem: "QuantumDef Corp. has both a DOE contract (DE-AC07-4444) for nuclear reactor design and a NASA contract (NNX-5555) for spacecraft power systems. An inventor working under both contracts develops a novel power conversion technology applicable to both nuclear reactors and spacecraft. The USPTO sends a 45-day letter. Which agency's rights must the statement address?",
    options: [
      { text: "Only DOE's rights, because atomic energy takes priority" },
      { text: "Only NASA's rights, because the Space Act supersedes the Atomic Energy Act" },
      { text: "The statement must address both agencies' potential rights, since the invention was made under contracts with both DOE and NASA" },
      { text: "Neither agency has rights because dual-contract inventions fall outside both statutes" },
    ],
    correctIndex: 2,
    explanation:
      "When an invention is made under contracts with both DOE and NASA, the statement must address both agencies' potential rights. The applicant should identify both contracts, describe the nexus to each, and address the rights each agency may hold. The agencies will coordinate to determine their respective interests.",
    citationRef: "42 USC 2182; 51 USC 20135; MPEP 151",
  },
  // Q7: Scenario — Multiple inventors mixed status (difficulty 4)
  {
    id: "z7-boss-7",
    conceptId: "gov-multiple-inventors",
    zoneSlug: "the-agencies",
    questionType: "scenario",
    difficulty: 4,
    stem: "A patent application lists five inventors. Inventors A and B worked under DOE Contract DE-AC05-1111. Inventor C worked under NASA Contract NNX-2222. Inventors D and E are university researchers with no government contract. Inventor B is deceased and Inventor C is abroad and unreachable. What statements must be filed?",
    options: [
      { text: "Statements from A, B, and C only; D and E are exempt" },
      { text: "A regular statement from Inventor A, substitute statements for Inventors B (deceased) and C (unreachable); Inventors D and E are not required to file" },
      { text: "All five inventors must file statements" },
      { text: "Only Inventor A must file because the others are unavailable or exempt" },
    ],
    correctIndex: 1,
    explanation:
      "Inventor A files a regular statement addressing DOE Contract DE-AC05-1111. Substitute statements must be filed for Inventor B (deceased, so unreachable) and Inventor C (unreachable abroad), addressing their respective contracts. Inventors D and E were not under government contracts and need not file. Each substitute statement must explain the inventor's unavailability.",
    citationRef: "MPEP 151",
  },
  // Q8: True/False — Agency authority distinction (difficulty 4)
  {
    id: "z7-boss-8",
    conceptId: "gov-nasa-authority",
    zoneSlug: "the-agencies",
    questionType: "true_false",
    difficulty: 4,
    stem: "True or False: If a government contractor's application is identified by NASA under 51 USC 20135 and the contractor fails to respond to the 45-day letter, NASA automatically receives title to the invention.",
    isTrue: false,
    explanation:
      "Failure to respond to the 45-day letter results in the application being regarded as abandoned, not in automatic transfer of title to NASA. Abandonment means the applicant loses their application, but it does not directly transfer property rights to the agency. The consequence is loss of the application, not government title acquisition.",
    citationRef: "51 USC 20135; MPEP 150",
  },
  // Q9: Scenario — Post-contract invention (difficulty 4)
  {
    id: "z7-boss-9",
    conceptId: "gov-doe-authority",
    zoneSlug: "the-agencies",
    questionType: "scenario",
    difficulty: 4,
    stem: "FusionCo completed DOE Contract DE-FG02-8888 in June. In September, using knowledge gained during the contract but funded entirely by FusionCo, an engineer develops a new plasma containment method. FusionCo files a patent application. DOE sends a 45-day letter claiming the invention may be subject to 42 USC 2182. What should FusionCo's statement argue?",
    options: [
      { text: "That FusionCo should not have to file a statement because the contract is over" },
      { text: "That the invention was conceived and made after the contract ended, using FusionCo's own funds, and therefore was not made under the DOE contract — while acknowledging the DOE contract background" },
      { text: "That the engineer was not personally named on the DOE contract" },
      { text: "That plasma containment does not fall within the Atomic Energy Act" },
    ],
    correctIndex: 1,
    explanation:
      "The strongest argument addresses the key statutory question: was the invention 'made or conceived under' the contract? FusionCo should argue the invention was made after contract completion with independent funding. The statement must still identify the contract and address the government's rights, but can argue the nexus is insufficient for DOE to claim title.",
    citationRef: "42 USC 2182; MPEP 151",
  },
  // Q10: Scenario — Ultimate integration (difficulty 4)
  {
    id: "z7-boss-10",
    conceptId: "gov-45day-letter",
    zoneSlug: "the-agencies",
    questionType: "scenario",
    difficulty: 4,
    stem: "AstroDefense Corp. receives a 45-day letter dated October 1 regarding an application with three inventors: Dr. Reed (NASA contractor, available), Dr. Tanaka (DOE contractor, abroad and unreachable), and Dr. Foster (independent consultant, no contract). The application covers a satellite propulsion system with both NASA and DOE contract connections. What is the complete set of actions AstroDefense must take by October 31?",
    options: [
      { text: "File one combined statement from Dr. Reed covering all three inventors" },
      { text: "File a regular statement from Dr. Reed addressing both NASA and DOE contracts, a substitute statement for Dr. Tanaka explaining unavailability and addressing the DOE contract, and no statement from Dr. Foster" },
      { text: "Request an extension because of Dr. Tanaka's unavailability" },
      { text: "File statements from all three inventors, each addressing both agency contracts" },
    ],
    correctIndex: 1,
    explanation:
      "Dr. Reed must file a regular statement addressing the NASA contract (and potentially DOE aspects within his knowledge). A substitute statement must be filed for Dr. Tanaka (unreachable) addressing the DOE contract and explaining unavailability. Dr. Foster, having no government contract, is not required to file. All must be filed by October 31 (30 days from October 1), as the statutory deadline may not be extendable.",
    citationRef: "MPEP 150; MPEP 151",
  },
];
