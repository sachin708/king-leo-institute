"use client";

import React from "react";
import {
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  PinterestIcon,
} from "@/components/ui/Icons";

const DEFAULT_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/kingleotattooz",
    icon: <InstagramIcon className="w-4 h-4" />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/kingleotattooz",
    icon: <FacebookIcon className="w-4 h-4" />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@kingleotattooz",
    icon: <YouTubeIcon className="w-4 h-4" />,
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/kingleotattooz",
    icon: <PinterestIcon className="w-4 h-4" />,
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
      className={`hidden lg:flex fixed right-4 xl:right-1 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-3 ${className}`.trim()}
      style={style}
    >
      <div className="flex flex-col gap-2.5 p-1.5">
        {activeLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="w-10 h-10 rounded-[4px] flex items-center justify-center text-zinc-300 hover:text-white bg-black/60 hover:bg-white/20 transition-all duration-200 hover:scale-110"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </aside>
  );
}
