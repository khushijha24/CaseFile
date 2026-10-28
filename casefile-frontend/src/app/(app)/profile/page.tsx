import Link from "next/link";
import { Settings, User } from "lucide-react";
import RecentCaseItem from "@/components/profile/RecentCaseItem";
import StatCard from "@/components/profile/StatCard";
import { getCase } from "@/data/cases";
import { profile } from "@/data/profile";

export default function ProfilePage() {
  const { stats } = profile;

  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl">My Profile</h1>
        <Link
          href="/settings"
          aria-label="Settings"
          className="flex size-10 items-center justify-center rounded-full border border-navy-edge bg-navy-soft text-white/70 transition hover:text-gold"
        >
          <Settings className="size-5" />
        </Link>
      </div>

      {/* Identity */}
      <div className="mt-8 flex items-center gap-5">
        <div
          className="flex size-24 shrink-0 items-center justify-center rounded-full border-2 border-navy-edge bg-navy-soft bg-cover bg-center text-white/60"
          style={
            profile.avatar
              ? { backgroundImage: `url('${profile.avatar}')` }
              : undefined
          }
        >
          {!profile.avatar && <User className="size-10" />}
        </div>

        <div>
          <p className="font-display text-2xl">{profile.username}</p>
          <p className="text-sm text-white/50">{profile.title}</p>
          <p className="mt-1 text-xs text-white/40">
            Member since {profile.memberSince}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard value={stats.casesPlayed} label="Cases Played" />
        <StatCard value={stats.solved} label="Solved" />
        <StatCard value={`${stats.accuracy}%`} label="Accuracy" />
        <StatCard value={stats.rank} label="Rank" />
      </div>

      {/* Recent cases */}
      <section className="mt-10">
        <h2 className="font-display text-xl">Recent Cases</h2>

        <ul className="mt-4 space-y-3">
          {profile.recent.map((r) => {
            const caseData = getCase(r.caseId);
            if (!caseData) return null;
            return (
              <RecentCaseItem key={r.caseId} item={r} caseData={caseData} />
            );
          })}
        </ul>
      </section>
    </div>
  );
}