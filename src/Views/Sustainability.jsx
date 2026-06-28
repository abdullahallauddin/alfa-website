import React, { useEffect, useState, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import heroImage from "../Assets/Images/env-responsibility.png";
import PageBanner from "../Components/PageBanner";
import SectionNav from "../Components/SectionNav";

import EnvironmentalResponsability from "./EnvironmentalResponsability";
import HSEPolicy from "./HSEPolicy";
import QualityAssurancePolicy from "./QualityAssurancePolicy";
import EthicsCompliance from "./EthicsCompliance";
import { useT } from "../i18n/i18n";

// One entry per policy. The `key` values are the EXACT anchor ids used in the
// URL hash (e.g. /sustainability#hse-policy).
const TABS = [
  {
    key: "environmental-responsibility",
    label: "Environmental Responsibility",
    labelAr: "المسؤولية البيئية",
    render: () => <EnvironmentalResponsability embedded />,
  },
  {
    key: "hse-policy",
    label: "Health, Safety & Environmental Policy",
    labelAr: "سياسة الصحة والسلامة والبيئة",
    render: () => <HSEPolicy embedded />,
  },
  {
    key: "quality-assurance",
    label: "Quality Assurance Policy",
    labelAr: "سياسة ضمان الجودة",
    render: () => <QualityAssurancePolicy embedded />,
  },
  {
    key: "ethics-compliance",
    label: "Ethics and Compliance",
    labelAr: "الأخلاقيات والامتثال",
    render: () => <EthicsCompliance embedded />,
  },
];

const indexForHash = (hash) => {
  const key = (hash || "").replace(/^#/, "");
  const i = TABS.findIndex((t) => t.key === key);
  return i === -1 ? 0 : i;
};

const Sustainability = () => {
  const t = useT();
  const location = useLocation();
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const [active, setActive] = useState(() => indexForHash(location.hash));
  const tabRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Keep the active tab in sync if the hash changes (e.g. nav link, back/forward).
  useEffect(() => {
    setActive(indexForHash(location.hash));
  }, [location.hash]);

  const selectTab = useCallback(
    (i) => {
      setActive(i);
      navigate(`#${TABS[i].key}`, { replace: false });
    },
    [navigate]
  );

  // Roving-tabindex keyboard navigation for the tablist.
  const onKeyDown = (e) => {
    let next = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown")
      next = (active + 1) % TABS.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp")
      next = (active - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    if (next === null) return;
    e.preventDefault();
    selectTab(next);
    const el = tabRefs.current[next];
    if (el) el.focus();
  };

  return (
    <div className="inner-page">
      {/* Hero */}
      <PageBanner image={heroImage}>
        {t(
          <>
            Sustain<span className="text-[#2C95D2]">ability</span>
          </>,
          <>
            الاستدا<span className="text-[#2C95D2]">مة</span>
          </>
        )}
      </PageBanner>

      {/* Section nav */}
      <SectionNav
        items={TABS.map((tab) => ({ key: tab.key, label: t(tab.label, tab.labelAr) }))}
        activeKey={TABS[active].key}
        onSelect={(key) => selectTab(TABS.findIndex((tab) => tab.key === key))}
      />

      {/* Panel */}
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 pt-10" data-no-reveal>
        <AnimatePresence mode="wait">
          <motion.div
            key={TABS[active].key}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            exit={reduce ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {TABS[active].render()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Sustainability;
