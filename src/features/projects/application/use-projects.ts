"use client";

import { useState, useEffect } from "react";
import { projectRepository, levelProgressData } from "../infrastructure";
import type { Project, LevelProgress } from "../domain";

export function useProjects(): { projects: Project[]; loading: boolean; error: string | null } {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchProjects() {
      try {
        const data = await projectRepository.getProjects();
        if (isMounted) setProjects(data);
      } catch (err) {
        if (isMounted) setError("Failed to load projects from terminal.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return { projects, loading, error };
}

export function useLevelProgress(): LevelProgress {
  return levelProgressData;
}
