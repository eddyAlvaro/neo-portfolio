import type { Achievement } from "../domain";

export const achievementsData: Achievement[] = [
  {
    id: "tecsup-grad",
    title: "Software Integration Degree",
    description: "Successfully completed the Software Design and Systems Integration program at TECSUP.",
    icon: "📜",
    rarity: "common",
    unlockedAt: "2020-12-01",
    unlocked: true,
  },
  {
    id: "pango-mission",
    title: "First Professional Mission",
    description: "Started first major Full-Stack role at Pango / Mr. Misti, mastering production environments.",
    icon: "💼",
    rarity: "common",
    unlockedAt: "2023-02-01",
    unlocked: true,
  },
  {
    id: "three-year-vet",
    title: "3-Year Veteran",
    description: "Surpassed the 3-year mark as a Full-Stack Developer building complex web applications.",
    icon: "🎖️",
    rarity: "rare",
    unlockedAt: "2026-01-01",
    unlocked: true,
  },
  {
    id: "bettercommerce-hire",
    title: "BetterCommerce Recruit",
    description: "Joined BetterCommerce to lead full-stack support and AI-driven implementation for global brands.",
    icon: "🏢",
    rarity: "rare",
    unlockedAt: "2025-10-01",
    unlocked: true,
  },
  {
    id: "upc-engineering",
    title: "Systems Sage in Training",
    description: "Officially enrolled in Systems Engineering at UPC to reach the next tier of software architecture.",
    icon: "🧠",
    rarity: "epic",
    unlockedAt: "2025-09-01",
    unlocked: true,
  },
  {
    id: "international-refactor",
    title: "Multi-Region Architect",
    description: "Successfully deployed the international coupon engine for PE, CL, and CO markets.",
    icon: "🌐",
    rarity: "epic",
    unlockedAt: "2026-04-10",
    unlocked: true,
  }
];