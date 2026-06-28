import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaTimes, FaArrowRight } from "react-icons/fa";
import { useI18n } from "../i18n/i18n";
import { news } from "../data/news";

// Static, bilingual search index of the site's pages and sections.
const PAGES = [
  { en: "Home", ar: "الرئيسية", path: "/", kw: "banner alfa group" },
  { en: "Who We Are", ar: "من نحن", path: "/who-we-are", kw: "about company overview" },
  { en: "Group Overview", ar: "نبذة عن المجموعة", path: "/who-we-are#group-overview", kw: "about" },
  { en: "Our Divisions", ar: "قطاعاتنا", path: "/who-we-are#our-divisions", kw: "divisions sectors" },
  { en: "Mission, Vision & Goals", ar: "الرسالة والرؤية والأهداف", path: "/who-we-are#mission-vision-goals", kw: "mission vision goals" },
  { en: "Core Values", ar: "قيمنا الأساسية", path: "/who-we-are#core-values", kw: "values" },
  { en: "Our Strategy", ar: "استراتيجيتنا", path: "/who-we-are#our-strategy", kw: "strategy pillars" },
  { en: "Our Culture", ar: "ثقافتنا", path: "/who-we-are#our-culture", kw: "culture" },
  { en: "Our Facilities", ar: "مرافقنا", path: "/who-we-are#our-facilities", kw: "facilities" },
  { en: "Our Capabilities", ar: "قدراتنا", path: "/who-we-are#our-capabilities", kw: "capabilities" },
  { en: "Accreditations", ar: "الاعتمادات والشهادات", path: "/who-we-are#accreditations", kw: "iso certifications compliance" },

  { en: "What We Do", ar: "أعمالنا", path: "/what-we-do", kw: "services divisions" },
  { en: "Marine & Offshore Division", ar: "قطاع البحرية والمنشآت البحرية", path: "/what-we-do#marine-offshore", kw: "marine offshore" },
  { en: "Construction Division", ar: "قطاع الإنشاءات", path: "/what-we-do#construction", kw: "construction civil" },
  { en: "Fabrication & Machining Division", ar: "قطاع التصنيع والتشكيل المعدني", path: "/what-we-do#fabrication-machining", kw: "fabrication machining welding" },
  { en: "Trading Division", ar: "قطاع التجارة والتوريد", path: "/what-we-do#trading", kw: "trading supply procurement" },
  { en: "ICT Division", ar: "قطاع تقنية المعلومات والاتصالات", path: "/what-we-do#ict", kw: "ict technology" },
  { en: "Facility Management Division", ar: "قطاع إدارة المرافق", path: "/what-we-do#facility-management", kw: "facility management" },
  { en: "Joinery Division", ar: "قطاع أعمال النجارة", path: "/what-we-do#joinery", kw: "joinery woodwork" },

  { en: "Sustainability", ar: "الاستدامة", path: "/sustainability", kw: "sustainability" },
  { en: "Environmental Responsibility", ar: "المسؤولية البيئية", path: "/sustainability#environmental-responsibility", kw: "environment" },
  { en: "Health, Safety & Environmental Policy", ar: "سياسة الصحة والسلامة والبيئة", path: "/sustainability#hse-policy", kw: "hse health safety" },
  { en: "Quality Assurance Policy", ar: "سياسة ضمان الجودة", path: "/sustainability#quality-assurance", kw: "quality qa" },
  { en: "Ethics and Compliance", ar: "الأخلاقيات والامتثال", path: "/sustainability#ethics-compliance", kw: "ethics compliance" },

  { en: "Media Center", ar: "المركز الإعلامي", path: "/media-center", kw: "media news" },
  { en: "News", ar: "الأخبار", path: "/media-center#news", kw: "news insights" },
  { en: "Download Center", ar: "مركز التحميل", path: "/media-center#downloads", kw: "downloads brochure" },

  { en: "Get In Touch", ar: "تواصل معنا", path: "/get-in-touch", kw: "contact" },
  { en: "Contact us", ar: "اتصل بنا", path: "/get-in-touch#contact", kw: "contact form email phone" },
  { en: "Commercial Inquiries", ar: "الاستفسارات التجارية", path: "/get-in-touch#commercial-inquiries", kw: "commercial sales" },
  { en: "Careers", ar: "الوظائف", path: "/get-in-touch#careers", kw: "careers jobs" },
  { en: "Become a Supplier", ar: "كن مورّداً", path: "/get-in-touch#become-a-supplier", kw: "supplier vendor" },
  { en: "Whistleblowing", ar: "الإبلاغ عن المخالفات", path: "/get-in-touch#whistleblowing", kw: "whistleblowing ethics" },

  { en: "Privacy Policy", ar: "سياسة الخصوصية", path: "/privacy-policy", kw: "privacy data pdpl" },
  { en: "Cookies Policy", ar: "سياسة ملفات تعريف الارتباط", path: "/cookies-policy", kw: "cookies" },
  { en: "Terms & Conditions", ar: "الشروط والأحكام", path: "/terms-and-conditions", kw: "terms" },
];

