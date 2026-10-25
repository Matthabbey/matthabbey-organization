const phrase = "Software that works";

/** Decorative outlined marquee text between sections, as on the reference site. */
export function MarqueeText() {
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-border/60 py-6 md:py-8">
      <div className="flex w-max animate-marquee-slow whitespace-nowrap motion-reduce:animate-none">
        {Array.from({ length: 2 }).map((_, i) => (
          <p
            key={i}
            className="text-outline pr-10 font-display text-[clamp(3.5rem,11vw,9rem)] font-bold uppercase leading-none tracking-tight"
          >
            {phrase} · {phrase} · {phrase} ·&nbsp;
          </p>
        ))}
      </div>
    </div>
  );
}
