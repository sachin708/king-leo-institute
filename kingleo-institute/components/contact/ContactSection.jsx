"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const inputClass =
  "w-full h-10 sm:h-11 rounded-md border border-zinc-300 bg-white px-3 text-[15px] text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";
const labelClass = "block mb-1.5 text-[15px] text-zinc-900";

function Field({ label, required, children }) {
  return (
    <div className="mb-4">
      <label className={labelClass}>
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {children}
    </div>
  );
}

function SelectField({ name, value, onChange, options }) {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`${inputClass} appearance-none pr-9 cursor-pointer`}
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-800" />
    </div>
  );
}

/**
 * Contact / Book Consultation section.
 * Desktop: full-bleed photo with a white form card on the left.
 * Mobile: black background, form card only.
 * Submitting opens WhatsApp with the entered details pre-filled.
 */
export default function ContactSection({
  image,
  tagline,
  heading,
  description,
  fields,
  whatsappNumber,
  submitLabel = "Submit",
}) {
  const [values, setValues] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    course: "",
    working: "",
  });

  const handleChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      "Hi Kingleo Tattooz, I want to book a free consultation.",
      `Name: ${values.name}`,
      `Mobile: ${values.mobile}`,
      values.email && `Email: ${values.email}`,
      values.dob && `Date of Birth: ${values.dob}`,
      values.course && `Course: ${values.course}`,
      values.working && `Working as tattoo artist: ${values.working}`,
    ].filter(Boolean);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative isolate w-full overflow-hidden bg-black md:bg-[#3a3d42]">
      {image?.desktop && (
        <Image
          src={image.desktop}
          alt={image.alt || ""}
          fill
          priority
          quality={90}
          sizes="100vw"
          aria-hidden="true"
          className="hidden md:block object-cover object-right pointer-events-none"
        />
      )}

      <div className="relative z-10 mx-auto flex w-full items-start px-4 pb-14 pt-24 sm:px-6 sm:pt-28 md:min-h-screen md:px-8 md:pb-16 md:pt-36 lg:w-[90%] lg:px-8 lg:pt-40">
        <div className="w-full md:max-w-[37rem] rounded-[28px] bg-white p-5 sm:p-8 md:p-9 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.8)]">
          {tagline && (
            <span className="inline-block rounded-full border border-zinc-300 px-4 py-1.5 text-[11px] font-semibold tracking-[0.25em] text-zinc-800 uppercase">
              {tagline}
            </span>
          )}
          <h1 className="mt-5 text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight leading-[1.1] text-black">
            {heading}
          </h1>
          {description && (
            <p className="mt-3 max-w-xl text-[15px] sm:text-base text-zinc-600 leading-relaxed">
              {description}
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-7 sm:mt-9 rounded-2xl bg-white p-4 sm:p-5 shadow-[0_2px_18px_rgba(0,0,0,0.08)]"
          >
            <Field label={fields.name.label} required={fields.name.required}>
              <input
                type="text"
                name="name"
                required={fields.name.required}
                value={values.name}
                onChange={handleChange}
                placeholder={fields.name.placeholder}
                className={inputClass}
              />
            </Field>
            <Field label={fields.mobile.label} required={fields.mobile.required}>
              <input
                type="tel"
                name="mobile"
                required={fields.mobile.required}
                pattern="[0-9+\s-]{10,15}"
                title="Enter a valid mobile number"
                value={values.mobile}
                onChange={handleChange}
                placeholder={fields.mobile.placeholder}
                className={inputClass}
              />
            </Field>
            <Field label={fields.email.label}>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder={fields.email.placeholder}
                className={inputClass}
              />
            </Field>
            <Field label={fields.dob.label}>
              <input
                type="date"
                name="dob"
                value={values.dob}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>
            <Field label={fields.course.label}>
              <SelectField
                name="course"
                value={values.course}
                onChange={handleChange}
                options={fields.course.options}
              />
            </Field>
            <Field label={fields.working.label}>
              <SelectField
                name="working"
                value={values.working}
                onChange={handleChange}
                options={fields.working.options}
              />
            </Field>

            <div className="flex justify-end pt-1">
              <button
                type="submit"
                className="rounded-md bg-[#0d6efd] px-4 py-2 text-[15px] text-white hover:bg-[#0b5ed7] transition-colors cursor-pointer"
              >
                {submitLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
