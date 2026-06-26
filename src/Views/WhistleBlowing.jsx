import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/whistle.png";
import contactuscall from "../Assets/Icons/callus.svg";
import contactusemail from "../Assets/Icons/emailus.svg";
import { motion } from "framer-motion";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
// import AboutUSComp from '../Components/AboutUSComp';
const WhistleBlowing = ({ embedded }) => {
  const contactusdetails = [
    {
      id: 1,
      logo: contactuscall,
      title: "Call Us",
      description: "+966 13 805 2528",
    },
    {
      id: 2,
      logo: contactusemail,
      title: "Mail Us",
      description: "Ethics@alfamarinesa.com",
    },
  ];
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
          {/* Overlay Content */}
          <div className="relative flex flex-col items-center justify-center h-full text-white">
            <motion.div
              // className="md:w-2/2 mb-6 md:mb-0"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl font-bold text-center text-white font-roboto font-light" style={{ letterSpacing: "-0.02em" }}>
                Whistle <span className="text-[#2C95D2]">Blowing</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      )}
      <motion.div
        className="md:w-2/2 mb-6 md:mb-0"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="w-full py-6 md:py-10 max-w-6xl mx-auto">
          <h1
            className="text-4xl font-bold mb-4 text-center md:text-left text-white font-roboto font-light"
            style={{ letterSpacing: "-0.02em" }}
          >
            Whistle Blowing Helpline
          </h1>
          <p className="text-lg mt-4 text-white/75">
            To ensure a thorough investigation, please provide sufficient
            details in your concern or complaint, including the following, where
            applicable:
          </p>
          <ul
            className="list-disc list-inside text-md space-y-1 mt-4 text-white/75 marker:text-[#2C95D2]"
          >
            <li>
              Your name and contact information (reports may be made
              anonymously, though please note that anonymity may limit the
              investigation’s scope)
            </li>
            <li>A detailed description of the improper activity</li>
            <li>
              Names of individuals, departments, or employees involved or aware
              of the activity
            </li>
            <li>Approximate or actual dates the activity occurred</li>
            <li>Supporting documents or evidence</li>
            <li>
              Any steps you have already taken internally with{" "}
              <span className="font-bold">ALFA</span> management to report or
              resolve the concern
            </li>
          </ul>
          <p className="mt-8 text-white/75">
            ALFA strictly prohibits any form of retaliation and will not take any
            adverse action against individuals who, in good faith, report a
            concern or complaint, or who participate in the investigation of
            such matters
          </p>
          <div className="flex flex-col items-center justify-center mt-10 -mb-24">
            <div className="container px-4 py-8 flex flex-wrap justify-center gap-12">
              {contactusdetails.map((contactusdetail) => (
                <div
                  key={contactusdetail.id}
                  className="flex justify-center w-full md:w-auto"
                >
                  <a
                    href={
                      contactusdetail.title === "Call Us"
                        ? `tel:${contactusdetail.description}`
                        : `mailto:${contactusdetail.description}`
                    }
                    className="bg-white/5 border border-white/10 w-96 p-4 rounded-lg shadow-xl rounded-bl-3xl rounded-tr-3xl cursor-pointer block transition hover:scale-105 hover:bg-white/10"
                  >
                    <div className="mb-8 flex align-left ml-4 mt-4">
                      <img
                        src={contactusdetail.logo}
                        alt={contactusdetail.title}
                        className="h-8 w-8"
                      />
                    </div>
                    <h3
                      className="text-xl font-bold mb-2 align-left ml-4 text-white"
                    >
                      {contactusdetail.title}
                    </h3>
                    <p
                      className="mt-6 mb-8 align-left ml-4 text-white/75"
                    >
                      {contactusdetail.description}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WhistleBlowing;
