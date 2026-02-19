import {
  ScenarioQuestion,
  QuickFireQuestion,
  ProceduralCascadeData,
} from "@/types";

// ============================================================
// Zone 2: The Reading Room — Apply Phase Content
// Scenarios, Quick-Fire, Procedural Cascades
// ============================================================

// --- SCENARIO QUESTIONS (8) ---
// Realistic exam-style fact patterns at escalating difficulty

export const ZONE2_SCENARIOS: ScenarioQuestion[] = [
  // Difficulty 1 — Basic public access
  {
    id: "z2-scenario-1",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    difficulty: 1,
    stem: "A competitor wants to review the full prosecution history of a recently issued patent owned by XYZ Corp. The competitor has no relationship with XYZ Corp. Can the competitor access the file?",
    options: [
      { text: "No, only the patent owner and their attorney can access the file" },
      { text: "Yes, because issued patents are open to public inspection under 37 CFR 1.11(a)" },
      { text: "Only if the competitor files a petition under 37 CFR 1.14(i)" },
      { text: "Only if the competitor obtains a court order" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 1.11(a), the file of a patent application for which a patent has been issued is available to the public. No petition, authorization, or court order is required.",
    citationRef: "37 CFR 1.11(a)",
  },
  {
    id: "z2-scenario-2",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    difficulty: 1,
    stem: "Attorney Martin is the attorney of record for a pending patent application that has not yet been published. She wants to review the file on Patent Center. Can she access the complete file?",
    options: [
      { text: "No, only the applicant can access unpublished files" },
      { text: "Yes, as the attorney of record she has full access under 37 CFR 1.14(c)" },
      { text: "Yes, but only through an in-person visit to the USPTO" },
      { text: "No, the file is not available until the first office action is mailed" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 1.14(c), the attorney or agent of record has the right to inspect unpublished pending applications. This access is available through Patent Center using authenticated login.",
    citationRef: "37 CFR 1.14(c)",
  },

  // Difficulty 2 — Status information, provisional access
  {
    id: "z2-scenario-3",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    difficulty: 2,
    stem: "A third party believes that a competitor has filed a patent application in a particular technology area. The third party calls the USPTO and asks whether application serial number 16/123,456 is pending. Should the USPTO provide this information?",
    options: [
      { text: "No, the USPTO cannot disclose any information about pending applications" },
      { text: "Yes, the USPTO may provide status information (pending, abandoned, or patented) under 37 CFR 1.14(e)" },
      { text: "Only if the third party can prove they have a commercial interest" },
      { text: "Only if the application has been published" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 1.14(e), the USPTO will provide basic status information — whether the application is pending, abandoned, or patented — to any person upon request, regardless of the application's publication status.",
    citationRef: "37 CFR 1.14(e)",
  },
  {
    id: "z2-scenario-4",
    conceptId: "insp-provisional",
    zoneSlug: "the-reading-room",
    difficulty: 2,
    stem: "Inventor Lee filed a provisional patent application 14 months ago. The provisional has expired without a non-provisional being filed. A researcher wants to access the provisional application to understand the prior art landscape. Can the researcher obtain the provisional?",
    options: [
      { text: "Yes, because the provisional has expired and is now public" },
      { text: "Yes, because all provisionals become public after 12 months" },
      { text: "No, the provisional was never published and remains confidential even after expiration" },
      { text: "Only if the researcher files a FOIA request" },
    ],
    correctIndex: 2,
    explanation:
      "Provisional applications are not published by the USPTO. Even after the 12-month pendency period expires, an unfiled-upon provisional remains confidential. It does not automatically become public upon expiration.",
    citationRef: "35 USC 122 / MPEP 103",
  },

  // Difficulty 3 — Petition for access, incorporation by reference
  {
    id: "z2-scenario-5",
    conceptId: "insp-petition-access",
    zoneSlug: "the-reading-room",
    difficulty: 3,
    stem: "During prosecution of Application A, the examiner cites unpublished Application B (which was abandoned before publication) as prior art. The applicant of Application A wants to review Application B to respond to the rejection. What is the proper procedure?",
    options: [
      { text: "The applicant can access Application B automatically because it was cited by the examiner" },
      { text: "The applicant must file a petition under 37 CFR 1.14(i) showing that Application B is relied upon as a reference" },
      { text: "The applicant must file a FOIA request for Application B" },
      { text: "The examiner must provide a copy of Application B with the office action" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 1.14(i), access to an unpublished abandoned application requires a petition demonstrating that the application is relied upon as a reference. The fact that it was cited by the examiner supports the petition, but access is not automatic.",
    citationRef: "37 CFR 1.14(i)",
  },
  {
    id: "z2-scenario-6",
    conceptId: "insp-incorporation",
    zoneSlug: "the-reading-room",
    difficulty: 3,
    stem: "Patent X incorporates by reference a technical report published by a university. A competitor reviewing Patent X cannot locate the university report. The competitor contacts the USPTO. What should the competitor expect?",
    options: [
      { text: "The USPTO will provide the university report because it is part of the patent disclosure" },
      { text: "The USPTO cannot help — incorporated-by-reference materials are not maintained in USPTO files" },
      { text: "The incorporated-by-reference material may be accessible through the patent file if it was submitted during prosecution" },
      { text: "The competitor must obtain a court order to compel the patent owner to produce the report" },
    ],
    correctIndex: 2,
    explanation:
      "If the incorporated-by-reference material was submitted to the USPTO during prosecution (e.g., as part of an Information Disclosure Statement or in response to a requirement), it may be accessible in the patent's file wrapper. However, the USPTO does not independently maintain all referenced publications.",
    citationRef: "37 CFR 1.57 / MPEP 103",
  },

  // Difficulty 4 — Complex multi-concept scenarios
  {
    id: "z2-scenario-7",
    conceptId: "insp-foia",
    zoneSlug: "the-reading-room",
    difficulty: 4,
    stem: "A journalist files a FOIA request with the USPTO seeking: (1) all documents in unpublished Application X, (2) the USPTO's internal training manual on examination procedures, and (3) correspondence between the USPTO Director and Congress about patent policy. Which items can the USPTO provide under FOIA?",
    options: [
      { text: "All three items — FOIA applies to all government agency records" },
      { text: "Items (2) and (3) only — unpublished Application X is exempt under 35 USC 122, but administrative and policy records are subject to FOIA" },
      { text: "Item (1) only — patent application files are the primary records of the USPTO" },
      { text: "None — all USPTO records are exempt from FOIA as patent-related materials" },
    ],
    correctIndex: 1,
    explanation:
      "Unpublished patent application files are exempt from FOIA under 35 USC 122. However, non-application records such as internal training manuals and policy correspondence are subject to FOIA under 5 USC 552. The journalist can obtain items (2) and (3) but not the unpublished application documents.",
    citationRef: "35 USC 122 / 5 USC 552",
  },
  {
    id: "z2-scenario-8",
    conceptId: "insp-ifw",
    zoneSlug: "the-reading-room",
    difficulty: 4,
    stem: "Attorney Davis represents Client A in a patent infringement lawsuit. Client A's patent issued from an application that claimed priority to an unpublished provisional application. Opposing counsel for the accused infringer wants to access the provisional application through Patent Center. What is the likely outcome?",
    options: [
      { text: "The provisional is not accessible because provisionals are never available through Patent Center" },
      { text: "The provisional is accessible because Client A's patent has issued and the provisional was relied upon for priority, making it available under 37 CFR 1.14(a)" },
      { text: "The provisional is only accessible through a court subpoena during litigation" },
      { text: "The provisional is accessible only if Client A consents in writing" },
    ],
    correctIndex: 1,
    explanation:
      "When a provisional application is relied upon as a priority basis for a subsequently issued patent, the provisional may become publicly accessible under 37 CFR 1.14(a). Because the issued patent claimed priority to the provisional, the provisional's contents are available through Patent Center.",
    citationRef: "37 CFR 1.14(a) / MPEP 103",
  },
];

// --- QUICK-FIRE QUESTIONS (12) ---
// True/false rapid recall covering all concept groups

export const ZONE2_QUICK_FIRE: QuickFireQuestion[] = [
  {
    id: "z2-qf-1",
    zoneSlug: "the-reading-room",
    statement:
      "Published patent applications are open to public inspection under 37 CFR 1.11(a).",
    isTrue: true,
    explanation:
      "Under 37 CFR 1.11(a), published patent applications and granted patents are open to public inspection.",
    citationRef: "37 CFR 1.11(a)",
  },
  {
    id: "z2-qf-2",
    zoneSlug: "the-reading-room",
    statement:
      "Unpublished pending patent applications can be freely accessed by any member of the public.",
    isTrue: false,
    explanation:
      "Under 35 USC 122(a), unpublished pending applications are maintained in confidence. Only the applicant, the attorney of record, and authorized persons may access them.",
    citationRef: "35 USC 122(a)",
  },
  {
    id: "z2-qf-3",
    zoneSlug: "the-reading-room",
    statement:
      "The public can obtain status information about whether an application is pending, abandoned, or patented under 37 CFR 1.14(e).",
    isTrue: true,
    explanation:
      "Under 37 CFR 1.14(e), basic status information is available to any person upon request.",
    citationRef: "37 CFR 1.14(e)",
  },
  {
    id: "z2-qf-4",
    zoneSlug: "the-reading-room",
    statement:
      "Any registered patent attorney can inspect an unpublished pending application without authorization from the applicant.",
    isTrue: false,
    explanation:
      "Only the attorney of record can access unpublished pending applications under 37 CFR 1.14(c). Other attorneys need written authorization from the applicant or attorney of record.",
    citationRef: "37 CFR 1.14(c)",
  },
  {
    id: "z2-qf-5",
    zoneSlug: "the-reading-room",
    statement:
      "Provisional patent applications are published at 18 months, just like non-provisional applications.",
    isTrue: false,
    explanation:
      "Provisional applications are not published by the USPTO. Only non-provisional applications are subject to the 18-month publication requirement under 35 USC 122(b).",
    citationRef: "35 USC 122(b)",
  },
  {
    id: "z2-qf-6",
    zoneSlug: "the-reading-room",
    statement:
      "Material incorporated by reference under 37 CFR 1.57 is treated as part of the application as though fully set forth.",
    isTrue: true,
    explanation:
      "Under 37 CFR 1.57, incorporated material is legally treated as part of the application.",
    citationRef: "37 CFR 1.57",
  },
  {
    id: "z2-qf-7",
    zoneSlug: "the-reading-room",
    statement:
      "FOIA requests can be used to obtain copies of unpublished patent application files from the USPTO.",
    isTrue: false,
    explanation:
      "Unpublished patent application files are exempt from FOIA under 35 USC 122, which mandates that applications be kept in confidence.",
    citationRef: "35 USC 122 / 5 USC 552",
  },
  {
    id: "z2-qf-8",
    zoneSlug: "the-reading-room",
    statement:
      "The Image File Wrapper (IFW) system provides electronic access to all documents in the patent application file.",
    isTrue: true,
    explanation:
      "The IFW system stores all file wrapper documents electronically, including office actions, amendments, and correspondence.",
    citationRef: "MPEP 103",
  },
  {
    id: "z2-qf-9",
    zoneSlug: "the-reading-room",
    statement:
      "A petition under 37 CFR 1.14(i) can be used to access any unpublished application, whether pending or abandoned.",
    isTrue: false,
    explanation:
      "37 CFR 1.14(i) applies specifically to unpublished abandoned applications. Access to unpublished pending applications requires authorization under 37 CFR 1.14(c).",
    citationRef: "37 CFR 1.14(i)",
  },
  {
    id: "z2-qf-10",
    zoneSlug: "the-reading-room",
    statement:
      "Patent Center (formerly PAIR) is the primary electronic system for public access to patent application file wrappers.",
    isTrue: true,
    explanation:
      "Patent Center replaced PAIR as the primary system for accessing published patent application files electronically.",
    citationRef: "MPEP 103",
  },
  {
    id: "z2-qf-11",
    zoneSlug: "the-reading-room",
    statement:
      "A provisional application becomes publicly accessible when it expires after 12 months without a non-provisional being filed.",
    isTrue: false,
    explanation:
      "Provisional applications are not published, and expiration without a non-provisional filing does not make them public. They remain confidential.",
    citationRef: "35 USC 122",
  },
  {
    id: "z2-qf-12",
    zoneSlug: "the-reading-room",
    statement:
      "Non-application records of the USPTO, such as administrative and policy documents, may be obtained through FOIA requests.",
    isTrue: true,
    explanation:
      "While patent application files are exempt from FOIA under 35 USC 122, non-application records such as administrative and policy documents are subject to FOIA.",
    citationRef: "5 USC 552",
  },
];

// --- PROCEDURAL CASCADES (3) ---
// Multi-step fact patterns with 3 steps each

export const ZONE2_CASCADES: ProceduralCascadeData[] = [
  {
    id: "z2-cascade-1",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    title: "Application Publication and Access",
    setup:
      "TechCo files a non-provisional patent application on January 15. They did not request non-publication. Walk through the key access milestones as the application progresses.",
    steps: [
      {
        stem: "On March 1, before publication, who can access TechCo's application file?",
        options: [
          "Anyone — all applications are immediately public",
          "Only TechCo (the applicant), their attorney of record, and authorized persons under 37 CFR 1.14(c)",
          "Only the assigned patent examiner",
          "Only registered patent attorneys",
        ],
        correctIndex: 1,
        explanation:
          "Before publication, the application is maintained in confidence under 35 USC 122(a). Only the applicant, the attorney of record, and authorized persons may access the file under 37 CFR 1.14(c).",
      },
      {
        stem: "On July 20 (approximately 18 months from the earliest priority date), the application is published. What changes about file access?",
        options: [
          "Nothing changes — the same access restrictions apply",
          "The published application and entire file wrapper become open to public inspection under 37 CFR 1.11(a)",
          "Only the abstract and claims become public, not the full file",
          "The file becomes public but only for registered patent attorneys",
        ],
        correctIndex: 1,
        explanation:
          "Upon publication under 35 USC 122(b), the application file becomes open to public inspection under 37 CFR 1.11(a). The full file wrapper, including office actions and amendments, becomes publicly accessible.",
      },
      {
        stem: "A competitor now wants to review the complete prosecution history. How should they access it?",
        options: [
          "File a petition under 37 CFR 1.14(i)",
          "Submit a FOIA request",
          "Access the file through Patent Center — it is freely available as a published application",
          "Contact TechCo's attorney directly for a copy",
        ],
        correctIndex: 2,
        explanation:
          "Since the application has been published, the file is open to public inspection under 37 CFR 1.11(a) and can be accessed through Patent Center without any petition, request, or authorization.",
      },
    ],
  },
  {
    id: "z2-cascade-2",
    conceptId: "insp-petition-access",
    zoneSlug: "the-reading-room",
    title: "Accessing an Unpublished Abandoned Application",
    setup:
      "During prosecution of Patent Application A, the examiner cites unpublished Application B in a rejection. Application B was abandoned before publication. The applicant of Application A needs to review Application B to respond to the rejection. Walk through the access process.",
    steps: [
      {
        stem: "Can the applicant of Application A directly view Application B on Patent Center?",
        options: [
          "Yes — any application cited in an office action is automatically accessible",
          "No — Application B was never published and is not available through Patent Center",
          "Yes — but only the claims and abstract of Application B are available",
          "No — but the examiner will email a copy automatically",
        ],
        correctIndex: 1,
        explanation:
          "Application B was abandoned before publication and therefore is not available on Patent Center. Unpublished applications remain confidential under 35 USC 122(a) regardless of whether they are cited in another proceeding.",
      },
      {
        stem: "What formal step must the applicant of Application A take to access Application B?",
        options: [
          "File a FOIA request under 5 USC 552",
          "File a petition under 37 CFR 1.14(i), demonstrating that Application B is relied upon as a reference",
          "Contact the applicant of Application B and request written consent",
          "File a petition under 37 CFR 1.11 requesting publication of Application B",
        ],
        correctIndex: 1,
        explanation:
          "Under 37 CFR 1.14(i), the applicant must petition for access to the unpublished abandoned application, showing that it is relied upon as a reference (here, cited by the examiner in a rejection).",
      },
      {
        stem: "If the petition under 37 CFR 1.14(i) is granted, what portions of Application B will be available?",
        options: [
          "The entire file wrapper of Application B",
          "Only the claims and specification cited by the examiner",
          "The specified portions of the file as determined by the Office in granting the petition",
          "Only the filing date and inventor names",
        ],
        correctIndex: 2,
        explanation:
          "When granting a petition under 37 CFR 1.14(i), the Office determines which portions of the file will be made available. The grant may provide access to specified portions rather than the entire file.",
      },
    ],
  },
  {
    id: "z2-cascade-3",
    conceptId: "insp-provisional",
    zoneSlug: "the-reading-room",
    title: "Provisional Application Access Lifecycle",
    setup:
      "Inventor Kim files a provisional patent application on March 1. Nine months later, she files a non-provisional application claiming priority to the provisional. Analyze the access status of the provisional at each stage.",
    steps: [
      {
        stem: "On June 1, three months after filing the provisional, can a third party access the provisional application?",
        options: [
          "Yes — provisionals are public documents",
          "No — the provisional is not published and is maintained in confidence under 35 USC 122",
          "Yes — but only through a FOIA request",
          "No — but status information (pending/abandoned) is available under 37 CFR 1.14(e)",
        ],
        correctIndex: 1,
        explanation:
          "Provisional applications are not published by the USPTO and are maintained in confidence under 35 USC 122. No third-party access is available during the provisional's pendency.",
      },
      {
        stem: "After Kim files the non-provisional claiming priority to the provisional, and the non-provisional is published at 18 months, what happens to access to the provisional?",
        options: [
          "The provisional remains completely confidential regardless",
          "The provisional becomes accessible because it is relied upon for priority in a published application under 37 CFR 1.14(a)",
          "The provisional is automatically published separately",
          "The provisional becomes accessible only after the non-provisional patent issues",
        ],
        correctIndex: 1,
        explanation:
          "When a provisional application is relied upon as a priority basis in a subsequently published non-provisional application, the provisional may become accessible to the public under 37 CFR 1.14(a).",
      },
      {
        stem: "If Kim had NOT filed a non-provisional and the provisional expired after 12 months, would the provisional ever become public?",
        options: [
          "Yes — it becomes public 6 months after expiration",
          "Yes — it is automatically published at the 18-month mark from filing",
          "No — the provisional remains confidential and is never published or made available for public inspection",
          "Yes — it becomes available through FOIA once expired",
        ],
        correctIndex: 2,
        explanation:
          "If no non-provisional application is filed claiming priority, the expired provisional remains confidential. It is never published, and expiration does not trigger public access.",
      },
    ],
  },
];
