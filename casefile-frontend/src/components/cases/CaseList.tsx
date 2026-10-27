"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import type { Case, Difficulty } from "@/types/case";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import CaseCard from "./CaseCard";
import ProfileButton from "@/components/layout/ProfileButton";

const filters: ("All" | Difficulty)[] = ["All", "Easy", "Medium", "Hard"];

export default function CaseList({ cases }: { cases: Case[] }) {
  const [filter, setFilter] = useState<"All" | Difficulty>("All");
  const [query, setQuery] = useState("");

  const visible = cases.filter(
    (c) =>
      (filter === "All" || c.difficulty === filter) &&
      c.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <section>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-3xl">Available Cases</h1>

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
          <ProfileButton />
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
        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((c) => (
            <CaseCard key={c.id} item={c} />
          ))}
        </div>
      )}
    </section>
  );
}