import React from "react";
import marineImage from "../Assets/Images/construction2a.png";
import backgroundImage from "../Assets/Images/main2a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const ConstructionDivision = ({ embedded }) => {
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
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl font-bold">Construction Division</h1>
            </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      )}
      <div className="relative text-white">
          {/* Text Section */}
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
        <div className="max-w-9xl mx-auto py-12 grid md:grid-cols-2 gap-6 items-stretch">
            <div className="">
              <h2 className="text-sm font-semibold text-[#2C95D2] uppercase mb-2">
                What We Do
              </h2>
              <h1
                className="text-2xl sm:text-3xl font-roboto font-light uppercase mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                CONSTRUCTION <span className="text-[#2C95D2]">DIVISION</span>
              </h1>
              <div className="space-y-4 text-sm leading-relaxed text-justify text-white/80">
                <p>
                  <span className="font-bold">ALFA</span> Construction Division
                  delivers high-quality services in Civil Construction and MEP
                  Contracting. We specialize in Sub-Contracting and/or Lump Sum
                  Turnkey (LSTK) Projects, tailored to Oil & Gas, Renewable
                  Energy, Power, Defense, Construction, Industrial, Commercial,
                  and Entertainment & Sports Sectors.
                  <span className="font-bold"></span> Our extensive portfolio
                  includes the construction of buildings, roads, railways,
                  utility projects, and various other civil engineering works,
                  always tailored to meet the specific needs of each sector.
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6">
                <h3 className="font-semibold text-white mb-2">
                  Our Core Services
                </h3>
                <ul className="grid gap-4 sm:grid-cols-2 text-sm text-white/80">
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">Construction of Temporary Camp Facilities (TCF)</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">Prefab Porta Cabin Buildings Fabrication</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">Road Construction and Asphalt Paving</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">Road Marking & Lining</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">Laboratory Design & Construction</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">Building Structure Construction Services</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">Renovation of Commercial and Industrial Buildings</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">HVAC Services & Duct Fabrication</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">Firefighting Systems</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">Thermal Insulation & Exhaust System Services</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">Parking Shades Fabrication</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">Waterproofing Solutions</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">Flooring Solutions</li>
                </ul>
              </div>
            </div>
          

          {/* Image Section */}
          <div className="relative flex">
            <img
              src={marineImage}
              alt="Marine & Offshore"
              className="w-full h-full object-cover rounded-2xl ring-1 ring-white/10 min-h-[16rem] md:min-h-[20rem]"
            />
          </div>
        </div>
          </motion.div>
      </div>
    </>
  );
};

export default ConstructionDivision;
