import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// part: "both" (default) | "text" (overview paragraph only) | "cards" (heading + division cards)
const OurDivisionsComponent = ({ part = "both" }) => {
  const showText = part === "both" || part === "text";
  const showCards = part === "both" || part === "cards";

  return (
    <>
      {showText && (
        <motion.div
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {part === "both" && (
            <h3
              className="font-roboto text-3xl md:text-[2.75rem] font-light mb-4 text-white text-center"
              style={{ letterSpacing: "-0.02em" }}
            >
              Our <span className="text-[#2C95D2]">Divisions</span>
            </h3>
          )}
          <p
            className="font-roboto font-light text-lg leading-relaxed text-white/80"
            style={{ textWrap: "pretty" }}
          >
            ALFA Group is a steadily growing multi-division company
                  supporting major industries across the Middle East. We specialize
                  as a reliable subcontractor, delivering high-quality Engineering
                  Support, Procurement Assistance, Fabrication & Construction(EPFC)
                  services tailored to our Client's Project Needs Our capabilities
                  span a wide range of sectors, including Oil & Gas, Renewable
                  Energy, Marine & Offshore, Power & Utilities, Defense,
                  Construction & Infrastructure, Petrochemical, Industrial Plants,
                  and Commercial Projects. ALFA Group operates with a strong focus
                  on quality, safety, and client satisfaction, backed by ISO
                  certifications and adherence to international standards. We invest
                  continuously in skilled manpower, advanced technologies, and
                  operational excellence to support the success of our clients’
                  projects. Each division is managed by experienced teams and
                  operates under robust systems to ensure timely, safe, and
                  value-driven project delivery.
          </p>
        </motion.div>
      )}

      {showCards && <ServiceCard carousel />}
    </>
  );
};

export default OurDivisionsComponent;
