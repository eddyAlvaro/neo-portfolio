// src/features/skills/domain/entities/skill.ts

export interface Skill {
  id: string;
  name: string;
  icon: string; // SVG path or emoji
  level: number; // 1–5
  mastery: number; // 0–100
  category: "frontend" | "backend" | "devops" | "tools";
  color: "cyan" | "fuchsia" | "green" | "yellow";
  description: string;
}
