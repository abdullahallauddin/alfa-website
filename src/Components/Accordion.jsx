import React, { createContext, useContext, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const AccordionCtx = createContext(null);

/**
 * Interactive collapsible sections. Wrap existing content — no copy changes.
 *   <Accordion defaultOpen={[0]}>
 *     <AccordionItem id={0} title="…"> …existing content… </AccordionItem>
 *   </Accordion>
 */
export const Accordion = ({
  children,
  allowMultiple = false,
  defaultOpen = [],
}) => {
  const [open, setOpen] = useState(() => new Set(defaultOpen));
  const toggle = (id) =>
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  return (
    <AccordionCtx.Provider value={{ open, toggle }}>
      <div className="divide-y divide-white/10 border-y border-white/10">
        {children}
      </div>
    </AccordionCtx.Provider>
  );
};

export const AccordionItem = ({ title, children, id: idProp }) => {
  const auto = useId();
  const id = idProp ?? auto;
  const ctx = useContext(AccordionCtx);
  const isOpen = ctx.open.has(id);

  return (
    <div>
      <button
        type="button"
        onClick={() => ctx.toggle(id)}
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between gap-5 py-5 text-left"
      >
        <span
          className={`font-roboto text-lg md:text-xl transition-colors duration-200 ${
            isOpen ? "text-[#2C95D2]" : "text-white group-hover:text-[#2C95D2]"
          }`}
        >
          {title}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "rotate-180 border-[#2C95D2] bg-[#2C95D2]/15 text-[#2C95D2]"
              : "border-white/20 text-white/60 group-hover:border-[#2C95D2]/60"
          }`}
        >
          <FaChevronDown className="text-xs" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              data-no-reveal
              className="pb-6 font-roboto font-light leading-relaxed text-white/75"
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
