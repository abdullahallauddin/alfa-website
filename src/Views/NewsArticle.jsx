import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { news, getNewsBySlug, NEWS_CATEGORIES_AR, formatNewsDate } from "../data/news";
import { useT } from "../i18n/i18n";

const NewsArticle = () => {
  const t = useT();
  const { slug } = useParams();
  const article = getNewsBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Not-found state
  if (!article) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <p className="font-roboto text-sm tracking-[0.2em] text-[#2C95D2]">404</p>
        <h1 className="mt-3 font-roboto font-light text-3xl text-white">
          {t("Article not found", "المقال غير موجود")}
        </h1>
        <p className="mt-3 max-w-md font-roboto font-light text-white/60">
          {t(
            "The article you’re looking for doesn’t exist or may have moved.",
            "المقال الذي تبحث عنه غير موجود أو ربما تم نقله."
          )}
        </p>
        <Link
          to="/media-center#news"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2C95D2] px-6 py-2.5 font-roboto text-sm text-white transition hover:bg-[#2C95D2]/90"
        >
          <FaArrowLeft className="text-xs rtl-flip" /> {t("Back to News", "العودة إلى الأخبار")}
        </Link>
      </div>
    );
  }

  const index = news.findIndex((n) => n.slug === article.slug);
  const prev = index > 0 ? news[index - 1] : null;
  const next = index < news.length - 1 ? news[index + 1] : null;

  return (
    <article>
      {/* Hero */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ height: "clamp(20rem,52vh,34rem)" }}
        data-no-reveal
      >
        <img
          src={article.image}
          alt={t(article.title, article.titleAr)}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1428] via-[#0a1428]/70 to-[#0a1428]/30" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10 pb-12">
          <Link
            to="/media-center#news"
            className="inline-flex items-center gap-2 font-roboto text-sm text-white/70 transition hover:text-white"
          >
            <FaArrowLeft className="text-xs rtl-flip" /> {t("Back to News", "العودة إلى الأخبار")}
          </Link>
          <div className="mt-5 flex items-center gap-3">
            <span className="rounded-full bg-[#2C95D2] px-3 py-1 font-roboto text-xs text-white">
              {t(article.category, NEWS_CATEGORIES_AR[article.category])}
            </span>
            <time className="font-roboto text-sm text-white/60">{t(article.date, formatNewsDate(article.date, "ar"))}</time>
          </div>
          <h1
            className="mt-4 font-roboto font-light text-white"
            style={{ fontSize: "clamp(1.9rem,4.5vw,3rem)", letterSpacing: "-0.02em", textWrap: "balance" }}
          >
            {t(article.title, article.titleAr)}
          </h1>
        </div>
      </section>

      {/* Body */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-6xl px-6 md:px-10 py-14"
        data-no-reveal
      >
        <p className="font-roboto text-lg leading-relaxed text-white/90">
          {t(article.excerpt, article.excerptAr)}
        </p>
        <span className="my-8 block h-px w-16 bg-[#2C95D2]" />
        <div className="space-y-6">
          {article.body.map((para, i) => (
            <p
              key={i}
              className="font-roboto font-light text-[1.05rem] leading-relaxed text-white/75"
              style={{ textWrap: "pretty" }}
            >
              {t(para, article.bodyAr?.[i])}
            </p>
          ))}
        </div>

        {/* Prev / Next */}
        <div className="mt-14 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
          {prev ? (
            <Link
              to={`/news/${prev.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-[#2C95D2]/50 hover:bg-white/[0.08]"
            >
              <span className="inline-flex items-center gap-2 font-roboto text-xs text-white/45">
                <FaArrowLeft className="text-[10px] rtl-flip" /> {t("Previous", "السابق")}
              </span>
              <p className="mt-2 font-roboto text-white transition-colors group-hover:text-[#2C95D2]">
                {t(prev.title, prev.titleAr)}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to={`/news/${next.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-end transition hover:border-[#2C95D2]/50 hover:bg-white/[0.08] sm:col-start-2"
            >
              <span className="inline-flex items-center gap-2 font-roboto text-xs text-white/45">
                {t("Next", "التالي")} <FaArrowRight className="text-[10px] rtl-flip" />
              </span>
              <p className="mt-2 font-roboto text-white transition-colors group-hover:text-[#2C95D2]">
                {t(next.title, next.titleAr)}
              </p>
            </Link>
          )}
        </div>
      </motion.div>
    </article>
  );
};

export default NewsArticle;
