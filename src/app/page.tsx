

import { Achievements } from "@/features/achievements";
import { LoreLog } from "@/features/log";
import { CharacterStats } from "@/features/profile";
import { ProjectList } from "@/features/projects";
import { EquippedSkills } from "@/features/skills";
import { UnderConstruction } from "@/shared/components/ui/neon";

export default function Home() {
  return (
    <div className="min-h-screen lg:h-full w-full px-3 py-6 sm:px-5 md:px-8 lg:px-10 xl:px-12 flex flex-col overflow-auto lg:overflow-hidden bg-black text-gray-100">
      {/* ── Page Header ── */}
      <header className="mb-4 flex flex-col gap-1 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono tracking-[0.4em] text-cyan-600 uppercase">
            System Online
          </span>
          <span className="h-px flex-1 bg-linear-to-r from-cyan-900/60 to-transparent" />
          <span className="text-[10px] font-mono text-gray-700">v0.0.1</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
          <h1 className="font-mono font-black text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-fuchsia-400 to-cyan-400">
            DEV_PORTFOLIO
          </h1>
          <p className="font-mono text-lg text-gray-600 tracking-widest uppercase">
            // Full-Stack Developer — Character Sheet Active
          </p>
        </div>
      </header>

      <main
        className="
          grid grid-cols-1 gap-4
          sm:grid-cols-2
          lg:grid-cols-3 lg:grid-rows-5
          xl:grid-cols-4 xl:grid-rows-6
          shrink-0 lg:min-h-0 lg:flex-1
        "
        aria-label="Portfolio bento grid"
      >
        {/* ── PROJECTS ── */}
        <section
          className="
            lg:col-span-2 lg:row-span-2
            xl:col-span-2 xl:row-span-3
            lg:min-h-0 h-auto lg:h-full
            relative z-0 hover:z-20 transition-all
          "
          aria-labelledby="section-projects"
        >
          <h2 id="section-projects" className="sr-only">Featured Projects</h2>
          <ProjectList/>
        </section>

        {/* ── SKILLS ── */}
        <section
          className="
            sm:col-span-2 sm:row-span-1
            lg:col-span-1 lg:row-span-2
            xl:col-start-4 xl:col-span-1 xl:row-span-3
            lg:min-h-0 h-auto lg:h-full
            relative z-0 hover:z-30 transition-all
          "
          aria-labelledby="section-skills"
        >
          <h2 id="section-skills" className="sr-only">Equipped Skills</h2>
          {/* <UnderConstruction title="Equipped Skills" /> */}
          <EquippedSkills/>
        </section>

        {/* ── ACHIEVEMENTS ── */}
        <section
          className="
            sm:col-span-1
            lg:col-span-1 lg:row-span-1
            lg:col-start-3 lg:row-start-5
            xl:col-start-4 xl:row-start-4 xl:col-span-1 xl:row-span-3
            lg:min-h-0 h-auto lg:h-full
          "
          aria-labelledby="section-achievements"
        >
          <h2 id="section-achievements" className="sr-only">Achievements</h2>
          <Achievements/>
        </section>

        {/* ── PROFILE ── */}
        <section
          className="
            row-start-1
            sm:col-span-1
            sm:col-start-1 sm:row-start-1
            lg:col-span-2 lg:row-span-3
            xl:row-start-1
            xl:col-start-3 xl:col-span-1 xl:row-span-4
            lg:min-h-0 h-auto lg:h-full
            relative z-0 hover:z-20 transition-all
          "
          aria-labelledby="section-profile"
        >
          <h2 id="section-profile" className="sr-only">Character Stats</h2>
          <CharacterStats/>
        </section>

        {/* ── CONTACT ── */}
        <section
          className="
            row-start-6
            sm:col-span-2
            sm:row-start-4
            lg:col-span-1 lg:row-span-2
            xl:col-start-1 xl:col-span-2 xl:row-span-3
            lg:min-h-0 h-auto lg:h-full
          "
          aria-labelledby="section-contact"
        >
          <h2 id="section-contact" className="sr-only">Save Terminal</h2>
          <UnderConstruction title="Save Terminal" />
        </section>

        {/* ── LOG ── */}
        <section
          className="
            sm:col-span-1
            lg:col-span-1 lg:row-span-1
            lg:hidden xl:block
            lg:col-start-2 lg:row-start-5
            xl:col-start-3 xl:col-span-1 xl:row-span-2
            lg:min-h-0 h-auto lg:h-full
          "
          aria-labelledby="section-log"
        >
          <h2 id="section-log" className="sr-only">Lore Log</h2>
          <LoreLog/>
        </section>
      </main>
    </div>
  );
}
