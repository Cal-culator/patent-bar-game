import { BossQuestion } from "@/types";

// ============================================================
// Zone 6: The Border — Boss Battle Questions
// 10 mixed questions (7 scenario, 3 true/false) at difficulty 3-4
// ============================================================

export const ZONE6_BOSS: BossQuestion[] = [
  // Q1: Scenario — Complex timing (difficulty 3)
  {
    id: "z6-boss-1",
    conceptId: "ffl-basic-rule",
    zoneSlug: "the-border",
    questionType: "scenario",
    difficulty: 3,
    stem: "Inventor Adams files a US non-provisional application on January 15. He receives a foreign filing license on January 30. On February 10, he files in Germany. On March 1, a secrecy order is imposed on the US application. Which statement is correct?",
    options: [
      { text: "The German filing is valid because the license was granted before the secrecy order" },
      { text: "The German filing is invalid because the secrecy order retroactively revokes the license" },
      { text: "Adams must withdraw the German filing within 30 days of the secrecy order" },
      { text: "The German filing is invalid because it was made within 6 months of the US filing date" },
    ],
    correctIndex: 0,
    explanation:
      "A foreign filing made under a validly granted license before a secrecy order is imposed is not retroactively invalidated. The secrecy order prevents future foreign filings but does not undo filings already made under a valid license.",
    citationRef: "35 USC 181; 35 USC 184",
  },
  // Q2: Scenario — Procedure (difficulty 3)
  {
    id: "z6-boss-2",
    conceptId: "ffl-automatic-petition",
    zoneSlug: "the-border",
    questionType: "scenario",
    difficulty: 3,
    stem: "Attorney Brooks files a US provisional application on April 1 for her client's invention made in the US. The filing receipt, issued April 10, indicates 'Foreign Filing License Granted.' On April 15, the client wants to file in Canada. What should Brooks advise?",
    options: [
      { text: "Wait until October 1 (6 months) because the license on a provisional has no effect" },
      { text: "File a separate petition for a foreign filing license specifically for the Canadian filing" },
      { text: "Proceed with the Canadian filing — the license on the filing receipt authorizes it" },
      { text: "File a non-provisional first, then request a new license for the Canadian filing" },
    ],
    correctIndex: 2,
    explanation:
      "Under 37 CFR 5.12, filing any US patent application (including a provisional) automatically constitutes a petition for a foreign filing license. When the license is granted on the filing receipt, the applicant may immediately file abroad for the subject matter covered by that application.",
    citationRef: "37 CFR 5.12",
  },
  // Q3: Scenario — License scope edge case (difficulty 3)
  {
    id: "z6-boss-3",
    conceptId: "ffl-license-scope",
    zoneSlug: "the-border",
    questionType: "scenario",
    difficulty: 3,
    stem: "Inventor Chen receives a foreign filing license for her US application covering a solar panel design. She later adds new claims to a continuation-in-part (CIP) that disclose a novel inverter circuit not in the original application. Can she file the CIP's new matter abroad under the original license?",
    options: [
      { text: "Yes, because CIPs are considered part of the same patent family" },
      { text: "Yes, because the original license extends to all continuations and CIPs" },
      { text: "No, the new inverter circuit is new subject matter not covered by the original license" },
      { text: "No, but she can file abroad after 6 months from the CIP filing date without any license" },
    ],
    correctIndex: 2,
    explanation:
      "A foreign filing license is limited to the subject matter of the application on which it was granted. New matter introduced in a CIP that was not disclosed in the original application requires its own license, typically obtained when the CIP itself is filed in the US.",
    citationRef: "MPEP 140; 37 CFR 5.11",
  },
  // Q4: True/False — Secrecy order edge case (difficulty 3)
  {
    id: "z6-boss-4",
    conceptId: "ffl-secrecy-order",
    zoneSlug: "the-border",
    questionType: "true_false",
    difficulty: 3,
    stem: "True or False: If a secrecy order is rescinded, the applicant must file a new petition and obtain a new foreign filing license before filing abroad.",
    isTrue: false,
    explanation:
      "When a secrecy order is rescinded, the applicant is notified and may proceed to file abroad. If a foreign filing license was previously granted (before the secrecy order was imposed), it is effectively restored. If the 6-month period from the US filing date has already passed, no license is needed at all.",
    citationRef: "35 USC 181; MPEP 140",
  },
  // Q5: True/False — Penalties edge case (difficulty 3)
  {
    id: "z6-boss-5",
    conceptId: "ffl-penalties",
    zoneSlug: "the-border",
    questionType: "true_false",
    difficulty: 3,
    stem: "True or False: The patent bar under 35 USC 185 for unauthorized foreign filing applies only to the specific inventor who filed abroad, not to assignees or subsequent patent applicants.",
    isTrue: false,
    explanation:
      "The bar under 35 USC 185 applies to the invention itself — 'no patent shall be granted' on an application that was filed abroad in violation of 35 USC 184. This bars the patent regardless of whether the applicant is the original inventor, an assignee, or any other party.",
    citationRef: "35 USC 185",
  },
  // Q6: Scenario — Multi-concept integration (difficulty 4)
  {
    id: "z6-boss-6",
    conceptId: "ffl-retroactive-license",
    zoneSlug: "the-border",
    questionType: "scenario",
    difficulty: 4,
    stem: "MegaCorp's US subsidiary invents a chemical process in New Jersey. The subsidiary's Japanese parent company files a patent in Japan on May 1, not knowing about the US foreign filing license requirement. On November 1, MegaCorp files a US application and discovers the unauthorized Japanese filing. Which combination of actions gives MegaCorp the best chance of obtaining a US patent?",
    options: [
      { text: "Withdraw the Japanese application, then file the US application without mentioning the Japanese filing" },
      { text: "File the US application and petition for a retroactive license under 37 CFR 5.25, demonstrating the filing was through error and without deceptive intent" },
      { text: "File the US application and argue the Japanese parent company is a separate legal entity so 35 USC 184 does not apply" },
      { text: "Wait 12 months from the Japanese filing and claim Paris Convention priority in the US application" },
    ],
    correctIndex: 1,
    explanation:
      "The best course is to petition for a retroactive license under 37 CFR 5.25. The key requirement is showing the filing was through error (the parent company's ignorance of the requirement) and without deceptive intent. Withdrawing the Japanese application does not cure the violation, and the separate-entity argument fails because the requirement follows the invention, not the entity.",
    citationRef: "37 CFR 5.25; 35 USC 185",
  },
  // Q7: Scenario — Multi-concept integration (difficulty 4)
  {
    id: "z6-boss-7",
    conceptId: "ffl-filing-timeline",
    zoneSlug: "the-border",
    questionType: "scenario",
    difficulty: 4,
    stem: "Dr. Patel files a US application on January 1 for an invention made in the US. No foreign filing license is granted with the filing receipt (it states 'License not granted'). On February 15, he files a petition under 37 CFR 5.13 and receives a license on March 1. Meanwhile, on February 1, a competitor independently files a PCT application for a similar invention. What is the earliest date Dr. Patel can file abroad?",
    options: [
      { text: "March 1 — the date his license under 37 CFR 5.13 was granted" },
      { text: "July 1 — six months from the US filing date, since the original automatic license was not granted" },
      { text: "He cannot file abroad at all because the original license was denied" },
      { text: "February 15 — the date he filed the petition under 37 CFR 5.13" },
    ],
    correctIndex: 0,
    explanation:
      "When the automatic license on the filing receipt is not granted, the applicant must obtain a license through other means. The 37 CFR 5.13 petition resulted in a license on March 1, which is the earliest date Dr. Patel can file abroad. The 6-month fallback only applies if no secrecy order has been imposed.",
    citationRef: "37 CFR 5.13; 35 USC 184",
  },
  // Q8: Scenario — Multi-concept (difficulty 4)
  {
    id: "z6-boss-8",
    conceptId: "ffl-no-us-app",
    zoneSlug: "the-border",
    questionType: "scenario",
    difficulty: 4,
    stem: "A UK company hires a US-based contractor to develop new encryption firmware entirely in the US. The company files directly in the UK without any US filing or license. Two years later, the company wants to file a US application. The company argues no license was needed because the invention was made for a foreign entity. What is the most likely outcome?",
    options: [
      { text: "The company is correct — inventions made for foreign entities are exempt from 35 USC 184" },
      { text: "The US application will be granted because the 6-month window has long passed" },
      { text: "The US application is barred under 35 USC 185 unless the company obtains a retroactive license by showing error and lack of deceptive intent" },
      { text: "The US application will be granted but the UK filing is retroactively void" },
    ],
    correctIndex: 2,
    explanation:
      "35 USC 184 applies to any invention 'made in this country' regardless of who it was made for. The UK company needed a license before filing abroad. Without a retroactive license under 37 CFR 5.25 (showing error and no deceptive intent), the US patent is barred under 35 USC 185.",
    citationRef: "35 USC 184; 35 USC 185; 37 CFR 5.25",
  },
  // Q9: True/False — Export control edge case (difficulty 4)
  {
    id: "z6-boss-9",
    conceptId: "ffl-export-controls",
    zoneSlug: "the-border",
    questionType: "true_false",
    difficulty: 4,
    stem: "True or False: An invention subject to ITAR (International Traffic in Arms Regulations) export controls is automatically exempt from the USPTO foreign filing license requirement because ITAR provides its own authorization framework.",
    isTrue: false,
    explanation:
      "ITAR and the USPTO foreign filing license requirement are separate, independent regimes. An invention subject to ITAR must comply with both ITAR export controls AND the 35 USC 184 foreign filing license requirement. Obtaining an ITAR license does not satisfy the patent foreign filing license requirement, and vice versa.",
    citationRef: "35 USC 184; MPEP 140",
  },
  // Q10: Scenario — Ultimate integrative question (difficulty 4)
  {
    id: "z6-boss-10",
    conceptId: "ffl-comprehensive",
    zoneSlug: "the-border",
    questionType: "scenario",
    difficulty: 4,
    stem: "Startup XYZ, based in Boston, invents a novel drug delivery system. They file a US provisional on March 1, receiving a foreign filing license. On May 15, they file a PCT application. On June 1, a secrecy order is imposed. On December 1, the secrecy order is rescinded. On January 15 of the following year, XYZ files a US non-provisional claiming priority to the provisional. Which statement best describes XYZ's legal position?",
    options: [
      { text: "The PCT filing is invalid because it was made before the secrecy order; XYZ must withdraw it and refile" },
      { text: "The PCT filing is valid (made under a license before the secrecy order), the secrecy order blocked further filings between June 1 and December 1, and XYZ may now proceed with national phase entries" },
      { text: "The secrecy order retroactively invalidated the foreign filing license, so the PCT filing violates 35 USC 184 and XYZ needs a retroactive license" },
      { text: "The US non-provisional is barred because XYZ filed a PCT application while a secrecy order was in effect" },
    ],
    correctIndex: 1,
    explanation:
      "The PCT filing on May 15 was made under a validly granted license before the secrecy order (June 1), so it is valid. The secrecy order blocked further foreign filings from June 1 to December 1, but did not retroactively invalidate the earlier PCT. After the order was rescinded on December 1, XYZ may proceed with national phase entries. The US non-provisional is not barred because the PCT was properly authorized.",
    citationRef: "35 USC 181; 35 USC 184; 37 CFR 5.12",
  },
];
