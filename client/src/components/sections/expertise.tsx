import { Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/layout/motion";
import { expertise, stats } from "@/data/expertise";
import { mailtoUrl, site } from "@/lib/site";

function SkillBar({ label, level, index }: { label: string; level: number; index: number }) {
  const reduce = useReducedMotion();
  return (
    <li>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className="font-semibold text-foreground">{label}</span>
        <span className="font-display text-sm font-bold text-foreground">{level}%</span>
      </div>
      <div
        role="meter"
        aria-label={`${label}: ${level} out of 100`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={level}
        className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
      >
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={reduce ? { width: `${level}%` } : { width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
        />
      </div>
    </li>
  );
}

/** "Our expertise" split with self-rated skill bars, followed by the optional stats row. */
export function Expertise() {
  return (
    <section aria-labelledby="expertise-heading" className="bg-columns relative py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <FadeIn>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-strong">Our expertise</p>
            <h2 id="expertise-heading" className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Modern engineering you can rely on
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              We work across the full stack, from interface design to APIs and deployment, so one team can take your
              product from idea to production.
            </p>
            <a
              href={mailtoUrl()}
              className="mt-8 inline-flex items-center gap-3 rounded-full text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card">
                <Mail size={18} aria-hidden="true" />
              </span>
              <span className="[overflow-wrap:anywhere]">{site.email}</span>
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ul className="space-y-7">
              {expertise.map((skill, index) => (
                <SkillBar key={skill.label} index={index} {...skill} />
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">Self-assessed confidence across our core disciplines.</p>
          </FadeIn>
        </div>

        {stats.length > 0 && (
          <FadeIn className="mt-20 md:mt-28">
            <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <li key={stat.label} className="border-l-2 border-brand pl-8">
                  <p className="font-display text-5xl font-bold text-foreground md:text-6xl">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
