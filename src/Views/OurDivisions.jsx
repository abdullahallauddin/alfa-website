import React, { useRef, useState, useEffect, useCallback } from "react";
import DivisionCard from "../Components/DivisionCard";
import Marine from "../Assets/Icons/Marine.svg";
import Construction from "../Assets/Icons/Construction.svg";
import Fabrication from "../Assets/Icons/Fabrication.svg";
import Trading from "../Assets/Icons/Trading.svg";
import ICT from "../Assets/Icons/ICT.svg";
import Facility from "../Assets/Icons/Facility.svg";
import Joinery from "../Assets/Icons/Joinery.svg";
import Marine2a from "../Assets/Images/marine2a.png";
import Construction2a from "../Assets/Images/construction2a.png";
import Fabrication2a from "../Assets/Images/fabrication2a.png";
import Trading2a from "../Assets/Images/trading2a.png";
import Ict2a from "../Assets/Images/ict2a.png";
import Facility2a from "../Assets/Images/facility2a.png";
import Joinery2a from "../Assets/Images/joinery2a.png";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useDragScroll from "../hooks/useDragScroll";
import { useT } from "../i18n/i18n";

// Original cards
const cards = [
  {
    logo: Marine,
    iconAlt: "Marine Logo",
    iconAltAr: "شعار البحرية",
    title: "Marine & Offshore Division",
    titleAr: "قطاع البحرية والمنشآت البحرية",
    description:
      "Our Marine & Offshore Division specializes in providing comprehensive...",
    descriptionAr:
      "يتخصص قطاع البحرية والمنشآت البحرية لدينا في تقديم خدمات شاملة...",
    label: "MARINE",
    labelAr: "البحرية",
    bgImage: Marine2a,
    path: "/marine-and-offshore-division",
  },
  {
    logo: Construction,
    iconAlt: "Construction Logo",
    iconAltAr: "شعار الإنشاءات",
    title: "Construction Division",
    titleAr: "قطاع الإنشاءات",
    description:
      "The Construction Division handles a wide range of civil, structural...",
    descriptionAr:
      "يتولى قطاع الإنشاءات مجموعة واسعة من المشاريع المدنية والإنشائية...",
    label: "CONSTRUCTION",
    labelAr: "الإنشاءات",
    bgImage: Construction2a,
    path: "/construction-division",
  },
  {
    logo: Fabrication,
    iconAlt: "Fabrication Logo",
    iconAltAr: "شعار التصنيع",
    title: "Fabrication & Machining Division",
    titleAr: "قطاع التصنيع والتشكيل المعدني",
    description:
      "Our Fabrication & Machining Division offers precision metalwork, including...",
    descriptionAr:
      "يقدّم قطاع التصنيع والتشكيل المعدني أعمالاً معدنية دقيقة، تشمل...",
    label: "FABRICATION",
    labelAr: "التصنيع",
    bgImage: Fabrication2a,
    path: "/fabrication-and-machining-division",
  },
  {
    logo: Trading,
    iconAlt: "Trading Logo",
    iconAltAr: "شعار التجارة",
    title: "Trading Division",
    titleAr: "قطاع التجارة والتوريد",
    description:
      "The Trading Division provides reliable sourcing and supply chain solutions...",
    descriptionAr:
      "يوفّر قطاع التجارة والتوريد حلولاً موثوقة للتوريد وسلاسل الإمداد...",
    label: "TRADING",
    labelAr: "التجارة",
    bgImage: Trading2a,
    path: "/trading-division",
  },
  {
    logo: ICT,
    iconAlt: "ICT Logo",
    iconAltAr: "شعار تقنية المعلومات",
    title: "ICT Division",
    titleAr: "قطاع تقنية المعلومات والاتصالات",
    description:
      "Our ICT Division delivers innovative technology solutions for enterprise needs. Services...",
    descriptionAr:
      "يقدّم قطاع تقنية المعلومات والاتصالات حلولاً تقنية مبتكرة لاحتياجات المؤسسات. وتشمل الخدمات...",
    label: "ICT",
    labelAr: "تقنية المعلومات",
    bgImage: Ict2a,
    path: "/ict-division",
  },
  {
    logo: Facility,
    iconAlt: "Facility Logo",
    iconAltAr: "شعار إدارة المرافق",
    title: "Facility Management Division",
    titleAr: "قطاع إدارة المرافق",
    description:
      "The Facility Management Division ensures the seamless operation...",
    descriptionAr: "يضمن قطاع إدارة المرافق التشغيل السلس...",
    label: "FACILITY MGMT",
    labelAr: "إدارة المرافق",
    bgImage: Facility2a,
    path: "/facility-management-division",
  },
  {
    logo: Joinery,
    iconAlt: "Joinery Logo",
    iconAltAr: "شعار النجارة",
    title: "Joinery Division",
    titleAr: "قطاع أعمال النجارة",
    description:
      "The Joinery Division specializes in custom woodwork, including doors...",
    descriptionAr:
      "يتخصص قطاع أعمال النجارة في الأعمال الخشبية المخصصة، بما في ذلك الأبواب...",
    label: "JOINERY",
    labelAr: "النجارة",
    bgImage: Joinery2a,
    path: "/joinery-division",
  },
];

// Three copies so the track can loop seamlessly in both directions
const SETS = 3;
const slides = Array.from({ length: SETS }, () => cards).flat();
const N = cards.length;

