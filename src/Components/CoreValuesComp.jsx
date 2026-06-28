import React from "react";
import { useT } from "../i18n/i18n";

const CoreValuesComp = ({ icon, title, description }) => {
  const t = useT();
  return (
    <div className="relative w-64 rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.09] hover:border-[#2C95D2]/50">
      <div className="flex justify-center items-center bg-[#2C95D2]/10">
        <img src={icon} alt={t("Icon", "أيقونة")} className="object-cover w-full h-full" />
      </div>
      <div className="p-5 text-center">
        <h3 className="font-roboto text-lg font-medium text-white">{title}</h3>
        <p className="font-roboto text-sm font-light text-white/70 mt-2">{description}</p>
      </div>
      {/* <div className="absolute bottom-2 right-2 text-gray-400 text-2xl">
        &rsaquo;
      </div> */}
    </div>
  );
};

export default CoreValuesComp;
