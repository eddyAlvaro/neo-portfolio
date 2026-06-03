"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
  variant?: "cyan" | "fuchsia" | "green";
}

const variantMap = {
  cyan: "border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 dark:shadow-[0_0_12px_rgba(34,211,238,0.3)] dark:hover:shadow-[0_0_24px_rgba(34,211,238,0.6)]",
  fuchsia: "border-neon-fuchsia text-neon-fuchsia hover:bg-neon-fuchsia/10 dark:shadow-[0_0_12px_rgba(232,121,249,0.3)] dark:hover:shadow-[0_0_24px_rgba(232,121,249,0.6)]",
  green: "border-neon-green text-neon-green hover:bg-neon-green/10 dark:shadow-[0_0_12px_rgba(74,222,128,0.3)] dark:hover:shadow-[0_0_24px_rgba(74,222,128,0.6)]",
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
