import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const SectionWrapper = ({
  children,
  curveColor = "#20376D",
  bgColor = "#fff",
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState("down");
  const [wasInView, setWasInView] = useState(false);
  const lastScrollY = useRef(0);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate only when entering view from scroll down
  useEffect(() => {
  if (!inView) {
    controls.set({
      y: 0,
      clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0% 100%)",
      opacity: 0, // <--- Set opacity to 0 when not in view
    });
    setWasInView(false);
  }

  if (inView && scrollDirection === "down" && !wasInView) {
    controls.start({
      y: "0",
      clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0% 100%)",
      opacity: 0,
      transition: { duration: 1.3, ease: "easeInOut" },
    });
    setWasInView(true);
  }

  // ⛔️ Extra: If scrolling up and inView, ensure blue is hidden
  if (inView && scrollDirection === "up") {
    controls.set({
      opacity: 0, // <--- Hide it when scrolling up
    });
  }
}, [inView, scrollDirection, wasInView, controls]);




  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        initial={{
          y: 0,
          clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0% 100%)",
          opacity: 0,
        }}
        animate={controls}
        className="absolute top-0 left-0 w-full h-full bg-[#0a1428] z-20 pointer-events-none"
      />
      <div
        className="relative z-10"
        style={{ backgroundColor: bgColor }}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
