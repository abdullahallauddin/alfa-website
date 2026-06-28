import React, { useState } from 'react';
import card1 from "../Assets/Images/card1.jpg"
import card2 from "../Assets/Images/card2.jpg"
import card3 from "../Assets/Images/card3.jpg"
import card4 from "../Assets/Images/card4.jpg"
import card5 from "../Assets/Images/card5.jpg"
import card6 from "../Assets/Images/card6.jpg"
import { useT } from "../i18n/i18n";


const PortfolioMenuComp = () => {
  const t = useT();
  const [filter, setFilter] = useState('All');

  const categoryLabels = {
    'All': 'الكل',
    'Mobile Apps': 'تطبيقات الجوال',
    'Websites': 'المواقع الإلكترونية',
    'Ecommerce': 'التجارة الإلكترونية',
  };

  const portfolioItems = [
    { id: 1, category: 'Mobile Apps', image: card1, title: 'Mobile App 1', titleAr: 'تطبيق جوال 1' },
    { id: 2, category: 'Mobile Apps', image: card2, title: 'Mobile App 2', titleAr: 'تطبيق جوال 2' },
    { id: 3, category: 'Websites', image: card3, title: 'Website 1', titleAr: 'موقع إلكتروني 1' },
    { id: 4, category: 'Websites', image: card4, title: 'Website 2', titleAr: 'موقع إلكتروني 2' },
    { id: 5, category: 'Ecommerce', image: card5, title: 'Ecommerce 1', titleAr: 'تجارة إلكترونية 1' },
    { id: 6, category: 'Ecommerce', image: card6, title: 'Ecommerce 2', titleAr: 'تجارة إلكترونية 2' },
  ];

  const filteredItems = filter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row mb-8">
        <div className="flex flex-col mb-4 md:mb-0 md:w-1/4">
          <ul className="flex flex-row">
            {['All', 'Mobile Apps', 'Websites', 'Ecommerce'].map(category => (
              <li key={category} className={`cursor-pointer py-2 mx-2 ${filter === category ? 'text-sky-500 font-bold' : ''}`} onClick={() => setFilter(category)}>
                {t(category, categoryLabels[category])}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={item.image} alt={t(item.title, item.titleAr)} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
            <h3 className="text-lg font-bold">{t(item.title, item.titleAr)}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioMenuComp;
