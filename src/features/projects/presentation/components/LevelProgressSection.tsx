"use client";

import { m } from "framer-motion";
import { NeonCard, NeonProgressBar } from "@/shared/components/ui/neon";
import { useLevelProgress } from "../../application/use-projects";

export function LevelProgressSection() {
  const progress = useLevelProgress();
  const pct = Math.round((progress.currentXP / progress.nextLevelXP) * 100);

  return (
    <NeonCard glowColor="green" className="flex flex-col gap-4">
      <div className="border-b border-neon-green/20 pb-3">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon-green">
          ▸ Level Progress
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <m.div
            whileHover={{ scale: 1.05 }}
            className="w-14 h-14 rounded-xl border-2 border-neon-green bg-neon-green/10 dark:shadow-[0_0_14px_rgba(74,222,128,0.5)] flex items-center justify-center"
          >
            <span className="font-mono font-black text-neon-green text-xl">
              {progress.currentLevel}
            </span>
          </m.div>
            <div>
              <p className="text-xs text-muted font-mono uppercase">Current Level</p>
              <p className="text-sm font-mono font-bold text-text">
                {progress.currentXP.toLocaleString()} / {progress.nextLevelXP.toLocaleString()} XP
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-subtle font-mono">Total XP</p>
            <p className="text-sm font-mono font-bold text-neon-fuchsia">
              {progress.totalXP.toLocaleString()}
            </p>
          </div>
        </div>
        <NeonProgressBar label="XP to next level" value={pct} color="green" delay={0.3} />
    </NeonCard>
  );
}
