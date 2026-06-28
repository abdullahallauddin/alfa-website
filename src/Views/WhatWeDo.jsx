import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import backgroundImage from "../Assets/Images/main-background.jpg";
import PageBanner from "../Components/PageBanner";
import SectionNav from "../Components/SectionNav";
import { useT } from "../i18n/i18n";

import MarineOffshoreDivision from "./MarineOffshoreDivision";
import ConstructionDivision from "./ConstructionDivision";
import FabricationDivision from "./FabricationDivision";
import TradingDivision from "./TradingDivision";
import ICTDivision from "./ICTDivision";
import FacilityManagement from "./FacilityManagement";
import Joinery from "./Joinery";

// Tab keys double as anchor ids for deep-linking (e.g. /what-we-do#trading).
const DIVISIONS = [
  { key: "marine-offshore", label: "Marine & Offshore", labelAr: "البحرية والمنشآت البحرية", Component: MarineOffshoreDivision },
  { key: "construction", label: "Construction", labelAr: "الإنشاءات", Component: ConstructionDivision },
  { key: "fabrication-machining", label: "Fabrication & Machining", labelAr: "التصنيع والتشكيل المعدني", Component: FabricationDivision },
  { key: "trading", label: "Trading", labelAr: "التجارة والتوريد", Component: TradingDivision },
  { key: "ict", label: "ICT", labelAr: "تقنية المعلومات والاتصالات", Component: ICTDivision },
  { key: "facility-management", label: "Facility Management", labelAr: "إدارة المرافق", Component: FacilityManagement },
  { key: "joinery", label: "Joinery", labelAr: "أعمال النجارة", Component: Joinery },
];

const indexFromHash = (hash) => {
  const key = (hash || "").replace(/^#/, "");
  const i = DIVISIONS.findIndex((d) => d.key === key);
  return i === -1 ? 0 : i;
};

const WhatWeDo = () => {
  const t = useT();
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(() => indexFromHash(location.hash));
  const tablistRef = useRef(null);

  // Scroll to top on mount; respond to deep-link hash changes.
  useEffect(() => {
    setActive(indexFromHash(location.hash));
  }, [location.hash]);

  const selectTab = (i) => {
    setActive(i);
    const key = DIVISIONS[i].key;
    if (typeof window !== "undefined" && window.history?.replaceState) {
      window.history.replaceState(null, "", `#${key}`);
    }
    // Keep the active tab visible on horizontally-scrollable mobile bars.
    const node = tablistRef.current?.querySelector(`[data-tab-index="${i}"]`);
    node?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const onKeyDown = (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = (active + dir + DIVISIONS.length) % DIVISIONS.length;
    selectTab(next);
    tablistRef.current
      ?.querySelector(`[data-tab-index="${next}"]`)
      ?.focus();
  };

  const ActiveComponent = DIVISIONS[active].Component;

  return (
    <div className="text-white">
      {/* HERO */}
      <PageBanner image={backgroundImage}>
        {t("What We ", "")}<span className="text-[#2C95D2]">{t("Do", "أعمالنا")}</span>
      </PageBanner>

      {/* Section nav */}
      <SectionNav
        items={DIVISIONS.map((d) => ({ key: d.key, label: t(d.label, d.labelAr) }))}
        activeKey={DIVISIONS[active].key}
        onSelect={(key) => selectTab(DIVISIONS.findIndex((d) => d.key === key))}
      />

      {/* PANEL */}
      <div className="mx-auto max-w-6xl px-6 md:px-10 pt-10" data-no-reveal>
        <motion.div
          key={DIVISIONS[active].key}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ActiveComponent embedded />
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
