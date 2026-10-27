export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Case {
  id: string;
  title: string;
  difficulty: Difficulty;
  summary: string; // short text for the card
  briefing: string; // full text for the briefing page
  location: string;
  date: string;
  time: string;
  objective: string;
  image: string; // path inside /public
}