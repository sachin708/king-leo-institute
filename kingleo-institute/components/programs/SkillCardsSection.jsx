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
  Check,
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
          {items.map((item, i) => {
            const Icon = icons[item.icon] || Layers;
            return (
              <article
                key={item.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-300 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-3 select-none font-sans text-6xl font-extrabold leading-none text-zinc-100 transition-colors duration-300 group-hover:text-emerald-100"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-300 bg-white text-black transition-colors duration-300 group-hover:border-emerald-500 group-hover:bg-emerald-50 group-hover:text-emerald-700">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>

                <h3 className="relative mt-6 font-sans text-lg sm:text-xl font-bold leading-snug text-black">
                  {item.title}
                </h3>
                <span className="mt-3 block h-[2px] w-12 bg-emerald-500 transition-all duration-300 group-hover:w-20" />

                {item.highlightsTitle && (
                  <p className="mt-4 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500">
                    {item.highlightsTitle}
                  </p>
                )}
                <ul className="mt-3 flex flex-1 flex-col gap-2.5">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-sm sm:text-[15px] leading-relaxed text-neutral-700"
                    >
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                      </span>
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
