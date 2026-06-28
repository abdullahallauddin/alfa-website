import React, { useEffect } from "react";
import marineImage from "../Assets/Images/facility2a.png";
import backgroundImage from "../Assets/Images/main6a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { Accordion, AccordionItem } from "../Components/Accordion";
import { motion } from "framer-motion";
import { useT } from "../i18n/i18n";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const FacilityManagement = ({ embedded }) => {
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
              <h1 className="text-5xl font-bold">
                {t("Facility Management Division", "قطاع إدارة المرافق")}
              </h1>
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
                {t("Facility Management ", "قطاع إدارة المرافق")}<span className="text-[#2C95D2]">{t("Division", "")}</span>
              </h1>
              <div className="space-y-4 text-sm leading-relaxed text-justify text-white/80">
                <p>
                  <span className="font-bold">{t("ALFA's", "ألفا")}</span>{t(" Facility Management Division ensures smooth operation and maintenance of buildings and industrial sites, with a customer-focused approach to meeting business goals. Our services include HVAC, electrical, plumbing maintenance, energy and waste management, janitorial services, landscaping, and catering, all designed for safety, efficiency and sustainability.", "، يضمن قطاع إدارة المرافق التشغيل والصيانة السلسة للمباني والمواقع الصناعية، باتباع نهج يركّز على العميل لتحقيق أهداف العمل. وتشمل خدماتنا صيانة أنظمة التكييف والكهرباء والسباكة، وإدارة الطاقة والنفايات، وخدمات النظافة، وتنسيق الحدائق، والتموين، وكلها مصممة لتحقيق السلامة والكفاءة والاستدامة.")}
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6">
                <h3 className="font-semibold text-white mb-2">
                  {t("Our Core Services", "خدماتنا الأساسية")}
                </h3>
                <Accordion defaultOpen={[0]}>
                  <AccordionItem id={0} title={t("Technical Operations & Maintenance", "العمليات والصيانة الفنية")}>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <p>
                        {t("We offer Proactive and Reactive maintenance for HVAC and MEP systems:", "نقدّم صيانة استباقية وتفاعلية لأنظمة التكييف (HVAC) والأنظمة الميكانيكية والكهربائية والصحية (MEP):")}
                      </p>
                      <li>
                        <span className="font-bold">{t("Proactive maintenance:", "الصيانة الاستباقية:")}</span>{" "}
                        {t("Preventive, Predictive, Condition-Based, Scheduled, Planned, and Routine maintenance.", "الصيانة الوقائية والتنبؤية والقائمة على الحالة والمجدولة والمخططة والروتينية.")}
                      </li>
                      <li>
                        <span className="font-bold">{t("Reactive Maintenance:", "الصيانة التفاعلية:")}</span>{" "}
                        {t("Emergency and Corrective repairs.", "إصلاحات الطوارئ والإصلاحات التصحيحية.")}
                      </li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={1} title={t("Office & Mover Services", "خدمات المكاتب والنقل")}>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>
                        <span className="font-bold">
                          {t("Space Planning & Move Management:", "تخطيط المساحات وإدارة النقل:")}
                        </span>{" "}
                        {t("Office setup, relocation, and reorganization.", "إعداد المكاتب ونقلها وإعادة تنظيمها.")}
                      </li>
                      <li>
                        <span className="font-bold">{t("Office Relocation:", "نقل المكاتب:")}</span>{" "}
                        {t("Packing, transport, and reinstallation of office equipment. Internal Moves: Departmental and workstation reorganization.", "تغليف ونقل وإعادة تركيب معدات المكاتب. عمليات النقل الداخلية: إعادة تنظيم الأقسام ومحطات العمل.")}
                      </li>
                      <li>
                        <span className="font-bold">{t("Internal Moves:", "عمليات النقل الداخلية:")}</span>{" "}
                        {t("Departmental and workstation reorganization.", "إعادة تنظيم الأقسام ومحطات العمل.")}
                      </li>
                      <li>
                        <span className="font-bold">
                          {t("Furniture Disassembly & Assembly:", "تفكيك وتركيب الأثاث:")}
                        </span>{" "}
                        {t("Professional handling during moves.", "مناولة احترافية أثناء عمليات النقل.")}
                      </li>
                      <li>
                        <span className="font-bold">{t("Storage Solutions: ", "حلول التخزين: ")}</span>{" "}
                        {t("Secure short- and long-term storage.", "تخزين آمن قصير وطويل الأمد.")}
                      </li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={2} title={t("Soft Services", "الخدمات المساندة")}>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>
                        <span className="font-bold">{t("Janitorial Services:", "خدمات النظافة:")}</span>{" "}
                        {t("Regular cleaning of hygienic spaces.", "تنظيف منتظم للمساحات الصحية.")}
                      </li>
                      <li>
                        <span className="font-bold">{t("Landscaping: ", "تنسيق الحدائق: ")}</span> {t("Facility aesthetics maintenance.", "الحفاظ على المظهر الجمالي للمرفق.")}
                      </li>
                      <li>
                        <span className="font-bold">{t("Waste Management:", "إدارة النفايات:")}</span>{" "}
                        {t("Sustainable disposal and recycling.", "التخلص المستدام وإعادة التدوير.")}
                      </li>
                      <li>
                        <span className="font-bold">{t("Bio-Clean Services:", "خدمات التنظيف الحيوي:")}</span>{" "}
                        {t("Specialized cleaning for sensitive environments.", "تنظيف متخصص للبيئات الحساسة.")}
                      </li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem id={3} title={t("Catering Services", "خدمات التموين")}>
                    <ul className="list-disc list-inside text-sm space-y-1 text-white/80 marker:text-[#2C95D2]">
                      <li>
                        {t("Professional catering for corporate events and daily office meals, enhancing workplace satisfaction", "تموين احترافي للفعاليات المؤسسية والوجبات المكتبية اليومية، بما يعزز الرضا في مكان العمل")}
                      </li>
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

export default FacilityManagement;
