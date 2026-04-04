// src/features/profile/domain/entities/profile.ts

export interface Stat {
  label: string;
  value: number; // 0–100
  color: "cyan" | "fuchsia" | "green" | "yellow";
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  level: number;
  class: string;
  about: string;
  stats: Stat[];
}
