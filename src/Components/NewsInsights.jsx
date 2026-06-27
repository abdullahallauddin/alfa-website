import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import { news } from "../data/news";

const EASE = [0.22, 1, 0.36, 1];

const NewsInsights = () => {
  const trackRef = useRef(null);

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const amount = card ? card.offsetWidth + 24 : 340;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section
      id="news"
      className="snap-section relative min-h-screen w-full flex items-center overflow-hidden bg-gradient-to-br from-[#0a1428] via-[#11234B] to-[#0a1428]"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-[60vh] w-[60vh] -translate-x-1/3 rounded-full bg-[#2C95D2]/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <h2
              className="font-roboto font-light text-[clamp(2rem,4.5vw,3rem)] text-white text-balance"
              style={{ letterSpacing: "-0.02em" }}
            >
              News &amp; <span className="text-[#2C95D2]">Insights</span>
            </h2>
            <span className="mt-5 block h-px w-16 bg-[#2C95D2]" />
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/media-center#news"
              className="inline-flex items-center gap-2 font-roboto text-sm text-white/70 transition-colors hover:text-white"
            >
              View all news <FaArrowRight className="text-xs" />
            </Link>
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous news"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:border-[#2C95D2] hover:bg-[#2C95D2]"
              >
                <FaChevronLeft className="text-sm" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next news"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:border-[#2C95D2] hover:bg-[#2C95D2]"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          ref={trackRef}
          className="mt-10 flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
        >
          {news.map((item) => (
            <Link
              key={item.slug}
              to={`/news/${item.slug}`}
              data-card
              className="group snap-start shrink-0 w-[82vw] sm:w-[20rem] overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors duration-300 hover:border-[#2C95D2]/50 hover:bg-white/[0.08]"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1428]/70 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-[#2C95D2] px-3 py-1 font-roboto text-[11px] text-white">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <time className="font-roboto text-xs text-white/50">
                  {item.date}
                </time>
                <h3 className="mt-2 font-roboto text-lg font-medium leading-snug text-white line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-2 font-roboto text-sm font-light leading-relaxed text-white/65 line-clamp-3">
                  {item.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-roboto text-sm text-[#2C95D2] transition-colors group-hover:text-white">
                  Read more <FaArrowRight className="text-xs" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsInsights;
