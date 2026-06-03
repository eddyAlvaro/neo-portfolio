"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../../domain";

interface TechnicalLogProps {
  project: Project;
  isOpen: boolean;
}

export function TechnicalLog({ project, isOpen }: TechnicalLogProps) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="devlog"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div className="mt-3 pt-3 border-t border-neon-fuchsia/20 flex flex-col gap-3">
            <div>
              <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-neon-fuchsia mb-1">
                ⚡ The Challenge
              </p>
              <p className="text-[11px] font-mono text-muted leading-relaxed">
                {project.devLog.challenge}
              </p>
            </div>
            <div>
              <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-neon-cyan mb-1">
                ◈ The Solution
              </p>
              <p className="text-[11px] font-mono text-muted leading-relaxed">
                {project.devLog.solution}
              </p>
            </div>
            <div>
              <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-neon-green mb-1">
                ⬡ Architecture
              </p>
              <div className="rounded-md border border-neon-green/20 bg-base/40 px-3 py-2">
                <p className="text-[10px] font-mono text-neon-green/80 leading-relaxed whitespace-pre-wrap">
                  {project.devLog.architectureSnippet}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
