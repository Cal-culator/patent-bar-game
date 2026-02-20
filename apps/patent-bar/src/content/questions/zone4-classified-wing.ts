import { RuleLayer, AnalogyMapping, VisualTimelineData } from "@study-game/engine";

// ============================================================
// Zone 4: The Classified Wing — National Security Review & Screening
// MPEP 115 | 35 USC 181 | 37 CFR 5.1-5.8
// ============================================================

// --- ABSORB PHASE: Rule Layers ---

export const ZONE4_RULE_LAYERS: RuleLayer[] = [
  // --- Concept Group 1: National Security Screening Overview (nsr-screening) ---
  {
    id: "z4-layer-1",
    conceptId: "nsr-screening",
    zoneSlug: "the-classified-wing",
    layerNumber: 1,
    totalLayers: 4,
    ruleText:
      "Under MPEP 115, patent applications filed in the United States are screened for national security implications. This screening process determines whether the subject matter of an application could affect national defense or security if disclosed publicly through the patent system.",
    highlightedAddition:
      "screened for national security implications ... could affect national defense or security",
    question: {
      stem: "Why are patent applications screened under MPEP 115?",
      options: [
        "To determine whether the application contains patentable subject matter",
        "To determine whether the subject matter could affect national defense or security if publicly disclosed",
        "To identify applications eligible for expedited examination",
        "To verify the citizenship of the applicant",
      ],
      correctIndex: 1,
      explanation:
        "Under MPEP 115, patent applications are screened to determine whether their subject matter could affect national defense or security if disclosed publicly through the patent system.",
    },
  },
  {
    id: "z4-layer-2",
    conceptId: "nsr-screening",
    zoneSlug: "the-classified-wing",
    layerNumber: 2,
    totalLayers: 4,
    ruleText:
      "The national security screening process serves three distinct purposes: (1) determining whether a secrecy order should be imposed under 35 USC 181, (2) evaluating whether the application raises export control concerns, and (3) identifying whether the government has a property interest in the invention.",
    highlightedAddition:
      "three purposes: secrecy order determination, export control review, government property interest",
    question: {
      stem: "Which of the following is NOT one of the three purposes of national security screening?",
      options: [
        "Determining whether a secrecy order should be imposed",
        "Evaluating export control concerns",
        "Identifying whether the government has a property interest in the invention",
        "Assessing whether the applicant qualifies for a small entity fee discount",
      ],
      correctIndex: 3,
      explanation:
        "The three purposes of national security screening are: (1) secrecy order determination under 35 USC 181, (2) export control review, and (3) government property interest identification. Fee discounts are unrelated to security screening.",
    },
  },
  {
    id: "z4-layer-3",
    conceptId: "nsr-screening",
    zoneSlug: "the-classified-wing",
    layerNumber: 3,
    totalLayers: 4,
    ruleText:
      "The authority for national security screening derives from 35 USC 181, which empowers the Commissioner to order that an invention be kept secret and to withhold the grant of a patent whenever publication or disclosure would be detrimental to the national security. This statute is the foundation of the entire screening program.",
    highlightedAddition:
      "35 USC 181 ... order that an invention be kept secret ... withhold the grant of a patent",
    question: {
      stem: "What statute provides the foundation for the national security screening program?",
      options: [
        "35 USC 101",
        "35 USC 102",
        "35 USC 181",
        "35 USC 271",
      ],
      correctIndex: 2,
      explanation:
        "35 USC 181 is the statutory basis for the national security screening program, empowering the Commissioner to order secrecy and withhold patent grants when disclosure would be detrimental to national security.",
    },
  },
  {
    id: "z4-layer-4",
    conceptId: "nsr-screening",
    zoneSlug: "the-classified-wing",
    layerNumber: 4,
    totalLayers: 4,
    ruleText:
      "Applications with national security implications may receive a secrecy order, which prevents the application from being published and the patent from being granted until the order is lifted. The screening process is the initial step that determines whether such an order is warranted, based on the subject matter of the claims and specification.",
    highlightedAddition:
      "secrecy order prevents publication and patent grant ... screening is the initial step",
    question: {
      stem: "What is the practical effect of a secrecy order resulting from the screening process?",
      options: [
        "The application is immediately abandoned",
        "The application cannot be published and the patent cannot be granted until the order is lifted",
        "The applicant must refile the application with redacted claims",
        "The application is transferred to a military patent office",
      ],
      correctIndex: 1,
      explanation:
        "A secrecy order prevents publication of the application and grant of the patent until the order is lifted. The screening process under MPEP 115 is the initial step that determines whether such an order is warranted.",
    },
  },

  // --- Concept Group 2: Filing Classified Applications (nsr-filing-methods) ---
  {
    id: "z4-layer-5",
    conceptId: "nsr-filing-methods",
    zoneSlug: "the-classified-wing",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "Patent applications that contain classified national security information cannot be filed through normal channels. They must not be filed electronically through the USPTO's electronic filing system (EFS-Web/Patent Center), by mail, or by any other standard filing method. Instead, classified applications require special handling procedures.",
    highlightedAddition:
      "cannot be filed electronically, by mail, or by standard filing methods",
    question: {
      stem: "Can a classified patent application be filed electronically through EFS-Web or Patent Center?",
      options: [
        "Yes, using a special encrypted upload portal",
        "Yes, but only if the applicant has a security clearance",
        "No — classified applications cannot be filed through normal electronic, mail, or standard filing methods",
        "Yes, as long as the classified portions are redacted before upload",
      ],
      correctIndex: 2,
      explanation:
        "Classified patent applications cannot be filed electronically, by mail, or through any standard filing method. They require special handling procedures due to the sensitive nature of their contents.",
    },
  },
  {
    id: "z4-layer-6",
    conceptId: "nsr-filing-methods",
    zoneSlug: "the-classified-wing",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "Classified patent applications must be hand-carried to the Licensing and Review (L&R) division of the USPTO. The physical delivery ensures that classified material is not transmitted through unsecured channels. The person delivering the application must have the appropriate security clearance to handle the classified material.",
    highlightedAddition:
      "hand-carried to Licensing and Review (L&R) ... physical delivery ... appropriate security clearance",
    question: {
      stem: "How must a classified patent application be delivered to the USPTO?",
      options: [
        "By certified mail in a sealed envelope marked 'CLASSIFIED'",
        "Through a secure government courier service to the main filing window",
        "Hand-carried to the Licensing and Review (L&R) division by a person with appropriate security clearance",
        "Filed electronically through a classified government network",
      ],
      correctIndex: 2,
      explanation:
        "Classified applications must be hand-carried to the Licensing and Review (L&R) division. Physical delivery by a person with appropriate security clearance ensures classified material is never transmitted through unsecured channels.",
    },
  },
  {
    id: "z4-layer-7",
    conceptId: "nsr-filing-methods",
    zoneSlug: "the-classified-wing",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "The Licensing and Review (L&R) office is the specialized division within the USPTO responsible for handling all classified patent applications, foreign filing licenses, and matters related to national security screening. L&R maintains the secure facilities necessary for storing and processing classified material, and it coordinates with defense and intelligence agencies on screening decisions.",
    highlightedAddition:
      "L&R handles classified applications, foreign filing licenses, and national security screening ... secure facilities",
    question: {
      stem: "What is the primary function of the Licensing and Review (L&R) division?",
      options: [
        "Examining patent applications for patentability under 35 USC 101-103",
        "Handling classified applications, foreign filing licenses, and national security screening coordination",
        "Processing patent maintenance fee payments",
        "Managing the publication of issued patents",
      ],
      correctIndex: 1,
      explanation:
        "The Licensing and Review (L&R) division handles classified patent applications, processes foreign filing licenses, and coordinates with defense and intelligence agencies on national security screening decisions. It maintains the secure facilities required for classified material.",
    },
  },

  // --- Concept Group 3: Security Clearance Requirements (nsr-clearance) ---
  {
    id: "z4-layer-8",
    conceptId: "nsr-clearance",
    zoneSlug: "the-classified-wing",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "Patent practitioners who handle classified patent applications must possess an appropriate security clearance. This includes attorneys, agents, and any support staff who will have access to the classified subject matter. Without proper clearance, a practitioner cannot represent a client in a classified application.",
    highlightedAddition:
      "practitioners must possess appropriate security clearance ... attorneys, agents, and support staff",
    question: {
      stem: "Who must possess a security clearance when handling classified patent applications?",
      options: [
        "Only the lead patent attorney on the case",
        "Only the USPTO examiner assigned to the application",
        "All practitioners and support staff who will have access to the classified subject matter",
        "Only government employees involved in the process",
      ],
      correctIndex: 2,
      explanation:
        "All practitioners (attorneys, agents) and support staff who will access the classified subject matter must possess appropriate security clearance. Without it, a practitioner cannot represent a client in a classified application.",
    },
  },
  {
    id: "z4-layer-9",
    conceptId: "nsr-clearance",
    zoneSlug: "the-classified-wing",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "Security clearance levels correspond to the classification level of the material: Confidential, Secret, or Top Secret. A practitioner must hold a clearance at or above the classification level of the application. For example, a practitioner with a Secret clearance can handle Confidential and Secret applications but not Top Secret applications.",
    highlightedAddition:
      "Confidential, Secret, or Top Secret ... clearance must be at or above the classification level",
    question: {
      stem: "A patent attorney holds a Secret-level security clearance. Which classified applications can they handle?",
      options: [
        "Only Secret-level applications",
        "Confidential and Secret applications, but not Top Secret",
        "All levels including Top Secret, because Secret clearance grants broad access",
        "None — only Top Secret clearance holders can handle any classified application",
      ],
      correctIndex: 1,
      explanation:
        "A practitioner with Secret clearance can handle applications classified at or below that level — i.e., Confidential and Secret. Top Secret applications require Top Secret clearance.",
    },
  },
  {
    id: "z4-layer-10",
    conceptId: "nsr-clearance",
    zoneSlug: "the-classified-wing",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "Practitioners handling classified applications have affirmative obligations to safeguard the classified information. They must store classified documents in approved security containers, follow proper transmission procedures, and report any security breaches. Failure to comply with these obligations can result in loss of clearance, disciplinary action, and criminal penalties.",
    highlightedAddition:
      "affirmative obligations to safeguard ... approved containers, proper transmission, report breaches",
    question: {
      stem: "What are the obligations of a practitioner who handles classified patent applications?",
      options: [
        "Simply keeping the documents in a locked office drawer",
        "Storing in approved security containers, following proper transmission procedures, and reporting any breaches",
        "Shredding all documents after the application is filed",
        "Only discussing the application on encrypted phone calls",
      ],
      correctIndex: 1,
      explanation:
        "Practitioners must store classified documents in approved security containers, follow proper transmission procedures, and report any security breaches. Failure to comply can lead to loss of clearance, disciplinary action, and criminal penalties.",
    },
  },

  // --- Concept Group 4: L&R Codes and Processing (nsr-lr-codes) ---
  {
    id: "z4-layer-11",
    conceptId: "nsr-lr-codes",
    zoneSlug: "the-classified-wing",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "The Licensing and Review (L&R) division assigns codes to patent applications to indicate their national security screening status and outcome. These L&R codes track where an application is in the screening process and what actions have been taken, serving as internal markers for the USPTO and screening agencies.",
    highlightedAddition:
      "L&R codes indicate screening status and outcome ... track where an application is in the process",
    question: {
      stem: "What is the purpose of L&R codes assigned to patent applications?",
      options: [
        "To indicate the art unit assigned to examine the application",
        "To indicate the national security screening status and outcome of the application",
        "To indicate the priority date of the application",
        "To indicate whether the applicant has paid the filing fee",
      ],
      correctIndex: 1,
      explanation:
        "L&R codes are assigned by the Licensing and Review division to indicate the national security screening status and outcome of a patent application, tracking its progress through the screening process.",
    },
  },
  {
    id: "z4-layer-12",
    conceptId: "nsr-lr-codes",
    zoneSlug: "the-classified-wing",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "L&R codes reflect various stages of screening: an application may be coded as awaiting screening, currently under review by one or more agencies, cleared with no security concerns, or flagged for a secrecy order. The codes allow the USPTO to manage the flow of applications through the screening pipeline and ensure that no application proceeds to publication or grant without completing the security review.",
    highlightedAddition:
      "awaiting screening, under review, cleared, or flagged for secrecy order ... no publication or grant without completing review",
    question: {
      stem: "What does it mean when an application's L&R code indicates it has been 'cleared'?",
      options: [
        "The application has been approved for patent grant",
        "The application has completed national security screening with no security concerns identified",
        "The application has been assigned to an examiner",
        "The applicant's security clearance has been verified",
      ],
      correctIndex: 1,
      explanation:
        "A 'cleared' L&R code indicates that the application has completed national security screening and no security concerns were identified, allowing the application to proceed normally through prosecution.",
    },
  },
  {
    id: "z4-layer-13",
    conceptId: "nsr-lr-codes",
    zoneSlug: "the-classified-wing",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "The L&R processing system coordinates between the USPTO and multiple external agencies. When an application is flagged during screening, L&R facilitates communication between the examiner, the applicant, and the relevant government agency. If a secrecy order is imposed, L&R updates the code and ensures the application is handled under the appropriate security protocols going forward.",
    highlightedAddition:
      "coordinates between USPTO and external agencies ... facilitates communication ... updates code upon secrecy order",
    question: {
      stem: "When an application is flagged during national security screening, what role does L&R play?",
      options: [
        "L&R independently decides whether to impose a secrecy order",
        "L&R facilitates communication between the examiner, applicant, and relevant government agency",
        "L&R transfers the application to a military patent court",
        "L&R automatically rejects the application on national security grounds",
      ],
      correctIndex: 1,
      explanation:
        "L&R serves as a coordinator, facilitating communication between the examiner, the applicant, and the relevant government agency when an application is flagged. L&R does not independently decide on secrecy orders; that authority rests with the screening agencies and the Commissioner.",
    },
  },

  // --- Concept Group 5: Three Agency Screening Categories (nsr-three-screens) ---
  {
    id: "z4-layer-14",
    conceptId: "nsr-three-screens",
    zoneSlug: "the-classified-wing",
    layerNumber: 1,
    totalLayers: 4,
    ruleText:
      "Patent applications are screened by three categories of government agencies, each responsible for different types of technology. The three screening categories are: (1) defense agencies, (2) the Department of Energy (DOE), and (3) the National Aeronautics and Space Administration (NASA). Each has distinct jurisdictional triggers based on the subject matter of the application.",
    highlightedAddition:
      "three categories: defense agencies, DOE, and NASA ... distinct jurisdictional triggers",
    question: {
      stem: "Which three categories of government agencies screen patent applications for national security?",
      options: [
        "FBI, CIA, and NSA",
        "Defense agencies, DOE, and NASA",
        "State Department, Commerce Department, and Treasury Department",
        "DARPA, IARPA, and the National Science Foundation",
      ],
      correctIndex: 1,
      explanation:
        "The three screening categories are defense agencies (DoD, NSA, etc.), the Department of Energy (DOE), and NASA. Each screens applications based on different jurisdictional triggers related to their area of expertise.",
    },
  },
  {
    id: "z4-layer-15",
    conceptId: "nsr-three-screens",
    zoneSlug: "the-classified-wing",
    layerNumber: 2,
    totalLayers: 4,
    ruleText:
      "Defense agencies — including the Department of Defense (DoD), the National Security Agency (NSA), and other defense and intelligence organizations — screen applications that relate to military technology, weapons systems, cryptography, intelligence methods, and other subject matter with potential defense implications. This is the broadest category and captures the largest number of applications.",
    highlightedAddition:
      "DoD, NSA, and other defense organizations ... military technology, weapons, cryptography, intelligence",
    question: {
      stem: "Which types of patent applications are screened by defense agencies such as the DoD and NSA?",
      options: [
        "Only applications filed by military personnel",
        "Applications relating to military technology, weapons systems, cryptography, and intelligence methods",
        "Only applications that explicitly reference national defense in the claims",
        "All applications filed in technology classes above Class 700",
      ],
      correctIndex: 1,
      explanation:
        "Defense agencies screen applications involving military technology, weapons systems, cryptography, intelligence methods, and other subject matter with defense implications. This is the broadest screening category.",
    },
  },
  {
    id: "z4-layer-16",
    conceptId: "nsr-three-screens",
    zoneSlug: "the-classified-wing",
    layerNumber: 3,
    totalLayers: 4,
    ruleText:
      "The Department of Energy (DOE) screens applications that relate to atomic energy and nuclear technology. Under the Atomic Energy Act of 1954 (42 USC 2181), inventions useful solely in the utilization of special nuclear material or atomic energy in an atomic weapon are subject to mandatory DOE review. This screening is particularly significant because certain nuclear-related inventions may be born classified under the Atomic Energy Act.",
    highlightedAddition:
      "DOE screens atomic energy and nuclear technology ... Atomic Energy Act of 1954 ... born classified",
    question: {
      stem: "Why is DOE's screening of nuclear-related patent applications particularly significant?",
      options: [
        "Because DOE has the largest screening budget",
        "Because certain nuclear-related inventions may be born classified under the Atomic Energy Act",
        "Because DOE screens more applications than any other agency",
        "Because DOE can grant patents directly without USPTO involvement",
      ],
      correctIndex: 1,
      explanation:
        "DOE screening is particularly significant because certain nuclear-related inventions may be 'born classified' under the Atomic Energy Act of 1954, meaning they are automatically classified at the moment of conception, regardless of whether a formal secrecy order is issued.",
    },
  },
  {
    id: "z4-layer-17",
    conceptId: "nsr-three-screens",
    zoneSlug: "the-classified-wing",
    layerNumber: 4,
    totalLayers: 4,
    ruleText:
      "NASA screens applications that relate to space technology, including propulsion systems, satellite technology, space launch vehicles, and other aerospace innovations. Under the National Aeronautics and Space Act, NASA has authority to review patent applications involving space-related inventions to determine whether they have national security implications or whether the government has a property interest in the invention due to government-funded research.",
    highlightedAddition:
      "NASA screens space technology ... propulsion, satellites, launch vehicles ... government property interest from funded research",
    question: {
      stem: "What triggers NASA screening of a patent application?",
      options: [
        "Any application filed by an engineer who has ever worked for NASA",
        "Applications relating to space technology such as propulsion, satellites, and launch vehicles",
        "Only applications that cite NASA publications as prior art",
        "Applications that claim inventions made on the International Space Station",
      ],
      correctIndex: 1,
      explanation:
        "NASA screens applications involving space technology, including propulsion systems, satellite technology, space launch vehicles, and other aerospace innovations. The trigger is the subject matter of the invention, not the identity of the applicant.",
    },
  },

  // --- Concept Group 6: Timing of Screening in Prosecution (nsr-timing) ---
  {
    id: "z4-layer-18",
    conceptId: "nsr-timing",
    zoneSlug: "the-classified-wing",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "National security screening typically occurs early in the prosecution timeline, shortly after the application is filed. The screening takes place before substantive examination begins — that is, before the examiner conducts a prior art search or issues an Office Action on the merits of patentability.",
    highlightedAddition:
      "early in prosecution ... before substantive examination ... before prior art search or Office Action",
    question: {
      stem: "When does national security screening occur relative to substantive examination?",
      options: [
        "After the examiner issues the first Office Action",
        "Before substantive examination, shortly after filing",
        "Simultaneously with the prior art search",
        "Only after the applicant responds to the first Office Action",
      ],
      correctIndex: 1,
      explanation:
        "National security screening typically occurs early in prosecution, shortly after filing and before substantive examination begins. This ensures that security-sensitive applications are identified before any public disclosure through the examination process.",
    },
  },
  {
    id: "z4-layer-19",
    conceptId: "nsr-timing",
    zoneSlug: "the-classified-wing",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "The early timing of screening is critical because 35 USC 122(b) requires publication of most patent applications 18 months after the earliest filing date. If an application with national security implications were not screened before this publication deadline, sensitive information could be publicly disclosed. Screening must be completed — or a secrecy order imposed — before the 18-month publication date.",
    highlightedAddition:
      "critical because of 18-month publication ... must be completed before publication date",
    question: {
      stem: "Why must national security screening be completed early in prosecution?",
      options: [
        "Because the examiner cannot begin work until screening is complete",
        "Because applications are automatically published at 18 months, and screening must be done before then to prevent disclosure of sensitive information",
        "Because the applicant must know the screening result before paying examination fees",
        "Because foreign filing licenses cannot be issued until screening is done",
      ],
      correctIndex: 1,
      explanation:
        "Early screening is critical because 35 USC 122(b) mandates publication at 18 months. Without timely screening, sensitive subject matter could be publicly disclosed. Screening must be completed or a secrecy order imposed before the publication date.",
    },
  },
  {
    id: "z4-layer-20",
    conceptId: "nsr-timing",
    zoneSlug: "the-classified-wing",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "If a secrecy order is imposed as a result of screening, the application's prosecution timeline is affected but not halted entirely. Examination can still proceed under secure conditions (per MPEP 130), but publication under 35 USC 122(b) is suspended, and the patent cannot be granted until the secrecy order is lifted. The screening result thus determines whether the application follows the normal or classified prosecution path.",
    highlightedAddition:
      "examination proceeds under secure conditions ... publication suspended ... patent cannot grant until order lifted",
    question: {
      stem: "What happens to the prosecution of an application after a secrecy order is imposed following screening?",
      options: [
        "Prosecution is completely halted until the order is lifted",
        "Examination can proceed under secure conditions, but publication is suspended and the patent cannot be granted until the order is lifted",
        "The application is automatically abandoned and must be refiled after the order is lifted",
        "Prosecution continues normally with no changes to the timeline",
      ],
      correctIndex: 1,
      explanation:
        "After a secrecy order is imposed, examination can proceed under secure conditions, but publication under 35 USC 122(b) is suspended and the patent cannot be granted until the order is lifted. The screening result determines whether the application follows the normal or classified prosecution path.",
    },
  },
];

