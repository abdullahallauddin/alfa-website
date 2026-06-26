import React, { useEffect } from "react";
import marineImage from "../Assets/Images/trading2a.png";
import backgroundImage from "../Assets/Images/main3a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { Accordion, AccordionItem } from "../Components/Accordion";
import { motion } from "framer-motion";
const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const TradingDivision = ({ embedded }) => {
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
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl font-bold">Trading Division</h1>
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
                Trading <span className="text-[#2C95D2]">Division</span>
              </h1>
              <div className="space-y-4 text-sm leading-relaxed text-justify text-white/80">
                <p>
                  <span className="font-bold">ALFA Trading Division</span> is a
                  leading supplier serving the Marine, Offshore, Defense, Oil &
                  Gas, and Industrial sectors. We provide a full range of
                  high-quality products and technical materials that meet
                  international standards.
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6">
                <h3 className="font-semibold text-white mb-2">
                  Our Range of Products and Supplies
                </h3>
                <Accordion defaultOpen={[0]}>
                  <AccordionItem id={0} title="Electrical Equipment and Materials">
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>Power Equipment</li>
                      <li>Switchgear & Circuit Protection</li>
                      <li>Electrical Accessories</li>
                      <li>Lighting & Control</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={1} title="Mechanical Equipment">
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>Valves & Fittings</li>
                      <li>Pumps and Motors</li>
                      <li>Tools & Accessories</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={2} title="Mechanical Equipment">
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>Valves & Fittings</li>
                      <li>Pumps and Motors</li>
                      <li>Tools & Accessories</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={3} title="Process Measurement Instruments">
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>Level, Flow Instrument</li>
                      <li>Temperature Measurement</li>
                      <li>Measurement Instruments</li>
                      <li>Calibration Equipment</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={4} title="IT and Office Equipment">
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>Computers & Accessories</li>
                      <li>Networking & Security</li>
                      <li>Office Furniture and Stationery</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={5} title="General Industrial Supplies">
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>Marine & Offshore Equipment</li>
                      <li>Safety Equipment</li>
                      <li>Deck Equipment and Supplies</li>
                      <li>Lifting & Rigging Equipment</li>
                      <li>Piping and Industrial Components</li>
                      <li>Laboratory Equipment</li>
                      <li>Kitchen & Wet Units</li>
                      <li>Uniforms & Liners</li>
                      <li>Marine and Safety Accessories</li>
                      <li>Storage and Warehousing racking</li>
                      <li>Emergency Response Equipment</li>
                      <li>Safety Signage and Labels</li>
                      <li>Labeling and Packing Materials</li>
                      <li>Packing and Processing Equipment</li>
                      <li>Cleaning Equipment</li>
                      <li>Fire Extinguishers & Suppression Systems</li>
                      <li>Gas Cylinder Replenishment and Recharge</li>
                    </ul>
                  </AccordionItem>
                </Accordion>
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

export default TradingDivision;
