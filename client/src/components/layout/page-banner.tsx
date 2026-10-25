import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { FadeIn } from "@/components/layout/motion";

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** Breadcrumb label; defaults to the title. */
  crumb?: string;
}

/** Inner-page header: eyebrow, H1, lead and breadcrumb, like the reference's page banners. */
export function PageBanner({ eyebrow, title, description, crumb }: PageBannerProps) {
  return (
    <section className="hero-gradient relative border-b border-border bg-surface py-16 md:py-24">
      <div className="bg-columns pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container relative mx-auto px-6">
        <FadeIn immediate>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="rounded-sm transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={14} />
              </li>
              <li aria-current="page" className="text-foreground">
                {crumb ?? title}
              </li>
            </ol>
          </nav>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-strong">{eyebrow}</p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{description}</p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
