export type ActivityType = "evidence" | "case" | "theory";

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  detail: string;
}