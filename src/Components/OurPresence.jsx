import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SaudiMap from "./SaudiMap";

const EASE = [0.22, 1, 0.36, 1];

// x/y are % within the map box (derived from the SVG geoViewBox);
// region is the province path id that lifts when the city is selected.
const locations = [
  { label: "Dammam", region: "SA-04", x: 73.6, y: 36.8 },
  { label: "Al Jubail", region: "SA-04", x: 71.6, y: 33.2 },
  { label: "Riyadh", region: "SA-01", x: 57.5, y: 47.6 },
  { label: "Jeddah", region: "SA-02", x: 22.2, y: 67.9 },
];

const OurPresence = () => {
  const [active, setActive] = useState(0);
  const interacted = useRef(false);

  // Gently auto-cycle through cities until the visitor interacts
  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const id = setInterval(() => {
      if (interacted.current) return;
      setActive((i) => (i + 1) % locations.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const select = (i) => {
    interacted.current = true;
    setActive(i);
  };

  return (
    <section
      id="presence"
      className="snap-section relative min-h-screen w-full flex items-center overflow-hidden bg-gradient-to-br from-[#0a1428] via-[#11234B] to-[#0a1428]"
    >
      {/* faint radial glow behind the map */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[80vh] w-[80vh] -translate-y-1/2 translate-x-1/4 rounded-full bg-[#2C95D2]/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10 py-24 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Heading + interactive list */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1
            className="font-roboto font-light text-[clamp(2.25rem,5vw,3.25rem)] text-white text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="text-[#2C95D2]">OUR</span> PRESENCE
          </h1>
          <span className="mt-5 mb-8 block h-px w-16 bg-[#2C95D2]" />

          <ul className="space-y-1">
            {locations.map((loc, i) => {
              const isActive = active === i;
              return (
                <li key={loc.label}>
                  <button
                    type="button"
                    onMouseEnter={() => select(i)}
                    onFocus={() => select(i)}
                    onClick={() => select(i)}
                    className={`group flex w-full items-center gap-3 rounded-md py-3 pl-3 pr-4 text-left transition-all duration-300 ${
                      isActive ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#2C95D2] shadow-[0_0_12px_2px_rgba(44,149,210,0.7)] scale-125"
                          : "bg-white/30"
                      }`}
                    />
                    <span
                      className={`font-roboto font-light text-lg transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/55"
                      }`}
                    >
                      {loc.label}
                    </span>
                    <span
                      className={`ml-auto h-px bg-[#2C95D2] transition-all duration-300 ${
                        isActive ? "w-8 opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Interactive map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative mx-auto w-full max-w-2xl"
        >
          <div className="relative w-full aspect-[730/600]">
            <SaudiMap
              className="absolute inset-0 h-full w-full"
              activeRegion={locations[active].region}
            />

            {/* Markers */}
            {locations.map((loc, i) => {
              const isActive = active === i;
              return (
                <button
                  type="button"
                  key={loc.label}
                  onMouseEnter={() => select(i)}
                  onClick={() => select(i)}
                  aria-label={loc.label}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                >
                  {/* pulse ring */}
                  {isActive && (
                    <span className="pin-ring absolute left-1/2 top-1/2 h-6 w-6 rounded-full bg-[#2C95D2]/40" />
                  )}
                  {/* dot */}
                  <span
                    className={`relative block rounded-full transition-all duration-300 ${
                      isActive
                        ? "h-4 w-4 bg-[#2C95D2] ring-4 ring-[#2C95D2]/25 shadow-[0_0_16px_4px_rgba(44,149,210,0.6)]"
                        : "h-2.5 w-2.5 bg-white/55 hover:bg-white"
                    }`}
                  />
                  {/* label tooltip */}
                  <span
                    className={`pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap rounded-md bg-[#0a1428]/90 px-3 py-1 font-roboto text-sm text-white ring-1 ring-white/15 transition-all duration-300 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-1"
                    }`}
                  >
                    {loc.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPresence;
