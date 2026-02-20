import {
  ScenarioQuestion,
  QuickFireQuestion,
  ProceduralCascadeData,
} from "@study-game/engine";

// ============================================================
// Zone 4: The Classified Wing — Apply Phase Content
// MPEP 115 — National Security Review of Patent Applications
// Scenarios, Quick-Fire, Procedural Cascades
// ============================================================

// --- SCENARIO QUESTIONS (8) ---
// Realistic exam-style fact patterns at escalating difficulty

export const ZONE4_SCENARIOS: ScenarioQuestion[] = [
  // Difficulty 1 — Basic national security screening concepts
  {
    id: "z4-scenario-1",
    conceptId: "nsr-screening-authority",
    zoneSlug: "the-classified-wing",
    difficulty: 1,
    stem: "Attorney Brooks files a patent application for a client who has developed a novel guidance system for unmanned aerial vehicles. Several weeks after filing, Brooks learns that the application is being reviewed by a defense agency before substantive examination begins. Under what authority does this screening occur?",
    options: [
      { text: "35 USC 101 — the USPTO screens all applications for patentable subject matter before assigning an examiner" },
      { text: "35 USC 181 — the USPTO screens patent applications for national security implications before substantive examination" },
      { text: "35 USC 122 — the USPTO screens applications to determine whether publication should be deferred" },
      { text: "37 CFR 1.56 — the USPTO reviews applications for compliance with the duty of disclosure" },
    ],
    correctIndex: 1,
    explanation:
      "Under 35 USC 181, patent applications are screened for national security implications early in prosecution, before substantive examination begins. This screening determines whether the subject matter could be detrimental to national security if disclosed. The screening is conducted by defense agencies and other interested government agencies, not by patent examiners.",
    citationRef: "35 USC 181; MPEP 115",
  },
  {
    id: "z4-scenario-2",
    conceptId: "nsr-three-purposes",
    zoneSlug: "the-classified-wing",
    difficulty: 1,
    stem: "A newly hired patent examiner asks her supervisor what purposes the national security screening of patent applications serves. Which of the following accurately describes the three screening functions?",
    options: [
      { text: "Patentability review, prior art search, and classification assignment" },
      { text: "Secrecy order determination, export control review, and government property interest assessment" },
      { text: "Inventor verification, assignment recording, and foreign filing license issuance" },
      { text: "Application completeness check, fee verification, and priority date confirmation" },
    ],
    correctIndex: 1,
    explanation:
      "The national security screening process under MPEP 115 serves three distinct functions: (1) determining whether a secrecy order should be imposed to prevent disclosure detrimental to national security, (2) reviewing for export control implications, and (3) assessing whether the government has a property interest in the invention. These three screening purposes are carried out by various defense and government agencies.",
    citationRef: "MPEP 115; 35 USC 181",
  },

  // Difficulty 2 — Agency-specific screening and classified filing
  {
    id: "z4-scenario-3",
    conceptId: "nsr-agency-screening",
    zoneSlug: "the-classified-wing",
    difficulty: 2,
    stem: "Inventor Fujimoto files a patent application for a new method of enriching uranium for nuclear reactor fuel. Which government agency is most likely to screen this application for national security implications?",
    options: [
      { text: "The Department of Defense (DoD), because all weapons-related technology falls under DoD jurisdiction" },
      { text: "The National Security Agency (NSA), because nuclear technology involves signals intelligence" },
      { text: "The Department of Energy (DOE), because it screens applications related to atomic energy under 42 USC 2182" },
      { text: "The National Aeronautics and Space Administration (NASA), because nuclear propulsion has space applications" },
    ],
    correctIndex: 2,
    explanation:
      "The Department of Energy (DOE) is responsible for screening patent applications related to atomic energy, as authorized by 42 USC 2182. Uranium enrichment is clearly within DOE's screening authority. While other agencies such as DoD and NSA screen for military significance, and NASA screens for space technology, atomic energy applications fall squarely within DOE's mandate.",
    citationRef: "42 USC 2182; MPEP 115",
  },
  {
    id: "z4-scenario-4",
    conceptId: "nsr-classified-filing",
    zoneSlug: "the-classified-wing",
    difficulty: 2,
    stem: "Attorney Wallace represents a defense contractor that wants to file a patent application containing classified technical information about an advanced electronic warfare system. How must this application be filed with the USPTO?",
    options: [
      { text: "It may be filed electronically through EFS-Web using encrypted transmission protocols" },
      { text: "It must be hand-carried to the Licensing and Review (L&R) division of the USPTO; no electronic filing is permitted for classified applications" },
      { text: "It must be mailed via certified mail to the Commissioner with 'CLASSIFIED' stamped on the envelope" },
      { text: "It may be filed by any method, but the classified portions must be submitted in a separate, sealed annex" },
    ],
    correctIndex: 1,
    explanation:
      "Classified patent applications must be hand-carried to the Licensing and Review (L&R) division of the USPTO. Electronic filing is not permitted for applications containing classified information because electronic systems are not approved for transmitting classified material. The L&R division has the necessary security infrastructure and cleared personnel to handle classified documents.",
    citationRef: "MPEP 115",
  },

  // Difficulty 3 — L&R codes and practitioner clearance
  {
    id: "z4-scenario-5",
    conceptId: "nsr-lr-codes",
    zoneSlug: "the-classified-wing",
    difficulty: 3,
    stem: "Attorney Desmond notices that her client's patent application has been assigned an L&R code by the Licensing and Review division. She is told the code indicates that screening by the relevant defense agency has been completed and no secrecy order will be imposed. What does this L&R code signify for the prosecution of the application?",
    options: [
      { text: "The application must be refiled because the L&R code means the original filing was defective" },
      { text: "The application will now proceed to substantive examination, as the L&R code indicates that national security screening is complete and cleared" },
      { text: "The application is permanently restricted from foreign filing even though no secrecy order was imposed" },
      { text: "The application must undergo a second round of screening by a different defense agency before examination" },
    ],
    correctIndex: 1,
    explanation:
      "L&R codes are assigned by the Licensing and Review division to indicate the screening status of an application. When the code indicates that screening is complete and no secrecy order will be imposed, the application is cleared to proceed to substantive examination in the normal course. The L&R code effectively serves as a tracking mechanism that shows the application has passed through the national security review process.",
    citationRef: "MPEP 115",
  },
  {
    id: "z4-scenario-6",
    conceptId: "nsr-security-clearance",
    zoneSlug: "the-classified-wing",
    difficulty: 3,
    stem: "Patent practitioner Garcia has been asked by a defense contractor client to prosecute a patent application that contains information classified at the 'Secret' level. Garcia does not currently hold any security clearance. What must Garcia do before she can work on this application?",
    options: [
      { text: "She may work on the application immediately because all registered patent practitioners are automatically cleared for classified work" },
      { text: "She must obtain the appropriate level of security clearance before she can access or work on the classified application" },
      { text: "She may work on the application but must have a cleared co-counsel review all documents before filing" },
      { text: "She must file a petition with the USPTO requesting temporary clearance for the specific application" },
    ],
    correctIndex: 1,
    explanation:
      "Practitioners who handle classified patent applications must hold the appropriate level of security clearance. Registration as a patent practitioner does not confer any security clearance. Garcia must undergo the security clearance process and obtain clearance at or above the classification level of the material she will be handling (in this case, 'Secret' level or higher) before she can access or work on the classified application.",
    citationRef: "MPEP 115",
  },

  // Difficulty 4 — Complex multi-agency and timeline scenarios
  {
    id: "z4-scenario-7",
    conceptId: "nsr-multi-agency",
    zoneSlug: "the-classified-wing",
    difficulty: 4,
    stem: "Inventor Chen files a patent application for a nuclear-powered satellite propulsion system with advanced signal-processing capabilities. The application contains subject matter relevant to multiple government agencies. Which of the following most accurately describes how the screening process works in this multi-agency scenario?",
    options: [
      { text: "Only one agency screens the application — whichever agency first claims jurisdiction" },
      { text: "Multiple agencies may screen the application: DOE screens for atomic energy implications under 42 USC 2182, NASA screens for space technology under 51 USC 20135, and DoD/NSA may screen for military significance — each agency evaluates the subject matter within its area of responsibility" },
      { text: "The Commissioner of Patents selects the single most relevant agency and directs all screening to that agency" },
      { text: "Multi-agency applications are automatically placed under a secrecy order without screening because they inherently implicate national security" },
    ],
    correctIndex: 1,
    explanation:
      "When a patent application contains subject matter relevant to multiple agencies, each agency screens the application within its own area of authority. DOE screens for atomic energy matters under 42 USC 2182, NASA screens for space technology under 51 USC 20135, and DoD and its components (including NSA) screen for military significance. The screening is not exclusive — multiple agencies may independently review the same application and each may make its own recommendation regarding a secrecy order.",
    citationRef: "42 USC 2182; 51 USC 20135; MPEP 115",
  },
  {
    id: "z4-scenario-8",
    conceptId: "nsr-screening-timeline",
    zoneSlug: "the-classified-wing",
    difficulty: 4,
    stem: "Attorney Yamamoto files a patent application for a client's advanced radar stealth technology on January 15. By June 15 — five months later — the application has not been assigned to an examiner, and the client is growing impatient. Yamamoto contacts the USPTO and learns that the application is still undergoing national security screening. The client wants to know whether this delay is normal and what options are available. What is the best advice?",
    options: [
      { text: "The screening must be completed within 30 days of filing; the delay is improper and Yamamoto should file a petition to make special" },
      { text: "National security screening occurs early in prosecution before substantive examination begins, and the timeline varies depending on the subject matter and number of agencies involved; the application cannot proceed to examination until screening is complete, and there is no mechanism to bypass the screening process" },
      { text: "Yamamoto should withdraw the application and refile it without the classified portions to avoid the screening delay" },
      { text: "The screening delay means a secrecy order will definitely be imposed; Yamamoto should advise the client to prepare for classified prosecution" },
    ],
    correctIndex: 1,
    explanation:
      "National security screening occurs early in prosecution, before the application is assigned for substantive examination. The screening timeline can vary significantly depending on the complexity of the subject matter and the number of agencies that need to review the application. There is no statutory deadline for completing the screening, and the application cannot proceed to examination until screening is complete. A delay in screening does not automatically mean a secrecy order will be imposed — it may simply reflect the time needed for thorough review.",
    citationRef: "MPEP 115; 35 USC 181",
  },
];

