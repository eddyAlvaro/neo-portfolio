"use client";

import { motion } from "framer-motion";

interface SliderArrowProps {
  direction: "prev" | "next";
  onClick: () => void;
}

export function SliderArrow({ direction, onClick }: SliderArrowProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.15 }}
      aria-label={direction === "prev" ? "Previous project" : "Next project"}
      className="
        absolute top-1/2 -translate-y-1/2 z-20
        w-7 h-7 flex items-center justify-center
        rounded-md border border-fuchsia-500/50 bg-gray-950/80 backdrop-blur-sm
        text-fuchsia-400 font-mono text-xs
        hover:border-fuchsia-400 hover:bg-fuchsia-900/20
        hover:shadow-[0_0_14px_rgba(232,121,249,0.5)]
        transition-colors duration-200 cursor-pointer
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400
      "
      style={{
        [direction === "prev" ? "left" : "right"]: "-0.875rem",
        willChange: "transform",
      }}
    >
      {direction === "prev" ? "‹" : "›"}
    </motion.button>
  );
}
