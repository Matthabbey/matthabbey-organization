import { ArrowUpRight, Landmark, HeartPulse, ShoppingBag, Workflow, type LucideIcon } from "lucide-react";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/layout/motion";
import { Badge } from "@/components/ui/badge";

/**
 * Real case studies go here. Each entry needs the client's permission to be named.
 * When this list is non-empty the capability cards below are replaced by the case studies.
 */
export interface CaseStudy {
  title: string;
  client: string;
  category: string;
  /** What changed for the client, in their own words or with a figure you can stand behind. */
  outcome: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
  tags: string[];
  href?: string;
}

export const caseStudies: CaseStudy[] = [];

interface Capability {
  icon: LucideIcon;
  title: string;
  summary: string;
  includes: string[];
  stack: string[];
}

const capabilities: Capability[] = [
  {
    icon: Landmark,
    title: "Fintech & payments",
    summary: "Products that move money need to be fast, auditable and secure from day one.",
    includes: ["Wallets, transfers and transaction history", "Payment gateway and bank integrations", "KYC flows, roles and audit logs"],
    stack: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    icon: HeartPulse,
    title: "Health & records",
    summary: "Clinical and patient-facing tools where privacy and reliability come first.",
    includes: ["Patient records and appointment booking", "Dashboards for clinicians and admins", "AI-assisted review of documents and images"],
    stack: ["React", "Python", "Cloud storage"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & retail",
    summary: "Storefronts and back-offices built to sell, not just to look good.",
    includes: ["Catalogue, cart and checkout", "Inventory, orders and delivery tracking", "Payments and customer accounts"],
    stack: ["Next.js", "Node.js", "Paystack / Stripe"],
  },
  {
    icon: Workflow,
    title: "Internal tools & automation",
    summary: "Replace spreadsheets and manual steps with software your team actually uses.",
    includes: ["Admin panels and reporting", "Workflow automation and integrations", "Chat assistants trained on your data"],
    stack: ["React", "Node.js", "AI APIs"],
  },
];

function CapabilityGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {capabilities.map((item, index) => (
        <FadeIn key={item.title} delay={index * 0.06} className="h-full">
          <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-md md:p-8">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <item.icon size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
            </div>
            <p className="mb-5 leading-relaxed text-muted-foreground">{item.summary}</p>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Typically includes</p>
            <ul className="mb-6 list-disc space-y-1.5 pl-5 text-sm text-foreground/85 marker:text-brand">
              {item.includes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <ul className="mt-auto flex flex-wrap gap-2" aria-label="Typical technology">
              {item.stack.map((tag) => (
                <li key={tag} className="rounded-md border border-border bg-muted px-2 py-1 font-mono text-xs text-muted-foreground">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}

function CaseStudyGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {caseStudies.map((study, index) => (
        <FadeIn key={study.title} delay={index * 0.06} className="h-full">
          <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-md">
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={study.image.src}
                alt={study.image.alt}
                width={study.image.width}
                height={study.image.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <Badge variant="secondary" className="absolute left-4 top-4">{study.category}</Badge>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="mb-1 text-sm font-medium text-muted-foreground">{study.client}</p>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {study.href ? (
                  <a href={study.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-sm hover:text-primary">
                    {study.title} <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : (
                  study.title
                )}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{study.description}</p>
              <p className="mb-5 rounded-lg bg-accent px-3 py-2 text-sm font-medium text-accent-foreground">{study.outcome}</p>
              <ul className="mt-auto flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <li key={tag} className="rounded-md border border-border bg-muted px-2 py-1 font-mono text-xs text-muted-foreground">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}

export function Work() {
  const hasCaseStudies = caseStudies.length > 0;
  return (
    <Section
      id="work"
      title={hasCaseStudies ? "Projects we've shipped" : "Four kinds of systems we build most often"}
      description={
        hasCaseStudies
          ? "A selection of recent projects, published with each client's permission."
          : "Each card shows what the system usually includes and the technology we typically reach for."
      }
    >
      {hasCaseStudies ? <CaseStudyGrid /> : <CapabilityGrid />}
    </Section>
  );
}
