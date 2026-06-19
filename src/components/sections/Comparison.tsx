import React from "react";
import { PiCheck, PiSparkle, PiXLogo } from "react-icons/pi";
import SectionHeader from "../common/SectionHeader";

const Comparison = () => {
  const comparisonData = {
    resume: [
      "Self-declared lists of unverified skills",
      "Generic GPA and college brand indexing",
      "Wordy, static PDFs with no active state",
      "Easy to inflate or copy-paste from templates",
      "Sifted through automated resume-keyword ATS",
    ],
    gradAura: [
      "Cryptographically linked active GitHub repositories",
      "Verified score measuring actual problem solving",
      "Interactive, living profile showing active launches",
      "Referrals backed by verified alumni code reviews",
      "Direct recruitment based on functional output",
    ],
  };
  return (
    <section
      id="comparison-segment"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden dark:bg-slate-900/10 bg-slate-100/50"
    >
      <SectionHeader
        badge="A NEW ARCHITECTURE"
        title="The Standard Resume vs."
        highlightText="Proof of Work"
        subtitle="Compare how GradAura separates unverified claims from actual software artifacts."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
        {/* Resume Block */}
        <div className="p-6 md:p-8 rounded-2xl border dark:border-slate-900 border-slate-200 bg-white dark:bg-slate-900/20 text-left flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 text-slate-500 mb-6 pb-4 border-b dark:border-slate-900 border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                <PiXLogo className="w-5 h-5 text-slate-400" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-sm dark:text-white text-slate-950">
                  LinkedIn Resume PDF
                </h4>
                <p className="text-[10px] text-slate-400">
                  Static, unverified templates
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {comparisonData.resume.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start text-xs text-slate-500"
                >
                  <span className="p-0.5 rounded-full bg-rose-500/10 text-rose-500 mr-2.5 shrink-0 mt-0.5">
                    ✕
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t dark:border-slate-900 border-slate-100 text-center text-xs font-semibold text-rose-500">
            Prone to inflation, slow to load, hard to trust
          </div>
        </div>

        {/* GradAura Block */}
        <div className="p-6 md:p-8 rounded-2xl border border-indigo-500/20 bg-white dark:bg-slate-900/40 text-left flex flex-col justify-between relative">
          <div className="absolute inset-x-0 h-1.5 -top-px bg-linear-to-r from-indigo-500 to-cyan-400 rounded-t-2xl" />

          <div>
            <div className="flex items-center space-x-3 text-indigo-500 mb-6 pb-4 border-b dark:border-slate-900 border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center">
                <PiCheck className="w-5 h-5 text-indigo-500" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-sm dark:text-white text-slate-950">
                  GradAura Identity
                </h4>
                <p className="text-[10px] text-indigo-500 font-bold">
                  Dynamic cryptographically backed profile
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {comparisonData.gradAura.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start text-xs text-slate-700 dark:text-slate-300"
                >
                  <span className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-500 mr-2.5 shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t dark:border-slate-900 border-slate-100 text-center text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center justify-center gap-1">
            <PiSparkle className="w-3.5 h-3.5" />
            <span>Built by verifying working capabilities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
