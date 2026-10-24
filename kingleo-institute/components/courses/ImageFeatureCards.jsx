import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Tagline from "@/components/ui/Tagline";
import Heading from "@/components/ui/Heading";
import Description from "@/components/ui/Description";

/**
 * Reusable section with a tagline, heading and image cards.
 * Each card layers: full-bleed image -> bottom black gradient -> content.
 * Side by side on desktop, stacked on mobile.
 */
export default function ImageFeatureCards({
  tagline,
  heading,
  cards = [],
  headerProps = {},
  background = "bg-white",
  margin = "",
  cardHeight = "h-[520px] sm:h-[690px] lg:h-[780px]",
  gradient = "bg-gradient-to-t from-black/90 via-black/40 to-transparent",
  imageSizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}) {
  if (!cards.length) return null;

  return (
    <section className={`w-full ${background} ${margin} ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
        <SectionHeader
          tagline={tagline}
          heading={heading}
          taglineProps={{ color: "text-black" }}
          headingProps={{ color: "text-black" }}
          {...headerProps}
        />

        <ul className="mt-10 grid grid-cols-1 gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          {cards.map((card, i) => (
            <li key={card.title}>
              <article
                className={`group relative isolate overflow-hidden ${cardHeight}`}
              >
                <Image
                  src={card.image}
                  alt={card.alt || card.title}
                  fill
                  sizes={imageSizes}
                  priority={i === 0}
                  className="object-cover transition-transform duration-700 ease-out lg:group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 z-10 ${gradient}`}
                />
                <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-start p-6 sm:p-8 lg:p-10">
                  {card.category && (
                    <Tagline
                      text={card.category}
                      fontSize="text-[11px] sm:text-xs"
                      letterSpacing="tracking-[0.25em]"
                      color="text-white/80"
                    />
                  )}
                  <Heading
                    as="h3"
                    text={card.title}
                    fontFamily="font-sans"
                    fontWeight="font-bold"
                    fontSize="text-2xl sm:text-3xl lg:text-4xl"
                    lineHeight="leading-tight"
                    letterSpacing="tracking-tight"
                    uppercase={false}
                    className="mt-3"
                  />
                  {card.description && (
                    <Description
                      text={card.description}
                      fontWeight="font-normal"
                      fontSize="text-sm sm:text-base"
                      color="text-white/85"
                      maxWidth="max-w-xl"
                      className="mt-3"
                    />
                  )}
                  {card.cta && (
                    <Link
                      href={card.cta.href}
                      className="mt-5 inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white underline-offset-8 transition-colors hover:underline focus:outline-none focus-visible:underline"
                    >
                      {card.cta.label} <span aria-hidden="true" className="ml-2">→</span>
                    </Link>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
