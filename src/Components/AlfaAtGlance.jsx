import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import facilityBg from "../Assets/Images/our-facility.png";
import { useT } from "../i18n/i18n";

const EASE = [0.22, 1, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const StatCard = ({ number, label, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.7, triggerOnce: false });
  const numericValue = parseFloat(number.replace(/[^\d.]/g, ""));
  const suffix = number.replace(/[0-9.]/g, "");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="px-4"
    >
      <p className="font-roboto text-[clamp(2.5rem,5vw,3.75rem)] font-light leading-none text-[#2C95D2]">
        {inView && (
          <CountUp start={0} end={numericValue} duration={2} useEasing={true} />
        )}
        {suffix}
      </p>
      <p className="font-roboto font-light text-sm mt-4 text-white/65 leading-snug">
        {label}
      </p>
    </motion.div>
  );
};

const steps = [
  {
    step: "01",
    title: "CONSULTATION",
    titleAr: "الاستشارة",
    desc: "We listen and understand your vision and goals.",
    descAr: "نُصغي إليكم ونفهم رؤيتكم وأهدافكم.",
  },
  {
    step: "02",
    title: "DESIGN & ENGINEERING",
    titleAr: "التصميم والهندسة",
    desc: "Creating meticulous blueprints and innovative solutions tailored to your needs.",
    descAr: "إعداد مخططات دقيقة وحلول مبتكرة مصممة خصيصاً لتلبية احتياجاتكم.",
  },
  {
    step: "03",
    title: "PROCUREMENT",
    titleAr: "التوريد",
    desc: "Securing top-quality materials & resources efficiently.",
    descAr: "تأمين أجود المواد والموارد بكفاءة عالية.",
  },
  {
    step: "04",
    title: "PLANNING",
    titleAr: "التخطيط",
    desc: "Developing a detailed roadmap with optimized timelines & budgets.",
    descAr: "وضع خارطة طريق مفصّلة بجداول زمنية وميزانيات مثلى.",
  },
  {
    step: "05",
    title: "CONSTRUCTION",
    titleAr: "التنفيذ",
    desc: "Skilled execution, ensuring quality & safety from start to finish.",
    descAr: "تنفيذ احترافي يضمن الجودة والسلامة من البداية حتى النهاية.",
  },
  {
    step: "06",
    title: "HANDOVER",
    titleAr: "التسليم",
    desc: "Seamless transition & ongoing support for your success.",
    descAr: "انتقال سلس ودعم مستمر لتحقيق نجاحكم.",
  },
];

const AlfaAtGlance = () => {
  const t = useT();
  return (
    <>
      {/* ===== ALFA AT GLANCE — stat band over facility imagery ===== */}
      <section
        id="glance"
        className="snap-section relative min-h-screen w-full flex items-center overflow-hidden bg-[#0a1428]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${facilityBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1428]/95 via-[#11234B]/85 to-[#0a1428]/95" />

        <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10 text-center">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="font-roboto font-light text-[clamp(2.25rem,5vw,3.25rem)] mb-16 text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="text-[#2C95D2]">{t("ALFA", "ألفا")}</span>{" "}
            {t("AT GLANCE", "في لمحة")}
          </motion.h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 md:divide-x md:divide-white/15 text-center">
            <StatCard
              number="70+"
              label={t("Successful Projects Completed", "مشاريع منجزة بنجاح")}
              delay={0.05}
            />
            <StatCard
              number="10+"
              label={t("Years of Contracting Expertise", "سنوات من الخبرة في المقاولات")}
              delay={0.12}
            />
            <StatCard
              number="185M+"
              label={t("Valuation of Completed Projects", "قيمة المشاريع المنجزة")}
              delay={0.19}
            />
            <StatCard
              number="200+"
              label={t("Global Vendors and Partners", "موردون وشركاء عالميون")}
              delay={0.26}
            />
          </div>
        </div>
      </section>

      {/* ===== OUR WAY — numbered process ===== */}
      <section
        id="ourway"
        className="snap-section relative min-h-screen w-full flex items-center overflow-hidden bg-gradient-to-br from-[#0a1428] via-[#11234B] to-[#0a1428]"
      >
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 py-24">
          <motion.div
            className="mb-16 max-w-3xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1
              className="font-roboto font-light text-[clamp(2.25rem,5vw,3.25rem)] mb-6 text-white"
              style={{ letterSpacing: "-0.02em" }}
            >
              <span className="text-[#2C95D2]">{t("OUR", "طريقتنا")}</span>{" "}
              {t("WAY", "")}
            </h1>
            <p
              className="font-roboto leading-relaxed text-base md:text-[1.05rem] font-light text-white/75 max-w-[62ch]"
              style={{ textWrap: "pretty" }}
            >
              {t(
                "From the first consultation to final handover, we follow a structured,",
                "من الاستشارة الأولى وحتى التسليم النهائي، نتبع نهجاً منظماً"
              )}{" "}
              <strong className="font-medium text-white">
                {t("client-focused approach", "يركّز على العميل")}
              </strong>
              {t(
                ". Every phase from design and procurement to construction is driven by",
                ". وتُدار كل مرحلة، من التصميم والتوريد وصولاً إلى التنفيذ، بـ"
              )}{" "}
              <strong className="font-medium text-white">
                {t("precision, quality,", "الدقة والجودة،")}
              </strong>{" "}
              {t(
                "and a commitment to delivering lasting value.",
                "والالتزام بتقديم قيمة دائمة."
              )}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {steps.map(({ step, title, titleAr, desc, descAr }, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                viewport={{ once: false, amount: 0.3 }}
                className="pt-5 border-t border-white/15"
              >
                <span className="font-roboto text-4xl font-light text-[#2C95D2]/70">
                  {step}
                </span>
                <h3 className="font-roboto font-medium mt-4 text-white tracking-wide">
                  {t(title, titleAr)}
                </h3>
                <p className="font-roboto font-light text-sm mt-2 text-white/60 leading-relaxed">
                  {t(desc, descAr)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AlfaAtGlance;
