import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import ChooseUsCard from "./ChooseUsCard";
import { useT } from "../i18n/i18n";

const WhyChooseUs = () => {
  const t = useT();
  return (
    <section
      id="why"
      className="snap-section relative min-h-screen w-full flex items-center overflow-hidden bg-gradient-to-br from-[#0a1428] via-[#11234B] to-[#0a1428] py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3
            className="font-roboto font-light text-[clamp(2.25rem,5vw,3.25rem)] text-white text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            {t("Why", "لماذا")}{" "}
            <span className="text-[#2C95D2]">{t("Choose Us?", "تختارنا؟")}</span>
          </h3>
          <span className="mt-5 mb-7 block h-px w-16 bg-[#2C95D2]" />
          <p
            className="font-roboto font-light text-base md:text-[1.05rem] leading-relaxed text-white/75 max-w-[58ch]"
            style={{ textWrap: "pretty" }}
          >
            {t(
              "At ALFA Group, we don’t just deliver services — we build lasting partnerships. Driven by passion, precision, and innovation, we bring your vision to life with solutions that exceed expectations. Backed by years of expertise, we listen closely, act with integrity, and execute flawlessly — every time. With ALFA Group, your success isn’t just a goal — it’s our commitment.",
              "في مجموعة ألفا، لا نكتفي بتقديم الخدمات، بل نبني شراكات راسخة ودائمة. وبدافعٍ من الشغف والدقة والابتكار، نُجسّد رؤيتكم على أرض الواقع عبر حلول تفوق التوقعات. وبفضل سنوات من الخبرة، نُصغي باهتمام، ونعمل بنزاهة، وننفّذ بإتقانٍ تام في كل مرة. مع مجموعة ألفا، نجاحكم ليس مجرد هدف، بل هو التزامنا."
            )}
          </p>
        </motion.div>

        {/* Advantages */}
        <div>
          <h5 className="font-roboto text-sm font-medium tracking-[0.18em] text-[#2C95D2] mb-4">
            {t("OUR ADVANTAGES", "مزايانا")}
          </h5>
          <ChooseUsCard />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
