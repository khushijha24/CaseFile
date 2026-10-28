"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import type { Case } from "@/types/case";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import CaseCard from "./CaseCard";
import ProfileButton from "@/components/layout/ProfileButton";

const filters = ["All", "Mystery", "Easy", "Medium", "Hard"] as const;
type Filter = (typeof filters)[number];

export default function CaseList({
  cases,
  limit,
  showProfile = false,
  loggedIn = false,
  footer,
}: {
  cases: Case[];
  limit?: number; // cap how many cards show (logged-out view)
  showProfile?: boolean;
  loggedIn?: boolean;
  footer?: React.ReactNode;
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const visible = cases
  .filter(
    (c) =>
      (filter === "All" ||
        (filter === "Mystery"
          ? c.tags.includes("Mystery")
          : c.difficulty === filter)) &&
      c.title.toLowerCase().includes(query.trim().toLowerCase())
  )
  .slice(0, limit);

  return (
    <section>
      <div className="flex flex-wrap items-center justify-between gap-4 py-4">
        <h1 className="font-display text-3xl">Browse the Files</h1>

        <div className="flex w-full items-center gap-4 sm:w-auto">
           <div className="relative w-full sm:w-72">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-white/40" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search cases..."
              className="border-navy-edge bg-navy pl-9"
            />
          </div>
          {showProfile && <ProfileButton />}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-1 text-sm transition",
              filter === f
                ? "border-gold bg-gold text-ink"
                : "border-navy-edge bg-navy text-white/70 hover:text-white"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-white/50">No cases match your search.</p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((c) => (
            <CaseCard key={c.id} item={c} loggedIn={loggedIn} />
          ))}
        </div>
      )}
      {footer}
    </section>
  );
}