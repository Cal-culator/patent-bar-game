import { RuleLayer, AnalogyMapping, VisualTimelineData } from "@study-game/engine";

// ============================================================
// Zone 2: The Reading Room — Public Inspection & Power to Inspect
// MPEP Sections 103, 104 | 37 CFR 1.11, 1.14 | 35 USC 122
// ============================================================

// --- ABSORB PHASE: Rule Layers ---

export const ZONE2_RULE_LAYERS: RuleLayer[] = [
  // --- Concept Group 1: Files Open to Public (37 CFR 1.11) ---
  {
    id: "z2-layer-1",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "Published patent applications and granted patents are open to public inspection under 37 CFR 1.11(a).",
    highlightedAddition:
      "Published patent applications and granted patents are open to public inspection",
    question: {
      stem: "Which patent files are open to public inspection under 37 CFR 1.11(a)?",
      options: [
        "Only granted patents",
        "Published patent applications and granted patents",
        "All pending applications regardless of publication status",
        "Only applications that have been allowed",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 1.11(a), both published patent applications and granted patents are open to public inspection.",
    },
  },
  {
    id: "z2-layer-2",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "Published sequence listings, referenced publications, and related file contents become publicly accessible upon publication or patent grant.",
    highlightedAddition:
      "sequence listings, referenced publications, and related file contents",
    question: {
      stem: "Under 37 CFR 1.11(b), what additional materials become publicly accessible?",
      options: [
        "Only the claims of the application",
        "Published sequence listings and referenced publications",
        "Examiner interview summaries only",
        "Prior art cited by foreign patent offices",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 1.11(b), published sequence listings and other referenced documents become accessible to the public.",
    },
  },
  {
    id: "z2-layer-3",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "Unpublished pending applications are maintained in confidence under 35 USC 122(a) and are NOT open to public inspection unless an exception applies.",
    highlightedAddition:
      "Unpublished pending applications are maintained in confidence",
    question: {
      stem: "What is the default status of unpublished pending patent applications?",
      options: [
        "They are open to public inspection",
        "They are maintained in confidence under 35 USC 122(a)",
        "They are available upon request to the examiner",
        "They become public after 12 months from filing",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 122(a), unpublished pending applications are maintained in confidence and are not available for public inspection.",
    },
  },

  // --- Concept Group 2: Petition for Access (37 CFR 1.14(i)) ---
  {
    id: "z2-layer-4",
    conceptId: "insp-petition-access",
    zoneSlug: "the-reading-room",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "Access to unpublished abandoned applications may be obtained by petition under 37 CFR 1.14(i).",
    highlightedAddition:
      "unpublished abandoned applications may be obtained by petition",
    question: {
      stem: "How can a member of the public access an unpublished abandoned application?",
      options: [
        "By filing a FOIA request",
        "By petitioning under 37 CFR 1.14(i)",
        "By requesting it from the examiner's art unit",
        "They cannot — abandoned applications are permanently sealed",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 1.14(i), a petition may be filed to obtain access to an unpublished abandoned application.",
    },
  },
  {
    id: "z2-layer-5",
    conceptId: "insp-petition-access",
    zoneSlug: "the-reading-room",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "The petition must identify the application and include a showing that the application is relied upon as a reference or has been identified in a published document.",
    highlightedAddition:
      "showing that the application is relied upon as a reference or identified in a published document",
    question: {
      stem: "What must a petition under 37 CFR 1.14(i) demonstrate?",
      options: [
        "That the petitioner is an attorney of record",
        "That the application is relied upon as a reference or identified in a published document",
        "That the petitioner has a commercial interest in the technology",
        "That the applicant has consented to the disclosure",
      ],
      correctIndex: 1,
      explanation:
        "A 37 CFR 1.14(i) petition must show the application is relied upon as a reference or has been identified in a published document.",
    },
  },
  {
    id: "z2-layer-6",
    conceptId: "insp-petition-access",
    zoneSlug: "the-reading-room",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "Access may also be granted when the petitioner can demonstrate a need for the file contents to establish prior art or for other valid patent-related purposes, as determined by the Director.",
    highlightedAddition:
      "need for file contents to establish prior art or other valid purposes",
    question: {
      stem: "Besides reliance as a reference, what other basis supports a petition for access?",
      options: [
        "Personal curiosity about the technology",
        "Demonstrating a need to establish prior art or other valid patent-related purposes",
        "Competing business interest in the same technology area",
        "A court order from any state court",
      ],
      correctIndex: 1,
      explanation:
        "The Director may grant access when the petitioner demonstrates a need for file contents to establish prior art or for other valid patent-related purposes.",
    },
  },

  // --- Concept Group 3: Incorporation by Reference (37 CFR 1.57) ---
  {
    id: "z2-layer-7",
    conceptId: "insp-incorporation",
    zoneSlug: "the-reading-room",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "Material incorporated by reference under 37 CFR 1.57 becomes part of the application as though fully set forth therein.",
    highlightedAddition:
      "incorporated by reference becomes part of the application",
    question: {
      stem: "What is the legal effect of incorporation by reference under 37 CFR 1.57?",
      options: [
        "The referenced material is merely cited for informational purposes",
        "The referenced material becomes part of the application as though fully set forth",
        "The referenced material must be separately filed within 30 days",
        "The referenced material is only relevant during appeal",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 1.57, material incorporated by reference is treated as part of the application as though it were fully set forth in the specification.",
    },
  },
  {
    id: "z2-layer-8",
    conceptId: "insp-incorporation",
    zoneSlug: "the-reading-room",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "When a patent issues, referenced documents become accessible to the public to the extent needed to understand the patent's disclosure.",
    highlightedAddition:
      "referenced documents become accessible to the public",
    question: {
      stem: "When do incorporated-by-reference documents become publicly accessible?",
      options: [
        "When the application is first filed",
        "When the application is published at 18 months",
        "When the patent issues",
        "They never become publicly accessible",
      ],
      correctIndex: 2,
      explanation:
        "Referenced documents become accessible to the public upon patent grant to ensure the public can fully understand the patent's disclosure.",
    },
  },
  {
    id: "z2-layer-9",
    conceptId: "insp-incorporation",
    zoneSlug: "the-reading-room",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "Essential material should not be incorporated solely by reference in the specification; the applicant should include sufficient detail so the application is self-contained.",
    highlightedAddition:
      "Essential material should not be incorporated solely by reference",
    question: {
      stem: "What is the USPTO's guidance regarding essential material and incorporation by reference?",
      options: [
        "Essential material must always be incorporated by reference",
        "Essential material should not be incorporated solely by reference; sufficient detail should be included",
        "Incorporation by reference is prohibited for essential material",
        "Essential material may only reference issued patents",
      ],
      correctIndex: 1,
      explanation:
        "The USPTO advises that essential material should not rely solely on incorporation by reference. The specification should include sufficient detail to be self-contained.",
    },
  },

  // --- Concept Group 4: Image File Wrapper (IFW) System ---
  {
    id: "z2-layer-10",
    conceptId: "insp-ifw",
    zoneSlug: "the-reading-room",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "The Image File Wrapper (IFW) system is the USPTO's electronic system for storing and accessing patent application files.",
    highlightedAddition:
      "electronic system for storing and accessing patent application files",
    question: {
      stem: "What is the Image File Wrapper (IFW) system?",
      options: [
        "A physical filing cabinet system at the USPTO",
        "The USPTO's electronic system for storing and accessing patent application files",
        "A third-party database of patent abstracts",
        "A system used only by patent examiners for internal review",
      ],
      correctIndex: 1,
      explanation:
        "The IFW system is the USPTO's electronic system that stores patent application files digitally, replacing the older paper-based file wrapper system.",
    },
  },
  {
    id: "z2-layer-11",
    conceptId: "insp-ifw",
    zoneSlug: "the-reading-room",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "Public access to IFW records for published applications and patents is available through Patent Center (formerly PAIR — Patent Application Information Retrieval).",
    highlightedAddition:
      "Patent Center (formerly PAIR)",
    question: {
      stem: "How can the public access IFW records for published patent applications?",
      options: [
        "By visiting the USPTO headquarters in person only",
        "Through Patent Center (formerly PAIR)",
        "By submitting a written request by mail",
        "Only through a registered patent attorney",
      ],
      correctIndex: 1,
      explanation:
        "Public access to IFW records is available electronically through Patent Center, which replaced the former PAIR system.",
    },
  },
  {
    id: "z2-layer-12",
    conceptId: "insp-ifw",
    zoneSlug: "the-reading-room",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "The IFW includes all documents in the file wrapper: the application, office actions, amendments, declarations, and correspondence. Non-public portions remain restricted under 35 USC 122.",
    highlightedAddition:
      "all documents in the file wrapper ... Non-public portions remain restricted",
    question: {
      stem: "Which documents are included in the IFW for a published application?",
      options: [
        "Only the published specification and claims",
        "All file wrapper documents including office actions, amendments, and correspondence",
        "Only the examiner's search results",
        "Only documents filed by the applicant, not by the examiner",
      ],
      correctIndex: 1,
      explanation:
        "The IFW contains all documents in the file wrapper, including the application, office actions, amendments, declarations, and correspondence. For published applications, these are publicly accessible.",
    },
  },

  // --- Concept Group 5: Power to Inspect (37 CFR 1.14) ---
  {
    id: "z2-layer-13",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "Under 37 CFR 1.14(c), the applicant, the attorney or agent of record, and authorized persons may inspect their own unpublished pending applications at any time.",
    highlightedAddition:
      "applicant, attorney or agent of record, and authorized persons may inspect",
    question: {
      stem: "Who may inspect an unpublished pending application under 37 CFR 1.14(c)?",
      options: [
        "Any member of the public",
        "The applicant, attorney or agent of record, and authorized persons",
        "Only the named inventor",
        "Only the assigned examiner",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 1.14(c), the applicant, their attorney or agent of record, and other authorized persons may inspect unpublished pending applications.",
    },
  },
  {
    id: "z2-layer-14",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "A registered attorney who is not the attorney of record may obtain access only with written authorization from the applicant or the attorney of record.",
    highlightedAddition:
      "written authorization from the applicant or the attorney of record",
    question: {
      stem: "How can a registered attorney who is NOT the attorney of record gain access to an unpublished application?",
      options: [
        "By showing their USPTO registration number",
        "By obtaining written authorization from the applicant or attorney of record",
        "By filing a petition with the Technology Center Director",
        "They cannot — only the attorney of record has access",
      ],
      correctIndex: 1,
      explanation:
        "A registered attorney not of record must obtain written authorization from the applicant or the attorney of record to access an unpublished pending application.",
    },
  },
  {
    id: "z2-layer-15",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "Under 37 CFR 1.14(e), certain status information about any pending application — whether it is pending, abandoned, or patented — is available to the public upon request.",
    highlightedAddition:
      "status information — pending, abandoned, or patented — is available to the public",
    question: {
      stem: "What status information can the public obtain about any patent application under 37 CFR 1.14(e)?",
      options: [
        "Full file wrapper contents",
        "Whether the application is pending, abandoned, or patented",
        "The names of the inventors only",
        "The examiner's rejection rationale",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 1.14(e), the public may request status information indicating whether an application is pending, abandoned, or has resulted in a patent.",
    },
  },

  // --- Concept Group 6: Provisional Applications ---
  {
    id: "z2-layer-16",
    conceptId: "insp-provisional",
    zoneSlug: "the-reading-room",
    layerNumber: 1,
    totalLayers: 2,
    ruleText:
      "Provisional applications are not published by the USPTO and are not available for public inspection under normal circumstances.",
    highlightedAddition:
      "not published and not available for public inspection",
    question: {
      stem: "Are provisional patent applications available for public inspection?",
      options: [
        "Yes, they are published at 18 months like non-provisional applications",
        "No, provisional applications are not published and not available for public inspection",
        "Yes, but only after the provisional's 12-month pendency expires",
        "Only if the applicant requests publication",
      ],
      correctIndex: 1,
      explanation:
        "Provisional applications are not published by the USPTO. They remain confidential and are not available for public inspection under normal circumstances.",
    },
  },
  {
    id: "z2-layer-17",
    conceptId: "insp-provisional",
    zoneSlug: "the-reading-room",
    layerNumber: 2,
    totalLayers: 2,
    ruleText:
      "A provisional application may become publicly available only if it is relied upon as a basis for priority in a subsequently published non-provisional application or issued patent, in which case it may be accessed under 37 CFR 1.14(a).",
    highlightedAddition:
      "relied upon as a basis for priority in a published non-provisional or issued patent",
    question: {
      stem: "When might a provisional application become publicly accessible?",
      options: [
        "After 12 months automatically",
        "When relied upon for priority in a subsequently published non-provisional or issued patent",
        "When the examiner cites it as prior art",
        "Never — provisionals are always confidential",
      ],
      correctIndex: 1,
      explanation:
        "A provisional application may become publicly accessible when it is relied upon as a priority basis in a published non-provisional application or issued patent, and may then be accessed under 37 CFR 1.14(a).",
    },
  },

  // --- Concept Group 7: FOIA Requests ---
  {
    id: "z2-layer-18",
    conceptId: "insp-foia",
    zoneSlug: "the-reading-room",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "The Freedom of Information Act (FOIA), 5 USC 552, generally requires federal agencies to make records available to the public upon request.",
    highlightedAddition:
      "FOIA generally requires agencies to make records available",
    question: {
      stem: "What does FOIA (5 USC 552) generally require of federal agencies?",
      options: [
        "That all government records be published online immediately",
        "That agencies make records available to the public upon request",
        "That agencies destroy records after 5 years",
        "That only classified records be maintained",
      ],
      correctIndex: 1,
      explanation:
        "FOIA (5 USC 552) generally requires federal agencies, including the USPTO, to make records available to the public upon request, subject to certain exemptions.",
    },
  },
  {
    id: "z2-layer-19",
    conceptId: "insp-foia",
    zoneSlug: "the-reading-room",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "However, patent application files are largely exempt from FOIA under 35 USC 122, which provides that applications shall be kept in confidence and not opened to public inspection absent specific authorization.",
    highlightedAddition:
      "exempt from FOIA under 35 USC 122",
    question: {
      stem: "Why are most unpublished patent application files exempt from FOIA requests?",
      options: [
        "Because patent files are classified documents",
        "Because 35 USC 122 provides that unpublished applications shall be kept in confidence",
        "Because FOIA does not apply to the USPTO",
        "Because patent files are maintained by a private contractor",
      ],
      correctIndex: 1,
      explanation:
        "35 USC 122 provides that patent applications shall be kept in confidence, which exempts unpublished patent files from the general FOIA disclosure requirements.",
    },
  },
  {
    id: "z2-layer-20",
    conceptId: "insp-foia",
    zoneSlug: "the-reading-room",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "FOIA may still apply to non-application records at the USPTO, such as administrative records, policy documents, and certain patent examination procedure materials not otherwise protected by confidentiality provisions.",
    highlightedAddition:
      "non-application records such as administrative records and policy documents",
    question: {
      stem: "What types of USPTO records may still be obtainable through FOIA?",
      options: [
        "Unpublished patent applications",
        "Non-application records such as administrative records and policy documents",
        "Examiner personal notes about pending applications",
        "All patent files older than 20 years",
      ],
      correctIndex: 1,
      explanation:
        "While unpublished patent application files are generally exempt from FOIA under 35 USC 122, non-application records like administrative records and policy documents may be obtainable through FOIA.",
    },
  },
];

// --- ABSORB PHASE: Analogies ---

export const ZONE2_ANALOGIES: AnalogyMapping[] = [
  {
    id: "z2-analogy-1",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    analogyText:
      "Public inspection of patent files is like a library system. Published applications and granted patents are on the open shelves — anyone can read them. Unpublished pending applications are in the restricted archives — only authorized staff (the applicant, their attorney) can enter. Abandoned unpublished applications are in a locked storage room — you need a special pass (petition) to get in.",
    mappings: [
      { analogyTerm: "Open shelves", formalTerm: "Published apps and patents (37 CFR 1.11)" },
      { analogyTerm: "Restricted archives", formalTerm: "Unpublished pending apps (35 USC 122)" },
      { analogyTerm: "Authorized staff", formalTerm: "Applicant, attorney of record (37 CFR 1.14(c))" },
      { analogyTerm: "Locked storage room", formalTerm: "Unpublished abandoned apps" },
      { analogyTerm: "Special pass", formalTerm: "Petition under 37 CFR 1.14(i)" },
    ],
    followUp: {
      stem: "In the library analogy, what determines when a book moves from the restricted archives to the open shelves?",
      options: [
        "When 12 months pass from filing",
        "When the application is published (typically at 18 months) or a patent issues",
        "When the examiner completes the first action",
        "When the applicant pays the publication fee",
      ],
      correctIndex: 1,
      explanation:
        "The trigger for moving from 'restricted' to 'open' is publication (normally at 18 months under 35 USC 122(b)) or patent grant. Before that, the application remains confidential.",
    },
  },
  {
    id: "z2-analogy-2",
    conceptId: "insp-power-inspect",
    zoneSlug: "the-reading-room",
    analogyText:
      "The power to inspect is like a building security system. The applicant is the building owner — they have a master key. The attorney of record has an employee badge — full access during their employment. Other registered attorneys are like delivery drivers — they need the owner to buzz them in (written authorization). The general public can only see the lobby directory (status information under 37 CFR 1.14(e)).",
    mappings: [
      { analogyTerm: "Building owner (master key)", formalTerm: "Applicant" },
      { analogyTerm: "Employee badge", formalTerm: "Attorney/agent of record (37 CFR 1.14(c))" },
      { analogyTerm: "Delivery driver buzzed in", formalTerm: "Other attorney with written authorization" },
      { analogyTerm: "Lobby directory", formalTerm: "Status information (37 CFR 1.14(e))" },
    ],
    followUp: {
      stem: "Under the building security analogy, what happens to access when the building (application) becomes a public park (published patent)?",
      options: [
        "Only badge holders retain access",
        "Everyone has access — the building is now fully open to the public",
        "The delivery driver gets permanent access but the public still needs a pass",
        "The building owner must petition to re-enter",
      ],
      correctIndex: 1,
      explanation:
        "Once a patent issues or an application is published, the file becomes open to the public under 37 CFR 1.11. The access restrictions of 37 CFR 1.14(c) no longer limit who can view the file.",
    },
  },
  {
    id: "z2-analogy-3",
    conceptId: "insp-foia",
    zoneSlug: "the-reading-room",
    analogyText:
      "FOIA and patent files are like a public records request at city hall. FOIA is the general rule that any citizen can request government documents. But patent files have a special exemption — think of them as sealed court records. The seal (35 USC 122) overrides the general public records law. Only when the seal is broken (publication or patent grant) do the records become accessible through normal channels.",
    mappings: [
      { analogyTerm: "Public records request", formalTerm: "FOIA request (5 USC 552)" },
      { analogyTerm: "City hall documents", formalTerm: "General USPTO records" },
      { analogyTerm: "Sealed court records", formalTerm: "Unpublished patent applications" },
      { analogyTerm: "The seal", formalTerm: "35 USC 122 confidentiality" },
      { analogyTerm: "Seal broken", formalTerm: "Publication or patent grant" },
    ],
    followUp: {
      stem: "Can any USPTO records be obtained through FOIA, or is everything protected by the 35 USC 122 seal?",
      options: [
        "All USPTO records are exempt from FOIA",
        "Non-application records like administrative and policy documents are still subject to FOIA",
        "Only patent examiners can request FOIA records from the USPTO",
        "FOIA applies only to design patent files",
      ],
      correctIndex: 1,
      explanation:
        "The 35 USC 122 exemption applies specifically to unpublished patent application files. Non-application records such as administrative records and policy documents remain subject to FOIA.",
    },
  },
];

// --- ABSORB PHASE: Visual Timelines ---

export const ZONE2_TIMELINES: VisualTimelineData[] = [
  {
    id: "z2-timeline-1",
    conceptId: "insp-open-files",
    zoneSlug: "the-reading-room",
    title: "Patent Application Public Access Timeline",
    description:
      "Key milestones from filing to full public access of patent application files.",
    startLabel: "Filing Date",
    endLabel: "Patent Expiration",
    milestones: [
      {
        id: "t1-m1",
        label: "Application filed",
        description:
          "Application maintained in confidence under 35 USC 122(a). Only applicant and attorney of record can access.",
        position: 0,
      },
      {
        id: "t1-m2",
        label: "18-month publication",
        description:
          "Application published under 35 USC 122(b). File becomes open to public inspection under 37 CFR 1.11(a).",
        position: 40,
      },
      {
        id: "t1-m3",
        label: "Patent grant",
        description:
          "Patent issues. Full file wrapper including IFW contents becomes publicly accessible. Incorporated-by-reference materials accessible.",
        position: 70,
      },
      {
        id: "t1-m4",
        label: "Patent expiration",
        description:
          "Patent enters the public domain. All file contents remain publicly accessible.",
        position: 100,
      },
    ],
  },
  {
    id: "z2-timeline-2",
    conceptId: "insp-petition-access",
    zoneSlug: "the-reading-room",
    title: "Access to Unpublished Abandoned Applications",
    description:
      "Process for obtaining access to an unpublished application that was abandoned before publication.",
    startLabel: "Abandonment",
    endLabel: "Access Granted/Denied",
    milestones: [
      {
        id: "t2-m1",
        label: "Application abandoned before publication",
        description:
          "Application remains confidential under 35 USC 122(a). Not accessible to the public.",
        position: 0,
      },
      {
        id: "t2-m2",
        label: "Third party identifies need for access",
        description:
          "Petitioner discovers the abandoned application is relied upon as a reference or identified in a published document.",
        position: 25,
      },
      {
        id: "t2-m3",
        label: "Petition filed under 37 CFR 1.14(i)",
        description:
          "Petitioner files a petition identifying the application and demonstrating the basis for access.",
        position: 50,
      },
      {
        id: "t2-m4",
        label: "USPTO reviews petition",
        description:
          "The Office of Patent Legal Administration reviews the petition and supporting documentation.",
        position: 75,
      },
      {
        id: "t2-m5",
        label: "Decision issued",
        description:
          "Access granted or denied. If granted, specified portions of the file become available to the petitioner.",
        position: 100,
      },
    ],
  },
];
