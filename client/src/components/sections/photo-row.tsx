import { FadeIn } from "@/components/layout/motion";
import { Picture } from "@/components/layout/picture";
import { photos } from "@/data/photos";

/** Three-up photo strip between sections, as on the reference site. */
export function PhotoRow() {
  return (
    <section aria-label="Working with software teams" className="py-6 md:py-8">
      <div className="container mx-auto px-6">
        <ul className="grid gap-4 sm:grid-cols-3">
          {photos.row.map((photo, index) => (
            <FadeIn as="li" key={photo.jpg} delay={index * 0.08}>
              <Picture
                photo={photo}
                className="aspect-[4/5] overflow-hidden rounded-2xl"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
