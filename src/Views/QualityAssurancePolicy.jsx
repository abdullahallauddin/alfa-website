import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/qap2a.png";
import aboutinnerbg from "../Assets/Icons/QAPImage.svg";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
// import AboutUSComp from '../Components/AboutUSComp';
const QualityAssurancePolicy = ({ embedded }) => {
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
          <div className="absolute inset-0 h-110 bg-black/80 h-[clamp(18rem,46vh,30rem)]"></div>
          {/* Overlay Content */}
          <div className="relative flex flex-col items-center justify-center h-full text-white">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-center lg:mt-120 md:mt-90 justify-center min-h-screen text-center sm:block">
                <h1 className="text-5xl font-bold text-white font-roboto font-light" style={{ letterSpacing: "-0.02em" }}>Quality Assurance <span className="text-[#2C95D2]">Policy</span></h1>
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
            Quality Assurance Policy
          </h1>
          <p className="text-lg mt-4 text-justify text-white/75">
            At ALFA, we are committed to delivering high-quality, professional,
            and efficient services that meet and exceed the expectations of our
            clients. Our goal is to ensure long-term sustainability and
            profitability for the organization, underpinned by a strong customer
            focus and continuous improvement in every aspect of our operations.
          </p>
          <p className="text-lg mt-4 text-justify text-white/75">
            Our Management Team plays a critical role in this commitment, taking
            responsibility for establishing, implementing, integrating, and
            maintaining our Quality Management System (QMS). By ensuring that
            adequate resources are allocated across the organization, we
            guarantee that our QMS supports the achievement of our quality
            objectives.
          </p>
          <p className="text-lg mt-4 text-justify text-white/75">
            We foster a Quality Culture throughout the company by promoting open
            communication, providing ongoing training, and encouraging active
            engagement. Each employee understands the importance of the Quality
            System, their responsibility in contributing to its effectiveness,
            and how it directly impacts the success of the organization.
          </p>
          <p className="text-lg mt-4 text-justify text-white/75">
            Every team member is trained and empowered to perform the duties
            required by their role in maintaining the highest quality standards.
            Our Quality System is regularly monitored, measured, evaluated, and
            continuously enhanced, with top management overseeing the process
            and ensuring that its status and effectiveness are communicated at
            all levels within the organization.
          </p>
        </div>
      </motion.div>
      <div className="flex items-center justify-center mb-12">
        <img
          src={aboutinnerbg}
          alt="About Background"
          className="w-full sm:w-[400px] md:w-[500px] lg:w-[800px] xl:w-[800px] h-auto mx-auto"
        />
      </div>{" "}
    </>
  );
};

export default QualityAssurancePolicy;
