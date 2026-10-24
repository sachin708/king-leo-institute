"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CloseIcon,
  PhoneIcon,
  MailIcon,
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  PinterestIcon,
} from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

const DEFAULT_MENU_ITEMS = [
  { label: "HOME", href: "#", active: true },
  { label: "ABOUT US", href: "#about" },
  { label: "EXPLORE OUR ARTS", href: "#arts" },
  { label: "PIERCINGS", href: "#piercings" },
  { label: "BLOGS", href: "#blogs" },
  { label: "AFTERCARE", href: "#aftercare" },
  { label: "TATTOO REMOVAL", href: "#removal" },
  { label: "TATTOO EMI", href: "#emi" },
  { label: "LEARN TATTOOING", href: "#courses", hasArrow: true },
];

/**
 * Reusable MenuModal Component
 * Implements the frosted glass drawer / popup from the reference screenshots (Desktop & Mobile)
 */
export default function MenuModal({
  isOpen = false,
  onClose,
  menuItems = DEFAULT_MENU_ITEMS,
  phoneNumbers = ["+91 95842 28615", "+91 70009 24824"],
  email = "kingleotattooz@gmail.com",
  socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/kingleotattooz", icon: <InstagramIcon className="w-4 h-4" /> },
    { name: "Facebook", href: "https://www.facebook.com/kingleotattooz", icon: <FacebookIcon className="w-4 h-4" /> },
    { name: "YouTube", href: "https://www.youtube.com/@kingleotattooz", icon: <YouTubeIcon className="w-4 h-4" /> },
    { name: "Pinterest", href: "https://www.pinterest.com/kingleotattooz", icon: <PinterestIcon className="w-4 h-4" /> },
  ],
  onConsultClick,
  onWhatsAppClick,
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 transition-all duration-300"
    >
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[24px] sm:rounded-[32px] glass-panel p-6 sm:p-8 lg:p-10 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header inside Modal */}
        <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-white/10 mb-6 sm:mb-8">
          <div className="relative h-9 w-36 sm:w-44">
            <Image
              src="/icons/Kinglio-white.png"
              alt="Kingleo Tattooz"
              fill
              className="object-contain object-left"
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 sm:p-2.5 rounded-full text-zinc-300 hover:text-white bg-white/10 hover:bg-white/20 transition-all duration-200"
          >
            <CloseIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content Grid: Left Menu Links + Right Badges & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Menu Links */}
          <div className="md:col-span-7 flex flex-col gap-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
              MENU
            </span>
            <nav className="flex flex-col gap-1.5 sm:gap-2">
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className={`group flex items-center gap-2 text-2xl sm:text-3xl lg:text-[34px] font-[family-name:var(--font-bebas)] tracking-wide transition-all duration-200 ${
                    item.active
                      ? "text-white"
                      : "text-zinc-400 hover:text-white hover:translate-x-1.5"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasArrow && (
                    <span className="text-sm font-sans text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Column: Sub-brands & Contact Information */}
          <div className="md:col-span-5 flex flex-col gap-6 sm:gap-8">
            {/* Brand Cards */}
            <div className="flex flex-col gap-3">
              {/* TattooCare Card */}
              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-black/60 border border-white/15 hover:border-emerald-500/50 transition-all duration-200">
                <div className="w-10 h-10 rounded-lg bg-emerald-950/70 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-extrabold tracking-wider text-white">KINGLEO</div>
                  <div className="text-xs text-zinc-400 font-medium">TattooCare</div>
                </div>
              </div>

              {/* Tattoo Butter Card */}
              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-black/60 border border-white/15 hover:border-amber-500/50 transition-all duration-200">
                <div className="w-10 h-10 rounded-lg bg-amber-950/40 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
                    <circle cx="12" cy="14" r="2" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-extrabold tracking-wider text-white">KINGLEO</div>
                  <div className="text-xs text-zinc-400 font-medium">TATTOO BUTTER</div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-3">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">
                CONTACT-US
              </span>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                <PhoneIcon className="w-4 h-4 text-zinc-400 mt-1 shrink-0" />
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
                <MailIcon className="w-4 h-4 text-zinc-400 shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {email}
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions inside Modal */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <Button
            label="Consult Now"
            variant="bronze"
            onClick={() => {
              onClose?.();
              onConsultClick?.();
            }}
          />
          <Button
            label="Chat on WhatsApp"
            variant="whatsapp"
            icon={<WhatsAppIcon className="w-4 h-4" color="#25D366" />}
            href="https://wa.me/919584228615"
            onClick={() => {
              onClose?.();
              onWhatsAppClick?.();
            }}
          />
        </div>
      </div>
    </div>
  );
}
