"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";
import { ThemeTransitionProvider } from "./ThemeTransition";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={true}
    >
      <ThemeTransitionProvider>{children}</ThemeTransitionProvider>
    </NextThemesProvider>
  );
}
