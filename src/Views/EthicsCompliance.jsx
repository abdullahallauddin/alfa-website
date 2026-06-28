import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/eac2a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
import { useT } from "../i18n/i18n";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const EthicsCompliance = ({ embedded }) => {
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
          <div className="absolute inset-0 h-110 bg-black/70 h-[clamp(18rem,46vh,30rem)]"></div>
          {/* Overlay Content */}
          <div className="relative flex flex-col items-center justify-center h-full text-white">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-center lg:mt-120 md:mt-90 justify-center min-h-screen text-center sm:block">
                <h1 className="text-5xl font-bold text-white font-roboto font-light" style={{ letterSpacing: "-0.02em" }}>
                  {t(
                    <>
                      Ethics & <span className="text-[#2C95D2]">Compliance</span>
                    </>,
                    <>
                      الأخلاقيات <span className="text-[#2C95D2]">والامتثال</span>
                    </>
                  )}
                </h1>
              </div>
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
        <div className="w-full py-6 md:py-10 max-w-6xl mx-auto">
          <h1
            className="text-4xl font-bold mb-4 text-center md:text-start text-white font-roboto font-light"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t("Ethics & Compliance", "الأخلاقيات والامتثال")}
          </h1>
          <p className="text-lg mt-4 text-justify text-white/75">
            {t(
              "At ALFA, we understand the urgent environmental challenges facing the world today, including climate change, resource depletion, waste management, and pollution. These issues not only impact our daily lives but also influence the way we do business. In response to these challenges, we are committed to implementing sustainable practices that reduce our environmental footprint and contribute to a healthier planet.",
              "ندرك في شركة ألفا التحديات البيئية الملحّة التي يواجهها العالم اليوم، بما في ذلك تغيّر المناخ، ونضوب الموارد، وإدارة النفايات، والتلوث. ولا تؤثر هذه القضايا في حياتنا اليومية فحسب، بل تؤثر أيضًا في الطريقة التي نُدير بها أعمالنا. واستجابةً لهذه التحديات، نلتزم بتطبيق ممارسات مستدامة تُقلّل من بصمتنا البيئية وتُسهم في كوكب أكثر صحة."
            )}
          </p>
          <p className="text-lg mt-4 text-justify text-white/75">
            {t(
              "Environmental responsibility is a cornerstone of our operations. We actively work to preserve natural resources, minimize waste, and reduce the environmental impact of our services, products, and activities. Our culture of sustainability drives continuous innovation, operational efficiency, and a commitment to preserving the environment for future generations.",
              "تُمثّل المسؤولية البيئية ركيزة أساسية في عملياتنا. فنحن نعمل بفاعلية على الحفاظ على الموارد الطبيعية، وتقليل النفايات، والحد من الأثر البيئي لخدماتنا ومنتجاتنا وأنشطتنا. وتدفع ثقافة الاستدامة لدينا نحو الابتكار المستمر، والكفاءة التشغيلية، والالتزام بالحفاظ على البيئة للأجيال القادمة."
            )}
          </p>
          <p className="text-lg mt-4 text-justify text-white/75">
            {t(
              "Our Environmental Management System, certified to the ISO 14001:2015 standard, guides our efforts to systematically assess and manage our environmental impact. We prioritize responsible resource use, energy efficiency, and waste minimization, focusing on reuse and recycling wherever possible.",
              "يُوجّه نظام الإدارة البيئية لدينا، المعتمد وفق معيار ISO 14001:2015، جهودنا في تقييم أثرنا البيئي وإدارته بصورة منهجية. ونُعطي الأولوية للاستخدام المسؤول للموارد، وكفاءة الطاقة، وتقليل النفايات، مع التركيز على إعادة الاستخدام وإعادة التدوير كلما أمكن ذلك."
            )}
          </p>
          <p className="text-lg mt-4 text-justify text-white/75">
            {t(
              "We engage our employees, contractors, and stakeholders in promoting environmental stewardship and raise awareness about the importance of protecting the environment. Our goal is to prevent pollution, reduce emissions, and incorporate sustainable materials in the design and delivery of our products and services.",
              "نُشرك موظفينا والمقاولين وأصحاب المصلحة في تعزيز الرعاية البيئية، ونرفع مستوى الوعي بأهمية حماية البيئة. ويتمثّل هدفنا في منع التلوث، وخفض الانبعاثات، ودمج المواد المستدامة في تصميم منتجاتنا وخدماتنا وتقديمها."
            )}
          </p>
          <p className="text-lg mt-4 text-justify text-white/75">
            {t(
              "Through our Green Products Initiative, we aim to integrate environmentally friendly materials, systems, and solutions into every aspect of our offerings, ensuring that the post-delivery impact on the environment is minimized.",
              "ومن خلال مبادرة المنتجات الخضراء لدينا، نسعى إلى دمج المواد والأنظمة والحلول الصديقة للبيئة في كل جانب من جوانب ما نُقدّمه، بما يضمن تقليل الأثر البيئي بعد التسليم إلى أدنى حد ممكن."
            )}
          </p>
        </div>
      </motion.div>

      {/* <div
        className="relative bg-cover h-[440px] bg-center pt-8 pb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutinnerbg})` }}
      >
      </div> */}
    </>
  );
};

export default EthicsCompliance;
