import { RuleLayer, AnalogyMapping, VisualTimelineData } from "@/types";

// ============================================================
// Zone 1: The Vault — Confidentiality & Access to Patent Applications
// MPEP Sections 101, 102 | 35 USC 122 | 37 CFR 1.14 | 18 USC 1905
// ============================================================

// --- ABSORB PHASE: Rule Layers ---

export const ZONE1_RULE_LAYERS: RuleLayer[] = [
  // --- Concept Group 1: The Basic Confidentiality Rule (35 USC 122(a)) ---
  {
    id: "z1-layer-1",
    conceptId: "conf-basic-rule",
    zoneSlug: "the-vault",
    layerNumber: 1,
    totalLayers: 4,
    ruleText:
      "Under 35 USC 122(a), patent applications shall be kept in confidence by the USPTO. No information concerning the application may be given without the authority of the applicant.",
    highlightedAddition:
      "shall be kept in confidence by the USPTO",
    question: {
      stem: "What is the default confidentiality status of a patent application at the USPTO?",
      options: [
        "Applications are public records from the date of filing",
        "Applications are kept confidential by the USPTO",
        "Applications are confidential only if the applicant pays a fee",
        "Applications are public unless the applicant requests confidentiality",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 122(a), patent applications are kept in confidence by the USPTO. The default is confidentiality, not public access.",
    },
  },
  {
    id: "z1-layer-2",
    conceptId: "conf-basic-rule",
    zoneSlug: "the-vault",
    layerNumber: 2,
    totalLayers: 4,
    ruleText:
      "No information concerning a pending application may be given to the public without the authority of the applicant. This means the USPTO cannot even confirm or deny the existence of a pending application.",
    highlightedAddition:
      "cannot even confirm or deny the existence of a pending application",
    question: {
      stem: "Can the USPTO confirm to a third party that a particular pending application exists?",
      options: [
        "Yes, the existence of any application is public information",
        "No, the USPTO cannot even confirm or deny the existence of a pending application without applicant authority",
        "Yes, but only if the third party is a registered patent attorney",
        "Yes, but only after 6 months from filing",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 122(a), no information concerning a pending application may be given without the applicant's authority. This extends to confirming or denying the application's existence.",
    },
  },
  {
    id: "z1-layer-3",
    conceptId: "conf-basic-rule",
    zoneSlug: "the-vault",
    layerNumber: 3,
    totalLayers: 4,
    ruleText:
      "The confidentiality rule applies from the date of filing and continues until the application is either published or a patent is granted. Once a patent issues, the file wrapper becomes publicly available.",
    highlightedAddition:
      "until the application is either published or a patent is granted",
    question: {
      stem: "When does the confidentiality of a patent application end?",
      options: [
        "After 12 months from filing",
        "When the first office action is mailed",
        "When the application is published or a patent is granted",
        "When the applicant pays the issue fee",
      ],
      correctIndex: 2,
      explanation:
        "Confidentiality under 35 USC 122(a) ends when the application is published (typically at 18 months) or when a patent is granted. Either event makes the file available to the public.",
    },
  },
  {
    id: "z1-layer-4",
    conceptId: "conf-basic-rule",
    zoneSlug: "the-vault",
    layerNumber: 4,
    totalLayers: 4,
    ruleText:
      "There are specific exceptions to confidentiality: (1) the application is published under 35 USC 122(b), (2) a patent is granted, (3) the applicant provides written authority, or (4) necessary for interference or derivation proceedings.",
    highlightedAddition:
      "exceptions: publication, patent grant, written authority, or interference/derivation proceedings",
    question: {
      stem: "Which of the following is NOT a recognized exception to application confidentiality under 35 USC 122?",
      options: [
        "Publication of the application under 35 USC 122(b)",
        "Grant of a patent on the application",
        "A Freedom of Information Act (FOIA) request by a member of the public",
        "Interference or derivation proceedings involving the application",
      ],
      correctIndex: 2,
      explanation:
        "A general FOIA request does not override the confidentiality of patent applications. The recognized exceptions are publication, patent grant, applicant authority, and interference/derivation proceedings.",
    },
  },

  // --- Concept Group 2: 18-Month Publication Rule (35 USC 122(b)) ---
  {
    id: "z1-layer-5",
    conceptId: "conf-publication",
    zoneSlug: "the-vault",
    layerNumber: 1,
    totalLayers: 4,
    ruleText:
      "Under 35 USC 122(b)(1)(A), each application for a patent shall be published promptly after the expiration of 18 months from the earliest filing date for which a benefit is sought.",
    highlightedAddition:
      "published promptly after 18 months from the earliest filing date",
    question: {
      stem: "When are patent applications published under the standard rule?",
      options: [
        "12 months from the filing date",
        "18 months from the earliest filing date for which a benefit is sought",
        "24 months from the filing date",
        "Only after a patent is granted",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 122(b)(1)(A), applications are published promptly after 18 months from the earliest filing date for which the applicant seeks priority benefit.",
    },
  },
  {
    id: "z1-layer-6",
    conceptId: "conf-publication",
    zoneSlug: "the-vault",
    layerNumber: 2,
    totalLayers: 4,
    ruleText:
      "An applicant may request non-publication under 35 USC 122(b)(2)(B)(i), but only if the invention has not been and will not be the subject of an application filed in a foreign country that requires publication at 18 months.",
    highlightedAddition:
      "non-publication request only if not filed/required to be filed in foreign country requiring 18-month publication",
    question: {
      stem: "Under what condition can an applicant opt out of the 18-month publication?",
      options: [
        "By paying an additional fee to the USPTO",
        "If the invention has not been and will not be filed in a foreign country that requires 18-month publication",
        "If the application is filed as a continuation",
        "If the applicant is an individual inventor rather than a corporation",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 122(b)(2)(B)(i), non-publication is available only if the applicant certifies the invention has not been and will not be the subject of a foreign application in a country requiring 18-month publication.",
    },
  },
  {
    id: "z1-layer-7",
    conceptId: "conf-publication",
    zoneSlug: "the-vault",
    layerNumber: 3,
    totalLayers: 4,
    ruleText:
      "If an applicant made a non-publication request but later files abroad in a country requiring publication, the applicant must notify the USPTO within 45 days of the foreign filing. Failure to do so can result in the application being regarded as abandoned.",
    highlightedAddition:
      "must notify USPTO within 45 days of foreign filing or application regarded as abandoned",
    question: {
      stem: "What happens if an applicant who made a non-publication request later files in a foreign country requiring publication?",
      options: [
        "The non-publication request is automatically rescinded with no consequence",
        "The applicant must notify the USPTO within 45 days or the application may be regarded as abandoned",
        "The foreign application is automatically invalidated",
        "The applicant must withdraw the US application",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 122(b)(2)(B)(iii), if the applicant later files abroad in a country requiring publication, the USPTO must be notified within 45 days. Failure triggers potential abandonment of the US application.",
    },
  },
  {
    id: "z1-layer-8",
    conceptId: "conf-publication",
    zoneSlug: "the-vault",
    layerNumber: 4,
    totalLayers: 4,
    ruleText:
      "Provisional applications and design patent applications are not published at 18 months. Provisional applications are never published. Applications subject to a secrecy order under 35 USC 181 are also excluded from publication.",
    highlightedAddition:
      "provisional applications, design applications, and applications under secrecy orders are excluded from 18-month publication",
    question: {
      stem: "Which type of application is NOT subject to the 18-month publication rule?",
      options: [
        "Utility applications filed by large entities",
        "Continuation-in-part applications",
        "Provisional applications",
        "National stage applications under 35 USC 371",
      ],
      correctIndex: 2,
      explanation:
        "Provisional applications are never published. Design applications and applications under secrecy orders are also excluded from the 18-month publication requirement.",
    },
  },

  // --- Concept Group 3: Redaction of Trade Secrets ---
  {
    id: "z1-layer-9",
    conceptId: "conf-redaction",
    zoneSlug: "the-vault",
    layerNumber: 1,
    totalLayers: 2,
    ruleText:
      "Under 35 USC 122(b)(2)(A), an applicant may request that certain portions of the application containing trade secrets or other confidential commercial information be redacted from the published application.",
    highlightedAddition:
      "request redaction of trade secrets or confidential commercial information before publication",
    question: {
      stem: "Can an applicant prevent trade secret information from being disclosed in a published patent application?",
      options: [
        "No, all content is published as filed",
        "Yes, the applicant may request redaction of trade secrets before publication",
        "Yes, but only if the trade secret is unrelated to the claimed invention",
        "No, the applicant must withdraw the application to protect trade secrets",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 122(b)(2)(A), applicants may request redaction of trade secrets or confidential commercial information from the published version of the application.",
    },
  },
  {
    id: "z1-layer-10",
    conceptId: "conf-redaction",
    zoneSlug: "the-vault",
    layerNumber: 2,
    totalLayers: 2,
    ruleText:
      "The redaction request must be filed before the application is published. If trade secret material appears in the specification and is necessary for enablement, the applicant faces a choice between maintaining the trade secret (by withdrawing the application) and obtaining patent protection.",
    highlightedAddition:
      "redaction request must be filed before publication; tension between trade secret protection and enablement",
    question: {
      stem: "When must a redaction request for trade secrets be submitted?",
      options: [
        "Within 30 days after publication",
        "Before the application is published",
        "At any time during prosecution",
        "Only after allowance of the application",
      ],
      correctIndex: 1,
      explanation:
        "The redaction request must be filed before the application is published. Once an application is published, the information becomes part of the public record and cannot be redacted retroactively.",
    },
  },

  // --- Concept Group 4: Access to Pending/Unpublished Applications (37 CFR 1.14) ---
  {
    id: "z1-layer-11",
    conceptId: "conf-access-pending",
    zoneSlug: "the-vault",
    layerNumber: 1,
    totalLayers: 4,
    ruleText:
      "Under 37 CFR 1.14(a), the file of a patent application that has been published or for which a patent has been granted is available to the public. No special permission is needed to access published applications or granted patents.",
    highlightedAddition:
      "published applications and granted patents are available to the public",
    question: {
      stem: "What level of access does the public have to a published patent application?",
      options: [
        "No access until the patent is granted",
        "Access only with the applicant's written consent",
        "Full access — published applications are available to the public",
        "Access only to the claims, not the full specification",
      ],
      correctIndex: 2,
      explanation:
        "Under 37 CFR 1.14(a), once an application has been published or a patent has been granted, the file is available to the public without restriction.",
    },
  },
  {
    id: "z1-layer-12",
    conceptId: "conf-access-pending",
    zoneSlug: "the-vault",
    layerNumber: 2,
    totalLayers: 4,
    ruleText:
      "Under 37 CFR 1.14(b), access to unpublished pending applications is generally restricted. A person not of record in the application may gain access by filing a petition with a showing that the applicant has authorized release of the information.",
    highlightedAddition:
      "unpublished pending applications restricted; petition with applicant authorization needed",
    question: {
      stem: "How can a third party access an unpublished, pending patent application?",
      options: [
        "By simply requesting a copy from the USPTO",
        "By filing a petition demonstrating the applicant has authorized disclosure",
        "By filing a FOIA request",
        "Access is impossible under any circumstances",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 1.14(b), access to unpublished pending applications requires a petition showing the applicant has authorized release of the information.",
    },
  },
  {
    id: "z1-layer-13",
    conceptId: "conf-access-pending",
    zoneSlug: "the-vault",
    layerNumber: 3,
    totalLayers: 4,
    ruleText:
      "Under 37 CFR 1.14(a)(1)(iv), if a pending application is identified in a US patent, the application file becomes accessible to the public. This includes applications incorporated by reference in an issued patent.",
    highlightedAddition:
      "pending application identified in a US patent becomes accessible to the public",
    question: {
      stem: "When does a pending, unpublished application become publicly accessible without the applicant's consent?",
      options: [
        "After 24 months from its filing date",
        "When the application is identified or incorporated by reference in a US patent",
        "When a related application by a different applicant is published",
        "When any examiner cites it in an office action",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 1.14(a)(1)(iv), when a pending application is identified in a US patent (e.g., incorporated by reference), the file becomes accessible to the public.",
    },
  },
  {
    id: "z1-layer-14",
    conceptId: "conf-access-pending",
    zoneSlug: "the-vault",
    layerNumber: 4,
    totalLayers: 4,
    ruleText:
      "Under 37 CFR 1.14(c), a registered attorney or agent of record, the applicant, the assignee, or an inventor may access the application without a petition. Power of attorney or assignment records establish standing.",
    highlightedAddition:
      "attorney of record, applicant, assignee, or inventor may access without petition",
    question: {
      stem: "Which of the following persons does NOT have automatic access to an unpublished pending application?",
      options: [
        "The registered attorney of record",
        "The named inventor",
        "The assignee recorded at the USPTO",
        "A competitor who suspects infringement",
      ],
      correctIndex: 3,
      explanation:
        "Under 37 CFR 1.14(c), the attorney of record, applicant, assignee, and inventor all have access. A competitor has no standing to access an unpublished pending application.",
    },
  },

  // --- Concept Group 5: Status Information (37 CFR 1.14(a)) ---
  {
    id: "z1-layer-15",
    conceptId: "conf-status-info",
    zoneSlug: "the-vault",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      'Under 37 CFR 1.14(a)(2), "status information" is limited to whether the application is pending, abandoned, or patented, along with the application number. For published applications, status information is available to the public.',
    highlightedAddition:
      "status information: whether pending, abandoned, or patented; available for published applications",
    question: {
      stem: 'What does "status information" include under 37 CFR 1.14?',
      options: [
        "The full text of all claims in the application",
        "Whether the application is pending, abandoned, or patented",
        "The names of the examiner and art unit assigned",
        "The prosecution history and all office actions",
      ],
      correctIndex: 1,
      explanation:
        'Under 37 CFR 1.14(a)(2), "status information" is narrowly defined as whether the application is pending, abandoned, or patented, along with the application number.',
    },
  },
  {
    id: "z1-layer-16",
    conceptId: "conf-status-info",
    zoneSlug: "the-vault",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "For unpublished applications, status information may only be obtained by a party who can show proper authority. A member of the public generally cannot obtain status information about an unpublished application.",
    highlightedAddition:
      "status info for unpublished apps requires proper authority; public cannot obtain it",
    question: {
      stem: "Can a member of the public obtain status information about an unpublished patent application?",
      options: [
        "Yes, status information is always available for any application",
        "No, status information for unpublished applications requires proper authority from the applicant",
        "Yes, but only the application number, not the status",
        "Yes, after paying a search fee to the USPTO",
      ],
      correctIndex: 1,
      explanation:
        "Status information for unpublished applications is confidential. Only a party with proper authority (e.g., the applicant, attorney of record, or authorized party) can obtain it.",
    },
  },
  {
    id: "z1-layer-17",
    conceptId: "conf-status-info",
    zoneSlug: "the-vault",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "Status information for an application that has been referred to in a US patent document (as a parent or related application) is available to the public under 37 CFR 1.14(a)(1)(iv), even if the application itself was never published.",
    highlightedAddition:
      "status info available if application referenced in a US patent, even if unpublished",
    question: {
      stem: "When can the public access status information about an application that was never independently published?",
      options: [
        "Never — unpublished means permanently confidential",
        "When the application has been referenced in a US patent document",
        "Only after the applicant has been dead for 20 years",
        "Whenever any related application in the same family is published",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 1.14(a)(1)(iv), if an unpublished application is referenced in a US patent document (e.g., as a parent application), the public can access at least its status information.",
    },
  },

  // --- Concept Group 6: Access to Abandoned Applications ---
  {
    id: "z1-layer-18",
    conceptId: "conf-abandoned",
    zoneSlug: "the-vault",
    layerNumber: 1,
    totalLayers: 3,
    ruleText:
      "An abandoned application that was never published does not automatically become publicly accessible. Abandonment alone does not end confidentiality.",
    highlightedAddition:
      "abandonment alone does not end confidentiality",
    question: {
      stem: "Does an application automatically become public when it is abandoned?",
      options: [
        "Yes, all abandoned applications are immediately public",
        "No, abandonment alone does not end the confidentiality of an unpublished application",
        "Yes, but only after a 6-month waiting period",
        "Yes, if the applicant does not request continued confidentiality",
      ],
      correctIndex: 1,
      explanation:
        "Abandonment alone does not end confidentiality. An unpublished abandoned application remains confidential unless one of the specific exceptions under 37 CFR 1.14 applies.",
    },
  },
  {
    id: "z1-layer-19",
    conceptId: "conf-abandoned",
    zoneSlug: "the-vault",
    layerNumber: 2,
    totalLayers: 3,
    ruleText:
      "An abandoned application becomes publicly accessible if: (1) the application itself was published before abandonment, (2) the application is referenced in a US patent or published application, or (3) the applicant provides written consent to public access.",
    highlightedAddition:
      "publicly accessible if: published, referenced in US patent/publication, or applicant consents",
    question: {
      stem: "Which of the following does NOT make an abandoned application publicly accessible?",
      options: [
        "The application was published before it was abandoned",
        "The application is referenced in a US patent",
        "The applicant provides written consent",
        "A third party files a FOIA request citing public interest",
      ],
      correctIndex: 3,
      explanation:
        "Under 37 CFR 1.14, abandoned applications become public through publication, reference in a US patent, or applicant consent. A FOIA request based on public interest alone is not sufficient to overcome the statutory confidentiality.",
    },
  },
  {
    id: "z1-layer-20",
    conceptId: "conf-abandoned",
    zoneSlug: "the-vault",
    layerNumber: 3,
    totalLayers: 3,
    ruleText:
      "Under 37 CFR 1.14(a)(1)(ii), the file of an abandoned published application is open to the public. If the application was published, abandonment does not restore confidentiality — the publication has already placed the content in the public domain.",
    highlightedAddition:
      "abandonment does not restore confidentiality once the application has been published",
    question: {
      stem: "If a published application is later abandoned, does it regain its confidential status?",
      options: [
        "Yes, abandonment restores confidentiality to protect the applicant",
        "No, once published, the content is in the public domain and abandonment does not restore confidentiality",
        "Yes, but only after 1 year from the abandonment date",
        "It depends on whether a patent was ever granted",
      ],
      correctIndex: 1,
      explanation:
        "Under 37 CFR 1.14(a)(1)(ii), abandonment does not restore confidentiality. Once an application has been published, the information is public and remains so regardless of the application's later status.",
    },
  },

  // --- Concept Group 7: USPTO Employee Confidentiality Obligations ---
  {
    id: "z1-layer-21",
    conceptId: "conf-employee-oath",
    zoneSlug: "the-vault",
    layerNumber: 1,
    totalLayers: 2,
    ruleText:
      "USPTO employees are bound by oath to maintain the confidentiality of patent applications. Under MPEP 101, each examiner and USPTO employee takes an oath of office that includes an obligation not to disclose information from unpublished applications.",
    highlightedAddition:
      "USPTO employees take an oath of office including non-disclosure obligation",
    question: {
      stem: "What obligation do USPTO employees have regarding unpublished patent applications?",
      options: [
        "They may discuss applications freely with other government employees",
        "They are bound by an oath of office to maintain confidentiality of application information",
        "They may disclose information after the application has been pending for 2 years",
        "They have no special obligation beyond general government ethics rules",
      ],
      correctIndex: 1,
      explanation:
        "Under MPEP 101, USPTO employees take an oath of office that specifically includes an obligation to maintain the confidentiality of patent application information.",
    },
  },
  {
    id: "z1-layer-22",
    conceptId: "conf-employee-oath",
    zoneSlug: "the-vault",
    layerNumber: 2,
    totalLayers: 2,
    ruleText:
      "Under 18 USC 1905, unauthorized disclosure of confidential patent application information by a USPTO employee is a criminal offense. Penalties include fines and imprisonment for up to one year, and the employee shall be removed from office or employment.",
    highlightedAddition:
      "criminal offense under 18 USC 1905: fines, up to 1 year imprisonment, and removal from office",
    question: {
      stem: "What are the consequences for a USPTO employee who unlawfully discloses confidential application information?",
      options: [
        "A written warning and mandatory retraining",
        "A fine only, with no risk of imprisonment",
        "Criminal penalties including fines, up to 1 year imprisonment, and removal from office under 18 USC 1905",
        "Suspension without pay for 30 days",
      ],
      correctIndex: 2,
      explanation:
        "Under 18 USC 1905, unauthorized disclosure by a USPTO employee is a criminal offense punishable by fines, imprisonment for up to one year, and mandatory removal from office or employment.",
    },
  },
];

// --- ABSORB PHASE: Analogies ---

export const ZONE1_ANALOGIES: AnalogyMapping[] = [
  {
    id: "z1-analogy-1",
    conceptId: "conf-basic-rule",
    zoneSlug: "the-vault",
    analogyText:
      "A patent application is like a sealed letter deposited in a bank vault. The bank (USPTO) is the custodian and cannot open the letter or tell anyone about its contents. After 18 months, the vault has a timed lock that automatically opens (publication), letting everyone read the letter. But the depositor can request the lock never opens — as long as the letter was not also deposited in any foreign bank that has an automatic-open policy.",
    mappings: [
      { analogyTerm: "Sealed letter", formalTerm: "Patent application" },
      { analogyTerm: "Bank vault", formalTerm: "USPTO confidential files" },
      {
        analogyTerm: "Bank (custodian)",
        formalTerm: "USPTO under 35 USC 122(a)",
      },
      {
        analogyTerm: "Timed lock (18 months)",
        formalTerm: "Publication under 35 USC 122(b)",
      },
      {
        analogyTerm: "Request lock never opens",
        formalTerm: "Non-publication request under 35 USC 122(b)(2)(B)(i)",
      },
      {
        analogyTerm: "Foreign bank with auto-open",
        formalTerm: "Foreign country requiring 18-month publication",
      },
    ],
    followUp: {
      stem: "In the analogy, what happens if the depositor requests the lock never open but then deposits the same letter in a foreign bank with an auto-open policy?",
      options: [
        "Nothing — the US bank's lock remains permanently sealed",
        "The depositor must notify the US bank within 45 days or the letter is destroyed (application abandoned)",
        "The foreign bank notifies the US bank automatically",
        "The depositor forfeits only the foreign deposit",
      ],
      correctIndex: 1,
      explanation:
        "Under 35 USC 122(b)(2)(B)(iii), if the applicant files abroad in a country requiring publication after making a non-publication request, they must notify the USPTO within 45 days. Failure to do so can result in the application being regarded as abandoned.",
    },
  },
  {
    id: "z1-analogy-2",
    conceptId: "conf-access-pending",
    zoneSlug: "the-vault",
    analogyText:
      "Access to patent files works like a library with three rooms. The Public Reading Room holds all published applications and granted patents — anyone can walk in. The Restricted Archive holds unpublished pending applications — you need a signed pass from the author (applicant authority) to enter. The Reference Shelf is special: if a book in the Public Reading Room cites a document from the Restricted Archive, that cited document gets moved to a display case visible to everyone.",
    mappings: [
      {
        analogyTerm: "Public Reading Room",
        formalTerm: "37 CFR 1.14(a) — published apps and patents",
      },
      {
        analogyTerm: "Restricted Archive",
        formalTerm: "37 CFR 1.14(b) — unpublished pending apps",
      },
      {
        analogyTerm: "Signed pass from author",
        formalTerm: "Petition with applicant authority",
      },
      {
        analogyTerm: "Book citing a document",
        formalTerm: "US patent referencing an unpublished application",
      },
      {
        analogyTerm: "Document moved to display case",
        formalTerm: "37 CFR 1.14(a)(1)(iv) — referenced app becomes public",
      },
    ],
    followUp: {
      stem: "In the library analogy, if a document in the Restricted Archive is never cited by any book in the Public Reading Room, and the author abandons it, does it move to the Public Reading Room?",
      options: [
        "Yes — all abandoned documents are automatically made public",
        "No — it stays in the Restricted Archive unless published, cited in a patent, or the author consents",
        "Yes — but only after 20 years",
        "It is destroyed (expunged) upon abandonment",
      ],
      correctIndex: 1,
      explanation:
        "Abandonment alone does not make an unpublished application public. Under 37 CFR 1.14, an abandoned unpublished application remains confidential unless it was previously published, is referenced in a US patent, or the applicant consents to access.",
    },
  },
  {
    id: "z1-analogy-3",
    conceptId: "conf-employee-oath",
    zoneSlug: "the-vault",
    analogyText:
      "USPTO employees are like vault guards at a high-security bank. Each guard swears an oath when hired never to reveal what is inside any vault. If a guard tells an outsider what a customer has stored, the guard faces criminal prosecution — not just termination but actual jail time up to a year. The law treats the contents of each vault (application) as a secret entrusted to the government, and the guards (employees) as fiduciaries with criminal liability.",
    mappings: [
      {
        analogyTerm: "Vault guards",
        formalTerm: "USPTO employees and examiners",
      },
      {
        analogyTerm: "Oath when hired",
        formalTerm: "Oath of office (MPEP 101)",
      },
      {
        analogyTerm: "Contents of the vault",
        formalTerm: "Unpublished application information",
      },
      {
        analogyTerm: "Criminal prosecution and jail time",
        formalTerm: "18 USC 1905 — fines, up to 1 year prison, removal",
      },
      {
        analogyTerm: "Fiduciary with criminal liability",
        formalTerm: "Government employee duty of confidentiality",
      },
    ],
    followUp: {
      stem: "In the analogy, once the timed lock opens (the application is published), can the guard freely discuss the vault's contents?",
      options: [
        "No — the oath covers all information indefinitely, even after publication",
        "Yes — once an application is published, the information is public and no longer subject to confidentiality restrictions",
        "Only if the customer (applicant) gives written permission",
        "Only with other guards (USPTO employees), not the general public",
      ],
      correctIndex: 1,
      explanation:
        "Once an application is published or a patent is granted, the information becomes part of the public record. The confidentiality obligation under 35 USC 122(a) applies to information that has not yet been made public. Published information is freely accessible.",
    },
  },
];

// --- ABSORB PHASE: Visual Timelines ---

export const ZONE1_TIMELINES: VisualTimelineData[] = [
  {
    id: "z1-timeline-1",
    conceptId: "conf-publication",
    zoneSlug: "the-vault",
    title: "Patent Application Confidentiality Lifecycle",
    description:
      "Key milestones from filing to the point where an application's confidentiality status changes, including publication, grant, and access triggers.",
    startLabel: "Filing Date",
    endLabel: "Patent Grant / Final Disposition",
    milestones: [
      {
        id: "z1-t1-m1",
        label: "Application filed",
        description:
          "Application enters the USPTO vault. Full confidentiality begins under 35 USC 122(a). No information given to the public.",
        position: 0,
      },
      {
        id: "z1-t1-m2",
        label: "Non-publication request deadline",
        description:
          "Must be filed at the time of filing or within the time set by the USPTO. Applicant certifies no foreign filing in countries requiring 18-month publication.",
        position: 10,
      },
      {
        id: "z1-t1-m3",
        label: "Redaction request deadline",
        description:
          "Any request to redact trade secrets or confidential commercial information must be filed before the publication date.",
        position: 40,
      },
      {
        id: "z1-t1-m4",
        label: "18-month publication",
        description:
          "Application published under 35 USC 122(b). File becomes publicly accessible under 37 CFR 1.14(a). Exceptions: provisionals, designs, secrecy orders, and non-publication requests.",
        position: 60,
      },
      {
        id: "z1-t1-m5",
        label: "Patent granted",
        description:
          "Full file wrapper publicly available. Prosecution history, amendments, and correspondence become part of the public record.",
        position: 90,
      },
      {
        id: "z1-t1-m6",
        label: "If abandoned (unpublished)",
        description:
          "Remains confidential unless: (1) referenced in a US patent, (2) previously published, or (3) applicant consents. Abandonment alone does not end confidentiality.",
        position: 100,
      },
    ],
  },
  {
    id: "z1-timeline-2",
    conceptId: "conf-access-pending",
    zoneSlug: "the-vault",
    title: "Third-Party Access Decision Tree (37 CFR 1.14)",
    description:
      "The sequence of conditions that determine whether a third party can access a patent application file, from the most open to the most restricted categories.",
    startLabel: "Is it public?",
    endLabel: "No access (confidential)",
    milestones: [
      {
        id: "z1-t2-m1",
        label: "Patent granted?",
        description:
          "If yes: full file wrapper open to the public under 37 CFR 1.14(a)(1)(i). No petition needed.",
        position: 0,
      },
      {
        id: "z1-t2-m2",
        label: "Application published?",
        description:
          "If yes: file open to the public under 37 CFR 1.14(a)(1)(ii). Includes published abandoned applications.",
        position: 20,
      },
      {
        id: "z1-t2-m3",
        label: "Referenced in a US patent?",
        description:
          "If yes: file accessible under 37 CFR 1.14(a)(1)(iv). Even unpublished applications become accessible when identified in a US patent.",
        position: 40,
      },
      {
        id: "z1-t2-m4",
        label: "Applicant authorized access?",
        description:
          "If yes: petition under 37 CFR 1.14(b) with evidence of applicant's written authority grants access to the unpublished file.",
        position: 60,
      },
      {
        id: "z1-t2-m5",
        label: "Requester is of record?",
        description:
          "Attorney of record, named inventor, applicant, or recorded assignee can access under 37 CFR 1.14(c) without petition.",
        position: 80,
      },
      {
        id: "z1-t2-m6",
        label: "None of the above",
        description:
          "Access denied. The application remains confidential under 35 USC 122(a). No FOIA override.",
        position: 100,
      },
    ],
  },
];
