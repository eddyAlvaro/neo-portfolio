"use client";

import { motion } from "framer-motion";
import { NeonCard } from "@/shared/components/ui/neon";
import { useLog } from "../application";
import type { LogEntry } from "../domain";

const colorMap = {
  cyan: "text-cyan-400 border-cyan-800/50",
  fuchsia: "text-fuchsia-400 border-fuchsia-800/50",
  green: "text-green-400 border-green-800/50",
  yellow: "text-yellow-400 border-yellow-800/50",
};

function LogEntryRow({ entry, index }: { entry: LogEntry; index: number }) {
  const c = colorMap[entry.color];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className={`border-l-2 pl-3 py-1 ${c}`}
    >
      <div className="flex items-center gap-2 flex-wrap mb-0.5">
        <span className={`text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded border ${c}`}>
          {entry.tag}
        </span>
        <span className="text-[10px] font-mono text-gray-600">{entry.date}</span>
        <span className="text-xs font-mono font-bold text-gray-300">{entry.title}</span>
      </div>
      <p className="text-[11px] font-mono text-gray-500 leading-relaxed">{entry.body}</p>
    </motion.div>
  );
}

export function LoreLog() {
  const entries = useLog();

  return (
    <NeonCard glowColor="cyan" className="flex flex-col gap-4 h-auto lg:h-full">
      <div className="border-b border-cyan-900/50 pb-3 flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-500">
          ▸ Lore Log
        </span>
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="text-[10px] font-mono text-green-400"
        >
          ● LIVE
        </motion.span>
      </div>
      <div className="flex flex-col gap-4 overflow-y-auto px-2 flex-1 custom-scrollbar min-h-0 max-h-100">
        {entries.map((entry, i) => (
          <LogEntryRow key={entry.id} entry={entry} index={i} />
        ))}
      </div>
    </NeonCard>
  );
}
