"use client";

import React from "react";
import Link from "next/link";
import Tagline from "@/components/ui/Tagline";
import Heading from "@/components/ui/Heading";
import Description from "@/components/ui/Description";

/**
 * Reusable DiplomaCard Component
 * Features clean rounded card design, bold black heading, readable dark neutral
 * description, and a full-width "KNOW MORE" action button matching reference screenshots.
 */
function DiplomaCard({ card }) {
  if (!card) return null;

  return (
    <article className="group relative flex flex-col justify-between bg-white rounded-2xl border border-zinc-400/90 p-6 sm:p-7 hover:border-zinc-400 hover:shadow-lg transition-all duration-300 h-full">
      <div>
        <h3 className="font-sans font-bold text-lg sm:text-xl lg:text-[22px] text-black leading-snug">
          {card.title}
        </h3>
        <p className="mt-3 sm:mt-4 text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal">
          {card.description}
        </p>
      </div>

      <div className="mt-5 sm:mt-6 pt-2">
        <Link
          href={card.cta?.href || "#"}
          className="group relative overflow-hidden w-full py-3 px-4 rounded-xl border border-zinc-300 bg-zinc-50 hover:bg-black hover:text-white hover:border-black text-black font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 text-center flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow cursor-pointer"
        >
          {/* Glassy effect: top gloss highlight + hover shine sweep */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-xl bg-gradient-to-b from-white/70 to-transparent group-hover:from-white/20"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[400%]"
          />
          <span className="relative">{card.cta?.label || "KNOW MORE"}</span>
        </Link>
      </div>
    </article>
  );
}

/**
 * Diploma Tattoo Art Section
 * - White background with black typography
 * - Desktop: 3 rows × 3 columns (9 cards total).
 *   In each row: Card 1 -> Card 2 -> Card 3, separated by a gap (no divider lines).
 *   Between rows: Empty spacing.
 * - Mobile: Single column, one by one.
 *   Between each card: Empty spacing (no divider lines).
 */
export default function DiplomaSection({
  tagline = "6 MONTH DIPLOMA ROADMAP",
  heading = "Diploma Tattoo Art",
  description = "Central India's only complete ZERO TO CERTIFIED PRO system that builds your art, career, brand and income together. From certification to safety to paid internship we don't just teach tattooing, we build your future.",
  cards = [],
  className = "",
}) {
  if (!cards.length) return null;

  // Split cards into rows of 3 (Row 1, Row 2, Row 3)
  const rows = [
    cards.slice(0, 3),
    cards.slice(3, 6),
    cards.slice(6, 9),
  ];

  return (
    <section
      className={`w-full bg-white text-black pt-12 lg:pt-20 overflow-hidden select-none ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header styled after FeatureSection */}
        <header className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8 lg:mb-10">
          {tagline && (
            <Tagline
              text={tagline}
              fontSize="text-xs md:text-sm lg:text-base"
              letterSpacing="tracking-[0.3em]"
              color="text-black"
              uppercase={true}
              className="mb-3 md:mb-4"
            />
          )}

          <Heading
            as="h2"
            text={heading}
            fontFamily="font-sans"
            fontWeight="font-bold"
            fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-[52px]"
            lineHeight="leading-[1.05]"
            color="text-black"
            uppercase={false}
            className="max-w-4xl"
          />

          {description && (
            <Description
              text={description}
              fontWeight="font-normal"
              fontSize="text-sm md:text-base lg:text-[17px]"
              color="text-neutral-600"
              maxWidth="max-w-3xl"
              className="mt-3 md:mt-4 leading-relaxed text-center"
            />
          )}
        </header>

        {/* Rows of Cards separated by spacing only (no divider lines) */}
        <div className="w-full flex flex-col">
          {rows.map((rowCards, rowIndex) => (
            <React.Fragment key={`diploma-row-${rowIndex}`}>
              {/* Row Layout: Flex-row on desktop, Flex-col on mobile, spaced with gap */}
              <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
                {/* Column 1 */}
                {rowCards[0] && (
                  <div className="flex-1 flex flex-col">
                    <DiplomaCard card={rowCards[0]} />
                  </div>
                )}

                {/* Column 2 */}
                {rowCards[1] && (
                  <div className="flex-1 flex flex-col">
                    <DiplomaCard card={rowCards[1]} />
                  </div>
                )}

                {/* Column 3 */}
                {rowCards[2] && (
                  <div className="flex-1 flex flex-col">
                    <DiplomaCard card={rowCards[2]} />
                  </div>
                )}
              </div>

              {/* Spacer between rows (matches the card gap) */}
              {rowIndex < rows.length - 1 && (
                <div
                  aria-hidden="true"
                  className="w-full h-6 lg:h-8"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
