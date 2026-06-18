import { useTheme as useNextTheme } from "next-themes";

export type Theme = "light" | "dark" | "system";

export function useTheme() {
  const {
    theme,
    setTheme,
    resolvedTheme,
    systemTheme,
  } = useNextTheme();

  const toggleTheme = () => {
    setTheme(
      resolvedTheme === "dark"
        ? "light"
        : "dark"
    );
  };

  return {
    theme: theme as Theme,
    resolvedTheme: resolvedTheme as "light" | "dark",
    systemTheme: systemTheme as "light" | "dark",
    setTheme,
    toggleTheme,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
  };
}