import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import heroImage from "../Assets/Images/download-center.png";
import PageBanner from "../Components/PageBanner";
import SectionNav from "../Components/SectionNav";
import NewsSection from "./NewsSection";
import DownloadCenter from "./DownloadCenter";
import { useT } from "../i18n/i18n";

const TAB_LABELS_AR = {
  News: "الأخبار",
  "Download Center": "مركز التحميل",
};

const TABS = [
  { key: "news", label: "News", content: <NewsSection embedded /> },
  {
    key: "downloads",
    label: "Download Center",
    content: <DownloadCenter embedded />,
  },
];

const keyFromHash = (hash) => {
  const raw = (hash || "").replace(/^#/, "");
  return TABS.some((t) => t.key === raw) ? raw : TABS[0].key;
};

const MediaCenter = () => {
  const t = useT();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const tabRefs = useRef([]);

  const [activeKey, setActiveKey] = useState(() => keyFromHash(location.hash));

  // Sync from URL hash (mount + external hash changes).
  useEffect(() => {
    setActiveKey(keyFromHash(location.hash));
  }, [location.hash]);

  // Skip the embedded views' own scroll handling; reset to top once here.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectTab = (key) => {
    setActiveKey(key);
    navigate(`#${key}`, { replace: false });
  };

  const activeIndex = Math.max(
    0,
    TABS.findIndex((t) => t.key === activeKey)
  );

  const onKeyDown = (e) => {
    let next = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown")
      next = (activeIndex + 1) % TABS.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp")
      next = (activeIndex - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    if (next === null) return;
    e.preventDefault();
    selectTab(TABS[next].key);
    tabRefs.current[next]?.focus();
  };

  const active = TABS[activeIndex];

  return (
    <div className="inner-page min-h-screen bg-[#0a1124] text-white">
      {/* HERO */}
      <PageBanner image={heroImage}>
        {t("Media ", "المركز ")}<span className="text-[#2C95D2]">{t("Center", "الإعلامي")}</span>
      </PageBanner>

      {/* Section nav */}
      <SectionNav
        items={TABS.map((tab) => ({
          key: tab.key,
          label: t(tab.label, TAB_LABELS_AR[tab.label]),
        }))}
        activeKey={activeKey}
        onSelect={(key) => selectTab(key)}
      />

      {/* Panel */}
      <div className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10" data-no-reveal>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {active.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MediaCenter;
