"use client";

import { m } from "framer-motion";

interface NeonSliderProgressProps {
  /** 0–100 */
  value: number;
  isPaused: boolean;
}

export function NeonSliderProgress({ value, isPaused }: NeonSliderProgressProps) {
  return (
    <div
      className="relative w-full h-0.75 rounded-full bg-gray-800/60 overflow-hidden"
      role="progressbar"
      aria-valuenow={Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Time until next slide"
    >
      {/* Track fill */}
      <m.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{
          width: `${value}%`,
          background: isPaused
            ? "linear-gradient(90deg, rgba(232,121,249,0.5), rgba(232,121,249,0.3))"
            : "linear-gradient(90deg, rgba(34,211,238,1), rgba(232,121,249,1))",
          boxShadow: isPaused
            ? "0 0 6px rgba(232,121,249,0.4)"
            : "0 0 10px rgba(34,211,238,0.7), 0 0 20px rgba(232,121,249,0.4)",
          willChange: "width",
        }}
        transition={{ ease: "linear" }}
      />

      {/* Paused pip */}
      {isPaused && (
        <m.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="absolute right-1 top-1/2 -translate-y-1/2 text-[7px] font-mono text-fuchsia-400 leading-none"
        >
          ‖
        </m.span>
      )}
    </div>
  );
}
