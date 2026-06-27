import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/hse2a.png";
import aboutinnerbg from "../Assets/Images/markup.png";
import sustainability from "../Assets/Images/sustainability.png";
import innovative from "../Assets/Images/innovative.png";
import yellowicon from "../Assets/Icons/yellowicon.svg";
import pinkicon from "../Assets/Icons/pinkicon.svg";
import AwarenessIcon from "../Assets/Icons/AwarenessIcon.svg";
import RiskIcon from "../Assets/Icons/RiskIcon.svg";
import ClearIcon from "../Assets/Icons/ClearIcon.svg";
import TrainingIcon from "../Assets/Icons/TrainingIcon.svg";
import SafeIcon from "../Assets/Icons/SafeIcon.svg";
import ThirdIcon from "../Assets/Icons/ThirdIcon.svg";
import EmergencyIcon from "../Assets/Icons/EmergencyIcon.svg";
import CommunityIcon from "../Assets/Icons/CommunityIcon.svg";
import ImprovementIcon from "../Assets/Icons/ImprovementIcon.svg";
import { CheckCircle, Info } from "lucide-react";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
// import AboutUSComp from '../Components/AboutUSComp';
const HSEPolicy = ({ embedded }) => {
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
                  HSE <span className="text-[#2C95D2]">Policy</span>
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
            Health, Safety & Environmental (HSE) Policy
          </h1>
          <p className="text-lg mt-4 text-justify text-white/75">
            ALFA is dedicated to providing a safe and secure workplace for
            employees, clients, contractors, suppliers/vendors, and visitors
            across all facilities and project sites. We believe that through
            collaboration with clients and partners, occupational risks and
            environmental impacts can be effectively prevented. ALFA is
            committed to protecting people, property, and communities,
            preventing pollution, and upholding the highest industrial standards
            for safety, health, and environmental sustainability in all its
            operations.
          </p>
          <p className="text-lg mt-4 font-bold text-white">
            To achieve this, the Company pledges to:
          </p>

          <div className="w-full p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Each HSE Item */}
              {[
                {
                  icon: AwarenessIcon,
                  title: "Promote Awareness and Accountability",
                  bullets: [
                    "Ensure all employees and visitors understand their responsibilities regarding health, safety, and environmental protection.",
                    "Regularly measure and review their performance to maintain compliance and drive improvement.",
                  ],
                },
                {
                  icon: RiskIcon,
                  title: "Risk Management",
                  bullets: [
                    "Identify, assess, and mitigate HSE risks proactively before starting any operation or activity.",
                  ],
                },
                {
                  icon: ClearIcon,
                  title: "Clear Communication",
                  bullets: [
                    "Consistently communicate HSE objectives, policies, and procedures to all employees and stakeholders.",
                  ],
                },
                {
                  icon: TrainingIcon,
                  title: "Training and Resources",
                  bullets: [
                    "Equip employees with the necessary training, education, and tools to uphold HSE accountability.",
                  ],
                },
                {
                  icon: SafeIcon,
                  title: "Facility Design Excellence",
                  bullets: [
                    "Design and build facilities using recognized best practices to protect people, property, and the environment.",
                  ],
                },
                {
                  icon: ThirdIcon,
                  title: "Safe Operations",
                  bullets: [
                    "Operate and maintain facilities to safeguard the health and safety of all personnel and visitors.",
                  ],
                },
                {
                  icon: EmergencyIcon,
                  title: "Emergency Readiness",
                  bullets: [
                    "Maintain preparedness and respond swiftly and effectively to any emergencies or incidents.",
                  ],
                },
                {
                  icon: CommunityIcon,
                  title: "Incident Management",
                  bullets: [
                    "Report, investigate, and analyze all incidents to promote transparency and continuous improvement.",
                  ],
                },
                {
                  icon: ImprovementIcon,
                  title: "Community Safety",
                  bullets: [
                    "Encourage practices that promote health and safety both within the workplace and the wider community.",
                  ],
                },
              ].map(({ icon, title, bullets }, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <img src={icon} alt={title} className="w-9 h-9 mt-1 brightness-0 invert" />
                  <div>
                    <h3
                      className="font-semibold text-lg mb-1 text-white font-roboto font-light"
                    >
                      {title}
                    </h3>
                    <ul className="text-white/75 text-sm space-y-1">
                      {bullets.map((text, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle
                            size={20}
                            className="text-green-500 mr-2 mt-1"
                          />
                          <span className="text-white/75">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* <div
        className="relative bg-cover h-[340px] bg-center pt-8 pb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutinnerbg})` }}
      ></div> */}
    </>
  );
};

export default HSEPolicy;
