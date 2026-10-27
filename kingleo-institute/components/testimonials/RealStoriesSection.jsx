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
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating
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

/**
 * Real Stories From Real Artists Section
 * - White background with black typography
 * - Centered header matching reference screenshots
 * - Continuous auto-scroll testimonial carousel
 * - Clean cards featuring quote icons, star ratings, review text, student name & city
 */
export default function RealStoriesSection({
  tagline = "REAL STORIES",
  heading = "Real Stories\nFrom Real Artists",
  stories = [],
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

  if (!stories.length) return null;

  // Repeat for continuous seamless infinite loop across all viewports
  const slides = Array.from({ length: repeat }, () => stories).flat();

  return (
    <section
      className={`w-full bg-white text-black py-14 sm:py-18 lg:py-24 overflow-hidden select-none ${className}`.trim()}
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
          fontSize="text-4xl sm:text-5xl md:text-6xl lg:text-[64px]"
          lineHeight="leading-tight sm:leading-[1.08]"
          letterSpacing="tracking-tight"
          color="text-black"
          uppercase={false}
          className="max-w-3xl whitespace-pre-line text-center"
        />
      </div>

      {/* Embla Testimonial Carousel Track */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={emblaRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing px-4 sm:px-6"
        >
          <div className="flex gap-5 sm:gap-6">
            {slides.map((story, index) => (
              <div
                key={`${story.name}-${index}`}
                className="relative isolate w-[280px] sm:w-[320px] lg:w-[360px] min-h-[280px] sm:min-h-[295px] shrink-0 rounded-2xl border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-300 bg-white p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Top Quote Icon & Star Rating */}
                  <div className="flex items-center justify-between mb-2">
                    <svg
                      className="w-7 h-7 text-zinc-400 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    <StarRating rating={story.rating} />
                  </div>

                  {/* Review Text */}
                  <p className="mt-4 text-zinc-700 text-sm sm:text-[15px] leading-relaxed font-normal">
                    &ldquo;{story.review}&rdquo;
                  </p>
                </div>

                {/* Bottom Student Details */}
                <div className="mt-6 pt-4 border-t border-zinc-200/80">
                  <h4 className="font-bold text-black text-base tracking-tight leading-snug">
                    {story.name}
                  </h4>
                  <p className="text-neutral-500 text-xs sm:text-sm mt-0.5">
                    {story.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
