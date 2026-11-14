import React from "react";
import { CalendarCheck, Clock, Check } from "lucide-react";

const factIcons = { "calendar-check": CalendarCheck, clock: Clock };

/**
 * "How it fits" section (light theme): description + course facts on the left,
 * student-benefit checklist on the right, admissions notice bar at the bottom.
 */
export default function ProgramFitSection({
  tagline,
  heading,
  description,
  benefitsTitle,
  benefits = [],
  facts = [],
  notice,
  className = "",
}) {
  return (
    <section
      className={`w-full bg-white text-black pt-6 lg:pt-10 pb-6 lg:pb-10 ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-2xl border border-zinc-300 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 sm:p-9 lg:p-12 lg:border-r border-b lg:border-b-0 border-zinc-200 bg-zinc-50">
              {tagline && (
                <p className="text-xs font-semibold tracking-[0.3em] text-black">
                  {tagline}
                </p>
              )}
              <h2 className="mt-4 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
                {heading}
              </h2>
              {description && (
                <p className="mt-5 text-sm sm:text-[15px] lg:text-base leading-relaxed text-neutral-600">
                  {description}
                </p>
              )}

              {facts.length > 0 && (
                <ul className="mt-8 grid grid-cols-1 gap-4">
                  {facts.map((f) => {
                    const Icon = factIcons[f.icon] || Clock;
                    return (
                      <li
                        key={f.label}
                        className="flex items-start gap-4 rounded-xl border border-zinc-300 bg-white p-4"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-300 bg-white text-black">
                          <Icon className="h-5 w-5" strokeWidth={1.9} />
                        </span>
                        <span>
                          <span className="block text-xs font-semibold tracking-[0.18em] uppercase text-neutral-500">
                            {f.label}
                          </span>
                          <span className="mt-0.5 block text-base sm:text-lg font-semibold text-black">
                            {f.value}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="p-6 sm:p-9 lg:p-12">
              {benefitsTitle && (
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-black">
                  {benefitsTitle}
                </h3>
              )}
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 rounded-xl border border-zinc-300 bg-white p-4 text-sm sm:text-[15px] font-medium leading-snug text-neutral-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:shadow-md"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-black">
                      <Check className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {notice && (
            <div className="flex items-center justify-center gap-3 border-t border-zinc-300 bg-zinc-50 px-5 py-4 text-center text-sm sm:text-base font-bold tracking-wide text-black">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-black" />
              </span>
              {notice}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
