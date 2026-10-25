import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/layout/motion";
import { cta, site, whatsappUrl } from "@/lib/site";

/** Full-width call to action used at the foot of inner pages. */
export function CtaBand() {
  return (
    <section aria-labelledby="cta-band-heading" className="bg-primary py-16 text-primary-foreground md:py-20">
      <div className="container mx-auto px-6">
        <FadeIn className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 id="cta-band-heading" className="text-3xl font-bold sm:text-4xl">
              Got a project in mind?
            </h2>
            <p className="mt-3 text-primary-foreground/80">
              Tell us what you're working on. We reply {site.responseTime} with an honest assessment of how we can help.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link href={cta.href}>
                {cta.label} <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" /> WhatsApp us
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
