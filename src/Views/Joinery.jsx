import React, { useEffect } from "react";
import marineImage from "../Assets/Images/joinery2a.png";
import backgroundImage from "../Assets/Images/main7a.png";
import SectionWrapperReverse from "../Components/SectionWrapperReverse";
import { motion } from "framer-motion";
import { useT } from "../i18n/i18n";
const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const Joinery = ({ embedded }) => {
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
              <h1 className="text-5xl font-bold">{t("Joinery Division", "قطاع أعمال النجارة")}</h1>
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
                {t("Joinery ", "قطاع أعمال النجارة")}<span className="text-[#2C95D2]">{t("Division", "")}</span>
              </h1>
              <div className="space-y-4 text-sm leading-relaxed text-justify text-white/80">
                <p>
                  {t("The ", "يقدّم ")}<span className="font-bold">{t(" ALFA Joinery Division", "قطاع أعمال النجارة في ألفا")}</span>{" "}
                  {t("offers a wide range of high-quality, bespoke joinery solutions for various sectors, including residential, commercial, hospitality and industrial. We provide tailored interior fit-outs, custom wood products, and specialized services that combine craftsmanship, design, and precision to meet the evolving demands of modern projects.", "مجموعة واسعة من حلول النجارة المصممة خصيصًا وعالية الجودة لمختلف القطاعات، بما في ذلك السكنية والتجارية والضيافة والصناعية. ونقدّم تجهيزات داخلية مصممة حسب الطلب، ومنتجات خشبية مخصصة، وخدمات متخصصة تجمع بين الحرفية والتصميم والدقة لتلبية المتطلبات المتطورة للمشاريع الحديثة.")}
                </p>
              </div>

              {/* Core Services */}
              <div className="mt-6">
                <h3 className="font-semibold text-white mb-2">
                  {t("Our Core Services", "خدماتنا الأساسية")}
                </h3>
                <ul className="grid gap-4 sm:grid-cols-2 text-sm text-white/80">
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Custom Joinery", "النجارة المخصصة")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Interior Fit-Outs", "التجهيزات الداخلية")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Wooden Fixtures & Fittings", "التركيبات والتجهيزات الخشبية")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Door & Window", "الأبواب والنوافذ")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Kitchen & Wardrobe Fitting", "تركيب المطابخ وخزائن الملابس")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Carpentry & Woodwork", "النجارة والأعمال الخشبية")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Repairs & Restoration", "الإصلاح والترميم")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Flooring & Cladding", "الأرضيات والكسوة")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Architectural Joinery", "النجارة المعمارية")}</li>
                  <li className="list-none rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] hover:border-[#2C95D2]/50 transition">{t("Exhibition & Event Joinery", "نجارة المعارض والفعاليات")}</li>
                </ul>
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

export default Joinery;
