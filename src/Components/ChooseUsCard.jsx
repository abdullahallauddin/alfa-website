import React from "react";
import { motion } from "framer-motion";
import OneStop from "../Assets/Icons/one-stop.svg";
import Industry from "../Assets/Icons/industry.svg";
import Proven from "../Assets/Icons/proven.svg";
import Quality from "../Assets/Icons/quality.svg";
import Experienced from "../Assets/Icons/experienced.svg";
import Innovation from "../Assets/Icons/innovation.svg";
import Regional from "../Assets/Icons/regional.svg";
import { useT } from "../i18n/i18n";

const ChooseUsCard = () => {
  const t = useT();
  const cards = [
    {
      id: 1,
      link: "one-stop-solution-provider",
      logo: OneStop,
      title: "One-Stop Solution Provider",
      titleAr: "مزوّد حلول متكامل",
    },
    {
      id: 2,
      link: "industry-diversification",
      logo: Industry,
      title: "Industry Diversification",
      titleAr: "التنوّع القطاعي",
    },
    {
      id: 3,
      link: "proven-track-record",
      logo: Proven,
      title: "Proven Track Record",
      titleAr: "سجل حافل بالإنجازات",
    },
    {
      id: 4,
      link: "quality-and-compliance",
      logo: Quality,
      title: "Quality & Compliance",
      titleAr: "الجودة والامتثال",
    },
    {
      id: 5,
      link: "experienced-and-dedicated-teams",
      logo: Experienced,
      title: "Experienced & Dedicated Teams",
      titleAr: "فِرق عمل خبيرة ومتفانية",
    },
    {
      id: 6,
      link: "innovation-and-investment",
      logo: Innovation,
      title: "Innovation & Investment",
      titleAr: "الابتكار والاستثمار",
    },
    {
      id: 7,
      link: "regional-reach-and-responsiveness",
      logo: Regional,
      title: "Regional Reach & Responsiveness",
      titleAr: "الانتشار الإقليمي وسرعة الاستجابة",
    },
  ];

  return (
    <ul className="divide-y divide-white/10 border-y border-white/10">
      {cards.map((card, index) => (
        <motion.li
          key={card.id}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: false, amount: 0.4 }}
          className="group flex items-center gap-4 py-4"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2C95D2]/10 ring-1 ring-[#2C95D2]/30 transition-colors duration-300 group-hover:bg-[#2C95D2]/20">
            <img
              src={card.logo}
              alt=""
              aria-hidden="true"
              className="h-5 w-5 brightness-0 invert"
            />
          </span>
          <h3 className="font-roboto font-light text-lg text-white/85 transition-colors duration-300 group-hover:text-white">
            {t(card.title, card.titleAr)}
          </h3>
        </motion.li>
      ))}
    </ul>
  );
};

export default ChooseUsCard;
