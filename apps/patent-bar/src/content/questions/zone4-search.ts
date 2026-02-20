import { OpenBookQuestion, SpeedrunPrompt } from "@study-game/engine";

// ============================================================
// OPEN-BOOK QUESTIONS (10)
// Zone 4: The Classified Wing — MPEP 115
// National Security Review of Patent Applications
// ============================================================

export const ZONE4_OPEN_BOOK: OpenBookQuestion[] = [
  // Group 1: Screening Authority & Basics — 3 questions
  {
    id: "ob-z4-01",
    conceptId: "nsr-screening-authority",
    zoneSlug: "the-classified-wing",
    stem: "Under 35 U.S.C. 181, what is the statutory basis for screening patent applications for national security implications?",
    options: [
      { text: "The Commissioner screens applications at the applicant's request when the invention may involve sensitive technology" },
      { text: "The head of an interested government agency determines whether disclosure would be detrimental to national security and notifies the Commissioner" },
      { text: "The patent examiner flags applications during prosecution if the claims appear to cover military technology" },
      { text: "The Department of Homeland Security automatically screens all patent applications filed by defense contractors" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 U.S.C. 181, the screening authority originates with the heads of interested government agencies who determine whether disclosure of an invention would be detrimental to national security. These agencies notify the Commissioner, who then takes appropriate action such as imposing a secrecy order.",
    citationRef: "35 USC 181",
    targetSectionId: "mpep-115-01",
    searchHint: "screening authority",
  },
  {
    id: "ob-z4-02",
    conceptId: "nsr-three-functions",
    zoneSlug: "the-classified-wing",
    stem: "According to MPEP 115, what are the three screening functions performed during national security review of patent applications?",
    options: [
      { text: "Prior art search, patentability determination, and classification assignment" },
      { text: "Secrecy order determination, export control review, and government property interest assessment" },
      { text: "Inventor identity verification, fee calculation, and foreign filing license issuance" },
      { text: "Application completeness check, formalities review, and examiner assignment" },
    ],
    correctIndex: 1,
    explanation:
      "MPEP 115 identifies three screening functions: (1) determining whether a secrecy order should be imposed, (2) reviewing for export control implications, and (3) assessing whether the government has a property interest in the invention. These functions are carried out by defense and government agencies before substantive examination.",
    citationRef: "MPEP 115",
    targetSectionId: "mpep-115-01",
    searchHint: "three screening functions",
  },
  {
    id: "ob-z4-03",
    conceptId: "nsr-screening-timing",
    zoneSlug: "the-classified-wing",
    stem: "At what point during patent prosecution does the national security screening under MPEP 115 typically occur?",
    options: [
      { text: "After the first office action is issued by the examiner" },
      { text: "Early in prosecution, before substantive examination begins" },
      { text: "Only after the applicant requests publication under 35 USC 122(b)" },
      { text: "During the appeal process at the Patent Trial and Appeal Board" },
    ],
    correctIndex: 1,
    explanation:
      "National security screening occurs early in prosecution, before the application is assigned for substantive examination. This ensures that any national security concerns are identified and addressed before the application enters the examination pipeline, where disclosure risks could arise.",
    citationRef: "MPEP 115; 35 USC 181",
    targetSectionId: "mpep-115-01",
    searchHint: "early in prosecution",
  },

  // Group 2: Filing Classified Applications — 2 questions
  {
    id: "ob-z4-04",
    conceptId: "nsr-hand-carry",
    zoneSlug: "the-classified-wing",
    stem: "According to MPEP 115, how must a classified patent application be submitted to the USPTO?",
    options: [
      { text: "By electronic filing through EFS-Web with special encryption" },
      { text: "By hand-carry to the Licensing and Review (L&R) division" },
      { text: "By certified mail addressed to the Office of Patent Legal Administration" },
      { text: "By overnight courier to the Commissioner of Patents" },
    ],
    correctIndex: 1,
    explanation:
      "Classified patent applications must be hand-carried to the Licensing and Review (L&R) division of the USPTO. Electronic filing and mailing are not approved methods for transmitting classified material. The L&R division maintains the proper security infrastructure for handling such applications.",
    citationRef: "MPEP 115",
    targetSectionId: "mpep-115-02",
    searchHint: "hand-carry",
  },
  {
    id: "ob-z4-05",
    conceptId: "nsr-lr-procedures",
    zoneSlug: "the-classified-wing",
    stem: "What role does the Licensing and Review (L&R) division play in the processing of classified patent applications under MPEP 115?",
    options: [
      { text: "L&R conducts the substantive examination of classified applications in place of regular examiners" },
      { text: "L&R receives classified applications by hand-carry, manages security procedures, and coordinates the national security screening process" },
      { text: "L&R only issues foreign filing licenses and has no role in classified application processing" },
      { text: "L&R forwards classified applications directly to the Department of Defense without USPTO processing" },
    ],
    correctIndex: 1,
    explanation:
      "The L&R division serves as the point of contact for classified patent applications. It receives applications by hand-carry, ensures proper security procedures are followed, assigns L&R codes to track screening status, and coordinates the national security screening process with the relevant defense and government agencies.",
    citationRef: "MPEP 115",
    targetSectionId: "mpep-115-02",
    searchHint: "Licensing and Review",
  },

  // Group 3: Security Clearance Requirements — 2 questions
  {
    id: "ob-z4-06",
    conceptId: "nsr-practitioner-clearance",
    zoneSlug: "the-classified-wing",
    stem: "Under MPEP 115, what security clearance requirement applies to patent practitioners who handle classified applications?",
    options: [
      { text: "No clearance is required because USPTO registration serves as authorization" },
      { text: "Practitioners must hold a security clearance at or above the classification level of the material they will handle" },
      { text: "Practitioners need only a basic background check, not a formal security clearance" },
      { text: "Only practitioners employed by the federal government require clearance" },
    ],
    correctIndex: 1,
    explanation:
      "Patent practitioners who work on classified applications must hold an individual security clearance at or above the level of classification of the material. This is a personal requirement that applies regardless of the practitioner's USPTO registration status or employment by a private firm.",
    citationRef: "MPEP 115",
    targetSectionId: "mpep-115-03",
    searchHint: "security clearance",
  },
  {
    id: "ob-z4-07",
    conceptId: "nsr-clearance-levels",
    zoneSlug: "the-classified-wing",
    stem: "A classified patent application is marked at the 'Top Secret' level. Which statement correctly describes the clearance requirements for practitioners working on this application?",
    options: [
      { text: "A 'Confidential' clearance is sufficient because all classified levels grant access to all classified material" },
      { text: "A 'Secret' clearance is sufficient because it covers all material below 'Top Secret/SCI'" },
      { text: "The practitioner must hold a 'Top Secret' clearance or higher to access and work on the application" },
      { text: "No individual clearance is needed if the practitioner's firm has a facility clearance at the 'Top Secret' level" },
    ],
    correctIndex: 2,
    explanation:
      "Security clearance levels are hierarchical, and a practitioner may only access material at or below their clearance level. A 'Top Secret' application requires the practitioner to hold a 'Top Secret' clearance or higher. A 'Secret' or 'Confidential' clearance would not grant access to 'Top Secret' material, and a facility clearance alone does not substitute for individual clearance.",
    citationRef: "MPEP 115",
    targetSectionId: "mpep-115-03",
    searchHint: "clearance level",
  },

  // Group 4: L&R Codes and Processing — 2 questions
  {
    id: "ob-z4-08",
    conceptId: "nsr-lr-codes",
    zoneSlug: "the-classified-wing",
    stem: "What is the purpose of the L&R codes assigned by the Licensing and Review division to patent applications under MPEP 115?",
    options: [
      { text: "They indicate the art unit to which the application will be assigned for examination" },
      { text: "They indicate the national security screening status of the application, tracking whether screening is pending, in progress, or complete" },
      { text: "They identify the classification level of the application (Confidential, Secret, or Top Secret)" },
      { text: "They designate the filing fee category for classified applications" },
    ],
    correctIndex: 1,
    explanation:
      "L&R codes are assigned by the Licensing and Review division to track the national security screening status of patent applications. These codes indicate where the application stands in the screening process — whether screening is pending, currently being reviewed by defense agencies, or has been completed. The application cannot proceed to substantive examination until the code reflects completed screening.",
    citationRef: "MPEP 115",
    targetSectionId: "mpep-115-04",
    searchHint: "L&R codes",
  },
  {
    id: "ob-z4-09",
    conceptId: "nsr-screening-complete",
    zoneSlug: "the-classified-wing",
    stem: "After the L&R code indicates that national security screening is complete and no secrecy order has been imposed, what happens to the patent application?",
    options: [
      { text: "The application is returned to the applicant for refiling through normal channels" },
      { text: "The application proceeds to substantive examination in the normal course" },
      { text: "The application must undergo a second screening by the Commissioner's office" },
      { text: "The application is automatically published under 35 USC 122(b) regardless of any nonpublication request" },
    ],
    correctIndex: 1,
    explanation:
      "When screening is complete and no secrecy order is imposed, the L&R code is updated to reflect the cleared status, and the application proceeds to substantive examination in the normal course. There is no second screening requirement, and the application follows standard prosecution procedures from that point forward.",
    citationRef: "MPEP 115",
    targetSectionId: "mpep-115-04",
    searchHint: "screening complete",
  },

  // Group 5: Agency-Specific Screening — 1 question
  {
    id: "ob-z4-10",
    conceptId: "nsr-agency-roles",
    zoneSlug: "the-classified-wing",
    stem: "Under MPEP 115, which of the following correctly pairs a government agency with its screening responsibility?",
    options: [
      { text: "NASA screens for atomic energy applications; DOE screens for space technology" },
      { text: "DOE screens for atomic energy under 42 USC 2182; NASA screens for space technology under 51 USC 20135; DoD screens for military significance" },
      { text: "All screening is performed exclusively by the National Security Agency (NSA)" },
      { text: "The FBI screens all applications for national security; DoD only screens applications from military personnel" },
    ],
    correctIndex: 1,
    explanation:
      "MPEP 115 describes the specific screening responsibilities of different agencies: the Department of Energy (DOE) screens for atomic energy matters under 42 USC 2182, NASA screens for space technology under 51 USC 20135, and the Department of Defense (DoD) and its components screen for military significance. Each agency reviews applications within its area of expertise.",
    citationRef: "MPEP 115; 42 USC 2182; 51 USC 20135",
    targetSectionId: "mpep-115-05",
    searchHint: "agency screening responsibilities",
  },
];

// ============================================================
// SPEEDRUN PROMPTS (8)
// ============================================================

export const ZONE4_SPEEDRUN: SpeedrunPrompt[] = [
  {
    id: "sr-z4-01",
    conceptId: "nsr-screening-authority",
    zoneSlug: "the-classified-wing",
    prompt: "The statute authorizing national security screening of patent applications",
    acceptedAnswers: [
      "35 USC 181",
      "35 U.S.C. 181",
      "181",
      "§181",
      "section 181",
    ],
    canonicalAnswer: "35 USC 181",
    explanation:
      "35 U.S.C. 181 provides the statutory authority for screening patent applications for national security implications and for imposing secrecy orders when disclosure would be detrimental to national security.",
    difficulty: 1,
  },
  {
    id: "sr-z4-02",
    conceptId: "nsr-doe-authority",
    zoneSlug: "the-classified-wing",
    prompt: "The statute under which the Department of Energy screens patent applications for atomic energy implications",
    acceptedAnswers: [
      "42 USC 2182",
      "42 U.S.C. 2182",
      "2182",
      "§2182",
      "section 2182",
    ],
    canonicalAnswer: "42 USC 2182",
    explanation:
      "42 U.S.C. 2182 authorizes the Department of Energy to screen patent applications for atomic energy implications, including inventions related to nuclear materials, reactors, and related technology.",
    difficulty: 2,
  },
  {
    id: "sr-z4-03",
    conceptId: "nsr-nasa-authority",
    zoneSlug: "the-classified-wing",
    prompt: "The statute under which NASA screens patent applications for space technology",
    acceptedAnswers: [
      "51 USC 20135",
      "51 U.S.C. 20135",
      "20135",
      "§20135",
      "section 20135",
    ],
    canonicalAnswer: "51 USC 20135",
    explanation:
      "51 U.S.C. 20135 authorizes NASA to screen patent applications for inventions relating to space technology and aeronautics that may have national significance.",
    difficulty: 2,
  },
  {
    id: "sr-z4-04",
    conceptId: "nsr-mpep-section",
    zoneSlug: "the-classified-wing",
    prompt: "The MPEP section covering the national security review of patent applications, including screening procedures and classified filing",
    acceptedAnswers: [
      "MPEP 115",
      "115",
      "§115",
      "section 115",
      "MPEP §115",
    ],
    canonicalAnswer: "MPEP 115",
    explanation:
      "MPEP 115 covers the national security review process for patent applications, including the three screening functions, classified filing procedures, L&R processing, and agency-specific screening responsibilities.",
    difficulty: 1,
  },
  {
    id: "sr-z4-05",
    conceptId: "nsr-lr-division",
    zoneSlug: "the-classified-wing",
    prompt: "The USPTO division that handles classified patent applications and coordinates national security screening",
    acceptedAnswers: [
      "Licensing and Review",
      "L&R",
      "Licensing & Review",
      "LR",
    ],
    canonicalAnswer: "Licensing and Review",
    explanation:
      "The Licensing and Review (L&R) division of the USPTO is responsible for receiving classified patent applications by hand-carry, managing security procedures, assigning L&R codes, and coordinating the screening process with defense agencies.",
    difficulty: 1,
  },
  {
    id: "sr-z4-06",
    conceptId: "nsr-classified-filing-method",
    zoneSlug: "the-classified-wing",
    prompt: "The required method for submitting a classified patent application to the USPTO (no electronic filing permitted)",
    acceptedAnswers: [
      "hand-carry",
      "hand carry",
      "hand-carried",
      "hand carried",
      "in person",
    ],
    canonicalAnswer: "hand-carry",
    explanation:
      "Classified patent applications must be hand-carried to the Licensing and Review division of the USPTO. Electronic filing is not permitted because electronic systems are not approved for transmitting classified material.",
    difficulty: 2,
  },
  {
    id: "sr-z4-07",
    conceptId: "nsr-three-screening",
    zoneSlug: "the-classified-wing",
    prompt: "Name the three purposes of national security screening: secrecy order determination, export control, and ___",
    acceptedAnswers: [
      "government property interest",
      "government interest",
      "govt property interest",
      "property interest",
    ],
    canonicalAnswer: "government property interest",
    explanation:
      "The three screening functions are: (1) secrecy order determination, (2) export control review, and (3) government property interest assessment. The third function evaluates whether the government has a property interest in the invention.",
    difficulty: 3,
  },
  {
    id: "sr-z4-08",
    conceptId: "nsr-dod-screening",
    zoneSlug: "the-classified-wing",
    prompt: "The defense agency and its signals-intelligence component that screen patent applications for military significance",
    acceptedAnswers: [
      "DoD and NSA",
      "Department of Defense and NSA",
      "DoD/NSA",
      "Department of Defense and National Security Agency",
      "DoD, NSA",
    ],
    canonicalAnswer: "DoD and NSA",
    explanation:
      "The Department of Defense (DoD) and the National Security Agency (NSA), which is a component of DoD, screen patent applications for military significance as part of the national security review process under MPEP 115.",
    difficulty: 3,
  },
];
