import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

/**
 * Fee breakdown: amount cards plus EMI tenure pills.
 * White background, black text; cards stack on mobile, 3 columns from sm.
 */
export default function FeeBreakdownSection({
  tagline,
  heading,
  fees = [],
  tenureLabel,
  tenures = [],
  className = "",
}) {
  if (!fees.length) return null;

  return (
    <section
      className={`w-full bg-white text-black pt-12 lg:pt-20 ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          tagline={tagline}
          heading={heading}
          className="max-w-4xl mx-auto mb-8 lg:mb-10"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {fees.map((fee) => (
            <div
              key={fee.label}
              className="rounded-2xl border border-zinc-300 bg-white px-6 py-7 sm:py-9 text-center"
            >
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-black">
                {fee.label}
              </p>
              <p className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-black">
                {fee.amount}
              </p>
            </div>
          ))}
        </div>

        {tenures.length > 0 && (
          <div className="mt-8 flex flex-col items-center">
            {tenureLabel && (
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-black">
                {tenureLabel}
              </p>
            )}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {tenures.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-400 bg-white px-5 py-2 text-sm font-semibold text-black"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
