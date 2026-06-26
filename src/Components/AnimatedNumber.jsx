import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

/**
 * Counts up to a number when scrolled into view. Pass a display value like
 * "70+" or "185M+" — the digits animate, the suffix stays.
 */
const AnimatedNumber = ({ value, className = "" }) => {
  const { ref, inView } = useInView({ threshold: 0.6, triggerOnce: true });
  const numeric = parseFloat(String(value).replace(/[^\d.]/g, "")) || 0;
  const suffix = String(value).replace(/[0-9.]/g, "");
  return (
    <span ref={ref} className={className}>
      {inView ? <CountUp end={numeric} duration={2} useEasing /> : 0}
      {suffix}
    </span>
  );
};

export default AnimatedNumber;
