import { ChevronRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";
import { cta, nav, site, whatsappUrl } from "@/lib/site";

const socials = [
  { name: "Facebook", href: site.social.facebook, icon: Facebook },
  { name: "Twitter", href: site.social.twitter, icon: Twitter },
  { name: "LinkedIn", href: site.social.linkedin, icon: Linkedin },
  { name: "Instagram", href: site.social.instagram, icon: Instagram },
];

const support = [
  { name: "FAQs", href: "/contact#faq", external: false },
  { name: cta.label, href: cta.href, external: false },
  { name: "Chat on WhatsApp", href: whatsappUrl(), external: true },
];

function FooterLink({ href, external, children }: { href: string; external?: boolean; children: string }) {
  const className = "inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-foreground";
  const icon = <ChevronRight size={14} className="text-brand-strong" aria-hidden="true" />;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {icon}
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {icon}
      {children}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <img
              src="/images/logo.png"
              alt={site.name}
              width={291}
              height={92}
              loading="lazy"
              decoding="async"
              className="mb-6 h-10 w-auto dark:hidden"
            />
            <img
              src="/images/logo-dark.png"
              alt=""
              aria-hidden="true"
              width={291}
              height={92}
              loading="lazy"
              decoding="async"
              className="mb-6 hidden h-10 w-auto dark:block"
            />
            <p className="max-w-md leading-relaxed text-muted-foreground">{site.mission}</p>
          </div>

          <div>
            <h2 className="mb-6 text-base font-bold uppercase tracking-wider text-foreground">Quick links</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {nav.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-base font-bold uppercase tracking-wider text-foreground">Support</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {support.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href} external={link.external}>
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-border py-8 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider">Follow us</span>
            <ul className="flex items-center gap-2">
              {socials.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:text-primary"
                    aria-label={`${site.shortName} on ${name}`}
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p>
            © {year} <span className="font-semibold text-foreground">{site.name}</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