function OurDivisions() {
  const t = useT();
  const trackRef = useRef(null);
  useDragScroll(trackRef);
  const rafId = useRef(0);
  const settleTimer = useRef(null);
  const resetting = useRef(false);
  const [active, setActive] = useState(0);

  const getSlideEls = useCallback(
    () => Array.from(trackRef.current?.querySelectorAll("[data-slide]") || []),
    []
  );

  const centerOnEl = useCallback((el, smooth) => {
    const track = trackRef.current;
    if (!track || !el) return;
    const left = el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2;
    track.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
  }, []);

  const findClosest = useCallback(() => {
    const track = trackRef.current;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = null;
    let bestIdx = 0;
    let min = Infinity;
    getSlideEls().forEach((el, i) => {
      const elCenter = el.offsetLeft + el.offsetWidth / 2;
      const d = Math.abs(elCenter - center);
      if (d < min) {
        min = d;
        best = el;
        bestIdx = i;
      }
    });
    return { best, bestIdx };
  }, [getSlideEls]);

  const markCenter = useCallback(
    (centerEl) => {
      getSlideEls().forEach((el) => {
        const shouldCenter = el === centerEl;
        // Only write when the value actually changes to avoid style thrash
        if ((el.getAttribute("data-center") === "true") !== shouldCenter) {
          el.setAttribute("data-center", String(shouldCenter));
        }
      });
    },
    [getSlideEls]
  );

  // Start centered on the first card of the middle copy
  useEffect(() => {
    const els = getSlideEls();
    if (!els.length) return;
    centerOnEl(els[N], false);
    markCenter(els[N]);
    setActive(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = useCallback(() => {
    // Ignore scroll events caused by our own (instant) loop recenter
    if (resetting.current) return;

    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const { best, bestIdx } = findClosest();
      markCenter(best);
      const logical = bestIdx % N;
      // Bail out if unchanged so we don't re-render the cards every frame
      setActive((prev) => (prev === logical ? prev : logical));
    });

    // Once scrolling settles, if we're in the first or last copy, recenter on
    // the equivalent card in the middle copy. Centering on the actual element
    // lands exactly on a snap point, so mandatory snapping can't bounce us.
    clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(() => {
      const els = getSlideEls();
      if (!els.length) return;
      const { bestIdx } = findClosest();
      if (bestIdx >= N && bestIdx < 2 * N) return; // already in middle copy

      const target = els[(bestIdx % N) + N];
      resetting.current = true;
      centerOnEl(target, false);
      markCenter(target);
      // Release the guard after the browser has applied the jump + re-snap
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          resetting.current = false;
        })
      );
    }, 140);
  }, [findClosest, markCenter, getSlideEls, centerOnEl]);

  const step = useCallback(
    (dir) => {
      const els = getSlideEls();
      const { bestIdx } = findClosest();
      const target = els[bestIdx + dir];
      if (target) centerOnEl(target, true);
    },
    [getSlideEls, findClosest, centerOnEl]
  );

  return (
    <section
      id="divisions"
      className="snap-section relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0a1428] via-[#11234B] to-[#0a1428] py-20"
    >
      <motion.div
        className="mx-auto w-full max-w-6xl px-6 text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3
          className="font-roboto font-light text-[clamp(2.25rem,5vw,3.25rem)] mb-4 text-white"
          style={{ letterSpacing: "-0.02em" }}
        >
          <span className="text-[#2C95D2]">{t("ALFA", "ألفا")}</span>{" "}
          {t("Divisions", "قطاعات")}
        </h3>
        <span className="mx-auto mb-6 block h-px w-16 bg-[#2C95D2]" />
        <p className="font-roboto font-light text-lg text-white/70 max-w-2xl mx-auto">
          {t(
            "Expert teams and robust systems drive each division to deliver projects that are timely, safe, and value-packed.",
            "تقود الفرق الخبيرة والأنظمة المتينة كل قطاع لتسليم مشاريع تتسم بالالتزام بالمواعيد والسلامة والقيمة العالية."
          )}
        </p>
      </motion.div>

      <div className="relative">
        {/* Track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="div-track no-scrollbar flex gap-6 md:gap-8 overflow-x-auto px-[calc(50%-9rem)] sm:px-[calc(50%-10rem)] md:px-[calc(50%-11rem)] py-8 cursor-grab select-none"
        >
          {slides.map((card, i) => (
            <div
              key={i}
              data-slide
              className="div-slide shrink-0 w-[18rem] sm:w-[20rem] md:w-[22rem]"
            >
              <DivisionCard
                icon={
                  <img
                    src={card.logo}
                    alt={t(card.iconAlt, card.iconAltAr)}
                    className="h-12 w-auto filter invert brightness-10"
                  />
                }
                title={t(card.title, card.titleAr)}
                description={t(card.description, card.descriptionAr)}
                label={t(card.label, card.labelAr)}
                bgImage={card.bgImage}
                path={card.path}
                isCenter
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label={t("Previous division", "القطاع السابق")}
          className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#0a1428]/50 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-[#2C95D2] hover:border-[#2C95D2]"
        >
          <FaChevronLeft className="text-sm rtl-flip" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label={t("Next division", "القطاع التالي")}
          className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#0a1428]/50 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-[#2C95D2] hover:border-[#2C95D2]"
        >
          <FaChevronRight className="text-sm rtl-flip" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {cards.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i ? "w-6 bg-[#2C95D2]" : "w-1.5 bg-white/25"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default OurDivisions;
