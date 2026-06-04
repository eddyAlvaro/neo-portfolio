"use client";

import { AnimatePresence } from "framer-motion";
import {
  NeonCard,
  NeonSliderProgress,
} from "@/shared/components/ui/neon";
import { useProjects } from "../application/use-projects";
import { useQuestSlider } from "../application/use-quest-slider";
import { ProjectCard, SliderArrow } from "./components";

/**
 * FeaturedProjects — Main Quest Slider component.
 * Orchestrates the project visibility and slider logic.
 */
export function FeaturedProjects() {
  const { projects, loading } = useProjects();
  const featured = projects.filter((p) => p.featured);

  const { 
    activeIndex, 
    direction, 
    isPaused, 
    progress, 
    goNext, 
    goPrev, 
    goTo, 
    pauseHandlers, 
    dragHandlers 
  } = useQuestSlider({ total: featured.length });

  const activeProject = featured[activeIndex];

  return (
    <NeonCard glowColor="fuchsia" className="flex flex-col gap-4 h-full" hover={false}>
        {/* Header */}
        <div className="border-b border-neon-fuchsia/20 pb-3 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon-fuchsia">
            ▸ Quest Log — Featured Projects
          </span>
          {!loading && featured.length > 0 && (
            <span className="text-[10px] font-mono text-subtle">
              {String(activeIndex + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
            </span>
          )}
        </div>

        {loading ? (
          <div className="text-xs font-mono text-subtle animate-pulse">Initializing quests...</div>
        ) : featured.length === 0 ? (
          <div className="text-xs font-mono text-subtle">No quests found.</div>
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
              {/* Slider stage wrapper — allows tooltips to overflow */}
              <div className="relative rounded-xl" style={{ minHeight: "22rem" }}>
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

            </div>

            {/* ── Controls Row ─────────────────────────────────────────── */}
            {featured.length > 1 && (
              <div className="flex flex-col gap-2">
                {/* Arrows + dot navigation */}
                <div className="flex items-center gap-2">
                  <SliderArrow direction="prev" onClick={goPrev} />
                  <div className="flex items-center justify-center gap-2 flex-1">
                    {featured.map((p, i) => (
                      <button
                        key={p.id}
                        onClick={() => goTo(i)}
                        aria-label={`Go to quest ${i + 1}: ${p.title}`}
                        aria-current={i === activeIndex ? "true" : undefined}
                        className={`
                          rounded-full transition-all duration-300 cursor-pointer
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-fuchsia
                          ${
                            i === activeIndex
                              ? "w-4 h-1.5 bg-neon-fuchsia dark:shadow-[0_0_8px_rgba(232,121,249,0.7)]"
                              : "w-1.5 h-1.5 bg-line/20 hover:bg-line/40"
                          }
                        `}
                      />
                    ))}
                  </div>
                  <SliderArrow direction="next" onClick={goNext} />
                </div>

                {/* Neon progress bar */}
                <NeonSliderProgress value={progress} isPaused={isPaused} />
              </div>
            )}
          </>
        )}
      </NeonCard>
  );
}

// Re-export for backwards compatibility
export { FeaturedProjects as ProjectList };
export { LevelProgressSection } from "./components";
