"use client";
import { skillsData } from "../infrastructure";
import type { Skill } from "../domain";

export function useSkills(): Skill[] {
  return skillsData;
}
