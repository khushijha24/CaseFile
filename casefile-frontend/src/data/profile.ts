import type { Profile } from "@/types/profile";

export const profile: Profile = {
  username: "Detective_You",
  title: "Aspiring Detective",
  memberSince: "Sep 2024",
  stats: {
    casesPlayed: 5,
    solved: 3,
    accuracy: 72,
    rank: "Novice",
  },
  recent: [
    {
      caseId: "the-midnight-letter",
      status: "Solved",
      score: 85,
      date: "12 Nov 2024",
    },
    {
      caseId: "the-lost-necklace",
      status: "In Progress",
      score: 45,
      date: "10 Nov 2024",
    },
  ],
};