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
  // Applied as padding on each slide wrapper (NOT flex gap) so Embla counts it
  // in its loop math; a flex gap makes the wrap-around jump and uneven.
  spacing = "pr-4 sm:pr-5",
  // "cover" fills the card (crops edges); "contain" shows the whole image
  fit = "cover",
  cardBg = "bg-zinc-900",
  // Dark gradient behind the name/role text
  overlay = true,
  // Text classes for the name/batch/role overlay (defaults = original look)
  batchClass = "text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-zinc-400",
  nameClass = "text-base sm:text-lg",
  roleClass = "text-xs sm:text-sm text-zinc-300",
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
        stopOnMouseEnter: false,
      }),
    ]
  );

  // Keep the marquee moving: restart auto-scroll whenever it stops
  // (after a drag, a re-init, or the tab regaining focus).
  React.useEffect(() => {
    if (!emblaApi) return;
    const restart = () => {
      const autoScroll = emblaApi.plugins().autoScroll;
      if (autoScroll && !autoScroll.isPlaying()) autoScroll.play(0);
    };
    emblaApi.on("pointerUp", restart);
    emblaApi.on("settle", restart);
    emblaApi.on("reInit", restart);
    document.addEventListener("visibilitychange", restart);
    restart();
    return () => {
      emblaApi.off("pointerUp", restart);
      emblaApi.off("settle", restart);
      emblaApi.off("reInit", restart);
      document.removeEventListener("visibilitychange", restart);
    };
  }, [emblaApi]);

  if (!images.length) return null;

  // Repeat for continuous seamless infinite loop across all viewports
  const slides = Array.from({ length: repeat }, () => images).flat();

  return (
    <div className={`relative w-full overflow-hidden select-none ${className}`.trim()}>
      {/* Embla Viewport */}
      <div
        ref={emblaRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <div className="flex touch-pan-y">
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
              <div key={`${src}-${index}`} className={`shrink-0 grow-0 ${spacing}`}>
              <div
                className={`relative isolate ${cardWidth} ${cardHeight} ${rounded} overflow-hidden border border-zinc-200/90 shadow-md group ${cardBg}`}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 320px"
                  className={`${fit === "contain" ? "object-contain" : "object-cover"} object-center transition-transform duration-700 ease-out ${fit === "contain" ? "" : "group-hover:scale-105"}`}
                />

                {/* Optional Bottom Gradient Overlay & Name Details */}
                {name && (
                  <>
                    {overlay && (
                      <div
                        aria-hidden="true"
                        className={`absolute z-10 bg-gradient-to-t to-transparent pointer-events-none ${
                          overlay === "soft"
                            ? "inset-x-0 bottom-0 h-1/3 from-black/70"
                            : "inset-0 from-black/90 via-black/40"
                        }`}
                      />
                    )}
                    <div className="absolute inset-x-0 bottom-0 z-20 p-5 text-left pointer-events-none">
                      {batch && (
                        <span className={`block whitespace-pre-line uppercase mb-1 ${batchClass}`}>
                          {batch}
                        </span>
                      )}
                      <h4 className={`text-white font-bold tracking-tight leading-snug ${nameClass}`}>
                        {name}
                      </h4>
                      {role && (
                        <p className={`mt-0.5 ${roleClass}`}>
                          {role}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