// --- ABSORB PHASE: Analogies ---

export const ZONE4_ANALOGIES: AnalogyMapping[] = [
  {
    id: "z4-analogy-1",
    conceptId: "nsr-screening",
    zoneSlug: "the-classified-wing",
    analogyText:
      "National security screening is like airport security before boarding a flight. Every passenger (patent application) must pass through a security checkpoint (screening) before entering the terminal (prosecution). There are three things security is looking for: prohibited items (secrecy order triggers), restricted goods that need special export permits (export control), and lost property that belongs to the airline (government property interest). If something is flagged, the passenger cannot proceed to the gate until the issue is resolved.",
    mappings: [
      {
        analogyTerm: "Airport security checkpoint",
        formalTerm: "National security screening under MPEP 115",
      },
      {
        analogyTerm: "Every passenger must pass through",
        formalTerm: "All U.S.-filed patent applications are screened",
      },
      {
        analogyTerm: "Prohibited items",
        formalTerm: "Subject matter warranting a secrecy order under 35 USC 181",
      },
      {
        analogyTerm: "Restricted goods needing export permits",
        formalTerm: "Export control review for controlled technology",
      },
      {
        analogyTerm: "Lost property belonging to the airline",
        formalTerm: "Government property interest in the invention",
      },
      {
        analogyTerm: "Passenger cannot proceed to gate",
        formalTerm: "Application cannot proceed to publication or grant until screening clears",
      },
    ],
    followUp: {
      stem: "In the airport analogy, what happens if a 'prohibited item' (secrecy trigger) is found during screening?",
      options: [
        "The passenger is sent home and cannot rebook (application is abandoned)",
        "The passenger is detained and cannot board until cleared (secrecy order imposed, patent withheld until order lifted)",
        "The passenger is moved to a faster security line (expedited examination)",
        "The prohibited item is confiscated but the passenger continues (claims are deleted but application proceeds)",
      ],
      correctIndex: 1,
      explanation:
        "When screening identifies a secrecy trigger, a secrecy order is imposed — like detaining the passenger. The application cannot be published or granted (the passenger cannot board) until the order is lifted (cleared by security). The application is not abandoned; it is held in a secure state.",
    },
  },
  {
    id: "z4-analogy-2",
    conceptId: "nsr-three-screens",
    zoneSlug: "the-classified-wing",
    analogyText:
      "The three screening agencies are like three specialized inspectors at a building inspection. The defense agencies (DoD, NSA) are like the structural engineer who checks the foundation and load-bearing walls — they handle the broadest range of concerns including military technology, weapons, and cryptography. The DOE is like the electrical inspector who specifically checks wiring and power systems — they focus exclusively on atomic energy and nuclear technology, where mistakes can be catastrophic and some hazards are 'inherently dangerous' (born classified). NASA is like the plumbing inspector for buildings with unusual systems — they inspect space technology, propulsion, and satellites, and also check whether the building was constructed with government-supplied materials (government property interest from funded research).",
    mappings: [
      {
        analogyTerm: "Structural engineer (broadest inspection)",
        formalTerm: "Defense agencies (DoD, NSA) — broadest screening category",
      },
      {
        analogyTerm: "Foundation and load-bearing walls",
        formalTerm: "Military technology, weapons, cryptography, intelligence",
      },
      {
        analogyTerm: "Electrical inspector for wiring/power",
        formalTerm: "DOE screening for atomic energy and nuclear technology",
      },
      {
        analogyTerm: "Inherently dangerous hazards",
        formalTerm: "Born classified material under the Atomic Energy Act",
      },
      {
        analogyTerm: "Plumbing inspector for unusual systems",
        formalTerm: "NASA screening for space technology",
      },
      {
        analogyTerm: "Government-supplied materials",
        formalTerm: "Government property interest from federally funded research",
      },
    ],
    followUp: {
      stem: "In the building inspection analogy, why is the 'electrical inspector' (DOE) unique compared to the other inspectors?",
      options: [
        "Because the electrical inspector has the largest budget",
        "Because some electrical hazards are 'inherently dangerous' (born classified) and require no formal finding to be restricted",
        "Because the electrical inspector works faster than the others",
        "Because electrical inspections are optional while the others are mandatory",
      ],
      correctIndex: 1,
      explanation:
        "DOE is unique because under the Atomic Energy Act, certain nuclear-related inventions are 'born classified' — automatically classified at the moment of conception. This is analogous to electrical hazards that are inherently dangerous, requiring no formal finding to be treated as restricted.",
    },
  },
  {
    id: "z4-analogy-3",
    conceptId: "nsr-filing-methods",
    zoneSlug: "the-classified-wing",
    analogyText:
      "Filing a classified patent application is like depositing a priceless diamond at a high-security vault. You cannot simply mail it (electronic or postal filing), drop it in a night deposit box (standard filing window), or hand it to a regular bank teller (general USPTO staff). Instead, you must personally walk the diamond into a specially guarded vault room (L&R division), show your security badge (security clearance), and hand it directly to the vault manager (L&R staff with clearance). The vault then assigns a tracking code (L&R code) so everyone knows the diamond's status without opening the vault.",
    mappings: [
      {
        analogyTerm: "Priceless diamond",
        formalTerm: "Classified patent application",
      },
      {
        analogyTerm: "Cannot mail or use night deposit box",
        formalTerm: "Cannot file electronically or by mail",
      },
      {
        analogyTerm: "Specially guarded vault room",
        formalTerm: "Licensing and Review (L&R) division with secure facilities",
      },
      {
        analogyTerm: "Show your security badge",
        formalTerm: "Practitioner must have appropriate security clearance",
      },
      {
        analogyTerm: "Vault manager",
        formalTerm: "L&R staff with classified material handling authority",
      },
      {
        analogyTerm: "Tracking code",
        formalTerm: "L&R code indicating screening status and outcome",
      },
    ],
    followUp: {
      stem: "In the vault analogy, why can't the diamond (classified application) be mailed?",
      options: [
        "Because it would be too expensive to insure",
        "Because the mail system is an unsecured channel and classified material must not be transmitted through unsecured channels",
        "Because the mail system is too slow for patent filings",
        "Because only the vault manager is authorized to accept deposits",
      ],
      correctIndex: 1,
      explanation:
        "Classified material cannot be transmitted through unsecured channels such as the mail or electronic filing systems. The hand-carry requirement ensures the classified application is physically delivered to the secure L&R division without risk of interception or exposure.",
    },
  },
];

