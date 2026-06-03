"use client";

import { m, LazyMotion, domAnimation, useReducedMotion } from "framer-motion";
import { NeonCard } from "@/shared/components/ui/neon";
import { useAchievements } from "../application";
import type { Achievement } from "../domain";

const rarityConfig = {
  common: { color: "text-muted border-line/30 bg-surface/30", glow: "" },
  rare: { color: "text-neon-cyan border-neon-cyan/30 bg-neon-cyan/5", glow: "dark:shadow-[0_0_8px_rgba(34,211,238,0.2)]" },
  epic: { color: "text-neon-fuchsia border-neon-fuchsia/30 bg-neon-fuchsia/5", glow: "dark:shadow-[0_0_10px_rgba(232,121,249,0.25)]" },
  legendary: { color: "text-neon-yellow border-neon-yellow/40 bg-neon-yellow/5", glow: "dark:shadow-[0_0_14px_rgba(250,204,21,0.35)]" },
};

function AchievementRow({ achievement, index }: { achievement: Achievement; index: number }) {
  const rarity = rarityConfig[achievement.rarity];
  const prefersReduced = useReducedMotion();

  return (
    <m.div
      initial={prefersReduced ? false : { opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      style={{ willChange: "transform" }}
      className={`
        flex items-center gap-3 p-2.5 rounded-lg border
        transition-all duration-300 hover:scale-[1.01]
        ${rarity.color} ${rarity.glow}
      `}
    >
      <span className="text-xl shrink-0" role="img" aria-label={achievement.title}>
        {achievement.icon}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-mono font-bold text-xs truncate">{achievement.title}</p>
          <span className="text-[10px] font-mono uppercase opacity-60">{achievement.rarity}</span>
        </div>
        <p className="text-[10px] font-mono text-muted leading-relaxed">{achievement.description}</p>
      </div>
      <div className="shrink-0 text-[10px] font-mono text-subtle text-right">
        {new Date(achievement.unlockedAt).getFullYear()}
      </div>
    </m.div>
  );
}

export function Achievements() {
  const achievements = [...useAchievements()].reverse();
  const unlocked = achievements.filter((a) => a.unlocked);

  return (
    <LazyMotion features={domAnimation}>
      <NeonCard glowColor="yellow" className="flex flex-col gap-4 h-auto lg:h-full">
        <div className="flex items-center justify-between border-b border-neon-yellow/20 pb-3">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon-yellow">
            ▸ Achievements
          </span>
          <span className="text-xs font-mono text-subtle">
            {unlocked.length}/{achievements.length} unlocked
          </span>
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto px-2 flex-1 custom-scrollbar min-h-0 max-h-100">
          {achievements.map((achievement, i) => (
            <AchievementRow key={achievement.id} achievement={achievement} index={i} />
          ))}
        </div>
      </NeonCard>
    </LazyMotion>
  );
}
