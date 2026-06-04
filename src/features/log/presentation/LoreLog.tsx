"use client";

import { m, useReducedMotion } from "framer-motion";
import { NeonCard } from "@/shared/components/ui/neon";
import { useLog } from "../application";
import type { LogEntry } from "../domain";

const colorMap = {
  cyan: "text-neon-cyan border-neon-cyan/30",
  fuchsia: "text-neon-fuchsia border-neon-fuchsia/30",
  green: "text-neon-green border-neon-green/30",
  yellow: "text-neon-yellow border-neon-yellow/30",
  orange: "text-orange-400 border-orange-400/30",
  blue: "text-blue-400 border-blue-400/30",
};

function LogEntryRow({ entry, index }: { entry: LogEntry; index: number }) {
  const c = colorMap[entry.color];
  const prefersReduced = useReducedMotion();
  return (
    <m.div
      initial={prefersReduced ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      style={{ willChange: "transform" }}
      className={`border-l-2 pl-3 py-1 ${c}`}
    >
      <div className="flex items-center gap-2 flex-wrap mb-0.5">
        <span className={`text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded border ${c}`}>
          {entry.tag}
        </span>
        <span className="text-[10px] font-mono text-subtle">{entry.date}</span>
        <span className="text-xs font-mono font-bold text-text">{entry.title}</span>
      </div>
      <p className="text-[11px] font-mono text-muted leading-relaxed">{entry.body}</p>
    </m.div>
  );
}

export function LoreLog() {
  const entries = useLog();

  return (
    <NeonCard glowColor="cyan" className="flex flex-col gap-4 h-auto lg:h-full">
        <div className="border-b border-neon-cyan/20 pb-3 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon-cyan">
            ▸ Lore Log
          </span>
          <span className="neon-pulse text-[10px] font-mono text-neon-green">
            ● LIVE
          </span>
        </div>
        <div className="flex flex-col gap-4 overflow-y-auto px-2 flex-1 custom-scrollbar min-h-0 max-h-100">
          {entries.map((entry, i) => (
            <LogEntryRow key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </NeonCard>
  );
}
