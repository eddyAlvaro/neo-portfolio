"use client";

import { useEffect, useState } from "react";
import { useThemeTransition } from "./ThemeTransition";

export function ThemeToggle() {
  const { toggleTheme, theme } = useThemeTransition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-16 h-6" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="
        flex items-center gap-1.5 px-2 py-1 rounded-md border font-mono text-[10px]
        uppercase tracking-widest transition-all duration-200 cursor-pointer
        border-neon-cyan/40 text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10
      "
    >
      <span>{isDark ? "☀" : "◑"}</span>
      <span>{isDark ? "light" : "dark"}</span>
    </button>
  );
}
