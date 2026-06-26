import React, { useEffect } from "react";
import marineImage from "../Assets/Images/fabrication2a.png";
import backgroundImage from "../Assets/Images/main5a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { Accordion, AccordionItem } from "../Components/Accordion";
import { motion } from "framer-motion";
const cardAnimation = {
hidden: { opacity: 0, y: 40 },
visible: { opacity: 1, y: 0 },
};
const FabricationDivision = ({ embedded }) => {
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
                Fabrication & Machining Division
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
                Fabrication & Machining <span className="text-[#2C95D2]">Division</span>
              </h1>
              <div className="space-y-4 text-sm leading-relaxed text-justify text-white/80">
                <p>
                  <span className="font-bold">
                    ALFA’s Fabrication & Machining Division
                  </span>{" "}
                  offers comprehensive machining and fabrication services,
                  equipped with advanced machinery and a skilled workforce. Our
                  10,000 SQM facility is designed to handle large-scale
                  operations across various industries, with a focus on
                  delivering high-quality, efficient, and reliable production.
                  We provide a full range of services to meet your machining and
                  fabrication requirements, ensuring precision and quality in
                  every project.
                </p>
                <p>
                  All services are executed in-house within our fully equipped
                  facility, ensuring complete quality control and efficiency. We
                  specialize in meeting the complex needs of industries such as
                  oil & gas, petrochemical, marine, and construction.
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6">
                <h3 className="font-semibold text-white mb-2">
                  Our Core Services
                </h3>
                <Accordion defaultOpen={[0]}>
                  <AccordionItem id={0} title={<span className="font-bold">Fabrication : </span>}>
                    Steel
                    structures, custom metal components.
                  </AccordionItem>
                  <AccordionItem id={1} title={<span className="font-bold">Welding : </span>}>
                    MIG, TIG, Stick
                    Welding, custom solutions for high-strength joints
                  </AccordionItem>
                  <AccordionItem id={2} title={<span className="font-bold">Machining : </span>}>
                    CNC Cutting,
                    Steel Bending, Milling & Drilling, Laser & Plasma Cutting,
                    Turning (Turret Lathe), Line Boring, Broaching, Surface &
                    Blanchard Grinding.
                  </AccordionItem>
                  <AccordionItem
                    id={3}
                    title={
                      <span className="font-bold">
                        Replacement & Spare Parts:
                      </span>
                    }
                  >
                    Shafts, Rollers, Bearings, Trunnions, Housings, Custom Parts
                  </AccordionItem>
                  <AccordionItem id={4} title={<span className="font-bold">Blasting and Painting : </span>}>
                    Surface preparation, epoxy coatings, corrosion-resistant
                    coatings
                  </AccordionItem>
                  <AccordionItem id={5} title={<span className="font-bold">Hydraulic Repair : </span>}>
                    Mobile
                    and industrial services, troubleshooting, repair, and
                    maintenance
                  </AccordionItem>
                  <AccordionItem id={6} title={<span className="font-bold">Inspection Services : </span>}>
                    Welding Inspection (VT, PT, MT, UT, RT, MPI), Material
                    Testing, Dimensional Inspection, Surface Roughness Testing,
                    Non-Destructive Testing (NDT)
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

export default FabricationDivision;
