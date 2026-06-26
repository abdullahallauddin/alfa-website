import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/supplier.png";
import { motion } from "framer-motion";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";

// import AboutUSComp from '../Components/AboutUSComp';
const Supplier = ({ embedded }) => {
  useEffect(() => {
    if (embedded) return;
    window.scrollTo(0, 0);
  }, [embedded]);
  return (
    <>
      {!embedded && (
      <SectionWrapperReverse>
        <div
          className="bg-cover bg-center h-[clamp(18rem,46vh,30rem)] flex items-center justify-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Overlay Content */}
          <div className="relative flex flex-col items-center justify-center h-full text-white">
            <motion.div
              // className="md:w-2/2 mb-6 md:mb-0"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl font-roboto font-light text-center text-white" style={{ letterSpacing: "-0.02em" }}>
                Become a <span className="text-[#2C95D2]">Supplier</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      )}
      <motion.div
        className="md:w-2/2 mb-6 md:mb-0"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="w-full py-6 md:py-10">
          <h1
            className="text-4xl font-roboto font-light mb-4 text-center md:text-left text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Become a <span className="text-[#2C95D2]">Supplier</span>
          </h1>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">
          <p className="text-lg mt-4 text-justify text-white/75">
            Maintaining a robust and dependable supplier network is integral to
            our continued success. At ALFA, we foster long lasting relationships
            with our partners and strive to create an ecosystem where everyone
            can thrive together. Join us to unlock boundless opportunities in
            the Middle East region and worldwide and propel your future growth.
          </p>
          <p className="text-lg mt-4 text-justify text-white/75">
            These documents must be filled in and attached to the{" "}
            <span className="font-bold text-white">
              ALFA Supplier Registration Portal.
            </span>
          </p>
          <a
            href="https://books.zohosecure.com/portal/alfamarine/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-lg font-bold shadow-lg
    text-white bg-[#2196F3] transition-all duration-500 cursor-pointer group overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-[#2196F3] transition duration-500">
              Supplier Portal
            </span>
            <svg
              xmlns="https://www.w3.org/2000/svg"
              className="w-4 h-4 relative z-10 group-hover:text-[#2196F3] transition duration-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <span className="absolute inset-0 bg-[#20376D] transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 z-0"></span>
          </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Supplier;
