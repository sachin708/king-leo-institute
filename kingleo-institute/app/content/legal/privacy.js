/**
 * Privacy Policy content - served at /privacy
 * Section blocks: { type: "p" | "list" | "contact", ... }
 */

export const privacyContent = {
  tagline: "LEGAL",
  heading: "Privacy Policy",
  subheading: "Kingleo Tattooz",
  intro: [
    "Kingleo Tattooz (we, us, or our) operates a tattoo, piercing, and related studio in Indore, Madhya Pradesh, India, and the website kingleotattooz.com. Our Privacy Policy explains how we collect, use, store, and protect your personal data when you visit our website, book appointments, receive services, or otherwise interact with us.",
    "We process personal data in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable rules. Our policy is written in plain language so you can understand our practices clearly.",
  ],
  sections: [
    {
      id: "who-we-are",
      title: "Who We Are (Data Fiduciary)",
      blocks: [
        {
          type: "contact",
          name: "Kingleo Tattooz",
          address:
            "32/2, B.K. Sindhi Colony, Gali No. 2, R.S. Chat Wali Gali (near Tower Chouraha), Indore, Madhya Pradesh 452001, India",
          email: "kingleotattooz@gmail.com",
          phones: [
            { label: "+91 95842 28615", href: "tel:+919584228615" },
            { label: "+91 70009 24824", href: "tel:+917000924824" },
          ],
        },
        {
          type: "p",
          text: "We are the Data Fiduciary responsible for deciding why and how your personal data is processed. For questions or to exercise your rights, contact the details above. We also designate a Grievance Officer (see Section 10).",
        },
      ],
    },
    {
      id: "data-we-collect",
      title: "Personal Data We Collect",
      blocks: [
        {
          type: "p",
          text: "We collect only what is reasonably necessary for providing our services and running the studio/website.",
        },
        {
          type: "list",
          title: "Information You Provide Directly",
          items: [
            "Name, phone number, email address, and preferred contact method",
            "Age or date of birth (to confirm you meet age requirements for tattoos/piercings)",
            "Appointment details, design preferences, placement ideas, and consultation notes",
            "Health and medical information relevant to safe tattooing or piercing (allergies, skin conditions, medications, pregnancy status, or other disclosures you choose to share)",
            "Payment and billing details (processed securely through payment partners; we do not store full card numbers)",
            "Photographs of your tattoo or piercing work (only with your separate written consent for portfolio, website, or social media use)",
            "Messages or enquiries sent via website forms, WhatsApp, Instagram, phone, or email",
          ],
        },
        {
          type: "list",
          title: "Information Collected Automatically",
          items: [
            "Device and browser type, IP address, approximate location, pages visited, and time spent on the site",
            "Cookies and similar technologies (see Section 6)",
          ],
        },
        {
          type: "p",
          text: "We do not intentionally collect sensitive personal data beyond what is needed for health/safety screening or service delivery.",
        },
      ],
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information and Purposes",
      blocks: [
        { type: "p", text: "We process your data for the following purposes:" },
        {
          type: "list",
          items: [
            "Scheduling and managing appointments, consultations, and services",
            "Verifying age and assessing suitability/safety for tattooing, piercing, or removal procedures",
            "Communicating about your booking, design, aftercare, or follow-up",
            "Processing payments and issuing receipts",
            "Maintaining studio records for hygiene, quality, and legal compliance",
            "Improving our website, services, and customer experience",
            "Sending service-related updates or (only with your consent) promotional messages about new designs, offers, or studio news",
            "Displaying your tattoo work in our portfolio or on social media (only with explicit photo consent)",
            "Detecting and preventing fraud, abuse, or security issues",
            "Complying with legal obligations",
          ],
        },
      ],
    },
    {
      id: "consent",
      title: "Consent and Legal Grounds",
      blocks: [
        {
          type: "p",
          text: "We primarily rely on your free, specific, informed, unconditional, and unambiguous consent (or specific legitimate uses permitted under the DPDP Act) to process your personal data.",
        },
        {
          type: "p",
          text: "You can withdraw consent at any time by contacting us. Withdrawal will not affect the lawfulness of processing done before withdrawal, but it may limit our ability to provide certain services (for example, we cannot perform a tattoo without necessary health information).",
        },
        {
          type: "p",
          text: "For essential service delivery (such as fulfilling a booked appointment you requested), certain processing is necessary to perform the service or meet legal requirements.",
        },
      ],
    },
    {
      id: "sharing",
      title: "Sharing Your Information",
      blocks: [
        {
          type: "p",
          text: "We do not sell your personal data. We share it only in these limited cases:",
        },
        {
          type: "list",
          items: [
            "With service providers who help us operate (website hosting, payment processors, email/SMS tools, or analytics providers) under strict confidentiality and data-protection terms",
            "With artists or staff involved in your specific appointment or treatment",
            "When required by law, court order, or to protect rights, safety, or property",
            "In connection with a business transfer (if ownership of the studio changes), subject to continued protection of your data",
          ],
        },
        {
          type: "p",
          text: "Photo usage for portfolio or social media occurs only after separate, clear consent from you.",
        },
      ],
    },
    {
      id: "cookies",
      title: "Cookies and Tracking Technologies",
      blocks: [
        {
          type: "p",
          text: "Our website may use essential cookies to make the site function and optional analytics or functional cookies to understand how visitors use it and improve the experience. You can control cookies through your browser settings. Blocking essential cookies may affect site functionality. We do not use cookies for cross-site advertising without clear consent.",
        },
      ],
    },
    {
      id: "retention",
      title: "How Long We Keep Your Data",
      blocks: [
        {
          type: "p",
          text: "We retain personal data only as long as needed for the purposes described above, or as required by law (for example, financial or health-related records). Typical periods include:",
        },
        {
          type: "list",
          items: [
            "Appointment and contact records: for the duration of our relationship plus a reasonable period for aftercare, warranties, or legal claims",
            "Health disclosures and consent forms: as long as needed for safety and legal compliance",
            "Marketing data: until you withdraw consent or opt out",
            "Website logs: for a limited period for security and analytics",
          ],
        },
        {
          type: "p",
          text: "When data is no longer required, we securely delete or anonymise it.",
        },
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights Under the DPDP Act",
      blocks: [
        { type: "p", text: "You have the right to:" },
        {
          type: "list",
          items: [
            "Access information about the personal data we hold about you",
            "Correct inaccurate or incomplete data",
            "Request erasure of your data (subject to legal retention requirements)",
            "Withdraw consent",
            "Nominate another person to exercise rights on your behalf in case of death or incapacity",
            "Lodge a grievance with us and, if unresolved, escalate to the Data Protection Board of India",
          ],
        },
        {
          type: "p",
          text: "To exercise any of these rights, email us at kingleotattooz@gmail.com or contact us via WhatsApp/phone. We will respond within the timelines required by law. We may need to verify your identity before processing the request.",
        },
      ],
    },
    {
      id: "security",
      title: "Data Security",
      blocks: [
        {
          type: "p",
          text: "We implement reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, misuse, or alteration. These personal data include access controls, secure storage practices, and limited staff access on a need-to-know basis.",
        },
        {
          type: "p",
          text: "No method of transmission or storage is 100% secure, but we take protection seriously.",
        },
      ],
    },
    {
      id: "children",
      title: "Children’s Privacy and Age Requirements",
      blocks: [
        {
          type: "p",
          text: "We do not knowingly collect personal data from children under 18 for tattooing or piercing services, consistent with legal restrictions. Age verification is required. If we become aware that we have collected data from a child without appropriate consent, we will delete it promptly. Parental/guardian consent is required where the law permits limited services for minors.",
        },
      ],
    },
    {
      id: "international",
      title: "International Transfers",
      blocks: [
        {
          type: "p",
          text: "We primarily store and process data in India. If any data is transferred outside India (for example, through certain cloud or analytics tools), we ensure appropriate safeguards consistent with the DPDP Act.",
        },
      ],
    },
    {
      id: "changes",
      title: "Changes to Kingleo Tattooz Policy",
      blocks: [
        {
          type: "p",
          text: "We may update our privacy policy from time to time. The last updated date at the top will change when we do. Material changes will be highlighted on the website or communicated where appropriate. Continued use of our services after an update constitutes acceptance of the revised policy.",
        },
      ],
    },
    {
      id: "grievance",
      title: "Grievance Officer and Contact",
      blocks: [
        {
          type: "contact",
          name: "Grievance Officer: Team Kingleo Tattooz",
          address:
            "32/2, B.K. Sindhi Colony, Gali No. 2, R.S. Chat Wali Gali, Indore, Madhya Pradesh 452001",
          email: "kingleotattooz@gmail.com",
          phones: [{ label: "+91 95842 28615", href: "tel:+919584228615" }],
        },
        {
          type: "p",
          text: "You may also contact the Data Protection Board of India if your grievance is not resolved satisfactorily.",
        },
      ],
    },
  ],
};
