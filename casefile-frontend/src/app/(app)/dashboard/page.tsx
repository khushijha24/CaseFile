import Link from "next/link";
import { ArrowRight, CircleCheck, FolderOpen, Trophy } from "lucide-react";
import ActiveCaseCard from "@/components/dashboard/ActiveCaseCard";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import MiniCaseCard from "@/components/dashboard/MiniCaseCard";
import ProfileButton from "@/components/layout/ProfileButton";
import { cases, getCase } from "@/data/cases";
import { activeCaseId, activity } from "@/data/dashboard";
import { profile } from "@/data/profile";

export default function DashboardPage() {
  const active = getCase(activeCaseId);

  const solvedScores = profile.recent
    .filter((r) => r.status === "Solved")
    .map((r) => r.score);
  const inProgress = profile.recent.filter(
    (r) => r.status === "In Progress"
  ).length;

  const stats = [
    { icon: CircleCheck, label: "Cases Solved", value: profile.stats.solved },
    { icon: FolderOpen, label: "In Progress", value: inProgress },
    { icon: Trophy, label: "Best Score", value: `${Math.max(0, ...solvedScores)}%` },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-10">
      {/* Greeting */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-gold sm:text-4xl">
            Welcome back, Detective.
          </h1>
          <p className="mt-1 text-white/60">A new clue could change everything.</p>
        </div>
        <ProfileButton />
      </div>

      {active && <ActiveCaseCard item={active} />}

      {/* Available cases */}
      <section>
        <div className="flex items-center gap-4">
          <h2 className="font-display text-2xl text-gold">Available Cases</h2>
          <span className="h-px flex-1 bg-navy-edge" />
          <Link
            href="/cases"
            className="inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-gold"
          >
            View All Cases <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.slice(0, 3).map((c) => (
            <MiniCaseCard key={c.id} item={c} />
          ))}
        </div>
      </section>

      {/* Recent activity */}
      <section>
        <h2 className="font-display text-2xl text-gold">Recent Activity</h2>
        <ActivityTimeline items={activity} />
      </section>
    </div>
  );
}