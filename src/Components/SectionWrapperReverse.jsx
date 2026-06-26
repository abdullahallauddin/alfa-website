import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const SectionWrapperReverse = ({ children, bgColor = "#0a1428" }) => {
  const controls = useAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Trigger animation on initial mount (page refresh)
    controls.start({
      y: "-100%",
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      opacity: 0.8,
      transition: { duration: 1.3, ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <div className="relative h-[clamp(18rem,46vh,30rem)] overflow-hidden">
      <motion.div
        initial={{
          y: 0,
          clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 80%)',
          opacity: 1,
        }}
        animate={controls}
        className="absolute bottom-0 left-0 w-full h-[clamp(18rem,46vh,30rem)] bg-[#0a1428] z-20 pointer-events-none"
      />
      <div className="relative z-10 h-[clamp(18rem,46vh,30rem)]" style={{ backgroundColor: bgColor }}>
        {children}
      </div>
    </div>
  );
};

export default SectionWrapperReverse;
