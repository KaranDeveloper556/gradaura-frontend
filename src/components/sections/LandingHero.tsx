import { motion } from "motion/react";
import { BiChevronRight } from "react-icons/bi";
import Button from "../common/Button";
import { PiArrowRight } from "react-icons/pi";

const LandingHero = () => {
  return (
    <section className="relative max-w-7xl min-h-dvh mx-auto flex flex-col justify-center items-center">
      {/* Glowing background blooms */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] bg-cyan-400/5 dark:bg-cyan-400/3 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="relative text-center max-w-4xl mx-auto z-10">
        {/* Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-50/80 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/30 shadow-sm cursor-default mb-6"
        >
          <span>🚀 GradAura 2.0: Sourcing builders on active execution</span>
          <BiChevronRight />
        </motion.div>

        {/* Large Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring" }}
          className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-slate-900 dark:text-white leading-none"
        >
          Your work should speak <br />
          <span className="font-fancy italic text-indigo-600 dark:text-indigo-400 font-medium">
            louder than your resume.
          </span>
        </motion.h1>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="my-4 text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          GradAura is the proof-of-work professional network. We connect
          talented students with verified industry alumni and top tech companies
          using real code, active projects, and peer validations.
        </motion.p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full sm:w-auto">
          <Button variant="solid" size="xl" rightIcon={<PiArrowRight />}>
            Get Started
          </Button>
          <Button variant="outline" size="xl">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
