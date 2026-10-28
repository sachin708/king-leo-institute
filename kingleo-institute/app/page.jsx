"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import MenuModal from "@/components/layout/MenuModal";
import HeroSection from "@/components/hero/HeroSection";
import HeroCard from "@/components/hero/HeroCard";
import MarqueeSection from "@/components/marquee/MarqueeSection";
import { marqueeContent } from "@/app/content/home/marquee";
import FeatureSection from "@/components/features/FeatureSection";
import { featuresContent } from "@/app/content/home/features";
import ImageFeatureCards from "@/components/courses/ImageFeatureCards";
import { coursesContent } from "@/app/content/home/courses";
import MentorsSection from "@/components/mentors/MentorsSection";
import { mentorsContent } from "@/app/content/home/mentors";
import AwardsSection from "@/components/awards/AwardsSection";
import { awardsContent } from "@/app/content/home/awards";
import DiplomaSection from "@/components/diploma/DiplomaSection";
import { diplomaContent } from "@/app/content/home/diploma";
import SyntheticSkinSection from "@/components/diploma/SyntheticSkinSection";
import { syntheticSkinContent } from "@/app/content/home/syntheticSkin";
import LiveRealSkinSection from "@/components/diploma/LiveRealSkinSection";
import { liveRealSkinContent } from "@/app/content/home/liveRealSkin";
import AlumniSection from "@/components/diploma/AlumniSection";
import { alumniContent } from "@/app/content/home/alumni";
import RealStoriesSection from "@/components/testimonials/RealStoriesSection";
import { storiesContent } from "@/app/content/home/stories";
import ArtistJourneySection from "@/components/journey/ArtistJourneySection";
import { artistJourneyContent } from "@/app/content/home/artistJourney";
import FloatingActions from "@/components/floating/FloatingActions";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { heroContent } from "@/app/content/home/hero";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cardPosition, setCardPosition] = useState(heroContent.cardPosition || "left");

  // Format buttons with proper SVG icons
  const heroButtons = heroContent.buttons.map((btn) => {
    let icon = null;
    if (btn.iconType === "phone") {
      icon = <PhoneIcon className="w-4 h-4" />;
    } else if (btn.iconType === "whatsapp") {
      icon = <WhatsAppIcon className="w-4 h-4" color="#25D366" />;
    }

    return {
      ...btn,
      icon,
    };
  });

  return (
    <main className="relative min-h-screen w-full text-white flex flex-col overflow-x-clip selection:bg-emerald-500 selection:text-black">
      {/* Top Navigation Bar with Kingleo Logo and Hamburger */}
      <Navbar
        logoSrc="/icons/Kinglio-white.png"
        logoAlt="Kingleo Tattooz"
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((prev) => !prev)}
      />

      {/* Hamburger Menu Overlay Modal */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        menuItems={heroContent.menuItems}
        phoneNumbers={heroContent.contact.phones}
        email={heroContent.contact.email}
        onConsultClick={() => {
          const el = document.getElementById("consultation");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Reusable Hero Section with Desktop & Mobile Images and Positionable Frosted Card */}
      <HeroSection
        desktopImage={heroContent.images.desktop}
        mobileImage={heroContent.images.mobile}
        imageAlt={heroContent.images.alt}
        cardPosition={cardPosition}
      >
        <HeroCard
          tagline={{
            text: heroContent.tagline.text,
            fontSize: heroContent.tagline.fontSize,
            color: heroContent.tagline.color,
            fontWeight: heroContent.tagline.fontWeight,
          }}
          heading={{
            as: heroContent.heading.as,
            text: heroContent.heading.text,
            fontSize: heroContent.heading.fontSize,
            fontFamily: heroContent.heading.fontFamily,
            color: heroContent.heading.color,
            lineHeight: heroContent.heading.lineHeight,
          }}
          description={{
            as: heroContent.description.as,
            text: heroContent.description.text,
            fontSize: heroContent.description.fontSize,
            color: heroContent.description.color,
            lineHeight: heroContent.description.lineHeight,
          }}
          buttons={heroButtons}
        />
      </HeroSection>

      <MarqueeSection items={marqueeContent.items} />

      <FeatureSection {...featuresContent} />

      <ImageFeatureCards {...coursesContent} />

      <MentorsSection {...mentorsContent} />

      <AwardsSection {...awardsContent} />

      <DiplomaSection {...diplomaContent} />

      <SyntheticSkinSection {...syntheticSkinContent} />

      <LiveRealSkinSection {...liveRealSkinContent} />

      <AlumniSection {...alumniContent} />

      <RealStoriesSection {...storiesContent} />

      <ArtistJourneySection {...artistJourneyContent} />



      {/* Bottom Right Floating Actions: WhatsApp Button + Kingleo Institute Chatbot */}
      <FloatingActions
        whatsappNumber={heroContent.contact.whatsapp}
        instituteName={heroContent.chatbot.instituteName}
        chatbotLogo={heroContent.chatbot.logoSrc}
      />
    </main>
  );
}
