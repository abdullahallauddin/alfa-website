import React from 'react';
import PortfolioMenuComp from './PortfolioMenuComp';
import { useT } from "../i18n/i18n";

const PortfolioComp = () => {
    const t = useT();
    return (
        <>
        <div className="container mx-auto px-4 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col mb-4 md:mb-0">
                <h5 className="text-lg text-custom-blue font-bold mb-2">{t("PORTFOLIO", "أعمالنا")}</h5>

                <h2 className="text-4xl font-bold">{t("Awesome Portfolio", "معرض أعمال متميز")}</h2>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0 flex justify-end">
                <button className="bg-custom-blue text-lg font-bold text-white px-10 py-3 rounded-bl-3xl rounded-tr-3xl border-2 border-sky-500 hover:border-2 hover:border-sky-500 hover:text-sky-500 hover:transition hover:duration-500 hover:from-transparent hover:bg-transparent hover:to-sky-500">
                    {t("See All Services", "عرض جميع الخدمات")}
                </button>
            </div>
        </div>
        <div className="container mx-auto px-4 md:px-16">
            <PortfolioMenuComp/>
        </div>
        </>
    );
}

export default PortfolioComp;
