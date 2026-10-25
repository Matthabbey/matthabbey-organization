import { Hero } from "@/components/sections/hero";
import { Ticker } from "@/components/sections/ticker";
import { Intro } from "@/components/sections/intro";
import { Approach } from "@/components/sections/approach";
import { MarqueeText } from "@/components/sections/marquee-text";
import { PhotoRow } from "@/components/sections/photo-row";
import { Expertise } from "@/components/sections/expertise";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";
import { usePageMeta } from "@/hooks/use-page-meta";
import { pages } from "@/lib/site";

export default function Home() {
  usePageMeta(pages.home);
  return (
    <>
      <Hero />
      <Ticker />
      <Intro />
      <Approach />
      <MarqueeText />
      <PhotoRow />
      <Expertise />
      <Testimonials />
      <Newsletter />
    </>
  );
}
