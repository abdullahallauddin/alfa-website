import React, {useEffect} from 'react';
import backgroundImage from "../Assets/Images/inner-page-hero.jpg"
import PortfolioComp from '../Components/PortfolioComp';
import { useT } from "../i18n/i18n";

const Portfolio = () => {
  const t = useT();
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <div
        className=" bg-cover bg-center pt-8 pb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Background Opacity Layer */}
        <div className=" inset-0 bg-black opacity-90 "></div>

        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-roboto font-light mt-24 mb-4 text-white" style={{ letterSpacing: "-0.02em" }}><span className="text-[#2C95D2]">{t("Portfoio", "أعمالنا")}</span></h1>
          <p className="text-xl mb-20 text-white/75">{t("Home / Portfolio", "الرئيسية / أعمالنا")}</p>
        </div>
      </div>
      <div className='mt-12 mb-20' >
        <PortfolioComp/>
      </div>
    </>
  );
}

export default Portfolio;
