import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Case } from "@/types/case";
import type { RecentCase } from "@/types/profile";
import { cn } from "@/lib/utils";

export default function RecentCaseItem({
  item,
  caseData,
}: {
  item: RecentCase;
  caseData: Case;
}) {
  const solved = item.status === "Solved";

  return (
    <li className="flex items-center gap-4 rounded-xl border border-navy-edge bg-navy p-3">
      <div
        className="size-16 shrink-0 rounded-lg bg-navy-soft bg-cover bg-center"
        style={{ backgroundImage: `url('${caseData.image}')` }}
      />

      <div className="min-w-0 flex-1">
        <p className="truncate font-display text-lg">{caseData.title}</p>
        <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-white/50">
          <span className={cn(solved ? "text-emerald-300" : "text-amber-300")}>
            {item.status}
          </span>
          <span>·</span>
          <span>{solved ? `Score ${item.score}%` : `${item.score}%`}</span>
          <span>·</span>
          <span>{item.date}</span>
        </p>
      </div>

      <Link
        href={`/cases/${item.caseId}`}
        className="flex shrink-0 items-center gap-1 px-2 text-sm text-gold transition hover:text-gold-dim"
      >
        View <ArrowRight className="size-4" />
      </Link>
    </li>
  );
}