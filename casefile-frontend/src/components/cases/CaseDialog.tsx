"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Case } from "@/types/case";
import DifficultyBadge from "./DifficultyBadge";

export default function CaseDialog({
  item,
  loggedIn,
  children,
}: {
  item: Case;
  loggedIn: boolean;
  children: React.ReactNode;
}) {
  const details = [
    { icon: MapPin, label: "Location", value: item.location },
    { icon: Calendar, label: "Date", value: item.date },
    { icon: Clock, label: "Time", value: item.time },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-h-[90vh] gap-0 overflow-y-auto border-navy-edge bg-ink p-0 scrollbar-subtle sm:max-w-3xl">
        <div className="relative h-56 bg-navy-soft">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${item.image}')` }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink to-transparent" />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <DialogTitle className="font-display text-3xl">
              {item.title}
            </DialogTitle>
            <DifficultyBadge difficulty={item.difficulty} />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_240px]">
            <div>
              <h3 className="font-display text-lg text-gold">Case Briefing</h3>
              <DialogDescription className="mt-2 text-base leading-relaxed text-white/70">
                {item.briefing}
              </DialogDescription>

              <Button
                asChild
                size="lg"
                className="mt-6 bg-gold text-ink hover:bg-gold-dim"
              >
                <Link
                  href={
                    loggedIn ? `/cases/${item.id}/investigate` : "/sign-in"
                  }
                >
                  {loggedIn ? "Start Investigation" : "Sign in to investigate"}
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              <div className="space-y-4 rounded-xl border border-navy-edge bg-navy p-4">
                {details.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-3">
                    <Icon className="mt-0.5 size-4 shrink-0 text-gold" />
                    <div>
                      <p className="text-xs text-white/40">{label}</p>
                      <p className="text-sm text-white/90">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-navy-edge bg-navy p-4">
                <p className="text-xs text-white/40">Your Objective</p>
                <p className="mt-1 text-sm text-white/90">{item.objective}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}