// --- ABSORB PHASE: Visual Timelines ---

export const ZONE4_TIMELINES: VisualTimelineData[] = [
  {
    id: "z4-timeline-1",
    conceptId: "nsr-timing",
    zoneSlug: "the-classified-wing",
    title: "National Security Screening in the Patent Prosecution Timeline",
    description:
      "How national security screening fits into the overall patent prosecution process, from filing through grant, and where a secrecy order can divert the application onto the classified prosecution track.",
    startLabel: "Application Filed",
    endLabel: "Patent Granted or Secrecy Maintained",
    milestones: [
      {
        id: "z4-t1-m1",
        label: "Application filed at USPTO",
        description:
          "The application is received by the USPTO. If it contains classified material, it is hand-carried to the L&R division. Unclassified applications enter the normal filing pipeline.",
        position: 0,
      },
      {
        id: "z4-t1-m2",
        label: "L&R assigns screening code",
        description:
          "The Licensing and Review division assigns an L&R code and routes the application to the appropriate screening agencies (defense agencies, DOE, and/or NASA) based on subject matter.",
        position: 10,
      },
      {
        id: "z4-t1-m3",
        label: "Agency screening begins",
        description:
          "Defense agencies, DOE, and/or NASA review the application for secrecy order triggers, export control issues, and government property interests. This occurs before substantive examination.",
        position: 25,
      },
      {
        id: "z4-t1-m4",
        label: "Screening decision reached",
        description:
          "Agencies report screening results to L&R. The application is either cleared (no security concerns) or flagged for a secrecy order. L&R updates the application's code accordingly.",
        position: 40,
      },
      {
        id: "z4-t1-m5",
        label: "If cleared: normal prosecution proceeds",
        description:
          "Application enters the regular examination queue. Examiner conducts prior art search and issues Office Actions. Application proceeds toward publication at 18 months and eventual grant.",
        position: 55,
      },
      {
        id: "z4-t1-m6",
        label: "If flagged: secrecy order imposed",
        description:
          "Commissioner issues a secrecy order under 35 USC 181. Publication under 35 USC 122(b) is suspended. The application enters the classified prosecution track.",
        position: 70,
      },
      {
        id: "z4-t1-m7",
        label: "Classified examination (if under secrecy order)",
        description:
          "Examination proceeds under secure conditions per MPEP 130. All communications use secure channels. Application does not appear in public databases.",
        position: 85,
      },
      {
        id: "z4-t1-m8",
        label: "Outcome: grant or suspended allowability",
        description:
          "Cleared applications receive a patent grant normally. Applications under secrecy order may reach allowability but the patent is not granted until the secrecy order is lifted.",
        position: 100,
      },
    ],
  },
  {
    id: "z4-timeline-2",
    conceptId: "nsr-three-screens",
    zoneSlug: "the-classified-wing",
    title: "Three-Agency Screening Process",
    description:
      "How an application moves through the three parallel screening tracks — defense agencies, DOE, and NASA — and how the results are consolidated by the L&R division.",
    startLabel: "Application Received by L&R",
    endLabel: "Consolidated Screening Decision",
    milestones: [
      {
        id: "z4-t2-m1",
        label: "L&R receives application",
        description:
          "L&R evaluates the subject matter of the application to determine which screening agencies should review it. Applications may be routed to one, two, or all three categories.",
        position: 0,
      },
      {
        id: "z4-t2-m2",
        label: "Defense agency screening",
        description:
          "DoD, NSA, and other defense organizations review applications relating to military technology, weapons systems, cryptography, and intelligence methods. This is the broadest screening category.",
        position: 20,
      },
      {
        id: "z4-t2-m3",
        label: "DOE screening",
        description:
          "The Department of Energy reviews applications relating to atomic energy and nuclear technology under the Atomic Energy Act of 1954. Some nuclear inventions may be born classified.",
        position: 40,
      },
      {
        id: "z4-t2-m4",
        label: "NASA screening",
        description:
          "NASA reviews applications relating to space technology, including propulsion, satellites, and launch vehicles. NASA also checks for government property interests from federally funded research.",
        position: 60,
      },
      {
        id: "z4-t2-m5",
        label: "Agency results reported to L&R",
        description:
          "Each screening agency reports its findings to L&R. Findings may include: no concerns, recommendation for secrecy order, export control flag, or government property interest claim.",
        position: 80,
      },
      {
        id: "z4-t2-m6",
        label: "L&R consolidates and assigns final code",
        description:
          "L&R consolidates all agency findings and assigns a final screening code. If any agency recommends a secrecy order, the Commissioner may impose one. The application either proceeds to normal prosecution or enters the classified track.",
        position: 100,
      },
    ],
  },
];
