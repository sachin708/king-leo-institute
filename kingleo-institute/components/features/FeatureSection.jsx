import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

/**
 * Reusable editorial feature section: tagline, heading and a numbered
 * feature list. Stacked with horizontal dividers on mobile, a single row
 * with vertical dividers on desktop.
 */
export default function FeatureSection({
  tagline,
  heading,
  description,
  headerProps = {},
  items = [],
  background = "bg-white",
  textColor = "text-black",
  mutedColor = "text-neutral-600",
  numberColor = "text-neutral-400",
  dividerColor = "border-black/15",
  titleSize = "text-xl lg:text-[22px] xl:text-[26px]",
  descriptionSize = "text-sm md:text-base lg:text-[15px] xl:text-[17px]",
  margin = "",
  className = "",
}) {
  if (!items.length) return null;

  return (
    <section
      className={`w-full ${background} ${textColor} ${margin} ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
        <SectionHeader
          tagline={tagline}
          heading={heading}
          description={description}
          {...headerProps}
        />

        <ul className="mt-12 grid grid-cols-1 lg:mt-20 lg:grid-cols-4">
          {items.map((item, i) => (
            <li
              key={item.title}
              className={`py-8 first:pt-0 last:pb-0 lg:py-0 lg:px-8 lg:first:pl-0 lg:last:pr-0 ${
                i < items.length - 1
                  ? `border-b ${dividerColor} lg:border-b-0 lg:border-r`
                  : ""
              }`}
            >
              <span
                className={`block text-sm font-semibold tracking-widest ${numberColor}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className={`mt-6 font-bold uppercase leading-snug lg:mt-10 ${titleSize}`}
              >
                {item.title}
              </h3>
              <p className={`mt-4 leading-relaxed ${mutedColor} ${descriptionSize}`}>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
