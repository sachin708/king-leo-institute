"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Reusable Navbar Component
 * Displays logo on the left and hamburger menu icon on the right.
 */
export default function Navbar({
  logoSrc = "/icons/Kinglio-white.png",
  logoAlt = "Kingleo Tattooz Institute",
  isMenuOpen = false,
  onMenuToggle,
  className = "",
  style = {},
}) {
  return (
    <header
      className={`bg-black/75 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b border-white/10 ${className}`.trim()}
      style={style}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
        >
          <div className="relative h-20 sm:h-22 lg:h-26 w-36 sm:w-44">
            <Image
              src={logoSrc}
              alt={logoAlt}
              fill
              priority
              sizes="(max-width: 640px) 144px, 176px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Hamburger / Close Menu Button */}
        <button
          type="button"
          onClick={onMenuToggle}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          className="group relative p-2 flex flex-col items-center justify-center cursor-pointer text-white focus:outline-none transition-transform active:scale-95"
        >
          {isMenuOpen ? (
            /* Close button format with smooth hover rotate effect */
            <div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:rotate-90">
              <span className="absolute h-[2px] w-6 bg-white rounded-full rotate-45 transition-transform duration-300 ease-in-out" />
              <span className="absolute h-[2px] w-6 bg-white rounded-full -rotate-45 transition-transform duration-300 ease-in-out" />
            </div>
          ) : (
            /* Hamburger default (wide-narrow-wide) and hover (narrow-wide-narrow) */
            <div className="flex flex-col items-center justify-center gap-[5px] w-8 h-8 py-1">
              {/* Top line: default wide (w-7 / 28px), on hover shrinks to narrow (w-3.5 / 14px) */}
              <span className="h-[2px] w-7 rounded-full bg-white transition-all duration-300 ease-in-out group-hover:w-3.5" />
              {/* Middle line: default narrow (w-3.5 / 14px), on hover expands to wide (w-7 / 28px) */}
              <span className="h-[2px] w-3.5 rounded-full bg-white transition-all duration-300 ease-in-out group-hover:w-7" />
              {/* Bottom line: default wide (w-7 / 28px), on hover shrinks to narrow (w-3.5 / 14px) */}
              <span className="h-[2px] w-7 rounded-full bg-white transition-all duration-300 ease-in-out group-hover:w-3.5" />
            </div>
          )}
        </button>
      </div>
    </header>
  );
}
