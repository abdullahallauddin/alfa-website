import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/download-center.png";
import { FaFilePdf } from "react-icons/fa";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
// import AlfaPDF from "../../public/profile.pdf";
// import AlfaSVG from "../../public/logo.svg";
// import AlfaPNG from "../../public/logo.png";
import { motion } from "framer-motion";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const DownloadCenter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const downloads = [
    {
      title: "Profile",
      description: "ALFA & Offshore Division Company Profile",
      icon: <FaFilePdf className="text-green-500 text-3xl mt-1" />,
      buttons: [
        {
          label: "Download brochure",
          // file: "/Downloads/profile.pdf",
          className: "bg-[#20376D]",
        },
      ],
    },
    {
      title: "Logo",
      description: "Logo",
      icon: <FaFilePdf className="text-green-500 text-3xl mt-1" />,
      buttons: [
        {
          label: "Download SVG",
          file: "/Downloads/logo.svg",
          className: "bg-[#20376D]",
        },
        {
          label: "Download PNG",
          file: "/Downloads/logo.png",
          className: "bg-[#20376D]",
        },
      ],
    },
  ];

  return (
    <>
      <SectionWrapperReverse>
        <div
          className="bg-cover bg-center h-[90vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/40 h-[90vh]"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl font-bold text-center">
                Download Center
              </h1>
            </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      <motion.div
        variants={cardAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <div className="w-full p-4 md:p-24">
          <h1
            className="text-4xl font-bold mb-4 text-center md:text-left"
            style={{ color: "#20376D" }}
          >
            Download Center
          </h1>
          <p className="text-lg mt-4 text-justify" style={{ color: "#20376D" }}>
            ALFA is a prominent player in the marine, offshore, oil & gas,
            renewable energy, and defense sectors within Saudi Arabia and
            beyond, renowned for its expertise and commitment to excellence.
            Discover more about our innovative approach, diverse range of
            services, and forward-looking vision by accessing the latest
            reports, insights, and updates from the ALFA team.
          </p>
          <h1
            className="mt-12 text-4xl font-bold mb-4 text-center md:text-left"
            style={{ color: "#20376D" }}
          >
            Digital Media Toolkit
          </h1>
          <div className="space-y-6 p-4 max-w-md">
            {downloads.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div>{item.icon}</div>
                <div className="flex-1">
                  <h2 className="font-bold text-lg text-[#20376D]">{item.title}</h2>
                  <p className="font-poppins text-sm text-[#20376D]">{item.description}</p>
                  <div className="mt-2 space-x-2">
                    {item.buttons.map((btn, bIdx) => (
                      <a
                        href={btn.file}
                        download
                        className="text-sm text-white px-3 py-1 rounded bg-[#20376D]"
                      >
                        {btn.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DownloadCenter;
