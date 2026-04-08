"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

interface QuestActionButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "cyan" | "fuchsia" | "green";
  icon: ReactNode;
  label: string;
  /** Renders as <button> instead of <a> when true */
  asButton?: boolean;
  isActive?: boolean;
  className?: string;
}

const variantMap = {
  cyan: {
    base: "border-cyan-500/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_18px_rgba(34,211,238,0.45)]",
    active: "border-cyan-400 bg-cyan-400/10 shadow-[0_0_18px_rgba(34,211,238,0.45)]",
  },
  fuchsia: {
    base: "border-fuchsia-500/50 text-fuchsia-400 hover:border-fuchsia-400 hover:bg-fuchsia-400/10 hover:shadow-[0_0_18px_rgba(232,121,249,0.45)]",
    active: "border-fuchsia-400 bg-fuchsia-400/10 shadow-[0_0_18px_rgba(232,121,249,0.45)]",
  },
  green: {
    base: "border-green-500/50 text-green-400 hover:border-green-400 hover:bg-green-400/10 hover:shadow-[0_0_18px_rgba(74,222,128,0.45)]",
    active: "border-green-400 bg-green-400/10 shadow-[0_0_18px_rgba(74,222,128,0.45)]",
  },
};

export function QuestActionButton({
  href,
  onClick,
  variant = "cyan",
  icon,
  label,
  asButton = false,
  isActive = false,
  className = "",
}: QuestActionButtonProps) {
  const { base, active } = variantMap[variant];
  const cls = `
    inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border font-mono text-[10px]
    uppercase tracking-widest transition-all duration-200 cursor-pointer select-none
    ${isActive ? active : base} ${className}
  `;

  const inner = (
    <>
      <span className="text-[12px] leading-none">{icon}</span>
      <span>{label}</span>
    </>
  );

  if (!asButton && href) {
    return (
      <m.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className={cls}
        style={{ willChange: "transform" }}
      >
        {inner}
      </m.a>
    );
  }

  return (
    <m.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={cls}
      style={{ willChange: "transform" }}
    >
      {inner}
    </m.button>
  );
}
