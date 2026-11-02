/**
 * Footer Content Data
 */

export const footerContent = {
  logo: { src: "/icons/Kinglio-white.png", alt: "Kingleo Tattooz Institute" },
  address: [
    "32/2 B.K. Sindhi Colony, Gali No.2",
    "R.S. Chatwali Gali, Above Sweety Fashion",
    "Indore, Madhya Pradesh",
  ],
  operationTime: "All Days",
  contacts: {
    phone: "+91 9343623234",
    whatsapp: "+91 9343623234",
    whatsappHref: "https://wa.me/919343623234",
    email: "kingleotattoozinstitute@gmail.com",
  },
  map: {
    title: "Kingleo Tattooz Indore location",
    src: "https://www.google.com/maps?q=Kingleo+Tattooz+Indore&output=embed",
  },
  columns: [
    {
      groups: [
        {
          title: "Our Courses",
          links: [
            { label: "Diploma in Tattoo Art", href: "#courses" },
            { label: "Advanced Piercing Course", href: "#courses" },
          ],
        },
      ],
    },
    {
      groups: [
        {
          title: "Important Links",
          links: [
            { label: "Awards", href: "#awards" },
            { label: "Synthetic Skin", href: "#synthetic-skin" },
            { label: "Live Real Skin", href: "#live-real-skin" },
            { label: "Passout Students", href: "#alumni" },
            { label: "About", href: "#about" },
          ],
        },
        {
          title: "Our Initiatives",
          links: [
            { label: "Internship and Career Support", href: "/programs/internship-and-career-support" },
            { label: "Easy Fee Payment", href: "/programs/easy-fee-payment" },
            { label: "Lifetime Accessibility", href: "/programs/lifetime-accessibility" },
          ],
        },
      ],
    },
    {
      groups: [
        {
          title: "Training Facility",
          links: [
            { label: "360° Tattoo Training", href: "/programs/360-tattoo-training" },
            { label: "Expert Training Mentor", href: "/programs/expert-training-mentor" },
            { label: "Safety First Protocol", href: "/programs/safety-first-protocol" },
            { label: "Certified Courses", href: "/programs/certified-courses" },
          ],
        },
        {
          title: "Other Links",
          links: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
            { label: "Cookie Policy", href: "/cookies" },
          ],
          socials: true,
        },
      ],
    },
  ],
  socials: [
    { type: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
    { type: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
    { type: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
    { type: "pinterest", label: "Pinterest", href: "https://www.pinterest.com/" },
  ],
  copyright: "© 2026 Kingleo Tattooz. All rights reserved.",
};

/**
 * Footer for pages other than home: in-page anchors (#awards, ...) become
 * "/#awards" so they navigate back to the home page sections.
 */
export const subPageFooterContent = {
  ...footerContent,
  columns: footerContent.columns.map((col) => ({
    ...col,
    groups: col.groups.map((group) => ({
      ...group,
      links: group.links.map((link) => ({
        ...link,
        href:
          link.href.startsWith("#") && link.href.length > 1
            ? `/${link.href}`
            : link.href,
      })),
    })),
  })),
};
