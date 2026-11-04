import React from "react";
import {
  Building2,
  Eye,
  ScanFace,
  Users,
  ShieldCheck,
  Handshake,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const icons = {
  building: Building2,
  eye: Eye,
  "scan-face": ScanFace,
  users: Users,
  shield: ShieldCheck,
  handshake: Handshake,
  "message-circle": MessageCircle,
  sparkles: Sparkles,
};

/** Dark feature cards (icon, title, subtitle, text) + closing statement. */
export default function FeatureCardsSection({
  items = [],
  closing,
  className = "",
}) {
  if (!items.length) return null;

  return (
    <section
      className={`w-full bg-white text-black pt-4 lg:pt-8 pb-12 lg:pb-20 ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.title}
                className="flex flex-col rounded-3xl border border-zinc-300 bg-white p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:border-zinc-400"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-zinc-300 bg-white text-black">
                  {Icon && <Icon className="w-6 h-6" strokeWidth={1.5} />}
                </span>
                <h3 className="mt-6 font-sans font-bold text-lg sm:text-xl text-black leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-black">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm sm:text-[15px] text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {closing && (
          <div className="mx-auto mt-12 lg:mt-20 max-w-3xl text-center">
            <h2 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight text-black">
              {closing.heading}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              {closing.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
