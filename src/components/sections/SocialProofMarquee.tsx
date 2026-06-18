import { motion } from "motion/react";
import React from "react";

const brands = [
  { label: "▲ Vercel", className: "font-black tracking-tight" },
  { label: "💳 Stripe", className: "font-extrabold tracking-wide" },
  { label: "⧉ Linear", className: "font-black tracking-tight" },
  { label: "⚙️ NVIDIA", className: "font-extrabold tracking-wider" },
  { label: "⋈ Arc Browser", className: "font-black tracking-tight" },
  { label: "🔺 Figma", className: "font-extrabold tracking-wide" },
  { label: "◈ Notion", className: "font-black tracking-tight" },
];

const SocialProofMarquee = () => {
  return (
    <section className="relative py-16 border-y dark:border-slate-800 border-slate-300/50 bg-slate-50/50 dark:bg-slate-950/10 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Trusted by hiring engineering managers at fast-growing industry
          leaders
        </p>
      </div>

      <div className="relative mx-auto mt-8 w-full max-w-5xl">

        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 sm:w-36 z-10 bg-linear-to-r from-slate-50 dark:from-[#020617] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 sm:w-36 z-10 bg-linear-to-l from-slate-50 dark:from-[#020617] to-transparent" />

        <div className="flex overflow-hidden select-none">
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              aria-hidden={i === 1}
              className="flex shrink-0 items-center gap-10 md:gap-16 opacity-60 dark:opacity-40 pr-10 md:pr-16"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            >
              {brands.map((b, j) => (
                <span
                  key={j}
                  className={`font-heading ${b.className} text-xl dark:text-white text-slate-950 whitespace-nowrap`}
                >
                  {b.label}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofMarquee;
