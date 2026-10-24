import React from "react";
import Tagline from "@/components/ui/Tagline";
import Heading from "@/components/ui/Heading";
import Description from "@/components/ui/Description";

/**
 * Reusable section header: tagline + heading + optional description.
 * Pass only the parts you need; override styles per part via the
 * tagline / heading / description prop objects (forwarded to the ui components).
 */
export default function SectionHeader({
  tagline,
  heading,
  description,
  align = "center", // "center" | "left"
  headingAs = "h2",
  taglineProps = {},
  headingProps = {},
  descriptionProps = {},
  className = "",
}) {
  const centered = align === "center";

  return (
    <header
      className={`flex flex-col ${
        centered ? "items-center text-center" : "items-start text-left"
      } ${className}`.trim()}
    >
      {tagline && (
        <Tagline
          text={tagline}
          fontSize="text-xs md:text-sm lg:text-base"
          letterSpacing="tracking-[0.3em]"
          color="text-black"
          {...taglineProps}
        />
      )}
      {heading && (
        <Heading
          as={headingAs}
          text={heading}
          fontFamily="font-sans"
          fontWeight="font-bold"
          fontSize="text-[40px] sm:text-5xl lg:text-6xl xl:text-7xl"
          lineHeight="leading-[1.05]"
          color="text-black"
          uppercase={false}
          className={`max-w-4xl ${tagline ? "mt-5" : ""}`}
          {...headingProps}
        />
      )}
      {description && (
        <Description
          text={description}
          fontWeight="font-normal"
          fontSize="text-sm md:text-base lg:text-[17px]"
          color="text-neutral-600"
          maxWidth="max-w-2xl"
          className="mt-5"
          {...descriptionProps}
        />
      )}
    </header>
  );
}
