import React, { useEffect } from "react";
import { motion } from "framer-motion";
import profileImg from "../Assets/Images/ceo-image1.jpg";
import SustainbilityBG from "../Assets/Images/cultureImage.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { Accordion, AccordionItem } from "../Components/Accordion";

const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const OurCulture = ({ embedded }) => {
  useEffect(() => {
    if (embedded) return;
    window.scrollTo(0, 0);
  }, []);

  const contentSections = [
    {
      heading: "Building a Sustainable Future, Together",
      text: `At ALFA, we foster a culture that empowers our employees to innovate and be the best version of themselves. Our working environment is built on a foundation of mutual respect, support, and a strong commitment to teamwork and innovation. Together, we are continuously evolving to meet the demands of the industry, shaping the future marine, offshore, oil & gas, renewable energy, and defense sectors for the better.`,
    },
    {
      heading: "Culture and Values",
      text: `ALFA is defined by a strong and cohesive company culture that prioritizes collaboration, sustainability, and responsibility. We strive to create a working environment where everyone can thrive, maintaining a zero-tolerance approach to discrimination while offering limitless training and development opportunities. We take great pride in our people and work hard to nurture their growth and success.\n\nOur core values guide everything we do, ensuring that sustainability and responsibility are embedded into our daily operations, whether on-site, in the office, or in the boardroom. Every decision we make is aligned with our purpose to drive positive change.`,
    },
    {
      heading: "For Our Community",
      text: `We are committed to cultivating strong relationships with local partners and organizations, providing our employees with meaningful opportunities to give back through volunteering and community involvement. We also prioritize the employment of KSA nationals, the use of local suppliers, and a range of initiatives designed to support and uplift the communities in which we operate.`,
    },
    {
      heading: "For Our people",
      text: `Our people are the cornerstone of our success, and we are dedicated to providing comprehensive learning and development opportunities that empower everyone to reach their full potential. At ALFA, we believe in equal opportunities for all and respect the diverse backgrounds and perspectives our team members bring. This inclusive environment is key to fostering creativity and ensuring everyone can contribute to our collective success.`,
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
            <h1 className="text-5xl text-white font-roboto font-light" style={{ letterSpacing: "-0.02em" }}>Our <span className="text-[#2C95D2]">Culture</span></h1>
          </motion.div>
        </div>
      </SectionWrapperReverse>
      )}

      <motion.div
        variants={cardAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <Accordion defaultOpen={[0]}>
          {contentSections.map((section, index) => (
            <AccordionItem key={index} id={index} title={section.heading}>
              <p className="text-white/75 text-justify text-base leading-relaxed whitespace-pre-line">
                {section.text}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </>
  );
};

export default OurCulture;
