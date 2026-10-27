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
    <article className="group relative flex flex-col justify-between bg-white rounded-2xl border border-zinc-200/90 p-6 sm:p-7 hover:border-zinc-400 hover:shadow-lg transition-all duration-300 h-full">
      <div>
        <h3 className="font-sans font-bold text-lg sm:text-xl lg:text-[22px] text-black leading-snug">
          {card.title}
        </h3>
        <p className="mt-3 sm:mt-4 text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal">
          {card.description}
        </p>
      </div>

      <div className="mt-6 sm:mt-8 pt-2">
        <Link
          href={card.cta?.href || "#"}
          className="w-full py-3 px-4 rounded-xl border border-zinc-300 bg-zinc-50 hover:bg-black hover:text-white hover:border-black text-black font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 text-center flex items-center justify-center shadow-sm hover:shadow cursor-pointer"
        >
          {card.cta?.label || "KNOW MORE"}
        </Link>
      </div>
    </article>
  );
}

/**
 * Diploma Tattoo Art Section
 * - White background with black typography
 * - Desktop: 3 rows × 3 columns (9 cards total).
 *   In each row: Card 1 -> Vertical Divider -> Card 2 -> Vertical Divider -> Card 3.
 *   Between rows: Full-width Horizontal Divider line.
 * - Mobile: Single column, one by one.
 *   Between each card: Clean Horizontal Divider line.
 */
export default function DiplomaSection({
  tagline = "6 MONTH DIPLOMA ROADMAP",
  heading = "Diploma Tattoo Art",
  description = "Central India's only complete ZERO TO CERTIFIED PRO system that builds your art, career, brand and income together. From certification to safety to paid internship — we don't just teach tattooing, we build your future.",
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
      className={`w-full bg-white text-black py-14 sm:py-20 lg:py-24 overflow-hidden select-none ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header styled after FeatureSection */}
        <header className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          {tagline && (
            <Tagline
              text={tagline}
              fontSize="text-xs md:text-sm lg:text-base"
              letterSpacing="tracking-[0.3em]"
              color="text-black"
              uppercase={true}
              className="mb-4 sm:mb-5"
            />
          )}

          <Heading
            as="h2"
            text={heading}
            fontFamily="font-sans"
            fontWeight="font-bold"
            fontSize="text-[38px] sm:text-5xl lg:text-6xl xl:text-7xl"
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
              className="mt-5 leading-relaxed text-center"
            />
          )}
        </header>

        {/* Rows of Cards with Desktop Vertical Dividers & Mobile Horizontal Dividers */}
        <div className="w-full flex flex-col">
          {rows.map((rowCards, rowIndex) => (
            <React.Fragment key={`diploma-row-${rowIndex}`}>
              {/* Row Layout: Flex-row on desktop, Flex-col on mobile */}
              <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0">
                {/* Column 1 */}
                {rowCards[0] && (
                  <div className="flex-1 flex flex-col">
                    <DiplomaCard card={rowCards[0]} />
                  </div>
                )}

                {/* Mobile Horizontal Divider after Col 1 */}
                {rowCards[1] && (
                  <div
                    aria-hidden="true"
                    className="lg:hidden w-full border-t border-zinc-200 my-1"
                  />
                )}

                {/* Desktop Vertical Divider after Col 1 */}
                {rowCards[1] && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex items-center justify-center px-4 xl:px-6"
                  >
                    <div className="w-[1px] h-full min-h-[220px] bg-zinc-200" />
                  </div>
                )}

                {/* Column 2 */}
                {rowCards[1] && (
                  <div className="flex-1 flex flex-col">
                    <DiplomaCard card={rowCards[1]} />
                  </div>
                )}

                {/* Mobile Horizontal Divider after Col 2 */}
                {rowCards[2] && (
                  <div
                    aria-hidden="true"
                    className="lg:hidden w-full border-t border-zinc-200 my-1"
                  />
                )}

                {/* Desktop Vertical Divider after Col 2 */}
                {rowCards[2] && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex items-center justify-center px-4 xl:px-6"
                  >
                    <div className="w-[1px] h-full min-h-[220px] bg-zinc-200" />
                  </div>
                )}

                {/* Column 3 */}
                {rowCards[2] && (
                  <div className="flex-1 flex flex-col">
                    <DiplomaCard card={rowCards[2]} />
                  </div>
                )}
              </div>

              {/* Horizontal Divider between Rows */}
              {rowIndex < rows.length - 1 && (
                <div
                  aria-hidden="true"
                  className="w-full my-3 sm:my-4 lg:my-5"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
