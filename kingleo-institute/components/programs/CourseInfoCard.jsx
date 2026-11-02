import React from "react";

/**
 * Course summary card: tagline, title, duration and description.
 * White background, black text, bordered rounded card.
 */
export default function CourseInfoCard({
  tagline,
  heading,
  duration,
  description,
  className = "",
}) {
  return (
    <section
      className={`w-full bg-white text-black pt-12 lg:pt-20 ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="rounded-2xl border border-zinc-300 bg-white p-6 sm:p-9 lg:p-11">
          {tagline && (
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-black">
              {tagline}
            </p>
          )}
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-black">
            {heading}
          </h2>
          {duration && (
            <p className="mt-4 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-black">
              {duration}
            </p>
          )}
          {description && (
            <p className="mt-4 max-w-4xl text-sm sm:text-[15px] lg:text-base text-neutral-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
