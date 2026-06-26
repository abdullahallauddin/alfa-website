import React, { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Consistent sticky section navigation used across the combined pages.
 *   <SectionNav items={[{ key, label }]} activeKey={key} onSelect={(key) => …} />
 * Works for both anchor-scroll pages and tabbed pages (the parent decides
 * what onSelect does).
 */
const SectionNav = ({ items, activeKey, onSelect }) => {
  const listRef = useRef(null);
  const reduce = useReducedMotion();

  // Keep the active item in view within the horizontally scrollable bar
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-nav="${activeKey}"]`);
    if (el) {
      el.scrollIntoView({
        inline: "center",
        block: "nearest",
        behavior: reduce ? "auto" : "smooth",
      });
    }
  }, [activeKey, reduce]);

  return (
    <div
      className="sticky top-[76px] z-30 border-b border-white/10 bg-[#0a1428]/90 backdrop-blur"
      data-no-reveal
    >
      <nav aria-label="Section navigation" className="mx-auto max-w-6xl px-6 md:px-10">
        <ul ref={listRef} className="flex gap-1 overflow-x-auto no-scrollbar py-2">
          {items.map(({ key, label }) => {
            const active = key === activeKey;
            return (
              <li key={key} className="shrink-0">
                <button
                  type="button"
                  data-nav={key}
                  onClick={() => onSelect(key)}
                  aria-current={active ? "true" : undefined}
                  className={`relative whitespace-nowrap rounded-md px-4 py-2 font-roboto text-sm outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#2C95D2]/60 ${
                    active ? "text-white" : "text-white/55 hover:text-white/85"
                  }`}
                >
                  {label}
                  {active &&
                    (reduce ? (
                      <span className="absolute inset-x-4 -bottom-[9px] h-0.5 rounded-full bg-[#2C95D2]" />
                    ) : (
                      <motion.span
                        layoutId="section-nav-underline"
                        className="absolute inset-x-4 -bottom-[9px] h-0.5 rounded-full bg-[#2C95D2]"
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    ))}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SectionNav;
