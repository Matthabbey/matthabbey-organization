import { PageBanner } from "@/components/layout/page-banner";
import { Work } from "@/components/sections/projects";
import { CtaBand } from "@/components/sections/cta-band";
import { usePageMeta } from "@/hooks/use-page-meta";
import { pages } from "@/lib/site";

export default function WorkPage() {
  usePageMeta(pages.work);
  return (
    <>
      <PageBanner
        eyebrow="Our work"
        title="The kind of software we build"
        description="We don't publish client names without their permission. Here is what we build most often, and what each system usually includes."
        crumb="Work"
      />
      <Work />
      <CtaBand />
    </>
  );
}
