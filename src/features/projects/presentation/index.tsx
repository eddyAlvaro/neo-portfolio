"use client";

import {
  m,
  LazyMotion,
  domAnimation,
  AnimatePresence,
} from "framer-motion";
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
export { LevelProgressSection } from "./components";
