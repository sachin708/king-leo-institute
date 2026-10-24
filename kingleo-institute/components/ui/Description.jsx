"use client";

import React from "react";

/**
 * Reusable Description / Paragraph Component
 * Supports custom HTML tags, responsive font sizes, colors, line heights, and custom styles via props.
 */
export default function Description({
  as: Tag = "p",
  text,
  children,
  fontSize = "text-xs sm:text-sm md:text-[15px]",
  fontFamily = "font-sans",
  fontWeight = "font-semibold",
  lineHeight = "leading-relaxed",
  color = "text-zinc-300",
  maxWidth = "max-w-xl",
  className = "",
  style = {},
  ...props
}) {
  const content = text || children;

  return (
    <Tag
      className={`${fontFamily} ${fontSize} ${fontWeight} ${lineHeight} ${color} ${maxWidth} ${className}`.trim()}
      style={style}
      {...props}
    >
      {content}
    </Tag>
  );
}
