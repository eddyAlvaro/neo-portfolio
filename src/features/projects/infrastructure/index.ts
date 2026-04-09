import { LocalProjectRepository } from "./repositories/local-project-repository";
import { levelProgressMock } from "./data/mock-projects";

// Singleton instance for the repository
export const projectRepository = new LocalProjectRepository();

// Level progress is currently static/local state
export const levelProgressData = levelProgressMock;
