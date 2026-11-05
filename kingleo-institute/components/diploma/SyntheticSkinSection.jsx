"use client";

import React from "react";
import Tagline from "@/components/ui/Tagline";
import Heading from "@/components/ui/Heading";
import Description from "@/components/ui/Description";
import ImageCarousel from "@/components/ui/ImageCarousel";

/**
 * Synthetic Skin Work Section (Diploma Tattoo Art Practice)
 * - Pure white background with black typography
 * - Clean centered header: Tagline, Heading, and Description
 * - Reusable ImageCarousel displaying only images from public/home/synthetic-skin-practice/
 * - Zero numbers, zero card text, matching MentorSection carousel behavior
 */
export default function SyntheticSkinSection({
  tagline = "SYNTHETIC SKIN PRACTICE",
  heading = "Synthetic Skin Work\nMastering Precision & Control",
  description = "Before touching real human skin, our students spend intensive hours perfecting straight linework, smooth gradient shading, and needle depth control on high-density synthetic practice skin pads.",
  images = [],
  speed = 0.8,
  repeat = 10,
  className = "",
}) {
  return (
    <section
      id="synthetic-skin"
      className={`w-full bg-white text-black pt-12 lg:pt-20 overflow-hidden select-none ${className}`.trim()}
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

      {/* Reusable Image Carousel - Pure images only */}
      <ImageCarousel
        images={images}
        speed={speed}
        repeat={repeat}
        cardWidth="w-[360px] sm:w-[390px] lg:w-[320px]"
        cardHeight="h-[480px] sm:h-[520px] lg:h-[470px]"
        rounded=""
        spacing="pr-2"
      />
    </section>
  );
}
