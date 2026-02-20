import { ReferenceSection } from "@study-game/engine";

export const MPEP_SECTION_103: ReferenceSection[] = [
  {
    id: "mpep-103-00",
    number: "103",
    title: "Patent File Inspection and Public Access",
    content:
      "This section covers the rules and procedures governing public inspection of patent application files at the United States Patent and Trademark Office (USPTO). Under the patent laws and regulations, certain patent files are open to public inspection while others are maintained in confidence. The primary statute governing confidentiality is 35 U.S.C. 122, which provides that applications for patents shall be kept in confidence by the Office. However, once an application is published under 35 U.S.C. 122(b) or a patent is granted, the file becomes available to the public under 37 C.F.R. 1.11. The Image File Wrapper (IFW) system is the USPTO's electronic system for storing and providing access to patent application documents. Patent Center, which replaced the former Patent Application Information Retrieval (PAIR) system, is the primary electronic interface through which the public and practitioners access patent file information. Understanding these access rules is essential for patent practitioners, as they affect prosecution strategy, prior art research, and client counseling regarding the confidentiality of pending applications.",
  },
  {
    id: "mpep-103-01",
    number: "103.01",
    title: "Files Open to Public Inspection: 37 CFR 1.11",
    content:
      "Under 37 C.F.R. 1.11(a), patents and published applications for patent are open to public inspection. This means that once an application has been published under 35 U.S.C. 122(b) or a patent has been granted, the entire file wrapper — including the application as filed, all office actions, applicant responses, amendments, declarations, information disclosure statements, and all correspondence — becomes available to the public.\n\nPublication typically occurs promptly after 18 months from the earliest filing date for which benefit is sought, as required by 35 U.S.C. 122(b)(1)(A). However, an applicant may request earlier publication. An applicant may also request non-publication under 35 U.S.C. 122(b)(2)(B)(i) if the invention has not been and will not be the subject of an application filed in another country that requires 18-month publication. If the applicant later files abroad or files a continuation without a non-publication request, the original non-publication request must be rescinded under 35 U.S.C. 122(b)(2)(B)(ii).\n\nUnder 37 C.F.R. 1.11(b), published sequence listings and other referenced materials associated with published applications and patents are also made available to the public. The public can access these files through Patent Center, the USPTO's primary electronic access portal.",
  },
  {
    id: "mpep-103-02",
    number: "103.02",
    title: "The Image File Wrapper (IFW) System",
    content:
      "The Image File Wrapper (IFW) system is the USPTO's electronic document management system for patent applications. The IFW system replaced the older paper-based file wrapper system and stores all documents associated with a patent application in digital format. This includes the application as originally filed (specification, claims, drawings, abstract), all office actions issued by the examiner, all responses and amendments filed by the applicant, information disclosure statements (IDS) and cited references, declarations and oaths, petitions and decisions, fee transmittals and receipts, and all correspondence between the applicant and the Office.\n\nPublic access to IFW records is provided through Patent Center, which replaced the former Patent Application Information Retrieval (PAIR) system. Patent Center offers two access modes. The public portal allows anyone to search and view file wrappers for published applications and granted patents without creating an account. The authenticated portal requires a USPTO.gov account and allows applicants and their attorneys to access their own unpublished pending applications. Practitioners should be aware that the public portal only displays files for applications that have been published or for which patents have been granted. Unpublished applications are not visible through the public portal and can only be accessed through the authenticated portal by authorized persons under 37 C.F.R. 1.14(c).",
  },
  {
    id: "mpep-103-03",
    number: "103.03",
    title: "Incorporation by Reference: 37 CFR 1.57",
    content:
      "Under 37 C.F.R. 1.57, an applicant may incorporate material by reference into a patent application. When properly incorporated, the referenced material is treated as part of the application as though it were fully set forth in the specification. This mechanism allows applicants to rely on previously published documents, patents, or other technical materials without reproducing their entire contents in the application.\n\nIncorporation by reference affects public access because the incorporated material becomes, in legal effect, part of the patent disclosure. When the patent issues, the public has a right to understand the full scope of the disclosure, including incorporated materials. However, the USPTO does not maintain copies of all externally published documents that are incorporated by reference. If the referenced document is a publicly available publication (such as a published standard, journal article, or issued patent), the public can obtain it from the original source.\n\nThe USPTO advises that essential material should not be incorporated solely by reference. Applicants are encouraged to include sufficient description in the specification so that the application is self-contained and the disclosure can be understood without necessarily consulting the referenced document. This practice ensures that the patent provides adequate notice to the public of the scope of the claimed invention. When incorporation by reference is used, the applicant should clearly identify the referenced document and the specific portions being incorporated.",
  },
  {
    id: "mpep-103-04",
    number: "103.04",
    title: "Confidentiality of Unpublished Applications: 35 USC 122",
    content:
      "The fundamental confidentiality rule for patent applications is established by 35 U.S.C. 122(a), which provides that applications for patents shall be kept in confidence by the Patent and Trademark Office, and no information concerning the same shall be given without authority of the applicant or owner unless necessary to carry out the provisions of an Act of Congress or in special circumstances determined by the Director.\n\nThis confidentiality protection applies from the moment the application is filed until publication occurs under 35 U.S.C. 122(b) or a patent is granted. During this period, the application file is not available for public inspection, and the USPTO will not disclose its contents to unauthorized persons. The confidentiality requirement serves important policy goals: it protects applicants' trade secrets and business strategies, encourages inventors to file patent applications without fear of premature disclosure, and allows applicants time to develop their inventions before competitors learn of them.\n\nExceptions to confidentiality include publication at 18 months under 35 U.S.C. 122(b), access by authorized persons under 37 C.F.R. 1.14(c), status information available to the public under 37 C.F.R. 1.14(e), and access by petition to unpublished abandoned applications under 37 C.F.R. 1.14(i). Provisional applications are not published and remain confidential unless relied upon for priority in a subsequently published application.",
  },
];
