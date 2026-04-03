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
    bar: "bg-cyan-400",
    glow: "shadow-[0_0_8px_rgba(34,211,238,0.7)]",
    text: "text-cyan-400",
    track: "bg-cyan-950/60",
  },
  fuchsia: {
    bar: "bg-fuchsia-400",
    glow: "shadow-[0_0_8px_rgba(232,121,249,0.7)]",
    text: "text-fuchsia-400",
    track: "bg-fuchsia-950/60",
  },
  green: {
    bar: "bg-green-400",
    glow: "shadow-[0_0_8px_rgba(74,222,128,0.7)]",
    text: "text-green-400",
    track: "bg-green-950/60",
  },
  yellow: {
    bar: "bg-yellow-400",
    glow: "shadow-[0_0_8px_rgba(250,204,21,0.7)]",
    text: "text-yellow-400",
    track: "bg-yellow-950/60",
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
        <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
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
