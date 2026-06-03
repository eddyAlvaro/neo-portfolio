"use client";

import { memo, useState } from "react";
import Image from "next/image";
import { m, LazyMotion, domAnimation, AnimatePresence, useReducedMotion } from "framer-motion";
import { NeonProgressBar } from "@/shared/components/ui/neon";
import type { Skill } from "../../domain";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const colorBorder = {
  cyan: "border-neon-cyan/40 hover:border-neon-cyan/80 dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]",
  fuchsia: "border-neon-fuchsia/40 hover:border-neon-fuchsia/80 dark:hover:shadow-[0_0_20px_rgba(232,121,249,0.35)]",
  green: "border-neon-green/40 hover:border-neon-green/80 dark:hover:shadow-[0_0_20px_rgba(74,222,128,0.35)]",
  yellow: "border-neon-yellow/40 hover:border-neon-yellow/80 dark:hover:shadow-[0_0_20px_rgba(250,204,21,0.35)]",
};

const colorText = {
  cyan: "text-neon-cyan",
  fuchsia: "text-neon-fuchsia",
  green: "text-neon-green",
  yellow: "text-neon-yellow",
};

export const SkillCard = memo(function SkillCard({ skill, index }: SkillCardProps) {
  const [hovered, setHovered] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
    <m.div
      initial={prefersReduced ? false : { opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      style={{ willChange: "transform" }}
      className={`relative w-20 h-20 aspect-square lg:w-full lg:h-full lg:aspect-auto transition-all ${hovered ? "z-30" : "z-0"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`Skill: ${skill.name}, level ${skill.level}`}
    >
      {/* Skill tile */}
      <div
        className={`
          relative flex flex-col items-center justify-center gap-1.5 p-1 rounded-xl
          border bg-surface/70 backdrop-blur-sm
          cursor-pointer transition-all duration-300
          w-full h-full
          ${colorBorder[skill.color as keyof typeof colorBorder]}
        `}
      >
        <div className="w-[50%] aspect-square flex items-center justify-center">
          {skill.icon.startsWith("/") ? (
            <div className="relative w-full h-full">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                sizes="(max-width: 768px) 80px, 120px"
                className="object-contain"
              />
            </div>
          ) : (
            <span className="text-xl md:text-2xl leading-none" role="img" aria-hidden>
              {skill.icon}
            </span>
          )}
        </div>
        <span className={`text-[10px] md:text-xs font-mono font-bold tracking-wide text-center leading-tight px-1 ${colorText[skill.color as keyof typeof colorText]}`}>
          {skill.name}
        </span>
      </div>

      {/* Tooltip */}
      <AnimatePresence mode="wait">
        {hovered && (
          <m.div
            initial={prefersReduced ? false : { opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            style={{ willChange: "transform, opacity" }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 pointer-events-none"
          >
            <div className="bg-surface/95 border border-neon-cyan/60 rounded-xl p-3 dark:shadow-[0_0_20px_rgba(34,211,238,0.3)] backdrop-blur-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  {skill.icon.startsWith("/") ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        sizes="24px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <span className="text-lg">{skill.icon}</span>
                  )}
                </div>
                <div>
                  <p className="font-mono font-bold text-sm text-text">{skill.name}</p>
                  <p className="text-xs font-mono text-muted uppercase">{skill.category}</p>
                </div>
              </div>
              <p className="text-xs text-muted font-mono leading-relaxed mb-2">
                {skill.description}
              </p>
              <NeonProgressBar
                label="Mastery"
                value={skill.mastery}
                color={skill.color}
                delay={0}
              />
              {/* Triangle */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-surface border-r border-b border-neon-cyan/60 rotate-45" />
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
    </LazyMotion>
  );
});
