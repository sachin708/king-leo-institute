"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
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

function ArrowButton({ direction, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="size-10 sm:size-11 rounded-full border border-zinc-400 bg-white text-black flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors cursor-pointer"
    >
      <svg
        viewBox="0 0 24 24"
        className={`size-5 fill-none stroke-current stroke-2 ${direction === "next" ? "" : "rotate-180"}`}
        aria-hidden="true"
      >
        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

/**
 * Real Stories From Real Artists Section
 * - Centered header + focused testimonial carousel (active card highlighted)
 * - Prev/next arrows and dot pagination below
 * - Cards: avatar, name, city, stars, quote icon, review, name & city footer
 * - Responsive: 1 card on mobile, 3 on desktop with peeking neighbours
 * - Optional `avatar` per story shows a photo, otherwise initials
 */
export default function RealStoriesSection({
  tagline = "REAL STORIES",
  heading = "Real Stories\nFrom Real Artists",
  stories = [],
  className = "",
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  if (!stories.length) return null;

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
          fontSize="text-4xl sm:text-5xl md:text-6xl lg:text-[64px]"
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
          {stories.map((story, index) => {
            const active = index === selected;
            return (
              <div
                key={`${story.name}-${index}`}
                className="shrink-0 grow-0 basis-[85%] sm:basis-[60%] md:basis-[44%] lg:basis-[30%] px-2 sm:px-3"
              >
                <div
                  className={`h-full min-h-[300px] sm:min-h-[320px] rounded-2xl bg-white p-5 sm:p-6 flex flex-col justify-between border-2 transition-all duration-300 ${
                    active
                      ? "border-black shadow-xl"
                      : "border-zinc-200 shadow-sm scale-[0.97] opacity-80"
                  }`}
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

      {/* Controls */}
      <div className="mt-6 sm:mt-8 px-4 flex items-center justify-center gap-3 sm:gap-6">
        <ArrowButton direction="prev" label="Previous story" onClick={() => emblaApi?.scrollPrev()} />
        <div className="flex items-center gap-1.5 sm:gap-2" role="tablist" aria-label="Story pagination">
          {stories.map((story, i) => (
            <button
              key={`${story.name}-dot-${i}`}
              type="button"
              role="tab"
              aria-selected={i === selected}
              aria-label={`Go to story ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`size-2 sm:size-2.5 rounded-full transition-colors cursor-pointer ${
                i === selected ? "bg-black" : "bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
        <ArrowButton direction="next" label="Next story" onClick={() => emblaApi?.scrollNext()} />
      </div>
    </section>
  );
}
