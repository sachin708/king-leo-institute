/**
 * Hero Section Configuration & Content Data
 * All strings, styles, typography, links, and layout positions are centralized here.
 * You can pass any of these as props to <HeroSection />, <HeroCard />, <Heading />, etc.
 */

export const heroContent = {
  // Responsive background images
  images: {
    desktop: "/home/home-hero/desktop.jpg",
    mobile: "/home/home-hero/mobile.jpg",
    alt: "Kingleo Tattooz Studio & Institute in Indore",
  },

  // Positioning of frosted glass card: 'left' | 'right' | 'center'
  cardPosition: "left",

  // Tagline configuration
  tagline: {
    text: "EXPRESS YOURSELF IN INK WITH",
    fontSize: "text-xs sm:text-sm",
    color: "text-zinc-200",
    fontWeight: "font-bold",
    letterSpacing: "tracking-[0.16em]",
  },

  // Main Heading configuration
  heading: {
    as: "h1",
    text: "THE BEST TATTOO STUDIO IN INDORE",
    fontSize: "text-3xl sm:text-4xl md:text-5xl lg:text-[54px]",
    fontFamily: "font-[family-name:var(--font-bebas)]",
    lineHeight: "leading-[1.05]",
    letterSpacing: "tracking-tight",
    color: "text-white",
    uppercase: true,
  },

  // Description paragraph configuration
  description: {
    as: "p",
    text: "If you are bold enough to get your tattoo done, it's high time to embrace the coolness of permanent ink. At Kingleo Tattooz, the best tattoo studio in Indore, our tattoo artists can bring your imagination to life. Every tattoo tells a story, and our premium designs capture it perfectly. So, let's give it a try and let your skin bloom.",
    fontSize: "text-xs sm:text-sm md:text-[15px]",
    color: "text-zinc-300",
    lineHeight: "leading-relaxed",
    maxWidth: "max-w-xl",
  },

  // Buttons inside the frosted card
  buttons: [
    {
      label: "Free Consultation",
      variant: "frosted",
      href: "#consultation",
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
      href: "https://wa.me/919584228615?text=Hi%20Kingleo%20Tattooz%2C%20I%20want%20to%20know%20more%20about%20your%20services",
      fullWidth: true,
    },
  ],

  // Contact info
  contact: {
    phones: ["+91 95842 28615", "+91 70009 24824"],
    email: "kingleotattooz@gmail.com",
    whatsapp: "919584228615",
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
