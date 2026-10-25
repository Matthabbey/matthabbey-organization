/**
 * Thin wrapper around the Google tag (gtag.js) loaded in client/index.html.
 * The measurement ID lives only in index.html. Everything here is a no-op in
 * development and when the tag is blocked, so analytics can never break the UI.
 */
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type Params = Record<string, string | number | boolean | undefined>;

function gtag(...args: unknown[]) {
  if (import.meta.env.DEV) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  try {
    window.gtag(...args);
  } catch {
    /* never let analytics surface as an app error */
  }
}

/** Report a virtual page view after client-side navigation. */
export function trackPageView({ path, title }: { path: string; title: string }) {
  gtag("event", "page_view", {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

/** Report a conversion or interaction event. */
export function trackEvent(name: string, params: Params = {}) {
  gtag("event", name, params);
}
