import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/eac2a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const EthicsCompliance = ({ embedded }) => {
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
          <div className="absolute inset-0 h-110 bg-black/70 h-[clamp(18rem,46vh,30rem)]"></div>
          {/* Overlay Content */}
          <div className="relative flex flex-col items-center justify-center h-full text-white">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-center lg:mt-120 md:mt-90 justify-center min-h-screen text-center sm:block">
                <h1 className="text-5xl font-bold text-white font-roboto font-light" style={{ letterSpacing: "-0.02em" }}>
                  Ethics & <span className="text-[#2C95D2]">Compliance</span>
                </h1>
              </div>
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
        <div className="w-full py-6 md:py-10 max-w-6xl mx-auto">
          <h1
            className="text-4xl font-bold mb-4 text-center md:text-left text-white font-roboto font-light"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ethics & Compliance
          </h1>
          <p className="text-lg mt-4 text-justify text-white/75">
            At ALFA, we understand the urgent environmental challenges facing
            the world today, including climate change, resource depletion, waste
            management, and pollution. These issues not only impact our daily
            lives but also influence the way we do business. In response to
            these challenges, we are committed to implementing sustainable
            practices that reduce our environmental footprint and contribute to
            a healthier planet.
          </p>
          <p className="text-lg mt-4 text-justify text-white/75">
            Environmental responsibility is a cornerstone of our operations. We
            actively work to preserve natural resources, minimize waste, and
            reduce the environmental impact of our services, products, and
            activities. Our culture of sustainability drives continuous
            innovation, operational efficiency, and a commitment to preserving
            the environment for future generations.
          </p>
          <p className="text-lg mt-4 text-justify text-white/75">
            Our Environmental Management System, certified to the ISO 14001:2015
            standard, guides our efforts to systematically assess and manage our
            environmental impact. We prioritize responsible resource use, energy
            efficiency, and waste minimization, focusing on reuse and recycling
            wherever possible.
          </p>
          <p className="text-lg mt-4 text-justify text-white/75">
            We engage our employees, contractors, and stakeholders in promoting
            environmental stewardship and raise awareness about the importance
            of protecting the environment. Our goal is to prevent pollution,
            reduce emissions, and incorporate sustainable materials in the
            design and delivery of our products and services.
          </p>
          <p className="text-lg mt-4 text-justify text-white/75">
            Through our Green Products Initiative, we aim to integrate
            environmentally friendly materials, systems, and solutions into
            every aspect of our offerings, ensuring that the post-delivery
            impact on the environment is minimized.
          </p>
        </div>
      </motion.div>

      {/* <div
        className="relative bg-cover h-[440px] bg-center pt-8 pb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutinnerbg})` }}
      >
      </div> */}
    </>
  );
};

export default EthicsCompliance;
