import { ArrowUpRight, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/layout/motion";
import { Picture } from "@/components/layout/picture";
import { photos } from "@/data/photos";
import { site, telUrl } from "@/lib/site";

/** Rotating circular label overlapping the hero photo, like the reference's "digital agency" badge. */
function RotatingBadge() {
  const text = `Software studio · ${site.address.region} · `;
  return (
    <div
      aria-hidden="true"
      className="absolute -top-14 right-6 hidden h-28 w-28 items-center justify-center md:flex lg:right-16"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow motion-reduce:animate-none">
        <defs>
          <path id="hero-badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-foreground font-display text-[10.5px] font-semibold uppercase tracking-[0.22em]">
          <textPath href="#hero-badge-circle">{text + text}</textPath>
        </text>
      </svg>
      <span className="absolute h-2.5 w-2.5 rounded-full bg-brand" />
    </div>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="hero-gradient relative overflow-hidden">
      <div className="bg-columns pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

      <div className="container relative mx-auto px-6 pt-16 pb-14 md:pt-24 md:pb-20">
        <FadeIn immediate className="max-w-4xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground shadow-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Taking on new projects
          </p>

          <h1
            id="hero-heading"
            className="text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            Software that works <span className="text-primary">for your business.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {site.shortName} designs and builds web apps, mobile products and automation for startups and growing
            businesses. We scope it clearly, build it well and deliver on time.
          </p>

          <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Button asChild variant="outline" size="lg" className="border-foreground/30">
              <Link href="/contact">
                Contact us <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
            <a
              href={telUrl}
              className="inline-flex items-center gap-3 rounded-full text-base font-semibold text-foreground transition-colors hover:text-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card">
                <Phone size={18} aria-hidden="true" />
              </span>
              {site.phone.display}
            </a>
          </div>
        </FadeIn>
      </div>

      <FadeIn immediate delay={0.15} className="relative">
        <RotatingBadge />
        <Picture
          photo={photos.hero}
          priority
          sizes="100vw"
          className="h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px]"
          imgClassName="object-[50%_40%]"
        />
      </FadeIn>
    </section>
  );
}
