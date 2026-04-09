"use client";

import { useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ProjectImageModal } from "@/shared/components/ui/neon/ProjectImageModal";
import { Project } from "@/features/projects/domain";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectImageVisorProps {
  project: Project;
}

// ─── Main Component ───────────────────────────────────────────────────────────

const imageVariantsFull: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
};

const imageVariantsReduced: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1 },
};

export function ProjectImageVisor({ project }: ProjectImageVisorProps) {
  const prefersReduced = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);

  const imageVariants = prefersReduced ? imageVariantsReduced : imageVariantsFull;

  return (
    <>
      <m.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        onClick={() => setIsOpen(true)}
        className="
          relative w-full md:w-44 md:min-w-44 shrink-0 aspect-video md:aspect-square
          rounded-lg overflow-hidden group/visor
          border border-cyan-900/50
          shadow-[0_0_14px_rgba(34,211,238,0.15)]
          transition-all duration-300
          hover:shadow-[0_0_28px_rgba(34,211,238,0.45)] hover:border-cyan-400/80
          cursor-pointer
        "
        style={{ willChange: "transform" }}
      >
        {/* ── Corner visor brackets (Subtle focus indicator) ────────────────── */}
        <span className="pointer-events-none absolute inset-0 z-20">
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 rounded-tl group-hover/visor:w-5 group-hover/visor:h-5 group-hover/visor:shadow-[0_0_8px_rgba(34,211,238,0.7)] transition-all duration-300" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-fuchsia-400 rounded-tr group-hover/visor:w-5 group-hover/visor:h-5 group-hover/visor:shadow-[0_0_8px_rgba(232,121,249,0.7)] transition-all duration-300" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-fuchsia-400 rounded-bl group-hover/visor:w-5 group-hover/visor:h-5 group-hover/visor:shadow-[0_0_8px_rgba(232,121,249,0.7)] transition-all duration-300" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400 rounded-br group-hover/visor:w-5 group-hover/visor:h-5 group-hover/visor:shadow-[0_0_8px_rgba(34,211,238,0.7)] transition-all duration-300" />
        </span>

        {/* ── Neon hover rim brightness ─────────────────────────────────────── */}
        {!prefersReduced && (
          <span
            className="absolute inset-0 z-10 rounded-lg pointer-events-none opacity-0 group-hover/visor:opacity-100 transition-opacity duration-300"
            style={{ boxShadow: "inset 0 0 0 1px rgba(34,211,238,0.4), inset 0 0 12px rgba(34,211,238,0.2)" }}
          />
        )}

        {/* ── Image (Clean view with subtle scale & Shared Layout Transition) ─ */}
        {project.image ? (
          <m.img
            layoutId={prefersReduced ? undefined : `project-image-${project.id}`}
            src={project.image}
            alt={`${project.title} preview`}
            variants={imageVariants}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full object-cover"
            style={{ willChange: "transform" }}
          />
        ) : (
          <m.div
            layoutId={prefersReduced ? undefined : `project-image-${project.id}`}
            variants={imageVariants}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full bg-gray-950/80 flex flex-col items-center justify-center gap-2 will-change-transform"
          >
            <span className="font-mono text-[22px] opacity-30 group-hover/visor:opacity-80 group-hover/visor:text-cyan-400 transition-all duration-300">
              ◈
            </span>
          </m.div>
        )}
      </m.div>

      {/* ── Full Screen Modal Component ───────────────────────────────────── */}
      <ProjectImageModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        project={project}
      />
    </>
  );
}
