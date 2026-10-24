"use client";

import React from "react";

/**
 * Reusable Tagline / Subtitle Component
 * Displays small uppercase intro badge or heading prefix
 */
export default function Tagline({
  text,
  children,
  fontSize = "text-[14px] sm:text-[16px] md:text-[18px]",
  fontFamily = "font-sans",
  fontWeight = "font-bold",
  letterSpacing = "tracking-[0.20em]",
  color = "text-zinc-200",
  uppercase = true,
  className = "",
  style = {},
  ...props
}) {
  const content = text || children;

  return (
    <span
      className={`inline-block ${fontFamily} ${fontSize} ${fontWeight} ${letterSpacing} ${color} ${
        uppercase ? "uppercase" : ""
      } ${className}`.trim()}
      style={style}
      {...props}
    >
      {content}
    </span>
  );
}
