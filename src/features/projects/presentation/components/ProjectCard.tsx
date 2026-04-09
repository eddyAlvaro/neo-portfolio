"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { QuestActionButton } from "@/shared/components/ui/neon";
import type { Project } from "../../domain";
import { DifficultyStars } from "./DifficultyStars";
import { TechnicalLog } from "./TechnicalLog";
import { LootSystem } from "./LootSystem";
import { ProjectImageVisor } from "@/features/projects/presentation/components/ProjectImageVisor";

// Status configuration for style mapping
const statusConfig = {
  shipped: { label: "SHIPPED", color: "text-green-400 border-green-500/40 bg-green-950/30" },
  "in-progress": {
    label: "IN PROGRESS",
    color: "text-yellow-400 border-yellow-500/40 bg-yellow-950/30",
  },
  archived: { label: "ARCHIVED", color: "text-gray-500 border-gray-700 bg-gray-900/30" },
};

// Slide variants — fade + subtle scale
const slideVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 40 : -40,
    scale: 0.97,
  }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -40 : 40,
    scale: 0.97,
  }),
};

interface ProjectCardProps {
  project: Project;
  direction: 1 | -1;
}

export function ProjectCard({ project, direction }: ProjectCardProps) {
  const [devlogOpen, setDevlogOpen] = useState(false);
  const prefersReduced = useReducedMotion();
  const status = statusConfig[project.status];

  return (
    <motion.article
      key={project.id}
      id={`quest-${project.id}`}
      custom={direction}
      variants={prefersReduced ? undefined : slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ willChange: "opacity, transform" }}
      className="
        flex flex-col gap-3 p-4 rounded-xl
        border border-fuchsia-900/30 bg-gray-950/70
        hover:border-fuchsia-400/50 hover:shadow-[0_0_20px_rgba(232,121,249,0.18)]
        transition-colors duration-300 backdrop-blur-sm
      "
    >
      {/* Row 1: Media + Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-4">
        <ProjectImageVisor project={project} />

        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <h3 className="font-mono font-bold text-sm text-cyan-100 leading-tight">
                {project.title}
              </h3>
              {project.liveDisclaimer && (
                <div className="relative group/disclaimer flex items-center">
                  <motion.span 
                    animate={{ 
                      scale: [1, 1.15, 1],
                      opacity: [0.7, 1, 0.7] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="text-yellow-500 cursor-help text-[12px] block" 
                    aria-label="Disclaimer"
                  >
                    ⚠
                  </motion.span>
                  <div className="absolute top-[120%] left-0 w-max max-w-50 p-2 bg-yellow-950/90 border border-yellow-900/50 rounded-lg shadow-[0_0_15px_rgba(202,138,4,0.15)] opacity-0 invisible group-hover/disclaimer:opacity-100 group-hover/disclaimer:visible transition-all duration-200 z-50 pointer-events-none">
                    <p className="text-[10px] font-mono text-yellow-500/90 italic leading-tight whitespace-normal">
                      [LOG_NOTE]: {project.liveDisclaimer}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <span className={`shrink-0 text-[9px] font-mono px-1.5 py-0.5 rounded border ${status.color}`}>
              {status.label}
            </span>
          </div>

          <p className="text-xs text-gray-500 font-mono leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Project Stats */}
          <div className="grid grid-cols-3 gap-1.5 mt-0.5">
            <div className="flex flex-col gap-0.5 px-2 py-1.5 rounded-md bg-black/30 border border-gray-800/60">
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-600">
                Difficulty
              </span>
              <DifficultyStars value={project.difficulty} />
            </div>
            <div className="flex flex-col gap-0.5 px-2 py-1.5 rounded-md bg-black/30 border border-gray-800/60">
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-600">
                Role
              </span>
              <span className="text-[11px] font-mono text-cyan-300 truncate">{project.role}</span>
            </div>
            <div className="flex flex-col gap-0.5 px-2 py-1.5 rounded-md bg-black/30 border border-gray-800/60">
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-600">
                Architecture
              </span>
              <span className="text-[11px] font-mono text-fuchsia-300 truncate">
                {project.architecture}
              </span>
            </div>
          </div>

          {/* Loot System (XL Desktop - inside text column) */}
          <LootSystem loot={project.loot} className="hidden xl:flex mt-1" />
        </div>
      </div>

      {/* Loot System (Mobile/Tablet - below row 1) */}
      <LootSystem loot={project.loot} className="flex xl:hidden" />

      {/* Quest Actions */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-fuchsia-900/20">
        <div className="flex flex-wrap gap-2">
          {project.githubUrl && (
            <QuestActionButton href={project.githubUrl} variant="cyan" icon="⌥" label="View Source" />
          )}
          {project.demoUrl && (
            <QuestActionButton href={project.demoUrl} variant="green" icon="↗" label="Live Demo" />
          )}
          <QuestActionButton
            asButton
            onClick={() => setDevlogOpen((v) => !v)}
            variant="fuchsia"
            icon="⬡"
            label="DevLog"
            isActive={devlogOpen}
          />
        </div>
        <span className="text-[10px] font-mono text-fuchsia-400 shrink-0">
          +{project.xp.toLocaleString()} XP
        </span>
      </div>

      {/* Collapsible DevLog */}
      <TechnicalLog project={project} isOpen={devlogOpen} />
    </motion.article>
  );
}
