import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import backgroundImage from "../Assets/Images/aboutcompanyimage.jpg";
import { news, NEWS_CATEGORIES, NEWS_CATEGORIES_AR, formatNewsDate } from "../data/news";
import { useT } from "../i18n/i18n";

const PAGE_SIZE = 6;

const NewsSection = ({ embedded }) => {
  const t = useT();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (embedded) return;
    window.scrollTo(0, 0);
  }, [embedded]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return news.filter((n) => {
      const inCategory = category === "All" || n.category === category;
      const inQuery =
        !q ||
        n.title.toLowerCase().includes(q) ||
        n.excerpt.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [query, category]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  // Reset to first page whenever the filters change.
  useEffect(() => {
    setPage(1);
  }, [query, category]);

  const categories = ["All", ...NEWS_CATEGORIES];

  return (
    <>
      {!embedded && (
        <SectionWrapperReverse>
          <div
            className="bg-cover bg-center h-[clamp(18rem,46vh,30rem)] flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 text-white">
              <h1 className="text-5xl font-roboto font-light">{t("News", "الأخبار")}</h1>
            </div>
          </div>
        </SectionWrapperReverse>
      )}

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 py-12">
        {/* Controls: search + category filters */}
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-xs" data-no-reveal>
            <FaSearch className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-sm text-white/40" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("Search news…", "ابحث في الأخبار…")}
              aria-label={t("Search news", "ابحث في الأخبار")}
              className="w-full rounded-full border border-white/15 bg-white/5 py-2.5 ps-11 pe-4 font-roboto text-sm text-white placeholder-white/40 outline-none transition focus:border-[#2C95D2] focus:ring-2 focus:ring-[#2C95D2]/30"
            />
          </div>

          <div className="flex flex-wrap gap-2" data-no-reveal>
            {categories.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  aria-pressed={active}
                  className={`rounded-full px-4 py-1.5 font-roboto text-sm transition-colors duration-200 ${
                    active
                      ? "bg-[#2C95D2] text-white"
                      : "border border-white/15 text-white/65 hover:text-white hover:border-white/30"
                  }`}
                >
                  {c === "All" ? t("All", "الكل") : t(c, NEWS_CATEGORIES_AR[c])}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results */}
        {visible.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 px-6 py-16 text-center">
            <p className="font-roboto text-lg text-white">{t("No articles found", "لم يتم العثور على مقالات")}</p>
            <p className="mt-2 font-roboto font-light text-white/60">
              {t("Try a different search term or category.", "جرّب مصطلح بحث أو فئة مختلفة.")}
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="mt-6 rounded-full bg-[#2C95D2] px-5 py-2 font-roboto text-sm text-white transition hover:bg-[#2C95D2]/90"
            >
              {t("Clear filters", "مسح عوامل التصفية")}
            </button>
          </div>
        ) : (
          <motion.div
            key={`${category}-${query}-${current}`}
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((n) => (
              <motion.article
                key={n.slug}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/news/${n.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors duration-300 hover:border-[#2C95D2]/50"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={n.image}
                      alt={t(n.title, n.titleAr)}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute start-3 top-3 rounded-full bg-[#0a1428]/85 px-3 py-1 font-roboto text-xs text-[#2C95D2] ring-1 ring-white/10">
                      {t(n.category, NEWS_CATEGORIES_AR[n.category])}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <time className="font-roboto text-xs text-white/45">{t(n.date, formatNewsDate(n.date, "ar"))}</time>
                    <h3 className="mt-2 font-roboto text-lg text-white transition-colors group-hover:text-[#2C95D2]">
                      {t(n.title, n.titleAr)}
                    </h3>
                    <p className="mt-2 font-roboto font-light text-sm leading-relaxed text-white/65">
                      {t(n.excerpt, n.excerptAr)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-roboto text-sm text-[#2C95D2]">
                      {t("Read more", "اقرأ المزيد")}
                      <FaArrowRight className="text-xs rtl-flip transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* Pagination */}
        {pageCount > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2" data-no-reveal>
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={current === 1}
              aria-label={t("Previous page", "الصفحة السابقة")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <FaChevronLeft className="text-xs rtl-flip" />
            </button>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                aria-current={p === current ? "page" : undefined}
                className={`h-9 min-w-9 rounded-full px-3 font-roboto text-sm transition ${
                  p === current
                    ? "bg-[#2C95D2] text-white"
                    : "border border-white/15 text-white/70 hover:bg-white/10"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              disabled={current === pageCount}
              aria-label={t("Next page", "الصفحة التالية")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <FaChevronRight className="text-xs rtl-flip" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default NewsSection;
