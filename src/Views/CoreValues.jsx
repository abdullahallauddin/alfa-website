import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/main-background.jpg";
import peopleSvg from "../Assets/Icons/peopleSvg.svg";
import accountabilitySvg from "../Assets/Icons/accountabilitySvg.svg";
import collborationSvg from "../Assets/Icons/collborationSvg.svg";
import trustSvg from "../Assets/Icons/trustSvg.svg";
import excellenceSvg from "../Assets/Icons/excellenceSvg.svg";
import partnershipSvg from "../Assets/Icons/partnershipSvg.svg";
import { motion } from "framer-motion";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";

function CoreValues({ embedded }) {
  useEffect(() => {
    if (embedded) return;
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: peopleSvg,
      title: "People",
      description:
        "We take the safety and well-being of our people seriously and provide our people with growth opportunities and partners with them to unleash our collective potential.",
    },
    {
      icon: accountabilitySvg,
      title: "Accountability",
      description:
        "We have the courage to take full responsibility for our actions at all levels and set clear targets, empowers our people, and holds them accountable.",
    },
    {
      icon: collborationSvg,
      title: "Collaboration",
      description:
        "We works together to reflect the “Power of One” and create synergies and minimize organizational boundaries and works across them effectively.",
    },
    {
      icon: trustSvg,
      title: "Trust",
      description:
        "It is the foundation of our relationships with our clients, our partners, our people, and our communities. We never compromises on our professional and ethical principles.",
    },
    {
      icon: excellenceSvg,
      title: "Excellence",
      description:
        "We deliver value to our clients through rigorous planning and disciplined execution and hedge against complacency by reflecting critically on our business practices.",
    },
    {
      icon: partnershipSvg,
      title: "partnerships",
      description:
        "The partnerships we have developed with colleagues, customers, and suppliers are essential to our success. We will continue to strengthen these relationships and build new partnerships to ensure our future.",
    },
  ];

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
              <h1 className="text-5xl font-roboto font-light text-white" style={{ letterSpacing: "-0.02em" }}>Our Core <span className="text-[#2C95D2]">Values</span></h1>
            </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      )}
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
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
              className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-[#2C95D2]/50"
            >
              <div className="flex justify-center items-center bg-[#2C95D2]/10 overflow-hidden">
                <img
                  src={value.icon}
                  alt="Icon"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-roboto text-lg font-medium text-white">
                  {value.title}
                </h3>
                <p className="font-roboto text-sm font-light text-white/70 mt-2">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CoreValues;
