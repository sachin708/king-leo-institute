"use client";

import React from "react";
import Link from "next/link";

/**
 * Reusable Button Component
 * Supports frosted glass styling, variants, icons, and responsive widths.
 */
export default function Button({
  label,
  children,
  icon = null,
  iconPosition = "left",
  variant = "frosted",
  href,
  onClick,
  fullWidth = true,
  className = "",
  style = {},
  target,
  rel,
  disabled = false,
  ...props
}) {
  const content = label || children;

  const baseStyles =
    "group relative overflow-hidden inline-flex items-center justify-center font-medium backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] rounded-xl h-10 md:h-12 text-xs sm:text-sm transition-all duration-300 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20 active:scale-[0.98]";

  const variantStyles = {
    // Frosted glass button
    frosted:
      "bg-white/[0.12] hover:bg-white/[0.20] text-white border border-white/25 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:border-white/40",

    // Glassy button: translucent gradient, blur, inner highlight
    glass:
      "bg-gradient-to-b from-white/25 to-white/5 hover:from-white/35 hover:to-white/10 text-white border border-white/30 hover:border-white/50 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_24px_rgba(0,0,0,0.35)]",

    // WhatsApp button
    whatsapp:
      "bg-[#0e3b24]/70 hover:bg-[#134d30]/90 text-white border border-emerald-500/40 backdrop-blur-md shadow-[0_4px_20px_rgba(16,185,129,0.18)] hover:border-emerald-400/60",

    // Bronze button
    bronze:
      "bg-[#4a3f35]/70 hover:bg-[#5c4f42]/90 text-white border border-[#8a7561]/40 backdrop-blur-md shadow-md",

    // Transparent outline
    outline:
      "bg-transparent hover:bg-white/10 text-white border border-white/30 backdrop-blur-sm",

    // Solid white
    solid:
      "bg-white text-black hover:bg-zinc-200 shadow-md font-semibold",

    // Ghost
    ghost:
      "bg-transparent hover:bg-white/10 text-zinc-300 hover:text-white",
  };

  const selectedVariant =
    variantStyles[variant] || variantStyles.frosted;

  /*
   * Responsive width:
   * Mobile / Tablet = 100%
   * Desktop (lg) = 70%
   */
  const widthStyle = fullWidth
    ? "w-full lg:w-[90%]"
    : "w-auto";

  const disabledStyle = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  const combinedClasses = `
    ${baseStyles}
    ${selectedVariant}
    ${widthStyle}
    ${disabledStyle}
    ${className}
  `.trim();

  const buttonInner = (
    <>
      {/* Glassy effect: top gloss highlight + hover shine sweep */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-xl bg-gradient-to-b from-white/25 to-transparent"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[400%]"
      />

      {/* Left Icon */}
      {icon && iconPosition === "left" && (
        <span className="relative mr-2 inline-flex shrink-0 items-center justify-center rounded-full bg-white/15 p-1.5 md:p-2 shadow-[0_0_10px_rgba(255,255,255,0.15)]">
          {icon}
        </span>
      )}

      {/* Button Text */}
      <span className="relative">{content}</span>

      {/* Right Icon */}
      {icon && iconPosition === "right" && (
        <span className="relative ml-2 inline-flex shrink-0 items-center justify-center">
          {icon}
        </span>
      )}
    </>
  );

  // External link
  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          target={
            target || (href.startsWith("http") ? "_blank" : undefined)
          }
          rel={
            rel ||
            (href.startsWith("http")
              ? "noopener noreferrer"
              : undefined)
          }
          className={combinedClasses}
          style={style}
          onClick={onClick}
          {...props}
        >
          {buttonInner}
        </a>
      );
    }

    // Internal Next.js link
    return (
      <Link
        href={href}
        className={combinedClasses}
        style={style}
        onClick={onClick}
        {...props}
      >
        {buttonInner}
      </Link>
    );
  }

  // Normal button
  return (
    <button
      type="button"
      className={combinedClasses}
      style={style}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {buttonInner}
    </button>
  );
}