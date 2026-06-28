import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/our-facility.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
import { useT } from "../i18n/i18n";

const cardAnimation = {
hidden: { opacity: 0, y: 40 },
visible: { opacity: 1, y: 0 },
};
const Facility = ({ embedded }) => {
  const t = useT();
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
              <h1 className="text-5xl font-roboto font-light text-white" style={{ letterSpacing: "-0.02em" }}>{t("Our ", "")}<span className="text-[#2C95D2]">{t("Facilities", "مرافقنا")}</span></h1>
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
          <p className="mb-6 text-justify text-sm sm:text-base">
            {t(
              "Our facilities are designed to support high-volume and high-quality production, logistics, and service operations. Located strategically in Saudi Arabia, our infrastructure includes:",
              "صُمّمت مرافقنا لدعم عمليات الإنتاج واللوجستيات والخدمات عالية الجودة وكبيرة الحجم. وتقع بنيتنا التحتية في مواقع استراتيجية داخل المملكة العربية السعودية، وتشمل:"
            )}
          </p>

          <ul className="grid grid-cols-1 gap-4 list-none ps-0 sm:grid-cols-2 text-sm sm:text-base">
            <li className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-white/75 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-[#2C95D2]/50">
              <strong>{t("Fabrication Yards and Workshops", "أحواض ووِرَش التصنيع")}</strong>{" "}
              {t("equipped with advanced machinery", "مجهّزة بآلات متطورة")}
            </li>
            <li className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-white/75 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-[#2C95D2]/50">
              <strong>{t("Well-Furnished Porta Cabins", "كرفانات مجهّزة بالكامل")}</strong>{" "}
              {t("for site offices and accommodations", "للمكاتب الميدانية وأماكن الإقامة")}
            </li>
            <li className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-white/75 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-[#2C95D2]/50">
              <strong>{t("Warehouse and Storage Areas", "مستودعات ومناطق تخزين")}</strong>{" "}
              {t("with organized material handling systems", "بأنظمة منظّمة لمناولة المواد")}
            </li>
            <li className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-white/75 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-[#2C95D2]/50">
              <strong>
                {t("Specialized Zones for Joinery, Electrical Assembly, and Painting", "مناطق متخصصة لأعمال النجارة والتجميع الكهربائي والطلاء")}
              </strong>
            </li>
            <li className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-white/75 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-[#2C95D2]/50">
              <strong>{t("Dedicated Training & Meeting Halls", "قاعات مخصّصة للتدريب والاجتماعات")}</strong>
            </li>
            <li className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-white/75 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-[#2C95D2]/50">
              <strong>
                {t("Secure and Compliant Storage for Hazardous & Non-Hazardous Materials", "تخزين آمن ومتوافق للمواد الخطرة وغير الخطرة")}
              </strong>
            </li>
            <li className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-white/75 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-[#2C95D2]/50">
              <strong>{t("Fleet of Equipment, Vehicles, and Tools", "أسطول من المعدات والمركبات والأدوات")}</strong>{" "}
              {t("for project mobilization and execution", "لحشد المشاريع وتنفيذها")}
            </li>
          </ul>

          <p className="mt-6 text-justify text-sm sm:text-base">
            {t(
              "We maintain all the necessary HSE, quality, and compliance standards to ensure optimal operations and safe working environments.",
              "نلتزم بجميع معايير الصحة والسلامة والبيئة والجودة والامتثال اللازمة لضمان العمليات المثلى وبيئات عمل آمنة."
            )}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Facility;
