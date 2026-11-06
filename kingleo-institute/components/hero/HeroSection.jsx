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
  showOverlay = true,
  fixedBackground = false, // desktop image stays fixed while the page scrolls past it
  offsetNavbar = false, // desktop: start the image below the fixed navbar and keep its top visible
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
      className={`relative w-full ${
        offsetNavbar ? "md:min-h-[max(100vh,calc(56.25vw_+_6rem))]" : "md:min-h-screen"
      } flex flex-col md:justify-between overflow-hidden bg-black md:bg-transparent pt-20 sm:pt-24 md:pt-0 text-white ${className}`.trim()}
      style={fixedBackground ? { clipPath: "inset(0px)", WebkitClipPath: "inset(0px)", ...style } : style}
    >
      {/* Background Images: Desktop (full-bleed behind card) vs Mobile (stacked above card) */}
      <div
        className={`relative ${
          fixedBackground ? "md:fixed" : "md:absolute"
        } ${
          offsetNavbar ? "md:inset-x-0 md:bottom-0 md:top-24" : "md:inset-0"
        } z-0`}
      >
        {/* Desktop Image (Screen md and above) */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src={desktopImage}
            alt={imageAlt}
            fill
            priority
            quality={90}
            sizes="100vw"
            className={`object-cover ${offsetNavbar ? "object-top" : "object-center"}`}
          />

        </div>

        {/* Mobile Image (Screen smaller than md) */}
        <div className="block md:hidden relative w-full aspect-[2/3] max-h-[102svh]">
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
          {showOverlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85 pointer-events-none" />
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-0 -mt-4 md:mt-0 pt-0 md:pt-44 pb-10 sm:pb-12 md:pb-24 flex-1 flex flex-col justify-center ${contentClassName}`.trim()}
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
