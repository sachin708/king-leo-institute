"use client";

import React, { useState } from "react";
import { Phone, CalendarDays } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import MenuModal from "@/components/layout/MenuModal";
import HeroSection from "@/components/hero/HeroSection";
import HeroCard from "@/components/hero/HeroCard";
import CourseInfoCard from "@/components/programs/CourseInfoCard";
import PiercingSection from "@/components/programs/PiercingSection";
import FeeBreakdownSection from "@/components/programs/FeeBreakdownSection";
import ModulesSection from "@/components/programs/ModulesSection";
import HoverCardsSection from "@/components/programs/HoverCardsSection";
import FeatureCardsSection from "@/components/programs/FeatureCardsSection";
import FaqSection from "@/components/programs/FaqSection";
import ArtistJourneySection from "@/components/journey/ArtistJourneySection";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/floating/FloatingActions";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { heroContent } from "@/app/content/home/hero";
import { artistJourneyContent } from "@/app/content/home/artistJourney";
import { subPageFooterContent } from "@/app/content/home/footer";

const buttonIcons = {
  calendar: <CalendarDays className="w-4 h-4" />,
  phone: <Phone className="w-4 h-4" />,
  whatsapp: <WhatsAppIcon className="w-4 h-4" color="#25D366" />,
};

/**
 * Reusable program (product) page:
 * hero → modules → FAQs → artist journey CTA → footer.
 */
export default function ProgramPage({ content }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { hero, courseInfo, piercing, feeBreakdown, modules, doubts, features, faqs, theme } = content;

  const heroButtons = hero.buttons.map((btn) => ({
    ...btn,
    icon: buttonIcons[btn.iconType] || null,
    fullWidth: true,
  }));

  return (
    <main className="relative min-h-screen w-full text-white flex flex-col overflow-x-clip selection:bg-emerald-500 selection:text-black">
      <Navbar
        logoSrc="/icons/Kinglio-white.png"
        logoAlt="Kingleo Tattooz"
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((prev) => !prev)}
      />

      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        menuItems={heroContent.menuItems}
        phoneNumbers={heroContent.contact.phones}
        email={heroContent.contact.email}
      />

      <HeroSection
        desktopImage={hero.images.desktop}
        mobileImage={hero.images.mobile}
        imageAlt={hero.images.alt}
        cardPosition="left"
        showOverlay={false}
        fixedBackground
        showSocialSidebar={false}
      >
        <HeroCard
          tagline={{
            text: hero.tagline,
            fontSize: "text-[10px] sm:text-[11px]",
            letterSpacing: "tracking-[0.22em]",
            fontWeight: "font-bold",
            color: "text-zinc-200",
            className:
              "self-center sm:self-start rounded-full border border-white/20 bg-white/[0.04] px-4 py-1.5",
          }}
          heading={{
            as: "h1",
            text: hero.heading,
            fontSize: "text-4xl sm:text-5xl md:text-[52px]",
            fontFamily: "font-sans",
            fontWeight: "font-bold",
            letterSpacing: "tracking-tight",
            lineHeight: "leading-[1.05]",
            color: "text-white",
            uppercase: false,
            className: "whitespace-pre-line",
          }}
          description={{
            as: "p",
            text: hero.description,
            fontSize: "text-sm sm:text-base md:text-[17px]",
            color: "text-zinc-100",
            lineHeight: "leading-relaxed",
          }}
          buttons={heroButtons}
          className="md:max-w-[40rem]"
        >
          {hero.subDescription && (
            <p className="text-xs sm:text-sm md:text-[15px] text-zinc-200 leading-relaxed">
              {hero.subDescription}
            </p>
          )}
        </HeroCard>
      </HeroSection>

      {courseInfo && <CourseInfoCard {...courseInfo} />}

      {piercing && <PiercingSection {...piercing} />}

      {feeBreakdown && <FeeBreakdownSection {...feeBreakdown} />}

      {modules && <ModulesSection {...modules} />}

      {doubts && <HoverCardsSection {...doubts} />}

      {features && <FeatureCardsSection {...features} />}

      <FaqSection {...faqs} dark={theme === "dark"} />

      <ArtistJourneySection {...artistJourneyContent} fixedBackground={false} />

      <Footer {...subPageFooterContent} />

      <FloatingActions
        whatsappNumber={heroContent.contact.whatsapp}
        instituteName={heroContent.chatbot.instituteName}
        chatbotLogo={heroContent.chatbot.logoSrc}
      />
    </main>
  );
}
