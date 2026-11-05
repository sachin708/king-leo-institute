"use client";

import React from "react";
import {
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  PinterestIcon,
  LinkedInIcon,
} from "@/components/ui/Icons";
import { socialUrls } from "@/app/content/socialLinks";

const DEFAULT_LINKS = [
  {
    name: "Instagram",
    href: socialUrls.instagram,
    icon: <InstagramIcon className="w-4 h-4" />,
  },
  {
    name: "Facebook",
    href: socialUrls.facebook,
    icon: <FacebookIcon className="w-4 h-4" />,
  },
  {
    name: "YouTube",
    href: socialUrls.youtube,
    icon: <YouTubeIcon className="w-4 h-4" />,
  },
  {
    name: "Pinterest",
    href: socialUrls.pinterest,
    icon: <PinterestIcon className="w-4 h-4" />,
  },
  {
    name: "LinkedIn",
    href: socialUrls.linkedin,
    icon: <LinkedInIcon className="w-4 h-4" />,
  },
];

/**
 * Vertical Social Sidebar on right desktop edge
 */
export default function SocialSidebar({
  links = [],
  className = "",
  style = {},
}) {
  const activeLinks = links.length > 0 ? links : DEFAULT_LINKS;

  return (
    <aside
      aria-label="Social links"
      className={`hidden lg:flex fixed right-4 xl:-right-2 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-3 ${className}`.trim()}
      style={style}
    >
      <div className="flex flex-col gap-2.5">
        {activeLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="w-12 h-10 rounded-[4px] flex items-center justify-center text-zinc-300 hover:text-white bg-black/70 hover:bg-black/70 transition-all duration-200 hover:scale-x-140"          >
            {item.icon}
          </a>
        ))}
      </div>
    </aside>
  );
}
