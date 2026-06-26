import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const EASE = [0.22, 1, 0.36, 1];

// Sectors as already stated in the existing site content (Group Overview).
const sectors = [
  "Oil & Gas",
  "Renewable Energy",
  "Marine & Offshore",
  "Power & Utilities",
  "Defense",
  "Construction & Infrastructure",
  "Petrochemical",
  "Industrial Plants",
  "Commercial Projects",
];

const IndustriesComp = () => {
  return (
    <section
      id="industries"
      className="snap-section relative min-h-screen w-full flex items-center overflow-hidden bg-gradient-to-br from-[#0a1428] via-[#11234B] to-[#0a1428]"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[55vh] w-[55vh] -translate-x-1/3 rounded-full bg-[#2C95D2]/[0.07] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-2xl"
        >
          <h2
            className="font-roboto font-light text-[clamp(2.25rem,5vw,3.25rem)] text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Industries <span className="text-[#2C95D2]">We Serve</span>
          </h2>
          <span className="mt-5 block h-px w-16 bg-[#2C95D2]" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10 rounded-2xl overflow-hidden">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.06 + Math.floor(i / 3) * 0.05,
                ease: EASE,
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative flex items-center gap-4 border-b border-r border-white/10 px-6 py-7 transition-colors duration-300 hover:bg-white/[0.05]"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#2C95D2]/50 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#2C95D2]" />
              <span className="font-roboto text-lg text-white/85 transition-colors duration-300 group-hover:text-white">
                {sector}
              </span>
              <FaArrowRight className="ml-auto -translate-x-2 text-sm text-transparent transition-all duration-300 group-hover:translate-x-0 group-hover:text-[#2C95D2]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesComp;
