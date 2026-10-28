"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Check,
  ChartColumn,
  Palette,
  Search,
  ShieldCheck,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AppearanceSection from "@/components/settings/sections/AppearanceSection";
import InvestigationSection from "@/components/settings/sections/InvestigationSection";
import NotificationsSection from "@/components/settings/sections/NotificationsSection";
import ProfileSection from "@/components/settings/sections/ProfileSection";
import ProgressSection from "@/components/settings/sections/ProgressSection";
import SecuritySection from "@/components/settings/sections/SecuritySection";
import { defaultSettings } from "@/data/settings";
import type { Settings, UpdateSetting } from "@/types/settings";
import { cn } from "@/lib/utils";

type SectionId =
  | "profile"
  | "security"
  | "investigation"
  | "appearance"
  | "progress"
  | "notifications";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "security", label: "Security", icon: ShieldCheck },
  { id: "investigation", label: "Investigation", icon: Search },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "progress", label: "Progress & Data", icon: ChartColumn },
  { id: "notifications", label: "Notifications", icon: Bell },
] as const;

export default function SettingsPage() {
  const [active, setActive] = useState<SectionId>("profile");
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [saved, setSaved] = useState(false);

  const update: UpdateSetting = (key, value) =>
    setSettings((prev) => ({ ...prev, [key]: value }));

  function handleSave() {
    console.log("save settings", settings); // backend call comes later
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="mx-auto flex h-screen w-full max-w-6xl flex-col px-6 pt-10 lg:px-10">
      {/* Header: back arrow left, save right */}
      <div className="flex shrink-0 items-start justify-between gap-4">
        <div className="flex items-center gap-4 lg:-translate-x-8">
          <Link
            href="/profile"
            aria-label="Back to profile"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-navy-edge bg-navy-soft text-white/70 transition hover:text-gold"
          >
            <ArrowLeft className="size-5" />
          </Link>
          <div>
            <h1 className="font-display text-3xl">Settings</h1>
            <p className="text-sm text-white/50">
              Manage your detective identity and experience.
            </p>
          </div>
        </div>

        <Button
          onClick={handleSave}
          className="bg-gold text-ink hover:bg-gold-dim"
        >
          {saved ? (
            <>
              <Check className="size-4" /> Saved
            </>
          ) : (
            "Save changes"
          )}
        </Button>
      </div>

      <div className="mt-8 grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] gap-6 lg:grid-cols-[230px_1fr] lg:grid-rows-1">
        {/* Section menu */}
        <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:-translate-x-8">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActive(id)}
              className={cn(
                "flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-left text-base transition",
                active === id
                  ? "bg-gold/15 text-gold"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon className="size-5" />
              {label}
            </button>
          ))}
        </nav>

        {/* Active section */}
        <div className="min-h-0 min-w-0 overflow-y-auto pb-10 scrollbar-subtle lg:pr-2">
          {active === "profile" && (
            <ProfileSection settings={settings} update={update} />
          )}
          {active === "security" && <SecuritySection />}
          {active === "investigation" && (
            <InvestigationSection settings={settings} update={update} />
          )}
          {active === "appearance" && (
            <AppearanceSection settings={settings} update={update} />
          )}
          {active === "progress" && <ProgressSection />}
          {active === "notifications" && (
            <NotificationsSection settings={settings} update={update} />
          )}
        </div>
      </div>
    </div>
  );
}