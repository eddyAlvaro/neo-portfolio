"use client";

import type { ReactNode } from "react";
import { m, HTMLMotionProps } from "framer-motion";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
  variant?: "cyan" | "fuchsia" | "green";
}

const variantBase = {
  cyan: "border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 dark:shadow-[0_0_12px_rgba(34,211,238,0.3)]",
  fuchsia: "border-neon-fuchsia text-neon-fuchsia hover:bg-neon-fuchsia/10 dark:shadow-[0_0_12px_rgba(232,121,249,0.3)]",
  green: "border-neon-green text-neon-green hover:bg-neon-green/10 dark:shadow-[0_0_12px_rgba(74,222,128,0.3)]",
};

const variantHoverGlow = {
  cyan: "dark:shadow-[0_0_24px_rgba(34,211,238,0.6)]",
  fuchsia: "dark:shadow-[0_0_24px_rgba(232,121,249,0.6)]",
  green: "dark:shadow-[0_0_24px_rgba(74,222,128,0.6)]",
};

export function NeonButton({ variant = "cyan", children, className = "", ...props }: NeonButtonProps) {
  return (
    <m.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`
        group relative border rounded-lg px-5 py-3 font-mono text-sm uppercase tracking-widest
        transition-[background-color] duration-300 cursor-pointer disabled:opacity-40 w-full
        ${variantBase[variant]} ${className}
      `}
      {...props}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 dark:group-hover:opacity-100 ${variantHoverGlow[variant]}`}
      />
      {children as ReactNode}
    </m.button>
  );
}
