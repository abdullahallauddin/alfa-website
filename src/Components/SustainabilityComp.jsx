import React from 'react';

const SustainabilityComp = ({ title, description, icon }) => {
  return (
    <div className="py-10 px-6 md:px-24">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Text Content */}
        <div className="flex-1">
          <div className="inline-block bg-[#2C95D2] text-white text-sm font-medium tracking-wide px-4 py-1 rounded-md mb-4 font-roboto">
            {title.toUpperCase()}
          </div>
          <p className="font-roboto font-light text-white/80 text-justify text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Icon */}
        <div className="flex-shrink-0">
          <img
            src={icon}
            alt={`${title} Icon`}
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default SustainabilityComp;
