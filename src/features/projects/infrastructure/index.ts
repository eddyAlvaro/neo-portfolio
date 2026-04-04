import type { Project, LevelProgress } from "../domain";

export const projectsData: Project[] = [
  {
    id: "neo-portfolio",
    title: "Neo Portfolio",
    description: "Cyberpunk RPG-themed developer portfolio built with Next.js App Router, Clean Architecture and Framer Motion.",
    image: "",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    xp: 1800,
    featured: true,
    status: "in-progress",
  },
  {
    id: "folio-builder",
    title: "Folio Builder",
    description: "Drag-and-drop portfolio builder with real-time preview, custom themes and cloud storage.",
    image: "",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    xp: 2400,
    featured: true,
    status: "shipped",
  },
  {
    id: "collab-hub",
    title: "CollabHub",
    description: "Real-time collaboration platform with WebSocket channels, shared cursors and version history.",
    image: "",
    techStack: ["Next.js", "Socket.io", "Redis", "Docker"],
    xp: 3200,
    featured: true,
    status: "shipped",
  },
  {
    id: "ai-terminal",
    title: "AI Terminal",
    description: "Browser-based AI-powered terminal with local LLM integration and custom command scripting.",
    image: "",
    techStack: ["Python", "FastAPI", "Ollama", "React"],
    xp: 2100,
    featured: false,
    status: "in-progress",
  },
];

export const levelProgressData: LevelProgress = {
  currentLevel: 42,
  currentXP: 9500,
  nextLevelXP: 12000,
  totalXP: 156800,
};
