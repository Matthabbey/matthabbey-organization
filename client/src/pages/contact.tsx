import { PageBanner } from "@/components/layout/page-banner";
import { Contact } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { Newsletter } from "@/components/sections/newsletter";
import { usePageMeta } from "@/hooks/use-page-meta";
import { pages, site } from "@/lib/site";

export default function ContactPage() {
  usePageMeta(pages.contact);
  return (
    <>
      <PageBanner
        eyebrow="Contact us"
        title="How can we help?"
        description={`Get a quotation, ask a question or book a call. We reply ${site.responseTime}.`}
        crumb="Contact"
      />
      <Contact />
      <FAQ />
      <Newsletter />
    </>
  );
}
