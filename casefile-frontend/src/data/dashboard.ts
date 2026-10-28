import type { Activity } from "@/types/dashboard";

export const activeCaseId = "the-midnight-letter";

export const activity: Activity[] = [
  {
    id: "a1",
    type: "evidence",
    title: "Evidence reviewed",
    detail: "You examined the witness statement.",
  },
  {
    id: "a2",
    type: "case",
    title: "Case opened",
    detail: "The Midnight Letter was added to your cases.",
  },
  {
    id: "a3",
    type: "theory",
    title: "Theory saved",
    detail: "You saved a new theory for The Midnight Letter.",
  },
];