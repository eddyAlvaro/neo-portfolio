// src/features/profile/application/use-profile.ts
"use client";
import { profileData } from "../infrastructure";
import type { Profile } from "../domain";

export function useProfile(): Profile {
  return profileData;
}
