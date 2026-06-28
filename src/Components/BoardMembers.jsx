import React from "react";
import "../BoardMembers.css"; // external CSS for better clarity
import normalImage from "../Assets/Images/normalImage.png"
import hoverImage from "../Assets/Images/hoverImage.png"
import { useT } from "../i18n/i18n";

const members = [
  {
    name: "Waleed Al-Mulhim",
    nameAr: "وليد المُلحم",
    role: "Board Member",
    roleAr: "عضو مجلس الإدارة",
    image: normalImage,
    hoverImage: hoverImage,
  },
  {
    name: "Waleed Al-Mulhim",
    nameAr: "وليد المُلحم",
    role: "Board Member",
    roleAr: "عضو مجلس الإدارة",
    image: normalImage,
    hoverImage: hoverImage,
  },
  {
    name: "Waleed Al-Mulhim",
    nameAr: "وليد المُلحم",
    role: "Board Member",
    roleAr: "عضو مجلس الإدارة",
    image: normalImage,
    hoverImage: hoverImage,
  },
  {
    name: "Waleed Al-Mulhim",
    nameAr: "وليد المُلحم",
    role: "Board Member",
    roleAr: "عضو مجلس الإدارة",
    image: normalImage,
    hoverImage: hoverImage,
  },
  {
    name: "Waleed Al-Mulhim",
    nameAr: "وليد المُلحم",
    role: "Board Member",
    roleAr: "عضو مجلس الإدارة",
    image: normalImage,
    hoverImage: hoverImage,
  },
  {
    name: "Waleed Al-Mulhim",
    nameAr: "وليد المُلحم",
    role: "Board Member",
    roleAr: "عضو مجلس الإدارة",
    image: normalImage,
    hoverImage: hoverImage,
  },
];


const BoardMembers = () => {
  const t = useT();
  return (
    <div className="grid-container">
      {members.map((member, index) => (
        <div className="card" key={index}>
          <img src={member.image} alt={t(member.name, member.nameAr)} className="card-img" />
          <div className="hover-overlay">
            <img src={member.hoverImage} alt={`${t(member.name, member.nameAr)} ${t("hover", "تمرير")}`} />
            <div className="card-text">
              <h3>{t(member.name, member.nameAr)}</h3>
              <p>{t(member.role, member.roleAr)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoardMembers;
