"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
  variant?: "cyan" | "fuchsia" | "green";
}

const variantMap = {
  cyan: "border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 shadow-[0_0_12px_rgba(34,211,238,0.3)] hover:shadow-[0_0_24px_rgba(34,211,238,0.6)]",
  fuchsia: "border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400/10 shadow-[0_0_12px_rgba(232,121,249,0.3)] hover:shadow-[0_0_24px_rgba(232,121,249,0.6)]",
  green: "border-green-400 text-green-400 hover:bg-green-400/10 shadow-[0_0_12px_rgba(74,222,128,0.3)] hover:shadow-[0_0_24px_rgba(74,222,128,0.6)]",
};

export function NeonButton({ variant = "cyan", children, className = "", ...props }: NeonButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`
        border rounded-lg px-5 py-3 font-mono text-sm uppercase tracking-widest
        transition-all duration-300 cursor-pointer disabled:opacity-40 w-full
        ${variantMap[variant]} ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
