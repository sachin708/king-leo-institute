"use client";

import React from "react";
import Tagline from "@/components/ui/Tagline";
import Heading from "@/components/ui/Heading";
import Description from "@/components/ui/Description";
import Button from "@/components/ui/Button";

/**
 * Reusable HeroCard Component
 * Frosted glassmorphism container that wraps the tagline, heading, description, and action buttons.
 */
export default function HeroCard({
  tagline = "EXPRESS YOURSELF IN INK WITH",
  heading = "THE BEST TATTOO STUDIO IN INDORE",
  description = "If you are bold enough to get your tattoo done, it's high time to embrace the coolness of permanent ink. At Kingleo Tattooz, the best tattoo studio in Indore, our tattoo artists can bring your imagination to life. Every tattoo tells a story, and our premium designs capture it perfectly. So, let's give it a try and let your skin bloom.",
  buttons = [],
  className = "",
  style = {},
  children,
}) {
  return (
    <div
      className={`relative isolate w-full overflow-hidden text-center sm:text-left md:max-w-[36rem] rounded-2xl backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.8)] before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:border before:bg-gradient-to-br before:via-transparent before:to-transparent border border-white/10 bg-white/[10] before:border-white/[0.04] before:from-white/[0.08] rounded-card border-paper/10 bg-ink/55 text-paper backdrop-blur-md p-7 sm:p-10 md:p-12 ${className}`.trim()}
      style={style}
    >
      {/* Subtle specular top-edge lighting effect */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Tagline / Subtitle */}
        {tagline &&
          (typeof tagline === "string" ? (
            <Tagline text={tagline} />
          ) : (
            <Tagline {...tagline} />
          ))}

        {/* Main Heading */}
        {heading &&
          (typeof heading === "string" ? (
            <Heading text={heading} />
          ) : (
            <Heading {...heading} />
          ))}

        {/* Description Paragraph */}
        {description &&
          (typeof description === "string" ? (
            <Description text={description} />
          ) : (
            <Description {...description} />
          ))}

        {/* Custom children slot */}
        {children}

        {/* Action Buttons */}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-col items-center gap-2.5 sm:gap-3 pt-2 sm:pt-3">
            {buttons.map((btn, index) => (
              <Button
                key={index}
                label={btn.label}
                icon={btn.icon}
                iconPosition={btn.iconPosition || "left"}
                variant={btn.variant || "frosted"}
                href={btn.href}
                onClick={btn.onClick}
                className={btn.className}
                style={btn.style}
                fullWidth={btn.fullWidth ?? true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}