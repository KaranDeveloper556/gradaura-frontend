import { PiXLogo } from "react-icons/pi";

const Problem = () => {
  return (
    <section
      id="problem-segment"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2.5 inline-block">
            THE RECRUITING COLD WAR
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 dark:text-white leading-tight">
            Traditional credential screening is fundamentally broken.
          </h2>
          <p className="mt-6 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed space-y-4">
            <span>
              Standard recruiting systems rank students entirely on unverified
              buzzwords, unearned institutional reputations, and standardized
              GPA metrics. Candidates keyword-inflate their resumes to pass
              automated scanners, while recruiters are overwhelmed with
              thousands of identical PDF documents.
            </span>
            <br />
            <br />
            <span>
              The result? Brilliant engineers building complex distributed
              servers in non-famous colleges get totally filtered out, while
              teams spend billions of dollars screening applicants who cannot
              execute real program steps on command.
            </span>
          </p>
        </div>

        {/* Graphical Mockup of the Problem */}
        <div className="p-6 md:p-8 rounded-2xl border border-rose-500/10 dark:bg-rose-500/[0.01] bg-rose-500/1 flex flex-col justify-center">
          <h3 className="font-heading font-extrabold text-sm text-rose-500 uppercase tracking-widest flex items-center gap-1.5 mb-5 select-none">
            <PiXLogo className="w-5 h-5" />
            <span>The PDF Resume Screening Filter</span>
          </h3>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border dark:border-slate-800 border-slate-200 text-left relative overflow-hidden opacity-80">
              <div className="absolute right-3 top-3 px-1.5 py-0.5 rounded text-[8px] bg-rose-100 text-rose-500 font-bold">
                92% match
              </div>
              <strong className="block text-xs text-slate-800 dark:text-slate-200">
                Candidate A — Resume claims:
              </strong>
              <p className="text-[11px] text-slate-400 mt-1 font-mono">
                "Architected cloud migration pipelines and led Kubernetes
                scaling algorithms in enterprise setups..."
              </p>
              <div className="mt-2.5 text-[9px] uppercase font-bold text-rose-500">
                ⚠️ Reality: Completed a 1-hour follow-along video tutorial.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border dark:border-slate-800 border-slate-200 text-left relative overflow-hidden opacity-50">
              <div className="absolute right-3 top-3 px-1.5 py-0.5 rounded text-[8px] bg-slate-100 text-slate-400 font-semibold">
                34% match
              </div>
              <strong className="block text-xs text-slate-800 dark:text-slate-200">
                Candidate B — Resume claims:
              </strong>
              <p className="text-[11px] text-slate-400 mt-1 font-mono">
                "Created personal database compiler and tested thread-safe
                concurrency maps..."
              </p>
              <div className="mt-2.5 text-[9px] uppercase font-bold text-slate-400">
                ❌ Consequence: Dropped by algorithmic keyword screener.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
