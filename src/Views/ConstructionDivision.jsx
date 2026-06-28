import React from "react";
import marineImage from "../Assets/Images/construction2a.png";
import backgroundImage from "../Assets/Images/main2a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
import { useT } from "../i18n/i18n";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const ConstructionDivision = ({ embedded }) => {
  const t = useT();
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
              <h1 className="text-5xl font-bold">{t("Construction Division", "قطاع الإنشاءات")}</h1>
            </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      )}
      <div className="relative text-white">
          {/* Text Section */}
          <motion.div
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
        <div className="max-w-9xl mx-auto py-12 grid md:grid-cols-2 gap-6 items-stretch">
            <div className="">
              <h2 className="text-sm font-semibold text-[#2C95D2] uppercase mb-2">
                {t("What We Do", "أعمالنا")}
              </h2>
              <h1
                className="text-2xl sm:text-3xl font-roboto font-light uppercase mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                {t("CONSTRUCTION ", "قطاع الإنشاءات")}<span className="text-[#2C95D2]">{t("DIVISION", "")}</span>
              </h1>
              <div className="space-y-4 text-sm leading-relaxed text-justify text-white/80">
                <p>
                  <span className="font-bold">{t("ALFA", "ألفا")}</span>{t(" Construction Division delivers high-quality services in Civil Construction and MEP Contracting. We specialize in Sub-Contracting and/or Lump Sum Turnkey (LSTK) Projects, tailored to Oil & Gas, Renewable Energy, Power, Defense, Construction, Industrial, Commercial, and Entertainment & Sports Sectors.", "، قطاع الإنشاءات، يقدّم خدمات عالية الجودة في الإنشاءات المدنية ومقاولات الأنظمة الميكانيكية والكهربائية والصحية (MEP). ونتخصص في أعمال المقاولة من الباطن و/أو مشاريع التسليم الكامل بنظام المبلغ الإجمالي (LSTK)، المصممة خصيصًا لقطاعات النفط والغاز والطاقة المتجددة والطاقة والدفاع والإنشاءات والصناعة والتجارة والترفيه والرياضة.")}
                  <span className="font-bold"></span>{t(" Our extensive portfolio includes the construction of buildings, roads, railways, utility projects, and various other civil engineering works, always tailored to meet the specific needs of each sector.", " وتشمل محفظتنا الواسعة إنشاء المباني والطرق والسكك الحديدية ومشاريع المرافق ومختلف الأعمال الهندسية المدنية الأخرى، مع تصميمها دائمًا لتلبية الاحتياجات المحددة لكل قطاع.")}
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6">
                <h3 className="font-semibold text-white mb-2">
                  {t("Our Core Services", "خدماتنا الأساسية")}
                </h3>
                <ul className="grid gap-4 sm:grid-cols-2 text-sm text-white/80">
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Construction of Temporary Camp Facilities (TCF)", "إنشاء مرافق المخيمات المؤقتة (TCF)")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Prefab Porta Cabin Buildings Fabrication", "تصنيع المباني الجاهزة (بورتا كابين)")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Road Construction and Asphalt Paving", "إنشاء الطرق ورصف الأسفلت")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Road Marking & Lining", "تخطيط الطرق ووضع العلامات")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Laboratory Design & Construction", "تصميم وإنشاء المختبرات")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Building Structure Construction Services", "خدمات إنشاء الهياكل الإنشائية للمباني")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Renovation of Commercial and Industrial Buildings", "تجديد المباني التجارية والصناعية")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("HVAC Services & Duct Fabrication", "خدمات التكييف (HVAC) وتصنيع مجاري الهواء")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Firefighting Systems", "أنظمة مكافحة الحرائق")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Thermal Insulation & Exhaust System Services", "خدمات العزل الحراري وأنظمة العادم")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Parking Shades Fabrication", "تصنيع مظلات مواقف السيارات")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Waterproofing Solutions", "حلول العزل المائي")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Flooring Solutions", "حلول الأرضيات")}</li>
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

export default ConstructionDivision;
