"use client";

import { NeonCard, NeonProgressBar } from "@/shared/components/ui/neon";
import { useProfile } from "../application";
import Image from "next/image";

export function CharacterStats() {
  const profile = useProfile();

  return (
    <NeonCard glowColor="cyan" className="flex flex-col gap-5 h-full">
      {/* Header */}
      <div className="grid grid-cols-1 h-full max-h-full gap-3">
        <div className="flex flex-col gap-1 border-b border-cyan-900/50 pb-4">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-500">
          ▸ Character Stats
        </span>
        </div>
        <div className="grid grid-cols-2 h-full sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="flex flex-row justify-center items-center gap-2 xl:flex-col xl:gap-0">
              <h2 className="text-lg font-mono font-bold text-cyan-100">{profile.name}</h2>
              <span className="text-xs font-mono text-gray-500">{profile.class}</span>
            </div>
            <Image className="w-30 lg:w-20 m-[0_auto]" src="/images/profile.png" alt={`Avatar de ${profile.name}`} width={150} height={150} />
          </div>
          {/* About */}
          <div className="border border-cyan-900/40 rounded-lg p-3 bg-black/30 flex flex-col min-h-0 overflow-hidden">
            <p className="text-xs font-mono text-gray-400 leading-relaxed shrink-0">
              <span className="text-cyan-500 font-bold">// ABOUT: </span>
              {profile.about}
            </p>
          </div>
        </div>

        {/* Attributes */}
        <div className="border border-cyan-900/40 rounded-lg p-3 bg-black/30 flex flex-col min-h-0 overflow-hidden">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-600 mb-2 shrink-0">
            — Attributes —
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-3 overflow-y-auto pr-2 flex-1 custom-scrollbar xl:grid-cols-1 2xl:grid-cols-2">
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
