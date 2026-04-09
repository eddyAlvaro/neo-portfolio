// src/features/projects/domain/entities/project.ts

export type ProjectDifficulty = 1 | 2 | 3 | 4 | 5;
export type ProjectRole = "Lead Developer" | "Solo Dev" | "Frontend Lead" | "Full-Stack" | "OSS Contributor" | "Systems Maintainer";
export type ProjectArchitecture =
  | "Clean Architecture"
  | "Clean Hexagonal"
  | "MVC"
  | "MVC (Service Oriented)"
  | "Micro-frontend"
  | "Event-Driven"
  | "Plugin System";

export interface TechLoot {
  /** Primary stack — rendered with full neon glow */
  primary: string[];
  /** Supporting stack — rendered with ghost/muted style */
  secondary: string[];
}

export interface DevLog {
  challenge: string;
  solution: string;
  architectureSnippet: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Path or URL to preview image/GIF */
  image: string;
  /** Legacy flat tech stack (kept for backwards compat) */
  techStack: string[];
  xp: number;
  featured: boolean;
  status: "shipped" | "in-progress" | "archived";
  // ── Quest metadata ──────────────────────────────
  difficulty: ProjectDifficulty;
  role: ProjectRole;
  architecture: ProjectArchitecture;
  loot: TechLoot;
  devLog: DevLog;
  githubUrl?: string;
  demoUrl?: string;
  liveDisclaimer?: string;
}

export interface LevelProgress {
  currentLevel: number;
  currentXP: number;
  nextLevelXP: number;
  totalXP: number;
}

export interface ProjectRepository {
  getProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | null>;
}
