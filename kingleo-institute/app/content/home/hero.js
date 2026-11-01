/**
 * Hero Section Configuration & Content Data
 * All strings, styles, typography, links, and layout positions are centralized here.
 * You can pass any of these as props to <HeroSection />, <HeroCard />, <Heading />, etc.
 */

export const heroContent = {
  // Responsive background images
  images: {
    desktop: "/home/home-hero/desktop.png",
    mobile: "/home/home-hero/mobile.webp",
    alt: "Kingleo Tattooz Studio & Institute in Indore",
  },

  // Positioning of frosted glass card: 'left' | 'right' | 'center'
  cardPosition: "left",

  // Tagline configuration
  tagline: {
    text: "FROM PASSION",
    fontSize: "text-base sm:text-lg",
    color: "text-zinc-200",
    fontWeight: "font-bold",
    letterSpacing: "tracking-[0.02em]",
  },

  // Main Heading configuration
  heading: {
    as: "h1",
    text: "TO PROFESSIONAL TATTOO ARTIST",
    fontSize: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[70px]",
    fontFamily: "font-[family-name:var(--font-bebas)]",
    lineHeight: "leading-[0.94] sm:leading-[0.92]",
    letterSpacing: "tracking-[0.09em]",
    color: "text-white",
    uppercase: true,
  },

  // Description paragraph configuration
  description: {
    as: "p",
    text: "India's only studio based 6 Months Diploma in Tattoo Art. 100% practical training, live real skin experience from day one, and direct mentorship from artists with 16+ years of experience. Not a classroom. A real tattoo studio in Indore.",
    fontSize: "text-xs sm:text-sm md:text-[15px]",
    color: "text-zinc-300",
    lineHeight: "leading-relaxed",
    maxWidth: "max-w-xl",
  },

  // Buttons inside the frosted card
  buttons: [
    {
      label: "Book Your Free Consultation",
      variant: "frosted",
      href: "/contact",
      fullWidth: true,
    },
    {
      label: "Call Us",
      variant: "frosted",
      iconType: "phone",
      href: "tel:+919584228615",
      fullWidth: true,
    },
    {
      label: "WhatsApp Chat",
      variant: "whatsapp",
      iconType: "whatsapp",
      href: "https://wa.me/919343623234?text=Hi%20Kingleo%20Tattooz%2C%20I%20want%20to%20know%20more%20about%20your%20services",
      fullWidth: true,
    },
  ],

  // Contact info
  contact: {
    phones: ["+91 95842 28615", "+91 70009 24824"],
    email: "kingleotattooz@gmail.com",
    whatsapp: "919343623234",
  },

  // Chatbot settings
  chatbot: {
    instituteName: "Kingleo Institute",
    logoSrc: "/icons/Kinglio-back.jpg",
  },

  // Navigation Menu links
  menuItems: [
    { label: "HOME", href: "/", active: true },
    { label: "ABOUT US", href: "#about" },
    { label: "EXPLORE OUR ARTS", href: "#arts" },
    { label: "PIERCINGS", href: "#piercings" },
    { label: "BLOGS", href: "#blogs" },
    { label: "AFTERCARE", href: "#aftercare" },
    { label: "TATTOO REMOVAL", href: "#removal" },
    { label: "TATTOO EMI", href: "#emi" },
    { label: "LEARN TATTOOING", href: "#courses", hasArrow: true },
  ],
};
