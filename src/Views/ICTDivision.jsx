import React, { useEffect } from "react";
import marineImage from "../Assets/Images/ict2a.png";
import backgroundImage from "../Assets/Images/main4a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
import { useT } from "../i18n/i18n";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const ICTDivision = ({ embedded }) => {
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
              <h1 className="text-5xl font-bold">{t("ICT Division", "قطاع تقنية المعلومات والاتصالات")}</h1>
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
                {t("ICT ", "قطاع تقنية المعلومات والاتصالات")}<span className="text-[#2C95D2]">{t("Division", "")}</span>
              </h1>
              <div className="space-y-4 text-sm leading-relaxed text-justify text-white/80">
                <p>
                  <span className="font-bold">{t("ALFA", "ألفا")}</span>{t(" ICT Division as a trusted technology partner, offers end-to-end ICT, Low Current and Smart Building Solutions. We specialize in designing, deploying, integrating, and maintaining advanced IT infrastructure and intelligent systems to support critical operations across industries, with a focus on international standards, quality, and innovation.", "، وبصفته شريكًا تقنيًا موثوقًا، يقدّم قطاع تقنية المعلومات والاتصالات حلولًا متكاملة في تقنية المعلومات والاتصالات وأنظمة التيار المنخفض والمباني الذكية. ونتخصص في تصميم ونشر وتكامل وصيانة البنية التحتية المتقدمة لتقنية المعلومات والأنظمة الذكية لدعم العمليات الحيوية عبر مختلف الصناعات، مع التركيز على المعايير الدولية والجودة والابتكار.")}
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6">
                <h3 className="font-semibold text-white mb-2">
                  {t("Our Core Services", "خدماتنا الأساسية")}
                </h3>
                <ul className="grid gap-4 sm:grid-cols-2 text-sm text-white/80">
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Structured Cabling & Data Center Infrastructure", "الكابلات المنظمة والبنية التحتية لمراكز البيانات")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Network Infrastructure & Wireless Solutions", "البنية التحتية للشبكات والحلول اللاسلكية")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Surveillance, Security & Access Control", "المراقبة والأمن والتحكم في الدخول")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Audio/Visual & Conferencing Solutions", "الحلول السمعية والبصرية وحلول المؤتمرات")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Television & Media Distribution", "التلفزيون وتوزيع الوسائط")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Smart Building & Automation", "المباني الذكية والأتمتة")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("QSR / Retail Systems", "أنظمة المطاعم السريعة والتجزئة")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Fiber Optic Transmission Line Solutions", "حلول خطوط النقل بالألياف البصرية")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("IT Asset Management", "إدارة أصول تقنية المعلومات")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("IT Infrastructure Relocation Solutions", "حلول نقل البنية التحتية لتقنية المعلومات")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("IT Consultancy", "الاستشارات في تقنية المعلومات")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Annual Maintenance Contracts (AMC)", "عقود الصيانة السنوية (AMC)")}</li>
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

export default ICTDivision;
