"use client";

import { usePopover } from "@/shared/hooks/use-popover";
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

  const {
    isOpen,
    alignmentClass,
    containerRef,
    triggerRef,
    toggle
  } = usePopover<HTMLDivElement, HTMLButtonElement>();

  const visibleLoot = allLoot.slice(0, 4);
  const hiddenLoot = allLoot.slice(4);

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-subtle">
        ◈ Loot
      </span>
      <div className="flex flex-wrap gap-1.5">
        {visibleLoot.map(({ type, tech }) => (
          <span
            key={`${type}-${tech}`}
            className={
              type === "primary"
                ? "px-2 py-0.5 text-[10px] font-mono rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/40 dark:shadow-[0_0_8px_rgba(34,211,238,0.3)]"
                : "px-2 py-0.5 text-[10px] font-mono rounded bg-surface/50 text-muted border border-line/15"
            }
          >
            {tech}
          </span>
        ))}

        {hiddenLoot.length > 0 && (
          <div ref={containerRef} className="relative z-10">
            <button
              ref={triggerRef}
              onClick={toggle}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-neon-fuchsia/10 text-neon-fuchsia border border-neon-fuchsia/30 cursor-pointer flex items-center hover:bg-neon-fuchsia/20 transition-colors select-none outline-none focus:ring-1 focus:ring-neon-fuchsia/50"
            >
              +{hiddenLoot.length} MORE
            </button>
            <div className={`absolute bottom-full mb-2 w-max max-w-50 sm:max-w-xs p-2 bg-surface border border-neon-fuchsia/30 rounded-lg shadow-2xl transition-all duration-200 z-100 flex flex-wrap gap-1.5 ${alignmentClass} ${
              isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-1"
            }`}>
              {hiddenLoot.map(({ type, tech }) => (
                <span
                  key={`hidden-${type}-${tech}`}
                  className={
                    type === "primary"
                      ? "px-1.5 py-0.5 text-[9px] font-mono rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/40"
                      : "px-1.5 py-0.5 text-[9px] font-mono rounded bg-surface-2/80 text-muted border border-line/20"
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
