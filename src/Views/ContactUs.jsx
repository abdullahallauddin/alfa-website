import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa6";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import Markup from "../Assets/Images/markup.png";

const CONTACT_EMAIL = "info@alfamarinesa.com";
const EASE = [0.22, 1, 0.36, 1];

const countryOptions = [
  { code: "+966", label: "🇸🇦 +966" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+973", label: "🇧🇭 +973" },
  { code: "+965", label: "🇰🇼 +965" },
  { code: "+974", label: "🇶🇦 +974" },
  { code: "+968", label: "🇴🇲 +968" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+92", label: "🇵🇰 +92" },
];

const CONTACT_INFO = [
  {
    icon: FaPhone,
    label: "Phone",
    value: "+966 13 805 2528",
    href: "tel:+966138052528",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: FaLocationDot,
    label: "Address",
    value:
      "Prince Muhammad Ibn Saud District, Dammam, Kingdom of Saudi Arabia",
    href: "https://www.google.com/maps/search/?api=1&query=26.4345218%2C50.1077281",
    newTab: true,
  },
];

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-roboto text-[15px] text-white placeholder-white/40 outline-none transition-colors duration-200 focus:border-[#2C95D2] focus:bg-white/[0.07] focus:ring-1 focus:ring-[#2C95D2]";

const ContactUs = ({ embedded }) => {
  const [code, setCode] = useState("+966");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject =
      form.subject.trim() || `Website enquiry from ${form.name || "visitor"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${code} ${form.phone}`,
      form.company ? `Company: ${form.company}` : null,
      "",
      "Message:",
      form.message,
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      {!embedded && (
        <SectionWrapperReverse>
          <div
            className="bg-cover bg-center h-[clamp(18rem,46vh,30rem)] flex items-center justify-center"
            style={{ backgroundImage: `url(${Markup})` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl text-white font-light">Contact Us</h1>
            </motion.div>
          </div>
        </SectionWrapperReverse>
      )}

      <div className="w-full py-6 md:py-10">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.4fr] lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col"
          >
            <h2
              className="font-roboto text-3xl font-light text-white"
              style={{ letterSpacing: "-0.02em" }}
            >
              Get in <span className="text-[#2C95D2]">touch</span>
            </h2>
            <span className="mt-4 mb-7 block h-px w-14 bg-[#2C95D2]" />
            <p className="mb-8 max-w-md font-roboto font-light leading-relaxed text-white/65">
              Have a project or an enquiry? Reach out and our team will respond
              promptly.
            </p>

            <ul className="flex flex-1 flex-col gap-4">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href, newTab }) => {
                const inner = (
                  <div className="group flex h-full items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors duration-200 hover:border-[#2C95D2]/50 hover:bg-white/[0.08]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2C95D2]/10 text-[#2C95D2] transition-colors duration-200 group-hover:bg-[#2C95D2] group-hover:text-white">
                      <Icon className="text-base" />
                    </span>
                    <div>
                      <p className="font-roboto text-xs uppercase tracking-wide text-white/45">
                        {label}
                      </p>
                      <p className="mt-1 font-roboto text-[15px] leading-snug text-white/85">
                        {value}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <li key={label} className="flex-1">
                    {href ? (
                      <a
                        href={href}
                        className="block h-full"
                        {...(newTab
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2C95D2]/15 text-[#2C95D2]">
                  <FaCheck className="text-2xl" />
                </span>
                <h3 className="mt-5 font-roboto text-xl font-light text-white">
                  Your message is ready to send
                </h3>
                <p className="mt-2 max-w-sm font-roboto font-light text-white/60">
                  Your email app should have opened with the details. If it
                  didn’t, write to us directly at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-[#2C95D2] hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-7 rounded-full border border-white/15 px-6 py-2.5 font-roboto text-sm text-white/80 transition-colors hover:border-[#2C95D2] hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-roboto text-sm text-white/70">
                      Full name <span className="text-[#2C95D2]">*</span>
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={update}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-roboto text-sm text-white/70">
                      Email <span className="text-[#2C95D2]">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={update}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-roboto text-sm text-white/70">
                      Phone
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        aria-label="Country code"
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 font-roboto text-[15px] text-white outline-none transition-colors focus:border-[#2C95D2] focus:ring-1 focus:ring-[#2C95D2] [&>option]:bg-[#11234B]"
                      >
                        {countryOptions.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={update}
                        inputMode="tel"
                        placeholder="50 123 4567"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block font-roboto text-sm text-white/70">
                      Company
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={update}
                      placeholder="Company name"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-roboto text-sm text-white/70">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={update}
                    placeholder="How can we help?"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block font-roboto text-sm text-white/70">
                    Message <span className="text-[#2C95D2]">*</span>
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={update}
                    rows={5}
                    placeholder="Tell us about your project or enquiry…"
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2C95D2] px-7 py-3 font-roboto text-[15px] font-medium text-white transition-all duration-300 hover:bg-[#2C95D2]/90 hover:shadow-[0_0_22px_2px_rgba(44,149,210,0.4)]"
                >
                  Send message <FaPaperPlane className="text-sm" />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Full-width office map */}
        <div className="mt-14">
          <h2
            className="mb-6 font-roboto text-2xl font-light text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Our office <span className="text-[#2C95D2]">location</span>
          </h2>
          <div className="w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
            <iframe
              title="Alfa Marine Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7716012845244!2d50.1077281!3d26.4345218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb6d8a3e52d5%3A0x36ad5b73c9d39550!2sAlfa%20Marine%20%26%20Industrial%20Services%20Company!5e0!3m2!1sen!2s!4v1717356840000!5m2!1sen!2s"
              width="100%"
              height="460"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale-[0.2]"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
