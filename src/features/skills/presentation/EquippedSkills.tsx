"use client";

import { useState, useEffect } from "react";
import { NeonCard } from "@/shared/components/ui/neon";
import { useSkills } from "../application";
import { SkillCard } from "./components/SkillCard";
import { SkillPagination } from "./components/SkillPagination";

export function EquippedSkills() {
  const skills = useSkills();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newLimit = 16;
      if (width >= 1280) newLimit = 12; // xl
      else if (width >= 1024) newLimit = 6;  // lg
      
      setItemsPerPage(newLimit);
      setCurrentPage(0); // Reset to page 0 whenever the layout changes
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(skills.length / itemsPerPage);
  const displayedSkills = skills.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <NeonCard glowColor="fuchsia" className="flex flex-col gap-4 h-auto lg:h-full">
      {/* Header */}
      <div className="border-b border-fuchsia-900/50 pb-3 shrink-0">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-fuchsia-500">
          ▸ Equipped Skills
        </span>
        <p className="text-xs text-gray-600 font-mono mt-1">
          {currentPage + 1} / {totalPages} — SLOTS_ACTIVE
        </p>
      </div>

      {/* Grid container */}
      <div className="flex flex-wrap gap-2 justify-center px-2 min-h-0 pb-4 flex-1 items-start content-start lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-3 lg:place-items-stretch xl:grid-cols-4 xl:grid-rows-3 xl:gap-2">
        {displayedSkills.map((skill, i) => (
          <SkillCard key={skill.id} skill={skill} index={i} />
        ))}
      </div>

      {/* Pagination UI */}
      <SkillPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </NeonCard>
  );
}
