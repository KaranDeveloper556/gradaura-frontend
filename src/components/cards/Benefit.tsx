import { PiArrowRight } from "react-icons/pi";

interface BenefitCardProps {
  title: string;
  highlights: string[];
  role: "Student" | "Alumni" | "Company";
  themeColor: "indigo" | "cyan" | "slate";
  ctaLabel: string;
  onCtaClick?: () => void;
}

const themeConfig = {
  indigo: {
    gradient: "from-indigo-500 to-indigo-600 shadow-indigo-500/10 text-white",
    border: "hover:border-indigo-500/30 dark:border-indigo-900/30",
    badge:
      "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400",
  },
  cyan: {
    gradient: "from-cyan-500 to-cyan-600 shadow-cyan-500/10 text-white",
    border: "hover:border-cyan-500/30 dark:border-cyan-900/30",
    badge: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400",
  },
  slate: {
    gradient: "from-slate-800 to-slate-900 shadow-slate-500/10 text-white",
    border: "hover:border-slate-400/30 dark:border-slate-800/80",
    badge: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300",
  },
} as const satisfies Record<
  BenefitCardProps["themeColor"],
  { gradient: string; border: string; badge: string }
>;

const Benefit = ({
  title,
  highlights,
  role,
  themeColor,
  ctaLabel,
  onCtaClick,
}: BenefitCardProps) => {
  const { gradient, border, badge } = themeConfig[themeColor];

  return (
    <div
      className={`relative p-6 md:p-8 rounded-2xl border dark:bg-slate-900/20 bg-white transition-all shadow-sm ${border} flex flex-col justify-between h-full`}
    >
      <div>
        <span
          className={`inline-block px-2.5 py-1 rounded-lg text-[10px] uppercase font-bold tracking-wider ${badge}`}
        >
          {role} BENEFITS
        </span>

        <h3 className="mt-4 font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-slate-100">
          {title}
        </h3>

        <ul className="mt-6 space-y-3.5">
          {highlights.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start text-sm text-slate-600 dark:text-slate-400"
            >
              <span className="inline-flex items-center justify-center mr-3 mt-1 text-indigo-600 dark:text-indigo-400">
                ⚡
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <button
          onClick={onCtaClick}
          className={`w-full py-3 rounded-xl font-semibold text-xs tracking-wider uppercase bg-linear-to-r shadow-md flex items-center justify-center gap-1.5 transition-transform hover:-translate-y-0.5 cursor-pointer ${gradient}`}
        >
          <span>{ctaLabel}</span>
          <PiArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default Benefit;
