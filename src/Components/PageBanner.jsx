import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Consistent page banner used across the site.
 *   <PageBanner image={img}>Who We <span className="text-[#2C95D2]">Are</span></PageBanner>
 */
const PageBanner = ({ image, children, height = "clamp(20rem,50vh,32rem)" }) => {
  const reduce = useReducedMotion();
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height }}
      data-no-reveal
    >
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1428]/55 via-[#0a1428]/78 to-[#0a1428]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_125%,rgba(44,149,210,0.18),transparent_60%)]" />
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 px-6 text-center"
      >
        <h1
          className="font-roboto font-light text-white"
          style={{ fontSize: "clamp(2.25rem,6vw,4rem)", letterSpacing: "-0.03em", textWrap: "balance" }}
        >
          {children}
        </h1>
        <span className="mx-auto mt-5 block h-px w-20 bg-[#2C95D2]" />
      </motion.div>
    </section>
  );
};

export default PageBanner;
