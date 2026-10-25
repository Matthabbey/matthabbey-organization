import { useEffect } from "react";
import { trackPageView } from "@/lib/analytics";

interface PageMeta {
  title: string;
  description: string;
  /** Route path, e.g. "/services". Used for the canonical and og:url tags. */
  path: string;
}

function setContent(selector: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.content = value;
}

function setUrl(selector: string, attr: "href" | "content", path: string) {
  const el = document.head.querySelector<HTMLElement>(selector);
  if (!el) return;
  // Remember the deployment origin the build injected (may be "" for relative URLs).
  if (el.dataset.base === undefined) {
    el.dataset.base = (el.getAttribute(attr) ?? "").replace(/\/$/, "");
  }
  el.setAttribute(attr, `${el.dataset.base}${path}`);
}

/**
 * Per-page document title, description and canonical/og:url, plus the
 * analytics page view. Runs once per page mount, after lazy pages resolve,
 * so the title is final when the view is reported.
 */
export function usePageMeta({ title, description, path }: PageMeta) {
  useEffect(() => {
    document.title = title;
    setContent('meta[name="description"]', description);
    setContent('meta[property="og:title"]', title);
    setContent('meta[name="twitter:title"]', title);
    setContent('meta[property="og:description"]', description);
    setContent('meta[name="twitter:description"]', description);
    setUrl('link[rel="canonical"]', "href", path);
    setUrl('meta[property="og:url"]', "content", path);
    trackPageView({ path, title });
  }, [title, description, path]);
}
