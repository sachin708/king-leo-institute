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
  description = "Honours that mark our mentors and studio the standard every Kingleo artist is trained to meet.",
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
      id="awards"
      className={`w-full bg-white text-black pt-6 lg:pt-20 overflow-hidden select-none ${className}`.trim()}
    >
      <div className="w-full flex flex-col items-center">
        {/* Scalable Achievement Image Container with 2-Second Scale-Up Animation */}
        <div
          ref={imageContainerRef}
          className="w-full flex justify-center"
        >
          <div
            className={`relative flex flex-col md:block w-full overflow-hidden bg-zinc-950 transform-gpu transition-all duration-[2000ms] ease-out will-change-transform ${
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
                sizes="100vw"
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
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            {/* Section Header overlay: top-centered on mobile, left side on desktop */}
            <div className="hidden md:block absolute inset-0 z-10 pointer-events-none md:bg-gradient-to-r md:from-black/60 md:via-black/15 md:to-transparent" />
            <div className="order-first relative md:order-none md:absolute inset-x-0 top-0 z-20 flex flex-col items-center text-center bg-white md:bg-transparent px-6 pt-4 pb-6 md:p-8 md:ml-14 md:inset-y-0 md:right-auto md:w-1/2 md:items-start md:justify-center md:text-left md:p-10 lg:p-14">
              {tagline && (
                <Tagline
                  text={tagline}
                  fontSize="text-[10px] sm:text-xs md:text-sm"
                  letterSpacing="tracking-[0.28em]"
                  color="text-black md:text-white"
                  uppercase={true}
                  className="mb-3 md:mb-4"
                />
              )}

              <Heading
                as="h2"
                text={heading}
                fontFamily="font-sans"
                fontWeight="font-bold"
                fontSize="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[52px]"
                lineHeight="leading-[1.1] sm:leading-[1.08]"
                letterSpacing="tracking-tight"
                color="text-black md:text-white"
                uppercase={false}
                className="whitespace-pre-line"
              />

              {description && (
                <Description
                  text={description}
                  fontSize="text-xs sm:text-sm md:text-base"
                  fontWeight="font-normal"
                  color="text-black/80 md:text-white/85"
                  maxWidth="max-w-md"
                  className="mt-3 md:mt-4 leading-relaxed"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
