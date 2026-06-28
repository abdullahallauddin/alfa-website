import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/whistle.png";
import contactuscall from "../Assets/Icons/callus.svg";
import contactusemail from "../Assets/Icons/emailus.svg";
import { motion } from "framer-motion";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { useT } from "../i18n/i18n";
// import AboutUSComp from '../Components/AboutUSComp';
const WhistleBlowing = ({ embedded }) => {
  const t = useT();
  const contactusdetails = [
    {
      id: 1,
      logo: contactuscall,
      title: "Call Us",
      titleAr: "اتصل بنا",
      description: "+966 13 805 2528",
    },
    {
      id: 2,
      logo: contactusemail,
      title: "Mail Us",
      titleAr: "راسلنا",
      description: "Ethics@alfamarinesa.com",
    },
  ];
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
              // className="md:w-2/2 mb-6 md:mb-0"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl font-bold text-center text-white font-roboto font-light" style={{ letterSpacing: "-0.02em" }}>
                {t("Whistle ", "الإبلاغ ")}
                <span className="text-[#2C95D2]">
                  {t("Blowing", "عن المخالفات")}
                </span>
              </h1>
            </motion.div>
          </div>
        </div>
      </SectionWrapperReverse>
      )}
      <motion.div
        className="md:w-2/2 mb-6 md:mb-0"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="w-full py-6 md:py-10 max-w-6xl mx-auto">
          <h1
            className="text-4xl font-bold mb-4 text-center md:text-start text-white font-roboto font-light"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t("Whistle Blowing Helpline", "خط الإبلاغ عن المخالفات")}
          </h1>
          <p className="text-lg mt-4 text-white/75">
            {t(
              "To ensure a thorough investigation, please provide sufficient details in your concern or complaint, including the following, where applicable:",
              "لضمان إجراء تحقيق شامل، يُرجى تقديم تفاصيل كافية في بلاغكم أو شكواكم، بما في ذلك ما يلي، حيثما ينطبق:"
            )}
          </p>
          <ul
            className="list-disc list-inside text-md space-y-1 mt-4 text-white/75 marker:text-[#2C95D2]"
          >
            <li>
              {t(
                "Your name and contact information (reports may be made anonymously, though please note that anonymity may limit the investigation’s scope)",
                "اسمك ومعلومات التواصل الخاصة بك (يمكن تقديم البلاغات بصورة مجهولة، مع ملاحظة أنّ إخفاء الهوية قد يحدّ من نطاق التحقيق)"
              )}
            </li>
            <li>
              {t(
                "A detailed description of the improper activity",
                "وصف مفصّل للنشاط غير السليم"
              )}
            </li>
            <li>
              {t(
                "Names of individuals, departments, or employees involved or aware of the activity",
                "أسماء الأفراد أو الإدارات أو الموظفين المتورطين في النشاط أو المطّلعين عليه"
              )}
            </li>
            <li>
              {t(
                "Approximate or actual dates the activity occurred",
                "التواريخ التقريبية أو الفعلية التي وقع فيها النشاط"
              )}
            </li>
            <li>
              {t("Supporting documents or evidence", "المستندات أو الأدلة الداعمة")}
            </li>
            <li>
              {t("Any steps you have already taken internally with ", "أي خطوات سبق أن اتخذتها داخلياً مع إدارة ")}
              <span className="font-bold">{t("ALFA", "ألفا")}</span>
              {t(" management to report or resolve the concern", " للإبلاغ عن البلاغ أو معالجته")}
            </li>
          </ul>
          <p className="mt-8 text-white/75">
            {t(
              "ALFA strictly prohibits any form of retaliation and will not take any adverse action against individuals who, in good faith, report a concern or complaint, or who participate in the investigation of such matters",
              "تحظر ألفا حظراً تاماً أي شكل من أشكال الانتقام، ولن تتّخذ أي إجراء سلبي بحق الأشخاص الذين يبلّغون بحسن نية عن بلاغ أو شكوى، أو الذين يشاركون في التحقيق في مثل هذه الأمور"
            )}
          </p>
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="container px-4 py-8 flex flex-wrap justify-center gap-12">
              {contactusdetails.map((contactusdetail) => (
                <div
                  key={contactusdetail.id}
                  className="flex justify-center w-full md:w-auto"
                >
                  <a
                    href={
                      contactusdetail.title === "Call Us"
                        ? `tel:${contactusdetail.description}`
                        : `mailto:${contactusdetail.description}`
                    }
                    className="bg-white/5 border border-white/10 w-96 p-4 rounded-lg shadow-xl rounded-bl-3xl rounded-tr-3xl cursor-pointer block transition hover:scale-105 hover:bg-white/10"
                  >
                    <div className="mb-8 flex align-left ms-4 mt-4">
                      <img
                        src={contactusdetail.logo}
                        alt={t(contactusdetail.title, contactusdetail.titleAr)}
                        className="h-8 w-8 brightness-0 invert"
                      />
                    </div>
                    <h3
                      className="text-xl font-bold mb-2 align-left ms-4 text-white"
                    >
                      {t(contactusdetail.title, contactusdetail.titleAr)}
                    </h3>
                    <p
                      className="mt-6 mb-8 align-left ms-4 text-white/75"
                    >
                      <bdi dir="ltr">{contactusdetail.description}</bdi>
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WhistleBlowing;
