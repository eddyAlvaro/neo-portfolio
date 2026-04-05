"use client";

import { motion } from "framer-motion";
import { NeonCard, NeonProgressBar } from "@/shared/components/ui/neon";
import { useProjects, useLevelProgress } from "../application/use-projects";
import type { Project } from "../domain";

const statusConfig = {
  shipped: { label: "SHIPPED", color: "text-green-400 border-green-500/50" },
  "in-progress": { label: "IN PROGRESS", color: "text-yellow-400 border-yellow-500/50" },
  archived: { label: "ARCHIVED", color: "text-gray-500 border-gray-700" },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = statusConfig[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.015 }}
      className="relative flex flex-col gap-2 p-3 rounded-xl border border-fuchsia-900/40 bg-gray-950/60
        hover:border-fuchsia-400/60 hover:shadow-[0_0_16px_rgba(232,121,249,0.2)]
        transition-all duration-300 backdrop-blur-sm"
    >
      {/* Project header */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-mono font-bold text-sm text-cyan-100 leading-tight">
          {project.title}
        </h3>
        <span className={`shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded border ${status.color}`}>
          {status.label}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 font-mono leading-relaxed line-clamp-2">
        {project.description}
      </p>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-1">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-cyan-950/60 text-cyan-500 border border-cyan-900/50"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* XP indicator */}
      <div className="flex items-center justify-end gap-1 mt-1">
        <span className="text-[10px] font-mono text-fuchsia-400">
          +{project.xp.toLocaleString()} XP
        </span>
      </div>
    </motion.div>
  );
}

export function LevelProgressSection() {
  const progress = useLevelProgress();
  const pct = Math.round((progress.currentXP / progress.nextLevelXP) * 100);

  return (
    <NeonCard glowColor="green" className="flex flex-col gap-4">
      <div className="border-b border-green-900/50 pb-3">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-green-500">
          ▸ Level Progress
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ boxShadow: ["0 0 10px #4ade80", "0 0 30px #4ade80", "0 0 10px #4ade80"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-14 h-14 rounded-xl border-2 border-green-400 bg-green-950/50 flex items-center justify-center"
          >
            <span className="font-mono font-black text-green-400 text-xl">
              {progress.currentLevel}
            </span>
          </motion.div>
          <div>
            <p className="text-xs text-gray-500 font-mono uppercase">Current Level</p>
            <p className="text-sm font-mono font-bold text-green-100">
              {progress.currentXP.toLocaleString()} / {progress.nextLevelXP.toLocaleString()} XP
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-600 font-mono">Total XP</p>
          <p className="text-sm font-mono font-bold text-fuchsia-400">
            {progress.totalXP.toLocaleString()}
          </p>
        </div>
      </div>
      <NeonProgressBar label="XP to next level" value={pct} color="green" delay={0.3} />
    </NeonCard>
  );
}

export function FeaturedProjects() {
  const { projects, loading } = useProjects();
  const featured = projects.filter((p) => p.featured);

  return (
    <NeonCard glowColor="fuchsia" className="flex flex-col gap-4 h-full">
      <div className="border-b border-fuchsia-900/50 pb-3">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-fuchsia-500">
          ▸ Featured Projects
        </span>
      </div>
      {loading ? (
        <div className="text-xs font-mono text-gray-600 animate-pulse">Loading...</div>
      ) : (
        <div className="flex flex-col gap-3 overflow-y-auto px-2 flex-1 custom-scrollbar min-h-0">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      )}
    </NeonCard>
  );
}

// Re-export the old ProjectList for backwards compat
export { FeaturedProjects as ProjectList };
