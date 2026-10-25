import { mailtoUrl, site, whatsappUrl } from "@/lib/site";

export interface EnquiryValues {
  name: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
}

export type EnquiryResult =
  | { status: "sent" }
  | { status: "handoff"; whatsapp: string; mailto: string }
  | { status: "error"; whatsapp: string; mailto: string; reason: string };

/**
 * Optional HTTP endpoint that accepts a JSON POST of EnquiryValues
 * (for example a Formspree/Web3Forms URL or your own API). When it is not
 * configured the form hands the message off to WhatsApp and email instead,
 * so nothing is ever silently dropped on a static deployment.
 */
const ENDPOINT = (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined)?.trim();

export function buildSummary(v: EnquiryValues): string {
  const lines = [
    `Hello ${site.shortName}, I'd like to discuss a project.`,
    "",
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    v.phone ? `Phone: ${v.phone}` : null,
    `Service: ${v.service}`,
    v.budget ? `Budget: ${v.budget}` : null,
    "",
    v.message,
  ];
  return lines.filter((l) => l !== null).join("\n");
}

export function handoffLinks(v: EnquiryValues) {
  const summary = buildSummary(v);
  return {
    whatsapp: whatsappUrl(summary),
    mailto: mailtoUrl(`Project enquiry from ${v.name}`, summary),
  };
}

export async function submitEnquiry(values: EnquiryValues): Promise<EnquiryResult> {
  const links = handoffLinks(values);

  if (!ENDPOINT) {
    return { status: "handoff", ...links };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...values, source: "website" }),
    });
    if (!res.ok) {
      return { status: "error", ...links, reason: `Server responded ${res.status}` };
    }
    return { status: "sent" };
  } catch (err) {
    return { status: "error", ...links, reason: err instanceof Error ? err.message : "Network error" };
  }
}

/* ---- Service pre-fill: lets "Discuss this service" links pre-select the form field. ---- */

const PREFILL_EVENT = "enquiry:prefill-service";
let pendingService: string | null = null;

export function prefillService(title: string) {
  pendingService = title;
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: title }));
}

/** Consume a service chosen on another page before the contact form mounted. */
export function takePendingService(): string | null {
  const value = pendingService;
  pendingService = null;
  return value;
}

export function subscribePrefill(cb: (title: string) => void): () => void {
  const handler = (e: Event) => {
    cb((e as CustomEvent<string>).detail);
    pendingService = null;
  };
  window.addEventListener(PREFILL_EVENT, handler);
  return () => window.removeEventListener(PREFILL_EVENT, handler);
}
