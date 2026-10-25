import { useEffect, type ReactNode } from "react";
import { useLocation } from "wouter";
import { TopBar } from "@/components/layout/top-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

/** Reset scroll on route change, or jump to the hash target once the (lazy) page has rendered it. */
function useScrollOnNavigate() {
  const [location] = useLocation();
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    window.scrollTo({ top: 0, behavior: "auto" });
    if (!hash) return;

    let cancelled = false;
    const deadline = performance.now() + 2000;
    const tryScroll = () => {
      if (cancelled) return;
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
      } else if (performance.now() < deadline) {
        requestAnimationFrame(tryScroll);
      }
    };
    requestAnimationFrame(tryScroll);
    return () => {
      cancelled = true;
    };
  }, [location]);
}

export function Layout({ children }: { children: ReactNode }) {
  useScrollOnNavigate();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <TopBar />
      <Navbar />
      <main id="main" className="overflow-x-clip">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
