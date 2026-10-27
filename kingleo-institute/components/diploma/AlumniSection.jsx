"use client";

import React from "react";
import Tagline from "@/components/ui/Tagline";
import Heading from "@/components/ui/Heading";
import Description from "@/components/ui/Description";
import ImageCarousel from "@/components/ui/ImageCarousel";

/**
 * Passout Students & Alumni Section
 * - UI is identical in structure and responsiveness to SyntheticSkinSection & LiveRealSkinSection
 * - Pure white background with black typography
 * - Left-aligned header: Tagline, Heading, and Description
 * - Reusable ImageCarousel with passout students from public/home/passout-students-alumni/
 * - Student batch, name, and studio details overlay on cards
 */
export default function AlumniSection({
  tagline = "PASSOUT STUDENTS & ALUMNI",
  heading = "Our Graduate Artists\nBuilding Real Careers",
  description = "Meet our successful academy graduates working as professional tattoo artists, running their own independent tattoo setups, and creating stunning artwork across top studios.",
  images = [],
  speed = 0.8,
  repeat = 3,
  className = "",
}) {
  return (
    <section
      className={`w-full bg-white text-black py-12 sm:py-16 lg:py-20 overflow-hidden select-none ${className}`.trim()}
    >
      {/* Left-Aligned Section Header */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-8 sm:mb-10 lg:mb-12 text-left flex flex-col items-start">
        {tagline && (
          <Tagline
            text={tagline}
            fontSize="text-xs sm:text-sm"
            letterSpacing="tracking-[0.25em]"
            color="text-black"
            uppercase={true}
            className="mb-3"
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
          className="max-w-3xl whitespace-pre-line text-left"
        />

        {description && (
          <Description
            text={description}
            fontSize="text-sm sm:text-base md:text-[17px]"
            fontWeight="font-normal"
            color="text-neutral-600"
            maxWidth="max-w-2xl"
            className="mt-4 leading-relaxed text-left"
          />
        )}
      </div>

      {/* Reusable Image Carousel */}
      <ImageCarousel
        images={images}
        speed={speed}
        repeat={repeat}
        cardWidth="w-[260px] sm:w-[300px] lg:w-[320px]"
        cardHeight="h-[370px] sm:h-[430px] lg:h-[470px]"
        rounded=""
        gap="gap-4 sm:gap-5"
      />
    </section>
  );
}
