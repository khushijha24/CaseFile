import type { Difficulty } from "@/types/case";
import { cn } from "@/lib/utils";

const styles: Record<Difficulty, string> = {
  Easy: "border-emerald-500/30 bg-emerald-500/15 text-emerald-300",
  Medium: "border-amber-500/30 bg-amber-500/15 text-amber-300",
  Hard: "border-red-500/30 bg-red-500/15 text-red-300",
};

export default function DifficultyBadge({
  difficulty,
  className,
}: {
  difficulty: Difficulty;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium",
        styles[difficulty],
        className
      )}
    >
      {difficulty}
    </span>
  );
}