/**
 * Terms and Conditions content - served at /terms
 * Section blocks: { type: "p" | "list" | "contact", ... }
 */

const address =
  "32/2, B.K. Sindhi Colony, Gali No. 2, R.S. Chat Wali Gali (near Tower Chouraha), Indore, Madhya Pradesh 452001, India";

export const termsContent = {
  tagline: "LEGAL",
  heading: "Terms and Conditions",
  subheading: "Kingleo Tattooz",
  intro: [
    "The following ‘Terms and Conditions’ (Terms) govern your use of the Kingleo Tattooz website (kingleotattooz.com) and your engagement with our tattoo, piercing, tattoo-removal, permanent-makeup, and related studio services in Indore, Madhya Pradesh.",
    "By booking an appointment, visiting our studio, using our website, or receiving any service, you agree to the ‘Terms’.",
  ],
  sections: [
    {
      id: "who-we-are",
      title: "Who We Are",
      blocks: [
        {
          type: "contact",
          name: "Kingleo Tattooz",
          address,
          email: "kingleotattooz@gmail.com",
          phones: [
            { label: "+91 95842 28615", href: "tel:+919584228615" },
            { label: "+91 70009 24824", href: "tel:+917000924824" },
          ],
        },
      ],
    },
    {
      id: "eligibility",
      title: "Eligibility and Age Requirements",
      blocks: [
        {
          type: "list",
          items: [
            "Tattooing and most body-modification services are available only to individuals aged 18 years or older.",
            "Valid government-issued photo identification may be required to verify age.",
            "We do not provide tattoo services to minors. Where local law permits limited procedures for minors, written parental or guardian consent plus identification of the guardian will be required.",
            "You confirm that you have the legal capacity to enter into this agreement.",
          ],
        },
      ],
    },
    {
      id: "appointments",
      title: "Appointments, Deposits and Cancellations",
      blocks: [
        {
          type: "list",
          items: [
            "Appointments are booked via WhatsApp, phone, website forms, or in-studio consultation.",
            "Certain appointments may require a non-refundable deposit to secure the slot. The deposit amount will be confirmed before booking.",
            "Deposits are adjusted against the final bill if the service is completed.",
            "Cancellations or rescheduling requests should be made at least 24 hours in advance. Late cancellations or no-shows may result in forfeiture of the deposit.",
            "We reserve the right to reschedule or cancel an appointment due to artist unavailability, technical issues, or safety concerns. In such cases, we will offer a new slot or refund any deposit paid.",
          ],
        },
      ],
    },
    {
      id: "health-risks",
      title: "Health Disclosures, Risks and Consent",
      blocks: [
        {
          type: "list",
          items: [
            "Tattooing and piercing involve inherent risks including infection, allergic reaction, scarring, fading, or other complications.",
            "You must accurately disclose relevant medical history (allergies, skin conditions, medications, blood disorders, pregnancy, recent illness, or any condition that could affect healing or safety).",
            "We may refuse service if we believe proceeding would pose a health or safety risk.",
            "You will be required to sign a separate informed-consent and liability form before any procedure. That form forms part of the ‘Terms’.",
            "You acknowledge that results can vary based on skin type, placement, aftercare, and individual healing response.",
          ],
        },
      ],
    },
    {
      id: "pricing",
      title: "Pricing, Payment and Refunds",
      blocks: [
        {
          type: "list",
          items: [
            "Prices depend on size, complexity, placement, ink type, and artist. Final pricing is confirmed during consultation before work begins.",
            "Full payment is due on completion of the service unless otherwise agreed (including EMI arrangements where available).",
            "We accept cash, UPI, cards, and other methods as displayed at the studio.",
            "Once a procedure has started, fees are non-refundable. Touch-up or warranty work (where offered) is subject to the specific conditions stated at the time of service.",
            "We do not guarantee results on high-wear areas such as the palms or soles, and no free touch-up warranty applies to those placements.",
          ],
        },
      ],
    },
    {
      id: "aftercare",
      title: "Aftercare",
      blocks: [
        {
          type: "list",
          items: [
            "You will receive verbal and/or written aftercare instructions.",
            "Proper aftercare is your responsibility. Failure to follow aftercare advice may affect healing, colour retention, and overall result, and may void any touch-up guarantee.",
            "We are not liable for issues arising from improper aftercare, exposure to sunlight, swimming, or other client actions after leaving the studio.",
          ],
        },
      ],
    },
    {
      id: "photography",
      title: "Photography and Portfolio Use",
      blocks: [
        {
          type: "list",
          items: [
            "We may photograph completed work for our portfolio, website, or social media only with your clear, separate consent.",
            "You may choose to remain anonymous or request that identifying features be cropped or blurred.",
            "Consent for photography can be withdrawn before the image is published; once published, removal will be done on request where reasonably possible.",
          ],
        },
      ],
    },
    {
      id: "ownership",
      title: "Design Ownership and Intellectual Property",
      blocks: [
        {
          type: "list",
          items: [
            "Custom designs created by our artists remain the intellectual property of Kingleo Tattooz unless otherwise agreed in writing.",
            "You receive a personal, non-exclusive licence to wear the design as a tattoo. Reproduction of the design by third parties or commercial use requires our prior written permission.",
            "You warrant that any reference images or ideas you provide do not infringe third-party copyrights.",
          ],
        },
      ],
    },
    {
      id: "hygiene",
      title: "Hygiene and Studio Standards",
      blocks: [
        {
          type: "list",
          items: [
            "We follow strict hygiene protocols, including use of single-use needles, fresh gloves, sterile equipment, and quality inks from reputable brands.",
            "Our studio is maintained to professional standards consistent with applicable local guidelines.",
          ],
        },
      ],
    },
    {
      id: "website-use",
      title: "Website Use",
      blocks: [
        {
          type: "list",
          items: [
            "The website is provided for information and booking facilitation.",
            "You agree not to misuse the site, attempt unauthorised access, or post harmful content.",
            "Content on the website (images, text, designs) is protected and may not be copied for commercial use without permission.",
          ],
        },
      ],
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      blocks: [
        {
          type: "list",
          items: [
            "To the fullest extent permitted by Indian law, Kingleo Tattooz, its artists, and staff shall not be liable for any indirect, incidental, or consequential damages arising from services or website use.",
            "Our total liability for any claim related to a service shall not exceed the amount you paid for that specific service.",
            "Nothing in the ‘Terms’ excludes liability for death or personal injury caused by negligence, or any other liability that cannot be limited under applicable law.",
          ],
        },
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law and Disputes",
      blocks: [
        {
          type: "list",
          items: [
            "The ‘Terms’ are governed by the laws of India.",
            "Any disputes shall be subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh.",
          ],
        },
      ],
    },
    {
      id: "changes",
      title: "Changes to The Terms",
      blocks: [
        {
          type: "list",
          items: [
            "We may update the ‘Terms’ from time to time. The ‘Last Updated’ date will reflect the latest version.",
            "Continued use of our services or website after changes constitutes acceptance of the revised ‘Terms’.",
          ],
        },
      ],
    },
    {
      id: "contact",
      title: "Contact",
      blocks: [
        { type: "p", text: "For questions about the ‘Terms’, contact us at:" },
        {
          type: "contact",
          name: "Kingleo Tattooz",
          address,
          email: "kingleotattooz@gmail.com",
          phones: [{ label: "+91 95842 28615", href: "tel:+919584228615" }],
        },
      ],
    },
  ],
};
