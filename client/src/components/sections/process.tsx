import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/layout/motion";

const steps = [
  {
    title: "We talk it through",
    description:
      "You tell us what you need. We ask questions, figure out the scope, and put together a clear plan with timelines and costs.",
  },
  {
    title: "Design & planning",
    description:
      "We map out the user experience, create mockups, and decide on the tech stack before writing any code.",
  },
  {
    title: "Build & test",
    description:
      "We develop in short sprints and share progress regularly. You see what's being built and can give feedback as we go.",
  },
  {
    title: "Launch & support",
    description:
      "We deploy your product, make sure everything runs smoothly, and stick around to help with updates and fixes.",
  },
];

export function Process() {
  return (
    <Section
      id="process"
      tone="muted"
      align="center"
      eyebrow="Process"
      title="How we work"
      description="No surprises, no disappearing acts. Here's what working with us looks like from start to finish."
    >
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div
          className="absolute left-0 right-0 top-6 hidden h-px bg-linear-to-r from-transparent via-border to-transparent lg:block"
          aria-hidden="true"
        />
        {steps.map((step, index) => (
          <FadeIn as="li" key={step.title} delay={index * 0.08} className="relative flex h-full flex-col">
            <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background font-display text-lg font-bold text-primary shadow-[0_0_0_6px_hsl(var(--background))]">
              {index + 1}
            </div>
            <div className="flex-1 rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}
