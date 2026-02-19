import { RuleLayer, AnalogyMapping, VisualTimelineData } from "@/types";

// ============================================================
// Zone 6: The Border — Foreign Filing Licenses
// MPEP Section 140 | 35 USC 182, 184-187 | 37 CFR 5.11-5.25
// ============================================================

// --- ABSORB PHASE: Rule Layers ---

export const ZONE6_RULE_LAYERS: RuleLayer[] = [
  // --- Concept Group 1: The Basic Rule (35 USC 184) ---
  {
    id: "z6-layer-1",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    layerNumber: 1,
    totalLayers: 5,
    ruleText:
      "An applicant who files a patent application in the United States may not file a corresponding application in a foreign country without authorization from the USPTO.",
    highlightedAddition:
      "may not file a corresponding application in a foreign country without authorization",
    question: {
      stem: "Can a US patent applicant freely file the same invention in another country?",
      options: [
        "Yes, there are no restrictions on foreign filing",
        "No, authorization from the USPTO is required before filing abroad",
        "Only if the foreign country has a treaty with the US",
        "Only after the US patent is granted",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 184, an applicant cannot file a patent application in a foreign country without authorization (a foreign filing license) from the Commissioner of Patents.",
    },
  },
  {
    id: "z6-layer-2",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    layerNumber: 2,
    totalLayers: 5,
    ruleText:
      "An applicant may not file abroad without a license within 6 months from the date of filing the US application.",
    highlightedAddition: "within 6 months from the date of filing",
    question: {
      stem: "How long must an applicant wait before they can file abroad without a license?",
      options: ["3 months", "6 months", "12 months", "18 months"],
      correctIndex: 1,
      explanation:
        "The 6-month rule under 35 USC 184: applicants cannot file abroad without a license within 6 months of the US filing date.",
    },
  },
  {
    id: "z6-layer-3",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    layerNumber: 3,
    totalLayers: 5,
    ruleText:
      "After 6 months, filing abroad is permitted WITHOUT a license — unless a secrecy order has been imposed on the application.",
    highlightedAddition: "unless a secrecy order has been imposed",
    question: {
      stem: "After 6 months, what could still prevent an applicant from filing abroad without a license?",
      options: [
        "A pending office action",
        "A secrecy order on the application",
        "A missing filing fee payment",
        "Nothing — the 6-month rule is absolute",
      ],
      correctIndex: 1,
      explanation:
        "The 6-month safe harbor is overridden if a secrecy order is in effect. A secrecy order immediately revokes foreign filing authorization.",
    },
  },
  {
    id: "z6-layer-4",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    layerNumber: 4,
    totalLayers: 5,
    ruleText:
      "Filing a US application automatically constitutes a petition for a foreign filing license under 37 CFR 5.12. The filing receipt indicates whether the license was granted.",
    highlightedAddition:
      "automatically constitutes a petition for a foreign filing license",
    question: {
      stem: "How does an applicant petition for a foreign filing license?",
      options: [
        "By filing a separate petition form with the USPTO",
        "Automatically — filing a US application is itself a petition",
        "By requesting it from the examiner during prosecution",
        "By paying a special foreign filing license fee",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 5.12, the act of filing a US application implicitly constitutes a petition for a foreign filing license. The filing receipt indicates the license status.",
    },
  },
  {
    id: "z6-layer-5",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    layerNumber: 5,
    totalLayers: 5,
    ruleText:
      "Licenses are typically granted within approximately 3 business days of filing, after the security screening is completed.",
    highlightedAddition: "approximately 3 business days",
    question: {
      stem: "How quickly are foreign filing licenses typically granted when there are no security concerns?",
      options: [
        "Immediately upon filing",
        "Within approximately 3 business days",
        "Within 30 days",
        "Within 6 months",
      ],
      correctIndex: 1,
      explanation:
        "Security screening is typically completed and licenses granted within about 3 business days when no national security concerns arise.",
    },
  },

  // --- Concept Group 2: License Scope ---
  {
    id: "z6-layer-6",
    conceptId: "ffl-license-scope",
    zoneSlug: "the-border",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "Foreign filing licenses come in two scope levels: broad scope and narrow scope.",
    highlightedAddition: "broad scope and narrow scope",
    question: {
      stem: "How many scope levels exist for foreign filing licenses?",
      options: [
        "One — all licenses have the same scope",
        "Two — broad scope and narrow scope",
        "Three — narrow, standard, and broad",
        "Unlimited — scope is custom per application",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 5.15, foreign filing licenses are granted in two scope levels: broad (5.15(a)) and narrow (5.15(b)).",
    },
  },
  {
    id: "z6-layer-7",
    conceptId: "ffl-license-scope",
    zoneSlug: "the-border",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "Broad scope (37 CFR 5.15(a)) permits amendments and modifications to the foreign application, as long as they don't change the general nature of the invention.",
    highlightedAddition:
      "permits amendments and modifications ... don't change the general nature",
    question: {
      stem: "Under a broad-scope license, can the applicant modify the foreign application?",
      options: [
        "No — the foreign application must be identical to the US application",
        "Yes — amendments are permitted as long as the general nature is unchanged",
        "Yes — any changes are permitted without restriction",
        "Only with additional approval from the USPTO",
      ],
      correctIndex: 1,
      explanation:
        "Broad scope under 37 CFR 5.15(a) allows amendments and modifications without altering the general nature of the invention.",
    },
  },
  {
    id: "z6-layer-8",
    conceptId: "ffl-license-scope",
    zoneSlug: "the-border",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "Narrow scope (37 CFR 5.15(b)) restricts the foreign filing to only the specific materials that were reviewed by defense agencies.",
    highlightedAddition:
      "restricts to only the specific materials reviewed by defense agencies",
    question: {
      stem: "What is the key restriction of a narrow-scope foreign filing license?",
      options: [
        "Filing is limited to only certain countries",
        "Filing must occur within 30 days of license grant",
        "Only the specific materials reviewed by defense agencies can be filed",
        "The application cannot include claims",
      ],
      correctIndex: 2,
      explanation:
        "Narrow scope under 37 CFR 5.15(b) restricts the foreign filing to only the materials that were specifically reviewed by defense agencies.",
    },
  },

  // --- Concept Group 3: Penalties ---
  {
    id: "z6-layer-9",
    conceptId: "ffl-penalties",
    zoneSlug: "the-border",
    layerNumber: 1,
    totalLayers: 4,
    ruleText:
      "Filing abroad without a required license can result in the patent being barred — meaning any resulting US patent is invalid under 35 USC 185.",
    highlightedAddition: "patent is invalid under 35 USC 185",
    question: {
      stem: "What happens to a US patent if the applicant filed abroad without the required license?",
      options: [
        "The patent proceeds normally",
        "The patent is barred/invalid under 35 USC 185",
        "The patent issues but with reduced claims",
        "A fine is imposed but the patent is unaffected",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 185, a patent shall be invalid if obtained based on an application that was filed abroad without the required foreign filing license.",
    },
  },
  {
    id: "z6-layer-10",
    conceptId: "ffl-penalties",
    zoneSlug: "the-border",
    layerNumber: 2,
    totalLayers: 4,
    ruleText:
      "There is an exception: the patent is not barred if the unauthorized foreign filing was through error, and the subject matter was not under a secrecy order or required inspection under 35 USC 181.",
    highlightedAddition:
      "exception: through error, and not under secrecy order",
    question: {
      stem: "When is a patent NOT barred despite unauthorized foreign filing?",
      options: [
        "When the applicant pays a penalty fee",
        "When the foreign application is withdrawn within 30 days",
        "When the filing was through error and doesn't involve restricted subject matter",
        "When the applicant is a government employee",
      ],
      correctIndex: 2,
      explanation:
        "Under 35 USC 185, the bar does not apply if the failure to obtain a license was through error, and the subject matter was not restricted under 35 USC 181.",
    },
  },
  {
    id: "z6-layer-11",
    conceptId: "ffl-penalties",
    zoneSlug: "the-border",
    layerNumber: 3,
    totalLayers: 4,
    ruleText:
      "If a secrecy order is violated by unauthorized disclosure or foreign filing, the invention may be deemed abandoned under 35 USC 182, forfeiting all claims against the US government.",
    highlightedAddition: "deemed abandoned under 35 USC 182",
    question: {
      stem: "What additional consequence applies when unauthorized foreign filing violates a secrecy order?",
      options: [
        "The application is simply rejected",
        "The invention is deemed abandoned under 35 USC 182",
        "The applicant must refile domestically",
        "The secrecy order is automatically lifted",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 182, disclosure or foreign filing that violates a secrecy order can result in the invention being deemed abandoned, forfeiting all claims against the government.",
    },
  },
  {
    id: "z6-layer-12",
    conceptId: "ffl-penalties",
    zoneSlug: "the-border",
    layerNumber: 4,
    totalLayers: 4,
    ruleText:
      "Criminal penalties under 35 USC 186: willful violations carry a fine of up to $10,000 and imprisonment for up to 2 years.",
    highlightedAddition: "fine up to $10,000 and imprisonment up to 2 years",
    question: {
      stem: "What are the maximum criminal penalties for willful unauthorized foreign filing?",
      options: [
        "$5,000 fine and 1 year imprisonment",
        "$10,000 fine and 2 years imprisonment",
        "$50,000 fine and 5 years imprisonment",
        "$100,000 fine and 10 years imprisonment",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 186, willful violations carry a fine up to $10,000 and imprisonment up to 2 years.",
    },
  },

  // --- Concept Group 4: Retroactive Licenses ---
  {
    id: "z6-layer-13",
    conceptId: "ffl-retroactive",
    zoneSlug: "the-border",
    layerNumber: 1,
    totalLayers: 4,
    ruleText:
      "If an applicant filed abroad without a license through error, they can petition for a retroactive license under 37 CFR 5.25.",
    highlightedAddition: "petition for a retroactive license under 37 CFR 5.25",
    question: {
      stem: "What remedy is available for an applicant who filed abroad without a license through error?",
      options: [
        "No remedy — the filing cannot be corrected",
        "Petition for a retroactive license under 37 CFR 5.25",
        "Withdraw the foreign application within 60 days",
        "File a new US application covering the same subject matter",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 5.25, an applicant may petition for a retroactive foreign filing license when the unauthorized filing was through error.",
    },
  },
  {
    id: "z6-layer-14",
    conceptId: "ffl-retroactive",
    zoneSlug: "the-border",
    layerNumber: 2,
    totalLayers: 4,
    ruleText:
      "The retroactive petition must include: a list of countries where filed, the filing dates, a verified statement that no secrecy order was in effect, and evidence of diligent pursuit after discovering the error.",
    highlightedAddition:
      "countries, dates, verified statement (no secrecy order), diligent pursuit",
    question: {
      stem: "Which of the following is NOT required in a retroactive license petition?",
      options: [
        "A list of countries where filed",
        "A verified statement that no secrecy order was in effect",
        "Evidence of diligent pursuit after discovering the error",
        "A copy of the granted foreign patent",
      ],
      correctIndex: 3,
      explanation:
        "Under 37 CFR 5.25, the petition requires: country list, filing dates, verified statement (no secrecy order), diligent pursuit. A copy of the foreign patent is NOT required.",
    },
  },
  {
    id: "z6-layer-15",
    conceptId: "ffl-retroactive",
    zoneSlug: "the-border",
    layerNumber: 3,
    totalLayers: 4,
    ruleText:
      "If the retroactive petition is denied, the applicant can renew the petition within 30 days of the denial.",
    highlightedAddition: "renew within 30 days",
    question: {
      stem: "What is the deadline for renewing a denied retroactive license petition?",
      options: [
        "14 days",
        "30 days",
        "60 days",
        "6 months",
      ],
      correctIndex: 1,
      explanation:
        "Denied retroactive license petitions may be renewed within 30 days of the denial.",
    },
  },
  {
    id: "z6-layer-16",
    conceptId: "ffl-retroactive",
    zoneSlug: "the-border",
    layerNumber: 4,
    totalLayers: 4,
    ruleText:
      "Alternatively, the denial can be challenged by petition under 37 CFR 1.181.",
    highlightedAddition: "challenged under 37 CFR 1.181",
    question: {
      stem: "Besides renewing within 30 days, how else can a denied retroactive license petition be challenged?",
      options: [
        "Appeal to the Federal Circuit",
        "Petition under 37 CFR 1.181",
        "Request a hearing before the PTAB",
        "File a complaint with the Inspector General",
      ],
      correctIndex: 1,
      explanation:
        "Denials can be challenged via petition under 37 CFR 1.181 as an alternative to renewing within 30 days.",
    },
  },

  // --- Concept Group 5: Exemptions ---
  {
    id: "z6-layer-17",
    conceptId: "ffl-exemptions",
    zoneSlug: "the-border",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "Government officers acting within their authority are exempt from foreign filing license requirements under 35 USC 187.",
    highlightedAddition: "Government officers ... exempt under 35 USC 187",
    question: {
      stem: "Who is exempt from foreign filing license requirements under 35 USC 187?",
      options: [
        "All federal employees",
        "Government officers acting within their authority",
        "Military personnel only",
        "Members of Congress",
      ],
      correctIndex: 1,
      explanation:
        "35 USC 187 exempts US government officers acting within their authority, and persons acting on written government instructions.",
    },
  },
  {
    id: "z6-layer-18",
    conceptId: "ffl-exemptions",
    zoneSlug: "the-border",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "For arms and munitions, the Department of State's ITAR normally governs. However, compliance with USPTO foreign filing regulations satisfies the export requirement for patent filings (37 CFR 5.18).",
    highlightedAddition:
      "USPTO compliance satisfies export requirement for patent filings",
    question: {
      stem: "For weapons-related patent applications, does an applicant need both an ITAR license and a foreign filing license?",
      options: [
        "Yes — both are always required",
        "No — complying with USPTO foreign filing regulations is sufficient for patent filings",
        "No — ITAR always takes precedence and no USPTO license is needed",
        "Only if the weapon is classified",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 5.18, compliance with USPTO foreign filing regulations satisfies the export requirements for patent application filings, so a separate ITAR license is not needed for the patent filing itself.",
    },
  },
  {
    id: "z6-layer-19",
    conceptId: "ffl-exemptions",
    zoneSlug: "the-border",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "For nuclear technology, the Department of Energy considers foreign patent filings under USPTO regulations as publicly available information (37 CFR 5.20).",
    highlightedAddition:
      "DOE considers filings as publicly available information",
    question: {
      stem: "How does the Department of Energy treat foreign patent filings made under USPTO regulations?",
      options: [
        "As classified information requiring DOE approval",
        "As publicly available information",
        "As restricted data under the Atomic Energy Act",
        "As requiring a separate DOE export license",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 5.20, the DOE considers foreign patent applications filed in accordance with USPTO regulations as publicly available information.",
    },
  },

  // --- Concept Group 6: No US Application Filed ---
  {
    id: "z6-layer-20",
    conceptId: "ffl-no-us-app",
    zoneSlug: "the-border",
    layerNumber: 1,
    totalLayers: 2,
    ruleText:
      "Even when no US application has been filed, a foreign filing license is still required for inventions made in the United States (37 CFR 5.11).",
    highlightedAddition:
      "license still required for inventions made in the United States",
    question: {
      stem: "Is a foreign filing license required if no US application has been filed?",
      options: [
        "No — the requirement only applies when a US application exists",
        "Yes — a license is required for inventions made in the US regardless",
        "Only if the invention involves classified material",
        "Only if the inventor is a US citizen",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 5.11, a license is required before filing a foreign application for an invention made in the United States, even when no corresponding US application exists.",
    },
  },
  {
    id: "z6-layer-21",
    conceptId: "ffl-no-us-app",
    zoneSlug: "the-border",
    layerNumber: 2,
    totalLayers: 2,
    ruleText:
      "When no US application exists, the petitioner must submit legible copies of the materials for which licensing is sought (37 CFR 5.13).",
    highlightedAddition: "submit legible copies of the materials",
    question: {
      stem: "What must be submitted when petitioning for a foreign filing license without a corresponding US application?",
      options: [
        "Only a description of the invention",
        "Legible copies of the materials to be filed abroad",
        "A signed declaration by the inventor",
        "Proof of citizenship",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 5.13, when no corresponding US application exists, the petitioner must submit legible copies of the materials for security review.",
    },
  },

  // --- Concept Group 7: Revocation ---
  {
    id: "z6-layer-22",
    conceptId: "ffl-revocation",
    zoneSlug: "the-border",
    layerNumber: 1,
    totalLayers: 2,
    ruleText:
      "The USPTO may revoke a foreign filing license at any time upon written notice. The revocation is effective on the mailing date of the notice.",
    highlightedAddition: "effective on the mailing date",
    question: {
      stem: "When does a foreign filing license revocation become effective?",
      options: [
        "When the applicant receives the notice",
        "On the mailing date of the written notice",
        "30 days after notice is sent",
        "On the date the revocation is signed by the Commissioner",
      ],
      correctIndex: 1,
      explanation:
        "License revocation is effective on the mailing date of the written notice, not when the applicant receives it.",
    },
  },
  {
    id: "z6-layer-23",
    conceptId: "ffl-revocation",
    zoneSlug: "the-border",
    layerNumber: 2,
    totalLayers: 2,
    ruleText:
      "Only a secrecy order can revoke the 6-month automatic authorization. The USPTO's general revocation power applies only to explicitly granted licenses, not the statutory 6-month safe harbor.",
    highlightedAddition:
      "Only a secrecy order can revoke the 6-month authorization",
    question: {
      stem: "What is the only thing that can override the 6-month automatic authorization to file abroad?",
      options: [
        "A written revocation notice from the USPTO",
        "A secrecy order",
        "An examiner's recommendation",
        "A third-party protest",
      ],
      correctIndex: 1,
      explanation:
        "The 6-month authorization under 35 USC 184 can only be overridden by a secrecy order. General USPTO revocation power does not apply to the statutory safe harbor.",
    },
  },
];

// --- ABSORB PHASE: Analogies ---

export const ZONE6_ANALOGIES: AnalogyMapping[] = [
  {
    id: "z6-analogy-1",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    analogyText:
      "A foreign filing license is like a passport for your invention. You can't take your invention out of the country for 6 months unless customs (the USPTO) stamps your passport when you file. A secrecy order is a travel ban — it revokes your passport immediately, even if it was already stamped.",
    mappings: [
      { analogyTerm: "Passport", formalTerm: "Foreign filing license" },
      { analogyTerm: "Country", formalTerm: "United States" },
      { analogyTerm: "6 months", formalTerm: "35 USC 184 waiting period" },
      {
        analogyTerm: "Customs stamp at filing",
        formalTerm: "License on filing receipt (37 CFR 5.12)",
      },
      {
        analogyTerm: "Travel ban",
        formalTerm: "Secrecy order (35 USC 181)",
      },
      {
        analogyTerm: "Revokes passport",
        formalTerm: "37 CFR 5.2 — immediate revocation",
      },
    ],
    followUp: {
      stem: 'Does the "travel ban" (secrecy order) block filing in ALL countries, including allied ones?',
      options: [
        "Yes — all foreign filing is blocked under any secrecy order",
        "It depends on the type of secrecy order — Type I allows filing in 18 reciprocal countries",
        "No — secrecy orders only block filing in adversary nations",
        "Allied countries are always exempt from secrecy orders",
      ],
      correctIndex: 1,
      explanation:
        "The analogy breaks here! Type I secrecy orders (DoD Directive 5230.25) actually permit filing in 18 countries with reciprocal security agreements, including the UK, Canada, Australia, and Japan. Types II and III are more restrictive.",
    },
  },
  {
    id: "z6-analogy-2",
    conceptId: "ffl-retroactive",
    zoneSlug: "the-border",
    analogyText:
      'Getting a retroactive license is like getting a parking ticket forgiven. You parked illegally (filed abroad without permission), but if you can show it was an honest mistake (error), you weren\'t in a tow-away zone (no secrecy order), and you went to the courthouse promptly after getting the ticket (diligent pursuit), the judge (USPTO) can retroactively validate your parking.',
    mappings: [
      {
        analogyTerm: "Parking ticket",
        formalTerm: "Unauthorized foreign filing",
      },
      {
        analogyTerm: "Honest mistake",
        formalTerm: "Filing through error",
      },
      {
        analogyTerm: "Not a tow-away zone",
        formalTerm: "No secrecy order in effect",
      },
      {
        analogyTerm: "Going to courthouse promptly",
        formalTerm: "Diligent pursuit after discovery",
      },
      {
        analogyTerm: "Judge validates parking",
        formalTerm: "Retroactive license under 37 CFR 5.25",
      },
    ],
    followUp: {
      stem: "If the retroactive license petition is denied, what are the applicant's options?",
      options: [
        "No further remedy — the denial is final",
        "Renew within 30 days or challenge under 37 CFR 1.181",
        "Appeal directly to the Federal Circuit",
        "File a new US application to restart the process",
      ],
      correctIndex: 1,
      explanation:
        "The analogy doesn't cover appeals. Under 37 CFR 5.25, denials may be renewed within 30 days or challenged via petition under 37 CFR 1.181.",
    },
  },
  {
    id: "z6-analogy-3",
    conceptId: "ffl-penalties",
    zoneSlug: "the-border",
    analogyText:
      'Unauthorized foreign filing triggers a three-strike penalty system. Strike 1: Your patent is canceled (invalidated under 35 USC 185). Strike 2: If a secrecy order was violated, your invention is "repossessed" by the government (abandoned under 35 USC 182). Strike 3: Criminal charges — up to $10,000 fine and 2 years in prison (35 USC 186).',
    mappings: [
      {
        analogyTerm: "Patent canceled",
        formalTerm: "Patent invalid under 35 USC 185",
      },
      {
        analogyTerm: "Invention repossessed",
        formalTerm: "Deemed abandoned under 35 USC 182",
      },
      {
        analogyTerm: "Criminal charges",
        formalTerm: "35 USC 186: $10K fine / 2 years imprisonment",
      },
    ],
    followUp: {
      stem: "Is there any way to avoid Strike 1 (patent invalidation) after unauthorized foreign filing?",
      options: [
        "No — the patent is always invalidated",
        "Yes — if the filing was through error and no secrecy-restricted subject matter is involved",
        "Yes — if the foreign application is withdrawn within 6 months",
        "Yes — if the applicant pays a penalty surcharge",
      ],
      correctIndex: 1,
      explanation:
        "The analogy oversimplifies. Under 35 USC 185, the patent is NOT barred if the unauthorized filing was through error and the subject matter was not restricted under 35 USC 181. So the 'strike' can be avoided.",
    },
  },
];

// --- ABSORB PHASE: Visual Timelines ---

export const ZONE6_TIMELINES: VisualTimelineData[] = [
  {
    id: "z6-timeline-1",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    title: "Foreign Filing License Timeline",
    description:
      "Key milestones from US filing to the point where foreign filing is permitted without a license.",
    startLabel: "US Filing Date",
    endLabel: "18+ Months",
    milestones: [
      {
        id: "t1-m1",
        label: "US application filed",
        description:
          "Filing automatically constitutes petition for foreign filing license (37 CFR 5.12).",
        position: 0,
      },
      {
        id: "t1-m2",
        label: "Security screening complete (~3 days)",
        description:
          "Filing receipt issued indicating whether license was granted.",
        position: 8,
      },
      {
        id: "t1-m3",
        label: "6-month mark",
        description:
          "Can file abroad WITHOUT license — unless secrecy order imposed (35 USC 184).",
        position: 50,
      },
      {
        id: "t1-m4",
        label: "18-month mark",
        description:
          "Application published (unless exception applies: provisional, design, secrecy order).",
        position: 100,
      },
    ],
  },
  {
    id: "z6-timeline-2",
    conceptId: "ffl-retroactive",
    zoneSlug: "the-border",
    title: "Retroactive License Process",
    description:
      "Timeline for obtaining a retroactive foreign filing license after unauthorized filing.",
    startLabel: "Error Discovered",
    endLabel: "Resolution",
    milestones: [
      {
        id: "t2-m1",
        label: "Unauthorized foreign filing discovered",
        description: "Applicant realizes the error.",
        position: 0,
      },
      {
        id: "t2-m2",
        label: "Petition filed (diligent pursuit required)",
        description:
          "Must include: country list, dates, verified statement, explanation of error (37 CFR 5.25).",
        position: 25,
      },
      {
        id: "t2-m3",
        label: "USPTO decision on petition",
        description: "Petition granted or denied.",
        position: 60,
      },
      {
        id: "t2-m4",
        label: "If denied: 30-day renewal window",
        description:
          "Can renew petition or challenge under 37 CFR 1.181.",
        position: 80,
      },
      {
        id: "t2-m5",
        label: "Final resolution",
        description:
          "License granted retroactively, or patent barred under 35 USC 185.",
        position: 100,
      },
    ],
  },
];
