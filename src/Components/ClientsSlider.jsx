import { useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import logo2 from "../Assets/Images/logo2.png";
import logo3 from "../Assets/Images/logo3.png";
import logo4 from "../Assets/Images/logo4.png";
import logo5 from "../Assets/Images/logo5.png";
import logo6 from "../Assets/Images/logo6.png";
import logo7 from "../Assets/Images/logo7.png";
import logo9 from "../Assets/Images/logo9.png";
import logo10 from "../Assets/Images/logo10.png";
import logo11 from "../Assets/Images/logo11.png";
import logo12 from "../Assets/Images/logo12.png";
import logo13 from "../Assets/Images/logo13.png";
import logo14 from "../Assets/Images/logo14.png";
import logo15 from "../Assets/Images/logo15.png";
import logo16 from "../Assets/Images/logo16.png";
import logo17 from "../Assets/Images/logo17.png";
import logo19 from "../Assets/Images/logo19.png";

const CLIENT_LOGOS = [
  { src: logo2, name: "Client partner 02" },
  { src: logo3, name: "Client partner 03" },
  { src: logo4, name: "Client partner 04" },
  { src: logo5, name: "Client partner 05" },
  { src: logo6, name: "Client partner 06" },
  { src: logo7, name: "Client partner 07" },
  { src: logo9, name: "Client partner 09" },
  { src: logo10, name: "Client partner 10" },
  { src: logo11, name: "Client partner 11" },
  { src: logo12, name: "Client partner 12" },
  { src: logo13, name: "Client partner 13" },
  { src: logo14, name: "Client partner 14" },
  { src: logo15, name: "Client partner 15" },
  { src: logo16, name: "Client partner 16" },
  { src: logo17, name: "Client partner 17" },
  { src: logo19, name: "Client partner 19" },
];

const ClientsSlider = () => {
  const prefersReducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);

  const items = useMemo(() => [...CLIENT_LOGOS, ...CLIENT_LOGOS], []);

  return (
    <div className="alfa-clients__inner">
      <div className="alfa-clients__heading">
        <p className="eyebrow">Trusted By</p>
        <h2>Clients & Partners</h2>
        <p className="alfa-clients__lead">
          Trusted by leading organizations across marine, energy, and
          industrial sectors.
        </p>
      </div>

      <div
        className="alfa-clients__viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="Client logos"
      >
        <motion.div
          ref={trackRef}
          className="alfa-clients__track"
          animate={
            prefersReducedMotion
              ? { x: "0%" }
              : { x: paused ? undefined : ["0%", "-50%"] }
          }
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((logo, index) => (
            <div className="alfa-clients__cell" key={`${logo.name}-${index}`}>
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientsSlider;
