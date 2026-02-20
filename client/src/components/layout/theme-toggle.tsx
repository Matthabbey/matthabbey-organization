import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";

export function ThemeToggle() {
  const { isDark, toggle } = useDarkMode();

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-foreground transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
