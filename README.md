## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Clean Architecture
- Neon Aesthetics

## Project Structure

```
neo-portfolio/
├── src/
│   ├── app/              # Next.js App Router
│   ├── features/         # Feature modules
│   │   ├── profile/      # Profile feature
│   │   │   ├── application/  # Application layer
│   │   │   ├── domain/       # Domain layer
│   │   │   └── presentation/ # Presentation layer
│   │   └── projects/     # Projects feature
│   ├── shared/           # Shared components and utilities
│   └── lib/              # Core libraries
├── public/               # Static assets
└── ...                   # Config files
```