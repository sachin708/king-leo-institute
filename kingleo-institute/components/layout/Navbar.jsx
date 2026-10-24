"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HamburgerIcon, CloseIcon } from "@/components/ui/Icons";

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
      className={`bg-black fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 via-black/40 to-transparent ${className}`.trim()}
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
          className="p-2 sm:p-2.5 rounded-full text-white hover:text-white/80 bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 active:scale-95"
        >
          {isMenuOpen ? (
            <CloseIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          ) : (
            <HamburgerIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          )}
        </button>
      </div>
    </header>
  );
}
