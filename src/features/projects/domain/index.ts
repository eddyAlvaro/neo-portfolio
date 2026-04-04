// src/features/projects/domain/entities/project.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  xp: number;
  featured: boolean;
  status: "shipped" | "in-progress" | "archived";
  link?: string;
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
