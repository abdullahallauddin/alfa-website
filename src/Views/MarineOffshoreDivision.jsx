import React, { useEffect } from "react";
import marineImage from "../Assets/Images/marine2a.png";
import backgroundImage from "../Assets/Images/main-background.jpg";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
import SustainbilityBG from "../Assets/Images/SustainbilityBG.png";
import { useT } from "../i18n/i18n";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const MarineOffshoreDivision = ({ embedded }) => {
  const t = useT();
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
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl font-bold">{t("Marine & OffShore", "البحرية والمنشآت البحرية")}</h1>
            </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      )}
      <div className="relative text-white">
        <motion.div
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <div className="max-w-9xl mx-auto py-12 grid md:grid-cols-2 gap-6 items-stretch">
            {/* Text Section */}
            <div className="">
              <h2 className="text-sm font-semibold text-[#2C95D2] uppercase mb-2">
                {t("What We Do", "أعمالنا")}
              </h2>
              <h1
                className="text-2xl sm:text-3xl font-roboto font-light uppercase mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                {t("Marine & Offshore ", "قطاع البحرية والمنشآت البحرية")}<span className="text-[#2C95D2]">{t("Division", "")}</span>
              </h1>
              <div className="space-y-4 text-sm leading-relaxed text-justify text-white/80">
                <p>
                  <span className="font-bold">{t("ALFA", "ألفا")}</span>{t(" Marine & Offshore Division excels in delivering end-to-end solutions across the marine, offshore, oil & gas, renewable energy and defense industries. Specializing in Lump Sum Turnkey (LSTK) projects,", "، قطاع البحرية والمنشآت البحرية، يتفوق في تقديم حلول متكاملة شاملة عبر قطاعات البحرية والمنشآت البحرية والنفط والغاز والطاقة المتجددة والدفاع. ومن خلال تخصصه في مشاريع التسليم الكامل بنظام المبلغ الإجمالي (LSTK)،")}
                  <span className="font-bold">{t(" ALFA", " ألفا")}</span>{t(" specializes in the design, construction and maintenance of marine and offshore living quarters, accommodation modules, and high-integrity technical buildings to the highest international standards e.g. ABS and DNV certifications.", " يتخصص في تصميم وبناء وصيانة وحدات السكن البحرية والمنشآت البحرية، ووحدات الإقامة، والمباني التقنية عالية الاعتمادية وفق أعلى المعايير الدولية مثل شهادات ABS وDNV.")}
                </p>
                <p>
                  {t("With a strong commitment to excellence and innovation, ", "مع التزام راسخ بالتميز والابتكار، ")}
                  <span className="font-bold">{t("ALFA", "ألفا")}</span>{t(" provides state-of-the-art modular building solutions. These services meet rigorous industry standards ATEX, IECEx, NORSOK, NFPA, AWS or any other specific requirements. We collaborate globally with recognized certification bodies, including ", " تقدّم أحدث حلول المباني المعيارية. وتلبي هذه الخدمات المعايير الصناعية الصارمة مثل ATEX وIECEx وNORSOK وNFPA وAWS أو أي متطلبات محددة أخرى. ونتعاون عالميًا مع هيئات الاعتماد المعترف بها، بما في ذلك ")}
                  <span className="font-bold">{t("ABS, BV, DNV, and Lloyd’s", "ABS وBV وDNV وLloyd’s")}</span>{t(", ensuring the highest levels of safety and quality.", "، مما يضمن أعلى مستويات السلامة والجودة.")}
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6">
                <h3 className="font-semibold text-white mb-2">
                  {t("Our Core Services", "خدماتنا الأساسية")}
                </h3>
                <ul className="grid gap-4 sm:grid-cols-2 text-sm text-white/80">
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Modular Buildings Solutions", "حلول المباني المعيارية")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Living Quarters Refurbishment, Upgrade Solutions", "تجديد وحدات السكن وحلول الترقية")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Architectural, HVAC, Electrical, Plumbing & C", "الأعمال المعمارية وأنظمة التكييف (HVAC) والكهرباء والسباكة وما إلى ذلك")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Ship Chandling", "توريد مستلزمات السفن")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Thermal & Acoustic Insulation Solution", "حلول العزل الحراري والصوتي")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Rig, Ship & Hull Repair", "إصلاح المنصات والسفن وأبدان السفن")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Welding & Fabrication", "اللحام والتصنيع")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Abrasive Blasting & Painting", "السفع الكاشط والطلاء")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Dismantling & Demolition", "التفكيك والهدم")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Scaffolding Services for Ships, Vessels & Offshore Rigs", "خدمات السقالات للسفن والمراكب والمنصات البحرية")}</li>
                </ul>
              </div>
            </div>
            {/* Image Section */}
            <div className="relative flex">
              <img
                src={marineImage}
                alt={t("Marine & Offshore", "البحرية والمنشآت البحرية")}
                className="w-full h-full object-cover rounded-2xl ring-1 ring-white/10 min-h-[16rem] md:min-h-[20rem]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default MarineOffshoreDivision;
