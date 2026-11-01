/**
 * Contact page content - Book Your Free Consultation form
 */

export const contactContent = {
  image: {
    desktop: "/contact-us/desktop.webp",
    alt: "Kingleo Tattooz Institute counsellor ready to help",
  },
  tagline: "FREE ORIENTATION",
  heading: "Book Your Free Consultation",
  description:
    "Share your details. The team will call you with batch dates, fees, and the next step.",
  whatsappNumber: "919343623234",
  fields: {
    name: { label: "Full Name", placeholder: "Enter your full name", required: true },
    mobile: { label: "Mobile No.", placeholder: "Enter your mobile no", required: true },
    email: { label: "Email", placeholder: "Enter your email" },
    dob: { label: "Date Of Birth" },
    course: {
      label: "What Type Of Tattoo Course Are You Interested In?",
      options: [
        "Diploma in Tattoo Art",
        "360° Tattoo Training Learning Program",
        "Advanced Piercing Course",
      ],
    },
    working: {
      label: "Are You Currently Working As A Tattoo Artist?",
      options: ["Yes", "No"],
    },
  },
  submitLabel: "Submit",
};
