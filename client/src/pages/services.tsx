import { PageBanner } from "@/components/layout/page-banner";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Commitments } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";
import { usePageMeta } from "@/hooks/use-page-meta";
import { pages } from "@/lib/site";

export default function ServicesPage() {
  usePageMeta(pages.services);
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="Highly practical software development services"
        description="Web and mobile apps, AI and automation, MVPs, design, blockchain and security reviews, delivered by one team from scope to launch."
        crumb="Services"
      />
      <Services />
      <Process />
      <Commitments />
      <CtaBand />
    </>
  );
}
