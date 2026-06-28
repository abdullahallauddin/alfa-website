import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useT } from "../i18n/i18n";

const DivisionCard = ({
  icon,
  title,
  label,
  description,
  bgImage,
  isCenter,
  path,
}) => {
  const t = useT();
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    // Delay state to mark animation complete
    const timeout = setTimeout(() => setHasAnimated(true), 1500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <div
        className="relative text-white overflow-hidden flex flex-col justify-between p-6 z-10 
   max-w-[92vw] aspect-[1/1.2] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[350px]"
        style={{
          backgroundImage:
            isCenter && hasAnimated
              ? `linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url(${bgImage})`
              : isCenter
              ? `linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.85))`
              : `linear-gradient(to bottom right, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${bgImage})`,
        }}
      >
        {isCenter && !hasAnimated && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: 1.8,
              ease: [0.25, 1, 0.5, 1], // smooth elastic-like easing
              delay: Math.random() * 0.6,
            }}
            className="absolute inset-0 z-0 bg-cover bg-center origin-right"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          />
        )}

        {/* Top Icon */}
        <div className="text-5xl text-white">{icon}</div>

        {/* Title + Description (Animate only if centered) */}
        {isCenter ? (
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg font-bold">{title}</p>
            <p className="text-sm leading-relaxed">{description}</p>
          </motion.div>
        ) : (
          <div className="space-y-1 opacity-90">
            <p className="text-lg font-bold">{title}</p>
            <p className="text-sm leading-relaxed">{description}</p>
          </div>
        )}

        {/* Know More */}
        <Link to={path} target="_blank">
          <motion.div
            className="flex items-center space-x-2 mt-4 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-[2px] h-8 bg-white relative overflow-hidden">
              <motion.div
                className="absolute bottom-0 h-2 bg-[#2C95D2] w-full"
                initial={{ y: 0 }}
                animate={{ y: -6 }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                  repeatType: "mirror",
                }}
              />
            </div>
            <span className="tracking-widest text-xs font-semibold group-hover:underline group-hover:text-[#2C95D2] transition duration-300">
              {t("KNOW MORE", "اعرف المزيد")}
            </span>
          </motion.div>
        </Link>

        {/* Rotated Label Block */}
        <div className="absolute bottom-54 right-0 transform translate-y-1/2 rotate-[-90deg] origin-bottom-right">
          <div className="bg-[#2C95D2] h-24 w-42 shadow-md flex items-center justify-center">
            {label}
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(DivisionCard);
