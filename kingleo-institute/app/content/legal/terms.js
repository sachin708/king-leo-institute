/**
 * Terms & Conditions content - served at /terms
 * Section blocks: { type: "p" | "list", ... }
 */

const p = (text) => ({ type: "p", text });

export const termsContent = {
  heading: "Terms & Conditions",
  subheading: "Kingleo Tattooz Institute",
  intro: [
    "Please read these Terms & Conditions carefully before filling out this Google Form or enrolling in any course offered by Kingleo Tattooz Institute (the Institute). These terms apply whenever you access or submit the form and whenever you take part in any course, training, service, or activity provided by the Institute.",
    "By submitting the form or ticking “I agree to the terms and conditions,” you confirm that you have read, understood, and accepted these terms. If you do not agree with any part of these terms, please do not submit the form or enrol in a course.",
  ],
  sections: [
    {
      title: "1. Responsible Use",
      blocks: [
        p(
          "You agree to use the Google Form and participate in the Institute’s courses only for lawful and genuine purposes. You must not misuse the form, course materials, staff, facilities, or services, or act in a way that harms, harasses, disrupts, or unfairly affects the Institute, its employees, or other students."
        ),
        p(
          "You are responsible for your own conduct during the course and while using any Institute-related platform or facility. If your actions violate the law, infringe another person’s rights, or breach these terms, you may be removed from the course and may be responsible for any resulting legal consequences."
        ),
      ],
    },
    {
      title: "2. Intellectual Property",
      blocks: [
        p(
          "All content, branding, logos, designs, training materials, techniques, documents, images, and other materials connected with Kingleo Tattooz Institute remain the property of the Institute. This includes the Institute’s logo, which is protected as a trademark and/or under applicable intellectual-property laws."
        ),
        p(
          "You may not copy, share, sell, modify, publish, reproduce, or use any Institute material, logo, or course content for personal or commercial purposes without prior written permission from the Institute. Unauthorised use may lead to legal action and a claim for damages or other remedies."
        ),
      ],
    },
    {
      title: "3. No Guarantee and Limited Liability",
      blocks: [
        p(
          "The Institute provides its form, courses, training, and related information on an “as is” basis. While the Institute aims to provide useful and accurate training, it does not guarantee that every result, technique, business outcome, or personal goal will be achieved."
        ),
        p(
          "The Institute is not responsible for any direct or indirect loss, injury, expense, inconvenience, or damage that may arise from your use of the form, participation in a course, reliance on course information, or interruption/unavailability of any service. Your decision to enrol and participate is voluntary, and you accept the risks involved in learning and practising tattoo-related skills."
        ),
      ],
    },
    {
      title: "4. Your Responsibility to the Institute",
      blocks: [
        p(
          "You agree to protect Kingleo Tattooz Institute, its owners, staff, trainers, representatives, and associates from any claim, loss, damage, cost, or legal expense caused by your actions, misuse of the form or course, violation of these terms, or breach of applicable law."
        ),
        p(
          "If a claim is made against the Institute because of something you did or failed to do, you agree to cooperate with the Institute and take responsibility for the matter. This responsibility continues even after your course ends or your enrolment is cancelled."
        ),
      ],
    },
    {
      title: "5. Consent to Contact Calls",
      blocks: [
        p(
          "By sharing your phone number and submitting this form, you allow Kingleo Tattooz Institute or its authorised representatives to contact you by call, SMS, WhatsApp, email, or other communication methods. This may include course information, admission updates, enquiries, support, notifications, and promotional messages."
        ),
        p(
          "You understand that your number may be registered under a Do Not Call (DND) registry, but you are still giving the Institute permission to contact you for the purposes mentioned above. You may stop receiving promotional communications at any time by informing the Institute or following the opt-out instructions provided during a call or message."
        ),
      ],
    },
    {
      title: "6. Privacy and Personal Information",
      blocks: [
        p(
          "The Institute collects personal details such as your name, contact number, email address, and any other information you provide through this form. This information is used to process your enquiry or enrolment, communicate with you, provide course-related support, and improve the Institute’s services."
        ),
        p(
          "Your personal information will be kept confidential and will not be sold or shared with unrelated third parties, except where required by law or where you have given permission. The Institute will take reasonable steps to protect your information from unauthorised access, misuse, alteration, or disclosure."
        ),
        p(
          "You may withdraw your consent or request that the Institute stop contacting you by contacting the Institute in writing. However, withdrawing consent does not change the non-refundable fee policy after enrolment and payment."
        ),
      ],
    },
    {
      title: "7. Non-Refundable Course Fee",
      blocks: [
        p(
          "Once the course fee has been paid and your enrolment is confirmed, the fee is non-refundable. No refund will be provided if a student withdraws, discontinues, is unable to complete the course, or leaves before the course ends, for any reason."
        ),
        p(
          "This policy applies to voluntary withdrawal, absence, personal circumstances, change of mind, non-attendance, or any other reason. Please make sure you understand the course details, schedule, and your availability before making payment."
        ),
      ],
    },
    {
      title: "8. Changes to The Terms",
      blocks: [
        p(
          "Kingleo Tattooz Institute may update, change, or modify these Terms & Conditions at any time. Changes may be made for legal, operational, service-related, or other business reasons."
        ),
        p(
          "It is your responsibility to review these terms from time to time. If you continue using the form, services, or courses after any update, it will be considered that you accept the revised terms."
        ),
      ],
    },
    {
      title: "9. Governing Law and Jurisdiction",
      blocks: [
        p(
          "These Terms & Conditions and any dispute connected with the form, enrolment, course, or Institute services will be governed by the laws of India. Any legal matter will be handled exclusively in the courts of Mumbai, India, and you agree to accept the jurisdiction of those courts."
        ),
      ],
    },
    {
      title: "10. Severability",
      blocks: [
        p(
          "If any part of these Terms & Conditions is found to be invalid, unlawful, or unenforceable, the remaining parts will still apply. The invalid section will not affect the validity of the rest of the agreement."
        ),
      ],
    },
    {
      title: "11. Right to Withdraw Before Submission",
      blocks: [
        p(
          "If you do not agree with these terms, or if you do not wish to share your information, you may simply choose not to submit the form. If you do not submit the form, the Institute will not collect your details."
        ),
        p(
          "Once you submit the form and enrol, the non-refundable fee policy will apply as explained above."
        ),
      ],
    },
    {
      title: "12. Acceptance",
      blocks: [
        p("By submitting this Google Form, you confirm that:"),
        {
          type: "list",
          items: [
            "You have read and understood these Terms & Conditions.",
            "You agree to follow all rules, policies, and conditions mentioned here.",
            "You consent to the Institute collecting and using your information as described.",
            "You allow the Institute to contact you using the details you provided.",
            "You understand that the course fee is non-refundable after enrolment.",
            "You accept that these terms form a binding agreement between you and Kingleo Tattooz Institute.",
          ],
        },
      ],
    },
  ],
};
