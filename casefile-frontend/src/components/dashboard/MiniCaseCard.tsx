import CaseDialog from "@/components/cases/CaseDialog";
import DifficultyBadge from "@/components/cases/DifficultyBadge";
import type { Case } from "@/types/case";

export default function MiniCaseCard({ item }: { item: Case }) {
  return (
    <CaseDialog item={item} loggedIn>
      <button
        type="button"
        className="flex cursor-pointer flex-col overflow-hidden rounded-xl border border-navy-edge bg-navy text-left transition hover:border-gold/40 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none"
      >
        <div
          className="h-28 w-full bg-navy-soft bg-cover bg-center"
          style={{ backgroundImage: `url('${item.image}')` }}
        />
        <div className="flex flex-1 flex-col p-4">
          <h3 className="font-display text-base">{item.title}</h3>
          <DifficultyBadge difficulty={item.difficulty} className="mt-2 self-start" />
          <p className="mt-2 line-clamp-2 text-sm text-white/60">{item.summary}</p>
        </div>
      </button>
    </CaseDialog>
  );
}