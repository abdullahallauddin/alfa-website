import React, { useEffect } from "react";
import marineImage from "../Assets/Images/trading2a.png";
import backgroundImage from "../Assets/Images/main3a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { Accordion, AccordionItem } from "../Components/Accordion";
import { motion } from "framer-motion";
import { useT } from "../i18n/i18n";
const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const TradingDivision = ({ embedded }) => {
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
              <h1 className="text-5xl font-bold">{t("Trading Division", "قطاع التجارة والتوريد")}</h1>
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
                {t("Trading ", "قطاع التجارة والتوريد")}<span className="text-[#2C95D2]">{t("Division", "")}</span>
              </h1>
              <div className="space-y-4 text-sm leading-relaxed text-justify text-white/80">
                <p>
                  <span className="font-bold">{t("ALFA Trading Division", "قطاع التجارة والتوريد في ألفا")}</span>{t(" is a leading supplier serving the Marine, Offshore, Defense, Oil & Gas, and Industrial sectors. We provide a full range of high-quality products and technical materials that meet international standards.", " يُعدّ مورّدًا رائدًا يخدم قطاعات البحرية والمنشآت البحرية والدفاع والنفط والغاز والصناعة. ونوفّر مجموعة كاملة من المنتجات عالية الجودة والمواد التقنية التي تلبي المعايير الدولية.")}
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6">
                <h3 className="font-semibold text-white mb-2">
                  {t("Our Range of Products and Supplies", "تشكيلتنا من المنتجات والتوريدات")}
                </h3>
                <Accordion defaultOpen={[0]}>
                  <AccordionItem id={0} title={t("Electrical Equipment and Materials", "المعدات والمواد الكهربائية")}>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>{t("Power Equipment", "معدات الطاقة")}</li>
                      <li>{t("Switchgear & Circuit Protection", "لوحات التوزيع وحماية الدوائر")}</li>
                      <li>{t("Electrical Accessories", "الإكسسوارات الكهربائية")}</li>
                      <li>{t("Lighting & Control", "الإضاءة والتحكم")}</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={1} title={t("Mechanical Equipment", "المعدات الميكانيكية")}>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>{t("Valves & Fittings", "الصمامات والتجهيزات")}</li>
                      <li>{t("Pumps and Motors", "المضخات والمحركات")}</li>
                      <li>{t("Tools & Accessories", "الأدوات والإكسسوارات")}</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={2} title={t("Mechanical Equipment", "المعدات الميكانيكية")}>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>{t("Valves & Fittings", "الصمامات والتجهيزات")}</li>
                      <li>{t("Pumps and Motors", "المضخات والمحركات")}</li>
                      <li>{t("Tools & Accessories", "الأدوات والإكسسوارات")}</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={3} title={t("Process Measurement Instruments", "أجهزة قياس العمليات")}>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>{t("Level, Flow Instrument", "أجهزة قياس المستوى والتدفق")}</li>
                      <li>{t("Temperature Measurement", "قياس درجة الحرارة")}</li>
                      <li>{t("Measurement Instruments", "أجهزة القياس")}</li>
                      <li>{t("Calibration Equipment", "معدات المعايرة")}</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={4} title={t("IT and Office Equipment", "معدات تقنية المعلومات والمكاتب")}>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>{t("Computers & Accessories", "الحواسيب والإكسسوارات")}</li>
                      <li>{t("Networking & Security", "الشبكات والأمن")}</li>
                      <li>{t("Office Furniture and Stationery", "الأثاث المكتبي والقرطاسية")}</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={5} title={t("General Industrial Supplies", "التوريدات الصناعية العامة")}>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>{t("Marine & Offshore Equipment", "معدات البحرية والمنشآت البحرية")}</li>
                      <li>{t("Safety Equipment", "معدات السلامة")}</li>
                      <li>{t("Deck Equipment and Supplies", "معدات وتوريدات سطح السفينة")}</li>
                      <li>{t("Lifting & Rigging Equipment", "معدات الرفع والتجهيز")}</li>
                      <li>{t("Piping and Industrial Components", "الأنابيب والمكونات الصناعية")}</li>
                      <li>{t("Laboratory Equipment", "معدات المختبرات")}</li>
                      <li>{t("Kitchen & Wet Units", "وحدات المطابخ والوحدات الرطبة")}</li>
                      <li>{t("Uniforms & Liners", "الأزياء الموحدة والبطانات")}</li>
                      <li>{t("Marine and Safety Accessories", "إكسسوارات البحرية والسلامة")}</li>
                      <li>{t("Storage and Warehousing racking", "رفوف التخزين والمستودعات")}</li>
                      <li>{t("Emergency Response Equipment", "معدات الاستجابة للطوارئ")}</li>
                      <li>{t("Safety Signage and Labels", "لافتات وعلامات السلامة")}</li>
                      <li>{t("Labeling and Packing Materials", "مواد التوسيم والتغليف")}</li>
                      <li>{t("Packing and Processing Equipment", "معدات التغليف والمعالجة")}</li>
                      <li>{t("Cleaning Equipment", "معدات التنظيف")}</li>
                      <li>{t("Fire Extinguishers & Suppression Systems", "طفايات الحريق وأنظمة الإخماد")}</li>
                      <li>{t("Gas Cylinder Replenishment and Recharge", "إعادة تعبئة وشحن أسطوانات الغاز")}</li>
                    </ul>
                  </AccordionItem>
                </Accordion>
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

export default TradingDivision;
