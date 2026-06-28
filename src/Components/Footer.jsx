import React from "react";
import { Link } from "react-router-dom";
import { useT } from "../i18n/i18n";
import logo from "../Assets/Icons/white-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const columns = [
  {
    title: "Company",
    titleAr: "الشركة",
    links: [
      { label: "Home", labelAr: "الرئيسية", to: "/" },
      { label: "About Us", labelAr: "نبذة عنا", to: "/groupoverview" },
      { label: "Core Values", labelAr: "قيمنا الأساسية", to: "/core-values" },
      { label: "Our Facilities", labelAr: "مرافقنا", to: "/our-facilities" },
      {
        label: "Sustainability",
        labelAr: "الاستدامة",
        to: "/environmental-responsibility",
      },
    ],
  },
  {
    title: "Divisions",
    titleAr: "القطاعات",
    links: [
      {
        label: "Marine & Offshore",
        labelAr: "البحرية والمنشآت البحرية",
        to: "/marine-and-offshore-division",
      },
      {
        label: "Construction",
        labelAr: "الإنشاءات",
        to: "/construction-division",
      },
      {
        label: "Fabrication",
        labelAr: "التصنيع",
        to: "/fabrication-and-machining-division",
      },
      {
        label: "Facility Management",
        labelAr: "إدارة المرافق",
        to: "/facility-management-division",
      },
    ],
  },
  {
    title: "Governance",
    titleAr: "الحوكمة",
    links: [
      {
        label: "Ethics & Compliance",
        labelAr: "الأخلاقيات والامتثال",
        to: "/ethics-and-compliance",
      },
      {
        label: "HSE Policy",
        labelAr: "سياسة الصحة والسلامة والبيئة",
        to: "/health-safety-and-environmental-policy",
      },
      { label: "Accreditations", labelAr: "الاعتمادات", to: "/accreditations" },
      {
        label: "Become a Supplier",
        labelAr: "كن مورّداً",
        to: "/become-a-supplier",
      },
      { label: "Contact Us", labelAr: "اتصل بنا", to: "/contact" },
    ],
  },
];

const socials = [
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/afla-marine/",
    label: "LinkedIn",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/alfa_marine_sa/",
    label: "Instagram",
  },
  { Icon: FaXTwitter, href: "https://x.com/alfamarinesa", label: "X" },
];

const legal = [
  { label: "Privacy Policy", labelAr: "سياسة الخصوصية", to: "/privacy-policy" },
  {
    label: "Cookies Policy",
    labelAr: "سياسة ملفات تعريف الارتباط",
    to: "/cookies-policy",
  },
  {
    label: "Terms & Conditions",
    labelAr: "الشروط والأحكام",
    to: "/terms-and-conditions",
  },
];

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="group inline-flex items-center gap-1 text-[15px] text-white/60 transition-colors duration-200 hover:text-white"
  >
    <span className="relative">
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#2C95D2] transition-all duration-300 group-hover:w-full" />
    </span>
  </Link>
);

const Footer = () => {
  const t = useT();
  return (
    <footer className="snap-section relative overflow-hidden bg-gradient-to-br from-[#0c1a36] via-[#0a1428] to-[#0a1326] text-white">
      {/* top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2C95D2]/40 to-transparent" />
      {/* top-left ambient blue glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[60vh] w-[60vh] rounded-full bg-[#2C95D2]/[0.12] blur-[140px]" />
      {/* diagonal two-tone panel (soft lighter triangle, lower-right) */}
      <div
        className="pointer-events-none absolute inset-0 bg-white/[0.018]"
        style={{ clipPath: "polygon(72% 0, 100% 0, 100% 100%, 38% 100%)" }}
      />

      <div className="relative z-10 mx-auto max-w-screen-xl px-6 sm:px-10 lg:px-16 pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1.35fr] lg:gap-16">
          {/* Brand + contact */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <img src={logo} alt={t("ALFA Group", "مجموعة ألفا")} className="w-40" />
            </Link>

            <p className="mt-7 flex max-w-xs items-start gap-3 text-[15px] leading-relaxed text-white/60">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mt-1 text-[#2C95D2]"
              />
              {t(
                "Prince Muhammad Ibn Saud Dist, Dammam, Kingdom of Saudi Arabia",
                "حي الأمير محمد بن سعود، الدمام، المملكة العربية السعودية"
              )}
            </p>

            <div className="mt-7 space-y-3">
              <a
                href="tel:+966138052528"
                className="group flex items-center gap-3 text-[15px] text-white/80 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/10 transition-colors duration-200 group-hover:bg-[#2C95D2] group-hover:ring-[#2C95D2]">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-xs" />
                </span>
                +966 13 805 2528
              </a>
              <a
                href="mailto:info@alfamarinesa.com"
                className="group flex items-center gap-3 text-[15px] text-white/80 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/10 transition-colors duration-200 group-hover:bg-[#2C95D2] group-hover:ring-[#2C95D2]">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                </span>
                info@alfamarinesa.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {columns.map((col) => (
              <nav key={col.title} aria-label={t(col.title, col.titleAr)}>
                <h3 className="font-roboto text-sm font-medium text-white">
                  {t(col.title, col.titleAr)}
                </h3>
                <span className="mt-3 mb-5 block h-px w-8 bg-[#2C95D2]/60" />
                <ul className="space-y-3.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <FooterLink to={l.to}>{t(l.label, l.labelAr)}</FooterLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* divider */}
        <div className="mt-16 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* socials */}
            <div className="order-2 flex items-center gap-3 md:order-1">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 ring-1 ring-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2C95D2] hover:text-white hover:ring-[#2C95D2]"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>

            {/* legal */}
            <div className="order-3 flex flex-wrap items-center gap-x-5 gap-y-2 md:order-2">
              {legal.map((l) => (
                <FooterLink key={l.label} to={l.to}>
                  {t(l.label, l.labelAr)}
                </FooterLink>
              ))}
            </div>
          </div>

          <p className="mt-7 text-[13px] text-white/40">
            {t(
              "Copyright © 2025 ALFA Technologies. all rights reserved.",
              "حقوق النشر © 2025 ألفا للتقنيات. جميع الحقوق محفوظة."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
