import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/download-center.png";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
// import AlfaPDF from "../../public/profile.pdf";
// import AlfaSVG from "../../public/logo.svg";
// import AlfaPNG from "../../public/logo.png";
import { motion } from "framer-motion";
import { useT } from "../i18n/i18n";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const DownloadCenter = ({ embedded }) => {
  const t = useT();
  useEffect(() => {
    if (embedded) return;
    window.scrollTo(0, 0);
  }, [embedded]);
  const downloads = [
    {
      title: t("Profile", "الملف التعريفي"),
      description: t(
        "ALFA & Offshore Division Company Profile",
        "الملف التعريفي لشركة ألفا وقطاع الأعمال البحرية"
      ),
      icon: <FaFilePdf className="text-green-500 text-3xl mt-1" />,
      buttons: [
        {
          label: t("Download brochure", "تحميل الكتيّب"),
          // file: "/Downloads/profile.pdf",
          className: "bg-[#20376D]",
        },
      ],
    },
    {
      title: t("Logo", "الشعار"),
      description: t("Logo", "الشعار"),
      icon: <FaFilePdf className="text-green-500 text-3xl mt-1" />,
      buttons: [
        {
          label: t("Download SVG", "تحميل SVG"),
          file: "/Downloads/logo.svg",
          className: "bg-[#20376D]",
        },
        {
          label: t("Download PNG", "تحميل PNG"),
          file: "/Downloads/logo.png",
          className: "bg-[#20376D]",
        },
      ],
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
            <div className="absolute inset-0 bg-black/40 h-[clamp(18rem,46vh,30rem)]"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h1 className="text-5xl font-bold text-center">
                  {t("Download Center", "مركز التحميل")}
                </h1>
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
        <div className="w-full py-6 md:py-10">
          <h1
            className="text-4xl font-roboto font-light mb-4 text-center md:text-start text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t("Download Center", "مركز التحميل")}
          </h1>
          <p className="text-lg mt-4 text-justify text-white/75">
            {t(
              "ALFA is a prominent player in the marine, offshore, oil & gas, renewable energy, and defense sectors within Saudi Arabia and beyond, renowned for its expertise and commitment to excellence. Discover more about our innovative approach, diverse range of services, and forward-looking vision by accessing the latest reports, insights, and updates from the ALFA team.",
              "تُعدّ ألفا من الأسماء البارزة في قطاعات الأعمال البحرية والبحار والنفط والغاز والطاقة المتجددة والدفاع داخل المملكة العربية السعودية وخارجها، وهي معروفة بخبرتها والتزامها بالتميّز. اكتشف المزيد عن نهجنا المبتكر وباقة خدماتنا المتنوعة ورؤيتنا الاستشرافية من خلال الاطلاع على أحدث التقارير والرؤى والمستجدات من فريق ألفا."
            )}
          </p>
          <h1
            className="mt-12 text-4xl font-roboto font-light mb-4 text-center md:text-start text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t("Digital Media Toolkit", "حزمة الوسائط الرقمية")}
          </h1>
          <div className="space-y-6 p-4 max-w-md">
            {downloads.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="group flex items-start space-x-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                <div className="flex-1">
                  <h2 className="font-bold text-lg text-white">{item.title}</h2>
                  <p className="font-poppins text-sm text-white/75">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.buttons.map((btn, bIdx) => (
                      <a
                        key={bIdx}
                        href={btn.file}
                        download
                        className="group/btn inline-flex items-center gap-2 text-sm text-white px-3 py-1.5 rounded-lg bg-[#2C95D2] transition-all hover:bg-[#2C95D2]/90 hover:gap-2.5"
                      >
                        <FaDownload className="text-xs transition-transform duration-300 group-hover/btn:translate-y-0.5" aria-hidden="true" />
                        {btn.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DownloadCenter;
