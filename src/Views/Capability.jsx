import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/our-capabilities.jpeg";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const Capability = ({ embedded }) => {
  useEffect(() => {
    if (embedded) return;
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    "Engineering, Procurement, Fabrication & Construction (EPFC)",
    "Lump Sum Turnkey (LSTK) Project Execution",
    "Porta Cabin and Modular Building Solutions",
    "Marine & Offshore Technical Services",
    "Specialized Civil and MEP construction solutions",
    "Specialized Steel Fabrication and Machining",
    "Procurement, Trading & Industrial Supplies",
    "ICT & ELV Systems, Structured Cabling, and Smart Solutions",
    "Facility Management and Maintenance",
    "Joinery Works and Custom Fit-Outs",
    "Heavy Equipment Rental and Logistics Support",
  ];

  return (
    <>
      {!embedded && (
      <SectionWrapperReverse>
        <div
          className="bg-cover bg-center h-[clamp(18rem,46vh,30rem)] flex items-center justify-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Black overlay */}
          <div className="absolute h-[clamp(18rem,46vh,30rem)] inset-0 bg-black h-96 opacity-60 z-0"></div>
          {/* Overlay Content */}
          <div className="relative flex flex-col items-center justify-center h-full text-white">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl font-roboto font-light text-white" style={{ letterSpacing: "-0.02em" }}>Our <span className="text-[#2C95D2]">Capabilities</span></h1>
            </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      )}
      <motion.div
        variants={cardAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-10 text-white/75">
          <p className="mb-8 text-justify text-sm sm:text-base">
            ALFA GROUP offers end-to-end capabilities across multiple sectors,
            allowing us to deliver tailored and comprehensive solutions under
            one roof. Our expertise spans:
          </p>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none">
            {capabilities.map((capability, index) => (
              <li
                key={index}
                className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-[#2C95D2]/50"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#2C95D2] transition-transform duration-300 group-hover:scale-150" />
                <strong className="font-roboto text-white text-sm sm:text-base">
                  {capability}
                </strong>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-justify text-sm sm:text-base">
            Our integrated approach, skilled workforce, modern systems, and
            quality focus allow us to serve a wide range of industries including
            Oil & Gas, Power, Marine, Construction, Industrial Plants,
            Infrastructure, and Commercial Sectors.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Capability;
