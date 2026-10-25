import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/layout/motion";
import { useToast } from "@/hooks/use-toast";
import { services } from "@/data/services";
import { mailtoUrl, site, telUrl, whatsappUrl } from "@/lib/site";
import { submitEnquiry, subscribePrefill, takePendingService, type EnquiryResult } from "@/lib/contact";

const OTHER_SERVICE = "Something else";
const serviceOptions = [...services.map((s) => s.title), OTHER_SERVICE];

const formSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z.string().trim().max(32, "That phone number looks too long").optional().or(z.literal("")),
  service: z.string().min(1, "Please choose a service"),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more (at least 10 characters)"),
  /** Honeypot: real visitors never see or fill this field. */
  website: z.string().max(0).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

const defaultValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
  website: "",
};

const inputClass = "h-11 bg-background";

function normaliseService(title: string | null): string {
  if (!title) return "";
  return serviceOptions.includes(title) ? title : OTHER_SERVICE;
}

const nextSteps = [
  `We reply ${site.responseTime} to confirm we've received your message.`,
  "We arrange a short call to understand your goals and constraints.",
  "You receive a written plan with scope, timeline and cost.",
];

export function Contact() {
  const { toast } = useToast();
  const [result, setResult] = useState<EnquiryResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    // A service picked on another page ("Discuss this service") seeds the form on mount.
    defaultValues: { ...defaultValues, service: normaliseService(takePendingService()) },
  });

  useEffect(
    () =>
      subscribePrefill((title) => {
        form.setValue("service", normaliseService(title), { shouldDirty: true });
        setResult(null);
      }),
    [form],
  );

  async function onSubmit(values: FormValues) {
    if (values.website) {
      // Bot filled the honeypot: pretend success, send nothing.
      setResult({ status: "sent" });
      return;
    }

    const res = await submitEnquiry({
      name: values.name,
      email: values.email,
      phone: values.phone || undefined,
      service: values.service,
      budget: values.budget || undefined,
      message: values.message,
    });

    if (res.status === "handoff") {
      window.open(res.whatsapp, "_blank", "noopener,noreferrer");
    } else if (res.status === "error") {
      toast({
        title: "We couldn't send your message automatically",
        description: "Use the WhatsApp or email button below to send it directly.",
        variant: "destructive",
      });
    } else {
      toast({ title: "Message received", description: `Thanks, we'll reply ${site.responseTime}.` });
    }
    setResult(res);
  }

  function reset() {
    form.reset(defaultValues);
    setResult(null);
  }

  return (
    <Section
      id="contact"
      tone="muted"
      title="Got a project in mind?"
      description={`Tell us what you're working on. We'll get back to you ${site.responseTime} with an honest assessment of how we can help.`}
    >
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <FadeIn>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <MessageCircle size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-foreground">WhatsApp</p>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="rounded-sm text-muted-foreground transition-colors hover:text-foreground">
                  {site.phone.display}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Phone size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <a href={telUrl} className="rounded-sm text-muted-foreground transition-colors hover:text-foreground">
                  {site.phone.display}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Mail size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <a href={mailtoUrl()} className="rounded-sm [overflow-wrap:anywhere] text-muted-foreground transition-colors hover:text-foreground">
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <MapPin size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Location</p>
                <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-sm text-muted-foreground transition-colors hover:text-foreground">
                  {site.address.display}
                </a>
              </div>
            </li>
          </ul>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 text-base font-bold text-foreground">What happens next</h3>
            <ol className="space-y-3 text-sm text-muted-foreground">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8" aria-live="polite">
            {result ? (
              <ResultPanel result={result} onReset={reset} />
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input autoComplete="name" placeholder="Your full name" className={inputClass} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" inputMode="email" autoComplete="email" placeholder="you@company.com" className={inputClass} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Phone <span className="font-normal text-muted-foreground">(optional)</span>
                          </FormLabel>
                          <FormControl>
                            <Input type="tel" inputMode="tel" autoComplete="tel" placeholder="+234 ..." className={inputClass} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What do you need?</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className={inputClass}>
                                <SelectValue placeholder="Choose a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {serviceOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Budget <span className="font-normal text-muted-foreground">(optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="A range is fine, or 'not sure yet'" className={inputClass} {...field} />
                        </FormControl>
                        <FormDescription>Helps us suggest the right scope for a first release.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project details</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="What are you building, who is it for, and when do you need it?"
                            className="min-h-[130px] bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Honeypot: hidden from people, visible to bots. */}
                  <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="contact-website">Website</label>
                    <input id="contact-website" type="text" tabIndex={-1} autoComplete="off" {...form.register("website")} />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" aria-hidden="true" /> Preparing your message
                      </>
                    ) : (
                      <>
                        <Send aria-hidden="true" /> Send enquiry
                      </>
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    We reply {site.responseTime}. No spam, no sales pitch.
                  </p>
                </form>
              </Form>
            )}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function ResultPanel({ result, onReset }: { result: EnquiryResult; onReset: () => void }) {
  if (result.status === "sent") {
    return (
      <div className="py-6 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-brand" aria-hidden="true" />
        <h3 className="mb-2 text-2xl font-bold text-foreground">Message received</h3>
        <p className="mb-6 text-muted-foreground">Thanks for getting in touch. We'll reply {site.responseTime}.</p>
        <Button variant="outline" onClick={onReset}>Send another message</Button>
      </div>
    );
  }

  const failed = result.status === "error";
  return (
    <div className="py-2">
      <CheckCircle2 className="mb-4 h-10 w-10 text-brand" aria-hidden="true" />
      <h3 className="mb-2 text-2xl font-bold text-foreground">
        {failed ? "Send your message directly" : "Your message is ready"}
      </h3>
      <p className="mb-6 text-muted-foreground">
        {failed
          ? "We couldn't deliver it automatically. Send it with one tap on WhatsApp or by email; everything you typed is already filled in."
          : "We've opened WhatsApp with your details filled in. If it didn't open, use one of the buttons below. Everything you typed is included."}
      </p>
      <div className="flex flex-col gap-3">
        <Button asChild size="lg" className="bg-whatsapp text-white hover:bg-whatsapp-dark">
          <a href={result.whatsapp} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" /> Send on WhatsApp
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={result.mailto}>
            <Mail aria-hidden="true" /> Send by email instead
          </a>
        </Button>
        <Button variant="ghost" onClick={onReset}>Edit my message</Button>
      </div>
    </div>
  );
}
