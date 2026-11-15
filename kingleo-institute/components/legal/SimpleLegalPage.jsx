import React from "react";

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
      <ul className="flex flex-col gap-2.5">
        {block.items.map((item) => {
          const label = typeof item === "string" ? null : item.label;
          const text = typeof item === "string" ? item : item.text;
          return (
            <li
              key={label || text}
              className="flex gap-3 text-[15px] sm:text-base leading-relaxed text-neutral-700"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black"
              />
              <span>
                {label && (
                  <strong className="font-semibold text-black">{label}: </strong>
                )}
                {text}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  if (block.type === "contact") {
    return (
      <div className="rounded-2xl border border-zinc-300 bg-white p-5 sm:p-6">
        <p className="text-lg font-bold text-black">{block.name}</p>
        <p className="mt-2 text-[15px] sm:text-base text-neutral-700">
          Email:{" "}
          <a
            href={`mailto:${block.email}`}
            className="break-all font-medium text-black underline underline-offset-4 hover:text-neutral-600"
          >
            {block.email}
          </a>
        </p>
      </div>
    );
  }

  return null;
}

/**
 * Simple legal page: dark title banner (matches the site header) followed by a
 * single-column white document with plain headings and bullet lists.
 */
export default function SimpleLegalPage({
  heading,
  subheading,
  intro = [],
  sections = [],
}) {
  return (
    <>
      <section className="w-full bg-black pt-32 sm:pt-40 pb-12 sm:pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
            {heading}
          </h1>
          {subheading && (
            <p className="mt-3 text-lg sm:text-xl text-zinc-300">{subheading}</p>
          )}
        </div>
      </section>

      <section className="w-full bg-white text-black py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          {intro.map((text) => (
            <p
              key={text}
              className="text-md sm:text-xl text-center leading-relaxed text-neutral-800 font-semibold"
            >
              {text}
            </p>
          ))}

          <div className="mt-10 flex flex-col gap-10 sm:gap-12">
            {sections.map((s) => (
              <section key={s.title} className="border-t border-zinc-300 pt-6 sm:pt-8">
                <h2 className="font-sans text-2xl sm:text-3xl font-bold leading-snug text-black">
                  {s.title}
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  {s.blocks.map((b, i) => (
                    <Block key={i} block={b} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
