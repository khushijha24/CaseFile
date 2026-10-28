export type CaseStatus = "Solved" | "In Progress";

export interface RecentCase {
  caseId: string; // matches an id in data/cases.ts
  status: CaseStatus;
  score: number; // percentage
  date: string;
}

export interface Profile {
  username: string;
  title: string;
  avatar?: string; // path inside /public, optional
  memberSince: string;
  stats: {
    casesPlayed: number;
    solved: number;
    accuracy: number; // percentage
    rank: string;
  };
  recent: RecentCase[];
}