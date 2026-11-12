import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

function Block({ block }) {
  if (block.type === "p") {
    return (
      <p className="text-[15px] sm:text-base leading-relaxed text-neutral-700">
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <div>
        {block.title && (
          <h3 className="mb-3 text-base sm:text-lg font-semibold text-black">
            {block.title}
          </h3>
        )}
        <ul className="flex flex-col gap-2.5">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-[15px] sm:text-base leading-relaxed text-neutral-700"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "contact") {
    return (
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 sm:p-6">
        <p className="text-lg font-bold text-black">{block.name}</p>
        <ul className="mt-4 flex flex-col gap-3 text-[15px] text-neutral-700">
          <li className="flex gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <span>{block.address}</span>
          </li>
          <li className="flex gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <a
              href={`mailto:${block.email}`}
              className="break-all hover:text-emerald-700 hover:underline"
            >
              {block.email}
            </a>
          </li>
          <li className="flex gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <span className="flex flex-wrap gap-x-2">
              {block.phones.map((p, i) => (
                <React.Fragment key={p.href}>
                  {i > 0 && <span aria-hidden="true">/</span>}
                  <a
                    href={p.href}
                    className="hover:text-emerald-700 hover:underline"
                  >
                    {p.label}
                  </a>
                </React.Fragment>
              ))}
            </span>
          </li>
        </ul>
      </div>
    );
  }

  return null;
}

/**
 * Legal document layout: dark hero banner, sticky table of contents (desktop),
 * numbered white content cards.
 */
export default function LegalPage({
  tagline,
  heading,
  subheading,
  intro = [],
  sections = [],
}) {
  return (
    <>
      <section className="relative w-full bg-black pt-32 sm:pt-40 pb-12 sm:pb-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
          {tagline && (
            <p className="text-xs sm:text-sm tracking-[0.3em] text-emerald-400 font-semibold">
              {tagline}
            </p>
          )}
          <h1 className="mt-4 font-sans font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
            {heading}
          </h1>
          {subheading && (
            <p className="mt-3 text-lg sm:text-xl text-zinc-300">
              {subheading}
            </p>
          )}
        </div>
      </section>

      <section className="w-full bg-white text-black py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-7 mb-10 lg:mb-14">
            {intro.map((text) => (
              <p
                key={text}
                className="text-[15px] sm:text-base leading-relaxed text-neutral-800 [&:not(:first-child)]:mt-4"
              >
                {text}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
            <nav
              aria-label="Table of contents"
              className="lg:sticky lg:top-32 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto"
            >
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-neutral-500">
                CONTENTS
              </p>
              <ol className="flex flex-col">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex gap-3 rounded-md px-2 py-2 text-sm text-neutral-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      <span className="w-5 shrink-0 font-semibold text-emerald-600">
                        {i + 1}.
                      </span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="flex flex-col gap-6">
              {sections.map((s, i) => (
                <article
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-28 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-8 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <h2 className="pt-0.5 font-sans text-xl sm:text-2xl font-bold leading-snug text-black">
                      {s.title}
                    </h2>
                  </div>
                  <div className="mt-5 flex flex-col gap-5 sm:pl-[52px]">
                    {s.blocks.map((b, j) => (
                      <Block key={j} block={b} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
