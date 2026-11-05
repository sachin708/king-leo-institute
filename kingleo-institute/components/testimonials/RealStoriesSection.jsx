"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Tagline from "@/components/ui/Tagline";
import Heading from "@/components/ui/Heading";

/**
 * Reusable StarRating Component
 * Displays filled amber stars with unfilled outline stars according to rating
 */
function StarRating({ rating = 5 }) {
  return (
    <div className="flex items-center gap-0.5 shrink-0" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < rating
            ? "text-amber-400 fill-amber-400"
            : "text-zinc-300 fill-transparent stroke-current stroke-2"
            }`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name, avatar }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="relative size-12 sm:size-14 shrink-0 rounded-full overflow-hidden bg-zinc-900 text-white flex items-center justify-center text-sm sm:text-base font-semibold">
      {avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={avatar} alt={name} className="size-full object-cover" />
      ) : (
        <span aria-hidden="true">{initials}</span>
      )}
    </div>
  );
}

/**
 * Real Stories From Real Artists Section
 * - Centered header + continuously auto-scrolling, draggable testimonial
 *   carousel (same logic as the Alumni carousel); no arrows or dots
 * - Cards: avatar, name, city, stars, quote icon, review, name & city footer
 * - Responsive card widths via basis classes
 * - Optional `avatar` per story shows a photo, otherwise initials
 */
export default function RealStoriesSection({
  tagline = "REAL STORIES",
  heading = "Real Stories\nFrom Real Artists",
  stories = [],
  speed = 0.8,
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

  if (!stories.length) return null;

  // Repeat the stories so the loop always has enough slides to wrap seamlessly
  const slides = Array.from(
    { length: Math.max(2, Math.ceil(12 / stories.length)) },
    () => stories
  ).flat();

  return (
    <section
      className={`w-full bg-white text-black py-12 lg:py-20 overflow-hidden select-none ${className}`.trim()}
    >
      {/* Centered Section Header */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-10 sm:mb-12 lg:mb-16 text-center flex flex-col items-center">
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
          lineHeight="leading-tight sm:leading-[1.08]"
          letterSpacing="tracking-tight"
          color="text-black"
          uppercase={false}
          className="max-w-3xl whitespace-pre-line text-center"
        />
      </div>

      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <div className="flex touch-pan-y py-4">
          {slides.map((story, index) => {
            return (
              <div
                key={`${story.name}-${index}`}
                className="shrink-0 grow-0 basis-[78%] sm:basis-[54%] md:basis-[40%] lg:basis-[27%] px-2 sm:px-3"
              >
                <div
                  className="h-full min-h-[300px] sm:min-h-[320px] rounded-2xl bg-white p-5 sm:p-6 flex flex-col justify-between border-2 border-zinc-200 shadow-sm"
                >
                  <div>
                    {/* Avatar, name/city, stars */}
                    <div className="flex items-center gap-3">
                      <Avatar name={story.name} avatar={story.avatar} />
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-black text-base sm:text-lg leading-tight truncate">
                          {story.name}
                        </h4>
                        <p className="text-neutral-500 text-sm truncate">{story.location}</p>
                      </div>
                      <StarRating rating={story.rating} />
                    </div>

                    {/* Quote icon */}
                    <svg
                      className="mt-5 w-7 h-7 text-zinc-500 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    <p className="mt-3 text-zinc-800 text-sm sm:text-[15px] leading-relaxed">
                      &ldquo;{story.review}&rdquo;
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-zinc-200">
                    <h5 className="font-bold text-black text-sm sm:text-base leading-snug">
                      {story.name}
                    </h5>
                    <p className="text-neutral-500 text-xs sm:text-sm mt-0.5">{story.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
