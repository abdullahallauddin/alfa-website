import React, { useEffect, useState } from "react";
import { useT } from "../i18n/i18n";
import UpArrow from "../Assets/Icons/up-arrow.svg";

const ScrollToTopButton = () => {
  const t = useT();
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScroll(scrollPercent);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full cursor-pointer z-50 flex items-center justify-center"
      onClick={scrollToTop}
      style={{ backgroundColor: "transparent" }}
    >
      <svg className="absolute w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="43"
          stroke="#d1e9ff"
          strokeWidth="6"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#20376D"
          strokeWidth="6"
          fill="none"
          strokeDasharray="283"
          strokeDashoffset={283 - (283 * scroll) / 100}
          transform="rotate(-90 50 50)"
          strokeLinecap="round"
        />
      </svg>
      <img src={UpArrow} alt={t("Scroll to top", "العودة إلى الأعلى")} className="w-7 h-7 z-10" />
    </div>
  );
};

export default ScrollToTopButton;
