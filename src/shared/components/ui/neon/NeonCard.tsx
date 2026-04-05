"use client";

import { motion } from "framer-motion";

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "fuchsia" | "green" | "yellow";
  hover?: boolean;
  delay?: number;
}

const glowMap = {
  cyan: "shadow-[0_0_20px_rgba(34,211,238,0.25)] border-cyan-500/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] hover:border-cyan-400/70",
  fuchsia: "shadow-[0_0_20px_rgba(232,121,249,0.25)] border-fuchsia-500/40 hover:shadow-[0_0_35px_rgba(232,121,249,0.45)] hover:border-fuchsia-400/70",
  green: "shadow-[0_0_20px_rgba(74,222,128,0.25)] border-green-500/40 hover:shadow-[0_0_35px_rgba(74,222,128,0.45)] hover:border-green-400/70",
  yellow: "shadow-[0_0_20px_rgba(250,204,21,0.25)] border-yellow-500/40 hover:shadow-[0_0_35px_rgba(250,204,21,0.45)] hover:border-yellow-400/70",
};

export function NeonCard({
  children,
  className = "",
  glowColor = "cyan",
  hover = true,
  delay = 0,
}: NeonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={hover ? { scale: 1.01 } : undefined}
      className={`
        relative rounded-xl border bg-gray-950/80 backdrop-blur-md
        p-4 transition-all duration-300
        ${glowMap[glowColor]}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
