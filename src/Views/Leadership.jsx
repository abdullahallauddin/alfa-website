import React, { useEffect } from "react";
import profileImg from "../Assets/Images/ceo-image1.jpg";
import SustainbilityBG from "../Assets/Images/SustainbilityBG.png";
import BoardMembers from "../Components/BoardMembers";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";

const Leadership = ({ embedded }) => {
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
          style={{ backgroundImage: `url(${SustainbilityBG})` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="text-5xl text-white font-bold">Our Leadership</h1>
          </motion.div>
        </div>
      </SectionWrapperReverse>
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-24 px-24"
      >
        <BoardMembers />
      </motion.div>
    </>
  );
};

export default Leadership;
