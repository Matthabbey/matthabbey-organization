import { mailtoUrl, site } from "@/lib/site";

export type NewsletterResult = { status: "sent" } | { status: "handoff"; mailto: string } | { status: "error"; mailto: string };

/**
 * Optional HTTP endpoint that accepts `{ email }` as JSON (a mailing-list
 * provider's form URL or your own API). Without it, subscribing opens a
 * pre-filled email so the request still reaches the inbox.
 */
const ENDPOINT = (import.meta.env.VITE_NEWSLETTER_ENDPOINT as string | undefined)?.trim();

export function subscriptionMailto(email: string): string {
  return mailtoUrl(
    "Newsletter subscription",
    `Hello ${site.shortName}, please add ${email} to your newsletter.`,
  );
}

export async function subscribeNewsletter(email: string): Promise<NewsletterResult> {
  const mailto = subscriptionMailto(email);
  if (!ENDPOINT) return { status: "handoff", mailto };
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email, source: "website" }),
    });
    return res.ok ? { status: "sent" } : { status: "error", mailto };
  } catch {
    return { status: "error", mailto };
  }
}
