"use client";

import { memo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { QuestActionButton } from "@/shared/components/ui/neon";
import type { Project } from "../../domain";
import { DifficultyStars } from "./DifficultyStars";
import { TechnicalLog } from "./TechnicalLog";
import { LootSystem } from "./LootSystem";
import { DisclaimerPopover } from "./DisclaimerPopover";
import { ProjectImageVisor } from "@/features/projects/presentation/components/ProjectImageVisor";

// Status configuration for style mapping
const statusConfig = {
  shipped: { label: "SHIPPED", color: "text-neon-green border-neon-green/40 bg-neon-green/5" },
  "in-progress": {
    label: "IN PROGRESS",
    color: "text-neon-yellow border-neon-yellow/40 bg-neon-yellow/5",
  },
  archived: { label: "ARCHIVED", color: "text-muted border-line/30 bg-surface/30" },
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

export const ProjectCard = memo(function ProjectCard({ project, direction }: ProjectCardProps) {
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
        border border-neon-fuchsia/20 bg-surface/70
        hover:border-neon-fuchsia/50 dark:hover:shadow-[0_0_20px_rgba(232,121,249,0.18)]
        transition-colors duration-300 backdrop-blur-sm
      "
    >
      {/* Row 1: Media + Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-4">
        <ProjectImageVisor project={project} />

        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <h3 className="font-mono font-bold text-sm text-text leading-tight">
                {project.title}
              </h3>
              {project.liveDisclaimer && (
                <DisclaimerPopover disclaimer={project.liveDisclaimer} />
              )}
            </div>
            <span className={`shrink-0 text-[9px] font-mono px-1.5 py-0.5 rounded border ${status.color}`}>
              {status.label}
            </span>
          </div>

          <p className="text-xs text-muted font-mono leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Project Stats */}
          <div className="grid grid-cols-3 gap-1.5 mt-0.5">
            <div className="flex flex-col gap-0.5 px-2 py-1.5 rounded-md bg-base/30 border border-line/10">
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-subtle">
                Difficulty
              </span>
              <DifficultyStars value={project.difficulty} />
            </div>
            <div className="flex flex-col gap-0.5 px-2 py-1.5 rounded-md bg-base/30 border border-line/10">
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-subtle">
                Role
              </span>
              <span className="text-[11px] font-mono text-neon-cyan truncate">{project.role}</span>
            </div>
            <div className="flex flex-col gap-0.5 px-2 py-1.5 rounded-md bg-base/30 border border-line/10">
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-subtle">
                Architecture
              </span>
              <span className="text-[11px] font-mono text-neon-fuchsia truncate">
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
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-neon-fuchsia/15">
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
});
