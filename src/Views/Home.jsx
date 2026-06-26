import React, { useEffect } from "react";
import HeroSection from "../Components/HeroSection";
import IndustriesComp from "../Components/IndustriesComp";
import WhyChooseUs from "../Components/WhyChooseUs";
import AlfaAtGlance from "../Components/AlfaAtGlance";
import OurPresence from "../Components/OurPresence";
import OurClients from "../Components/OurClient";
import OurDivisions from "./OurDivisions";
import ParallaxSection from "../Components/ParallexSection";

const Home = () => {
  // Enable full-page section snapping only on the home page
  useEffect(() => {
    window.scrollTo(0, 0);
    const root = document.documentElement;
    root.classList.add("home-snap");
    return () => root.classList.remove("home-snap");
  }, []);

  // Update the URL hash as each section comes into view (#banner, #ceo, ...)
  useEffect(() => {
    const ids = [
      "banner",
      "industries",
      "divisions",
      "why",
      "glance",
      "ourway",
      "presence",
      "reach",
      "clients",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );
    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />
      <IndustriesComp />
      <OurDivisions />
      <WhyChooseUs />
      <AlfaAtGlance />
      <OurPresence />
      <ParallaxSection />
      <OurClients />
    </>
  );
};

export default Home;
