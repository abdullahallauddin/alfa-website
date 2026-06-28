import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/qap2a.png";
import aboutinnerbg from "../Assets/Icons/QAPImage.svg";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
import { useT } from "../i18n/i18n";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
// import AboutUSComp from '../Components/AboutUSComp';
const QualityAssurancePolicy = ({ embedded }) => {
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
          <div className="absolute inset-0 h-110 bg-black/80 h-[clamp(18rem,46vh,30rem)]"></div>
          {/* Overlay Content */}
          <div className="relative flex flex-col items-center justify-center h-full text-white">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-center lg:mt-120 md:mt-90 justify-center min-h-screen text-center sm:block">
                <h1 className="text-5xl font-bold text-white font-roboto font-light" style={{ letterSpacing: "-0.02em" }}>{t(<>Quality Assurance <span className="text-[#2C95D2]">Policy</span></>, <>سياسة ضمان <span className="text-[#2C95D2]">الجودة</span></>)}</h1>
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
            {t("Quality Assurance Policy", "سياسة ضمان الجودة")}
          </h1>
          <p className="text-lg mt-4 text-justify text-white/75">
            {t(
              "At ALFA, we are committed to delivering high-quality, professional, and efficient services that meet and exceed the expectations of our clients. Our goal is to ensure long-term sustainability and profitability for the organization, underpinned by a strong customer focus and continuous improvement in every aspect of our operations.",
              "نلتزم في شركة ألفا بتقديم خدمات عالية الجودة ومهنية وفعّالة تلبّي توقعات عملائنا وتتجاوزها. ويتمثّل هدفنا في ضمان استدامة المؤسسة وربحيتها على المدى الطويل، مدعومين بتركيز قوي على العميل وتحسين مستمر في كل جانب من جوانب عملياتنا."
            )}
          </p>
          <p className="text-lg mt-4 text-justify text-white/75">
            {t(
              "Our Management Team plays a critical role in this commitment, taking responsibility for establishing, implementing, integrating, and maintaining our Quality Management System (QMS). By ensuring that adequate resources are allocated across the organization, we guarantee that our QMS supports the achievement of our quality objectives.",
              "يؤدّي فريق الإدارة لدينا دورًا محوريًا في هذا الالتزام، إذ يتحمّل مسؤولية إنشاء نظام إدارة الجودة وتطبيقه ودمجه والحفاظ عليه. ومن خلال ضمان تخصيص الموارد الكافية في جميع أنحاء المؤسسة، نضمن أن يدعم نظام إدارة الجودة لدينا تحقيق أهداف الجودة."
            )}
          </p>
          <p className="text-lg mt-4 text-justify text-white/75">
            {t(
              "We foster a Quality Culture throughout the company by promoting open communication, providing ongoing training, and encouraging active engagement. Each employee understands the importance of the Quality System, their responsibility in contributing to its effectiveness, and how it directly impacts the success of the organization.",
              "نُرسّخ ثقافة الجودة في جميع أنحاء الشركة من خلال تعزيز التواصل المفتوح، وتوفير التدريب المستمر، وتشجيع المشاركة الفعّالة. ويُدرك كل موظف أهمية نظام الجودة، ومسؤوليته في الإسهام في فاعليته، وكيفية تأثيره المباشر في نجاح المؤسسة."
            )}
          </p>
          <p className="text-lg mt-4 text-justify text-white/75">
            {t(
              "Every team member is trained and empowered to perform the duties required by their role in maintaining the highest quality standards. Our Quality System is regularly monitored, measured, evaluated, and continuously enhanced, with top management overseeing the process and ensuring that its status and effectiveness are communicated at all levels within the organization.",
              "يحصل كل عضو في الفريق على التدريب والتمكين اللازمين لأداء المهام التي يتطلبها دوره في الحفاظ على أعلى معايير الجودة. ويخضع نظام الجودة لدينا للمراقبة والقياس والتقييم والتحسين المستمر بصورة منتظمة، مع إشراف الإدارة العليا على العملية وضمان إيصال حالته وفاعليته إلى جميع المستويات داخل المؤسسة."
            )}
          </p>
        </div>
      </motion.div>
      <div className="flex items-center justify-center mb-12">
        <img
          src={aboutinnerbg}
          alt={t("About Background", "خلفية تعريفية")}
          className="w-full sm:w-[400px] md:w-[500px] lg:w-[800px] xl:w-[800px] h-auto mx-auto"
        />
      </div>{" "}
    </>
  );
};

export default QualityAssurancePolicy;
