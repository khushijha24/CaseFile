import { FileSearch, FolderOpen, Lightbulb } from "lucide-react";
import type { Activity, ActivityType } from "@/types/dashboard";

const icons = {
  evidence: FileSearch,
  case: FolderOpen,
  theory: Lightbulb,
} satisfies Record<ActivityType, typeof FileSearch>;

export default function ActivityTimeline({ items }: { items: Activity[] }) {
  return (
    <ol className="mt-5 space-y-6">
      {items.map((a, i) => {
        const Icon = icons[a.type];
        return (
          <li key={a.id} className="relative flex gap-4">
            {i < items.length - 1 && (
              <span className="absolute top-10 -bottom-6 left-5 w-px bg-navy-edge" />
            )}
            <div className="relative flex size-10 shrink-0 items-center justify-center rounded-full border border-navy-edge bg-navy text-gold">
              <Icon className="size-4" />
            </div>
            <div className="pt-0.5">
              <p className="text-sm font-medium">{a.title}</p>
              <p className="text-sm text-white/50">{a.detail}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}