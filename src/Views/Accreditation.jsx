import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/SustainbilityBG.png";
import AccrediationsImage from "../Assets/Images/AccrediationsImage.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
const cardAnimation = {
hidden: { opacity: 0, y: 40 },
visible: { opacity: 1, y: 0 },
};
const Accreditation = ({ embedded }) => {
  useEffect(() => {
    if (embedded) return;
    window.scrollTo(0, 0);
  }, []);
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
                Compliance & Accreditations
              </h1>
            </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      )}
      <div className="max-w-6xl mx-auto px-6 py-10 text-white">
        <motion.div
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <p className="mb-6 text-justify text-sm sm:text-base text-white/75">
            We are fully committed to maintaining compliance with industry
            standards and best practices. ALFA Group is proud to hold multiple
            ISO certifications and adhere to global quality standards across all
            divisions. Our processes are aligned with industry-specific
            regulations, ensuring that we meet the highest levels of safety,
            environmental, and quality standards. This commitment to compliance
            and accreditation reflects our dedication to delivering reliable,
            high-quality services to our clients while maintaining operational
            efficiency and safety.
          </p>
        </motion.div>
        {/* Logo wall on a white surface so the dark logos stay visible */}
        <div className="mt-12 rounded-2xl bg-white p-8 sm:p-12 ring-1 ring-white/10">
          <img
            src={AccrediationsImage}
            alt="Accreditation Certificates"
            className="mx-auto h-auto max-w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Accreditation;
