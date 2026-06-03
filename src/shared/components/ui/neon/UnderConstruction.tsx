"use client";

import { motion } from "framer-motion";
import { NeonCard } from "./NeonCard";

interface UnderConstructionProps {
  title: string;
}

export function UnderConstruction({ title }: UnderConstructionProps) {
  return (
    <NeonCard glowColor="yellow" className="h-full flex flex-col items-center justify-center gap-6 bg-base/40 border-dashed border-neon-yellow/30 relative overflow-hidden group">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,#facc15_50%,transparent_100%)] animate-pulse" />
      </div>

      <div className="flex flex-col items-center gap-2 text-center z-10 px-4">
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] font-mono tracking-[0.4em] text-neon-yellow uppercase border border-neon-yellow/30 px-3 py-1 rounded-sm bg-neon-yellow/10"
        >
          [ STATUS: RECONSTRUCTING ]
        </motion.span>
        <h3 className="text-2xl font-mono font-black text-text tracking-widest uppercase mt-4 italic">
          <span className="text-neon-yellow relative">
            {title}
            <span className="absolute -inset-1 bg-neon-yellow/10 blur-md -z-10 group-hover:bg-neon-yellow/20 transition-all" />
          </span>
        </h3>
      </div>

      <div className="flex flex-col items-center gap-3 z-10 w-full px-12">
        <div className="w-full max-w-50 h-1 bg-neon-yellow/10 rounded-full overflow-hidden relative border border-neon-yellow/20">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-1/2 bg-linear-to-r from-transparent via-neon-yellow to-transparent dark:shadow-[0_0_8px_#facc15]"
          />
        </div>
        <span className="text-[9px] font-mono text-neon-yellow/60 uppercase tracking-tighter">
          {"// Loading data modules..."}
        </span>
      </div>

      <div className="flex flex-col items-center gap-1 z-10 text-center px-6">
        <p className="text-[10px] font-mono text-muted uppercase tracking-[0.15em] leading-relaxed">
          This sector is under structural maintenance.
        </p>
        <p className="text-[9px] font-mono text-neon-yellow/40 uppercase tracking-widest">
          Expected uptime: TBA
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[repeating-linear-gradient(45deg,#facc15_0%,#facc15_10px,transparent_10px,transparent_20px)] opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-[repeating-linear-gradient(45deg,#facc15_0%,#facc15_10px,transparent_10px,transparent_20px)] opacity-20" />
    </NeonCard>
  );
}
