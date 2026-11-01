"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  PenTool,
  Paintbrush,
  SlidersHorizontal,
  ShieldCheck,
  ScanFace,
  Tablet,
  BadgeCheck,
  Camera,
  Images,
  Handshake,
  TrendingUp,
  MessagesSquare,
  GraduationCap,
  Infinity as InfinityIcon,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const icons = {
  "pen-tool": PenTool,
  paintbrush: Paintbrush,
  sliders: SlidersHorizontal,
  shield: ShieldCheck,
  "scan-face": ScanFace,
  tablet: Tablet,
  "badge-check": BadgeCheck,
  camera: Camera,
  images: Images,
  handshake: Handshake,
  "trending-up": TrendingUp,
  messages: MessagesSquare,
  "graduation-cap": GraduationCap,
  infinity: InfinityIcon,
};

/**
 * Single module card: fades/slides in when it scrolls into view.
 * Cards in the same row get a small stagger so they appear one by one.
 */
function ModuleCard({ item, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Icon = icons[item.icon];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      style={{ transitionDelay: visible ? `${(index % 3) * 120}ms` : "0ms" }}
      className={`flex flex-col bg-white rounded-2xl border border-zinc-300 p-6 sm:p-7 h-full transition-all duration-700 ease-out hover:shadow-lg hover:border-zinc-400 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-zinc-300 bg-white text-black">
        {Icon && <Icon className="w-6 h-6" strokeWidth={1.75} />}
      </span>
      <h3 className="mt-6 font-sans font-bold text-lg sm:text-xl text-black leading-snug">
        {item.title}
      </h3>
      <p className="mt-2 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-black">
        {item.subtitle}
      </p>
      <p className="mt-3 text-sm sm:text-[15px] text-neutral-600 leading-relaxed">
        {item.description}
      </p>
    </article>
  );
}

/**
 * Modules Section - white background, black text/icons, 3-col grid on desktop,
 * 2 on tablet, 1 on mobile.
 */
export default function ModulesSection({
  tagline,
  heading,
  description,
  items = [],
  className = "",
}) {
  if (!items.length) return null;

  return (
    <section
      id="modules"
      className={`w-full bg-white text-black pt-12 lg:pt-20 pb-12 lg:pb-20 overflow-hidden ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          tagline={tagline}
          heading={heading}
          description={description}
          className="max-w-4xl mx-auto mb-8 lg:mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <ModuleCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
