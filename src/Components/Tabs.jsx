import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Interactive tab switcher. Wrap existing content — no copy changes.
 *   <Tabs tabs={[{ label: "…", content: <>…</> }]} />
 */
const Tabs = ({ tabs = [], initial = 0, className = "" }) => {
  const [active, setActive] = useState(initial);
  if (!tabs.length) return null;

  return (
    <div className={className}>
      {/* Tab bar */}
      <div
        role="tablist"
        className="flex flex-wrap gap-1 border-b border-white/10"
      >
        {tabs.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={i}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`relative px-4 py-3 font-roboto text-sm md:text-base transition-colors duration-200 ${
                isActive ? "text-white" : "text-white/55 hover:text-white/85"
              }`}
            >
              {t.label}
              {isActive && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-[#2C95D2]"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div className="relative mt-8" data-no-reveal>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            role="tabpanel"
          >
            {tabs[active].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
