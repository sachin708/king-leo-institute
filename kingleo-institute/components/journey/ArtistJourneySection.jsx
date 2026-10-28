"use client";

import React from "react";
import Link from "next/link";
import { Phone, CalendarDays } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";

/**
 * ArtistJourneySection Component
 * 
 * Features:
 * - Parallax scroll effect with clip-path: inset(0px) and fixed background
 * - min-height: 175vh on mobile (< 768px) and 145vh on desktop matching reference
 * - Displays mobile.webp on mobile and desktop.webp on desktop
 * - Full-width stacked action buttons on mobile screens
 * - Visual scroll reveal: starts with artist portrait, scrolls smoothly into content
 */
export default function ArtistJourneySection({
  tagline = "FREE ORIENTATION - LIMITED SEATS",
  heading = "Ready To Start Your\nTattoo Artist Journey?",
  subheading = "Stop Dreaming. Start Inking.",
  paragraphs = [
    "You have the passion. The KINGLEO LEGEND Protocol will give you the profession. Join 500+ artists who turned their passion into a high income career at Kingleo Tattooz Institute.",
    "Admissions are open for Indore. We keep batches small for personal mentorship. Limited seats per batch.",
  ],
  images = {
    desktop: "/home/artist-journey/desktop.webp",
    mobile: "/home/artist-journey/mobile.webp",
    alt: "Ready To Start Your Tattoo Artist Journey - Kingleo Tattooz Institute",
  },
  buttons = [
    {
      label: "BOOK FREE ORIENTATION",
      iconType: "calendar",
      variant: "dark",
      href: "https://wa.me/919584228615?text=Hi%20Kingleo%20Tattooz%2C%20I%20want%20to%20book%20a%20free%20orientation%20for%20the%20tattoo%20artist%20program",
    },
    {
      label: "BOOK ON CALL",
      iconType: "phone",
      variant: "dark",
      href: "tel:+919584228615",
    },
    {
      label: "BOOK ON WHATSAPP",
      iconType: "whatsapp",
      variant: "whatsapp",
      href: "https://wa.me/919584228615?text=Hi%20Kingleo%20Tattooz%2C%20I%20want%20to%20know%20more%20about%20the%20tattoo%20artist%20journey",
    },
  ],
  highlights = [
    "100% PRACTICAL",
    "LIVE REAL SKIN",
    "INDUSTRY DIPLOMA",
  ],
  className = "",
}) {
  const desktopImg = images?.desktop || "/home/artist-journey/desktop.webp";
  const mobileImg = images?.mobile || "/home/artist-journey/mobile.webp";

  // Render icon based on type
  const renderIcon = (type) => {
    switch (type) {
      case "calendar":
        return <CalendarDays className="w-4 h-4 shrink-0 text-white" />;
      case "phone":
        return <Phone className="w-4 h-4 shrink-0 text-white" />;
      case "whatsapp":
        return <WhatsAppIcon className="w-4 h-4 shrink-0" color="#25D366" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="contact"
      aria-label="Artist Journey"
      className={`cta-journey relative z-[1] w-full min-h-[175vh] md:min-h-[145vh] flex flex-col justify-start text-white [clip-path:inset(0px)] ${className}`.trim()}
      style={{ clipPath: "inset(0px)", WebkitClipPath: "inset(0px)" }}
    >
      {/* 
        Fixed Parallax Background:
        Clipped within this section by clip-path: inset(0px).
        Stays locked to the viewport while user scrolls through the 175vh height.
      */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10">
        {/* Desktop Image (md and up) */}
        <div
          className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${desktopImg}')`,
            backgroundPosition: "center right md:top-18",
          }}
          aria-hidden="true"
        />

        {/* Mobile Image (< md) */}
        <div
          className="block md:hidden absolute inset-0 w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${mobileImg}')`,
            backgroundPosition: "center top",
          }}
          aria-hidden="true"
        />

        {/* Desktop Gradient Overlay */}
        <div
          className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 via-60% to-transparent"
          aria-hidden="true"
        />

        {/* Mobile Gradient Overlay: Keeps artist face clear at top, darkens lower area for text legibility */}
        <div
          className="block md:hidden absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 via-45% to-black/95"
          aria-hidden="true"
        />
      </div>

      {/* 
        Scrollable Content Container:
        - Mobile: pt-[45vh] creates top breathing room so the artist portrait is first enjoyed,
                  then the text and buttons scroll smoothly up over it.
        - Desktop: pt-28 md:pt-36 lg:pt-44 left-aligned layout.
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-[45vh] sm:pt-[40vh] md:pt-36 lg:pt-48 pb-24 sm:pb-32 flex flex-col">
        <div className="w-full max-w-xl lg:max-w-3xl flex flex-col items-start text-left">

          {/* Subtitle / Tagline */}
          {tagline && (
            <p className="text-[11px] sm:text-xs md:text-[13px] font-semibold tracking-[0.22em] text-zinc-300 uppercase mb-2.5 sm:mb-3">
              {tagline}
            </p>
          )}

          {/* Main Heading */}
          {heading && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.14] whitespace-pre-line mb-3 sm:mb-4">
              {heading}
            </h2>
          )}

          {/* Subheading */}
          {subheading && (
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight mb-3.5 sm:mb-4">
              {subheading}
            </h3>
          )}

          {/* Description Paragraphs */}
          {paragraphs && paragraphs.length > 0 && (
            <div className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-[15px] text-zinc-300 leading-relaxed max-w-[90%] mb-6 sm:mb-7 font-normal">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          )}

          {/* Action Buttons: Full-width stacked on mobile (< md), row on desktop */}
          {buttons && buttons.length > 0 && (
            <div className="w-full flex flex-col md:flex-row md:flex-wrap items-stretch md:items-center gap-3 sm:gap-3.5 mb-6 sm:mb-7">
              {buttons.map((btn, index) => {
                const isWhatsApp = btn.variant === "whatsapp" || btn.iconType === "whatsapp";

                const buttonStyle = isWhatsApp
                  ? "bg-[#0e3b24]/90 hover:bg-[#134d30] border border-emerald-500/60 text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                  : "bg-zinc-900/85 hover:bg-zinc-800/90 border border-zinc-700/80 text-white shadow-[0_4px_16px_rgba(0,0,0,0.4)]";

                return (
                  <Link
                    key={index}
                    href={btn.href || "#"}
                    target={btn.href?.startsWith("http") ? "_blank" : undefined}
                    rel={btn.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-xs sm:text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 backdrop-blur-md active:scale-[0.98] ${buttonStyle}`}
                  >
                    {btn.iconType && renderIcon(btn.iconType)}
                    <span>{btn.label}</span>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Bottom Bullet Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs md:text-[13px] font-semibold tracking-wider text-zinc-300 uppercase">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="inline-flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-white text-[10px] md:text-[12px]" aria-hidden="true">{highlight}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
