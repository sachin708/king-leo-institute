"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Tagline from "@/components/ui/Tagline";
import Heading from "@/components/ui/Heading";
import Description from "@/components/ui/Description";

/**
 * Reusable Mentors Carousel Component
 * - Uses Tagline and Heading for the section header
 * - Uses Tagline (small heading), Heading, and Description inside each mentor image card
 * - Compact vertical spacing
 * - Slightly slow auto-scroll speed with pause on hover
 * - Interactive left and right arrow buttons
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
  const [emblaRef, emblaApi] = useEmblaCarousel(
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
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!mentors.length) return null;

  // Repeat for continuous smooth looping across all screen sizes
  const slides = Array.from({ length: repeat }, () => mentors).flat();

  return (
    <section
      className={`w-full bg-black text-white py-8 sm:py-10 lg:py-12 overflow-hidden select-none ${className}`.trim()}
    >
      {/* Section Header: Uses Tagline (small heading), Heading, and Description components */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-6 sm:mb-8 text-center flex flex-col items-center">
        {tagline && (
          <Tagline
            text={tagline}
            fontSize="text-xs sm:text-sm"
            letterSpacing="tracking-[0.25em]"
            color="text-zinc-400"
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
          color="text-white"
          uppercase={false}
          className="max-w-3xl whitespace-pre-line"
        />
        {description && (
          <Description
            text={description}
            fontSize="text-sm sm:text-base"
            color="text-zinc-400"
            maxWidth="max-w-2xl"
            className="mt-3"
          />
        )}
      </div>

      {/* Carousel Track with Navigation Controls */}
      <div className="relative w-full">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous mentor"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-black border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md shadow-xl focus:outline-none"
        >
          <ChevronLeft className="w-5 h-5 text-zinc-200 hover:text-white" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next mentor"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-black border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md shadow-xl focus:outline-none"
        >
          <ChevronRight className="w-5 h-5 text-zinc-200 hover:text-white" />
        </button>

        {/* Embla Viewport */}
        <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing px-4 sm:px-6">
          <div className="flex gap-4 sm:gap-5">
            {slides.map((mentor, index) => (
              <div
                key={`${mentor.name}-${index}`}
                className="relative isolate w-[260px] sm:w-[300px] lg:w-[320px] h-[380px] sm:h-[440px] lg:h-[480px] shrink-0 rounded-2xl overflow-hidden border border-white/10 group bg-zinc-900"
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
                      color="text-zinc-400"
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
                      color="text-zinc-400"
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
