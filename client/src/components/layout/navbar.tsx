import { useEffect, useId, useState } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cta, nav, site, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src="/images/logo.png"
        alt={site.name}
        width={291}
        height={92}
        fetchPriority="high"
        decoding="async"
        className="h-9 w-auto dark:hidden"
      />
      <img
        src="/images/logo-dark.png"
        alt=""
        aria-hidden="true"
        width={291}
        height={92}
        decoding="async"
        className="hidden h-9 w-auto dark:block"
      />
    </span>
  );
}

function isActive(location: string, href: string) {
  return href === "/" ? location === "/" : location.startsWith(href);
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const menuId = useId();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onResize = () => {
      if (mq.matches) setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || isOpen ? "border-border bg-background/90 shadow-sm" : "border-transparent bg-background/80",
      )}
    >
      <nav aria-label="Primary" className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="rounded-md" aria-label={`${site.name} home`} onClick={close}>
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-7">
            {nav.map((link) => {
              const active = isActive(location, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-sm text-sm font-medium transition-colors hover:text-foreground",
                      active ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
          <Button asChild>
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls={menuId}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={menuId}
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <nav aria-label="Mobile" className="container mx-auto flex flex-col gap-1 px-6 py-5">
              {nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(location, link.href) ? "page" : undefined}
                  className={cn(
                    "rounded-md px-2 py-3 text-lg font-medium transition-colors hover:bg-muted",
                    isActive(location, link.href) ? "text-primary" : "text-foreground",
                  )}
                  onClick={close}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-3 border-t border-border pt-5">
                <Button asChild size="lg">
                  <Link href={cta.href} onClick={close}>
                    {cta.label}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" onClick={close}>
                    <MessageCircle aria-hidden="true" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
