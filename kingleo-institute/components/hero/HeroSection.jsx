"use client";

import React from "react";
import Image from "next/image";
import HeroCard from "@/components/hero/HeroCard";
import SocialSidebar from "@/components/layout/SocialSidebar";

/**
 * Reusable HeroSection Component
 * - Supports separate desktop & mobile images to prevent distortion or breaking
 * - Positionable frosted card: 'left', 'right', or 'center' via cardPosition prop
 * - Fully customizable via props (images, cardData, styles, social sidebar)
 */
export default function HeroSection({
  desktopImage = "/home/home-hero/desktop.jpg",
  mobileImage = "/home/home-hero/mobile.jpg",
  imageAlt = "Kingleo Tattoo Studio Indore",
  cardPosition = "left", // 'left' | 'right' | 'center'
  cardProps = {},
  showSocialSidebar = true,
  socialLinks = [],
  className = "",
  style = {},
  contentClassName = "",
  children,
}) {
  // Determine alignment based on cardPosition prop
  const positionClasses = {
    left: "justify-start items-center lg:items-center",
    right: "justify-end items-center lg:items-center",
    center: "justify-center items-center",
  };

  const selectedPosition = positionClasses[cardPosition] || positionClasses.left;

  return (
    <section
      className={`relative w-full min-h-screen flex flex-col justify-between overflow-hidden text-white ${className}`.trim()}
      style={style}
    >
      {/* Background Images: Desktop vs Mobile */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image (Screen md and above) */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src={desktopImage}
            alt={imageAlt}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />

        </div>

        {/* Mobile Image (Screen smaller than md) */}
        <div className="block md:hidden relative w-full h-full">
          <Image
            src={mobileImage}
            alt={imageAlt}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-top"
          />
          {/* Mobile dark gradient overlay from bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85 pointer-events-none" />
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-24 flex-1 flex flex-col justify-center ${contentClassName}`.trim()}
      >
        <div className={`w-full flex ${selectedPosition} transition-all duration-300`}>
          {/* Render custom children or default HeroCard with cardProps */}
          {children || <HeroCard {...cardProps} />}
        </div>
      </div>

      {/* Vertical Social Icons on right margin (Desktop) */}
      {showSocialSidebar && <SocialSidebar links={socialLinks} />}
    </section>
  );
}
