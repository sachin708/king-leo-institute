"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";

const inputClass =
  "w-full h-10 sm:h-11 rounded-md border border-zinc-300 bg-white px-3 text-[15px] text-zinc-800 placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";
const errorInputClass =
  "!border-red-500 focus:!border-red-500 focus:!ring-red-500/20";
const labelClass = "block mb-1.5 text-[15px] text-zinc-900";

function Field({ label, required, error, children }) {
  return (
    <div className="mb-4">
      <label className={labelClass}>
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-[13px] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({ name, value, onChange, onBlur, options, invalid }) {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={invalid || undefined}
        className={`${inputClass} ${invalid ? errorInputClass : ""} appearance-none pr-9 cursor-pointer`}
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

/** Returns an error message for a field, or "" when it is valid. */
function validateField(name, raw) {
  const value = (raw || "").trim();
  switch (name) {
    case "name":
      if (!value) return "Please enter your full name.";
      if (value.length < 2) return "Name must be at least 2 characters.";
      if (value.length > 60) return "Name must be 60 characters or fewer.";
      if (!/^\p{L}[\p{L}\s.'-]*$/u.test(value))
        return "Name can only contain letters and spaces.";
      return "";
    case "mobile": {
      if (!value) return "Please enter your mobile number.";
      if (!/^\d+$/.test(value)) return "Mobile number can only contain digits.";
      if (value.length !== 10) return "Mobile number must be exactly 10 digits.";
      if (!/^[6-9]/.test(value))
        return "Enter a valid Indian mobile number (starts with 6, 7, 8 or 9).";
      return "";
    }
    case "email":
      if (!value) return "Please enter your email address.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value))
        return "Enter a valid email address.";
      return "";
    case "course":
      return value ? "" : "Please select the tattoo course you are interested in.";
    case "working":
      return value ? "" : "Please select an option.";
    case "dob": {
      if (!value) return "";
      const d = new Date(value);
      if (Number.isNaN(d.getTime())) return "Enter a valid date of birth.";
      if (d > new Date()) return "Date of birth cannot be in the future.";
      if (d.getFullYear() < 1940) return "Enter a valid date of birth.";
      return "";
    }
    default:
      return "";
  }
}

/**
 * Contact / Book Consultation section.
 * Desktop: full-bleed photo with a white form card on the left.
 * Mobile: black background, form card only.
 * Fields are validated on blur and on submit; a valid submit logs the
 * details to the console (no redirect) and resets the form.
 */
const initialValues = {
  name: "",
  mobile: "",
  email: "",
  dob: "",
  course: "",
  working: "",
};

export default function ContactSection({
  image,
  tagline,
  heading,
  description,
  fields,
  submitLabel = "Submit",
}) {
  const [values, setValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [maxDob, setMaxDob] = useState(undefined);

  useEffect(() => {
    setMaxDob(new Date().toISOString().split("T")[0]);
  }, []);

  // Close the success popup with Escape
  useEffect(() => {
    if (!submitted) return;
    const onKey = (e) => e.key === "Escape" && setSubmitted(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [submitted]);

  const setError = (name, value) =>
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    // Re-validate live once a field has shown an error, so it clears as soon as it is fixed
    if (errors[name]) setError(name, value);
  };

  const handleBlur = (e) => setError(e.target.name, e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    Object.keys(values).forEach((key) => {
      const msg = validateField(key, values[key]);
      if (msg) nextErrors[key] = msg;
    });
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      e.currentTarget.elements[firstInvalid]?.focus();
      return;
    }

    console.log("Contact form submitted:", {
      name: values.name.trim(),
      mobile: values.mobile.trim(),
      email: values.email.trim(),
      dob: values.dob,
      course: values.course,
      working: values.working,
    });
    setValues(initialValues);
    setErrors({});
    setSubmitted(true);
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
            noValidate
            className="mt-7 sm:mt-9 rounded-2xl bg-white p-4 sm:p-5 shadow-[0_2px_18px_rgba(0,0,0,0.08)]"
          >
            <Field
              label={fields.name.label}
              required={fields.name.required}
              error={errors.name}
            >
              <input
                type="text"
                name="name"
                maxLength={60}
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.name || undefined}
                placeholder={fields.name.placeholder}
                className={`${inputClass} ${errors.name ? errorInputClass : ""}`}
              />
            </Field>
            <Field
              label={fields.mobile.label}
              required={fields.mobile.required}
              error={errors.mobile}
            >
              <input
                type="tel"
                name="mobile"
                inputMode="numeric"
                maxLength={10}
                autoComplete="tel-national"
                value={values.mobile}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  handleChange(e);
                }}
                onBlur={handleBlur}
                aria-invalid={!!errors.mobile || undefined}
                placeholder={fields.mobile.placeholder}
                className={`${inputClass} ${errors.mobile ? errorInputClass : ""}`}
              />
            </Field>
            <Field label={fields.email.label} required error={errors.email}>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.email || undefined}
                placeholder={fields.email.placeholder}
                className={`${inputClass} ${errors.email ? errorInputClass : ""}`}
              />
            </Field>
            <Field label={fields.dob.label} error={errors.dob}>
              <input
                type="date"
                name="dob"
                max={maxDob}
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.dob || undefined}
                className={`${inputClass} ${errors.dob ? errorInputClass : ""}`}
              />
            </Field>
            <Field label={fields.course.label} required error={errors.course}>
              <SelectField
                name="course"
                value={values.course}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={!!errors.course}
                options={fields.course.options}
              />
            </Field>
            <Field label={fields.working.label} required error={errors.working}>
              <SelectField
                name="working"
                value={values.working}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={!!errors.working}
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

      {submitted && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
          onClick={() => setSubmitted(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-2xl bg-white p-6 sm:p-8 text-center shadow-2xl"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Check className="h-7 w-7" strokeWidth={2.5} />
            </span>
            <h2
              id="contact-success-title"
              className="mt-4 text-xl sm:text-2xl font-bold text-black"
            >
              Form Submitted Successfully
            </h2>
            <p className="mt-2 text-[15px] text-zinc-600 leading-relaxed">
              Thank you! Our team will call you soon with batch dates, fees and
              the next step.
            </p>
            <button
              type="button"
              autoFocus
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-md bg-[#0d6efd] px-6 py-2 text-[15px] text-white hover:bg-[#0b5ed7] transition-colors cursor-pointer"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
