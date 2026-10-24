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
  fontSize = "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px]",
  fontFamily = "font-[family-name:var(--font-bebas)]",
  fontWeight = "font-normal",
  lineHeight = "leading-[0.94] sm:leading-[0.92]",
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