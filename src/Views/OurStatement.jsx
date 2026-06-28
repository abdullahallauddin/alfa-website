import React, { useEffect } from "react";
import SustainbilityBG from "../Assets/Images/SustainbilityBG.png";
import missionIcon from "../Assets/Icons/missionIcon.svg";
import visionIcon from "../Assets/Icons/visionIcon.svg";
import goalsIcon from "../Assets/Icons/goalsIcon.svg";
import SustainabilityComp from "../Components/SustainabilityComp";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import Tabs from "../Components/Tabs";
import { motion } from "framer-motion";
import { useT } from "../i18n/i18n";
const cardAnimation = {
hidden: { opacity: 0, y: 40 },
visible: { opacity: 1, y: 0 },
};
const OurStatement = ({ embedded }) => {
  const t = useT();
  useEffect(() => {
    if (embedded) return;
    window.scrollTo(0, 0);
  }, []);

  const missionText =
    "To deliver innovative, high-quality, and sustainable solutions across multiple industries by providing integrated services through our specialized divisions. We are dedicated to exceeding client expectations through operational excellence, safety, integrity, and a commitment to continuous improvement.";
  const missionTextAr =
    "تقديم حلول مبتكرة وعالية الجودة ومستدامة عبر مختلف الصناعات من خلال توفير خدمات متكاملة عبر أقسامنا المتخصصة. نلتزم بتجاوز توقعات عملائنا من خلال التميّز التشغيلي والسلامة والنزاهة والالتزام بالتحسين المستمر.";
  const visionText =
    "To be a leading multi-division enterprise recognized globally for our reliability, innovation, and excellence—serving as the preferred one-stop solution provider across the Oil & Gas, Renewable Energy, Power & Utilities, Marine & Offshore, Defense, Petrochemical, Construction, Industrial, Commercial, and Entertainment sectors.";
  const visionTextAr =
    "أن نكون مؤسسة رائدة متعددة القطاعات معترفًا بها عالميًا بموثوقيتنا وابتكارنا وتميّزنا، لنكون مزوّد الحلول المتكاملة المفضّل عبر قطاعات النفط والغاز والطاقة المتجددة والطاقة والمرافق والبحرية والمنشآت البحرية والدفاع والبتروكيماويات والإنشاءات والقطاعات الصناعية والتجارية والترفيهية.";
  const goalsText =
    "Deliver high-quality solutions with global standards, build lasting relationships through tailored services that exceed customer expectations, promote sustainable growth with eco-friendly practices, advance through technology and expertise, and expand capabilities to reach new sectors and regions.";
  const goalsTextAr =
    "تقديم حلول عالية الجودة وفق المعايير العالمية، وبناء علاقات دائمة من خلال خدمات مصمّمة خصيصًا تتجاوز توقعات العملاء، وتعزيز النمو المستدام بممارسات صديقة للبيئة، والتقدّم عبر التقنية والخبرة، وتوسيع القدرات للوصول إلى قطاعات ومناطق جديدة.";

  return (
    <>
      {!embedded && (
      <SectionWrapperReverse>
        <div
          className="bg-cover bg-center h-[clamp(18rem,46vh,30rem)] flex items-center justify-center"
          style={{ backgroundImage: `url(${SustainbilityBG})` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="font-roboto text-5xl text-white font-light" style={{ letterSpacing: "-0.02em" }}>{t("Our Mission, Vision & ", "رسالتنا ورؤيتنا و")}<span className="text-[#2C95D2]">{t("Goals", "أهدافنا")}</span></h1>
          </motion.div>
        </div>
      </SectionWrapperReverse>
      )}
      <motion.div
        variants={cardAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="container mx-auto px-6 md:px-12 py-16"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: "Mission", labelAr: "الرسالة", text: missionText, textAr: missionTextAr, icon: missionIcon },
            { label: "Vision", labelAr: "الرؤية", text: visionText, textAr: visionTextAr, icon: visionIcon },
            { label: "Goals", labelAr: "الأهداف", text: goalsText, textAr: goalsTextAr, icon: goalsIcon },
          ].map((item) => (
            <div
              key={item.label}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-[#2C95D2]/50"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#2C95D2]/10 transition-transform duration-300 group-hover:scale-110">
                <img src={item.icon} alt="" className="h-8 w-8 brightness-0 invert" />
              </div>
              <h3 className="font-roboto text-xl font-medium text-white mb-3">
                {t(item.label, item.labelAr)}
              </h3>
              <p className="font-roboto font-light leading-relaxed text-white/75">
                {t(item.text, item.textAr)}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default OurStatement;
