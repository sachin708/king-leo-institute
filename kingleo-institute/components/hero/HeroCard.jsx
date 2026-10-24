"use client";

import React from "react";
import Tagline from "@/components/ui/Tagline";
import Heading from "@/components/ui/Heading";
import Description from "@/components/ui/Description";
import Button from "@/components/ui/Button";

/**
 * Reusable HeroCard Component
 * Frosted glassmorphism container that wraps the tagline, heading, description, and action buttons.
 * Fully configurable through props (styles, typography, classes, children).
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
      className={`relative w-full max-w-[480px] lg:max-w-[500px] xl:max-w-[520px] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-9 glass-panel overflow-hidden transition-all duration-300 ${className}`.trim()}
      style={style}
    >
      {/* Subtle specular top-edge lighting effect */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Tagline / Subtitle */}
        {tagline && (
          typeof tagline === "string" ? (
            <Tagline text={tagline} />
          ) : (
            <Tagline {...tagline} />
          )
        )}

        {/* Main Heading */}
        {heading && (
          typeof heading === "string" ? (
            <Heading text={heading} />
          ) : (
            <Heading {...heading} />
          )
        )}

        {/* Description Paragraph */}
        {description && (
          typeof description === "string" ? (
            <Description text={description} />
          ) : (
            <Description {...description} />
          )
        )}

        {/* Custom children slot if provided */}
        {children}

        {/* Action Buttons List */}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-col gap-2.5 sm:gap-3 pt-2 sm:pt-3">
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
