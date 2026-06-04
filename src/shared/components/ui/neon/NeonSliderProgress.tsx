"use client";

import { m, useTransform, type MotionValue } from "framer-motion";

interface NeonSliderProgressProps {
  value: MotionValue<number>;
  isPaused: boolean;
}

export function NeonSliderProgress({ value, isPaused }: NeonSliderProgressProps) {
  const scaleX = useTransform(value, (v) => v / 100);

  return (
    <div
      className="relative w-full h-0.75 rounded-full bg-surface-2/60 overflow-hidden"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Time until next slide"
    >
      <m.div
        className="absolute inset-y-0 left-0 w-full rounded-none"
        style={{
          scaleX,
          transformOrigin: "left",
          background: isPaused
            ? "linear-gradient(90deg, color-mix(in srgb, var(--theme-neon-fuchsia) 50%, transparent), color-mix(in srgb, var(--theme-neon-fuchsia) 30%, transparent))"
            : "linear-gradient(90deg, var(--theme-neon-cyan), var(--theme-neon-fuchsia))",
          boxShadow: isPaused
            ? "var(--glow-fuchsia-color) 0 0 6px"
            : "var(--glow-cyan-color) 0 0 10px",
        }}
      />

      {isPaused && (
        <span className="neon-pulse absolute right-1 top-1/2 -translate-y-1/2 text-[7px] font-mono text-neon-fuchsia leading-none">
          ‖
        </span>
      )}
    </div>
  );
}
