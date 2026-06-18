import { forwardRef, type ReactNode } from "react";
import { motion } from "motion/react";

interface ButtonProps {
  variant?: "solid" | "outline" | "ghost" | "soft" | "danger" | "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
  iconOnly?: boolean;
  disabled?: boolean;
  animate?: boolean;
  className?: string;
  children?: ReactNode;
}

const BASE =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-lg " +
  "transition-all duration-200 focus:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-offset-2 focus-visible:ring-indigo-500 " +
  "dark:focus-visible:ring-offset-slate-900 select-none cursor-pointer " +
  "disabled:opacity-50 disabled:pointer-events-none";

const VARIANTS = {
  solid:
    "bg-slate-900 text-white hover:bg-indigo-600 " +
    "dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-500 dark:hover:text-white " +
    "shadow-sm active:scale-[0.97]",

  outline:
    "border border-slate-300 text-slate-700 bg-transparent hover:border-indigo-500 hover:text-indigo-600 " +
    "dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400 " +
    "active:scale-[0.97]",

  ghost:
    "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 " +
    "dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 " +
    "active:scale-[0.97]",

  soft:
    "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 " +
    "dark:bg-indigo-950/40 dark:text-indigo-300 dark:hover:bg-indigo-900/50 " +
    "active:scale-[0.97]",

  danger:
    "bg-red-600 text-white hover:bg-red-700 shadow-sm " +
    "dark:bg-red-500 dark:hover:bg-red-600 " +
    "active:scale-[0.97]",

  link:
    "bg-transparent text-indigo-600 hover:text-indigo-800 underline-offset-4 hover:underline " +
    "dark:text-indigo-400 dark:hover:text-indigo-300 p-0 h-auto rounded-none",
};

const SIZES = {
  xs: "px-2.5 py-1 text-xs rounded-md gap-1",
  sm: "px-3.5 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
  xl: "px-6 py-3 text-base tracking-wide",
};

const ICON_SIZES = {
  xs: "p-1 text-xs rounded-md",
  sm: "p-1.5 text-sm",
  md: "p-2 text-sm",
  lg: "p-2.5 text-base",
  xl: "p-3 text-base",
};

const Spinner = ({ size }: { size: keyof typeof SIZES }) => {
  const dim = { xs: 10, sm: 12, md: 14, lg: 16, xl: 18 }[size] ?? 14;
  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin shrink-0"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="31.416"
        strokeDashoffset="23.562"
        opacity="0.3"
      />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "solid",
    size = "md",
    leftIcon,
    rightIcon,
    loading = false,
    loadingText,
    fullWidth = false,
    iconOnly = false,
    disabled = false,
    animate = true,
    className = "",
    children,
    ...rest
  }: ButtonProps,
  ref,
) {
  const isDisabled = disabled || loading;

  const sizeClass = iconOnly ? ICON_SIZES[size] : SIZES[size];

  const classes = [
    BASE,
    VARIANTS[variant] ?? VARIANTS.solid,
    sizeClass,
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading ? (
        <Spinner size={size} />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}

      {!iconOnly && (
        <span>{loading && loadingText ? loadingText : children}</span>
      )}

      {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  );

  if (animate && variant !== "link") {
    return (
      <motion.div
        whileHover={!isDisabled ? { y: -2 } : {}}
        whileTap={!isDisabled ? { scale: 0.97 } : {}}
        className={fullWidth ? "w-full" : "inline-flex"}
        style={{ display: fullWidth ? "flex" : "inline-flex" }}
      >
        <button
          ref={ref as any}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          aria-busy={loading}
          className={classes + (fullWidth ? " w-full" : "")}
          {...rest}
        >
          {content}
        </button>
      </motion.div>
    );
  }

  return (
    <button
      ref={ref}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      className={classes}
      {...rest}
    >
      {content}
    </button>
  );
});

export default Button;
