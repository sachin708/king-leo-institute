"use client";

import React from "react";

/**
 * Reusable Tagline / Subtitle Component
 * Displays small uppercase intro badge or heading prefix
 */
export default function Tagline({
  text,
  children,
  fontSize = "text-[11px] sm:text-xs md:text-sm",
  fontFamily = "font-sans",
  fontWeight = "font-bold",
  letterSpacing = "tracking-[0.18em]",
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
