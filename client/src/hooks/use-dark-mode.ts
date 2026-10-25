import { createContext, createElement, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "theme";

type Stored = "dark" | "light" | null;

function readStored(): Stored {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "dark" || v === "light" ? v : null;
  } catch {
    return null;
  }
}

interface ThemeContextValue {
  isDark: boolean;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Owns the single source of truth for the colour scheme so every
 * ThemeToggle instance stays in sync. The site is dark by default; a
 * visitor's explicit choice is persisted. Keep in sync with the inline
 * script in client/index.html, which applies the class before first paint.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [stored, setStored] = useState<Stored>(readStored);
  const isDark = stored ? stored === "dark" : true;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) meta.content = isDark ? "#0e1420" : "#004888";
  }, [isDark]);

  const toggle = useCallback(() => {
    const next: Stored = isDark ? "light" : "dark";
    setStored(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable (private mode); theme still applies for this visit */
    }
  }, [isDark]);

  const value = useMemo(() => ({ isDark, toggle }), [isDark, toggle]);
  return createElement(ThemeContext.Provider, { value }, children);
}

export function useDarkMode(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useDarkMode must be used inside <ThemeProvider>");
  return ctx;
}
