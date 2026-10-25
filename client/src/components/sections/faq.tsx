import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/layout/motion";
import { site } from "@/lib/site";

const faqs = [
  {
    question: "How do we get started?",
    answer: `Tell us about your project through the form below or on WhatsApp. We reply ${site.responseTime}, arrange a short call to understand what you need, and send you a written plan with scope, timeline and cost.`,
  },
  {
    question: "How do you charge?",
    answer:
      "We quote a fixed price for an agreed scope, so you know the cost before work starts. Larger projects are broken into milestones that are priced and delivered one at a time.",
  },
  {
    question: "Will I see progress while you build?",
    answer:
      "Yes. We work in short sprints and share working versions regularly, so you can test what's been built and give feedback before we move on.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. Source code, hosting and third-party accounts are set up in your name, and we hand everything over with documentation when the project is complete.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We deploy your product, make sure it runs smoothly and stay on to fix issues and help with updates. If you want ongoing support or new features, we agree that separately.",
  },
  {
    question: "Can you work with a team outside Lagos?",
    answer: `Yes. We're based in ${site.address.display} and work remotely with clients wherever they are, using video calls and shared tools to keep communication simple.`,
  },
  {
    question: "Can you review or take over an existing product?",
    answer:
      "Yes. We start with a review of the codebase and infrastructure, tell you honestly what we find, and recommend whether to improve what you have or rebuild parts of it.",
  },
];

export function FAQ() {
  return (
    <Section
      id="faq"
      align="center"
      eyebrow="FAQ"
      title="Questions we're often asked"
      description="Still have questions? Ask us anything in the contact form below."
    >
      <FadeIn className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6 shadow-sm">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`} className="border-border last:border-b-0">
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </Section>
  );
}
