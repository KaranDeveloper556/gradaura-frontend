import SectionHeader from "../common/SectionHeader";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden"
    >
      <SectionHeader
        badge="EXECUTION PIPELINE"
        title="The GradAura Journey in"
        highlightText="Four Simple Steps"
        subtitle="How we streamline functional verification from your first commit directly to team onboarding."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative max-w-5xl mx-auto">
        {[
          {
            step: "01",
            title: "Commit Projects",
            desc: "Sync your repositories to fetch real commit history, Leetcode points, and project codes directly.",
          },
          {
            step: "02",
            title: "Scale Your Score",
            desc: "Your dynamic score auto-calculates based on project design pattern compliance, repo ratings, and code reviews.",
          },
          {
            step: "03",
            title: "Alumni Validation",
            desc: "Get your compiler reviewed by corporate seniors. Recipient referrers award unforgeable peer signatures.",
          },
          {
            step: "04",
            title: "Direct Onboarding",
            desc: "Bypass keyword checkers. Corporates filter candidates by specific engineering examples and invite you direct.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="relative group p-6 rounded-2xl border dark:border-slate-900 border-slate-200/60 dark:bg-slate-900/20 bg-white/40 text-left"
          >
            <span className="font-heading font-black text-4xl sm:text-5xl text-indigo-500/10 dark:text-indigo-400/5 group-hover:text-indigo-500/20 transition-colors absolute top-4 right-4 select-none">
              {item.step}
            </span>
            <h4 className="font-heading font-extrabold text-sm md:text-base text-slate-900 dark:text-white mt-4">
              {item.title}
            </h4>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
