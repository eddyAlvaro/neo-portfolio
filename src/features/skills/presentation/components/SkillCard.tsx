"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NeonProgressBar } from "@/shared/components/ui/neon";
import type { Skill } from "../../domain";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const colorBorder = {
  cyan: "border-cyan-500/40 hover:border-cyan-400/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]",
  fuchsia: "border-fuchsia-500/40 hover:border-fuchsia-400/80 hover:shadow-[0_0_20px_rgba(232,121,249,0.35)]",
  green: "border-green-500/40 hover:border-green-400/80 hover:shadow-[0_0_20px_rgba(74,222,128,0.35)]",
  yellow: "border-yellow-500/40 hover:border-yellow-400/80 hover:shadow-[0_0_20px_rgba(250,204,21,0.35)]",
};

const colorText = {
  cyan: "text-cyan-400",
  fuchsia: "text-fuchsia-400",
  green: "text-green-400",
  yellow: "text-yellow-400",
};

export function SkillCard({ skill, index }: SkillCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
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
          border bg-gray-950/70 backdrop-blur-sm
          cursor-pointer transition-all duration-300
          w-full h-full
          ${colorBorder[skill.color as keyof typeof colorBorder]}
        `}
      >
        <div className="w-[50%] aspect-square flex items-center justify-center">
          {skill.icon.startsWith("/") ? (
            <div className="relative w-full h-full">
              <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
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
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 pointer-events-none"
          >
            <div className="bg-gray-950/95 border border-cyan-500/60 rounded-xl p-3 shadow-[0_0_20px_rgba(34,211,238,0.3)] backdrop-blur-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  {skill.icon.startsWith("/") ? (
                    <div className="relative w-full h-full">
                      <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
                    </div>
                  ) : (
                    <span className="text-lg">{skill.icon}</span>
                  )}
                </div>
                <div>
                  <p className="font-mono font-bold text-sm text-cyan-100">{skill.name}</p>
                  <p className="text-xs font-mono text-gray-500 uppercase">{skill.category}</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 font-mono leading-relaxed mb-2">
                {skill.description}
              </p>
              <NeonProgressBar
                label="Mastery"
                value={skill.mastery}
                color={skill.color}
                delay={0}
              />
              {/* Triangle */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-950 border-r border-b border-cyan-500/60 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
