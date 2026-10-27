"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Tagline from "@/components/ui/Tagline";
import Heading from "@/components/ui/Heading";
import Description from "@/components/ui/Description";

/**
 * Reusable Awards & Achievements Section
 * - Dark background (bg-black) with centered Tagline, Heading, and Description
 * - Responsive images: mobile.webp for small screens, desktop.webp for desktop
 * - First-visit viewport animation: Starts at a reduced scale and smoothly scales up to full size over 2 seconds
 */
export default function AwardsSection({
  tagline = "AWARDS & ACHIEVEMENTS",
  heading = "Award Winning\nMentors\nRecognition That\nSpeaks",
  description = "Honours that mark our mentors and studio — the standard every Kingleo artist is trained to meet.",
  desktopImage = "/home/awards-achievements/desktop.webp",
  mobileImage = "/home/awards-achievements/mobile.webp",
  imageAlt = "Award Winning Mentors - Kingleo Tattoo Institute",
  className = "",
}) {
  const imageContainerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = imageContainerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className={`w-full bg-white text-black py-14 sm:py-18 lg:py-24 overflow-hidden select-none ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col items-center">
        {/* Section Header: Tagline, Heading, and Description */}
        <div className="text-center flex flex-col items-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          {tagline && (
            <Tagline
              text={tagline}
              fontSize="text-xs sm:text-sm"
              letterSpacing="tracking-[0.28em]"
              color="text-black"
              uppercase={true}
              className="mb-4 sm:mb-5"
            />
          )}

          <Heading
            as="h2"
            text={heading}
            fontFamily="font-sans"
            fontWeight="font-bold"
            fontSize="text-4xl sm:text-5xl md:text-6xl lg:text-[64px]"
            lineHeight="leading-[1.1] sm:leading-[1.08]"
            letterSpacing="tracking-tight"
            color="text-black"
            uppercase={false}
            className="whitespace-pre-line"
          />

          {description && (
            <Description
              text={description}
              fontSize="text-sm sm:text-base md:text-lg"
              fontWeight="font-normal"
              color="text-neutral-700"
              maxWidth="max-w-2xl"
              className="mt-4 sm:mt-5 leading-relaxed"
            />
          )}
        </div>

        {/* Scalable Achievement Image Container with 2-Second Scale-Up Animation */}
        <div
          ref={imageContainerRef}
          className="w-full max-w-5xl lg:max-w-6xl mx-auto flex justify-center"
        >
          <div
            className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/90 shadow-xl bg-zinc-950 transform-gpu transition-all duration-[2000ms] ease-out will-change-transform ${
              hasAnimated
                ? "scale-100 opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                : "scale-[0.80] opacity-80"
            }`}
          >
            {/* Desktop Image (Screen md and above) */}
            <div className="hidden md:block relative w-full aspect-[16/9]">
              <Image
                src={desktopImage}
                alt={imageAlt}
                fill
                priority
                quality={92}
                sizes="(min-width: 1024px) 1152px, 100vw"
                className="object-cover object-center"
              />
            </div>

            {/* Mobile Image (Screen smaller than md) */}
            <div className="block md:hidden relative w-full aspect-[9/14] sm:aspect-[4/5]">
              <Image
                src={mobileImage}
                alt={imageAlt}
                fill
                priority
                quality={92}
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
