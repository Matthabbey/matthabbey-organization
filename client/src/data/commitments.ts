import { Eye, FileCheck2, KeyRound, LifeBuoy, type LucideIcon } from "lucide-react";

export interface Commitment {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** How Matthabbey works with every client. Only promise what you deliver. */
export const commitments: Commitment[] = [
  {
    icon: FileCheck2,
    title: "Clear scope before we start",
    description: "You get a written plan with timeline and cost. No work begins until you've agreed to it.",
  },
  {
    icon: Eye,
    title: "Progress you can see",
    description: "We build in short sprints and share working versions as we go, so there are no surprises at the end.",
  },
  {
    icon: KeyRound,
    title: "You own the code",
    description: "Source code, accounts and infrastructure are set up in your name and handed over with documentation.",
  },
  {
    icon: LifeBuoy,
    title: "Support after launch",
    description: "We stay on after go-live to fix issues and help with updates, and we can agree ongoing support if you need it.",
  },
];
