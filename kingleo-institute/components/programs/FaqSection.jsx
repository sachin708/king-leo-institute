"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

/**
 * FAQ Section - white background, black text, whitish cards with black border.
 * One answer open at a time; all are closed until clicked.
 */
export default function FaqSection({
  tagline,
  heading,
  items = [],
  dark = false,
  className = "",
}) {
  const [openIndex, setOpenIndex] = useState(-1);

  if (!items.length) return null;

  return (
    <section
      id="faqs"
      className={`w-full ${dark ? "bg-[#050505] text-white" : "bg-white text-black"} pt-6 lg:pt-10 pb-12 lg:pb-20 ${className}`.trim()}
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeader
          tagline={tagline}
          heading={heading}
          className="mb-8 lg:mb-12"
          taglineProps={dark ? { color: "text-white" } : {}}
          headingProps={dark ? { color: "text-white" } : {}}
        />
        <div className="flex flex-col">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className={`border-b transition-colors duration-300 ${
                  isOpen
                    ? "border-black-700"
                    : dark
                      ? "border-white/20"
                      : "border-black/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-4 sm:py-5 text-left cursor-pointer"
                >
                  <span
                    className={`text-sm sm:text-lg transition-colors duration-300 ${
                      isOpen ? "text-black-900 font-semibold" : dark ? "text-white font-medium" : "text-black font-medium"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`relative w-5 h-5 shrink-0 transition-colors duration-300 ${
                      isOpen ? "text-black-900" : dark ? "text-white" : "text-black"
                    }`}
                    aria-hidden="true"
                  >
                    {/* horizontal bar (always visible) */}
                    <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-current rounded-full" />
                    {/* vertical bar (fades/rotates away when open -> minus) */}
                    <span
                      className={`absolute top-0 left-1/2 w-[2px] h-full -translate-x-1/2 bg-current rounded-full transition-transform duration-300 ${
                        isOpen ? "rotate-90 opacity-0" : ""
                      }`}
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className={`pb-5 pr-8 ${dark ? "text-zinc-300" : "text-neutral-700"} text-sm sm:text-[15px] leading-relaxed`}>
                      {item.answer}
                    </p>
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
