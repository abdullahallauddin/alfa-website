import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/hse2a.png";
import aboutinnerbg from "../Assets/Images/markup.png";
import sustainability from "../Assets/Images/sustainability.png";
import innovative from "../Assets/Images/innovative.png";
import yellowicon from "../Assets/Icons/yellowicon.svg";
import pinkicon from "../Assets/Icons/pinkicon.svg";
import AwarenessIcon from "../Assets/Icons/AwarenessIcon.svg";
import RiskIcon from "../Assets/Icons/RiskIcon.svg";
import ClearIcon from "../Assets/Icons/ClearIcon.svg";
import TrainingIcon from "../Assets/Icons/TrainingIcon.svg";
import SafeIcon from "../Assets/Icons/SafeIcon.svg";
import ThirdIcon from "../Assets/Icons/ThirdIcon.svg";
import EmergencyIcon from "../Assets/Icons/EmergencyIcon.svg";
import CommunityIcon from "../Assets/Icons/CommunityIcon.svg";
import ImprovementIcon from "../Assets/Icons/ImprovementIcon.svg";
import { CheckCircle, Info } from "lucide-react";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
import { useT } from "../i18n/i18n";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
// import AboutUSComp from '../Components/AboutUSComp';
const HSEPolicy = ({ embedded }) => {
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
                      HSE <span className="text-[#2C95D2]">Policy</span>
                    </>,
                    <>
                      سياسة <span className="text-[#2C95D2]">الصحة والسلامة والبيئة</span>
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
            {t(
              "Health, Safety & Environmental (HSE) Policy",
              "سياسة الصحة والسلامة والبيئة"
            )}
          </h1>
          <p className="text-lg mt-4 text-justify text-white/75">
            {t(
              "ALFA is dedicated to providing a safe and secure workplace for employees, clients, contractors, suppliers/vendors, and visitors across all facilities and project sites. We believe that through collaboration with clients and partners, occupational risks and environmental impacts can be effectively prevented. ALFA is committed to protecting people, property, and communities, preventing pollution, and upholding the highest industrial standards for safety, health, and environmental sustainability in all its operations.",
              "تلتزم شركة ألفا بتوفير بيئة عمل آمنة ومأمونة للموظفين والعملاء والمقاولين والموردين والزوار في جميع المرافق ومواقع المشاريع. ونؤمن بأنه من خلال التعاون مع العملاء والشركاء يمكن منع المخاطر المهنية والآثار البيئية بفاعلية. وتلتزم شركة ألفا بحماية الأشخاص والممتلكات والمجتمعات، ومنع التلوث، والتمسك بأعلى المعايير الصناعية للسلامة والصحة والاستدامة البيئية في جميع عملياتها."
            )}
          </p>
          <p className="text-lg mt-4 font-bold text-white">
            {t(
              "To achieve this, the Company pledges to:",
              "لتحقيق ذلك، تلتزم الشركة بما يلي:"
            )}
          </p>

          <div className="w-full p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Each HSE Item */}
              {[
                {
                  icon: AwarenessIcon,
                  title: "Promote Awareness and Accountability",
                  titleAr: "تعزيز الوعي والمساءلة",
                  bullets: [
                    "Ensure all employees and visitors understand their responsibilities regarding health, safety, and environmental protection.",
                    "Regularly measure and review their performance to maintain compliance and drive improvement.",
                  ],
                  bulletsAr: [
                    "ضمان فهم جميع الموظفين والزوار لمسؤولياتهم تجاه الصحة والسلامة وحماية البيئة.",
                    "قياس أدائهم ومراجعته بانتظام للحفاظ على الامتثال ودفع عجلة التحسين.",
                  ],
                },
                {
                  icon: RiskIcon,
                  title: "Risk Management",
                  titleAr: "إدارة المخاطر",
                  bullets: [
                    "Identify, assess, and mitigate HSE risks proactively before starting any operation or activity.",
                  ],
                  bulletsAr: [
                    "تحديد مخاطر الصحة والسلامة والبيئة وتقييمها والحد منها بشكل استباقي قبل بدء أي عملية أو نشاط.",
                  ],
                },
                {
                  icon: ClearIcon,
                  title: "Clear Communication",
                  titleAr: "التواصل الواضح",
                  bullets: [
                    "Consistently communicate HSE objectives, policies, and procedures to all employees and stakeholders.",
                  ],
                  bulletsAr: [
                    "التواصل المستمر بأهداف الصحة والسلامة والبيئة وسياساتها وإجراءاتها لجميع الموظفين وأصحاب المصلحة.",
                  ],
                },
                {
                  icon: TrainingIcon,
                  title: "Training and Resources",
                  titleAr: "التدريب والموارد",
                  bullets: [
                    "Equip employees with the necessary training, education, and tools to uphold HSE accountability.",
                  ],
                  bulletsAr: [
                    "تزويد الموظفين بالتدريب والتعليم والأدوات اللازمة للحفاظ على المساءلة في مجال الصحة والسلامة والبيئة.",
                  ],
                },
                {
                  icon: SafeIcon,
                  title: "Facility Design Excellence",
                  titleAr: "التميّز في تصميم المرافق",
                  bullets: [
                    "Design and build facilities using recognized best practices to protect people, property, and the environment.",
                  ],
                  bulletsAr: [
                    "تصميم المرافق وبناؤها باستخدام أفضل الممارسات المعتمدة لحماية الأشخاص والممتلكات والبيئة.",
                  ],
                },
                {
                  icon: ThirdIcon,
                  title: "Safe Operations",
                  titleAr: "العمليات الآمنة",
                  bullets: [
                    "Operate and maintain facilities to safeguard the health and safety of all personnel and visitors.",
                  ],
                  bulletsAr: [
                    "تشغيل المرافق وصيانتها بما يحفظ صحة وسلامة جميع العاملين والزوار.",
                  ],
                },
                {
                  icon: EmergencyIcon,
                  title: "Emergency Readiness",
                  titleAr: "الجاهزية للطوارئ",
                  bullets: [
                    "Maintain preparedness and respond swiftly and effectively to any emergencies or incidents.",
                  ],
                  bulletsAr: [
                    "الحفاظ على الجاهزية والاستجابة السريعة والفعّالة لأي حالات طوارئ أو حوادث.",
                  ],
                },
                {
                  icon: CommunityIcon,
                  title: "Incident Management",
                  titleAr: "إدارة الحوادث",
                  bullets: [
                    "Report, investigate, and analyze all incidents to promote transparency and continuous improvement.",
                  ],
                  bulletsAr: [
                    "الإبلاغ عن جميع الحوادث والتحقيق فيها وتحليلها لتعزيز الشفافية والتحسين المستمر.",
                  ],
                },
                {
                  icon: ImprovementIcon,
                  title: "Community Safety",
                  titleAr: "سلامة المجتمع",
                  bullets: [
                    "Encourage practices that promote health and safety both within the workplace and the wider community.",
                  ],
                  bulletsAr: [
                    "تشجيع الممارسات التي تعزز الصحة والسلامة داخل مكان العمل وفي المجتمع الأوسع على حد سواء.",
                  ],
                },
              ].map(({ icon, title, titleAr, bullets, bulletsAr }, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <img src={icon} alt={t(title, titleAr)} className="w-9 h-9 mt-1 brightness-0 invert" />
                  <div>
                    <h3
                      className="font-semibold text-lg mb-1 text-white font-roboto font-light"
                    >
                      {t(title, titleAr)}
                    </h3>
                    <ul className="text-white/75 text-sm space-y-1">
                      {bullets.map((text, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle
                            size={20}
                            className="text-green-500 me-2 mt-1"
                          />
                          <span className="text-white/75">{t(text, bulletsAr[i])}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* <div
        className="relative bg-cover h-[340px] bg-center pt-8 pb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutinnerbg})` }}
      ></div> */}
    </>
  );
};

export default HSEPolicy;
