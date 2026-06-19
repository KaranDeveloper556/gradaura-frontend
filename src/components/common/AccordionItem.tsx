import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { PiMinus, PiPlus } from "react-icons/pi";

interface AccordionItemProps {
  key?: React.Key | string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordianItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div className="border-b dark:border-slate-900 border-slate-100 last:border-none py-4 dark:bg-[#020617]/20 bg-white/20">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-2 font-heading font-bold text-slate-900 dark:text-slate-100 text-sm md:text-base hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors cursor-pointer"
      >
        <span className="pr-4 leading-tight">{question}</span>
        <span className="shrink-0 text-slate-400 dark:text-slate-500">
          {isOpen ? (
            <PiMinus className="w-4 h-4" />
          ) : (
            <PiPlus className="w-4 h-4" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.25 },
                opacity: { duration: 0.2 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.2 },
                opacity: { duration: 0.15 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed pr-6">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordianItem;
