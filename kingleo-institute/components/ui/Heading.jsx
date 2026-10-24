"use client";

import React from "react";

/**
 * Reusable Heading Component
 * Supports custom HTML tags, responsive font sizes, custom styles and classes via props.
 */
export default function Heading({
  as: Tag = "h1",
  text,
  children,
  fontSize = "text-3xl sm:text-4xl md:text-5xl lg:text-[54px]",
  fontFamily = "font-[family-name:var(--font-bebas)]",
  fontWeight = "font-normal",
  lineHeight = "leading-[1.05]",
  letterSpacing = "tracking-tight",
  color = "text-white",
  uppercase = true,
  className = "",
  style = {},
  ...props
}) {
  const content = text || children;

  return (
    <Tag
      className={`${fontFamily} ${fontSize} ${fontWeight} ${lineHeight} ${letterSpacing} ${color} ${
        uppercase ? "uppercase" : ""
      } ${className}`.trim()}
      style={style}
      {...props}
    >
      {content}
    </Tag>
  );
}
