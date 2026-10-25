import { useId, useState, type FormEvent } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/layout/motion";
import { subscribeNewsletter, type NewsletterResult } from "@/lib/newsletter";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Boxed newsletter signup, as on the reference site. Works without a backend via an email handoff. */
export function Newsletter() {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<NewsletterResult | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const trap = (form.elements.namedItem("website") as HTMLInputElement | null)?.value;
    if (trap) {
      setResult({ status: "sent" });
      return;
    }
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setBusy(true);
    const res = await subscribeNewsletter(value);
    setBusy(false);
    if (res.status === "handoff") window.location.href = res.mailto;
    setResult(res);
  }

  return (
    <section aria-labelledby="newsletter-heading" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="hero-gradient relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center shadow-xl md:px-12 md:py-20">
            <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
            <div className="relative mx-auto max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-strong">Newsletter</p>
              <h2 id="newsletter-heading" className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                Occasional updates on what we're <span className="text-primary">building</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                A short note when we ship something worth sharing. No spam, and you can unsubscribe any time.
              </p>

              <div className="mt-8" aria-live="polite">
                {result?.status === "sent" ? (
                  <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground">
                    <CheckCircle2 size={18} className="text-brand" aria-hidden="true" /> Thanks, you're on the list.
                  </p>
                ) : result?.status === "handoff" || result?.status === "error" ? (
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      {result.status === "handoff"
                        ? "We've opened your email app with a subscription request. Send it and we'll add you."
                        : "We couldn't subscribe you automatically. Send us a quick email instead."}
                    </p>
                    <Button asChild variant="outline">
                      <a href={result.mailto}>
                        <Mail aria-hidden="true" /> Open the email
                      </a>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                    <div className="flex-1 text-left">
                      <label htmlFor={inputId} className="sr-only">
                        Email address
                      </label>
                      <Input
                        id={inputId}
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={error ? true : undefined}
                        aria-describedby={error ? `${inputId}-error` : undefined}
                        className="h-12 bg-background"
                      />
                      {error && (
                        <p id={`${inputId}-error`} className="mt-2 text-xs font-medium text-destructive">
                          {error}
                        </p>
                      )}
                    </div>
                    {/* Honeypot: hidden from people, visible to bots. */}
                    <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                      <label htmlFor={`${inputId}-website`}>Website</label>
                      <input id={`${inputId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
                    </div>
                    <Button type="submit" size="lg" variant="brand" disabled={busy}>
                      Subscribe
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
