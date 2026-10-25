/**
 * Self-assessed expertise shown as bars on the home page, as on the reference site.
 * These are Matthabbey's own ratings (0-100), not third-party scores.
 * TODO(owner): confirm or adjust these values before publishing.
 */
export interface Skill {
  label: string;
  level: number;
}

export const expertise: Skill[] = [
  { label: "Web & mobile development", level: 95 },
  { label: "API & backend engineering", level: 92 },
  { label: "UI/UX design", level: 88 },
  { label: "Cloud deployment & DevOps", level: 85 },
];

/**
 * Headline numbers for the stats row (e.g. "15+" / "Projects delivered").
 * The row renders only when this list is non-empty. Add real, defensible
 * figures only; invented numbers damage trust.
 */
export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [];