// --- QUICK-FIRE QUESTIONS (12) ---
// True/false statements covering national security review concepts

export const ZONE4_QUICK_FIRE: QuickFireQuestion[] = [
  {
    id: "z4-qf-1",
    zoneSlug: "the-classified-wing",
    statement:
      "Under 35 USC 181, patent applications are screened for national security implications before substantive examination begins.",
    isTrue: true,
    explanation:
      "This is correct. National security screening occurs early in prosecution, before the application is assigned for substantive examination. Defense agencies review applications to determine whether a secrecy order should be imposed.",
    citationRef: "35 USC 181; MPEP 115",
  },
  {
    id: "z4-qf-2",
    zoneSlug: "the-classified-wing",
    statement:
      "The three screening functions under MPEP 115 are: patentability review, prior art search, and classification assignment.",
    isTrue: false,
    explanation:
      "The three screening functions are: (1) secrecy order determination, (2) export control review, and (3) government property interest assessment. Patentability review, prior art search, and classification are part of substantive examination, not national security screening.",
    citationRef: "MPEP 115",
  },
  {
    id: "z4-qf-3",
    zoneSlug: "the-classified-wing",
    statement:
      "The Department of Energy (DOE) is responsible for screening patent applications related to atomic energy under 42 USC 2182.",
    isTrue: true,
    explanation:
      "DOE screens patent applications for atomic energy implications under the authority of 42 USC 2182. This includes applications involving nuclear materials, nuclear reactors, and related technology.",
    citationRef: "42 USC 2182; MPEP 115",
  },
  {
    id: "z4-qf-4",
    zoneSlug: "the-classified-wing",
    statement:
      "NASA screens patent applications for space technology implications under 51 USC 20135.",
    isTrue: true,
    explanation:
      "NASA has screening authority over patent applications related to space technology under 51 USC 20135. This allows NASA to review applications for inventions that may have significance for space exploration and national aeronautics programs.",
    citationRef: "51 USC 20135; MPEP 115",
  },
  {
    id: "z4-qf-5",
    zoneSlug: "the-classified-wing",
    statement:
      "Classified patent applications may be filed electronically through EFS-Web using secure encryption protocols.",
    isTrue: false,
    explanation:
      "Classified patent applications must be hand-carried to the Licensing and Review (L&R) division of the USPTO. Electronic filing is not permitted for classified applications because electronic filing systems are not approved for transmitting classified material.",
    citationRef: "MPEP 115",
  },
  {
    id: "z4-qf-6",
    zoneSlug: "the-classified-wing",
    statement:
      "The Licensing and Review (L&R) division of the USPTO handles the processing of classified patent applications.",
    isTrue: true,
    explanation:
      "The L&R division is responsible for receiving, processing, and managing classified patent applications. L&R has the necessary security infrastructure and cleared personnel to handle classified documents properly.",
    citationRef: "MPEP 115",
  },
  {
    id: "z4-qf-7",
    zoneSlug: "the-classified-wing",
    statement:
      "Any registered patent practitioner may handle classified patent applications without obtaining a security clearance.",
    isTrue: false,
    explanation:
      "Practitioners who work on classified patent applications must hold the appropriate level of security clearance. Registration as a patent practitioner does not confer security clearance; a separate clearance process is required.",
    citationRef: "MPEP 115",
  },
  {
    id: "z4-qf-8",
    zoneSlug: "the-classified-wing",
    statement:
      "L&R codes assigned to patent applications indicate the national security screening status of the application.",
    isTrue: true,
    explanation:
      "L&R codes are tracking markers assigned by the Licensing and Review division to indicate the screening status of an application, such as whether screening is pending, in progress, or complete.",
    citationRef: "MPEP 115",
  },
  {
    id: "z4-qf-9",
    zoneSlug: "the-classified-wing",
    statement:
      "Only the Department of Defense screens patent applications for national security implications; no other agency participates in the screening process.",
    isTrue: false,
    explanation:
      "Multiple agencies participate in national security screening. In addition to DoD and its components (including NSA), the Department of Energy (DOE) screens for atomic energy under 42 USC 2182 and NASA screens for space technology under 51 USC 20135.",
    citationRef: "MPEP 115; 42 USC 2182; 51 USC 20135",
  },
  {
    id: "z4-qf-10",
    zoneSlug: "the-classified-wing",
    statement:
      "National security screening must be completed before the patent application can proceed to substantive examination.",
    isTrue: true,
    explanation:
      "Screening occurs early in prosecution and must be completed before the application is assigned to an examiner for substantive examination. The application cannot proceed until the screening agencies have reviewed it and determined whether a secrecy order should be imposed.",
    citationRef: "MPEP 115; 35 USC 181",
  },
  {
    id: "z4-qf-11",
    zoneSlug: "the-classified-wing",
    statement:
      "Defense agencies such as DoD and NSA screen patent applications for military significance as part of the national security review.",
    isTrue: true,
    explanation:
      "DoD and its components, including NSA, screen patent applications to determine whether the subject matter has military significance that could be detrimental to national security if disclosed. This military significance screening is one of the core functions of the national security review.",
    citationRef: "MPEP 115; 35 USC 181",
  },
  {
    id: "z4-qf-12",
    zoneSlug: "the-classified-wing",
    statement:
      "If an application passes national security screening with no secrecy order imposed, the applicant must still wait an additional 6 months before the application can be examined.",
    isTrue: false,
    explanation:
      "Once screening is complete and no secrecy order is imposed, the application proceeds to substantive examination in the normal course. There is no additional 6-month waiting period after screening clearance.",
    citationRef: "MPEP 115",
  },
];

