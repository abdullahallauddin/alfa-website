import React, { useEffect } from "react";
import SustainbilityBG from "../Assets/Images/SustainbilityBG.png";
import Digitization from "../Assets/Icons/Digitization.svg";
import ClientCentric from "../Assets/Icons/ClientCentric.svg";
import IndustryStandards from "../Assets/Icons/IndustryStandards.svg";
import investInTalent from "../Assets/Icons/investInTalent.svg";
import EndtoEndSolution from "../Assets/Icons/EndtoEndSolution.svg";
import SustainabilityIntegration from "../Assets/Icons/SustainabilityIntegration.svg";
import { motion } from "framer-motion";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";

const Strategy = ({ embedded }) => {
  useEffect(() => {
    if (embedded) return;
    window.scrollTo(0, 0);
  }, []);

  const DigitizationText =
    "Leveraging cutting-edge technologies and innovative solutions to set new industry benchmarks.";
  const ClientCentricApproachText =
    "Focus on understanding client needs to offer customized, cost-effective, and innovative solutions.";
  const IndustryStandardsText =
    "Maintain strict adherence to internationally recognized standards to ensure quality, safety, and reliability.";
  const InvestInTalentText =
    "Develop a skilled workforce and leverage state-of-the-art technology to deliver exceptional results.";
  const EndToEndSolutionText =
    "Provide comprehensive services, ensuring seamless integration and execution of projects.";
  const SustainabilityIntegrationText =
    "Embed sustainable practices into operations, from material selection to project execution.";

  const pillars = [
    { title: "Digitization", description: DigitizationText, icon: Digitization },
    {
      title: "Client-Centric Approach",
      description: ClientCentricApproachText,
      icon: ClientCentric,
    },
    {
      title: "Industry Standards",
      description: IndustryStandardsText,
      icon: IndustryStandards,
    },
    {
      title: "Invest In Talent & Technology",
      description: InvestInTalentText,
      icon: investInTalent,
    },
    {
      title: "End-to-End Solutions",
      description: EndToEndSolutionText,
      icon: EndtoEndSolution,
    },
    {
      title: "Sustainability Integration",
      description: SustainabilityIntegrationText,
      icon: SustainabilityIntegration,
    },
  ];

  return (
    <>
      {!embedded && (
      <SectionWrapperReverse>
        <div
          className="bg-cover bg-center h-[clamp(18rem,46vh,30rem)] flex items-center justify-center"
          style={{ backgroundImage: `url(${SustainbilityBG})` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="text-5xl text-white font-roboto font-light" style={{ letterSpacing: "-0.02em" }}>Our <span className="text-[#2C95D2]">Strategy</span></h1>
          </motion.div>
        </div>
      </SectionWrapperReverse>
      )}
      <motion.div
        // className="md:w-2/2 mb-6 md:mb-0"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2
          className="text-3xl items-center flex justify-center font-roboto font-light text-white mt-24 mb-12"
          style={{ letterSpacing: "-0.02em" }}
        >
          Core Strategic <span className="text-[#2C95D2]">Pillars</span>
        </h2>
        <p className="container mx-auto px-8 md:px-12 lg:px-24 flex flex-col items-center justify-center mt-12 mb-8 text-white/75">
          At ALFA, we are committed to delivering differentiated and competitive
          products and solutions to the energy sector, creating sustainable
          value across all aspects of our operations.
        </p>
      </motion.div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
                ease: "easeOut",
              }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-[#2C95D2]/50"
            >
              <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#2C95D2]/10 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={pillar.icon}
                  alt={`${pillar.title} Icon`}
                  className="h-9 w-9 brightness-0 invert"
                />
              </div>
              <h3 className="font-roboto text-lg font-medium text-white">
                {pillar.title}
              </h3>
              <p className="font-roboto font-light text-white/75 mt-2 text-justify leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Strategy;
