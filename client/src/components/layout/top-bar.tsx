import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter } from "lucide-react";
import { mailtoUrl, site, telUrl, whatsappUrl } from "@/lib/site";

const socials = [
  { name: "Facebook", href: site.social.facebook, icon: Facebook },
  { name: "Twitter", href: site.social.twitter, icon: Twitter },
  { name: "LinkedIn", href: site.social.linkedin, icon: Linkedin },
  { name: "Instagram", href: site.social.instagram, icon: Instagram },
];

/** Utility strip above the header: contact details and social links. */
export function TopBar() {
  return (
    <div className="border-b border-border bg-surface text-xs text-muted-foreground">
      <div className="container mx-auto flex h-9 items-center justify-between gap-4 px-6">
        <ul className="flex items-center gap-5">
          <li>
            <a href={telUrl} className="inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-foreground">
              <Phone size={13} className="text-brand-strong" aria-hidden="true" />
              {site.phone.display}
            </a>
          </li>
          <li className="hidden sm:block">
            <a href={mailtoUrl()} className="inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-foreground">
              <Mail size={13} className="text-brand-strong" aria-hidden="true" />
              {site.email}
            </a>
          </li>
          <li className="hidden lg:block">
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-foreground"
            >
              <MapPin size={13} className="text-brand-strong" aria-hidden="true" />
              {site.address.short}
            </a>
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          <li className="sm:hidden">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-foreground"
            >
              <MessageCircle size={13} className="text-brand-strong" aria-hidden="true" />
              WhatsApp
            </a>
          </li>
          {socials.map(({ name, href, icon: Icon }) => (
            <li key={name} className="hidden sm:block">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-sm transition-colors hover:text-foreground"
                aria-label={`${site.shortName} on ${name}`}
              >
                <Icon size={14} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
