import {
  ScenarioQuestion,
  QuickFireQuestion,
  ProceduralCascadeData,
} from "@/types";

// ============================================================
// Zone 3: The Gatekeepers — Apply Phase Content
// Scenarios, Quick-Fire, Procedural Cascades
// ============================================================

// --- SCENARIO QUESTIONS (8) ---
// Realistic exam-style fact patterns at escalating difficulty

export const ZONE3_SCENARIOS: ScenarioQuestion[] = [
  // Difficulty 1 — Basic suspended practitioner rule
  {
    id: "z3-scenario-1",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    difficulty: 1,
    stem: "Attorney Davis was suspended from practice before the USPTO six months ago. A former client calls and asks Davis to draft and file a response to an office action on the client's pending patent application. What should Davis do?",
    options: [
      { text: "Draft and file the response since the client specifically requested it" },
      { text: "Decline, because a suspended practitioner is prohibited from practicing before the USPTO on behalf of others" },
      { text: "Draft the response but have a registered practitioner sign and file it" },
      { text: "File the response and inform the OED within 30 days" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 11.116 and MPEP 105, a suspended practitioner is completely prohibited from practicing before the USPTO. This includes drafting and filing documents for clients. Davis must decline.",
    citationRef: "37 CFR 11.116; MPEP 105",
  },
  {
    id: "z3-scenario-2",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    difficulty: 1,
    stem: "TechCorp acquired all patent rights from inventor Dr. Martinez through a written assignment. TechCorp wants to respond to an office action on Dr. Martinez's pending application. What must TechCorp do first?",
    options: [
      { text: "Nothing — as the assignee, TechCorp automatically has the right to act" },
      { text: "File a statement under 37 CFR 3.73(c) establishing the chain of title from Dr. Martinez to TechCorp" },
      { text: "Have Dr. Martinez send a letter to the examiner authorizing TechCorp" },
      { text: "Wait for the assignment to be published in the Official Gazette" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 3.73(c), an assignee must file a statement setting forth the basis for entitlement to take action, supported by documentary evidence of the chain of title. Assignment alone is insufficient without this formal step.",
    citationRef: "37 CFR 3.73(c)",
  },

  // Difficulty 2 — Pro se exception, written consent
  {
    id: "z3-scenario-3",
    conceptId: "gate-exception",
    zoneSlug: "the-gatekeepers",
    difficulty: 2,
    stem: "Patent agent Wilson was excluded from practice before the USPTO after a disciplinary proceeding. Wilson later invents a new software algorithm and wants to file a patent application. Can Wilson file this application?",
    options: [
      { text: "No, excluded practitioners cannot file any applications with the USPTO" },
      { text: "Yes, because Wilson is the actual inventor and may file pro se on their own behalf" },
      { text: "Yes, but only if Wilson hires a registered practitioner to co-sign the application" },
      { text: "Yes, but only after Wilson's exclusion period expires" },
    ],
    correctIndex: 1,
    explanation:
      "Even an excluded practitioner retains the right to file and prosecute their own patent application pro se when they are the actual inventor. This right belongs to all individuals, not just registered practitioners.",
    citationRef: "MPEP 105",
  },
  {
    id: "z3-scenario-4",
    conceptId: "gate-written-consent",
    zoneSlug: "the-gatekeepers",
    difficulty: 2,
    stem: "CompanyA is considering acquiring CompanyB. As part of due diligence, CompanyA wants to inspect CompanyB's pending (unpublished) patent application. The application has not been published and no patent has issued. How can CompanyA obtain access?",
    options: [
      { text: "File a FOIA request with the USPTO for the application" },
      { text: "Obtain written authorization from CompanyB (the applicant/assignee) for the USPTO to permit inspection" },
      { text: "Pay a special inspection fee to the USPTO" },
      { text: "Wait until the application is published at 18 months, then inspect it publicly" },
    ],
    correctIndex: 1,
    explanation:
      "Under MPEP 106 and 35 USC 122(a), unpublished applications are confidential. CompanyA needs written authorization from CompanyB (the applicant or assignee) to access the application. FOIA cannot override patent application confidentiality.",
    citationRef: "MPEP 106; 35 USC 122(a)",
  },

  // Difficulty 3 — Partial assignee, suspended practitioner edge case
  {
    id: "z3-scenario-5",
    conceptId: "gate-partial-interest",
    zoneSlug: "the-gatekeepers",
    difficulty: 3,
    stem: "University X and Corporation Y each hold a 50% interest in a patent application filed by Professor Lee. Corporation Y wants to amend the claims to broaden coverage, but University X disagrees. Can Corporation Y proceed with the amendment?",
    options: [
      { text: "Yes, because Corporation Y can act independently as a 50% owner" },
      { text: "Yes, but only if Corporation Y files a petition under 37 CFR 1.181" },
      { text: "No, because all partial assignees together with the inventor must join to take action" },
      { text: "No, but Corporation Y can acquire University X's interest through eminent domain" },
    ],
    correctIndex: 2,
    explanation:
      "Under 37 CFR 3.71, when there are multiple partial assignees, all of them together with the inventor must join to take action. Corporation Y cannot amend claims unilaterally with only 50% ownership. University X, Corporation Y, and Professor Lee must all agree.",
    citationRef: "37 CFR 3.71",
  },
  {
    id: "z3-scenario-6",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    difficulty: 3,
    stem: "Examiner Johnson receives a phone call from attorney Roberts about a pending patent application. During the call, Johnson realizes that Roberts was recently suspended from practice. What should Examiner Johnson do?",
    options: [
      { text: "Continue the conversation but document it in the file wrapper" },
      { text: "Immediately end the communication about the pending application and report the contact to the OED" },
      { text: "Transfer the call to the Technology Center Director for approval" },
      { text: "Allow the conversation to continue if Roberts claims to be calling as the inventor" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 11.116, USPTO employees shall not communicate about pending applications with suspended practitioners. Examiner Johnson must immediately end the communication and should report the contact to the OED for potential investigation.",
    citationRef: "37 CFR 11.116; MPEP 105",
  },

  // Difficulty 4 — Complex multi-concept scenarios
  {
    id: "z3-scenario-7",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    difficulty: 4,
    stem: "BioPharm Inc. is the assignee of entire interest in a patent application originally filed by inventor Dr. Patel. BioPharm's current attorney (Attorney Kim) was just suspended by the OED. A final office action response is due in 2 months. What is BioPharm's best course of action?",
    options: [
      { text: "Have Attorney Kim file the response since the suspension does not take effect until all pending matters are resolved" },
      { text: "Revoke Attorney Kim's power of attorney, appoint a new registered practitioner, and file the response through the new attorney" },
      { text: "Have Dr. Patel file the response pro se since he is the inventor" },
      { text: "Request an extension of time from the USPTO until Attorney Kim's suspension is lifted" },
    ],
    correctIndex: 1,
    explanation:
      "As assignee of the entire interest, BioPharm has authority under 37 CFR 3.71 to revoke the power of attorney and appoint a new registered practitioner. Attorney Kim cannot practice while suspended. Dr. Patel filing pro se is not ideal since BioPharm controls prosecution as assignee. BioPharm should act promptly to appoint new counsel.",
    citationRef: "37 CFR 3.71; 37 CFR 11.116",
  },
  {
    id: "z3-scenario-8",
    conceptId: "gate-written-consent",
    zoneSlug: "the-gatekeepers",
    difficulty: 4,
    stem: "MegaTech Corp. holds the entire interest in an unpublished patent application. A competitor files a petition requesting access to the application, claiming it is needed for an inter partes review proceeding on a different patent. The competitor does not have written authorization from MegaTech. Should the USPTO grant access?",
    options: [
      { text: "Yes, because IPR proceedings create a right of access to related applications" },
      { text: "Yes, because the competitor's interest in the proceeding outweighs confidentiality" },
      { text: "No, because access to unpublished applications requires written authorization from the applicant or assignee regardless of the reason" },
      { text: "No, but only because the IPR petition has not yet been instituted" },
    ],
    correctIndex: 2,
    explanation:
      "Under 35 USC 122(a) and MPEP 106, unpublished applications are confidential and require written authorization from the applicant or assignee for third-party access. An IPR proceeding on a different patent does not create an independent right of access. The competitor must obtain MegaTech's written consent.",
    citationRef: "35 USC 122(a); MPEP 106",
  },
];

// --- QUICK-FIRE QUESTIONS (12) ---
// True/false rapid recall covering all concept groups

export const ZONE3_QUICK_FIRE: QuickFireQuestion[] = [
  {
    id: "z3-qf-1",
    zoneSlug: "the-gatekeepers",
    statement:
      "A suspended practitioner is completely prohibited from practicing patent law before the USPTO.",
    isTrue: true,
    explanation:
      "Under 37 CFR 11.116 and MPEP 105, a suspended or excluded practitioner may not practice before the USPTO in any capacity (except filing pro se as inventor).",
    citationRef: "37 CFR 11.116",
  },
  {
    id: "z3-qf-2",
    zoneSlug: "the-gatekeepers",
    statement:
      "USPTO employees may communicate with suspended practitioners about pending applications if the communication is in writing.",
    isTrue: false,
    explanation:
      "The ban under 37 CFR 11.116 is absolute. USPTO employees shall not communicate about pending applications with suspended practitioners regardless of the format.",
    citationRef: "37 CFR 11.116",
  },
  {
    id: "z3-qf-3",
    zoneSlug: "the-gatekeepers",
    statement:
      "A suspended practitioner who is the actual inventor may file and prosecute their own patent application pro se.",
    isTrue: true,
    explanation:
      "The pro se exception allows a suspended or excluded practitioner who is the actual inventor or applicant to file and prosecute their own application.",
    citationRef: "MPEP 105",
  },
  {
    id: "z3-qf-4",
    zoneSlug: "the-gatekeepers",
    statement:
      "An assignee of a partial interest in a patent application may independently direct prosecution of the application.",
    isTrue: false,
    explanation:
      "Under 37 CFR 3.71, only an assignee of the entire right, title, and interest may direct prosecution. A partial assignee has limited rights.",
    citationRef: "37 CFR 3.71",
  },
  {
    id: "z3-qf-5",
    zoneSlug: "the-gatekeepers",
    statement:
      "To establish the right to take action, an assignee must file a statement under 37 CFR 3.73(c) with documentary evidence of the chain of title.",
    isTrue: true,
    explanation:
      "37 CFR 3.73(c) requires the assignee to file a statement supported by documentary evidence establishing the chain of title from the inventor.",
    citationRef: "37 CFR 3.73(c)",
  },
  {
    id: "z3-qf-6",
    zoneSlug: "the-gatekeepers",
    statement:
      "The Office of Enrollment and Discipline (OED) maintains the roster of suspended and excluded practitioners, but this roster is confidential.",
    isTrue: false,
    explanation:
      "The OED roster of suspended and excluded practitioners is publicly available. It is not confidential.",
    citationRef: "MPEP 105",
  },
  {
    id: "z3-qf-7",
    zoneSlug: "the-gatekeepers",
    statement:
      "An assignee of the entire interest may revoke a power of attorney previously granted by the inventor.",
    isTrue: true,
    explanation:
      "An assignee who holds the entire right, title, and interest has the authority to revoke the existing power of attorney and appoint new counsel.",
    citationRef: "37 CFR 3.71",
  },
  {
    id: "z3-qf-8",
    zoneSlug: "the-gatekeepers",
    statement:
      "Written authorization from the applicant or assignee is required for third-party access to published patent applications.",
    isTrue: false,
    explanation:
      "Written authorization is required only for unpublished applications. Once an application is published or a patent issues, the file is publicly accessible.",
    citationRef: "MPEP 106; 35 USC 122(a)",
  },
  {
    id: "z3-qf-9",
    zoneSlug: "the-gatekeepers",
    statement:
      "When an assignee controls prosecution, the inventor loses all rights in the application.",
    isTrue: false,
    explanation:
      "Even when the assignee controls prosecution, the inventor retains certain rights including the right to receive notice of USPTO actions and to inspect the application file.",
    citationRef: "MPEP 106",
  },
  {
    id: "z3-qf-10",
    zoneSlug: "the-gatekeepers",
    statement:
      "The OED can impose sanctions including reprimand, probation, suspension, and exclusion from practice.",
    isTrue: true,
    explanation:
      "These are the four levels of administrative sanctions available to the OED under 37 CFR Part 11.",
    citationRef: "37 CFR Part 11",
  },
  {
    id: "z3-qf-11",
    zoneSlug: "the-gatekeepers",
    statement:
      "A suspended practitioner who is an inventor can also represent a co-inventor on the same application under the pro se exception.",
    isTrue: false,
    explanation:
      "The pro se exception is strictly personal. A suspended practitioner may only represent themselves, not any co-inventors or other parties, even on the same application.",
    citationRef: "MPEP 105",
  },
  {
    id: "z3-qf-12",
    zoneSlug: "the-gatekeepers",
    statement:
      "When multiple partial assignees exist, all of them together with the inventor must join to take action in the application.",
    isTrue: true,
    explanation:
      "Under 37 CFR 3.71, all partial assignees and the inventor must join together to take action unless one entity acquires the entire interest.",
    citationRef: "37 CFR 3.71",
  },
];

// --- PROCEDURAL CASCADES (3) ---
// Multi-step fact patterns with 3 steps each

export const ZONE3_CASCADES: ProceduralCascadeData[] = [
  {
    id: "z3-cascade-1",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    title: "Assignee Taking Control of Prosecution",
    setup:
      "NovaTech Inc. has acquired all patent rights from inventor Dr. Chen through a written assignment agreement. Dr. Chen's original attorney, Attorney Park, is still listed as the attorney of record. NovaTech wants to take control of prosecution and appoint its own counsel. Walk through the process.",
    steps: [
      {
        stem: "What is the first formal step NovaTech must take to establish its right to act in Dr. Chen's application?",
        options: [
          "Send a letter to Attorney Park informing them of the assignment",
          "File a statement under 37 CFR 3.73(c) with the USPTO, supported by documentary evidence of the chain of title",
          "Have Dr. Chen call the examiner to confirm the assignment",
          "File a petition under 37 CFR 1.181 requesting transfer of control",
        ],
        correctIndex: 1,
        explanation:
          "Under 37 CFR 3.73(c), NovaTech must file a statement establishing the chain of title from Dr. Chen (inventor) to NovaTech (assignee), supported by documentary evidence such as the assignment agreement.",
      },
      {
        stem: "After establishing its interest, NovaTech wants to replace Attorney Park with Attorney Lee as the new attorney of record. Can NovaTech do this?",
        options: [
          "No, only Dr. Chen as inventor can change the attorney of record",
          "Yes, but only with Attorney Park's written consent",
          "Yes, as assignee of the entire interest, NovaTech may revoke Park's power of attorney and appoint Attorney Lee",
          "Yes, but only after the next office action is mailed",
        ],
        correctIndex: 2,
        explanation:
          "As assignee of the entire right, title, and interest, NovaTech has the authority to revoke the existing power of attorney and appoint new counsel. No consent from the prior attorney or the inventor is required.",
      },
      {
        stem: "After NovaTech takes control, does Dr. Chen retain any rights in the application?",
        options: [
          "No, Dr. Chen has no remaining rights after the assignment",
          "Yes, Dr. Chen retains the right to receive notice of USPTO actions and to inspect the application file",
          "Yes, Dr. Chen retains full prosecution control as the named inventor",
          "Yes, but only the right to be named as inventor on the patent if it issues",
        ],
        correctIndex: 1,
        explanation:
          "Even after assignment, the inventor retains the right to receive notice of all USPTO actions and the right to inspect the application file. However, prosecution control rests with the assignee.",
      },
    ],
  },
  {
    id: "z3-cascade-2",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    title: "Mid-Prosecution Attorney Suspension",
    setup:
      "Attorney Ramirez has been handling a patent application for her client, BioStart LLC. BioStart is the assignee of the entire interest. Ramirez receives notice that she has been suspended from practice before the USPTO effective immediately. A non-final office action response is due in 2 months. Advise BioStart through the crisis.",
    steps: [
      {
        stem: "What is the immediate effect of Attorney Ramirez's suspension on the pending application?",
        options: [
          "The application is automatically abandoned",
          "Ramirez can no longer practice before the USPTO, including filing any responses or communicating with the examiner about this application",
          "Ramirez has a 30-day grace period to complete pending matters",
          "The suspension only affects new clients, not existing ones",
        ],
        correctIndex: 1,
        explanation:
          "A suspension is effective immediately. Under 37 CFR 11.116, Ramirez can no longer practice before the USPTO in any capacity. She cannot file responses, communicate with examiners, or take any action on pending applications.",
      },
      {
        stem: "What should BioStart do to protect its application?",
        options: [
          "File a petition to extend the response deadline until Ramirez is reinstated",
          "Have the inventor file the response pro se",
          "Promptly appoint a new registered practitioner by revoking Ramirez's power of attorney and granting a new one",
          "Contact the examiner directly to explain the situation and request leniency",
        ],
        correctIndex: 2,
        explanation:
          "As assignee of the entire interest, BioStart should promptly revoke Ramirez's power of attorney and appoint a new registered practitioner. The response deadline remains unchanged, so swift action is critical.",
      },
      {
        stem: "If Examiner Patel receives a phone call from Ramirez about this application after her suspension, what should the examiner do?",
        options: [
          "Take the call since Ramirez was the attorney of record when the office action was mailed",
          "Immediately end the communication and report the contact to the OED",
          "Allow the call but limit it to procedural matters only",
          "Transfer the call to the supervisory patent examiner",
        ],
        correctIndex: 1,
        explanation:
          "Under 37 CFR 11.116, USPTO employees shall not communicate about pending applications with suspended practitioners. The examiner must immediately end the communication and should report the contact to the OED.",
      },
    ],
  },
  {
    id: "z3-cascade-3",
    conceptId: "gate-written-consent",
    zoneSlug: "the-gatekeepers",
    title: "Third-Party Access and Partial Interest Complications",
    setup:
      "StartUp Alpha has a pending, unpublished patent application. VentureCapital Fund wants to inspect the application as part of investment due diligence. Meanwhile, StartUp Alpha has assigned a 40% interest to University Beta, retaining 60%. Analyze the access and control issues.",
    steps: [
      {
        stem: "Can VentureCapital Fund inspect StartUp Alpha's unpublished application?",
        options: [
          "Yes, because investors have a legitimate business interest in patent applications",
          "Yes, but only after the application has been pending for 18 months",
          "No, not without written authorization from the applicant or assignee",
          "No, only the USPTO can decide who inspects unpublished applications",
        ],
        correctIndex: 2,
        explanation:
          "Under 35 USC 122(a) and MPEP 106, unpublished applications are confidential. VentureCapital Fund needs written authorization from the applicant or assignee to inspect the application, regardless of their business relationship.",
      },
      {
        stem: "StartUp Alpha (60% interest holder) wants to grant VentureCapital Fund written access. Does StartUp Alpha need University Beta's consent?",
        options: [
          "No, StartUp Alpha can act independently as the majority interest holder",
          "Yes, because neither StartUp Alpha nor University Beta holds the entire interest, and decisions require all parties to join",
          "No, because VentureCapital Fund only wants to inspect, not take prosecution action",
          "Yes, but only if the inspection involves accessing claim language",
        ],
        correctIndex: 1,
        explanation:
          "Since StartUp Alpha is only a partial assignee (60%), it cannot act independently. Under 37 CFR 3.71, all partial assignees together with the inventor must join to authorize actions, including granting third-party access.",
      },
      {
        stem: "If StartUp Alpha acquires University Beta's 40% interest and becomes the sole assignee, what changes?",
        options: [
          "Nothing changes — the access rules are the same for partial and full assignees",
          "StartUp Alpha, as assignee of the entire interest, can independently authorize VentureCapital Fund's access and control all prosecution decisions",
          "StartUp Alpha must still get the inventor's consent for all decisions",
          "StartUp Alpha can authorize access but still needs the inventor to join for prosecution decisions",
        ],
        correctIndex: 1,
        explanation:
          "As assignee of the entire right, title, and interest, StartUp Alpha gains full control under 37 CFR 3.71. It can independently authorize third-party access, direct prosecution, amend claims, and manage the power of attorney without needing consent from partial assignees or the inventor for prosecution actions.",
      },
    ],
  },
];
