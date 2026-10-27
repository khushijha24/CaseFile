import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Case } from "@/types/case";
import DifficultyBadge from "./DifficultyBadge";

export default function CaseCard({ item }: { item: Case }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-navy-edge bg-navy transition hover:border-gold/40">
      <div
        className="h-44 bg-navy-soft bg-cover bg-center"
        style={{ backgroundImage: `url('${item.image}')` }}
      />

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg">{item.title}</h3>
        <DifficultyBadge difficulty={item.difficulty} className="mt-2 self-start" />
        <p className="mt-3 flex-1 text-sm text-white/60">{item.summary}</p>

        <Link
          href={`/cases/${item.id}`}
          className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-navy-edge bg-ink/40 py-2 text-sm text-white/80 transition hover:border-gold/50 hover:text-gold"
        >
          View Case <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}