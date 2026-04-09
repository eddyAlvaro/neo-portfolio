"use client";

interface DifficultyStarsProps {
  value: 1 | 2 | 3 | 4 | 5;
}

export function DifficultyStars({ value }: DifficultyStarsProps) {
  return (
    <div className="flex gap-0.5" aria-label={`Difficulty: ${value} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span 
          key={i} 
          className={`font-mono text-[11px] ${i < value ? "text-yellow-400" : "text-gray-700"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}
