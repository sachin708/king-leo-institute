/**
 * Privacy Policy content - served at /privacy
 * Section blocks: { type: "p" | "list", ... }
 * List items are either a string or { label, text }.
 */

export const privacyContent = {
  heading: "Privacy Policy",
  subheading: "Kingleo Tattooz Institute",
  intro: [
    "Kingleo Tattooz Institute respects the privacy of every student, visitor, and enquirer. This Privacy Policy explains what information we collect, why we collect it, how we protect it, and the choices available to you.",
  ],
  sections: [
    {
      title: "Information We Collect",
      blocks: [
        {
          type: "p",
          text: "We may collect the following information when you register, apply for a course, make an enquiry, enrol, or communicate with us:",
        },
        {
          type: "list",
          items: [
            {
              label: "Personal details",
              text: "Your full name, postal address, email address, phone number, and any other information that identifies you.",
            },
            {
              label: "Payment-related details",
              text: "Billing address, payment method details, and records of payments or transactions.",
            },
            {
              label: "Basic profile details",
              text: "Information such as age, gender, and location, where relevant to enrolment or course administration.",
            },
          ],
        },
        {
          type: "p",
          text: "The above information may be collected through registration or application forms, online forms, email, phone calls, messaging apps, or in-person communication during enrolment.",
        },
      ],
    },
    {
      title: "How We Use Your Information",
      blocks: [
        { type: "p", text: "We use your information to:" },
        {
          type: "list",
          items: [
            "Process admissions, enrolments, and course-related communication.",
            "Provide training, student support, updates, and important notices.",
            "Process payments, issue invoices or receipts, and maintain financial records.",
            "Respond to questions, requests, and feedback.",
            "Improve our courses, services, communication, and overall student experience.",
          ],
        },
        {
          type: "p",
          text: "We use your information only for legitimate purposes connected with the Institute and its services.",
        },
      ],
    },
    {
      title: "Sharing Your Information",
      blocks: [
        {
          type: "p",
          text: "We do not sell or rent your personal information to third parties.",
        },
        {
          type: "p",
          text: "Your information may be shared only when necessary with trusted service providers who help us operate the Institute, such as payment-processing or technical-support providers. These providers are expected to keep your information confidential and use it only to perform the services assigned to them.",
        },
        {
          type: "p",
          text: "We may also share information when required by law, court order, legal process, or a request from a law-enforcement or government authority. Information may also be shared where necessary to protect the safety, security, or proper functioning of our systems, services, or business.",
        },
      ],
    },
    {
      title: "How Long We Keep Information",
      blocks: [
        {
          type: "p",
          text: "We retain personal information only for as long as it is needed to provide services, maintain records, comply with legal requirements, or resolve disputes. When the information is no longer required, we securely delete it or remove details that can identify you.",
        },
      ],
    },
    {
      title: "How We Protect Information",
      blocks: [
        {
          type: "p",
          text: "We use reasonable technical and organisational safeguards to protect personal information from unauthorised access, loss, misuse, alteration, or disclosure. These may include restricted access, secure storage practices, and other appropriate security measures.",
        },
        {
          type: "p",
          text: "While we take privacy and security seriously, no online transmission or storage system can be guaranteed completely secure.",
        },
      ],
    },
    {
      title: "Your Rights",
      blocks: [
        {
          type: "p",
          text: "Subject to applicable law, you may request to:",
        },
        {
          type: "list",
          items: [
            "Access the personal information we hold about you.",
            "Correct or update inaccurate or incomplete details.",
            "Request deletion of your information, where we are not legally required to retain it.",
            "Withdraw consent for marketing or promotional communication.",
          ],
        },
        {
          type: "p",
          text: "To make a request, contact us using the details below. We will respond within a reasonable time.",
        },
      ],
    },
    {
      title: "Cookies and Online Tools",
      blocks: [
        {
          type: "p",
          text: "Our website or online forms may use cookies and similar technologies to improve website performance, remember preferences, and understand how visitors use our site. You can manage or disable cookies through your browser settings, although some website features may not work properly if cookies are disabled.",
        },
      ],
    },
    {
      title: "Changes to This Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time. If we make important changes, the updated policy will be published on our website or shared through appropriate communication channels.",
        },
        {
          type: "p",
          text: "By continuing to use our website, submit forms, or enrol in our courses after an update, you accept the revised Privacy Policy.",
        },
      ],
    },
    {
      title: "Contact Us",
      blocks: [
        {
          type: "p",
          text: "For privacy-related questions, requests, or concerns, contact:",
        },
        {
          type: "contact",
          name: "Kingleo Tattooz Institute",
          email: "Kingleotattoozinstitute@gmail.com",
        },
      ],
    },
  ],
};
