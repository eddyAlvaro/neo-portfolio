"use client";
import { useState, useEffect } from "react";
import { projectsData, levelProgressData } from "../infrastructure";
import type { Project, LevelProgress } from "../domain";

export function useProjects(): { projects: Project[]; loading: boolean; error: string | null } {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setProjects(projectsData);
    } catch {
      setError("Failed to load projects");
    } finally {
      setLoading(false);
    }
  }, []);

  return { projects, loading, error };
}

export function useLevelProgress(): LevelProgress {
  return levelProgressData;
}
