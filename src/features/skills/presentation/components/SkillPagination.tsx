"use client";

interface SkillPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function SkillPagination({
  currentPage,
  totalPages,
  onPageChange,
}: SkillPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between mt-auto pt-3 border-t border-fuchsia-900/30 shrink-0">
      <button
        onClick={() => onPageChange(Math.max(0, currentPage - 1))}
        disabled={currentPage === 0}
        className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-1 text-fuchsia-500/70 disabled:opacity-20 hover:text-fuchsia-400 transition-colors"
      >
        ◂ Prev
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`w-1.5 h-1.5 transition-all duration-300 ${
              currentPage === i
                ? "bg-fuchsia-500 shadow-[0_0_8px_rgba(232,121,249,0.8)] scale-125"
                : "bg-gray-800 hover:bg-gray-600"
            } rotate-45`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages - 1, currentPage + 1))}
        disabled={currentPage === totalPages - 1}
        className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-1 text-fuchsia-500/70 disabled:opacity-20 hover:text-fuchsia-400 transition-colors"
      >
        Next ▸
      </button>
    </div>
  );
}
