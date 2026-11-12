"use client";

import React, { useState } from "react";
import {
  PenTool,
  Paintbrush,
  SlidersHorizontal,
  Tablet,
  Fingerprint,
  Briefcase,
  GraduationCap,
  Images,
  Check,
  ChevronRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const icons = {
  "pen-tool": PenTool,
  paintbrush: Paintbrush,
  sliders: SlidersHorizontal,
  tablet: Tablet,
  fingerprint: Fingerprint,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  images: Images,
};

const pad = (n) => String(n + 1).padStart(2, "0");

/**
 * Tabbed curriculum (light theme): a module list on the left (horizontal
 * scrolling chips on mobile) and the selected module's description and
 * highlight checklist on the right.
 */
export default function CurriculumSection({
  tagline,
  heading,
  description,
  modules = [],
  className = "",
}) {
  const [active, setActive] = useState(0);
  if (!modules.length) return null;

  const mod = modules[active];
  const Icon = icons[mod.icon] || PenTool;

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
          className="max-w-4xl mx-auto mb-8 lg:mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] gap-5 lg:gap-8 items-start">
          {/* Module list */}
          <div
            role="tablist"
            aria-label="Diploma modules"
            className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:gap-2 lg:overflow-visible lg:px-0 lg:pb-0 lg:sticky lg:top-28 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {modules.map((m, i) => {
              const selected = i === active;
              return (
                <button
                  key={m.title}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="curriculum-panel"
                  onClick={() => setActive(i)}
                  className={`group flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 lg:w-full lg:py-3.5 ${
                    selected
                      ? "border-black bg-white shadow-md"
                      : "border-zinc-300 bg-white hover:border-zinc-500"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                      selected
                        ? "bg-emerald-500 text-white"
                        : "bg-zinc-100 text-neutral-600 group-hover:bg-emerald-50"
                    }`}
                  >
                    {pad(i)}
                  </span>
                  <span
                    className={`max-w-[11rem] text-sm font-semibold leading-snug lg:max-w-none lg:flex-1 ${
                      selected ? "text-black" : "text-neutral-700"
                    }`}
                  >
                    {m.title}
                  </span>
                  <ChevronRight
                    className={`hidden h-4 w-4 shrink-0 transition-all lg:block ${
                      selected
                        ? "translate-x-0 text-black"
                        : "-translate-x-1 text-zinc-400 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Selected module */}
          <article
            id="curriculum-panel"
            role="tabpanel"
            key={mod.title}
            className="relative overflow-hidden rounded-2xl border border-zinc-300 bg-white p-6 sm:p-8 lg:p-10 shadow-sm animate-[fadeIn_0.35s_ease-out]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-2 select-none font-sans text-[90px] sm:text-[120px] font-extrabold leading-none text-zinc-100"
            >
              {pad(active)}
            </span>

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-700">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <span className="text-xs font-semibold tracking-[0.25em] text-emerald-700">
                  MODULE {pad(active)} OF {pad(modules.length - 1)}
                </span>
              </div>

              <h3 className="mt-5 max-w-2xl font-sans text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
                {mod.title}
              </h3>
              <span className="mt-4 block h-[3px] w-16 bg-emerald-500" />

              {mod.description && (
                <p className="mt-5 max-w-3xl text-sm sm:text-[15px] lg:text-base leading-relaxed text-neutral-600">
                  {mod.description}
                </p>
              )}

              <h4 className="mt-8 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500">
                {mod.highlightsTitle || "Highlights"}
              </h4>
              <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                {mod.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3.5 text-sm sm:text-[15px] leading-snug text-neutral-800 transition-colors hover:border-black"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between gap-3 border-t border-zinc-200 pt-5">
                <button
                  type="button"
                  disabled={active === 0}
                  onClick={() => setActive((a) => Math.max(0, a - 1))}
                  className="rounded-lg border border-zinc-300 px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase text-black transition-colors hover:border-black disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-zinc-300"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={active === modules.length - 1}
                  onClick={() =>
                    setActive((a) => Math.min(modules.length - 1, a + 1))
                  }
                  className="rounded-lg border border-emerald-500 bg-emerald-50 px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase text-emerald-800 transition-colors hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next Module
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
