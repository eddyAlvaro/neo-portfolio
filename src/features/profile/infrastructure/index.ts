// src/features/profile/infrastructure/profile-data.ts
import type { Profile } from "../domain";

export const profileData: Profile = {
  name: "DEV_HANDLE",
  title: "Full-Stack Engineer",
  tagline: "// crafting digital experiences",
  level: 42,
  class: "FULL-STACK",
  about:
    "Passionate full-stack developer with a focus on clean architecture, performant UIs, and scalable backend systems. I turn complex problems into elegant solutions.",
  stats: [
    { label: "Strength (Backend)", value: 70, color: "cyan" },
    { label: "Intelligence (Architecture)", value: 80, color: "fuchsia" },
    { label: "Dexterity (Frontend)", value: 80, color: "green" },
    { label: "Charisma (Collaboration)", value: 75, color: "yellow" },
    { label: "Wisdom (Problem Solving)", value: 85, color: "cyan" },
  ],
};
