import type { Case } from "@/types/case";

export const cases: Case[] = [
  {
    id: "the-lost-necklace",
    title: "The Lost Necklace",
    difficulty: "Medium",
    summary: "A priceless necklace goes missing from a private gala.",
    briefing:
      "During a charity gala at the Hartwell estate, a priceless necklace vanished from a locked display case. Only a handful of guests had access to the room, and each of them has a story to tell.",
    location: "Hartwell Estate, Ballroom",
    date: "3 Mar 2024",
    time: "10:15 PM",
    objective: "Find out who took the necklace and how they got past the lock.",
    image: "/cases/lost-necklace.png",
  },
  {
    id: "the-midnight-letter",
    title: "The Midnight Letter",
    difficulty: "Easy",
    summary: "A mysterious letter leads to a shocking truth.",
    briefing:
      "A mysterious letter is found in the college library, addressed to a student. The handwriting is unfamiliar, and there are no return details. As you dig deeper, more questions arise than answers.",
    location: "Riverside College, Library",
    date: "12 Nov 2024",
    time: "8:45 PM",
    objective: "Find out who sent the letter and what their real motive was.",
    image: "/cases/midnight-letter.png",
  },
  {
    id: "the-campus-murder",
    title: "The Campus Murder",
    difficulty: "Hard",
    summary: "A student is found dead in the university library.",
    briefing:
      "A student was found dead in the university library after closing time. The doors were locked from the inside, the security log has gaps, and every suspect has an alibi that almost holds up.",
    location: "Northfield University, Main Library",
    date: "21 Jan 2025",
    time: "11:30 PM",
    objective: "Identify the culprit and reconstruct what happened that night.",
    image: "/cases/campus-murder.png",
  },
];

export function getCase(id: string) {
  return cases.find((c) => c.id === id);
}