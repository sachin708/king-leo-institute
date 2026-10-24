"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

/**
 * Reusable continuous marquee built on Embla Carousel (auto-scroll plugin).
 * All content and styling are configurable via props.
 */
export default function MarqueeSection({
  items = [],
  speed = 1.6,
  repeat = 3,
  direction = "forward", // "forward" = content moves right-to-left, "backward" = left-to-right
  separatorColor = "bg-teal-500",
  background = "bg-[#f7f5f0]",
  textColor = "text-black",
  borderColor = "border-black/10",
  textSize = "text-2xl md:text-[32px] lg:text-[42px]",
  fontWeight = "font-extrabold",
  letterSpacing = "tracking-[0.08em]",
  itemGap = "gap-6 md:gap-10 lg:gap-14",
  padding = "py-6 md:py-8 lg:py-10",
  margin = "mt-[40px] lg:mt-[120px]",
  className = "",
}) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, watchDrag: false, align: "start" },
    [
      AutoScroll({
        speed,
        direction,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
      }),
    ]
  );

  if (!items.length) return null;

  // Repeat the list so the track always overflows the viewport for seamless looping
  const slides = Array.from({ length: repeat }, () => items).flat();

  return (
    <div className="flow-root w-full bg-white">

    <section
      className={`relative w-full overflow-hidden border-y ${borderColor} ${background} ${textColor} ${margin} ${padding} ${className}`.trim()}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex items-center">
          {slides.map((item, i) => (
            <div
              key={i}
              className={`flex shrink-0 items-center whitespace-nowrap uppercase ${textSize} ${fontWeight} ${letterSpacing} ${itemGap} pr-6 md:pr-10 lg:pr-14`}
            >
              <span>{item}</span>
              <span
                aria-hidden="true"
                className={`h-2 w-2 rounded-full md:h-2.5 md:w-2.5 ${separatorColor}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