const SearchOverlay = ({ open, onClose }) => {
  const navigate = useNavigate();
  const { lang } = useI18n();
  const [q, setQ] = useState("");
  const inputRef = useRef(null);

  // Build the full index (pages + news articles)
  const index = useMemo(() => {
    const articles = news.map((n) => ({
      en: n.title,
      ar: n.titleAr || n.title,
      path: `/news/${n.slug}`,
      kw: `news ${n.category} ${n.excerpt || ""}`,
      tag: lang === "ar" ? "خبر" : "News",
    }));
    return [...PAGES, ...articles];
  }, [lang]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return index
      .filter((it) =>
        `${it.en} ${it.ar} ${it.kw || ""}`.toLowerCase().includes(term)
      )
      .slice(0, 8);
  }, [q, index]);

  useEffect(() => {
    if (open) {
      setQ("");
      const id = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(id);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Enter" && results[0]) go(results[0].path);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, results]);

  const go = (path) => {
    onClose();
    navigate(path);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1100] flex items-start justify-center bg-[#0a1428]/80 backdrop-blur-sm px-4 pt-24 sm:pt-32"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-2xl">
        <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-[#11234B]/90 px-5 py-4 shadow-2xl ring-1 ring-white/10">
          <FaSearch className="text-white/50" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={
              lang === "ar"
                ? "ابحث في الموقع…"
                : "Search the site…"
            }
            className="flex-1 bg-transparent font-roboto text-lg text-white placeholder-white/40 outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={lang === "ar" ? "إغلاق البحث" : "Close search"}
            className="text-white/50 transition-colors hover:text-white"
          >
            <FaTimes />
          </button>
        </div>

        {q.trim() && (
          <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#11234B]/90 shadow-2xl ring-1 ring-white/10">
            {results.length === 0 ? (
              <p className="px-5 py-6 font-roboto text-sm text-white/55">
                {lang === "ar"
                  ? "لا توجد نتائج مطابقة."
                  : "No matching results."}
              </p>
            ) : (
              <ul className="max-h-[60vh] overflow-y-auto no-scrollbar py-2">
                {results.map((it) => (
                  <li key={it.path}>
                    <button
                      type="button"
                      onClick={() => go(it.path)}
                      className="group flex w-full items-center justify-between gap-3 px-5 py-3 text-start transition-colors hover:bg-white/[0.06]"
                    >
                      <span className="font-roboto text-[15px] text-white/85 group-hover:text-white">
                        {lang === "ar" ? it.ar : it.en}
                      </span>
                      <span className="flex items-center gap-2">
                        {it.tag && (
                          <span className="rounded-full bg-[#2C95D2]/15 px-2 py-0.5 font-roboto text-[11px] text-[#2C95D2]">
                            {it.tag}
                          </span>
                        )}
                        <FaArrowRight className="text-xs text-white/30 group-hover:text-[#2C95D2] rtl-flip" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;
