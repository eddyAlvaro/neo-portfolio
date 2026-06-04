"use client";

import { NeonCard, NeonProgressBar } from "@/shared/components/ui/neon";
import { useProfile } from "../application";

export function CharacterStats() {
  const profile = useProfile();

  return (
    <NeonCard glowColor="cyan" className="flex flex-col gap-5 h-auto lg:h-full">
      <div className="grid grid-cols-1 lg:h-full lg:max-h-full gap-3">
        <div className="flex flex-col gap-1 border-b border-neon-cyan/20 pb-3">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon-cyan">
            ▸ Character Stats
          </span>
        </div>
        <div className="grid grid-cols-2 lg:h-full sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="flex flex-row justify-center items-center gap-2 xl:flex-col xl:gap-0">
              <h2 className="text-lg font-mono font-bold text-text">{profile.name}</h2>
              <span className="text-xs font-mono text-muted">{profile.class}</span>
            </div>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster="/images/profile.min.webp"
              width={160}
              height={160}
              className="aspect-square object-cover mx-auto w-32 md:w-40 lg:w-32 md:max-w-25 my-2"
            >
              <source src="/profile.mp4" type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          </div>
          {/* About */}
          <div className="border border-neon-cyan/20 rounded-lg p-3 bg-base/30 flex flex-col min-h-0 overflow-hidden">
            <p className="text-xs font-mono text-muted leading-relaxed shrink-0">
              <span className="text-neon-cyan font-bold">{"// ABOUT: "}</span>
              {profile.about}
            </p>
          </div>
        </div>

        {/* Attributes */}
        <div className="border border-neon-cyan/20 rounded-lg p-3 bg-base/30 flex flex-col min-h-0 overflow-hidden">
          <span className="text-xs font-mono uppercase tracking-widest text-subtle mb-2 shrink-0">
            — Attributes —
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-3 overflow-y-auto px-2 flex-1 custom-scrollbar xl:grid-cols-1 2xl:grid-cols-2">
            {profile.stats.map((stat, i) => (
              <NeonProgressBar
                key={stat.label}
                label={stat.label}
                value={stat.value}
                color={stat.color}
                delay={0.2 + i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </NeonCard>
  );
}
