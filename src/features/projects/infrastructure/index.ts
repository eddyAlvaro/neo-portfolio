import type { Project, LevelProgress } from "../domain";

export const projectsData: Project[] = [
  {
    id: "neo-portfolio",
    title: "Neo Portfolio",
    description:
      "Cyberpunk RPG-themed developer portfolio built with Next.js App Router, Clean Architecture and Framer Motion. A living system that tells a technical story.",
    image: "/projects/neo-portfolio.min.webp",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    xp: 1800,
    featured: true,
    status: "in-progress",
    difficulty: 4,
    role: "Solo Dev",
    architecture: "Clean Architecture",
    loot: {
      primary: ["Next.js", "TypeScript", "Framer Motion"],
      secondary: ["Tailwind CSS", "Vercel", "ESLint"],
    },
    devLog: {
      challenge:
        "Designing a portfolio that stands out from generic templates while maintaining real architectural discipline — not just style over substance.",
      solution:
        "Applied Clean Architecture (domain → application → infrastructure → presentation) to every feature. Each section is a self-contained 'feature module' with its own domain entities, use-cases and UI.",
      architectureSnippet:
        "Domain entities define the shape of data. Application hooks orchestrate use-cases. Infrastructure provides static data (soon: CMS). Presentation consumes via hooks — zero direct coupling.",
    },
    githubUrl: "https://github.com/eddyAlvaro/neo-portfolio",
  },
  {
    id: "webpify",
    title: "WebPify",
    description: "Powerful VS Code extension for bulk image optimization and WebP conversion, featuring automatic workspace-wide reference refactoring.",
    image: "/projects/webpify.min.webp",
    techStack: ["TypeScript", "VS Code API", "Sharp", "Node.js"],
    xp: 1450,
    featured: true,
    status: "in-progress",
    difficulty: 3,
    role: "Solo Dev",
    architecture: "MVC",
    loot: {
      primary: ["TypeScript", "VS Code API", "Sharp"],
      secondary: ["Webpack", "ESLint", "pnpm", "Workspace Editor API"]
    },
    devLog: {
      challenge: "Ensuring high-performance image conversion and secure workspace-wide file reference updates without affecting unintended files.",
      solution: "Implemented a 'Sharp'-based processing engine for native performance and a 'Workspace Linker' system using contextual Regex and manual confirmations to validate path consistency.",
      architectureSnippet: "Extension Entry -> Controller (Signal) -> Core Processor (Buffer Stream) -> Workspace Editor (Refactor)"
    },
    githubUrl: "https://github.com/eddyAlvaro/webpify/tree/develop",
    // "demoUrl": "https://marketplace.visualstudio.com/items?itemName=eddy.webpify"
  },
  {
    id: "ambientar",
    title: "Ambientar Landing Page",
    description: "A high-performance, bilingual landing page for an environmental consulting and engineering group, featuring immersive animations and localized content management.",
    image: "/projects/ambientar.min.webp",
    techStack: ["Next.js 13", "TypeScript", "Tailwind CSS", "NextUI"],
    xp: 1200,
    featured: true,
    status: "shipped",
    difficulty: 2,
    role: "Solo Dev",
    architecture: "Clean Architecture",
    loot: {
      primary: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "NextUI"
      ],
      secondary: [
        "Framer Motion",
        "Next-intl",
        "React Hook Form",
        "Nodemailer",
        "Swiper"
      ]
    },
    devLog: {
      challenge: "Implementing a seamless multilingual experience while maintaining high performance and SEO visibility across different locales.",
      solution: "Leveraged `next-intl` with the Next.js 13 App Router, using localized routing and middleware to manage translations efficiently without sacrificing server-side rendering benefits.",
      architectureSnippet: "Next.js App Router (Locales) -> Framework Components -> Context-Aware UI"
    },
    githubUrl: "",
    demoUrl: ""
  },
  {
    id: "gym-ux",
    title: "GymU",
    description:
      "Mobile-first workout tracker that turns every gym session into a structured training log with progress charts and streak gamification.",
    image: "/projects/gymu.jpeg",
    techStack: ["Flutter", "Dart"],
    xp: 1800,
    featured: false,
    status: "in-progress",
    difficulty: 3,
    role: "Lead Developer",
    architecture: "Clean Architecture",
    loot: {
      primary: ["Flutter", "Dart"],
      secondary: ["Firebase", "Riverpod", "SQLite"],
    },
    devLog: {
      challenge:
        "Keeping offline-first UX smooth when syncing workout logs with a remote backend — conflicts between local mutations and server state caused stale data bugs.",
      solution:
        "Introduced an optimistic-update pattern with a local SQLite write-ahead log. On reconnect, a background sync job reconciles diffs using a last-write-wins strategy with user confirmation on conflict.",
      architectureSnippet:
        "Presentation (Flutter Widgets) → Riverpod providers → UseCases → Repository interface → Local (SQLite) + Remote (Firebase) implementations. Domain layer is pure Dart, zero Flutter dependency.",
    },
    githubUrl: "https://github.com/eddyAlvaro/gym-ux",
  },
  {
    id: "folio-builder",
    title: "Folio Builder",
    description:
      "Drag-and-drop portfolio builder with real-time preview, custom themes and cloud storage. Ship a portfolio in under 10 minutes.",
    image: "",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    xp: 2400,
    featured: false,
    status: "shipped",
    difficulty: 4,
    role: "Full-Stack",
    architecture: "Clean Hexagonal",
    loot: {
      primary: ["React", "Node.js", "PostgreSQL"],
      secondary: ["AWS S3", "Express", "Prisma", "Stripe"],
    },
    devLog: {
      challenge:
        "Real-time drag-and-drop with nested component trees created severe React re-render storms — every pixel drag triggered hundreds of reconciliations.",
      solution:
        "Moved drag state into a Zustand store with shallow selectors. Replaced controlled inputs with uncontrolled refs for position tracking. Throttled preview re-renders to 60fps via requestAnimationFrame.",
      architectureSnippet:
        "Client: React + Zustand (UI state) | Server: Hexagonal — Ports (HTTP REST) → Use-cases → Adapters (Prisma for DB, S3 SDK for storage). Domain models are plain classes with no ORM decorators.",
    },
    githubUrl: "https://github.com/eddyAlvaro/folio-builder",
    demoUrl: "https://folio-builder.vercel.app",
  },
  {
    id: "collab-hub",
    title: "CollabHub",
    description:
      "Real-time collaboration platform with WebSocket channels, shared cursors and version history. Built for distributed teams.",
    image: "",
    techStack: ["Next.js", "Socket.io", "Redis", "Docker"],
    xp: 3200,
    featured: false,
    status: "shipped",
    difficulty: 5,
    role: "Full-Stack",
    architecture: "Event-Driven",
    loot: {
      primary: ["Socket.io", "Redis", "Next.js"],
      secondary: ["Docker", "Postgres", "CRDT (Yjs)", "Nginx"],
    },
    devLog: {
      challenge:
        "Achieving sub-100ms cursor sync across 50+ concurrent users while keeping operational transforms consistent — naive broadcasting caused cursor teleportation and edit conflicts.",
      solution:
        "Adopted CRDT (Yjs) for document state. Used Redis Pub/Sub for multi-server cursor fan-out. Implemented awareness protocol so each client only broadcasts deltas, not full state.",
      architectureSnippet:
        "Event Bus (Redis Streams) ← WebSocket Gateway → CRDT Engine (Yjs Doc) → Persistence Worker → PostgreSQL snapshots. No synchronous DB writes on the hot path — eventual consistency by design.",
    },
    githubUrl: "https://github.com/eddyAlvaro/collab-hub",
    demoUrl: "https://collab-hub.vercel.app",
  },
];

export const levelProgressData: LevelProgress = {
  currentLevel: 42,
  currentXP: 9500,
  nextLevelXP: 12000,
  totalXP: 156800,
};
