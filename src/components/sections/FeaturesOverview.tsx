import {
  PiCoinBold,
  PiGitBranchDuotone,
  PiGithubLogoBold,
  PiMagnifyingGlassBold,
  PiShieldCheckBold,
} from "react-icons/pi";
import FeatureCard from "../cards/FeatureCard";
import SectionHeader from "../common/SectionHeader";

const FeatureOverview = () => {
  return (
    <section
      id="features-section"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <SectionHeader
        badge="PLATFORM CAPABILITIES"
        title="Engineered to empower both"
        highlightText="Builders & Recruiters"
        subtitle="Explore the sophisticated tool suite we built to replace PDF processing pipelines."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* Card 1 — Living profile */}
        <FeatureCard
          title="Living Multi-Host Profiles"
          description="Sync GitHub repos, LeetCode ratings, walkthrough videos, and peer reviews into one unified credential page."
          visual={
            <div className="flex flex-col gap-2 font-mono text-[11px] leading-tight">
              <div className="rounded-md bg-white px-3 py-2 shadow-sm dark:bg-slate-800">
                <span className="text-rose-500">window</span>
                <span className="text-slate-400">
                  .onScroll = (e) =&gt;{"{"}
                </span>
              </div>
              <div className="rounded-md bg-white px-3 py-2 text-slate-400 shadow-sm dark:bg-slate-800">
                if (profile.commits &gt; 0)
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-md dark:border-slate-700 dark:bg-slate-700">
                <PiMagnifyingGlassBold className="h-3.5 w-3.5 text-slate-400" />
                <span className="text-slate-500 dark:text-slate-300">
                  github.com/alex-r
                </span>
              </div>
            </div>
          }
        />

        {/* Card 2 — Indexing */}
        <FeatureCard
          title="Repository Indexing"
          description="Point your profile at any repo and get a verified, fully indexed contribution history in minutes."
          visual={
            <div className="flex flex-col gap-2 text-xs">
              <span className="mb-1 font-medium text-slate-400 dark:text-slate-500">
                Indexing contributions…
              </span>
              {[
                "/src/api/auth.ts",
                "/lib/score/weights.go",
                "/infra/deploy.yml",
              ].map((f) => (
                <div
                  key={f}
                  className="flex items-center justify-between gap-3 rounded-md bg-white px-3 py-1.5 font-mono text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-300"
                >
                  {f}
                  <PiShieldCheckBold className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                </div>
              ))}
            </div>
          }
        />

        {/* Card 3 — Integrations */}
        <FeatureCard
          title="Agents + Verify API"
          description="Plug verification directly into your stack and give recruiting tools a live, trustworthy data source."
          visual={
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="absolute top-6 left-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800">
                <PiGithubLogoBold className="h-5 w-5 text-slate-700 dark:text-slate-200" />
              </div>
              <div className="absolute top-6 right-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800">
                <PiGitBranchDuotone className="h-5 w-5 text-slate-700 dark:text-slate-200" />
              </div>
              <div className="absolute bottom-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 shadow-lg dark:bg-white">
                <PiShieldCheckBold className="h-6 w-6 text-white dark:text-slate-900" />
              </div>
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 200 160"
              >
                <path
                  d="M 70 50 Q 100 90 100 110"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  fill="none"
                  className="text-rose-300 dark:text-rose-500/40"
                />
                <path
                  d="M 130 50 Q 100 90 100 110"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  fill="none"
                  className="text-rose-300 dark:text-rose-500/40"
                />
              </svg>
            </div>
          }
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Card 4 — Peer mentorship */}
        <FeatureCard
          title="Sovereign Alumni Peer Sync"
          description="Verified seniors at top firms review student architectures and award certified, unforgeable referral stars."
          visual={
            <div className="relative flex h-full w-full items-center justify-between px-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800">
                <span className="text-lg font-bold text-slate-700 dark:text-slate-200">
                  W
                </span>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 shadow-md dark:bg-white">
                <PiShieldCheckBold className="h-5 w-5 text-white dark:text-slate-900" />
              </div>
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 280 160"
              >
                <path
                  d="M 50 70 Q 140 20 230 70"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  fill="none"
                  className="text-slate-300 dark:text-slate-600"
                />
              </svg>
            </div>
          }
        />

        {/* Card 5 — Package/dependency search */}
        <FeatureCard
          title="Search-By-Code Discovery"
          description="Recruiters filter profiles by real compiler and framework usage — Rust memory locks, PyTorch pipelines — not just degree names."
          visual={
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="absolute top-3 right-4 rounded-md bg-white px-2 py-1 font-mono text-[10px] text-slate-400 shadow-sm dark:bg-slate-800">
                cargo add tokio
              </div>
              <div className="absolute bottom-3 left-4 rounded-md bg-white px-2 py-1 font-mono text-[10px] text-slate-400 shadow-sm dark:bg-slate-800">
                pip install torch
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-md dark:border-slate-700 dark:bg-slate-800">
                <PiCoinBold className="h-4 w-4 text-amber-500" />
                <span className="text-xs text-slate-600 dark:text-slate-300">
                  Rust + PyTorch
                </span>
                <PiMagnifyingGlassBold className="h-3.5 w-3.5 text-slate-400" />
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default FeatureOverview;
