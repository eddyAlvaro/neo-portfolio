import type { LogEntry } from "../domain";

export const logData: LogEntry[] = [
  {
    id: "log-006",
    date: "2026-03-29",
    title: "Initialized Neo Portfolio",
    body: "Bootstrapped the bento-grid cyberpunk RPG portfolio with Next.js 16, Clean Architecture and full-featured neon UI system.",
    tag: "BUILD",
    color: "cyan",
  },
  {
    id: "log-005",
    date: "2026-02-14",
    title: "Shipped CollabHub v2.0",
    body: "Major release with real-time collaboration, shared cursors, and offline mode. Performance improved by 40%.",
    tag: "SHIP",
    color: "green",
  },
  {
    id: "log-004",
    date: "2025-11-30",
    title: "Integrated Local LLM",
    body: "Embedded Ollama into development workflow. Built custom AI terminal for code generation and review assistance.",
    tag: "RESEARCH",
    color: "fuchsia",
  },
  {
    id: "log-003",
    date: "2025-08-20",
    title: "Mastered Clean Architecture",
    body: "Deep-dived into DDD, Clean Architecture and Vertical Slices. Refactored three production systems to follow these principles.",
    tag: "STUDY",
    color: "yellow",
  },
  {
    id: "log-002",
    date: "2025-04-10",
    title: "100k Users Milestone",
    body: "Platform surpassed 100k active users. Scaled backend to handle 5k concurrent connections using Redis caching.",
    tag: "MILESTONE",
    color: "green",
  },
];
