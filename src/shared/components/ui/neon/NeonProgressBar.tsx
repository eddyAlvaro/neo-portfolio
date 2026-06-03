"use client";

import { motion } from "framer-motion";

interface NeonProgressBarProps {
  label: string;
  value: number; // 0–100
  color?: "cyan" | "fuchsia" | "green" | "yellow";
  delay?: number;
  showValue?: boolean;
}

const colorMap = {
  cyan: {
    bar: "bg-neon-cyan",
    glow: "dark:shadow-[0_0_8px_rgba(34,211,238,0.7)]",
    text: "text-neon-cyan",
    track: "bg-neon-cyan/10",
  },
  fuchsia: {
    bar: "bg-neon-fuchsia",
    glow: "dark:shadow-[0_0_8px_rgba(232,121,249,0.7)]",
    text: "text-neon-fuchsia",
    track: "bg-neon-fuchsia/10",
  },
  green: {
    bar: "bg-neon-green",
    glow: "dark:shadow-[0_0_8px_rgba(74,222,128,0.7)]",
    text: "text-neon-green",
    track: "bg-neon-green/10",
  },
  yellow: {
    bar: "bg-neon-yellow",
    glow: "dark:shadow-[0_0_8px_rgba(250,204,21,0.7)]",
    text: "text-neon-yellow",
    track: "bg-neon-yellow/10",
  },
};

export function NeonProgressBar({
  label,
  value,
  color = "cyan",
  delay = 0,
  showValue = true,
}: NeonProgressBarProps) {
  const c = colorMap[color];

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex justify-between items-center">
        <span className="text-xs font-mono uppercase tracking-widest text-muted">
          {label}
        </span>
        {showValue && (
          <span className={`text-xs font-mono font-bold ${c.text}`}>
            {value}/100
          </span>
        )}
      </div>
      <div className={`relative h-2.5 w-full rounded-full ${c.track} overflow-hidden`}>
        <motion.div
          className={`h-full rounded-full ${c.bar} ${c.glow}`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
