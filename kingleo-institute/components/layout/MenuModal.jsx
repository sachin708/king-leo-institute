"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { socialUrls } from "@/app/content/socialLinks";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  PinterestIcon,
  LinkedInIcon,
} from "@/components/ui/Icons";

const DEFAULT_MENU_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "BLOG", href: "#" },
  { label: "ALL COURSES", href: "/#courses" },
  { label: "ONLINE LEARNING", href: "#" },
  { label: "TEAM", href: "/#team" },
  { label: "STUDENT LOAN", href: "/programs/easy-fee-payment" },
  { label: "INTERNSHIP PROGRAM", href: "/programs/internship-and-career-support" },
];

/**
 * Reusable MenuModal Component
 * Implements the frosted glass drawer / popup from the reference screenshots (Desktop & Mobile)
 */
export default function MenuModal({
  isOpen = false,
  onClose,
  menuItems = DEFAULT_MENU_ITEMS,
  phoneNumbers = ["+91 9343623234", "+91 9343623234"],
  email = "kingleotattoozinstitute@gmail.com",
  socialLinks = [
    { name: "Instagram", href: socialUrls.instagram, icon: <InstagramIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> },
    { name: "Facebook", href: socialUrls.facebook, icon: <FacebookIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> },
    { name: "YouTube", href: socialUrls.youtube, icon: <YouTubeIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> },
    { name: "Pinterest", href: socialUrls.pinterest, icon: <PinterestIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> },
    { name: "LinkedIn", href: socialUrls.linkedin, icon: <LinkedInIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> },
  ],
}) {
  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose?.();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-40 flex items-center justify-center p-3 sm:p-6 lg:p-8 pt-24 sm:pt-28"
    >
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container Card */}
      <div className="relative z-10 w-full max-w-3xl lg:translate-x-34 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-[24px] sm:rounded-[28px] bg-[#111113]/85 backdrop-blur-2xl p-6 sm:p-8 lg:p-9 border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.85)] animate-in fade-in zoom-in-95 duration-200">
        {/* Content Grid: Left Menu Links + Right Badges & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Menu Links */}
          <div className="md:col-span-7 flex flex-col justify-between md:pr-8 md:border-r md:border-white/10">
            <div>
              <nav className="flex flex-col gap-1 sm:gap-1.5">
                {menuItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={onClose}
                    className={`group flex items-center gap-1.5 text-2xl sm:text-[27px] lg:text-[31px] font-[family-name:var(--font-bebas)] tracking-wide transition-all duration-200 ${
                      item.active
                        ? "text-white font-bold"
                        : "text-zinc-400 hover:text-white hover:translate-x-1"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasArrow && (
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    )}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Column: Sub-brands & Contact Information */}
          <div className="md:col-span-5 flex flex-col gap-8 md:pl-2">

            {/* Contact Details */}
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={onClose}
                className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-zinc-400 hover:text-white transition-colors uppercase w-fit"
              >
                CONTACT-US
              </Link>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                <Phone className="w-4 h-4 text-zinc-400 mt-1 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  {phoneNumbers.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="hover:text-white transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {email}
                </a>
              </div>

              {/* Social Icons Row */}
              <div className="flex items-center gap-4 pt-6">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="text-zinc-400 hover:text-white transition-all hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
