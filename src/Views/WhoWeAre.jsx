import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import heroImage from "../Assets/Images/GroupOverview.jpeg";
import PageBanner from "../Components/PageBanner";
import SectionNav from "../Components/SectionNav";
import { useT } from "../i18n/i18n";

import OurDivisionsComponent from "../Components/OurDivisionsComponent";
import OurStatement from "./OurStatement";
import CoreValues from "./CoreValues";
import Strategy from "./Strategy";
import OurCulture from "./OurCulture";
import Facility from "./Facility";
import Capability from "./Capability";
import Accreditation from "./Accreditation";

const NAV_OFFSET = 140; // global navbar (76) + sticky section sub-nav

const SECTIONS = [
  { id: "group-overview", title: "Group Overview", titleAr: "نبذة عن المجموعة", render: () => <OurDivisionsComponent part="text" /> },
  { id: "our-divisions", title: "Our Divisions", titleAr: "قطاعاتنا", render: () => <OurDivisionsComponent part="cards" /> },
  { id: "mission-vision-goals", title: "Mission, Vision & Goals", titleAr: "الرسالة والرؤية والأهداف", render: () => <OurStatement embedded /> },
  { id: "core-values", title: "Core Values", titleAr: "قيمنا الأساسية", render: () => <CoreValues embedded /> },
  { id: "our-strategy", title: "Our Strategy", titleAr: "استراتيجيتنا", render: () => <Strategy embedded /> },
  { id: "our-culture", title: "Our Culture", titleAr: "ثقافتنا", render: () => <OurCulture embedded /> },
  { id: "our-facilities", title: "Our Facilities", titleAr: "مرافقنا", render: () => <Facility embedded /> },
  { id: "our-capabilities", title: "Our Capabilities", titleAr: "قدراتنا", render: () => <Capability embedded /> },
  { id: "accreditations", title: "Accreditations", titleAr: "الاعتمادات والشهادات", render: () => <Accreditation embedded /> },
];

const WhoWeAre = () => {
  const t = useT();
  const location = useLocation();
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  const scrollToSection = useCallback(
    (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    },
    [reduce]
  );

  // Scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: `-${NAV_OFFSET + 20}px 0px -55% 0px`, threshold: [0.05, 0.2, 0.5] }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Deep-link via hash
  useEffect(() => {
    const hash = location.hash ? location.hash.replace("#", "") : "";
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const t = setTimeout(() => scrollToSection(hash), 90);
    return () => clearTimeout(t);
  }, [location.hash, scrollToSection]);

  return (
    <div className="relative">
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[1002] h-[3px] origin-left bg-[#2C95D2]"
        aria-hidden="true"
      />

      {/* ===== Hero ===== */}
      <PageBanner image={heroImage}>
        {t("Who We ", "من ")}<span className="text-[#2C95D2]">{t("Are", "نحن")}</span>
      </PageBanner>

      {/* ===== Sticky section sub-nav ===== */}
      <SectionNav
        items={SECTIONS.map(({ id, title, titleAr }) => ({ key: id, label: t(title, titleAr) }))}
        activeKey={activeId}
        onSelect={(id) => {
          setActiveId(id);
          scrollToSection(id);
        }}
      />

      {/* ===== Sections ===== */}
      <div>
        {SECTIONS.map(({ id, title, titleAr, render }, i) => {
          const banded = i % 2 === 1;
          return (
            <section
              key={id}
              id={id}
              className={`relative scroll-mt-[140px] ${
                banded ? "border-y border-white/[0.06] bg-white/[0.018]" : ""
              }`}
            >
              <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 lg:py-24">
                <motion.header
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-10 lg:mb-14"
                >
                  <h2
                    className="font-roboto font-light text-white"
                    style={{ fontSize: "clamp(1.75rem,3.6vw,2.6rem)", letterSpacing: "-0.02em", textWrap: "balance" }}
                  >
                    {t(title, titleAr)}
                  </h2>
                  <span className="mt-4 block h-px w-16 bg-[#2C95D2]" />
                </motion.header>
                <div className="[&_.py-16]:!py-0 [&_.py-10]:!py-0 [&_.mt-24]:!mt-0 [&_.mt-12]:!mt-6 [&_.mb-12]:!mb-6 [&_.pb-24]:!pb-0">
                  {render()}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default WhoWeAre;
