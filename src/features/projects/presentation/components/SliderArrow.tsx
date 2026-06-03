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
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.15 }}
      aria-label={direction === "prev" ? "Previous project" : "Next project"}
      className="
        w-8 h-8 flex items-center justify-center shrink-0
        rounded-md border border-neon-fuchsia/50 bg-surface/80 backdrop-blur-sm
        text-neon-fuchsia font-mono text-sm
        hover:border-neon-fuchsia hover:bg-neon-fuchsia/10
        dark:hover:shadow-[0_0_14px_rgba(232,121,249,0.5)]
        transition-colors duration-200 cursor-pointer
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-fuchsia
      "
      style={{ willChange: "transform" }}
    >
      {direction === "prev" ? "‹" : "›"}
    </motion.button>
  );
}
