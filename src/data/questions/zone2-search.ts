import { OpenBookQuestion, SpeedrunPrompt } from "@/types";

// ============================================================
// Zone 2: The Reading Room — Search Phase Content
// Open-Book Questions + Speedrun Prompts
// MPEP 103 (sections mpep-103-01 through mpep-103-04)
// MPEP 104 (sections mpep-104-01 through mpep-104-04)
// ============================================================

// --- OPEN-BOOK QUESTIONS (10) ---

export const ZONE2_OPEN_BOOK: OpenBookQuestion[] = [
  // Group 1: Files open to public inspection (MPEP 103) — 3 questions
  {
    id: "ob-z2-01",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    stem: "Under 37 CFR 1.11(a), what categories of patent files are open to public inspection at the USPTO?",
    options: [
      { text: "All pending applications, whether published or unpublished" },
      { text: "Patents and published applications for patent" },
      { text: "Only patents that have been in force for more than 1 year" },
      { text: "Only design patents and published utility applications" },
    ],
    correctIndex: 1,
    explanation:
      "37 CFR 1.11(a) provides that patents and published applications for patent are open to public inspection at the USPTO.",
    citationRef: "37 CFR 1.11(a)",
    targetSectionId: "mpep-103-01",
    searchHint: "files open to public",
  },
  {
    id: "ob-z2-02",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    stem: "Under 35 USC 122(b), when is a non-provisional patent application normally published?",
    options: [
      { text: "6 months after the filing date" },
      { text: "12 months after the filing date" },
      { text: "Promptly after 18 months from the earliest filing date" },
      { text: "Only upon the applicant's request" },
    ],
    correctIndex: 2,
    explanation:
      "35 USC 122(b)(1)(A) provides that each application for patent shall be published promptly after 18 months from the earliest filing date for which benefit is sought.",
    citationRef: "35 USC 122(b)(1)(A)",
    targetSectionId: "mpep-103-01",
    searchHint: "18 months publication",
  },
  {
    id: "ob-z2-03",
    conceptId: "insp-ifw",
    zoneSlug: "the-reading-room",
    stem: "What electronic system does the USPTO use to provide public access to patent application file wrappers?",
    options: [
      { text: "The Federal Register online database" },
      { text: "The PTAB E2E system" },
      { text: "Patent Center (formerly PAIR — Patent Application Information Retrieval)" },
      { text: "The TSDR (Trademark Status & Document Retrieval) system" },
    ],
    correctIndex: 2,
    explanation:
      "Patent Center, which replaced the former PAIR system, is the USPTO's primary electronic tool for public access to patent application file wrappers and IFW documents.",
    citationRef: "MPEP 103",
    targetSectionId: "mpep-103-02",
    searchHint: "Patent Center PAIR",
  },

  // Group 2: IFW system and electronic access (MPEP 103) — 2 questions
  {
    id: "ob-z2-04",
    conceptId: "insp-ifw",
    zoneSlug: "the-reading-room",
    stem: "What types of documents are stored in the Image File Wrapper (IFW) system for a patent application?",
    options: [
      { text: "Only the originally filed specification and claims" },
      { text: "Only office actions issued by the examiner" },
      { text: "All file wrapper documents including the application, office actions, amendments, declarations, and correspondence" },
      { text: "Only documents filed electronically through EFS-Web or Patent Center" },
    ],
    correctIndex: 2,
    explanation:
      "The IFW system stores all documents in the file wrapper, including the application as filed, office actions, applicant responses, amendments, declarations, and all correspondence between the applicant and the USPTO.",
    citationRef: "MPEP 103",
    targetSectionId: "mpep-103-02",
    searchHint: "Image File Wrapper documents",
  },
  {
    id: "ob-z2-05",
    conceptId: "insp-incorporation",
    zoneSlug: "the-reading-room",
    stem: "Under 37 CFR 1.57, what is the legal effect when material is incorporated by reference into a patent application?",
    options: [
      { text: "The material is cited for reference only and does not form part of the disclosure" },
      { text: "The material is treated as part of the application as though fully set forth therein" },
      { text: "The material must be physically attached to the application within 3 months" },
      { text: "The material is only considered if the examiner specifically requests it" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 1.57, material properly incorporated by reference is treated as part of the application as though it were fully set forth in the specification.",
    citationRef: "37 CFR 1.57",
    targetSectionId: "mpep-103-03",
    searchHint: "incorporation by reference",
  },

  // Group 3: Power to inspect — who can access (MPEP 104) — 3 questions
  {
    id: "ob-z2-06",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    stem: "Under 37 CFR 1.14(c), which persons have the right to inspect an unpublished pending patent application?",
    options: [
      { text: "Any member of the public who provides identification" },
      { text: "The applicant, the attorney or agent of record, and persons with written authorization" },
      { text: "Only the named inventors on the application" },
      { text: "Only USPTO employees assigned to the relevant Technology Center" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 1.14(c), the applicant, the attorney or agent of record, and any person with written authority from the applicant or attorney of record may inspect unpublished pending applications.",
    citationRef: "37 CFR 1.14(c)",
    targetSectionId: "mpep-104-01",
    searchHint: "power to inspect unpublished",
  },
  {
    id: "ob-z2-07",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    stem: "Under 37 CFR 1.14(e), what information about a patent application is available to any member of the public upon request?",
    options: [
      { text: "The full text of the claims and specification" },
      { text: "The examiner's search strategy and prior art citations" },
      { text: "Whether the application is pending, abandoned, or patented" },
      { text: "The names and addresses of all named inventors" },
    ],
    correctIndex: 2,
    explanation:
      "Under 37 CFR 1.14(e), the public may obtain basic status information: whether the application is pending, abandoned, or has resulted in a patent.",
    citationRef: "37 CFR 1.14(e)",
    targetSectionId: "mpep-104-02",
    searchHint: "status information public",
  },
  {
    id: "ob-z2-08",
    conceptId: "insp-petition-access",
    zoneSlug: "the-reading-room",
    stem: "Under 37 CFR 1.14(i), what must a petitioner demonstrate to obtain access to an unpublished abandoned application?",
    options: [
      { text: "That they are a registered patent attorney with an active registration number" },
      { text: "That they have a pending lawsuit involving the same technology" },
      { text: "That the application is relied upon as a reference or has been identified in a published document" },
      { text: "That at least 5 years have elapsed since the application was abandoned" },
    ],
    correctIndex: 2,
    explanation:
      "Under 37 CFR 1.14(i), the petitioner must show that the unpublished abandoned application is relied upon as a reference or has been identified in a published document.",
    citationRef: "37 CFR 1.14(i)",
    targetSectionId: "mpep-104-03",
    searchHint: "petition access abandoned",
  },

  // Group 4: Provisional access and FOIA (MPEP 104) — 2 questions
  {
    id: "ob-z2-09",
    conceptId: "insp-provisional",
    zoneSlug: "the-reading-room",
    stem: "Under what circumstances can a provisional patent application become publicly accessible?",
    options: [
      { text: "When the provisional expires after 12 months" },
      { text: "When it is relied upon for priority in a subsequently published non-provisional application or issued patent" },
      { text: "When the applicant files a second provisional application" },
      { text: "Provisional applications can never become publicly accessible" },
    ],
    correctIndex: 1,
    explanation:
      "A provisional application may become accessible when it is relied upon as a priority basis in a subsequently published non-provisional application or issued patent, in which case it may be accessed under 37 CFR 1.14(a).",
    citationRef: "37 CFR 1.14(a)",
    targetSectionId: "mpep-104-03",
    searchHint: "provisional application access",
  },
  {
    id: "ob-z2-10",
    conceptId: "insp-foia",
    zoneSlug: "the-reading-room",
    stem: "Why are unpublished patent application files generally exempt from FOIA (5 USC 552) disclosure?",
    options: [
      { text: "Because FOIA does not apply to intellectual property agencies" },
      { text: "Because 35 USC 122 provides that applications shall be kept in confidence by the Office" },
      { text: "Because patent applications are considered classified national security documents" },
      { text: "Because FOIA only applies to records created after 2000" },
    ],
    correctIndex: 1,
    explanation:
      "35 USC 122 provides that patent applications shall be kept in confidence by the Office, which creates a statutory exemption from the general FOIA disclosure requirements of 5 USC 552.",
    citationRef: "35 USC 122 / 5 USC 552",
    targetSectionId: "mpep-104-04",
    searchHint: "FOIA exemption patent",
  },
];

// ============================================================
// SPEEDRUN PROMPTS (8)
// ============================================================

export const ZONE2_SPEEDRUN: SpeedrunPrompt[] = [
  {
    id: "sr-z2-01",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    prompt: "The regulation providing that patents and published applications are open to public inspection",
    acceptedAnswers: [
      "37 CFR 1.11",
      "37 C.F.R. 1.11",
      "1.11",
      "CFR 1.11",
      "37 CFR 1.11(a)",
    ],
    canonicalAnswer: "37 CFR 1.11",
    explanation:
      "37 CFR 1.11 provides that patents and published applications are open to public inspection at the USPTO.",
    difficulty: 1,
  },
  {
    id: "sr-z2-02",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    prompt: "The statute requiring patent applications to be kept in confidence",
    acceptedAnswers: [
      "35 USC 122",
      "35 U.S.C. 122",
      "122",
      "section 122",
      "35 USC 122(a)",
    ],
    canonicalAnswer: "35 USC 122",
    explanation:
      "35 USC 122(a) provides that applications for patents shall be kept in confidence by the Office.",
    difficulty: 1,
  },
  {
    id: "sr-z2-03",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    prompt: "The regulation governing who may inspect unpublished pending applications (power to inspect)",
    acceptedAnswers: [
      "37 CFR 1.14",
      "37 C.F.R. 1.14",
      "1.14",
      "CFR 1.14",
      "37 CFR 1.14(c)",
    ],
    canonicalAnswer: "37 CFR 1.14",
    explanation:
      "37 CFR 1.14 comprehensively governs access to patent applications, with subsection (c) covering the power to inspect unpublished pending applications.",
    difficulty: 1,
  },
  {
    id: "sr-z2-04",
    conceptId: "insp-petition-access",
    zoneSlug: "the-reading-room",
    prompt: "The specific CFR subsection for petitioning for access to unpublished abandoned applications",
    acceptedAnswers: [
      "37 CFR 1.14(i)",
      "37 C.F.R. 1.14(i)",
      "1.14(i)",
      "CFR 1.14(i)",
    ],
    canonicalAnswer: "37 CFR 1.14(i)",
    explanation:
      "37 CFR 1.14(i) provides the petition process for obtaining access to unpublished abandoned applications.",
    difficulty: 2,
  },
  {
    id: "sr-z2-05",
    conceptId: "insp-incorporation",
    zoneSlug: "the-reading-room",
    prompt: "The regulation governing incorporation by reference in patent applications",
    acceptedAnswers: [
      "37 CFR 1.57",
      "37 C.F.R. 1.57",
      "1.57",
      "CFR 1.57",
    ],
    canonicalAnswer: "37 CFR 1.57",
    explanation:
      "37 CFR 1.57 governs incorporation by reference, providing that incorporated material is treated as part of the application.",
    difficulty: 2,
  },
  {
    id: "sr-z2-06",
    conceptId: "insp-foia",
    zoneSlug: "the-reading-room",
    prompt: "The federal statute known as the Freedom of Information Act",
    acceptedAnswers: [
      "5 USC 552",
      "5 U.S.C. 552",
      "552",
      "FOIA",
      "5 USC 552",
    ],
    canonicalAnswer: "5 USC 552",
    explanation:
      "5 USC 552 is the Freedom of Information Act, which requires federal agencies to make records available to the public, subject to specific exemptions.",
    difficulty: 2,
  },
  {
    id: "sr-z2-07",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    prompt: "The specific CFR subsection that makes application status information (pending/abandoned/patented) available to the public",
    acceptedAnswers: [
      "37 CFR 1.14(e)",
      "37 C.F.R. 1.14(e)",
      "1.14(e)",
      "CFR 1.14(e)",
    ],
    canonicalAnswer: "37 CFR 1.14(e)",
    explanation:
      "37 CFR 1.14(e) provides that any person may obtain status information about whether an application is pending, abandoned, or patented.",
    difficulty: 3,
  },
  {
    id: "sr-z2-08",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    prompt: "The MPEP section covering patent file inspection and the IFW system",
    acceptedAnswers: [
      "MPEP 103",
      "103",
      "section 103",
      "MPEP Section 103",
    ],
    canonicalAnswer: "MPEP 103",
    explanation:
      "MPEP 103 covers patent file inspection, the Image File Wrapper system, and public access to patent records.",
    difficulty: 3,
  },
];
