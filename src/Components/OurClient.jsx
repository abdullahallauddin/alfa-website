import React from "react";
import { motion } from "framer-motion";

// Import logos
import logo2 from "../Assets/Images/logo2.png";
import logo3 from "../Assets/Images/logo3.png";
import logo4 from "../Assets/Images/logo4.png";
import logo5 from "../Assets/Images/logo5.png";
import logo6 from "../Assets/Images/logo6.png";
import logo7 from "../Assets/Images/logo7.png";
// import logo8 from "../Assets/Images/logo8.png";
import logo9 from "../Assets/Images/logo9.png";
import logo10 from "../Assets/Images/logo10.png";
import logo11 from "../Assets/Images/logo11.png";
import logo12 from "../Assets/Images/logo12.png";
import logo13 from "../Assets/Images/logo13.png";
import logo14 from "../Assets/Images/logo14.png";
import logo15 from "../Assets/Images/logo15.png";
import logo16 from "../Assets/Images/logo16.png";
import logo17 from "../Assets/Images/logo17.png";
import logo19 from "../Assets/Images/logo19.png";

const logos = [
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo19,
];

const EASE = [0.22, 1, 0.36, 1];

const OurClients = () => {
  return (
    <section
      id="clients"
      className="snap-section relative min-h-screen w-full flex items-center overflow-hidden bg-[#eef2f7] py-24"
    >
      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h1
            className="font-roboto font-light text-[clamp(2.25rem,5vw,3.25rem)] text-[#13294a]"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="text-[#2C95D2]">OUR</span> CLIENTS
          </h1>
          <span className="mt-5 mx-auto block h-px w-16 bg-[#2C95D2]" />
        </motion.div>

        {/* Ruled logo grid — natural logos, grayscale → colour on hover, no boxes */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-[#13294a]/10 rounded-2xl overflow-hidden">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: (index % 4) * 0.06 + Math.floor(index / 4) * 0.04,
                ease: EASE,
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="group flex items-center justify-center border-b border-r border-[#13294a]/10 px-6 py-9 sm:py-11 transition-colors duration-300 hover:bg-white"
            >
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="max-h-10 md:max-h-12 w-auto object-contain grayscale opacity-75 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
