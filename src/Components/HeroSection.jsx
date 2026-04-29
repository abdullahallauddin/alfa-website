import React from "react";
import bg1 from "../Assets/Images/main-background.jpg";

const HeroSection = () => {
  return (
    <>
      <div
        className="relative overflow-hidden 
                 bg-transparent lg:bg-[#20376D] 
                 w-full 
                 h-[60vh] sm:h-[65vh] md:h-[100vh] lg:min-h-screen"
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <video
            src="/Alpha Web V5.webm"
            className="w-[100%] h-[100%] object-cover lg:scale-130 md: scale-100 sm:scale-100"
            autoPlay
            loop
            muted
            playsInline
            title="ALFA GROUP INTRO VIDEO"
          />
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          <div className="hidden sm:flex w-6 h-10 border-2 border-white rounded-full items-start justify-center relative overflow-hidden">
            <div className="w-2 h-2 bg-[#2C95D2] rounded-full animate-scroll-dot mt-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
