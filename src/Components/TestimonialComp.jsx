import React from 'react';

import backgroundImage from '../Assets/Images/testimonial.jpg';
import { useT } from "../i18n/i18n";

const TestimonialComp = () => {
  const t = useT();
  return (
    <div className="relative bg-cover bg-center pt-14 pb-14 mt-20 mb-20" style={{ backgroundImage: `url(${backgroundImage})`, zIndex: 0 }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <h5 className="text-lg text-sky-500 font-bold mb-2 ">{t("TESTIMONIALS", "آراء العملاء")}</h5>
        <h2 className="text-4xl font-bold mb-4">{t("Customers Testimonials", "آراء عملائنا")}</h2>
        
        
      </div>
    </div>
  );
};

export default TestimonialComp;
