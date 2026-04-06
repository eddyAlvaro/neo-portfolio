"use client";

import { motion } from "framer-motion";
import { NeonCard } from "./NeonCard";

interface UnderConstructionProps {
  title: string;
}

export function UnderConstruction({ title }: UnderConstructionProps) {
  return (
    <NeonCard glowColor="yellow" className="h-full flex flex-col items-center justify-center gap-6 bg-black/40 border-dashed border-yellow-900/50 relative overflow-hidden group">
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,#facc15_50%,transparent_100%)] animate-pulse" />
      </div>

      <div className="flex flex-col items-center gap-2 text-center z-10 px-4">
        <motion.span 
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] font-mono tracking-[0.4em] text-yellow-500 uppercase border border-yellow-500/30 px-3 py-1 rounded-sm bg-yellow-950/10"
        >
          [ STATUS: RECONSTRUCTING ]
        </motion.span>
        <h3 className="text-2xl font-mono font-black text-white tracking-widest uppercase mt-4 italic">
          <span className="text-yellow-500 relative">
            {title}
            <span className="absolute -inset-1 bg-yellow-500/10 blur-md -z-10 group-hover:bg-yellow-500/20 transition-all" />
          </span>
        </h3>
      </div>
      
      <div className="flex flex-col items-center gap-3 z-10 w-full px-12">
        <div className="w-full max-w-50 h-1 bg-yellow-950/30 rounded-full overflow-hidden relative border border-yellow-900/20">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-1/2 bg-linear-to-r from-transparent via-yellow-500 to-transparent shadow-[0_0_8px_#facc15]" 
          />
        </div>
        <span className="text-[9px] font-mono text-yellow-500/60 uppercase tracking-tighter">
            {"// Loading data modules..."}
        </span>
      </div>

      <div className="flex flex-col items-center gap-1 z-10 text-center px-6">
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.15em] leading-relaxed">
          This sector is under structural maintenance. 
        </p>
        <p className="text-[9px] font-mono text-yellow-600/40 uppercase tracking-widest">
          Expected uptime: TBA
        </p>
      </div>

      {/* Warning Stripes */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[repeating-linear-gradient(45deg,#facc15_0%,#facc15_10px,#000_10px,#000_20px)] opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-[repeating-linear-gradient(45deg,#facc15_0%,#facc15_10px,#000_10px,#000_20px)] opacity-20" />
    </NeonCard>
  );
}
