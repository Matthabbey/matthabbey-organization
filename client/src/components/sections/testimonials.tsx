import { Star } from "lucide-react";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/layout/motion";
import { commitments } from "@/data/commitments";

/**
 * Real client quotes go here, with the client's permission.
 * The testimonials block renders only when this list is non-empty,
 * so no placeholder testimonials ever ship.
 */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [];

/** "What clients say" grid. Renders nothing until real testimonials exist. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <Section id="testimonials" eyebrow="Testimonials" title="What clients say about us">
      <ul className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <FadeIn
            as="li"
            key={t.author}
            delay={index * 0.08}
            className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <div className="mb-5 flex gap-1 text-brand" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mb-6 flex-1 text-lg leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
            <footer>
              <p className="font-semibold text-foreground">{t.author}</p>
              <p className="text-sm text-muted-foreground">
                {t.role}, {t.company}
              </p>
            </footer>
          </FadeIn>
        ))}
      </ul>
    </Section>
  );
}

/** "What every client gets" commitment cards (used on the Services page). */
export function Commitments() {
  return (
    <Section
      id="commitments"
      tone="muted"
      align="center"
      eyebrow="Our commitments"
      title="What every client gets"
      description="We'd rather earn your trust with how we work than with claims we can't back up."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {commitments.map((item, index) => (
          <FadeIn
            as="li"
            key={item.title}
            delay={index * 0.06}
            className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 text-left shadow-sm"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <item.icon size={24} aria-hidden="true" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </FadeIn>
        ))}
      </ul>
    </Section>
  );
}
