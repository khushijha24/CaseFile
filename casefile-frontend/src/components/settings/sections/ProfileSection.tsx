"use client";

import { useState } from "react";
import { User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { SectionProps } from "@/types/settings";
import SettingsPanel from "../SettingsPanel";
import { fieldClass } from "../styles";

export default function ProfileSection({ settings, update }: SectionProps) {
  const [preview, setPreview] = useState<string | null>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file)); // local preview only for now
  }

  return (
    <SettingsPanel title="Profile" description="Your identity in Casefile.">
      <div className="flex items-center gap-5">
        <div
          className="flex size-20 shrink-0 items-center justify-center rounded-full border-2 border-navy-edge bg-navy-soft bg-cover bg-center text-white/60"
          style={preview ? { backgroundImage: `url('${preview}')` } : undefined}
        >
          {!preview && <User className="size-8" />}
        </div>

        <div>
          <label
            htmlFor="avatar"
            className="inline-block cursor-pointer rounded-lg border border-navy-edge px-4 py-2 text-sm text-white/80 transition hover:border-gold/50 hover:text-gold"
          >
            Change photo
          </label>
          <input
            id="avatar"
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={handleFile}
          />
          <p className="mt-2 text-xs text-white/40">PNG or JPG, up to 2 MB.</p>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="displayName">Display name</Label>
          <Input
            id="displayName"
            value={settings.displayName}
            onChange={(e) => update("displayName", e.target.value)}
            placeholder="Your detective name"
            className={fieldClass}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            value={settings.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="bio">
              Short bio <span className="text-white/40">(optional)</span>
            </Label>
            <span className="text-xs text-white/40">{settings.bio.length}/160</span>
          </div>
          <Textarea
            id="bio"
            value={settings.bio}
            maxLength={160}
            onChange={(e) => update("bio", e.target.value)}
            placeholder="Tell other detectives a little about you."
            className={fieldClass}
          />
        </div>

        <p className="text-sm text-white/40">
          Member since {settings.memberSince}
        </p>
      </div>
    </SettingsPanel>
  );
}