import React, { useEffect } from "react";
import marineImage from "../Assets/Images/marine2a.png";
import backgroundImage from "../Assets/Images/main-background.jpg";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
import SustainbilityBG from "../Assets/Images/SustainbilityBG.png";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const MarineOffshoreDivision = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SectionWrapperReverse>
        <div
          className="bg-cover bg-center h-[90vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Overlay Content */}
          <div className="relative flex flex-col items-center justify-center h-full text-white">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl font-bold">Marine & OffShore</h1>
            </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      <div className="relative bg-[#20376D] text-white">
        <motion.div
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <div className="max-w-9xl mx-auto px-2 py-16 grid md:grid-cols-2 gap-6 items-start">
            {/* Text Section */}
            <div>
              <h2 className="text-sm ml-6 font-semibold text-[#2C95D2] uppercase mb-2">
                What We Do
              </h2>
              <h1 className="text-2xl ml-6 sm:text-3xl font-bold uppercase mb-4">
                Marine & Offshore Division
              </h1>
              <div className="space-y-4 ml-6 text-sm leading-relaxed text-justify">
                <p>
                  <span className="font-bold">ALFA</span> Marine & Offshore
                  Division excels in delivering end-to-end solutions across the
                  marine, offshore, oil & gas, renewable energy and defense
                  industries. Specializing in Lump Sum Turnkey (LSTK) projects,
                  <span className="font-bold"> ALFA</span> specializes in the
                  design, construction and maintenance of marine and offshore
                  living quarters, accommodation modules, and high-integrity
                  technical buildings to the highest international standards
                  e.g. ABS and DNV certifications.
                </p>
                <p>
                  With a strong commitment to excellence and innovation,{" "}
                  <span className="font-bold">ALFA</span> provides
                  state-of-the-art modular building solutions. These services
                  meet rigorous industry standards ATEX, IECEx, NORSOK, NFPA,
                  AWS or any other specific requirements. We collaborate
                  globally with recognized certification bodies, including{" "}
                  <span className="font-bold">ABS, BV, DNV, and Lloyd’s</span>,
                  ensuring the highest levels of safety and quality.
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6 ml-6">
                <h3 className="font-semibold text-white mb-2">
                  Our Core Services
                </h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Modular Buildings Solutions</li>
                  <li>Living Quarters Refurbishment, Upgrade Solutions</li>
                  <li>Architectural, HVAC, Electrical, Plumbing & C</li>
                  <li>Ship Chandling</li>
                  <li>Thermal & Acoustic Insulation Solution</li>
                  <li>Rig, Ship & Hull Repair</li>
                  <li>Welding & Fabrication</li>
                  <li>Abrasive Blasting & Painting</li>
                  <li>Dismantling & Demolition</li>
                  <li>Scaffolding Services for Ships, Vessels & Offshore Rigs</li>
                </ul>
              </div>
            </div>
            {/* Image Section */}
            <div className="flex justify-center items-end mt-9">
              <img
                src={marineImage}
                alt="Marine & Offshore"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default MarineOffshoreDivision;
