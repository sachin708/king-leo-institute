"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
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
        <div className="flex flex-col gap-4">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className={`rounded-2xl border overflow-hidden ${
                  dark ? "border-white/10 bg-gradient-to-br from-[#111a2c] to-black" : "border-black bg-zinc-50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-4 sm:py-5 text-left cursor-pointer"
                >
                  <span className={`font-semibold text-sm sm:text-base ${dark ? "text-white" : "text-black"}`}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 ${dark ? "text-white" : "text-black"} transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className={`px-5 sm:px-7 py-4 border-t ${dark ? "border-white/10 text-zinc-400" : "border-black/15 text-neutral-700"} text-sm sm:text-[15px] leading-relaxed`}>
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
