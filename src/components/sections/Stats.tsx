import { motion } from "motion/react";
import { PiBriefcase, PiCode, PiGlobe, PiGraduationCap } from "react-icons/pi";

const Stats = () => {
  const stats = [
    {
      label: "Vetted Active Builders",
      value: "18,400+",
      icon: <PiGraduationCap className="w-5 h-5 text-indigo-500" />,
      desc: "Active students pushing working project repositories",
    },
    {
      label: "Verified Alumni Mentors",
      value: "4,100+",
      icon: <PiBriefcase className="w-5 h-5 text-cyan-500" />,
      desc: "Seniors at Linear, Stripe, Apple, and Vercel reviewing code",
    },
    {
      label: "Partner Tech Corporates",
      value: "220+",
      icon: <PiGlobe className="w-5 h-5 text-indigo-500" />,
      desc: "Hiring engineers by sorting candidate visibility rankings",
    },
    {
      label: "Completed Buildathons",
      value: "64",
      icon: <PiCode className="w-5 h-5 text-cyan-500" />,
      desc: "Pristine 48h sprints evaluating active implementation",
    },
  ];
  
  return (
    <section
      id="stats-section"
      className="relative py-16 md:py-24 border-y dark:border-slate-900 border-slate-200/60 dark:bg-[#020617] bg-slate-50 overflow-hidden"
    >
      {/* Soft circular background blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 dark:bg-cyan-500/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-100/30 dark:border-indigo-900/10 mb-4">
          IMPACT BY THE NUMBERS
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white max-w-2xl mx-auto leading-tight">
          Redesigning the transition from College to Industry
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 md:p-8 rounded-2xl dark:bg-slate-900/40 bg-white border dark:border-slate-800 border-slate-200/80 shadow-sm flex flex-col text-center items-center justify-between"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center dark:bg-[#020617] bg-slate-50 border dark:border-slate-800 border-slate-200">
                {stat.icon}
              </div>
              <div className="mt-5">
                <span className="block text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-slate-950 dark:text-white">
                  {stat.value}
                </span>
                <span className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mt-2">
                  {stat.label}
                </span>
                <p className="block text-xs text-slate-400 dark:text-slate-500 mt-1 pb-2 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
