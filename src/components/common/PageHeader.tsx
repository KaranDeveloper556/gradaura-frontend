interface PageHeaderProps {
  badge?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  children?: React.ReactNode;
}

const PageHeader = ({
  badge = "Page Header badge",
  title = "Page Header",
  highlightText = "Default Text",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed libero doloribus ut labore doloremque modi minima itaque quos.",
  children,
}: PageHeaderProps) => {
  return (
    <section className="relative pt-20 md:pt-20 border-b dark:border-slate-900 border-slate-200/60 dark:bg-slate-950/40 bg-slate-50/50 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-indigo-500/5 dark:bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-cyan-500/5 dark:bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18 text-center relative z-10">
        {badge && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-100/30 dark:border-indigo-900/10 mb-4 animate-fade-in">
            {badge}
          </span>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-none">
          {title}{" "}
          {highlightText && (
            <span className="font-fancy italic text-indigo-600 dark:text-indigo-400 font-normal">
              {highlightText}
            </span>
          )}
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        {children && <div className="mt-8 flex justify-center">{children}</div>}
      </div>
    </section>
  );
};

export default PageHeader;
