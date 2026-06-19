import { PiArrowRight, PiSparkle } from "react-icons/pi";

const CTA = () => {
  return (
    <div
      id="cta-section"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="relative rounded-3xl dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 p-8 md:p-16 lg:p-20 overflow-hidden text-center shadow-lg">
        {/* Soft elegant glowing corner */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl dark:bg-[#020617] bg-slate-50 border dark:border-slate-800 border-slate-200 flex items-center justify-center text-indigo-500 mb-6 shadow-sm">
            <PiSparkle className="w-5 h-5" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-slate-950 dark:text-white leading-tight">
            Ready to trade your resume for real proof of work?
          </h2>

          <p className="mt-5 text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
            Join thousands of students building real-world projects and linking
            directly with verified alumni and top tech companies on GradAura.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              //   onClick={onPrimaryClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/15 flex items-center justify-center gap-1.5 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Build Your Identity</span>
              <PiArrowRight className="w-4 h-4" />
            </button>
            <button
              //   onClick={onSecondaryClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider dark:bg-[#020617] dark:hover:bg-slate-900 bg-slate-50 hover:bg-slate-100 dark:text-white text-slate-800 border dark:border-slate-800 border-slate-200 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Discover Talent</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
