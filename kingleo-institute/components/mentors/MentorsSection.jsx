"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Tagline from "@/components/ui/Tagline";
import Heading from "@/components/ui/Heading";
import Description from "@/components/ui/Description";

/**
 * Reusable Mentors Carousel Component
 * - White background with black text for section header
 * - Continuous smooth auto-scroll carousel that continues moving even on hover
 * - Navigation arrow buttons removed
 * - Uses Tagline, Heading, and Description inside each mentor card
 */
export default function MentorsSection({
  tagline = "MEET THE MENTORS",
  heading = "Learn From\nPro Artists",
  description = "Direct mentorship inside a real studio from artists with years of professional tattoo industry experience.",
  mentors = [],
  speed = 0.8,
  repeat = 3,
  className = "",
}) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    [
      AutoScroll({
        speed,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  if (!mentors.length) return null;

  // Repeat for continuous smooth looping across all screen sizes
  const slides = Array.from({ length: repeat }, () => mentors).flat();

  return (
    <section
      className={`w-full bg-white text-black py-8 sm:py-10 lg:py-12 overflow-hidden select-none ${className}`.trim()}
    >
      {/* Section Header: Uses Tagline (small heading), Heading, and Description components */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-6 sm:mb-8 text-center flex flex-col items-center">
        {tagline && (
          <Tagline
            text={tagline}
            fontSize="text-xs sm:text-sm"
            letterSpacing="tracking-[0.25em]"
            color="text-black"
            uppercase={true}
            className="mb-2"
          />
        )}
        <Heading
          as="h2"
          text={heading}
          fontFamily="font-sans"
          fontWeight="font-bold"
          fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-[52px]"
          lineHeight="leading-tight sm:leading-[1.1]"
          letterSpacing="tracking-tight"
          color="text-black"
          uppercase={false}
          className="max-w-3xl whitespace-pre-line"
        />
        {description && (
          <Description
            text={description}
            fontSize="text-sm sm:text-base"
            color="text-neutral-700"
            maxWidth="max-w-2xl"
            className="mt-3"
          />
        )}
      </div>

      {/* Carousel Track without arrow buttons */}
      <div className="relative w-full">
        {/* Embla Viewport */}
        <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing px-4 sm:px-6">
          <div className="flex gap-4 sm:gap-5">
            {slides.map((mentor, index) => (
              <div
                key={`${mentor.name}-${index}`}
                className="relative isolate w-[260px] sm:w-[300px] lg:w-[320px] h-[380px] sm:h-[440px] lg:h-[480px] shrink-0 overflow-hidden border border-zinc-200/80 shadow-md group bg-zinc-900"
              >
                {/* Mentor Photo */}
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  sizes="(max-width: 640px) 260px, 320px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Bottom Dark Gradient Overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none"
                />

                {/* Content Inside Image: Uses Tagline (small heading), Heading, and Description */}
                <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-start p-5 sm:p-6 pointer-events-none">
                  {/* Small heading (experience / badge) */}
                  {mentor.experience && (
                    <Tagline
                      text={mentor.experience}
                      fontSize="text-[11px] sm:text-xs"
                      fontWeight="font-bold"
                      letterSpacing="tracking-[0.2em]"
                      color="text-zinc-300"
                      uppercase={true}
                    />
                  )}

                  {/* Heading (mentor name) */}
                  <Heading
                    as="h3"
                    text={mentor.name}
                    fontFamily="font-sans"
                    fontWeight="font-bold"
                    fontSize="text-lg sm:text-xl lg:text-[22px]"
                    lineHeight="leading-snug"
                    letterSpacing="tracking-tight"
                    color="text-white"
                    uppercase={false}
                    className="mt-1"
                  />

                  {/* Role / Description */}
                  {mentor.role && (
                    <Description
                      text={mentor.role}
                      fontSize="text-xs sm:text-sm"
                      color="text-zinc-300"
                      className="mt-0.5"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
