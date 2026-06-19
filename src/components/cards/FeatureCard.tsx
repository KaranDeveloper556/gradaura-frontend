import type { ReactNode } from "react";

interface FeatureCardProps {
  visual: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({
  visual,
  title,
  description,
  className = "",
}: FeatureCardProps) => {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-900 ${className}`}
    >
      {/* Visual area */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-slate-50 px-6 dark:bg-slate-950/50">
        {visual}
      </div>

      {/* Text */}
      <div className="flex flex-1 flex-col gap-2 border-t border-slate-100 px-6 py-6 dark:border-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
