import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import heroImage from "../Assets/Images/contactus1.jpg";
import PageBanner from "../Components/PageBanner";
import SectionNav from "../Components/SectionNav";

import CommercialInquiries from "./CommercialInquiries";
import ContactUs from "./ContactUs";
import CareersInquiries from "./CareersInquiries";
import Supplier from "./Supplier";
import WhistleBlowing from "./WhistleBlowing";

// Five existing views, composed unchanged behind a single hero + tab bar.
// Each sub-view renders with `embedded` so it drops its own hero/scroll reset.
const TABS = [
  {
    key: "contact",
    label: "Contact us",
    content: <ContactUs embedded />,
  },
  {
    key: "commercial-inquiries",
    label: "Commercial Inquiries",
    content: <CommercialInquiries embedded />,
  },
  {
    key: "careers",
    label: "Careers",
    content: <CareersInquiries embedded />,
  },
  {
    key: "become-a-supplier",
    label: "Become a Supplier",
    content: <Supplier embedded />,
  },
  {
    key: "whistleblowing",
    label: "Whistleblowing",
    content: <WhistleBlowing embedded />,
  },
];

const GetInTouch = () => {
  const location = useLocation();
  const prefersReduced = useReducedMotion();
  const tabRefs = useRef([]);

  const initialIndex = useMemo(() => {
    const hash = (location.hash || "").replace(/^#/, "");
    const i = TABS.findIndex((t) => t.key === hash);
    return i >= 0 ? i : 0;
  }, []); // read once on mount

  const [active, setActive] = useState(initialIndex);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sync the active tab when the URL hash changes (e.g. navbar dropdown
  // links while already on this page).
  useEffect(() => {
    const hash = (location.hash || "").replace(/^#/, "");
    const i = TABS.findIndex((t) => t.key === hash);
    if (i >= 0) setActive(i);
  }, [location.hash]);

  const selectTab = (i) => {
    setActive(i);
    // Update the hash without forcing a scroll jump.
    if (typeof window !== "undefined" && window.history) {
      window.history.replaceState(null, "", `#${TABS[i].key}`);
    }
  };

  // Roving-tabindex keyboard support for the tab bar.
  const onKeyDown = (e) => {
    let next = null;
    if (e.key === "ArrowRight") next = (active + 1) % TABS.length;
    else if (e.key === "ArrowLeft") next = (active - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    if (next === null) return;
    e.preventDefault();
    selectTab(next);
    const el = tabRefs.current[next];
    if (el) el.focus();
  };

  return (
    <div className="inner-page bg-[#0a1428] text-white">
      {/* Hero band */}
      <PageBanner image={heroImage}>
        Get In <span className="text-[#2C95D2]">Touch</span>
      </PageBanner>

      {/* Section nav */}
      <SectionNav
        items={TABS.map((t) => ({ key: t.key, label: t.label }))}
        activeKey={TABS[active].key}
        onSelect={(key) => selectTab(TABS.findIndex((t) => t.key === key))}
      />

      {/* Active panel — keyed remount (no exit) so heavy tabs switch instantly */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-6" data-no-reveal>
        <motion.div
          key={TABS[active].key}
          initial={prefersReduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {TABS[active].content}
        </motion.div>
      </div>
    </div>
  );
};

export default GetInTouch;
