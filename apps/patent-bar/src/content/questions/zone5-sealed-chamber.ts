import { RuleLayer, AnalogyMapping, VisualTimelineData } from "@study-game/engine";

// ============================================================
// Zone 5: The Sealed Chamber — Secrecy Orders
// MPEP Sections 120, 121, 130 | 35 USC 181-188 | 37 CFR 5.1-5.8
// ============================================================

// --- ABSORB PHASE: Rule Layers ---

export const ZONE5_RULE_LAYERS: RuleLayer[] = [
  // --- Concept Group 1: Three Types of Secrecy Orders (sec-three-types) ---
  {
    id: "z5-layer-1",
    conceptId: "sec-three-types",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 1,
    totalLayers: 5,
    ruleText:
      "Under 35 USC 181, whenever publication or disclosure of an invention by the grant of a patent would be detrimental to national security, the Commissioner shall order that the invention be kept secret and withhold the grant of a patent.",
    highlightedAddition:
      "detrimental to national security ... order that the invention be kept secret",
    question: {
      stem: "Under what condition does the Commissioner order an invention to be kept secret?",
      options: [
        "When the invention is commercially valuable",
        "When publication or disclosure would be detrimental to national security",
        "When the inventor requests confidentiality",
        "When the invention involves foreign technology",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 181, the Commissioner orders secrecy when publication or disclosure of the invention would be detrimental to national security.",
    },
  },
  {
    id: "z5-layer-2",
    conceptId: "sec-three-types",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 2,
    totalLayers: 5,
    ruleText:
      "Secrecy orders come in three types. Type I orders (issued under DoD Directive 5230.25) permit filing patent applications in 18 countries that have reciprocal secrecy agreements with the United States.",
    highlightedAddition:
      "Type I ... permit filing in 18 countries with reciprocal secrecy agreements",
    question: {
      stem: "What does a Type I secrecy order permit?",
      options: [
        "No disclosure of any kind",
        "Filing patent applications in 18 countries with reciprocal secrecy agreements",
        "Filing in any foreign country with USPTO approval",
        "Domestic disclosure only to government contractors",
      ],
      correctIndex: 1,
      explanation:
        "Type I secrecy orders, issued under DoD Directive 5230.25, allow filing in 18 countries that have reciprocal secrecy agreements with the United States.",
    },
  },
  {
    id: "z5-layer-3",
    conceptId: "sec-three-types",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 3,
    totalLayers: 5,
    ruleText:
      "Type II secrecy orders prohibit all foreign filing. However, domestic disclosure of the invention is still permitted to persons who have a need to know and appropriate security clearances.",
    highlightedAddition:
      "Type II ... prohibit all foreign filing ... domestic disclosure still permitted",
    question: {
      stem: "Under a Type II secrecy order, what is prohibited?",
      options: [
        "All disclosure, both foreign and domestic",
        "All foreign filing, but domestic disclosure is still permitted",
        "Only filing in adversary nations",
        "Only publication of the patent, not filing applications",
      ],
      correctIndex: 1,
      explanation:
        "Type II secrecy orders prohibit all foreign filing but still permit domestic disclosure to persons with a need to know and appropriate clearances.",
    },
  },
  {
    id: "z5-layer-4",
    conceptId: "sec-three-types",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 4,
    totalLayers: 5,
    ruleText:
      "Type III secrecy orders are the most restrictive: they prohibit ANY disclosure whatsoever, including domestic disclosure. The invention cannot be shared with anyone not already aware of it.",
    highlightedAddition:
      "Type III ... prohibit ANY disclosure whatsoever, including domestic",
    question: {
      stem: "What distinguishes a Type III secrecy order from Types I and II?",
      options: [
        "It lasts for 2 years instead of 1 year",
        "It prohibits any disclosure whatsoever, including domestic",
        "It requires the applicant to destroy all copies of the application",
        "It only applies to nuclear-related inventions",
      ],
      correctIndex: 1,
      explanation:
        "Type III is the most restrictive secrecy order, prohibiting any disclosure at all, including domestic disclosure. The invention cannot be shared with anyone not already aware of it.",
    },
  },
  {
    id: "z5-layer-5",
    conceptId: "sec-three-types",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 5,
    totalLayers: 5,
    ruleText:
      "The three types form a spectrum of restriction: Type I (limited foreign filing allowed) is the least restrictive, Type II (no foreign filing) is intermediate, and Type III (no disclosure at all) is the most restrictive.",
    highlightedAddition:
      "spectrum: Type I least restrictive ... Type III most restrictive",
    question: {
      stem: "Which ordering correctly ranks secrecy order types from LEAST to MOST restrictive?",
      options: [
        "Type III, Type II, Type I",
        "Type I, Type II, Type III",
        "Type II, Type I, Type III",
        "All three types impose the same level of restriction",
      ],
      correctIndex: 1,
      explanation:
        "From least to most restrictive: Type I (some foreign filing OK), Type II (no foreign filing), Type III (no disclosure at all).",
    },
  },

  // --- Concept Group 2: Duration of Secrecy Orders (sec-duration) ---
  {
    id: "z5-layer-6",
    conceptId: "sec-duration",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "Under 35 USC 181, a secrecy order remains in force for a period of one year. At the end of the one-year period, the order expires unless it is renewed.",
    highlightedAddition: "one year ... expires unless renewed",
    question: {
      stem: "How long does a secrecy order under 35 USC 181 remain in force?",
      options: [
        "6 months",
        "1 year",
        "5 years",
        "Indefinitely until the Commissioner lifts it",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 181, secrecy orders are imposed for a one-year period and expire at the end of that year unless renewed.",
    },
  },
  {
    id: "z5-layer-7",
    conceptId: "sec-duration",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "The head of the interested government agency may notify the Commissioner that the national interest continues to require secrecy, and the Commissioner shall renew the order for an additional one-year period. This renewal can be repeated indefinitely.",
    highlightedAddition:
      "renew for additional one-year period ... repeated indefinitely",
    question: {
      stem: "How many times can a secrecy order be renewed?",
      options: [
        "Only once, for a maximum total of 2 years",
        "Up to 5 times",
        "Indefinitely, as long as the national interest requires it",
        "Renewal is not permitted; a new order must be issued",
      ],
      correctIndex: 2,
      explanation:
        "Under 35 USC 181, secrecy orders can be renewed indefinitely in one-year increments as long as the head of the interested government agency certifies that national security continues to require secrecy.",
    },
  },
  {
    id: "z5-layer-8",
    conceptId: "sec-duration",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "When a secrecy order is rescinded or expires, the application is processed in the normal course. The patent term is not extended to compensate for the time under secrecy, but the applicant may seek compensation under 35 USC 183.",
    highlightedAddition:
      "patent term not extended ... may seek compensation under 35 USC 183",
    question: {
      stem: "When a secrecy order expires or is rescinded, what happens to the patent term?",
      options: [
        "The patent term is extended by the duration of the secrecy order",
        "The patent term is not extended, but the applicant may seek compensation under 35 USC 183",
        "The application is automatically abandoned",
        "The patent term begins from the date the secrecy order is lifted",
      ],
      correctIndex: 1,
      explanation:
        "The patent term is not extended to compensate for time under secrecy. However, applicants may seek compensation for damages caused by the secrecy order under 35 USC 183.",
    },
  },

  // --- Concept Group 3: Approved Countries for Type I (sec-approved-countries) ---
  {
    id: "z5-layer-9",
    conceptId: "sec-approved-countries",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "Type I secrecy orders permit filing in countries that have entered into reciprocal secrecy agreements with the United States. These agreements ensure that the foreign country will protect the secrecy of the application.",
    highlightedAddition:
      "reciprocal secrecy agreements ... foreign country will protect secrecy",
    question: {
      stem: "Why are certain countries approved for filing under a Type I secrecy order?",
      options: [
        "Because they are members of the United Nations",
        "Because they have reciprocal secrecy agreements ensuring they will protect the application's secrecy",
        "Because they have the largest patent offices",
        "Because the applicant has existing business relationships there",
      ],
      correctIndex: 1,
      explanation:
        "Type I approved countries have entered into reciprocal secrecy agreements with the United States, ensuring they will protect the secrecy of patent applications filed under these orders.",
    },
  },
  {
    id: "z5-layer-10",
    conceptId: "sec-approved-countries",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "There are 18 countries on the approved list for Type I orders, including key allies such as the United Kingdom, Canada, Australia, Japan, Germany, France, Italy, and other NATO and allied nations.",
    highlightedAddition:
      "18 countries ... UK, Canada, Australia, Japan, Germany, France, Italy",
    question: {
      stem: "How many countries are on the approved list for filing under a Type I secrecy order?",
      options: [
        "5 countries",
        "10 countries",
        "18 countries",
        "All NATO member countries",
      ],
      correctIndex: 2,
      explanation:
        "There are 18 countries approved for filing under Type I secrecy orders, including the UK, Canada, Australia, Japan, Germany, France, Italy, and other allied nations with reciprocal secrecy agreements.",
    },
  },
  {
    id: "z5-layer-11",
    conceptId: "sec-approved-countries",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "Filing in a Type I approved country still requires compliance with the specific procedures set forth in the secrecy order. The applicant must follow any conditions specified in the order, including marking requirements and notification to the USPTO.",
    highlightedAddition:
      "compliance with specific procedures ... marking requirements and notification",
    question: {
      stem: "Can an applicant under a Type I order file in an approved country without any conditions?",
      options: [
        "Yes — filing in an approved country is unrestricted",
        "No — the applicant must comply with procedures, marking requirements, and notification conditions specified in the order",
        "Yes — as long as the applicant notifies the foreign patent office",
        "Only if the applicant obtains a separate foreign filing license",
      ],
      correctIndex: 1,
      explanation:
        "Even when filing in an approved country under a Type I order, the applicant must comply with all conditions specified in the order, including marking requirements and notification to the USPTO.",
    },
  },

  // --- Concept Group 4: Related Subject Matter Doctrine (sec-related-matter) ---
  {
    id: "z5-layer-12",
    conceptId: "sec-related-matter",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "Under 37 CFR 5.3, a secrecy order applies not only to the specific application but also extends to any 'related subject matter' disclosed to the applicant or the applicant's representative.",
    highlightedAddition:
      "extends to any 'related subject matter'",
    question: {
      stem: "Does a secrecy order apply only to the specific patent application on which it is imposed?",
      options: [
        "Yes — only the specific application is covered",
        "No — it also extends to related subject matter under 37 CFR 5.3",
        "Only if the applicant files a continuation application",
        "Only if the same examiner is assigned to related applications",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 5.3, a secrecy order extends beyond the specific application to cover any related subject matter, preventing circumvention by filing separate applications on related topics.",
    },
  },
  {
    id: "z5-layer-13",
    conceptId: "sec-related-matter",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "The 'related subject matter' doctrine prevents applicants from circumventing a secrecy order by filing a separate application covering the same or similar technology in a slightly different form. Any new application containing related matter must be brought to the attention of the Licensing and Review division.",
    highlightedAddition:
      "prevents circumvention ... new application with related matter must be reported",
    question: {
      stem: "What is the purpose of the 'related subject matter' doctrine under 37 CFR 5.3?",
      options: [
        "To ensure related patents are examined by the same art unit",
        "To prevent applicants from circumventing a secrecy order by filing separate related applications",
        "To consolidate all of an applicant's applications into a single file",
        "To speed up examination of related applications",
      ],
      correctIndex: 1,
      explanation:
        "The related subject matter doctrine under 37 CFR 5.3 prevents applicants from circumventing a secrecy order by filing new applications on the same or related technology in different form.",
    },
  },
  {
    id: "z5-layer-14",
    conceptId: "sec-related-matter",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "If an applicant files a new application that contains subject matter related to an application under secrecy order, the applicant must promptly notify the Licensing and Review division of the Office of Patent Legal Administration. Failure to do so may result in sanctions, including the invention being deemed abandoned under 35 USC 182.",
    highlightedAddition:
      "must promptly notify Licensing and Review ... failure may result in abandonment",
    question: {
      stem: "What must an applicant do when filing an application containing subject matter related to a secrecy order application?",
      options: [
        "Nothing — the USPTO will automatically detect the relationship",
        "Promptly notify the Licensing and Review division of the Office of Patent Legal Administration",
        "File a petition requesting a separate secrecy order for the new application",
        "Withdraw the new application and amend the original instead",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 5.3, applicants must promptly notify the Licensing and Review division when filing applications containing related subject matter. Failure to do so can result in the invention being deemed abandoned under 35 USC 182.",
    },
  },

  // --- Concept Group 5: National Security Markings (sec-markings) ---
  {
    id: "z5-layer-15",
    conceptId: "sec-markings",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "MPEP 121 addresses the handling of patent applications that contain national security classified information. Applications containing material classified under Executive Order 13526 (or successor orders) require special handling procedures.",
    highlightedAddition:
      "classified information ... Executive Order 13526 ... special handling procedures",
    question: {
      stem: "What does MPEP 121 address?",
      options: [
        "The process for filing international applications",
        "The handling of patent applications containing national security classified information",
        "The procedure for requesting expedited examination",
        "The requirements for patent term extensions",
      ],
      correctIndex: 1,
      explanation:
        "MPEP 121 covers the special handling procedures required for patent applications that contain national security classified information under Executive Order 13526 or successor orders.",
    },
  },
  {
    id: "z5-layer-16",
    conceptId: "sec-markings",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "Applications containing classified information must be filed, stored, and processed in accordance with the security classification level (Confidential, Secret, or Top Secret). The USPTO maintains approved facilities and procedures for handling such applications.",
    highlightedAddition:
      "filed, stored, and processed per classification level ... Confidential, Secret, or Top Secret",
    question: {
      stem: "How must classified patent applications be handled at the USPTO?",
      options: [
        "The same as any other application, but in a sealed envelope",
        "In accordance with the security classification level, using approved facilities and procedures",
        "Only electronically through a classified filing system",
        "By a specially designated examiner with military clearance",
      ],
      correctIndex: 1,
      explanation:
        "Classified patent applications must be filed, stored, and processed according to their security classification level (Confidential, Secret, or Top Secret) using the USPTO's approved facilities and procedures.",
    },
  },
  {
    id: "z5-layer-17",
    conceptId: "sec-markings",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "Applicants should not include classified information in a patent application unless absolutely necessary for adequate disclosure. If classified material must be included, proper security markings must appear on each page containing classified information.",
    highlightedAddition:
      "should not include classified information unless necessary ... proper markings on each page",
    question: {
      stem: "What guidance does the USPTO give regarding classified information in patent applications?",
      options: [
        "Classified information must always be included for complete disclosure",
        "Applicants should avoid including classified information unless absolutely necessary, and must properly mark each page",
        "All classified applications must be filed by a government attorney",
        "Classified information should be submitted in a separate appendix only",
      ],
      correctIndex: 1,
      explanation:
        "The USPTO advises that classified information should not be included unless absolutely necessary for adequate disclosure. When included, each page containing classified information must bear proper security markings.",
    },
  },

  // --- Concept Group 6: Examination Procedures Under Secrecy (sec-examination) ---
  {
    id: "z5-layer-18",
    conceptId: "sec-examination",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "MPEP 130 covers the examination procedures for applications under secrecy order. These applications are examined in the same manner as other applications, but with additional security precautions for handling and storage of the files.",
    highlightedAddition:
      "examined same as other applications ... additional security precautions",
    question: {
      stem: "How are patent applications under secrecy order examined according to MPEP 130?",
      options: [
        "They are not examined until the secrecy order is lifted",
        "They are examined in the same manner as other applications, with additional security precautions",
        "They are examined only by military personnel",
        "They undergo a simplified examination with fewer requirements",
      ],
      correctIndex: 1,
      explanation:
        "Under MPEP 130, applications under secrecy order are examined in the same manner as regular applications, but with additional security precautions for handling, storage, and communication of the files.",
    },
  },
  {
    id: "z5-layer-19",
    conceptId: "sec-examination",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "Office actions and responses for applications under secrecy order must be transmitted through secure channels. The application will not be published under 35 USC 122(b), and no information about the application will appear in the USPTO's public databases.",
    highlightedAddition:
      "secure channels ... will not be published ... no public database information",
    question: {
      stem: "What happens to the normal publication of an application under secrecy order?",
      options: [
        "It is published on schedule but with redacted claims",
        "It is published 18 months after filing as usual",
        "It is not published, and no information appears in public USPTO databases",
        "It is published only in classified government databases",
      ],
      correctIndex: 2,
      explanation:
        "Applications under secrecy order are not published under 35 USC 122(b) and no information about them appears in the USPTO's public databases. All communications use secure channels.",
    },
  },
  {
    id: "z5-layer-20",
    conceptId: "sec-examination",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "If an application under secrecy order is found to be allowable, the patent will not be granted until the secrecy order is rescinded. The application remains in a state of suspended allowability until the order is lifted.",
    highlightedAddition:
      "patent will not be granted until secrecy order is rescinded ... suspended allowability",
    question: {
      stem: "What happens when an application under secrecy order is found allowable?",
      options: [
        "The patent issues immediately as a classified patent",
        "The patent will not be granted until the secrecy order is rescinded",
        "The allowance is revoked and the application is placed on hold",
        "The applicant must choose between the patent and the secrecy order",
      ],
      correctIndex: 1,
      explanation:
        "When an application under secrecy order is found allowable, the patent will not be granted until the secrecy order is rescinded. The application remains in suspended allowability until the order is lifted.",
    },
  },

  // --- Concept Group 7: Compensation Provisions (sec-compensation) ---
  {
    id: "z5-layer-21",
    conceptId: "sec-compensation",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "Under 35 USC 183, an applicant whose patent is withheld due to a secrecy order may apply to the head of the government department or agency that caused the order for compensation for the damage caused by the secrecy order and/or for the use of the invention by the government.",
    highlightedAddition:
      "apply for compensation ... damage caused by secrecy order and/or use by government",
    question: {
      stem: "Under 35 USC 183, who may an applicant seek compensation from for damages caused by a secrecy order?",
      options: [
        "The USPTO Commissioner",
        "The head of the government department or agency that caused the order",
        "The President of the United States",
        "The Federal Circuit Court of Appeals",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 183, the applicant applies for compensation to the head of the government department or agency that caused the secrecy order to be imposed.",
    },
  },
  {
    id: "z5-layer-22",
    conceptId: "sec-compensation",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "The compensation claim must be filed within six years after the secrecy order is rescinded. The applicant bears the burden of proving the amount of damages suffered as a result of the secrecy order.",
    highlightedAddition:
      "within six years after rescission ... burden of proving damages",
    question: {
      stem: "What is the deadline for filing a compensation claim after a secrecy order is rescinded?",
      options: [
        "1 year after rescission",
        "3 years after rescission",
        "6 years after rescission",
        "There is no deadline",
      ],
      correctIndex: 2,
      explanation:
        "Under 35 USC 183, the compensation claim must be filed within six years after the secrecy order is rescinded, and the applicant bears the burden of proving damages.",
    },
  },
  {
    id: "z5-layer-23",
    conceptId: "sec-compensation",
    zoneSlug: "the-sealed-chamber",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "If the applicant is not satisfied with the compensation awarded by the agency, they may bring suit against the United States in the United States Court of Federal Claims under 35 USC 183. However, disclosure of the invention in violation of the secrecy order forfeits the right to compensation under 35 USC 182.",
    highlightedAddition:
      "suit in Court of Federal Claims ... violation forfeits right to compensation",
    question: {
      stem: "What happens to the right to compensation if the applicant violates the secrecy order?",
      options: [
        "The compensation amount is reduced by half",
        "The right to compensation is forfeited under 35 USC 182",
        "The applicant must pay a fine but retains the right to compensation",
        "Nothing — the right to compensation is unconditional",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 182, disclosure in violation of a secrecy order forfeits the applicant's right to compensation. If unsatisfied with agency compensation, the applicant can sue in the Court of Federal Claims, but only if they have not violated the order.",
    },
  },
];

// --- ABSORB PHASE: Analogies ---

export const ZONE5_ANALOGIES: AnalogyMapping[] = [
  {
    id: "z5-analogy-1",
    conceptId: "sec-three-types",
    zoneSlug: "the-sealed-chamber",
    analogyText:
      "The three types of secrecy orders are like three levels of lockdown at a military base. Type I is a 'limited travel advisory' — you can still travel to 18 allied countries that have mutual defense treaties. Type II is a 'domestic quarantine' — you cannot leave the country at all, but you can still talk to people at home. Type III is a 'total isolation protocol' — no travel, no phone calls, no contact with anyone.",
    mappings: [
      {
        analogyTerm: "Limited travel advisory",
        formalTerm: "Type I secrecy order (DoD Directive 5230.25)",
      },
      {
        analogyTerm: "18 allied countries with treaties",
        formalTerm: "18 reciprocal secrecy agreement countries",
      },
      {
        analogyTerm: "Domestic quarantine",
        formalTerm: "Type II secrecy order (no foreign filing)",
      },
      {
        analogyTerm: "Can talk to people at home",
        formalTerm: "Domestic disclosure permitted under Type II",
      },
      {
        analogyTerm: "Total isolation protocol",
        formalTerm: "Type III secrecy order (no disclosure at all)",
      },
      {
        analogyTerm: "No contact with anyone",
        formalTerm: "All disclosure prohibited, including domestic",
      },
    ],
    followUp: {
      stem: "Under the analogy, what happens if someone under 'total isolation' (Type III) shares information domestically?",
      options: [
        "They receive a warning but the order continues",
        "The violation may result in the invention being deemed abandoned and forfeiture of compensation rights",
        "They are moved to Type II status instead",
        "The secrecy order is automatically lifted",
      ],
      correctIndex: 1,
      explanation:
        "Violating a Type III (or any) secrecy order can result in the invention being deemed abandoned under 35 USC 182 and forfeiture of all compensation rights. The consequences are severe precisely because of the national security implications.",
    },
  },
  {
    id: "z5-analogy-2",
    conceptId: "sec-duration",
    zoneSlug: "the-sealed-chamber",
    analogyText:
      "A secrecy order is like a library book that's been placed on 'restricted hold.' The hold lasts exactly one year, like a library loan period. At the end of the year, the librarian (government agency) can renew the hold indefinitely if they still need it. When the hold is finally released, the book goes back on the shelf (patent issues), but you don't get extra borrowing time to compensate for the wait. You can, however, ask the librarian to pay you for the inconvenience.",
    mappings: [
      {
        analogyTerm: "Library book on restricted hold",
        formalTerm: "Patent application under secrecy order",
      },
      {
        analogyTerm: "One-year loan period",
        formalTerm: "35 USC 181 one-year secrecy term",
      },
      {
        analogyTerm: "Librarian renews indefinitely",
        formalTerm: "Renewable one-year increments",
      },
      {
        analogyTerm: "Book goes back on shelf",
        formalTerm: "Patent issues after order rescinded",
      },
      {
        analogyTerm: "No extra borrowing time",
        formalTerm: "No patent term extension for secrecy period",
      },
      {
        analogyTerm: "Ask librarian to pay for inconvenience",
        formalTerm: "Compensation under 35 USC 183",
      },
    ],
    followUp: {
      stem: "If the 'librarian' (government agency) offers inadequate compensation, where can the applicant escalate the dispute?",
      options: [
        "To the USPTO Commissioner",
        "To the United States Court of Federal Claims",
        "To the Federal Circuit",
        "There is no further recourse",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 183, if the applicant is dissatisfied with the compensation awarded by the agency, they may bring suit against the United States in the United States Court of Federal Claims.",
    },
  },
  {
    id: "z5-analogy-3",
    conceptId: "sec-related-matter",
    zoneSlug: "the-sealed-chamber",
    analogyText:
      "The 'related subject matter' doctrine under 37 CFR 5.3 works like a quarantine zone around an infected area. The secrecy order is the quarantine: it doesn't just cover the original infected building (the specific application), it extends to the entire surrounding block (related subject matter). If you build a new building on the same block, it's automatically inside the quarantine zone. You must report the new building to the health inspector (Licensing and Review division), or face penalties.",
    mappings: [
      {
        analogyTerm: "Quarantine zone",
        formalTerm: "Secrecy order scope",
      },
      {
        analogyTerm: "Original infected building",
        formalTerm: "Specific application under secrecy order",
      },
      {
        analogyTerm: "Entire surrounding block",
        formalTerm: "Related subject matter under 37 CFR 5.3",
      },
      {
        analogyTerm: "New building on the same block",
        formalTerm: "New application containing related subject matter",
      },
      {
        analogyTerm: "Report to health inspector",
        formalTerm: "Notify Licensing and Review division",
      },
      {
        analogyTerm: "Penalties",
        formalTerm: "Deemed abandoned under 35 USC 182",
      },
    ],
    followUp: {
      stem: "Can an applicant avoid the 'quarantine zone' (related subject matter doctrine) by filing the related application under a different inventor's name?",
      options: [
        "Yes — different inventors are not covered by the original order",
        "No — the doctrine covers the subject matter itself, regardless of who files it, and the applicant has a duty to notify the USPTO",
        "Only if the new inventor has security clearance",
        "Only if the applications are filed more than one year apart",
      ],
      correctIndex: 1,
      explanation:
        "The related subject matter doctrine under 37 CFR 5.3 focuses on the subject matter itself, not the identity of the applicant. Any application containing related subject matter must be reported to the Licensing and Review division, regardless of who files it.",
    },
  },
];

// --- ABSORB PHASE: Visual Timelines ---

export const ZONE5_TIMELINES: VisualTimelineData[] = [
  {
    id: "z5-timeline-1",
    conceptId: "sec-three-types",
    zoneSlug: "the-sealed-chamber",
    title: "Secrecy Order Lifecycle",
    description:
      "Key events from the initial filing of an application through imposition, examination under secrecy, and eventual rescission of the secrecy order.",
    startLabel: "Application Filed",
    endLabel: "Patent Granted",
    milestones: [
      {
        id: "t1-m1",
        label: "Application filed at USPTO",
        description:
          "Application undergoes routine security screening by defense agencies (typically within a few weeks of filing).",
        position: 0,
      },
      {
        id: "t1-m2",
        label: "Secrecy order imposed",
        description:
          "Defense agency determines disclosure is detrimental to national security. Order issued under 35 USC 181 (Type I, II, or III). Foreign filing license revoked or restricted.",
        position: 15,
      },
      {
        id: "t1-m3",
        label: "Examination under secrecy (MPEP 130)",
        description:
          "Application is examined normally but with security precautions. No publication under 35 USC 122(b). All communications via secure channels.",
        position: 35,
      },
      {
        id: "t1-m4",
        label: "1-year renewal decision",
        description:
          "Agency head decides whether national security still requires secrecy. If yes, order renewed for another year (35 USC 181). This cycle can repeat indefinitely.",
        position: 55,
      },
      {
        id: "t1-m5",
        label: "Secrecy order rescinded",
        description:
          "Agency determines secrecy is no longer required. Order lifted and application processed in normal course.",
        position: 75,
      },
      {
        id: "t1-m6",
        label: "Patent granted (no term extension)",
        description:
          "Patent issues. Term is NOT extended for time under secrecy. Applicant may seek compensation under 35 USC 183 within 6 years.",
        position: 100,
      },
    ],
  },
  {
    id: "z5-timeline-2",
    conceptId: "sec-compensation",
    zoneSlug: "the-sealed-chamber",
    title: "Compensation Claim Process Under 35 USC 183",
    description:
      "Timeline for seeking compensation for damages caused by a secrecy order, from rescission of the order through potential court action.",
    startLabel: "Order Rescinded",
    endLabel: "6-Year Deadline",
    milestones: [
      {
        id: "t2-m1",
        label: "Secrecy order rescinded",
        description:
          "The 6-year statute of limitations for filing a compensation claim begins running from this date.",
        position: 0,
      },
      {
        id: "t2-m2",
        label: "Applicant files compensation claim",
        description:
          "Claim filed with the head of the government department or agency that caused the order. Applicant bears burden of proving damages.",
        position: 25,
      },
      {
        id: "t2-m3",
        label: "Agency determines compensation",
        description:
          "Agency evaluates the claim and determines appropriate compensation for damages and/or government use of the invention.",
        position: 50,
      },
      {
        id: "t2-m4",
        label: "If dissatisfied: suit in Court of Federal Claims",
        description:
          "Under 35 USC 183, applicant may bring suit against the United States in the Court of Federal Claims if agency compensation is inadequate.",
        position: 75,
      },
      {
        id: "t2-m5",
        label: "6-year deadline",
        description:
          "All compensation claims must be filed within 6 years of the secrecy order being rescinded. Claims filed after this date are time-barred.",
        position: 100,
      },
    ],
  },
];
