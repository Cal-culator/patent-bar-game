import { BossQuestion } from "@/types";

// ============================================================
// Zone 3: The Gatekeepers — Boss Battle Questions
// 10 mixed questions (7 scenario, 3 true/false) at difficulty 3-4
// ============================================================

export const ZONE3_BOSS: BossQuestion[] = [
  // Q1: Scenario — Suspended practitioner + assignee interaction (difficulty 3)
  {
    id: "z3-boss-1",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    questionType: "scenario",
    difficulty: 3,
    stem: "Attorney Nakamura is suspended from practice before the USPTO. Her former client, PharmaCo (assignee of the entire interest), has a pending application with a response deadline in 6 weeks. Nakamura offers to 'ghostwrite' the response for a new attorney to sign and file. Is this permissible?",
    options: [
      { text: "Yes, because Nakamura is not directly filing the response herself" },
      { text: "Yes, as long as the new attorney reviews and approves the response" },
      { text: "No, because ghostwriting a response constitutes practicing before the USPTO, which is prohibited for suspended practitioners" },
      { text: "No, but only because PharmaCo is the assignee rather than the inventor" },
    ],
    correctIndex: 2,
    explanation:
      "Under MPEP 105 and 37 CFR 11.116, a suspended practitioner is prohibited from practicing before the USPTO in any capacity. Ghostwriting patent documents constitutes unauthorized practice regardless of who signs or files them. Nakamura must not participate in preparing the response.",
    citationRef: "37 CFR 11.116; MPEP 105",
  },
  // Q2: Scenario — Chain of title issue (difficulty 3)
  {
    id: "z3-boss-2",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    questionType: "scenario",
    difficulty: 3,
    stem: "Inventor Garcia assigned his patent rights to Company A, which later merged with Company B. Company B now wants to respond to an office action. Company B files a 37 CFR 3.73(c) statement attaching only the Garcia-to-Company A assignment. Is this sufficient?",
    options: [
      { text: "Yes, because the assignment from Garcia to Company A establishes the chain of title" },
      { text: "No, the 3.73(c) statement must include documentary evidence of the complete chain of title from Garcia to Company A to Company B" },
      { text: "No, because mergers do not transfer patent rights" },
      { text: "Yes, because the USPTO automatically updates records when companies merge" },
    ],
    correctIndex: 1,
    explanation:
      "Under 37 CFR 3.73(c), the statement must be supported by documentary evidence establishing the complete chain of title from the inventor to the current assignee. Company B must provide evidence of both the Garcia-to-Company A assignment and the Company A-to-Company B merger to show the unbroken chain.",
    citationRef: "37 CFR 3.73(c)",
  },
  // Q3: Scenario — Partial interest complications (difficulty 3)
  {
    id: "z3-boss-3",
    conceptId: "gate-partial-interest",
    zoneSlug: "the-gatekeepers",
    questionType: "scenario",
    difficulty: 3,
    stem: "Three companies — Alpha (40%), Beta (35%), and Gamma (25%) — each hold a partial interest in a patent application invented by Dr. Kim. Alpha and Beta want to file a continuation application, but Gamma refuses. Can Alpha and Beta proceed?",
    options: [
      { text: "Yes, because Alpha and Beta together hold a 75% majority" },
      { text: "Yes, because any two of three partial assignees can act" },
      { text: "No, all partial assignees (Alpha, Beta, and Gamma) together with Dr. Kim must join to take action" },
      { text: "No, but Alpha and Beta can petition the Commissioner to override Gamma's refusal" },
    ],
    correctIndex: 2,
    explanation:
      "Under 37 CFR 3.71, when there are multiple partial assignees, all of them together with the inventor must join to take action. There is no majority-rule provision. Alpha and Beta cannot proceed without both Gamma and Dr. Kim joining.",
    citationRef: "37 CFR 3.71",
  },
  // Q4: True/False — Pro se limitation (difficulty 3)
  {
    id: "z3-boss-4",
    conceptId: "gate-exception",
    zoneSlug: "the-gatekeepers",
    questionType: "true_false",
    difficulty: 3,
    stem: "True or False: A suspended practitioner who is a co-inventor on a patent application may file the application pro se and represent both themselves and the other co-inventors.",
    isTrue: false,
    explanation:
      "The pro se exception is strictly personal. A suspended practitioner may file pro se only on their own behalf. They may not represent co-inventors or any other party. The co-inventors would need to file pro se individually or be represented by a registered practitioner.",
    citationRef: "MPEP 105",
  },
  // Q5: True/False — OED roster confidentiality (difficulty 3)
  {
    id: "z3-boss-5",
    conceptId: "gate-oed-role",
    zoneSlug: "the-gatekeepers",
    questionType: "true_false",
    difficulty: 3,
    stem: "True or False: The OED roster of suspended and excluded practitioners is confidential and available only to USPTO employees for internal use.",
    isTrue: false,
    explanation:
      "The OED roster is publicly available. The OED publishes the list of suspended, excluded, and resigned practitioners so that the public, including applicants and other practitioners, can verify the status of any registered practitioner.",
    citationRef: "MPEP 105",
  },
  // Q6: Scenario — Inventor rights after assignment (difficulty 4)
  {
    id: "z3-boss-6",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    questionType: "scenario",
    difficulty: 4,
    stem: "MegaCorp acquires the entire interest in Dr. Lee's patent application and files a proper 3.73(c) statement. MegaCorp's attorney amends the claims, narrowing them significantly. Dr. Lee objects and demands the original claims be restored. Can Dr. Lee force the restoration?",
    options: [
      { text: "Yes, because as the inventor, Dr. Lee has ultimate authority over claim scope" },
      { text: "Yes, because the inventor must consent to any claim amendments" },
      { text: "No, because MegaCorp as assignee of the entire interest controls prosecution, including claim amendments; Dr. Lee retains only notice and inspection rights" },
      { text: "No, but Dr. Lee can petition the Commissioner to restore the claims under 37 CFR 1.181" },
    ],
    correctIndex: 2,
    explanation:
      "Under 37 CFR 3.71, the assignee of the entire interest controls prosecution. Dr. Lee, while retaining the right to notice of USPTO actions and file inspection, does not have the authority to override MegaCorp's prosecution decisions, including claim amendments.",
    citationRef: "37 CFR 3.71; MPEP 106",
  },
  // Q7: Scenario — Suspended practitioner as inventor with assignee (difficulty 4)
  {
    id: "z3-boss-7",
    conceptId: "gate-exception",
    zoneSlug: "the-gatekeepers",
    questionType: "scenario",
    difficulty: 4,
    stem: "Dr. Hernandez, a suspended patent agent, invents a new chemical compound. Before suspension, he assigned all his patent rights to BioTech Corp as part of his employment agreement. Now Dr. Hernandez wants to file the application pro se as the inventor. Can he do so?",
    options: [
      { text: "Yes, because the pro se exception for inventors applies regardless of assignment status" },
      { text: "Yes, but only if BioTech Corp consents in writing" },
      { text: "No, because BioTech Corp as assignee of the entire interest controls the application, and Dr. Hernandez's pro se right does not override the assignee's authority" },
      { text: "No, because suspended practitioners can never file any applications" },
    ],
    correctIndex: 2,
    explanation:
      "While a suspended practitioner who is an inventor generally has a pro se right, when the entire interest has been assigned to another entity, the assignee controls the application under 37 CFR 3.71. BioTech Corp, not Dr. Hernandez, has the authority to file and prosecute the application. BioTech Corp must act through a registered practitioner.",
    citationRef: "37 CFR 3.71; MPEP 105",
  },
  // Q8: Scenario — Complex access control (difficulty 4)
  {
    id: "z3-boss-8",
    conceptId: "gate-written-consent",
    zoneSlug: "the-gatekeepers",
    questionType: "scenario",
    difficulty: 4,
    stem: "CompanyX holds the entire interest in an unpublished patent application. A litigation opponent obtains a federal court subpoena demanding production of the application file. CompanyX has not provided written authorization. Must the USPTO comply with the subpoena?",
    options: [
      { text: "Yes, federal court subpoenas always override USPTO confidentiality rules" },
      { text: "No, because 35 USC 122(a) absolutely bars disclosure of unpublished applications under all circumstances" },
      { text: "The USPTO will comply with a valid federal court order, as judicial authority can override administrative confidentiality, but the standard written consent process under MPEP 106 is the normal path" },
      { text: "No, the USPTO will ignore the subpoena because patent applications are classified documents" },
    ],
    correctIndex: 2,
    explanation:
      "While 35 USC 122(a) establishes confidentiality for unpublished applications and MPEP 106 provides for written consent access, a valid federal court order can compel production. However, the standard path for third-party access remains written authorization from the applicant or assignee. Patent applications are not classified documents.",
    citationRef: "35 USC 122(a); MPEP 106",
  },
  // Q9: True/False — Assignee revoking power of attorney (difficulty 4)
  {
    id: "z3-boss-9",
    conceptId: "gate-assignee-control",
    zoneSlug: "the-gatekeepers",
    questionType: "true_false",
    difficulty: 4,
    stem: "True or False: An assignee of the entire interest may revoke the power of attorney and appoint a new registered practitioner without the inventor's consent, but must first obtain approval from the Commissioner for Patents.",
    isTrue: false,
    explanation:
      "An assignee of the entire interest may revoke the power of attorney and appoint a new registered practitioner without either the inventor's consent or the Commissioner's approval. The assignee acts on its own authority under 37 CFR 3.71 once the 3.73(c) statement is properly filed. No Commissioner approval is needed.",
    citationRef: "37 CFR 3.71; 37 CFR 3.73(c)",
  },
  // Q10: Scenario — Ultimate integrative question (difficulty 4)
  {
    id: "z3-boss-10",
    conceptId: "gate-suspended",
    zoneSlug: "the-gatekeepers",
    questionType: "scenario",
    difficulty: 4,
    stem: "Attorney Walsh is suspended from practice. She is a co-inventor on Application X (owned 100% by her employer, GlobalTech) and the sole inventor on Application Y (which she never assigned). GlobalTech's other attorney, Attorney Kim, handles Application X. Which statement best describes Walsh's rights?",
    options: [
      { text: "Walsh may file pro se on both Application X and Application Y because she is an inventor on both" },
      { text: "Walsh may not act on either application because her suspension bars all USPTO activity" },
      { text: "Walsh may file pro se on Application Y (her own unassigned application) but may not act on Application X (controlled by GlobalTech as full assignee)" },
      { text: "Walsh may file pro se on Application X because she is a co-inventor, but cannot file on Application Y because it has not been assigned" },
    ],
    correctIndex: 2,
    explanation:
      "For Application X, GlobalTech is the assignee of the entire interest and controls prosecution under 37 CFR 3.71. Walsh's co-inventor status does not override the assignee's control. For Application Y, Walsh is the sole inventor and has never assigned her rights, so she retains the pro se right to file and prosecute her own application despite her suspension. The pro se exception applies only where the suspended practitioner actually controls the application as inventor/applicant.",
    citationRef: "37 CFR 3.71; MPEP 105",
  },
];
