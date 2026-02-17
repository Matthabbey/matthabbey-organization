import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      
      <footer className="py-12 border-t border-white/5 bg-black/40">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold font-display tracking-tighter">NEXUS</div>
          <div className="text-muted-foreground text-sm">
            © 2024 Nexus Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}