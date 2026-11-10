import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

/**
 * Piercing program section: header, highlight line and bulleted group cards.
 * White background, black text; 3 columns on desktop, 2 on tablet, 1 on mobile.
 */
export default function PiercingSection({
  tagline,
  heading,
  description,
  highlight,
  groups = [],
  className = "",
}) {
  if (!groups.length) return null;

  return (
    <section
      className={`w-full bg-white text-black pt-12 lg:pt-20 pb-6 lg:pb-10 ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          tagline={tagline}
          heading={heading}
          description={description}
          descriptionProps={{ maxWidth: "max-w-3xl" }}
          className="max-w-4xl mx-auto mb-5"
        />
        {highlight && (
          <p className="mx-auto mb-8 lg:mb-12 max-w-3xl text-center text-sm sm:text-base font-semibold text-black leading-relaxed">
            {highlight}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {groups.map((group) => (
            <article
              key={group.title}
              className="group flex h-full w-full flex-col rounded-2xl border border-zinc-300 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl"
            >
              {group.image && (
                <div className="relative w-full aspect-[4/3] sm:aspect-[4/4] overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={group.image}
                    alt={group.imageAlt || group.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <h3 className=" px-4 sm:px-5 mt-6 font-sans font-bold text-2xl sm:text-[28px] leading-tight text-black">
                {group.title}
              </h3>
              {/* <span className="mt-2 block h-[2px] w-20 bg-black" /> */}

              <ul className=" px-4 sm:px-5 mt-4 flex flex-1 flex-col">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between gap-1 py-1.5 text-sm sm:text-[15px] text-neutral-900 last:border-b-0"
                  >
                    <span>{item}</span>
                  
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
