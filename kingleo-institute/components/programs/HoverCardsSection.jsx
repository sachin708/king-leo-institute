"use client";

import React, { useState } from "react";
import {
  Tablet,
  ScanFace,
  ShieldCheck,
  MessagesSquare,
  Syringe,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const icons = {
  tablet: Tablet,
  "scan-face": ScanFace,
  shield: ShieldCheck,
  messages: MessagesSquare,
  syringe: Syringe,
};

/**
 * Card showing icon + title. On hover (desktop) or tap (touch) it flips
 * horizontally to the detail text, and flips back when the hover ends.
 */
function HoverCard({ item }) {
  const [active, setActive] = useState(false);
  const Icon = icons[item.icon];

  return (
    <button
      type="button"
      onClick={() => setActive((v) => !v)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      aria-pressed={active}
      className="w-full h-[220px] sm:h-[240px] lg:h-[300px] text-center cursor-pointer [perspective:1200px]"
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
          active ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front face */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-5 rounded-3xl border border-zinc-300 bg-white [backface-visibility:hidden]">
          <span className="inline-flex items-center justify-center w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-full border border-zinc-300 bg-white text-black">
            {Icon && <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />}
          </span>
          <h3 className="font-sans font-bold text-xl sm:text-2xl text-black leading-snug">
            {item.title}
          </h3>
          <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-neutral-500">
            Hover or tap
          </span>
        </div>

        {/* Back face */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 sm:px-8 rounded-3xl border border-zinc-400 bg-zinc-100 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-500">
            {item.title}
          </span>
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </button>
  );
}

/** Section with a responsive grid of flip cards. */
export default function HoverCardsSection({
  tagline,
  heading,
  description,
  items = [],
  className = "",
}) {
  if (!items.length) return null;

  return (
    <section
      className={`w-full bg-white text-black pt-12 lg:pt-20 pb-8 lg:pb-12 ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          tagline={tagline}
          heading={heading}
          description={description}
          className="max-w-3xl mx-auto mb-8 lg:mb-14"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item) => (
            <HoverCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
