import React from "react";
import {
  Layers,
  Tablet,
  LayoutGrid,
  Lightbulb,
  Languages,
  PenLine,
  Printer,
  Contrast,
  Palette,
  Paintbrush,
  Sparkles,
  Users,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const icons = {
  layers: Layers,
  tablet: Tablet,
  layout: LayoutGrid,
  lightbulb: Lightbulb,
  languages: Languages,
  "pen-line": PenLine,
  printer: Printer,
  contrast: Contrast,
  palette: Palette,
  paintbrush: Paintbrush,
  sparkles: Sparkles,
  users: Users,
};

/**
 * Light skill-card grid: numbered white cards with an outlined icon tile,
 * title and a checklist. 3 columns desktop, 2 tablet, 1 mobile; equal heights.
 */
export default function SkillCardsSection({
  tagline,
  heading,
  description,
  items = [],
  className = "",
}) {
  if (!items.length) return null;

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
          className="max-w-4xl mx-auto mb-10 lg:mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {items.map((item) => {
            const Icon = icons[item.icon] || Layers;
            return (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-zinc-300 bg-white p-6 sm:p-7 transition-all duration-300 hover:border-zinc-400 hover:shadow-lg"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-300 bg-white text-black">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>

                <h3 className="mt-6 font-sans text-lg sm:text-xl font-bold leading-snug text-black">
                  {item.title}
                </h3>

                {item.highlightsTitle && (
                  <p className="mt-2 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-black">
                    {item.highlightsTitle}
                  </p>
                )}

                <ul className="mt-3 flex flex-1 flex-col gap-2">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-sm sm:text-[15px] leading-relaxed text-neutral-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
