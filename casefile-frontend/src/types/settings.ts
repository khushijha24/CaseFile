import type { Difficulty } from "@/types/case";

export interface Settings {
  // Profile
  displayName: string;
  email: string;
  bio: string;
  memberSince: string;
  // Investigation
  defaultDifficulty: Difficulty;
  showHints: boolean;
  confirmAccusation: boolean;
  soundEffects: boolean;
  // Appearance
  theme: "dark" | "light";
  density: "comfortable" | "compact";
  reduceMotion: boolean;
  // Notifications
  notifyNewCases: boolean;
  notifyReminders: boolean;
  notifyUpdates: boolean;
}

export type UpdateSetting = <K extends keyof Settings>(
  key: K,
  value: Settings[K]
) => void;

export interface SectionProps {
  settings: Settings;
  update: UpdateSetting;
}