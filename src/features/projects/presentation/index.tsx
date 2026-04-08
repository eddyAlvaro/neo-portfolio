"use client";

import { useState } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  NeonCard,
  NeonProgressBar,
  QuestActionButton,
  NeonSliderProgress,
} from "@/shared/components/ui/neon";
import { useProjects, useLevelProgress } from "../application/use-projects";
import { useQuestSlider } from "../application/use-quest-slider";
import type { Project } from "../domain";
import { ProjectImageVisor } from "@/features/projects/presentation/ProjectDataVisor";

// ─── Constants ───────────────────────────────────────────────────────────────

const statusConfig = {
  shipped: { label: "SHIPPED", color: "text-green-400 border-green-500/40 bg-green-950/30" },
  "in-progress": {
    label: "IN PROGRESS",
    color: "text-yellow-400 border-yellow-500/40 bg-yellow-950/30",
  },
  archived: { label: "ARCHIVED", color: "text-gray-500 border-gray-700 bg-gray-900/30" },
};

// Slide variants — fade + subtle scale, GPU-only (opacity + transform)
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

// ─── Sub-components ──────────────────────────────────────────────────────────

function DifficultyStars({ value }: { value: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <span className="font-mono text-[11px]" aria-label={`Difficulty: ${value} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < value ? "text-yellow-400" : "text-gray-700"}>
          ★
        </span>
      ))}
    </span>
  );
}

function TechnicalLog({ project, isOpen }: { project: Project; isOpen: boolean }) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <m.div
          key="devlog"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div className="mt-3 pt-3 border-t border-fuchsia-900/30 flex flex-col gap-3">
            <div>
              <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-fuchsia-500 mb-1">
                ⚡ The Challenge
              </p>
              <p className="text-[11px] font-mono text-gray-400 leading-relaxed">
                {project.devLog.challenge}
              </p>
            </div>
            <div>
              <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-cyan-500 mb-1">
                ◈ The Solution
              </p>
              <p className="text-[11px] font-mono text-gray-400 leading-relaxed">
                {project.devLog.solution}
              </p>
            </div>
            <div>
              <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-green-500 mb-1">
                ⬡ Architecture
              </p>
              <div className="rounded-md border border-green-900/40 bg-black/40 px-3 py-2">
                <p className="text-[10px] font-mono text-green-300/80 leading-relaxed whitespace-pre-wrap">
                  {project.devLog.architectureSnippet}
                </p>
              </div>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

// ─── Quest Card (Slider Slide) ───────────────────────────────────────────────

function ProjectCard({
  project,
  direction,
}: {
  project: Project;
  direction: 1 | -1;
}) {
  const [devlogOpen, setDevlogOpen] = useState(false);
  const prefersReduced = useReducedMotion();
  const status = statusConfig[project.status];

  return (
    <m.article
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
            <h3 className="font-mono font-bold text-sm text-cyan-100 leading-tight">
              {project.title}
            </h3>
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
        </div>
      </div>

      {/* Loot System */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-gray-600">
          ◈ Loot
        </span>
        <div className="flex flex-wrap gap-1.5">
          {project.loot.primary.map((tech) => (
            <span
              key={`p-${tech}`}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-cyan-950/70 text-cyan-300 border border-cyan-700/60 shadow-[0_0_8px_rgba(34,211,238,0.3)]"
            >
              {tech}
            </span>
          ))}
          {project.loot.secondary.map((tech) => (
            <span
              key={`s-${tech}`}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-gray-900/50 text-gray-600 border border-gray-800/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

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
    </m.article>
  );
}

// ─── Nav Arrow Button ────────────────────────────────────────────────────────

function SliderArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <m.button
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.15 }}
      aria-label={direction === "prev" ? "Previous project" : "Next project"}
      className="
        absolute top-1/2 -translate-y-1/2 z-20
        w-7 h-7 flex items-center justify-center
        rounded-md border border-fuchsia-500/50 bg-gray-950/80 backdrop-blur-sm
        text-fuchsia-400 font-mono text-xs
        hover:border-fuchsia-400 hover:bg-fuchsia-900/20
        hover:shadow-[0_0_14px_rgba(232,121,249,0.5)]
        transition-colors duration-200 cursor-pointer
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400
      "
      style={{
        [direction === "prev" ? "left" : "right"]: "-0.875rem",
        willChange: "transform",
      }}
    >
      {direction === "prev" ? "‹" : "›"}
    </m.button>
  );
}

// ─── Level Progress Section ──────────────────────────────────────────────────

export function LevelProgressSection() {
  const progress = useLevelProgress();
  const pct = Math.round((progress.currentXP / progress.nextLevelXP) * 100);
  const prefersReduced = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <NeonCard glowColor="green" className="flex flex-col gap-4">
        <div className="border-b border-green-900/50 pb-3">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-green-500">
            ▸ Level Progress
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <m.div
              animate={prefersReduced ? {} : { opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ willChange: "opacity" }}
              className="w-14 h-14 rounded-xl border-2 border-green-400 bg-green-950/50 shadow-[0_0_14px_rgba(74,222,128,0.5)] flex items-center justify-center"
            >
              <span className="font-mono font-black text-green-400 text-xl">
                {progress.currentLevel}
              </span>
            </m.div>
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
    </LazyMotion>
  );
}

// ─── Featured Projects — Quest Slider ────────────────────────────────────────

export function FeaturedProjects() {
  const { projects, loading } = useProjects();
  const featured = projects.filter((p) => p.featured);

  const { activeIndex, direction, isPaused, progress, goNext, goPrev, goTo, pauseHandlers, dragHandlers } =
    useQuestSlider({ total: featured.length });

  const activeProject = featured[activeIndex];

  return (
    <LazyMotion features={domAnimation}>
      <NeonCard glowColor="fuchsia" className="flex flex-col gap-4 h-full" hover={false}>
        {/* Header */}
        <div className="border-b border-fuchsia-900/50 pb-3 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-fuchsia-500">
            ▸ Quest Log — Featured Projects
          </span>
          {/* Index counter */}
          {!loading && featured.length > 0 && (
            <span className="text-[10px] font-mono text-gray-600">
              {String(activeIndex + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
            </span>
          )}
        </div>

        {loading ? (
          <div className="text-xs font-mono text-gray-600 animate-pulse">Initializing quests...</div>
        ) : featured.length === 0 ? (
          <div className="text-xs font-mono text-gray-600">No quests found.</div>
        ) : (
          <>
            {/* ── Slider Stage ─────────────────────────────────────────── */}
            <div
              className="relative flex-1 min-h-0 group/slider"
              {...pauseHandlers}
              onPointerDown={dragHandlers.onDragStart}
              onPointerUp={dragHandlers.onDragEnd}
              style={{ touchAction: "pan-y" }}
            >
              {/* Fixed-height slide wrapper — prevents CLS */}
              <div className="relative overflow-hidden rounded-xl" style={{ minHeight: "22rem" }}>
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  {activeProject && (
                    <ProjectCard
                      key={activeProject.id}
                      project={activeProject}
                      direction={direction}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Nav Arrows — appear on group hover (desktop) */}
              <AnimatePresence>
                {featured.length > 1 && (
                  <>
                    <m.div
                      key="prev-arrow"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="group-hover/slider:opacity-100 transition-opacity duration-200"
                    >
                      <SliderArrow direction="prev" onClick={goPrev} />
                    </m.div>
                    <m.div
                      key="next-arrow"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0 }}
                      className="group-hover/slider:opacity-100 transition-opacity duration-200"
                    >
                      <SliderArrow direction="next" onClick={goNext} />
                    </m.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* ── Controls Row ─────────────────────────────────────────── */}
            {featured.length > 1 && (
              <div className="flex flex-col gap-2">
                {/* Dot navigation */}
                <div className="flex items-center justify-center gap-2">
                  {featured.map((p, i) => (
                    <button
                      key={p.id}
                      onClick={() => goTo(i)}
                      aria-label={`Go to quest ${i + 1}: ${p.title}`}
                      aria-current={i === activeIndex ? "true" : undefined}
                      className={`
                        rounded-full transition-all duration-300 cursor-pointer
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400
                        ${
                          i === activeIndex
                            ? "w-4 h-1.5 bg-fuchsia-400 shadow-[0_0_8px_rgba(232,121,249,0.7)]"
                            : "w-1.5 h-1.5 bg-gray-700 hover:bg-gray-500"
                        }
                      `}
                    />
                  ))}
                </div>

                {/* Neon progress bar */}
                <NeonSliderProgress value={progress} isPaused={isPaused} />
              </div>
            )}
          </>
        )}
      </NeonCard>
    </LazyMotion>
  );
}

// Re-export for backwards compatibility
export { FeaturedProjects as ProjectList };
