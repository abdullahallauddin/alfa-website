import React from "react";
import ParallaxBG from "../Assets/Images/parallex.png"; // Replace with your image

const ParallaxSection = () => {
  return (
    <section
      id="reach"
      className="snap-section relative min-h-screen w-full bg-fixed bg-center bg-cover flex items-center justify-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${ParallaxBG})` }}
    >
      {/* Navy gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1428]/90 via-[#11234B]/70 to-black/85" />

      <div className="relative z-10 p-6 text-center max-w-2xl mx-4">
        <h2
          className="font-roboto font-light text-[clamp(2.25rem,5vw,3.25rem)] mb-5 text-balance"
          style={{ letterSpacing: "-0.02em" }}
        >
          Global Reach, <span className="text-[#2C95D2]">Local Expertise</span>
        </h2>
        <span className="mb-7 mx-auto block h-px w-16 bg-[#2C95D2]" />
        <p
          className="font-roboto font-light text-lg text-white/80 max-w-[55ch] mx-auto"
          style={{ textWrap: "pretty" }}
        >
          From coastlines to continents, ALFA Group delivers excellence across the globe.
          Our reach is vast, and our presence is impactful.
        </p>
      </div>
    </section>
  );
};

export default ParallaxSection;
