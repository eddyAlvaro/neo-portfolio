"use client";
import { achievementsData } from "../infrastructure";
import type { Achievement } from "../domain";

export function useAchievements(): Achievement[] {
  return achievementsData;
}
