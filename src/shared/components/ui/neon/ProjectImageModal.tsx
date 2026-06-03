"use client";

import { useEffect } from "react";
import Image from "next/image";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { createPortal } from "react-dom";
import type { Project } from "@/features/projects/domain";

interface ProjectImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export function ProjectImageModal({ isOpen, onClose, project }: ProjectImageModalProps) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (typeof window === "undefined") return null;

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <m.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-base/80 backdrop-blur-md p-4 md:p-8"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={bgVariants}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          style={{ willChange: "opacity" }}
        >
          <m.button
            className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 flex items-center justify-center text-neon-cyan font-mono text-xl border border-neon-cyan/50 rounded-full bg-surface/80 hover:bg-neon-cyan/20 hover:text-text dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all z-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ willChange: "transform" }}
            aria-label="Cerrar imagen"
          >
            ×
          </m.button>

          {project.image ? (
            <m.div
              layoutId={prefersReduced ? undefined : `project-image-${project.id}`}
              className="relative max-w-full max-h-full rounded-lg dark:shadow-[0_0_30px_rgba(34,211,238,0.3)] border border-neon-cyan/30 overflow-hidden"
              style={{ willChange: "transform", width: "min(90vw, 900px)", aspectRatio: "16/9" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.image}
                alt={`${project.title} full view`}
                fill
                sizes="min(90vw, 900px)"
                className="object-contain"
              />
            </m.div>
          ) : (
            <m.div
              layoutId={prefersReduced ? undefined : `project-image-${project.id}`}
              className="w-full max-w-2xl aspect-video bg-surface/80 flex flex-col items-center justify-center rounded-lg dark:shadow-[0_0_30px_rgba(34,211,238,0.3)] border border-neon-cyan/30"
              onClick={(e) => e.stopPropagation()}
              style={{ willChange: "transform" }}
            >
              <span className="font-mono text-[40px] opacity-80 text-neon-cyan">◈</span>
              <span className="font-mono text-sm text-muted uppercase tracking-widest mt-4">
                No Preview
              </span>
            </m.div>
          )}
        </m.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
