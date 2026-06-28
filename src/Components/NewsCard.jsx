import React from "react";
import { useT } from "../i18n/i18n";

const NewsCard = ({ image, title, description, onClick }) => {
  const t = useT();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow border" style={{ color: "#20376D" }}>
      <img src={image} alt={title} className="w-full h-24 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-700 mb-4" style={{ color: "#20376D" }}>{description}</p>
        <button
          onClick={onClick}
          className="bg-[#20376D] text-white text-sm px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          {t("Read More", "اقرأ المزيد")}
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
