interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle: string;
  alignment?: "center" | "left";
  className?: string;
}

const SectionHeader = ({
  badge,
  title,
  highlightText,
  subtitle,
  className = "",
}: SectionHeaderProps) => {
  return (
    <div
      className={`mb-12 md:mb-16 flex flex-col items-center text-center ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/30 mb-3.5">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-slate-100 max-w-3xl leading-tight">
        {title}{" "}
        {highlightText && (
          <span className="font-fancy italic text-indigo-600 dark:text-indigo-400 font-normal underline decoration-indigo-500/20 underline-offset-8">
            {highlightText}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
