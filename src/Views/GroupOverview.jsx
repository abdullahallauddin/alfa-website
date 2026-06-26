import React, { useEffect } from "react";
import GroupOverviewImage from "../Assets/Images/GroupOverview.jpeg";
import contactuscall from "../Assets/Icons/contactuscall.svg";
import contactusemail from "../Assets/Icons/contactusemail.svg";
import OurDivisionsComponent from "../Components/OurDivisionsComponent";
// import ContactUsOurOffic from '../Components/ContactUsOurOffic';
// import Form from '../Components/Form';
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
const GroupOverview = ({ embedded }) => {
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
          style={{ backgroundImage: `url(${GroupOverviewImage})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute h-[clamp(18rem,46vh,30rem)] inset-0 bg-black opacity-70 z-0"></div>
          <div className="relative flex flex-col items-center justify-center h-full text-white">
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >

            <h1 className="text-5xl font-roboto font-light text-white" style={{ letterSpacing: "-0.02em" }}>Group <span className="text-[#2C95D2]">Overview</span></h1>
          </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      )}

      <div id="ourdivisions">
        <OurDivisionsComponent />
      </div>
    </>
  );
};

export default GroupOverview;
