import React from "react";
import Link from "next/link";
import {
  PhoneIcon,
  MailIcon,
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  PinterestIcon,
  LinkedInIcon,
} from "@/components/ui/Icons";

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YouTubeIcon,
  pinterest: PinterestIcon,
  linkedin: LinkedInIcon,
};

const headingClass =
  "text-sm font-bold tracking-[0.2em] uppercase text-white mb-3";
const linkClass =
  "text-[15px] text-zinc-300 hover:text-white transition-colors";

/**
 * Footer Component
 * - Column 1: logo, address, operation time, contacts and embedded Google Map
 * - Remaining columns: link groups (+ social icons)
 * - 1 col on mobile, 2 on tablet, 4 on desktop
 */
export default function Footer({
  logo,
  address = [],
  operationTime,
  contacts = {},
  map,
  columns = [],
  socials = [],
  copyright,
  developer,
  className = "",
}) {
  return (
    <footer
      id="footer"
      className={`w-full bg-black text-white border-t border-white/10 ${className}`.trim()}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
          {/* Column 1: brand, hours, contacts, map */}
          <div className="flex flex-col min-w-0">
            {logo && (
              /*
                The logo PNG has large transparent margins (~21% top, ~28% bottom,
                ~10% sides), so it is cropped to its visible area to keep the top
                aligned with the other columns' headings.
              */
              <div className="relative overflow-hidden self-start w-[130px] aspect-[4696/2167] mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="absolute max-w-none h-auto"
                  style={{ width: "127.8%", left: "-12.2%", top: "-42.4%" }}
                />
              </div>
            )}

            {/* <address className="not-italic text-[15px] text-zinc-300 leading-relaxed mb-7">
              {address.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address> */}

            {operationTime && (
              <div className="mb-4">
                <h3 className={headingClass}>Operation Time :</h3>
                <p className="text-[15px] text-zinc-300">{operationTime}</p>
              </div>
            )}

            <div className="mb-4">
              <h3 className={headingClass}>Contacts</h3>
              <ul className="flex flex-col gap-1 text-[13px] text-zinc-300">
                {contacts.phone && (
                  <li>
                    <a
                      href={`tel:${contacts.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <PhoneIcon className="w-4 h-4 shrink-0" />
                      {contacts.phone}
                    </a>
                  </li>
                )}
                {contacts.whatsapp && (
                  <li>
                    <a
                      href={contacts.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0" />
                      {contacts.whatsapp}
                    </a>
                  </li>
                )}
                {contacts.email && (
                  <li>
                    <a
                      href={`mailto:${contacts.email}`}
                      className="inline-flex items-center gap-2 break-all hover:text-white transition-colors"
                    >
                      <MailIcon className="w-4 h-4 shrink-0" />
                      {contacts.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {map && (
              <div className="w-full max-w-sm aspect-[20/10] rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  title={map.title}
                  src={map.src}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          {/* Remaining link columns */}
          {columns.map((col, i) => (
            <div key={i} className="flex flex-col gap-10 min-w-0">
              {col.groups.map((group) => (
                <div key={group.title}>
                  <h3 className={headingClass}>{group.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className={linkClass}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {group.socials && socials.length > 0 && (
                    <div className="flex items-center gap-5 mt-6">
                      {socials.map((s) => {
                        const Icon = socialIcons[s.type];
                        return (
                          <a
                            key={s.type}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="text-zinc-300 hover:text-white transition-colors"
                          >
                            {Icon && <Icon className="w-5 h-5" />}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col items-center justify-center gap-2 text-sm text-zinc-400 text-center">
          <p>{copyright}</p>
          {developer && (
            <p>
              {developer.prefix}{" "}
              <span className="font-semibold text-white">{developer.name}</span>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
