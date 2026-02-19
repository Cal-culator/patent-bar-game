import { OpenBookQuestion, SpeedrunPrompt } from "@/types";

// ============================================================
// OPEN-BOOK QUESTIONS (10)
// Zone 1: The Vault — MPEP 101, 102
// Confidentiality & Access
// ============================================================

export const ZONE1_OPEN_BOOK: OpenBookQuestion[] = [
  // Group 1: Confidentiality of Applications (MPEP 101) — 5 questions
  {
    id: "ob-z1-01",
    conceptId: "conf-app-confidentiality",
    zoneSlug: "the-vault",
    stem: "Under 35 U.S.C. 122(a), which of the following best describes the default confidentiality status of patent applications?",
    options: [
      { text: "Applications are open to public inspection upon filing" },
      { text: "Applications are kept in confidence by the USPTO and no information may be given without authority of the applicant" },
      { text: "Applications are confidential only during the first 6 months after filing" },
      { text: "Applications are confidential only if the applicant files a specific request for confidential treatment" },
    ],
    correctIndex: 1,
    explanation:
      "35 U.S.C. 122(a) establishes that applications for patents shall be kept in confidence by the Patent and Trademark Office, and no information concerning the same shall be given without authority of the applicant or owner, except as otherwise provided by law.",
    citationRef: "35 USC 122(a)",
    targetSectionId: "mpep-101-01",
    searchHint: "kept in confidence",
  },
  {
    id: "ob-z1-02",
    conceptId: "conf-18-month-publication",
    zoneSlug: "the-vault",
    stem: "According to 35 U.S.C. 122(b)(1)(A), when is a patent application published by the USPTO?",
    options: [
      { text: "Immediately upon filing of the application" },
      { text: "Promptly after the expiration of a period of 18 months from the earliest filing date" },
      { text: "12 months after the earliest filing date for domestic applications only" },
      { text: "Only after the patent is granted or the application is finally rejected" },
    ],
    correctIndex: 1,
    explanation:
      "35 U.S.C. 122(b)(1)(A) requires that each application for a patent shall be published promptly after the expiration of a period of 18 months from the earliest filing date for which a benefit is sought under title 35.",
    citationRef: "35 USC 122(b)(1)(A)",
    targetSectionId: "mpep-101-02",
    searchHint: "18 months",
  },
  {
    id: "ob-z1-03",
    conceptId: "conf-non-publication-request",
    zoneSlug: "the-vault",
    stem: "Under 35 U.S.C. 122(b)(2)(B)(i), what must an applicant certify in order to request that an application not be published?",
    options: [
      { text: "That the invention has no commercial value and publication would cause financial harm" },
      { text: "That the invention has not been and will not be the subject of an application filed in a foreign country that requires 18-month publication" },
      { text: "That the applicant is a small entity or micro entity under 37 C.F.R. 1.27" },
      { text: "That the application contains trade secrets critical to national defense" },
    ],
    correctIndex: 1,
    explanation:
      "35 U.S.C. 122(b)(2)(B)(i) allows an applicant to request non-publication at the time of filing, provided the applicant certifies that the invention disclosed in the application has not been and will not be the subject of an application filed in another country (or under a multilateral international agreement) that requires publication at 18 months.",
    citationRef: "35 USC 122(b)(2)(B)(i)",
    targetSectionId: "mpep-101-02",
    searchHint: "non-publication request",
  },
  {
    id: "ob-z1-04",
    conceptId: "conf-criminal-penalty",
    zoneSlug: "the-vault",
    stem: "Which federal criminal statute imposes penalties on a USPTO employee who discloses confidential patent application information without authorization?",
    options: [
      { text: "18 U.S.C. 1001 (false statements)" },
      { text: "18 U.S.C. 1905 (disclosure of confidential information)" },
      { text: "35 U.S.C. 186 (penalty for unauthorized filing abroad)" },
      { text: "18 U.S.C. 2071 (concealment or destruction of documents)" },
    ],
    correctIndex: 1,
    explanation:
      "18 U.S.C. 1905 provides criminal penalties for any officer or employee of the United States who publishes, divulges, or discloses confidential information, including patent application information, coming to them in the course of their employment. Violation can result in fines, imprisonment, and removal from office.",
    citationRef: "18 USC 1905",
    targetSectionId: "mpep-101-03",
    searchHint: "criminal penalty",
  },
  {
    id: "ob-z1-05",
    conceptId: "conf-trade-secret-redaction",
    zoneSlug: "the-vault",
    stem: "Under 37 C.F.R. 1.217, what mechanism is available to applicants who submit information containing trade secrets in connection with a biotechnology patent application?",
    options: [
      { text: "The applicant may request that the entire application be withheld from publication permanently" },
      { text: "The applicant may petition to have trade secret material redacted from the published application" },
      { text: "Trade secrets must be submitted in a separate sealed envelope that is destroyed after examination" },
      { text: "The applicant may request that the trade secret portion be examined by a specially designated examiner under a confidentiality agreement" },
    ],
    correctIndex: 1,
    explanation:
      "37 C.F.R. 1.217 provides that an applicant who submits information in a biotechnology patent application containing trade secrets may petition to have that material redacted from the published version of the application, thereby protecting proprietary information while still meeting disclosure requirements.",
    citationRef: "37 CFR 1.217",
    targetSectionId: "mpep-101-04",
    searchHint: "trade secret redaction",
  },

  // Group 2: Access to Patent Applications (MPEP 102) — 5 questions
  {
    id: "ob-z1-06",
    conceptId: "conf-access-published",
    zoneSlug: "the-vault",
    stem: "According to 37 C.F.R. 1.14(a)(1), which category of patent applications is open to public inspection?",
    options: [
      { text: "All applications regardless of status, after 6 months from filing" },
      { text: "Published applications, patents, and statutory invention registrations" },
      { text: "Only applications that have been granted as patents" },
      { text: "Only applications where the applicant has expressly consented to public access" },
    ],
    correctIndex: 1,
    explanation:
      "37 C.F.R. 1.14(a)(1) provides that published applications, patents, and statutory invention registrations are open to public inspection. Once an application has been published under 35 U.S.C. 122(b), the file wrapper and contents become available.",
    citationRef: "37 CFR 1.14(a)(1)",
    targetSectionId: "mpep-102-01",
    searchHint: "open to public inspection",
  },
  {
    id: "ob-z1-07",
    conceptId: "conf-access-abandoned",
    zoneSlug: "the-vault",
    stem: "Under 37 C.F.R. 1.14(a)(1)(iv), access to an abandoned application that was not published is available to the public under which circumstance?",
    options: [
      { text: "Never; abandoned unpublished applications remain permanently confidential" },
      { text: "When the application is referenced in a U.S. patent, a statutory invention registration, a U.S. application publication, or an international publication" },
      { text: "After 20 years from the earliest filing date of the abandoned application" },
      { text: "Only upon petition by a party showing good cause to the Director" },
    ],
    correctIndex: 1,
    explanation:
      "37 C.F.R. 1.14(a)(1)(iv) provides that an abandoned application that has not been published becomes available when it is identified or relied upon in a U.S. patent, a statutory invention registration, a U.S. application publication, or an international publication of an international application.",
    citationRef: "37 CFR 1.14(a)(1)(iv)",
    targetSectionId: "mpep-102-02",
    searchHint: "abandoned application referenced",
  },
  {
    id: "ob-z1-08",
    conceptId: "conf-access-status-info",
    zoneSlug: "the-vault",
    stem: "Under 37 C.F.R. 1.14(a)(2), what status information about a pending or abandoned application may be provided to the public without requiring a petition?",
    options: [
      { text: "The names of the inventors, the filing date, and all pending claims" },
      { text: "Whether the application is pending, abandoned, or patented, along with the application number" },
      { text: "A complete copy of the file wrapper including all Office actions" },
      { text: "Only whether a patent has been granted, with no further detail" },
    ],
    correctIndex: 1,
    explanation:
      "37 C.F.R. 1.14(a)(2) provides that status information, such as whether an application is pending, abandoned, or patented, may be supplied to the public upon request. This limited status information does not require the written authority of the applicant or a petition.",
    citationRef: "37 CFR 1.14(a)(2)",
    targetSectionId: "mpep-102-02",
    searchHint: "status information",
  },
  {
    id: "ob-z1-09",
    conceptId: "conf-access-written-authority",
    zoneSlug: "the-vault",
    stem: "Under 37 C.F.R. 1.14(c), who may grant written authority to access an unpublished pending application?",
    options: [
      { text: "Any registered patent attorney or agent, regardless of representation" },
      { text: "The applicant, the inventor, or the assignee of the application" },
      { text: "Only the Director of the USPTO upon showing of special circumstances" },
      { text: "A federal court upon issuance of a subpoena" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 C.F.R. 1.14(c), the applicant, inventor, or assignee may provide written authority granting access to an unpublished pending application. This written authority permits a third party to obtain copies or inspect the file contents.",
    citationRef: "37 CFR 1.14(c)",
    targetSectionId: "mpep-102-03",
    searchHint: "written authority",
  },
  {
    id: "ob-z1-10",
    conceptId: "conf-access-petition",
    zoneSlug: "the-vault",
    stem: "Under 37 C.F.R. 1.14(i), a petition to access an unpublished pending application by a person who is not the applicant may be granted when which condition is met?",
    options: [
      { text: "The petitioner demonstrates they are conducting prior art research for a pending litigation" },
      { text: "The petitioner shows that the application is material to a pending interference, derivation proceeding, or other specified USPTO proceeding" },
      { text: "The petitioner is an employee of a foreign patent office with a reciprocal access agreement" },
      { text: "The petitioner pays a special access fee equal to five times the standard search fee" },
    ],
    correctIndex: 1,
    explanation:
      "37 C.F.R. 1.14(i) permits a petition to access an unpublished pending application when the petitioner can demonstrate that the application is material to a pending interference proceeding, derivation proceeding, or other specified proceeding before the USPTO. The petitioner must establish a sufficient basis for the access request.",
    citationRef: "37 CFR 1.14(i)",
    targetSectionId: "mpep-102-04",
    searchHint: "petition to access",
  },
];

// ============================================================
// SPEEDRUN PROMPTS (8)
// ============================================================

export const ZONE1_SPEEDRUN: SpeedrunPrompt[] = [
  {
    id: "sr-z1-01",
    conceptId: "conf-app-confidentiality",
    zoneSlug: "the-vault",
    prompt: "The statute establishing that patent applications shall be kept in confidence by the USPTO",
    acceptedAnswers: [
      "35 USC 122",
      "35 U.S.C. 122",
      "35 USC 122(a)",
      "35 U.S.C. 122(a)",
      "122",
      "122(a)",
      "section 122",
    ],
    canonicalAnswer: "35 USC 122(a)",
    explanation:
      "35 U.S.C. 122(a) provides that applications for patents shall be kept in confidence by the Patent and Trademark Office and no information concerning them shall be given without authority of the applicant.",
    difficulty: 1,
  },
  {
    id: "sr-z1-02",
    conceptId: "conf-18-month-publication",
    zoneSlug: "the-vault",
    prompt: "The statutory subsection requiring publication of patent applications 18 months after the earliest filing date",
    acceptedAnswers: [
      "35 USC 122(b)(1)(A)",
      "35 U.S.C. 122(b)(1)(A)",
      "35 USC 122(b)",
      "35 U.S.C. 122(b)",
      "122(b)(1)(A)",
      "122(b)",
    ],
    canonicalAnswer: "35 USC 122(b)(1)(A)",
    explanation:
      "35 U.S.C. 122(b)(1)(A) mandates that each application for a patent shall be published promptly after the expiration of 18 months from the earliest filing date for which a benefit is sought.",
    difficulty: 2,
  },
  {
    id: "sr-z1-03",
    conceptId: "conf-criminal-penalty",
    zoneSlug: "the-vault",
    prompt: "The federal criminal statute imposing penalties on government employees who disclose confidential patent application information",
    acceptedAnswers: [
      "18 USC 1905",
      "18 U.S.C. 1905",
      "1905",
      "section 1905",
    ],
    canonicalAnswer: "18 USC 1905",
    explanation:
      "18 U.S.C. 1905 makes it a criminal offense for any officer or employee of the United States to publish, divulge, or disclose confidential information, including patent application information, obtained in the course of their employment.",
    difficulty: 1,
  },
  {
    id: "sr-z1-04",
    conceptId: "conf-access-published",
    zoneSlug: "the-vault",
    prompt: "The regulation governing public access to patent applications, including which applications are open to inspection",
    acceptedAnswers: [
      "37 CFR 1.14",
      "37 C.F.R. 1.14",
      "1.14",
      "CFR 1.14",
      "section 1.14",
    ],
    canonicalAnswer: "37 CFR 1.14",
    explanation:
      "37 C.F.R. 1.14 is the comprehensive regulation governing access to patent applications. Subsections (a) through (i) detail different categories of access, from publicly available applications to petition-based access for unpublished applications.",
    difficulty: 1,
  },
  {
    id: "sr-z1-05",
    conceptId: "conf-non-publication-request",
    zoneSlug: "the-vault",
    prompt: "The statutory provision allowing an applicant to request non-publication by certifying no foreign filing requiring 18-month publication",
    acceptedAnswers: [
      "35 USC 122(b)(2)(B)(i)",
      "35 U.S.C. 122(b)(2)(B)(i)",
      "122(b)(2)(B)(i)",
      "35 USC 122(b)(2)(B)",
      "35 U.S.C. 122(b)(2)(B)",
      "122(b)(2)(B)",
    ],
    canonicalAnswer: "35 USC 122(b)(2)(B)(i)",
    explanation:
      "35 U.S.C. 122(b)(2)(B)(i) permits an applicant to request non-publication at the time of filing by certifying that the invention has not been and will not be the subject of a foreign application requiring 18-month publication.",
    difficulty: 3,
  },
  {
    id: "sr-z1-06",
    conceptId: "conf-trade-secret-redaction",
    zoneSlug: "the-vault",
    prompt: "The regulation providing for redaction of trade secret material from published biotechnology patent applications",
    acceptedAnswers: [
      "37 CFR 1.217",
      "37 C.F.R. 1.217",
      "1.217",
      "CFR 1.217",
      "section 1.217",
    ],
    canonicalAnswer: "37 CFR 1.217",
    explanation:
      "37 C.F.R. 1.217 allows applicants who have submitted trade secret information in biotechnology patent applications to petition for redaction of that material from the published version of the application.",
    difficulty: 3,
  },
  {
    id: "sr-z1-07",
    conceptId: "conf-mpep-confidentiality",
    zoneSlug: "the-vault",
    prompt: "The MPEP section covering the confidentiality framework for patent applications, including statutory and regulatory basis",
    acceptedAnswers: [
      "MPEP 101",
      "101",
      "section 101",
      "MPEP section 101",
    ],
    canonicalAnswer: "MPEP 101",
    explanation:
      "MPEP 101 provides the framework for confidentiality of patent applications, discussing 35 U.S.C. 122(a), the 18-month publication requirement, non-publication requests, and penalties under 18 U.S.C. 1905.",
    difficulty: 2,
  },
  {
    id: "sr-z1-08",
    conceptId: "conf-mpep-access",
    zoneSlug: "the-vault",
    prompt: "The MPEP section detailing rules for access to applications and status information, including public access and petition-based access",
    acceptedAnswers: [
      "MPEP 102",
      "102",
      "section 102",
      "MPEP section 102",
    ],
    canonicalAnswer: "MPEP 102",
    explanation:
      "MPEP 102 covers access rules for patent applications and status information, including 37 C.F.R. 1.14's categories of access: publicly available applications, status information, written authority access, and petition-based access.",
    difficulty: 2,
  },
];
