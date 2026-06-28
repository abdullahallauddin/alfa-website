import React,{useEffect} from 'react';
import backgroundImage from "../Assets/Images/main-background.jpg"
import ServiceCopm from '../Components/ServiceCopm';
import { motion } from "framer-motion";
import { useT } from "../i18n/i18n";
// import ServiceCard from '../Components/ServiceCard';

const Services = () => {
  const t = useT();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="bg-cover bg-center pt-8 pb-8 h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >

        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-roboto font-light mt-24 mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t("Our ", "")}<span className="text-[#2C95D2]">{t("Services", "خدماتنا")}</span>
          </motion.h1>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='mt-12 mb-20'
      >
        <ServiceCopm />
      </motion.div>
    </>
  );
}

export default Services;
