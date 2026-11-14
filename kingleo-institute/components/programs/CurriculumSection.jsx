"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

/**
 * Curriculum accordion (FAQ style): each module is a row with a plus/minus
 * icon; clicking it reveals the description and the highlight checklist.
 * One module open at a time; all closed until clicked.
 */
export default function CurriculumSection({
  tagline,
  heading,
  description,
  modules = [],
  className = "",
}) {
  const [openIndex, setOpenIndex] = useState(-1);

  if (!modules.length) return null;

  return (
    <section
      className={`w-full bg-white text-black pt-12 lg:pt-20 pb-6 lg:pb-10 ${className}`.trim()}
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeader
          tagline={tagline}
          heading={heading}
          description={description}
          descriptionProps={{ maxWidth: "max-w-3xl" }}
          className="mb-8 lg:mb-12"
        />

        <div className="flex flex-col">
          {modules.map((mod, i) => {
            const isOpen = openIndex === i;
            const panelId = `curriculum-panel-${i}`;
            return (
              <div
                key={mod.title}
                className={`border-b transition-colors duration-300 ${
                  isOpen ? "border-black" : "border-black/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 sm:py-5 text-left"
                >
                  <span
                    className={`text-sm sm:text-lg text-black transition-colors duration-300 ${
                      isOpen ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {mod.title}
                  </span>

                  <span
                    className="relative h-5 w-5 shrink-0 text-black"
                    aria-hidden="true"
                  >
                    <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-current" />
                    <span
                      className={`absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-current transition-transform duration-300 ${
                        isOpen ? "rotate-90 opacity-0" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 pr-2 sm:pr-8">
                      {mod.description && (
                        <p className="text-sm sm:text-[15px] leading-relaxed text-neutral-700">
                          {mod.description}
                        </p>
                      )}

                      <p className="mt-5 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500">
                        {mod.highlightsTitle || "Highlights"}
                      </p>
                      <ul className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2.5 md:grid-cols-2">
                        {mod.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm sm:text-[15px] leading-relaxed text-neutral-800"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
