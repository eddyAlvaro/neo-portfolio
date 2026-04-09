"use client";

import { motion, LazyMotion, domAnimation, useReducedMotion } from "framer-motion";
import { NeonCard, NeonProgressBar } from "@/shared/components/ui/neon";
import { useLevelProgress } from "../../application/use-projects";

export function LevelProgressSection() {
  const progress = useLevelProgress();
  const pct = Math.round((progress.currentXP / progress.nextLevelXP) * 100);
  const prefersReduced = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <NeonCard glowColor="green" className="flex flex-col gap-4">
        <div className="border-b border-green-900/50 pb-3">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-green-500">
            ▸ Level Progress
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              animate={prefersReduced ? {} : { opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ willChange: "opacity" }}
              className="w-14 h-14 rounded-xl border-2 border-green-400 bg-green-950/50 shadow-[0_0_14px_rgba(74,222,128,0.5)] flex items-center justify-center"
            >
              <span className="font-mono font-black text-green-400 text-xl">
                {progress.currentLevel}
              </span>
            </motion.div>
            <div>
              <p className="text-xs text-gray-500 font-mono uppercase">Current Level</p>
              <p className="text-sm font-mono font-bold text-green-100">
                {progress.currentXP.toLocaleString()} / {progress.nextLevelXP.toLocaleString()} XP
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-600 font-mono">Total XP</p>
            <p className="text-sm font-mono font-bold text-fuchsia-400">
              {progress.totalXP.toLocaleString()}
            </p>
          </div>
        </div>
        <NeonProgressBar label="XP to next level" value={pct} color="green" delay={0.3} />
      </NeonCard>
    </LazyMotion>
  );
}
