import React from "react";
import { motion } from "framer-motion";
import ceoImg from "../Assets/Images/ceo-image1.jpg";
import { useT } from "../i18n/i18n";

const EASE = [0.22, 1, 0.36, 1];

const CeoMessage = () => {
  const t = useT();
  return (
    <section
      id="ceo"
      className="snap-section relative min-h-screen w-full flex items-center overflow-hidden bg-gradient-to-br from-[#0a1428] via-[#11234B] to-[#0a1428]"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 py-24 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1
            className="font-roboto font-light text-[clamp(2.25rem,5vw,3.25rem)] text-white text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t("CEO ", "رسالة ")}<span className="text-[#2C95D2]">{t("Message", "الرئيس التنفيذي")}</span>
          </h1>
          <span className="mt-5 mb-8 block h-px w-16 bg-[#2C95D2]" />
          <div
            className="font-roboto font-light text-base md:text-[1.05rem] space-y-5 leading-relaxed text-white/75 max-w-[62ch]"
            style={{ textWrap: "pretty" }}
          >
            <p>
              {t(
                "At ALFA Group, we are driven by a simple yet powerful vision: to provide our clients with exceptional services and solutions that exceed expectations and create lasting value.",
                "في مجموعة ألفا، تحرّكنا رؤية بسيطة لكنها قوية: أن نقدّم لعملائنا خدمات وحلولًا استثنائية تتجاوز التوقعات وتخلق قيمة دائمة."
              )}
            </p>
            <p>
              {t(
                "Since our establishment in 2014, we have worked tirelessly to build a company that thrives on quality, innovation, and integrity. Our growth has been shaped by our dedication to safety, excellence, and customer satisfaction. We are a one-stop solution provider serving diverse sectors including Oil & Gas, Renewable Energy, Marine, Defense, Construction, and more—delivering tailored solutions through our specialized divisions.",
                "منذ تأسيسنا عام 2014، عملنا بلا كلل لبناء شركة تزدهر بالجودة والابتكار والنزاهة. وقد تشكّل نموّنا بفضل التزامنا بالسلامة والتميّز ورضا العملاء. ونحن مزوّد حلول متكامل يخدم قطاعات متنوعة تشمل النفط والغاز والطاقة المتجددة والقطاع البحري والدفاع والإنشاءات وغيرها، ونقدّم حلولًا مصمّمة خصيصًا عبر أقسامنا المتخصصة."
              )}
            </p>
            <p>
              {t(
                "As we look to the future, we remain focused on our goal of expanding our portfolio and reaching new heights of success, ensuring that ALFA Group continues to be a trusted partner for businesses across the globe.",
                "وبينما نتطلّع إلى المستقبل، نظلّ مركّزين على هدفنا في توسيع محفظتنا وبلوغ آفاق جديدة من النجاح، بما يضمن استمرار مجموعة ألفا شريكًا موثوقًا للأعمال في جميع أنحاء العالم."
              )}
            </p>
            <p className="pt-2 text-white/90">
              {t("Sincerely,", "مع خالص التقدير،")}
              <br />
              <strong className="font-medium text-white">
                {t("Chief Executive Officer", "الرئيس التنفيذي")}
              </strong>
            </p>
          </div>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] w-full max-w-md ms-auto overflow-hidden">
            <img
              src={ceoImg}
              alt={t("ALFA Group leadership", "قيادة مجموعة ألفا")}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1428] via-[#0a1428]/15 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeoMessage;
