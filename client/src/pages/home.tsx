import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <CTA />
      <WhatsAppButton />
      
      <footer className="py-16 border-t border-white/5 bg-black/40">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="text-2xl font-bold font-display tracking-tight text-white mb-6">Matthabbey Solutions Services</div>
              <p className="text-muted-foreground max-w-sm mb-6">
                Full-cycle software development for visionary organizations and high-net-worth individuals. We build the future.
              </p>
              <div className="flex items-center gap-6">
                <a href="https://twitter.com/matthabbey" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://linkedin.com/company/matthabbey" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://instagram.com/matthabbeysolutionsservices" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-primary" />
                  Lagos, Lekki Nigeria
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-primary" />
                  +234 803 620 2050
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-primary" />
                  matthabbeysolutionsservices@gmail.com
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Links</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#process" className="hover:text-primary transition-colors">Process</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 Matthabbey Solutions Services. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}