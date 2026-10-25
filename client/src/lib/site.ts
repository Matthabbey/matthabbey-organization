/**
 * Single source of truth for business facts used across the site.
 * Keep these in sync with the JSON-LD block in client/index.html.
 */
export const site = {
  name: "Matthabbey Solutions Services",
  shortName: "Matthabbey",
  tagline: "Software that works for your business.",
  description:
    "Matthabbey Solutions Services is a Lagos-based software development team building web apps, mobile products, AI automation and custom tools for startups and growing businesses.",
  mission:
    "We build web apps, mobile products and custom tools that help businesses in Nigeria and beyond run better, from a first launch to the systems that keep a company growing.",
  address: {
    locality: "Lekki",
    region: "Lagos",
    country: "Nigeria",
    display: "Lekki, Lagos, Nigeria",
    short: "Lekki, Lagos, NG",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lekki%2C%20Lagos%2C%20Nigeria",
  },
  phone: {
    display: "+234 803 620 2050",
    e164: "+2348036202050",
  },
  email: "matthabbeysolutionsservices@gmail.com",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100083652456844",
    twitter: "https://twitter.com/matthabbey",
    linkedin: "https://www.linkedin.com/in/matthabbey-solutions-a87a7b3b1/",
    instagram: "https://instagram.com/matthabbeysolutionsservices",
  },
  responseTime: "within 24 hours",
} as const;

export const nav = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
] as const;

export const cta = { label: "Get a Quote", href: "/contact" } as const;

export const pages = {
  home: {
    path: "/",
    title: `${site.name} | Software Development in Lagos`,
    description: `${site.description} Book a free consultation.`,
  },
  services: {
    path: "/services",
    title: `Services | ${site.name}`,
    description:
      "Web and mobile apps, AI and automation, MVP development, UI/UX design, blockchain and security audits from a Lagos-based software team.",
  },
  work: {
    path: "/work",
    title: `Our Work | ${site.name}`,
    description:
      "The kinds of software Matthabbey builds most often: fintech and payments, health and records, e-commerce and internal tools.",
  },
  contact: {
    path: "/contact",
    title: `Contact | ${site.name}`,
    description: `Tell us about your project and get a reply ${site.responseTime}. WhatsApp, phone and email in ${site.address.display}.`,
  },
} as const;

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.phone.e164.replace("+", "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoUrl(subject?: string, body?: string): string {
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${site.email}${params.length ? `?${params.join("&")}` : ""}`;
}

export const telUrl = `tel:${site.phone.e164}`;
