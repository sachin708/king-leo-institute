"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

/**
 * Reusable Infinite Auto-Scrolling Image Carousel Component
 * - Follows the exact carousel behavior, interaction, and responsiveness of MentorSection
 * - Continuous smooth auto-scrolling with pause-free interaction
 * - Pure image cards (no text, headings, numbers, or captions inside cards)
 * - Highly customizable: card sizes, speed, repeat buffer, styling
 */
export default function ImageCarousel({
  images = [],
  speed = 0.8,
  repeat = 3,
  cardWidth = "w-[260px] sm:w-[300px] lg:w-[320px]",
  cardHeight = "h-[370px] sm:h-[430px] lg:h-[470px]",
  rounded = "rounded-2xl",
  gap = "gap-4 sm:gap-5",
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

  if (!images.length) return null;

  // Repeat for continuous seamless infinite loop across all viewports
  const slides = Array.from({ length: repeat }, () => images).flat();

  return (
    <div className={`relative w-full overflow-hidden select-none ${className}`.trim()}>
      {/* Embla Viewport */}
      <div
        ref={emblaRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing px-4 sm:px-6"
      >
        <div className={`flex ${gap}`}>
          {slides.map((item, index) => {
            const src = typeof item === "string" ? item : item.src || item.image;
            const name = typeof item === "object" ? item.name : null;
            const role = typeof item === "object" ? item.role : null;
            const batch = typeof item === "object" ? item.batch || item.program : null;
            const alt =
              typeof item === "object" && item.alt
                ? item.alt
                : name
                ? `${name} - Kingleo Tattoo Art`
                : `Tattoo artwork ${index + 1}`;

            return (
              <div
                key={`${src}-${index}`}
                className={`relative isolate ${cardWidth} ${cardHeight} shrink-0 ${rounded} overflow-hidden border border-zinc-200/90 shadow-md group bg-zinc-900`}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 320px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Optional Bottom Gradient Overlay & Name Details */}
                {name && (
                  <>
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-20 p-5 text-left pointer-events-none">
                      {batch && (
                        <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-1">
                          {batch}
                        </span>
                      )}
                      <h4 className="text-white font-bold text-base sm:text-lg tracking-tight leading-snug">
                        {name}
                      </h4>
                      {role && (
                        <p className="text-zinc-300 text-xs sm:text-sm mt-0.5">
                          {role}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
