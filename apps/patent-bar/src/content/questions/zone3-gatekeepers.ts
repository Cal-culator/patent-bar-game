import { RuleLayer, AnalogyMapping, VisualTimelineData } from "@study-game/engine";

// ============================================================
// Zone 3: The Gatekeepers — Suspended Practitioners & Assignee Control
// MPEP Sections 105, 106 | 37 CFR 11.116, 3.71, 3.73
// ============================================================

// --- ABSORB PHASE: Rule Layers ---

export const ZONE3_RULE_LAYERS: RuleLayer[] = [
  // --- Concept Group 1: Communication Ban with Suspended/Excluded Practitioners (gate-suspended) ---
  {
    id: "z3-layer-1",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    layerNumber: 1,
    totalLayers: 4,
    ruleText:
      "A practitioner who has been suspended or excluded from practice before the USPTO is prohibited from practicing patent law before the Office.",
    highlightedAddition:
      "prohibited from practicing patent law before the Office",
    question: {
      stem: "What is the status of a practitioner who has been suspended or excluded from the USPTO?",
      options: [
        "They may continue to practice under supervision",
        "They are prohibited from practicing patent law before the Office",
        "They may practice only on design patent applications",
        "They retain limited filing privileges for 6 months",
      ],
      correctIndex: 1,
      explanation:
        "Under MPEP 105 and 37 CFR 11.116, a suspended or excluded practitioner is completely prohibited from practicing before the USPTO.",
    },
  },
  {
    id: "z3-layer-2",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    layerNumber: 2,
    totalLayers: 4,
    ruleText:
      "Under 37 CFR 11.116, USPTO employees shall not communicate about pending patent applications with practitioners who have been suspended or excluded.",
    highlightedAddition:
      "shall not communicate about pending patent applications",
    question: {
      stem: "What restriction applies to USPTO employees regarding suspended practitioners?",
      options: [
        "They may communicate only in writing",
        "They may communicate only through the OED Director",
        "They shall not communicate about pending patent applications with them",
        "They must report the communication to the examiner's supervisor within 24 hours",
      ],
      correctIndex: 2,
      explanation:
        "37 CFR 11.116 prohibits USPTO employees from communicating about pending patent applications with suspended or excluded practitioners.",
    },
  },
  {
    id: "z3-layer-3",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    layerNumber: 3,
    totalLayers: 4,
    ruleText:
      "The Office of Enrollment and Discipline (OED) maintains and publishes a roster of practitioners who have been suspended, excluded, or resigned in lieu of discipline.",
    highlightedAddition:
      "OED maintains and publishes a roster",
    question: {
      stem: "Who maintains the list of suspended and excluded practitioners?",
      options: [
        "The Patent Trial and Appeal Board (PTAB)",
        "The Technology Center Directors",
        "The Office of Enrollment and Discipline (OED)",
        "The Commissioner for Patents personally",
      ],
      correctIndex: 2,
      explanation:
        "The OED is responsible for maintaining and publishing the roster of practitioners who have been suspended, excluded, or who resigned in lieu of discipline.",
    },
  },
  {
    id: "z3-layer-4",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    layerNumber: 4,
    totalLayers: 4,
    ruleText:
      "Consequences of unauthorized practice by a suspended or excluded practitioner include OED investigation, possible contempt proceedings, and referral to appropriate authorities.",
    highlightedAddition:
      "OED investigation, possible contempt proceedings, and referral",
    question: {
      stem: "What may happen if a suspended practitioner engages in unauthorized practice before the USPTO?",
      options: [
        "Only a warning letter is issued",
        "The application they worked on is automatically abandoned",
        "OED investigation, possible contempt proceedings, and referral to authorities",
        "A fine of $500 per occurrence",
      ],
      correctIndex: 2,
      explanation:
        "Unauthorized practice by a suspended or excluded practitioner can trigger OED investigation, contempt proceedings, and referral to appropriate law enforcement authorities.",
    },
  },

  // --- Concept Group 2: Exception for Inventor/Applicant (gate-exception) ---
  {
    id: "z3-layer-5",
    conceptId: "gate-exception",
    zoneSlug: "the-gatekeepers",
    layerNumber: 1,
    totalLayers: 2,
    ruleText:
      "Exception: A suspended or excluded practitioner who is the actual inventor or applicant may file and prosecute their own application pro se (on their own behalf).",
    highlightedAddition:
      "actual inventor or applicant may file ... pro se",
    question: {
      stem: "Can a suspended practitioner ever file a patent application with the USPTO?",
      options: [
        "No, under no circumstances",
        "Yes, if they are the actual inventor or applicant and file pro se",
        "Yes, if they pay an additional surcharge",
        "Yes, if another registered practitioner co-signs all documents",
      ],
      correctIndex: 1,
      explanation:
        "A suspended or excluded practitioner who is the actual inventor or applicant retains the right to file and prosecute their own application pro se, as any inventor may do.",
    },
  },
  {
    id: "z3-layer-6",
    conceptId: "gate-exception",
    zoneSlug: "the-gatekeepers",
    layerNumber: 2,
    totalLayers: 2,
    ruleText:
      "Even when filing pro se, a suspended practitioner may not represent other inventors or applicants, nor may they hold themselves out as a registered practitioner.",
    highlightedAddition:
      "may not represent other inventors or applicants",
    question: {
      stem: "What limitation applies to a suspended practitioner filing pro se?",
      options: [
        "They cannot file continuation applications",
        "They cannot include claims in their application",
        "They may not represent other inventors or hold themselves out as registered",
        "They must file only provisional applications",
      ],
      correctIndex: 2,
      explanation:
        "The pro se exception is strictly limited to the suspended practitioner's own application. They cannot represent others or claim to be a registered practitioner.",
    },
  },

  // --- Concept Group 3: Assignee's Right to Control (gate-assignee-control) ---
  {
    id: "z3-layer-7",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    layerNumber: 1,
    totalLayers: 4,
    ruleText:
      "Under 37 CFR 3.71, an assignee of the entire right, title, and interest in a patent application may take action in the application, including controlling prosecution.",
    highlightedAddition:
      "assignee of the entire right ... may take action",
    question: {
      stem: "Who may take action in a patent application under 37 CFR 3.71?",
      options: [
        "Only the named inventor",
        "Any person with a financial interest in the application",
        "An assignee of the entire right, title, and interest",
        "Only a registered patent attorney",
      ],
      correctIndex: 2,
      explanation:
        "Under 37 CFR 3.71, an assignee who holds the entire right, title, and interest in the application may take action, including directing prosecution.",
    },
  },
  {
    id: "z3-layer-8",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    layerNumber: 2,
    totalLayers: 4,
    ruleText:
      "To establish the right to take action, the assignee must file a statement under 37 CFR 3.73(c) setting forth the basis for entitlement, supported by documentary evidence of the chain of title.",
    highlightedAddition:
      "file a statement under 37 CFR 3.73(c) ... chain of title",
    question: {
      stem: "How does an assignee prove authority to act in an application?",
      options: [
        "By filing a sworn affidavit with the examiner",
        "By filing a statement under 37 CFR 3.73(c) with documentary evidence of the chain of title",
        "By having the inventor send a letter to the USPTO",
        "By recording the assignment in the county clerk's office",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 3.73(c), the assignee must file a statement setting forth the basis for entitlement, supported by documentary evidence establishing the chain of title from the inventor.",
    },
  },
  {
    id: "z3-layer-9",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    layerNumber: 3,
    totalLayers: 4,
    ruleText:
      "An assignee of the entire interest may revoke a power of attorney previously granted by the inventor and appoint a new registered practitioner.",
    highlightedAddition:
      "may revoke a power of attorney ... appoint a new practitioner",
    question: {
      stem: "Can an assignee change the attorney of record on a patent application?",
      options: [
        "No, only the inventor can change the attorney of record",
        "Yes, an assignee of the entire interest may revoke the existing power of attorney and appoint a new practitioner",
        "Yes, but only with the inventor's written consent",
        "Yes, but only after the application is published",
      ],
      correctIndex: 1,
      explanation:
        "An assignee who holds the entire right, title, and interest may revoke the existing power of attorney and appoint a new registered practitioner to handle the application.",
    },
  },
  {
    id: "z3-layer-10",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    layerNumber: 4,
    totalLayers: 4,
    ruleText:
      "Even when an assignee controls prosecution, the inventor retains certain rights, including the right to receive notice of all USPTO actions and the right to inspect the application file.",
    highlightedAddition:
      "inventor retains ... notice of USPTO actions ... right to inspect",
    question: {
      stem: "When an assignee controls prosecution, what rights does the inventor retain?",
      options: [
        "No rights — the assignee has complete control",
        "The right to receive notice of USPTO actions and to inspect the file",
        "Only the right to be named as inventor on the patent",
        "The right to override assignee decisions on claim amendments",
      ],
      correctIndex: 1,
      explanation:
        "Even when the assignee controls prosecution, the inventor retains important rights including receiving notice of all USPTO actions and inspecting the application file.",
    },
  },

  // --- Concept Group 4: Partial Interest Holders (gate-partial-interest) ---
  {
    id: "z3-layer-11",
    conceptId: "gate-partial-interest",
    zoneSlug: "the-gatekeepers",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "A partial assignee — one who holds less than the entire right, title, and interest — has limited rights in the application.",
    highlightedAddition:
      "partial assignee ... limited rights",
    question: {
      stem: "What rights does a holder of a partial interest in a patent application have?",
      options: [
        "The same rights as a full assignee",
        "No rights at all in the application",
        "Limited rights — they cannot fully control prosecution",
        "Rights only during the appeal phase",
      ],
      correctIndex: 2,
      explanation:
        "A partial assignee holds less than the entire interest and therefore has limited rights. They cannot take the same controlling actions as a full assignee.",
    },
  },
  {
    id: "z3-layer-12",
    conceptId: "gate-partial-interest",
    zoneSlug: "the-gatekeepers",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "Partial interest holders may inspect the application file but may not direct prosecution, amend claims, or make substantive decisions about the application.",
    highlightedAddition:
      "may inspect ... but may not direct prosecution",
    question: {
      stem: "Can a partial assignee direct the prosecution of a patent application?",
      options: [
        "Yes, any assignee can direct prosecution",
        "No, partial assignees may inspect the file but may not direct prosecution",
        "Yes, but only with the consent of all other partial assignees",
        "No, and they cannot even inspect the application file",
      ],
      correctIndex: 1,
      explanation:
        "Partial interest holders may inspect the application file but may not direct prosecution, amend claims, or make substantive decisions. Only the assignee of the entire interest has those rights.",
    },
  },
  {
    id: "z3-layer-13",
    conceptId: "gate-partial-interest",
    zoneSlug: "the-gatekeepers",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "When there are multiple partial assignees, all partial assignees together with the inventor must join to take action unless an assignee of the entire interest is established.",
    highlightedAddition:
      "all partial assignees together with the inventor must join",
    question: {
      stem: "How can multiple partial assignees collectively take action in an application?",
      options: [
        "The majority of partial assignees can act",
        "Any single partial assignee can act on behalf of all",
        "All partial assignees together with the inventor must join to take action",
        "They must petition the Commissioner for special permission",
      ],
      correctIndex: 2,
      explanation:
        "When there are multiple partial assignees, all of them together with the inventor must join to take action, unless a single assignee of the entire interest is established.",
    },
  },

  // --- Concept Group 5: Written Consent for Third-Party Access (gate-written-consent) ---
  {
    id: "z3-layer-14",
    conceptId: "gate-written-consent",
    zoneSlug: "the-gatekeepers",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "Under MPEP 106, access to unpublished patent applications is restricted. Written authorization from the applicant or assignee is required for third-party access.",
    highlightedAddition:
      "written authorization ... required for third-party access",
    question: {
      stem: "What is required for a third party to access an unpublished patent application?",
      options: [
        "A court order",
        "Written authorization from the applicant or assignee",
        "Payment of a special access fee",
        "A Freedom of Information Act (FOIA) request",
      ],
      correctIndex: 1,
      explanation:
        "Under MPEP 106, access to unpublished applications requires written authorization from the applicant or assignee. Unpublished applications are maintained in confidence.",
    },
  },
  {
    id: "z3-layer-15",
    conceptId: "gate-written-consent",
    zoneSlug: "the-gatekeepers",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "The assignee who has established their interest under 37 CFR 3.73 has the right to control who may inspect the application, and may grant or deny written consent for inspection.",
    highlightedAddition:
      "control who may inspect ... grant or deny written consent",
    question: {
      stem: "Who controls inspection access to an unpublished application when an assignee has established their interest?",
      options: [
        "The examiner assigned to the application",
        "The inventor, regardless of assignment",
        "The assignee who has established their interest under 37 CFR 3.73",
        "The Technology Center Director",
      ],
      correctIndex: 2,
      explanation:
        "Once an assignee establishes their interest under 37 CFR 3.73, they control who may inspect the application and may grant or deny written consent for inspection.",
    },
  },
  {
    id: "z3-layer-16",
    conceptId: "gate-written-consent",
    zoneSlug: "the-gatekeepers",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "Once a patent application is published or a patent issues, the application file becomes publicly accessible and written consent is no longer required for inspection.",
    highlightedAddition:
      "published or patent issues ... publicly accessible",
    question: {
      stem: "When does written consent become unnecessary for accessing an application file?",
      options: [
        "After the first office action is mailed",
        "After the application is published or a patent issues",
        "After 18 months from the filing date, regardless of publication status",
        "After the assignment is recorded",
      ],
      correctIndex: 1,
      explanation:
        "Written consent is no longer required once the application is published or a patent issues, as the file becomes part of the public record.",
    },
  },

  // --- Concept Group 6: OED Role (gate-oed-role) ---
  {
    id: "z3-layer-17",
    conceptId: "gate-oed-role",
    zoneSlug: "the-gatekeepers",
    layerNumber: 1,
    totalLayers: 4,
    ruleText:
      "The Office of Enrollment and Discipline (OED) is responsible for the registration, investigation, and discipline of patent practitioners before the USPTO.",
    highlightedAddition:
      "registration, investigation, and discipline of patent practitioners",
    question: {
      stem: "What are the primary functions of the OED?",
      options: [
        "Examining patent applications and issuing patents",
        "Registration, investigation, and discipline of patent practitioners",
        "Conducting inter partes review proceedings",
        "Maintaining the patent classification system",
      ],
      correctIndex: 1,
      explanation:
        "The OED is responsible for registering practitioners to practice before the USPTO, investigating complaints of misconduct, and disciplining practitioners who violate the rules.",
    },
  },
  {
    id: "z3-layer-18",
    conceptId: "gate-oed-role",
    zoneSlug: "the-gatekeepers",
    layerNumber: 2,
    totalLayers: 4,
    ruleText:
      "The OED Director may initiate investigations into potential unauthorized practice, including practice by suspended or excluded practitioners.",
    highlightedAddition:
      "OED Director may initiate investigations",
    question: {
      stem: "Who may initiate investigations into unauthorized practice before the USPTO?",
      options: [
        "Any patent examiner",
        "The OED Director",
        "The President of the United States",
        "Only a federal judge",
      ],
      correctIndex: 1,
      explanation:
        "The OED Director has the authority to initiate investigations into potential unauthorized practice, including practice by individuals who have been suspended or excluded.",
    },
  },
  {
    id: "z3-layer-19",
    conceptId: "gate-oed-role",
    zoneSlug: "the-gatekeepers",
    layerNumber: 3,
    totalLayers: 4,
    ruleText:
      "Disciplinary sanctions imposed by the OED include reprimand, probation, suspension, and exclusion from practice before the USPTO.",
    highlightedAddition:
      "reprimand, probation, suspension, and exclusion",
    question: {
      stem: "Which of the following is NOT a disciplinary sanction available to the OED?",
      options: [
        "Reprimand",
        "Suspension from practice",
        "Exclusion from practice",
        "Imprisonment",
      ],
      correctIndex: 3,
      explanation:
        "The OED may impose reprimand, probation, suspension, or exclusion. Imprisonment is a criminal sanction imposed by courts, not an administrative sanction from the OED.",
    },
  },
  {
    id: "z3-layer-20",
    conceptId: "gate-oed-role",
    zoneSlug: "the-gatekeepers",
    layerNumber: 4,
    totalLayers: 4,
    ruleText:
      "The OED publishes decisions in disciplinary proceedings, making them available to the public. This serves both as a deterrent and as transparency in the discipline process.",
    highlightedAddition:
      "publishes decisions ... available to the public",
    question: {
      stem: "Are OED disciplinary decisions made public?",
      options: [
        "No, all disciplinary proceedings are confidential",
        "Yes, the OED publishes decisions for transparency and deterrence",
        "Only if the practitioner consents to publication",
        "Only exclusion decisions are published; suspensions are kept confidential",
      ],
      correctIndex: 1,
      explanation:
        "The OED publishes disciplinary decisions, making them available to the public. This serves both as a deterrent to misconduct and as transparency in the discipline process.",
    },
  },
];

// --- ABSORB PHASE: Analogies ---

export const ZONE3_ANALOGIES: AnalogyMapping[] = [
  {
    id: "z3-analogy-1",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    analogyText:
      "A suspended practitioner is like a lawyer who has been disbarred from a courtroom. They can't walk in and argue cases, and the court staff (USPTO employees) can't discuss pending cases with them. But if they personally have a speeding ticket (their own patent application as inventor), they can still show up to court pro se to handle their own case — they just can't represent anyone else.",
    mappings: [
      { analogyTerm: "Disbarred lawyer", formalTerm: "Suspended/excluded practitioner" },
      { analogyTerm: "Courtroom", formalTerm: "USPTO practice" },
      { analogyTerm: "Court staff", formalTerm: "USPTO employees" },
      { analogyTerm: "Pending cases", formalTerm: "Pending patent applications" },
      { analogyTerm: "Own speeding ticket", formalTerm: "Own invention (pro se filing)" },
      { analogyTerm: "Represent anyone else", formalTerm: "Practice on behalf of other applicants" },
    ],
    followUp: {
      stem: "If a suspended practitioner files pro se as an inventor, can they also represent a co-inventor on the same application?",
      options: [
        "Yes, because they are already involved in the application",
        "Yes, but only if the co-inventor signs a written authorization",
        "No, the pro se exception is strictly limited to representing only themselves",
        "No, and their own filing is also invalid if there is a co-inventor",
      ],
      correctIndex: 2,
      explanation:
        "The pro se exception is narrow. A suspended practitioner may only represent themselves as inventor/applicant. They cannot represent co-inventors or any other party, even on the same application.",
    },
  },
  {
    id: "z3-analogy-2",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    analogyText:
      "An assignee controlling a patent application is like a new homeowner taking over a house. The previous owner (inventor) built the house, but once the deed (assignment) is transferred and recorded (37 CFR 3.73 statement), the new owner decides who gets the keys (power of attorney), who can visit (inspection), and how to renovate (prosecution). But the builder still has the right to be notified about any building inspections (USPTO actions).",
    mappings: [
      { analogyTerm: "New homeowner", formalTerm: "Assignee of entire interest" },
      { analogyTerm: "Previous owner / builder", formalTerm: "Inventor" },
      { analogyTerm: "Deed transfer and recording", formalTerm: "37 CFR 3.73(c) statement" },
      { analogyTerm: "Keys to the house", formalTerm: "Power of attorney" },
      { analogyTerm: "Who can visit", formalTerm: "Inspection rights" },
      { analogyTerm: "Building inspections", formalTerm: "USPTO office actions" },
    ],
    followUp: {
      stem: "What must the assignee file to establish their authority to control the application, analogous to recording the deed?",
      options: [
        "A petition to the Commissioner under 37 CFR 1.181",
        "A statement under 37 CFR 3.73(c) with documentary evidence of the chain of title",
        "An oath or declaration under 37 CFR 1.63",
        "A terminal disclaimer under 37 CFR 1.321",
      ],
      correctIndex: 1,
      explanation:
        "To establish authority, the assignee must file a statement under 37 CFR 3.73(c) supported by documentary evidence showing the chain of title from the inventor to the assignee.",
    },
  },
  {
    id: "z3-analogy-3",
    conceptId: "gate-partial-interest",
    zoneSlug: "the-gatekeepers",
    analogyText:
      "A partial assignee is like a co-owner of a timeshare property. They own a share and can look at the property (inspect the application), but they can't unilaterally decide to renovate or sell (direct prosecution). Major decisions require all co-owners and the original builder (inventor) to agree. Only if one person buys out all the others (becomes full assignee) can they make decisions alone.",
    mappings: [
      { analogyTerm: "Timeshare co-owner", formalTerm: "Partial assignee" },
      { analogyTerm: "Look at the property", formalTerm: "Inspect the application" },
      { analogyTerm: "Renovate or sell", formalTerm: "Direct prosecution or amend claims" },
      { analogyTerm: "All co-owners + builder agree", formalTerm: "All partial assignees + inventor must join" },
      { analogyTerm: "Buy out all others", formalTerm: "Become assignee of entire interest" },
    ],
    followUp: {
      stem: "If three companies each hold a one-third interest in a patent application, what must happen for prosecution to be directed?",
      options: [
        "Any one company can direct prosecution with a majority vote",
        "The company with the largest revenue directs prosecution",
        "All three companies together with the inventor must join to take action",
        "The USPTO assigns a default representative among the partial assignees",
      ],
      correctIndex: 2,
      explanation:
        "When multiple partial assignees exist, all of them together with the inventor must join to take action in the application, unless one entity acquires the entire interest.",
    },
  },
];

// --- ABSORB PHASE: Visual Timelines ---

export const ZONE3_TIMELINES: VisualTimelineData[] = [
  {
    id: "z3-timeline-1",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    title: "Practitioner Discipline Process",
    description:
      "Key stages from complaint to final disposition in an OED disciplinary proceeding against a practitioner.",
    startLabel: "Complaint Filed",
    endLabel: "Final Disposition",
    milestones: [
      {
        id: "t1-m1",
        label: "Complaint received by OED",
        description:
          "OED receives a complaint alleging practitioner misconduct or unauthorized practice.",
        position: 0,
      },
      {
        id: "t1-m2",
        label: "OED investigation",
        description:
          "OED Director initiates investigation, gathers evidence, and interviews witnesses.",
        position: 25,
      },
      {
        id: "t1-m3",
        label: "Charges filed (if warranted)",
        description:
          "If investigation supports misconduct, OED files formal charges against the practitioner.",
        position: 50,
      },
      {
        id: "t1-m4",
        label: "Hearing before ALJ",
        description:
          "An Administrative Law Judge conducts a hearing on the charges.",
        position: 70,
      },
      {
        id: "t1-m5",
        label: "Sanction imposed & published",
        description:
          "Disciplinary sanction (reprimand, probation, suspension, or exclusion) is imposed and the decision is published.",
        position: 100,
      },
    ],
  },
  {
    id: "z3-timeline-2",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    title: "Assignee Establishing Control",
    description:
      "Steps for an assignee to take control of a patent application from filing through active prosecution.",
    startLabel: "Assignment Executed",
    endLabel: "Assignee Controls Prosecution",
    milestones: [
      {
        id: "t2-m1",
        label: "Assignment agreement executed",
        description:
          "Inventor assigns entire right, title, and interest to the assignee in a written agreement.",
        position: 0,
      },
      {
        id: "t2-m2",
        label: "Assignment recorded at USPTO",
        description:
          "The assignment document is recorded with the USPTO Assignment Recordation Branch.",
        position: 25,
      },
      {
        id: "t2-m3",
        label: "37 CFR 3.73(c) statement filed",
        description:
          "Assignee files a statement establishing entitlement to take action, with documentary evidence of chain of title.",
        position: 50,
      },
      {
        id: "t2-m4",
        label: "Power of attorney established",
        description:
          "Assignee may revoke existing power of attorney and appoint a new registered practitioner.",
        position: 75,
      },
      {
        id: "t2-m5",
        label: "Assignee directs prosecution",
        description:
          "Assignee now controls prosecution, including responding to office actions and amending claims.",
        position: 100,
      },
    ],
  },
];
