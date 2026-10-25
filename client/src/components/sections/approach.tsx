import { FadeIn } from "@/components/layout/motion";
import { Picture } from "@/components/layout/picture";
import { commitments } from "@/data/commitments";
import { photos } from "@/data/photos";
import { site } from "@/lib/site";

/** Split block: photo collage on the left, approach statement and three commitments on the right (reference "Our goal"). */
export function Approach() {
  const points = commitments.slice(0, 3);
  return (
    <section aria-labelledby="approach-heading" className="bg-surface py-20 md:py-28">
      <div className="container mx-auto grid items-center gap-14 px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn className="relative">
          <div className="grid grid-cols-[1.1fr_0.9fr] items-end gap-4">
            <Picture
              photo={photos.approachA}
              className="aspect-[4/5] overflow-hidden rounded-2xl"
              sizes="(min-width: 1024px) 30vw, 55vw"
            />
            <Picture
              photo={photos.approachB}
              className="aspect-[10/7] overflow-hidden rounded-2xl"
              sizes="(min-width: 1024px) 25vw, 40vw"
            />
          </div>
          <div
            className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full border border-border bg-card px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-strong shadow-lg md:block"
            aria-hidden="true"
          >
            Built in {site.address.region}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-strong">Our approach</p>
          <h2 id="approach-heading" className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Built around your business, not the other way round
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              {site.name} started in {site.address.region} with a simple idea: build software that actually solves
              problems. We work with startups and established businesses across Nigeria and beyond.
            </p>
            <p>
              Our approach is straightforward:{" "}
              <strong className="font-semibold text-foreground">understand what you need, build it well, and deliver on time.</strong>{" "}
              No unnecessary complexity and no bloated features, just clean, reliable software that does its job.
            </p>
          </div>

          <ul className="mt-10 space-y-5">
            {points.map((item) => (
              <li key={item.title} className="flex items-center gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary">
                  <item.icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
