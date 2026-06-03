"use client";

import { createContext, useCallback, useContext, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";

interface ThemeTransitionContextValue {
  toggleTheme: () => void;
  theme: string | undefined;
}

const Ctx = createContext<ThemeTransitionContextValue | null>(null);

export function useThemeTransition() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useThemeTransition must be inside ThemeTransitionProvider");
  return ctx;
}

export function ThemeTransitionProvider({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();
  useReducedMotion(); // keep import used

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <Ctx.Provider value={{ toggleTheme, theme }}>
      {children}
    </Ctx.Provider>
  );
}
