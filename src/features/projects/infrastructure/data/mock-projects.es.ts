import type { Project, LevelProgress } from "../../domain";

export const projectsMocksEs: Project[] = [
  {
    id: "better-resume",
    title: "Better Resume",
    description: "Un generador de currículums y sistema de gestión de perfiles dinámico y completamente type-safe, construido desde cero. Incluye un robusto editor JSON impulsado por Monaco, internacionalización completa y persistencia confiable. Desarrollado siguiendo los principios de Clean Architecture.",
    image: "/projects/better-resume.min.webp",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Zustand", "Tailwind CSS 4", "Monaco Editor"],
    xp: 3800,
    featured: true,
    status: "shipped",
    difficulty: 4,
    role: "Solo Dev",
    architecture: "Clean Architecture",
    loot: {
      primary: ["Next.js 16", "React 19", "TypeScript", "Zustand"],
      secondary: ["Monaco Editor", "Tailwind CSS 4", "Framer Motion", "Zod", "Vitest"]
    },
    devLog: {
      challenge: "Construir un generador de currículums complejo con un editor JSON en tiempo real e internacionalización desde cero, manteniendo una arquitectura limpia y escalable.",
      solution: "Desarrollé la aplicación con una separación estricta de capas. Desacoplé la UI de la lógica de negocio usando Zustand para el manejo de estado y Zod para la validación de esquemas de dominio, garantizando persistencia robusta y type safety en los componentes de React 19.",
      architectureSnippet: "Capa UI [React 19 + Monaco] -> Presentación [Zustand] -> Modelos de Dominio [Zod] -> Infraestructura [Persistencia]"
    },
    githubUrl: "",
    demoUrl: "https://dev.resume.clickazo.com/",
    liveDisclaimer: "Una aplicación completamente construida a medida, aprovechando los estándares modernos de Next.js 16/React 19 y Clean Architecture."
  },
  {
    id: "webpify",
    title: "WebPify",
    description: "Potente extensión de VS Code para optimización masiva de imágenes y conversión a WebP, con refactorización automática de referencias en todo el workspace.",
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
      challenge: "Garantizar una conversión de imágenes de alto rendimiento y actualizaciones seguras de referencias de archivos en todo el workspace, sin afectar archivos no deseados.",
      solution: "Implementé un motor de procesamiento basado en 'Sharp' para rendimiento nativo y un sistema 'Workspace Linker' que usa Regex contextual y confirmaciones manuales para validar la consistencia de rutas.",
      architectureSnippet: "Entrada de la extensión -> Controlador (Señal) -> Procesador central (Buffer Stream) -> Editor del Workspace (Refactor)"
    },
    githubUrl: "https://github.com/eddyAlvaro/webpify/tree/develop",
  },
  {
    id: "deocasion-ecosystem",
    title: "DeOcasion: Auction Ecosystem",
    description: "Solución integral de subastas con backend orientado a eventos, una plataforma de marketplace y una landing page de alto rendimiento. Contribuí al desarrollo de funcionalidades clave y a la orquestación directa de requerimientos con el cliente.",
    image: "/projects/deocasion.min.webp",
    techStack: ["NestJS", "Nuxt 3", "PostgreSQL", "Event Sourcing", "CQRS", "Socket.io"],
    xp: 5200,
    featured: true,
    status: "shipped",
    difficulty: 5,
    role: "Full-Stack",
    architecture: "Event-Driven",
    loot: {
      primary: ["NestJS", "Nuxt 3", "PostgreSQL", "TypeScript"],
      secondary: ["Event Sourcing", "CQRS", "BullMQ", "Socket.io", "Clean Architecture", "Docker"]
    },
    devLog: {
      challenge: "Implementar sincronización en tiempo real y consistencia estricta de datos en un sistema de subastas distribuido con múltiples stakeholders.",
      solution: "Desarrollé los módulos centrales usando Event Sourcing y CQRS para garantizar auditabilidad, manteniendo comunicación directa con los clientes para traducir necesidades de negocio en funcionalidades técnicas en todo el stack.",
      architectureSnippet: "Necesidades del cliente -> Implementación Full-Stack [Nuxt 3 + NestJS] -> Núcleo orientado a eventos -> Infraestructura escalable"
    },
    githubUrl: "",
    demoUrl: "https://deocasion.pe/",
    liveDisclaimer: "La versión en vivo actual podría incluir actualizaciones externas más allá de mis contribuciones directas y mantenimiento del sistema."
  },
  {
    id: "ambientar",
    title: "Ambientar Landing Page",
    description: "Landing page bilingüe de alto rendimiento para un grupo de consultoría e ingeniería ambiental, con animaciones inmersivas y gestión de contenido localizado.",
    image: "/projects/ambientar.min.webp",
    techStack: ["Next.js 13", "TypeScript", "Tailwind CSS", "NextUI"],
    xp: 1200,
    featured: true,
    status: "shipped",
    difficulty: 2,
    role: "Solo Dev",
    architecture: "Clean Architecture",
    loot: {
      primary: ["Next.js", "TypeScript", "Tailwind CSS", "NextUI"],
      secondary: ["Framer Motion", "Next-intl", "React Hook Form", "Nodemailer", "Swiper"]
    },
    devLog: {
      challenge: "Implementar una experiencia multilingüe fluida manteniendo alto rendimiento y visibilidad SEO en distintos locales.",
      solution: "Utilicé `next-intl` con el App Router de Next.js 13, con enrutamiento localizado y middleware para gestionar traducciones de forma eficiente sin sacrificar los beneficios del renderizado en servidor.",
      architectureSnippet: "Next.js App Router (Locales) -> Componentes del framework -> UI consciente del contexto"
    },
    githubUrl: "",
    demoUrl: ""
  },
  {
    id: "gym-ux",
    title: "GymU",
    description: "Rastreador de entrenamientos mobile-first que convierte cada sesión de gimnasio en un registro estructurado con gráficos de progreso y gamificación por rachas.",
    image: "/projects/gymu.webp",
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
      challenge: "Mantener una UX offline-first fluida al sincronizar registros de entrenamiento con un backend remoto — conflictos entre mutaciones locales y estado del servidor causaban bugs de datos obsoletos.",
      solution: "Introduje un patrón de actualización optimista con un write-ahead log local en SQLite. Al reconectar, un job de sincronización en segundo plano concilia las diferencias con una estrategia last-write-wins y confirmación del usuario ante conflictos.",
      architectureSnippet: "Presentación (Widgets de Flutter) → Providers de Riverpod → Casos de uso → Interfaz de repositorio → Implementaciones local (SQLite) + remota (Firebase). La capa de dominio es Dart puro, sin dependencia de Flutter.",
    },
    githubUrl: "https://github.com/eddyAlvaro/gym-ux",
  },
  {
    id: "folio-builder",
    title: "Folio Builder",
    description: "Constructor de portfolios drag-and-drop con vista previa en tiempo real, temas personalizados y almacenamiento en la nube. Publica un portfolio en menos de 10 minutos.",
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
      challenge: "El drag-and-drop en tiempo real con árboles de componentes anidados generaba severas tormentas de re-render en React — cada pixel arrastrado disparaba cientos de reconciliaciones.",
      solution: "Moví el estado del arrastre a un store de Zustand con selectores shallow. Reemplacé los inputs controlados por refs no controladas para el tracking de posición. Limité los re-renders de la vista previa a 60fps vía requestAnimationFrame.",
      architectureSnippet: "Cliente: React + Zustand (estado UI) | Servidor: Hexagonal — Puertos (HTTP REST) → Casos de uso → Adaptadores (Prisma para BD, SDK de S3 para storage). Los modelos de dominio son clases planas sin decoradores de ORM.",
    },
    githubUrl: "https://github.com/eddyAlvaro/folio-builder",
    demoUrl: "https://folio-builder.vercel.app",
  },
  {
    id: "innovahope",
    title: "Innovahope",
    description: "Sistema de nueva generación para evaluación clínica y gestión de rehabilitación física, que orquesta datos médicos complejos en insights de salud accionables.",
    image: "/projects/innovahope.min.webp",
    techStack: ["PHP", "Symfony", "Doctrine ORM", "AWS", "Dompdf", "PhpSpreadsheet"],
    xp: 2200,
    featured: true,
    status: "shipped",
    difficulty: 4,
    role: "Systems Maintainer",
    architecture: "MVC (Service Oriented)",
    loot: {
      primary: ["Symfony 4.3", "PHP 7.1", "Doctrine ORM", "Twig"],
      secondary: ["AWS SDK", "Dompdf", "PhpSpreadsheet", "FOSUserBundle", "Quickchart", "Okvpn Cron"]
    },
    devLog: {
      challenge: "Manejar evaluaciones clínicas multidimensionales (WOMAC, PHQ-9, SF-36) y sincronizar reportes médicos asíncronos con assets respaldados en AWS, en un entorno PHP legado.",
      solution: "Construí una arquitectura de servicios modularizada para desacoplar la aritmética de evaluación de la persistencia, junto con un generador de reportes vía Cron personalizado usando Dompdf y visualizaciones de gráficos con Sharp para el seguimiento de progreso del paciente en tiempo real.",
      architectureSnippet: "Controlador (Datos de solicitud) -> AssessmentService (Lógica/Puntuación) -> Repositorio (Persistencia) -> AWS/S3 (Storage/Assets) -> Twig (Renderizado PDF)"
    },
    githubUrl: "",
    demoUrl: "https://innovahope.com",
    liveDisclaimer: "La versión en vivo actual podría incluir actualizaciones externas más allá de mi mantenimiento inicial del sistema.",
  },
  {
    id: "apparel-ecosystem",
    title: "Apparel: Ecosistema de E-commerce de Moda",
    description:
      "Plataforma de e-commerce de moda peruana con tres aplicaciones — una API en NestJS, un storefront en Angular con SSR y un panel de administración en Angular basado en signals — construida alrededor del manejo de impuestos conforme a SUNAT y reserva de stock en tiempo real sobre un catálogo de variantes talla x color.",
    image: "",
    techStack: ["NestJS", "Angular 19", "TypeScript", "PostgreSQL", "Prisma", "Redis", "BullMQ"],
    xp: 4600,
    featured: true,
    status: "in-progress",
    difficulty: 5,
    role: "Full-Stack",
    architecture: "Clean Architecture",
    loot: {
      primary: ["NestJS", "Angular", "TypeScript", "PostgreSQL"],
      secondary: ["Prisma", "Redis", "BullMQ", "SSR", "Signals", "Zod"],
    },
    devLog: {
      challenge:
        "Coordinar una API, un storefront con SSR y un admin SPA alrededor de reglas fiscales conformes a SUNAT y un stock de prendas finito, donde una variante talla x color puede sobrevenderse si la reserva y el cumplimiento de pedidos se desalinean.",
      solution:
        "Mantuve la lógica de impuestos, descuentos y pedidos en una capa `core/` pura, sin dependencias de Nest ni de I/O — el IGV se extrae, nunca se suma, y los descuentos se escriben como filas `LineItemAdjustment` en vez de mutar el precio unitario, para que los reembolsos parciales sigan siendo reconciliables. Las cantidades reservadas y las en stock se rastrean por separado para que las reservas del carrito se liberen limpiamente sin tocar el stock real.",
      architectureSnippet:
        "Storefront SSR en Angular (4200) + Admin SPA en Angular (4300) -> API NestJS (3000, cookies httpOnly, sin BFF) -> Dominio central (TS puro: rules/totals/order) -> Prisma -> PostgreSQL + Redis/BullMQ",
    },
    githubUrl: "",
    demoUrl: "",
  },
];

export const levelProgressMockEs: LevelProgress = {
  currentLevel: 42,
  currentXP: 9500,
  nextLevelXP: 12000,
  totalXP: 156800,
};
