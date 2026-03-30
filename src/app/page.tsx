
// function GridLabel({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="px-1 mb-2 flex items-center gap-2">
//       <span className="h-px flex-1 bg-linear-to-r from-transparent to-cyan-900/0 via-cyan-800/40" />
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="min-h-screen sm:h-screen w-full px-3 py-6 sm:px-5 md:px-8 lg:px-10 xl:px-12 flex flex-col overflow-auto lg:overflow-hidden bg-black text-gray-100">
      {/* ── Page Header ── */}
      <header className="mb-4 flex flex-col gap-1 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono tracking-[0.4em] text-cyan-600 uppercase">
            System Online
          </span>
          <span className="h-px flex-1 bg-linear-to-r from-cyan-900/60 to-transparent" />
          <span className="text-[10px] font-mono text-gray-700">v0.0.1</span>
        </div>
        <h1 className="font-mono font-black text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-fuchsia-400 to-cyan-400">
          DEV_PORTFOLIO
        </h1>
        <p className="font-mono text-xs text-gray-600 tracking-widest uppercase">
          // Full-Stack Developer — Character Sheet Active
        </p>
      </header>

      <main
        className="
          grid grid-cols-1 gap-4
          sm:grid-cols-2 sm:grid-rows-8
          lg:grid-cols-3 lg:grid-rows-5
          xl:grid-cols-4 xl:grid-rows-6
          min-h-screen lg:min-h-0 lg:flex-1
        "
        aria-label="Portfolio bento grid"
      >
        {/* ── PROJECTS ── */}
        <section
          className="
            row-span-2
            sm:col-span-1 sm:row-span-3
            lg:col-span-2 lg:row-span-2
            xl:col-span-3 xl:row-span-3
            min-h-0 h-full
          "
          aria-labelledby="section-projects"
        >
          <h2 id="section-projects" className="sr-only">Featured Projects</h2>
          <div className="bg-blue-900/20 border border-blue-500/30 w-full h-full flex items-center justify-center text-blue-400 font-mono text-sm min-h-[200px] sm:min-h-0">
            PROJECTS
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section
          className="
            row-span-2
            sm:col-span-1 sm:row-span-2
            lg:col-span-1 lg:row-span-2
            xl:col-start-4 xl:col-span-1 xl:row-span-3
            min-h-0 h-full
          "
          aria-labelledby="section-skills"
        >
          <h2 id="section-skills" className="sr-only">Equipped Skills</h2>
          <div className="bg-purple-900/20 border border-purple-500/30 w-full h-full flex items-center justify-center text-purple-400 font-mono text-xs text-center px-2 min-h-[200px] sm:min-h-0">
            SKILLS
          </div>
        </section>

        {/* ── ACHIEVEMENTS ── */}
        <section
          className="
            row-span-1
            sm:col-span-1 sm:row-span-2
            lg:col-span-2 lg:row-span-1
            lg:col-start-1 lg:row-start-5
            xl:col-start-1 xl:col-span-1 xl:row-span-3
            min-h-0 h-full
          "
          aria-labelledby="section-achievements"
        >
          <h2 id="section-achievements" className="sr-only">Achievements</h2>
          <div className="bg-amber-900/20 border border-amber-500/30 w-full h-full flex items-center justify-center text-amber-400 font-mono text-xs text-center px-2 min-h-[100px] sm:min-h-0">
            ACHIEVEMENTS
          </div>
        </section>

        {/* ── PROFILE ── */}
        <section
          className="
            row-span-2
            col-start-1 row-start-1
            sm:col-span-1 sm:row-span-5
            sm:col-start-1 sm:row-start-1
            lg:col-span-1 lg:row-span-2
            xl:col-start-2 xl:col-span-2 xl:row-span-2
            min-h-0 h-full
          "
          aria-labelledby="section-profile"
        >
          <h2 id="section-profile" className="sr-only">Character Stats</h2>
          <div className="bg-red-900/20 border border-red-500/30 w-full h-full flex items-center justify-center text-red-400 font-mono text-sm min-h-50 sm:min-h-0">
            PROFILE
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section
          className="
            row-span-1
            sm:col-span-1 sm:row-span-7
            lg:col-span-1 lg:row-span-3
            xl:col-start-4 xl:col-span-1 xl:row-span-3
            min-h-0 h-full
          "
          aria-labelledby="section-contact"
        >
          <h2 id="section-contact" className="sr-only">Save Terminal</h2>
          <div className="bg-green-900/20 border border-green-500/30 w-full h-full flex items-center justify-center text-green-400 font-mono text-xs text-center px-2 min-h-25 sm:min-h-0">
            CONTACT
          </div>
        </section>

        {/* ── LOG ── */}
        <section
          className="
            row-span-1
            sm:col-span-1 sm:row-span-5
            lg:col-span-1 lg:row-span-2
            lg:col-start-2 lg:row-start-3
            xl:col-start-2 xl:col-span-2 xl:row-span-1
            min-h-0 h-full
          "
          aria-labelledby="section-log"
        >
          <h2 id="section-log" className="sr-only">Lore Log</h2>
          <div className="bg-cyan-900/20 border border-cyan-500/30 w-full h-full flex items-center justify-center text-cyan-400 font-mono text-center px-2 min-h-25 sm:min-h-0">
            LOG
          </div>
        </section>
      </main>
    </div>
  );
}
