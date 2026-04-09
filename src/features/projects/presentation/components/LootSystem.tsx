"use client";

import type { TechLoot } from "../../domain";

interface LootSystemProps {
  loot: TechLoot;
  className?: string;
}

export function LootSystem({ loot, className = "" }: LootSystemProps) {
  const allLoot = [
    ...loot.primary.map((tech) => ({ type: "primary" as const, tech })),
    ...loot.secondary.map((tech) => ({ type: "secondary" as const, tech })),
  ];
  
  const visibleLoot = allLoot.slice(0, 4);
  const hiddenLoot = allLoot.slice(4);

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-gray-600">
        ◈ Loot
      </span>
      <div className="flex flex-wrap gap-1.5">
        {visibleLoot.map(({ type, tech }) => (
          <span
            key={`${type}-${tech}`}
            className={
              type === "primary"
                ? "px-2 py-0.5 text-[10px] font-mono rounded bg-cyan-950/70 text-cyan-300 border border-cyan-700/60 shadow-[0_0_8px_rgba(34,211,238,0.3)]"
                : "px-2 py-0.5 text-[10px] font-mono rounded bg-gray-900/50 text-gray-600 border border-gray-800/50"
            }
          >
            {tech}
          </span>
        ))}
        
        {hiddenLoot.length > 0 && (
          <div className="relative group/tooltip">
            <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-fuchsia-950/30 text-fuchsia-400 border border-fuchsia-900/50 cursor-pointer flex items-center hover:bg-fuchsia-900/40 transition-colors">
              +{hiddenLoot.length} MORE
            </span>
            <div className="absolute bottom-full left-0 md:left-1/2 md:-translate-x-1/2 mb-2 w-max max-w-55 p-2 bg-gray-900/95 border border-fuchsia-900/50 rounded-lg shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 flex flex-wrap gap-1.5">
              {hiddenLoot.map(({ type, tech }) => (
                <span
                  key={`hidden-${type}-${tech}`}
                  className={
                    type === "primary"
                      ? "px-1.5 py-0.5 text-[9px] font-mono rounded bg-cyan-950/70 text-cyan-300 border border-cyan-700/60"
                      : "px-1.5 py-0.5 text-[9px] font-mono rounded bg-gray-800/80 text-gray-400 border border-gray-700/80"
                  }
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
