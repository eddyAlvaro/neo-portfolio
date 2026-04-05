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
    featured: false,
    status: "shipped",
  },
  {
    id: "collab-hub",
    title: "CollabHub",
    description: "Real-time collaboration platform with WebSocket channels, shared cursors and version history.",
    image: "",
    techStack: ["Next.js", "Socket.io", "Redis", "Docker"],
    xp: 3200,
    featured: false,
    status: "shipped",
  },
  {
    id: "webpify",
    title: "Webpify",
    description: "Webpify is a vscode extension that allows you to convert images to webp format.",
    image: "",
    techStack: ["TypeScript", "VSCode API"],
    xp: 1000,
    featured: true,
    status: "in-progress",
  },
  {
    id: "gym-ux",
    title: "GymU",
    description: "GymU is a mobile application that allows you to track your workouts and progress.",
    image: "",
    techStack: ["Flutter", "Dart"],
    xp: 1800,
    featured: true,
    status: "in-progress",
  }
];

export const levelProgressData: LevelProgress = {
  currentLevel: 42,
  currentXP: 9500,
  nextLevelXP: 12000,
  totalXP: 156800,
};
