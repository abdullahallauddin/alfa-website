import React, { useEffect } from "react";
import marineImage from "../Assets/Images/facility2a.png";
import backgroundImage from "../Assets/Images/main6a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { Accordion, AccordionItem } from "../Components/Accordion";
import { motion } from "framer-motion";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const FacilityManagement = ({ embedded }) => {
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
              <h1 className="text-5xl font-bold">
                Facility Management Division
              </h1>
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
                Facility Management <span className="text-[#2C95D2]">Division</span>
              </h1>
              <div className="space-y-4 text-sm leading-relaxed text-justify text-white/80">
                <p>
                  <span className="font-bold">ALFA's</span> Facility Management
                  Division ensures smooth operation and maintenance of buildings
                  and industrial sites, with a customer-focused approach to
                  meeting business goals. Our services include HVAC, electrical,
                  plumbing maintenance, energy and waste management, janitorial
                  services, landscaping, and catering, all designed for safety,
                  efficiency and sustainability.
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6">
                <h3 className="font-semibold text-white mb-2">
                  Our Core Services
                </h3>
                <Accordion defaultOpen={[0]}>
                  <AccordionItem id={0} title="Technical Operations & Maintenance">
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <p>
                        We offer Proactive and Reactive maintenance for HVAC and MEP
                        systems:
                      </p>
                      <li>
                        <span className="font-bold">Proactive maintenance:</span>{" "}
                        Preventive, Predictive, Condition-Based, Scheduled, Planned,
                        and Routine maintenance.
                      </li>
                      <li>
                        <span className="font-bold">Reactive Maintenance:</span>{" "}
                        Emergency and Corrective repairs.
                      </li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={1} title="Office & Mover Services">
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>
                        <span className="font-bold">
                          Space Planning & Move Management:
                        </span>{" "}
                        Office setup, relocation, and reorganization.
                      </li>
                      <li>
                        <span className="font-bold">Office Relocation:</span>{" "}
                        Packing, transport, and reinstallation of office equipment.
                        Internal Moves: Departmental and workstation reorganization.
                      </li>
                      <li>
                        <span className="font-bold">Internal Moves:</span>{" "}
                        Departmental and workstation reorganization.
                      </li>
                      <li>
                        <span className="font-bold">
                          Furniture Disassembly & Assembly:
                        </span>{" "}
                        Professional handling during moves.
                      </li>
                      <li>
                        <span className="font-bold">Storage Solutions: </span>{" "}
                        Secure short- and long-term storage.
                      </li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={2} title="Soft Services">
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>
                        <span className="font-bold">Janitorial Services:</span>{" "}
                        Regular cleaning of hygienic spaces.
                      </li>
                      <li>
                        <span className="font-bold">Landscaping: </span> Facility
                        aesthetics maintenance.
                      </li>
                      <li>
                        <span className="font-bold">Waste Management:</span>{" "}
                        Sustainable disposal and recycling.
                      </li>
                      <li>
                        <span className="font-bold">Bio-Clean Services:</span>{" "}
                        Specialized cleaning for sensitive environments.
                      </li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={3} title="Catering Services">
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>
                        Professional catering for corporate events and daily office
                        meals, enhancing workplace satisfaction
                      </li>
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

export default FacilityManagement;
