"use client";

import { useEffect } from "react";
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

  // Bloquear scroll cuando el modal está abierto
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

  // Cerrar con Escape
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
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={bgVariants}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          style={{ willChange: "opacity" }}
        >
          {/* Botón Cerrar */}
          <m.button
            className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 flex items-center justify-center text-cyan-400 font-mono text-xl border border-cyan-500/50 rounded-full bg-gray-950/80 hover:bg-cyan-900/40 hover:text-cyan-100 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all z-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
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

          {/* Imagen Expandida (Shared Element) */}
          {project.image ? (
            <m.img
              layoutId={prefersReduced ? undefined : `project-image-${project.id}`}
              src={project.image}
              alt={`${project.title} full view`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_30px_rgba(34,211,238,0.3)] border border-cyan-900/50"
              onClick={(e) => e.stopPropagation()} // Prevenir cierre al hacer click en la imagen
              style={{ willChange: "transform" }}
            />
          ) : (
            <m.div
              layoutId={prefersReduced ? undefined : `project-image-${project.id}`}
              className="w-full max-w-2xl aspect-video bg-gray-950/80 flex flex-col items-center justify-center rounded-lg shadow-[0_0_30px_rgba(34,211,238,0.3)] border border-cyan-900/50"
              onClick={(e) => e.stopPropagation()}
              style={{ willChange: "transform" }}
            >
              <span className="font-mono text-[40px] opacity-80 text-cyan-400">◈</span>
              <span className="font-mono text-sm text-gray-400 uppercase tracking-widest mt-4">
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
