import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/our-capabilities.jpeg";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
import { useT } from "../i18n/i18n";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const Capability = ({ embedded }) => {
  const t = useT();
  useEffect(() => {
    if (embedded) return;
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      text: "Engineering, Procurement, Fabrication & Construction (EPFC)",
      textAr: "الهندسة والتوريد والتصنيع والإنشاء (EPFC)",
    },
    {
      text: "Lump Sum Turnkey (LSTK) Project Execution",
      textAr: "تنفيذ مشاريع التسليم المفتاحي بالسعر الإجمالي (LSTK)",
    },
    {
      text: "Porta Cabin and Modular Building Solutions",
      textAr: "حلول الكرفانات والمباني المعيارية",
    },
    {
      text: "Marine & Offshore Technical Services",
      textAr: "الخدمات الفنية البحرية والمنشآت البحرية",
    },
    {
      text: "Specialized Civil and MEP construction solutions",
      textAr: "حلول الإنشاءات المدنية والأعمال الميكانيكية والكهربائية والصحية المتخصصة",
    },
    {
      text: "Specialized Steel Fabrication and Machining",
      textAr: "تصنيع الفولاذ والتشغيل الآلي المتخصص",
    },
    {
      text: "Procurement, Trading & Industrial Supplies",
      textAr: "التوريد والتجارة والإمدادات الصناعية",
    },
    {
      text: "ICT & ELV Systems, Structured Cabling, and Smart Solutions",
      textAr: "أنظمة تقنية المعلومات والاتصالات والأنظمة منخفضة الجهد والكابلات المنظّمة والحلول الذكية",
    },
    {
      text: "Facility Management and Maintenance",
      textAr: "إدارة المرافق والصيانة",
    },
    {
      text: "Joinery Works and Custom Fit-Outs",
      textAr: "أعمال النجارة والتجهيزات الداخلية المخصصة",
    },
    {
      text: "Heavy Equipment Rental and Logistics Support",
      textAr: "تأجير المعدات الثقيلة والدعم اللوجستي",
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
          {/* Black overlay */}
          <div className="absolute h-[clamp(18rem,46vh,30rem)] inset-0 bg-black h-96 opacity-60 z-0"></div>
          {/* Overlay Content */}
          <div className="relative flex flex-col items-center justify-center h-full text-white">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl font-roboto font-light text-white" style={{ letterSpacing: "-0.02em" }}>{t("Our ", "")}<span className="text-[#2C95D2]">{t("Capabilities", "قدراتنا")}</span></h1>
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
        <div className="max-w-6xl mx-auto px-6 py-10 text-white/75">
          <p className="mb-8 text-justify text-sm sm:text-base">
            {t(
              "ALFA GROUP offers end-to-end capabilities across multiple sectors, allowing us to deliver tailored and comprehensive solutions under one roof. Our expertise spans:",
              "تقدّم مجموعة ألفا قدرات متكاملة عبر قطاعات متعددة، مما يتيح لنا تقديم حلول شاملة ومصمّمة خصيصًا تحت سقف واحد. وتمتدّ خبرتنا لتشمل:"
            )}
          </p>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none">
            {capabilities.map((capability, index) => (
              <li
                key={index}
                className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-[#2C95D2]/50"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#2C95D2] transition-transform duration-300 group-hover:scale-150" />
                <strong className="font-roboto text-white text-sm sm:text-base">
                  {t(capability.text, capability.textAr)}
                </strong>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-justify text-sm sm:text-base">
            {t(
              "Our integrated approach, skilled workforce, modern systems, and quality focus allow us to serve a wide range of industries including Oil & Gas, Power, Marine, Construction, Industrial Plants, Infrastructure, and Commercial Sectors.",
              "يتيح لنا نهجنا المتكامل وقوانا العاملة الماهرة وأنظمتنا الحديثة وتركيزنا على الجودة خدمة مجموعة واسعة من الصناعات، بما في ذلك النفط والغاز والطاقة والقطاع البحري والإنشاءات والمنشآت الصناعية والبنية التحتية والقطاعات التجارية."
            )}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Capability;
