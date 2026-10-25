import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/layout/motion";
import { services } from "@/data/services";
import { prefillService } from "@/lib/contact";

export function Services() {
  return (
    <Section
      id="services"
      title="What we do"
      description="Here's how we help businesses like yours. Pick what you need, or talk to us about a custom solution."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <FadeIn key={service.slug} delay={index * 0.06} className="h-full">
            <article
              id={service.slug}
              className="group flex h-full scroll-mt-28 flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <service.icon size={24} aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">{service.title}</h3>
              <p className="mb-5 leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mb-6 space-y-2 text-sm text-foreground/85">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand-strong" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                onClick={() => prefillService(service.title)}
                className="mt-auto inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-primary transition-colors hover:underline"
              >
                Discuss this service
                <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
                <span className="sr-only">: {service.title}</span>
              </Link>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
