import type { Project, ProjectRepository } from "../../domain";
import { projectsMocks } from "../data/mock-projects";

export class LocalProjectRepository implements ProjectRepository {
  async getProjects(): Promise<Project[]> {
    return projectsMocks;
  }

  async getProjectById(id: string): Promise<Project | null> {
    const project = projectsMocks.find((p) => p.id === id);
    return project || null;
  }
}