// --- PROCEDURAL CASCADES (3) ---
// Multi-step procedural walkthroughs

export const ZONE4_CASCADES: ProceduralCascadeData[] = [
  {
    id: "z4-cascade-1",
    conceptId: "nsr-classified-filing-procedure",
    zoneSlug: "the-classified-wing",
    title: "Filing a Classified Patent Application",
    setup:
      "Attorney Reynolds represents a defense contractor that has developed a classified stealth coating technology. The invention is classified at the 'Secret' level by the Department of Defense. The contractor wants to file a patent application to protect the invention. Attorney Reynolds must navigate the proper procedures for filing a classified patent application with the USPTO.",
    steps: [
      {
        stem: "Before Attorney Reynolds can even begin working on the classified application, what prerequisite must she satisfy?",
        options: [
          "She must register with the USPTO as a classified patent specialist",
          "She must obtain a security clearance at or above the 'Secret' level to handle the classified material",
          "She must obtain written permission from the Commissioner of Patents",
          "She must complete a USPTO training course on classified applications",
        ],
        correctIndex: 1,
        explanation:
          "Practitioners who handle classified patent applications must hold the appropriate level of security clearance. Since the invention is classified at the 'Secret' level, Attorney Reynolds must have a security clearance at the 'Secret' level or higher before she can access or work on the classified material.",
      },
      {
        stem: "Attorney Reynolds has the necessary clearance and has prepared the application. How must the application be submitted to the USPTO?",
        options: [
          "Filed electronically through EFS-Web with enhanced encryption",
          "Mailed via certified mail with 'CLASSIFIED' markings on the package",
          "Hand-carried to the Licensing and Review (L&R) division of the USPTO",
          "Submitted through a secure Department of Defense courier service directly to the examining art unit",
        ],
        correctIndex: 2,
        explanation:
          "Classified patent applications must be hand-carried to the Licensing and Review (L&R) division of the USPTO. Electronic filing and regular mail are not approved methods for transmitting classified material. The L&R division has the proper security infrastructure to receive and handle classified applications.",
      },
      {
        stem: "The L&R division receives the classified application and assigns an L&R code. What does this code indicate and what happens next?",
        options: [
          "The code is a billing reference for classified processing fees; the application is immediately assigned to an examiner",
          "The code indicates the application's screening status; the application must complete national security screening before it can proceed to substantive examination",
          "The code identifies the security classification level; the application is placed in a permanent hold until the classification is downgraded",
          "The code triggers automatic notification to all defense agencies to begin a mandatory 90-day review",
        ],
        correctIndex: 1,
        explanation:
          "L&R codes track the national security screening status of the application. The application must go through the screening process — where defense agencies evaluate it for secrecy order determination, export control, and government property interest — before it can proceed to substantive examination. The L&R code is updated as screening progresses.",
      },
    ],
  },
  {
    id: "z4-cascade-2",
    conceptId: "nsr-screening-process",
    zoneSlug: "the-classified-wing",
    title: "Multi-Agency National Security Screening",
    setup:
      "Inventor Dr. Kapoor files a patent application for a nuclear-powered ion thruster designed for deep-space military reconnaissance satellites. The application contains subject matter that touches on atomic energy, space technology, and military applications. Patent practitioner Singh must guide Dr. Kapoor through the multi-agency screening process that will occur before substantive examination begins.",
    steps: [
      {
        stem: "Dr. Kapoor's application involves atomic energy, space technology, and military applications. Which agencies will likely screen this application?",
        options: [
          "Only the Department of Defense, because military applications take priority over all other screening",
          "DOE for atomic energy under 42 USC 2182, NASA for space technology under 51 USC 20135, and DoD/NSA for military significance — each agency screens within its area of authority",
          "Only the Department of Energy, because nuclear technology is the most sensitive component",
          "The Commissioner of Patents assigns a single agency based on the primary field of the invention",
        ],
        correctIndex: 1,
        explanation:
          "When an application contains subject matter relevant to multiple agencies, each agency screens within its own area of authority. DOE screens for atomic energy implications under 42 USC 2182, NASA screens for space technology under 51 USC 20135, and DoD/NSA screen for military significance. The screening is not exclusive to a single agency.",
      },
      {
        stem: "The screening process takes several months. Dr. Kapoor is anxious because he has not received any office actions. Practitioner Singh explains why. What is the reason?",
        options: [
          "The USPTO has lost the application and Singh should refile immediately",
          "National security screening occurs before substantive examination begins; the application cannot be assigned to an examiner until all screening agencies have completed their review",
          "The examiner has been assigned but is waiting for Dr. Kapoor to submit additional technical disclosures",
          "The application has been rejected as unpatentable during the screening process",
        ],
        correctIndex: 1,
        explanation:
          "National security screening takes place early in prosecution, before the application is assigned for substantive examination. The application cannot proceed to examination until all screening agencies have completed their reviews. Multi-agency screening can take additional time because each agency must independently evaluate the subject matter.",
      },
      {
        stem: "All screening agencies complete their review. DOE and NASA clear the application with no secrecy order recommendation, but DoD recommends a secrecy order for the military reconnaissance aspects. What happens?",
        options: [
          "Because two out of three agencies cleared the application, no secrecy order is imposed",
          "The Commissioner imposes a secrecy order based on DoD's recommendation, because any single agency's determination that disclosure would be detrimental to national security is sufficient to trigger a secrecy order under 35 USC 181",
          "The three agencies must negotiate a consensus before any action is taken",
          "The application is split into two separate applications — one classified and one unclassified",
        ],
        correctIndex: 1,
        explanation:
          "Under 35 USC 181, a secrecy order is imposed when the head of any interested government agency determines that disclosure would be detrimental to national security. It does not require unanimity among multiple agencies. DoD's recommendation alone is sufficient basis for the Commissioner to impose a secrecy order, regardless of whether other agencies found no security concern within their areas of responsibility.",
      },
    ],
  },
  {
    id: "z4-cascade-3",
    conceptId: "nsr-clearance-and-handling",
    zoneSlug: "the-classified-wing",
    title: "Security Clearance and Classified Document Handling",
    setup:
      "Law firm Morrison & Associates has been engaged by a major defense contractor to handle a portfolio of classified patent applications covering advanced cryptographic hardware. The firm must ensure its practitioners and support staff comply with all security clearance requirements and classified document handling procedures. Managing partner Helen Morrison must set up the proper infrastructure.",
    steps: [
      {
        stem: "Partner Morrison wants to assign two associates to the classified patent work. What clearance requirement applies to these practitioners?",
        options: [
          "Associates who are registered patent practitioners are automatically authorized to handle classified patent work",
          "Each practitioner who will access or work on classified applications must individually hold a security clearance at or above the classification level of the material",
          "Only the supervising partner needs a security clearance; associates can work under the partner's clearance",
          "The law firm obtains a single facility clearance that covers all practitioners at the firm",
        ],
        correctIndex: 1,
        explanation:
          "Security clearance is an individual requirement — each practitioner who will access or work on classified patent applications must individually hold the appropriate level of clearance. A supervising partner's clearance does not extend to associates, and a facility clearance alone does not authorize individual access to classified material.",
      },
      {
        stem: "The associates have obtained their security clearances. When they need to file a classified patent application, what filing procedure must they follow?",
        options: [
          "Mail the application via registered mail to the USPTO main office",
          "File electronically using a secure government network connection",
          "Hand-carry the application to the Licensing and Review (L&R) division at the USPTO",
          "Submit the application through the Department of Defense, which forwards it to the USPTO",
        ],
        correctIndex: 2,
        explanation:
          "Classified patent applications must be hand-carried to the L&R division of the USPTO. No electronic filing or mailing is permitted for classified material. The L&R division is equipped with the necessary security infrastructure and cleared personnel to receive and process classified applications.",
      },
      {
        stem: "After filing, the L&R division assigns a code to the application. One associate asks what the code means and how it affects the timeline. What should Partner Morrison explain?",
        options: [
          "The code is merely an internal filing reference number with no procedural significance",
          "The code indicates the screening status of the application; it tracks whether national security screening is pending, in progress, or complete, and the application cannot proceed to examination until the code reflects completed screening",
          "The code determines which examiner art unit will handle the application",
          "The code establishes the priority date for the classified application",
        ],
        correctIndex: 1,
        explanation:
          "L&R codes are procedural tracking markers that indicate the national security screening status of the application. The code is updated as the application moves through the screening process — from initial receipt through agency review to final clearance or secrecy order imposition. The application cannot be assigned for substantive examination until the L&R code reflects that screening is complete.",
      },
    ],
  },
];
