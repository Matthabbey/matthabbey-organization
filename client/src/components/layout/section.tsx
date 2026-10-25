import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/layout/motion";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "muted";
  className?: string;
  headerClassName?: string;
  children: ReactNode;
  /** Accessible label when the section has no visible title. */
  ariaLabel?: string;
}

/**
 * Standard page section: consistent vertical rhythm, container width,
 * heading hierarchy and scroll offset for the fixed header.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
  headerClassName,
  children,
  ariaLabel,
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={title && headingId ? headingId : undefined}
      aria-label={!title ? ariaLabel : undefined}
      className={cn(
        "relative isolate scroll-mt-20 py-20 md:py-28",
        tone === "muted" && "bg-surface",
        className,
      )}
    >
      <div className="container mx-auto px-6">
        {(title || description) && (
          <FadeIn
            className={cn(
              "mb-12 md:mb-16 max-w-2xl",
              align === "center" && "mx-auto text-center",
              headerClassName,
            )}
          >
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-strong">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                id={headingId}
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-foreground"
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{description}</p>
            )}
          </FadeIn>
        )}
        {children}
      </div>
    </section>
  );
}
