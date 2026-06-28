import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { useT } from "../i18n/i18n";

const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// part: "both" (default) | "text" (overview paragraph only) | "cards" (heading + division cards)
const OurDivisionsComponent = ({ part = "both" }) => {
  const t = useT();
  const showText = part === "both" || part === "text";
  const showCards = part === "both" || part === "cards";

  return (
    <>
      {showText && (
        <motion.div
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {part === "both" && (
            <h3
              className="font-roboto text-3xl md:text-[2.75rem] font-light mb-4 text-white text-center"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t("Our", "")}{" "}
              <span className="text-[#2C95D2]">{t("Divisions", "قطاعاتنا")}</span>
            </h3>
          )}
          <p
            className="font-roboto font-light text-lg leading-relaxed text-white/80"
            style={{ textWrap: "pretty" }}
          >
            {t(
              "ALFA Group is a steadily growing multi-division company supporting major industries across the Middle East. We specialize as a reliable subcontractor, delivering high-quality Engineering Support, Procurement Assistance, Fabrication & Construction(EPFC) services tailored to our Client's Project Needs Our capabilities span a wide range of sectors, including Oil & Gas, Renewable Energy, Marine & Offshore, Power & Utilities, Defense, Construction & Infrastructure, Petrochemical, Industrial Plants, and Commercial Projects. ALFA Group operates with a strong focus on quality, safety, and client satisfaction, backed by ISO certifications and adherence to international standards. We invest continuously in skilled manpower, advanced technologies, and operational excellence to support the success of our clients’ projects. Each division is managed by experienced teams and operates under robust systems to ensure timely, safe, and value-driven project delivery.",
              "ألفا جروب شركة متعددة القطاعات تنمو باطّراد وتدعم الصناعات الكبرى في جميع أنحاء الشرق الأوسط. ونتخصص كمقاول من الباطن موثوق، حيث نقدّم خدمات عالية الجودة في الدعم الهندسي والمساعدة في المشتريات والتصنيع والإنشاء (EPFC) مصمّمة وفقاً لاحتياجات مشاريع عملائنا. وتمتد قدراتنا عبر مجموعة واسعة من القطاعات، بما في ذلك النفط والغاز والطاقة المتجددة والبحرية والمنشآت البحرية والطاقة والمرافق والدفاع والإنشاءات والبنية التحتية والبتروكيماويات والمصانع الصناعية والمشاريع التجارية. وتعمل ألفا جروب بتركيز قوي على الجودة والسلامة ورضا العملاء، مدعومة بشهادات الآيزو والالتزام بالمعايير الدولية. ونستثمر باستمرار في الكوادر الماهرة والتقنيات المتقدمة والتميّز التشغيلي لدعم نجاح مشاريع عملائنا. ويُدار كل قطاع بواسطة فرق ذات خبرة ويعمل وفق أنظمة متينة لضمان تسليم المشاريع في الوقت المحدد وبأمان وبقيمة مضافة."
            )}
          </p>
        </motion.div>
      )}

      {showCards && <ServiceCard carousel />}
    </>
  );
};

export default OurDivisionsComponent;
