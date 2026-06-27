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
  const sectionRef = useRef(null);
  const activeRef = useRef(0);
  const lastStep = useRef(0);
  const wasSettled = useRef(false);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Scroll-lock: while the section is settled in view, each scroll step reveals
  // one region at a time. Only once all regions are shown (or you scroll back to
  // the first) does the scroll release to the next/previous section.
  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const COOLDOWN = 650;
    const BOUNDARY_HOLD = 750; // keep the first/last region visible before releasing
    const last = locations.length - 1;

    const onWheel = (e) => {
      const sec = sectionRef.current;
      if (!sec) return;
      const rect = sec.getBoundingClientRect();
      const settled = Math.abs(rect.top) < 12;
      if (!settled) {
        wasSettled.current = false;
        return;
      }
      const dir = e.deltaY > 0 ? 1 : -1;

      // First time the section settles: align starting region to entry direction.
      if (!wasSettled.current) {
        wasSettled.current = true;
        const start = dir > 0 ? 0 : last;
        activeRef.current = start;
        setActive(start);
        lastStep.current = Date.now();
        e.preventDefault();
        return;
      }

      const cur = activeRef.current;
      const atEnd = (dir > 0 && cur >= last) || (dir < 0 && cur <= 0);
      if (atEnd) {
        // Hold the first (Dammam) / last (Jeddah) region visible for a moment
        // before releasing the scroll to the next/previous section.
        if (Date.now() - lastStep.current < BOUNDARY_HOLD) {
          e.preventDefault();
        }
        return;
      }

      e.preventDefault();
      const now = Date.now();
      if (now - lastStep.current < COOLDOWN) return;
      lastStep.current = now;
      const next = Math.min(Math.max(cur + dir, 0), last);
      activeRef.current = next;
      setActive(next);
    };

    // Reliably reset the "settled" flag whenever the section is scrolled away
    // (covers native snap entry from either direction, so re-entry always
    // re-locks and re-aligns the starting region).
    const onScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;
      if (Math.abs(sec.getBoundingClientRect().top) > 40) {
        wasSettled.current = false;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const select = (i) => {
    activeRef.current = i;
    setActive(i);
  };

  return (
    <section
      ref={sectionRef}
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
                  {/* name label on the piece */}
                  {isActive && (
                    <span className="pointer-events-none absolute left-1/2 -top-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#0a1428]/90 px-4 py-1.5 font-roboto text-sm font-medium text-white ring-1 ring-[#2C95D2]/60 shadow-lg backdrop-blur-sm">
                      {loc.label}
                    </span>
                  )}
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
