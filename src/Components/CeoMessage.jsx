import React from "react";
import { motion } from "framer-motion";

const CeoMessage = () => {
  return (
    <div className="container mx-auto">
      <div className="px-8 md:px-12 mt-16 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1
            className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left"
            style={{ color: "#20376D" }}
          >
            CEO Message
          </h1>
          <div
            className="text-sm md:text-base text-justify space-y-4 leading-relaxed"
            style={{ color: "#20376D" }}
          >
            <p>
              At ALFA Group, we are driven by a simple yet powerful vision: to
              provide our clients with exceptional services and solutions that
              exceed expectations and create lasting value.
            </p>
            <p>
              Since our establishment in 2014, we have worked tirelessly to
              build a company that thrives on quality, innovation, and
              integrity. Our growth has been shaped by our dedication to safety,
              excellence, and customer satisfaction. We are a one-stop solution
              provider serving diverse sectors including Oil & Gas, Renewable
              Energy, Marine, Defense, Construction, and more—delivering
              tailored solutions through our specialized divisions.
            </p>
            <p>
              As we look to the future, we remain focused on our goal of
              expanding our portfolio and reaching new heights of success,
              ensuring that ALFA Group continues to be a trusted partner for
              businesses across the globe.
            </p>
            <p>
              Sincerely,
              <br />
              <strong>Chief Executive Officer</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CeoMessage;
