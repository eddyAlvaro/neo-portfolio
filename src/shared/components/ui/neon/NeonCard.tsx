"use client";

import { m } from "framer-motion";

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "fuchsia" | "green" | "yellow";
  hover?: boolean;
  delay?: number;
}

const borderMap = {
  cyan: "border-neon-cyan/40 hover:border-neon-cyan/70",
  fuchsia: "border-neon-fuchsia/40 hover:border-neon-fuchsia/70",
  green: "border-neon-green/40 hover:border-neon-green/70",
  yellow: "border-neon-yellow/40 hover:border-neon-yellow/70",
};

const restGlowMap = {
  cyan: "dark:shadow-[0_0_20px_rgba(34,211,238,0.25)]",
  fuchsia: "dark:shadow-[0_0_20px_rgba(232,121,249,0.25)]",
  green: "dark:shadow-[0_0_20px_rgba(74,222,128,0.25)]",
  yellow: "dark:shadow-[0_0_20px_rgba(250,204,21,0.25)]",
};

const hoverGlowMap = {
  cyan: "dark:shadow-[0_0_35px_rgba(34,211,238,0.45)]",
  fuchsia: "dark:shadow-[0_0_35px_rgba(232,121,249,0.45)]",
  green: "dark:shadow-[0_0_35px_rgba(74,222,128,0.45)]",
  yellow: "dark:shadow-[0_0_35px_rgba(250,204,21,0.45)]",
};

export function NeonCard({
  children,
  className = "",
  glowColor = "cyan",
  hover = true,
  delay = 0,
}: NeonCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={hover ? { scale: 1.01 } : undefined}
      className={`
        group relative rounded-xl border bg-surface/90
        p-4 transition-[border-color] duration-300
        ${borderMap[glowColor]}
        ${restGlowMap[glowColor]}
        ${className}
      `}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 dark:group-hover:opacity-100 ${hoverGlowMap[glowColor]}`}
      />
      {children}
    </m.div>
  );
}
