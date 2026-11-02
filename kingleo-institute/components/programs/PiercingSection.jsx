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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {groups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-zinc-300 bg-white p-6 sm:p-8 hover:shadow-lg hover:border-zinc-400 transition-all duration-300"
            >
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-black">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm sm:text-[15px] text-neutral-700"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                    />
                    {item}
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
