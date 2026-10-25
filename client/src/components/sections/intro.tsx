import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/layout/motion";
import { services } from "@/data/services";

/** Split block: statement on the left, 2x3 service icon grid on the right (reference "About us" block). */
export function Intro() {
  return (
    <section aria-labelledby="intro-heading" className="bg-columns relative py-20 md:py-28">
      <div className="container mx-auto grid items-center gap-14 px-6 lg:grid-cols-2">
        <FadeIn>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-strong">What we do</p>
          <h2 id="intro-heading" className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Software that solves real problems
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            From a first MVP to the tools that run a growing company, we design and build software around the way your
            business actually works.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-8">
            <Link href="/services">
              See all services <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-2 lg:gap-y-14">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex flex-col items-center gap-4 rounded-lg text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon size={26} aria-hidden="true" />
                  </span>
                  <span className="max-w-[10rem] text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {service.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
