import { services } from "@/data/services";
import { site } from "@/lib/site";

const items = [...services.map((s) => s.title), `${site.address.region}, ${site.address.country}`, "Software that works"];

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-8 pr-8 font-display text-sm font-semibold uppercase tracking-[0.18em] md:text-base"
        >
          {item}
          <span className="h-1.5 w-1.5 rounded-full bg-brand-foreground/70" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

/** Brand-green scrolling strip of service keywords beneath the hero. */
export function Ticker() {
  return (
    <section aria-label="What we offer" className="overflow-hidden bg-brand py-3.5 text-brand-foreground">
      <div className="flex w-max animate-marquee motion-reduce:animate-none motion-reduce:w-auto motion-reduce:flex-wrap">
        <Track />
        <Track hidden />
      </div>
    </section>
  );
}
