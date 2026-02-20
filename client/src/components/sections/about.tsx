import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl transform -rotate-3" />
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10" />
              <img
                src="/images/ceo.jpg"
                alt="CEO & Co-founder"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <Badge className="mb-4 bg-primary text-white border-primary/50">Leadership</Badge>
                <h3 className="text-3xl font-bold font-display text-white mb-1">Ayoola Akinpelu</h3>
                <p className="text-primary font-medium">CEO & Co-founder</p>
              </div>
            </div>

            {/* Decorative Quote */}
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 p-6 rounded-xl shadow-lg max-w-xs hidden md:block z-30">
              <Quote className="text-primary mb-2 h-8 w-8 opacity-50" />
              <p className="text-sm text-muted-foreground italic">
                "Good software should make your life easier, not harder. That's what we're here for."
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Who <span className="text-primary">We Are</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Matthabbey Solutions Services started in Lagos with a simple idea: build software that actually solves problems. We've been doing this for businesses across Nigeria and beyond, and we're not slowing down.
              </p>
              <p>
                Our approach is straightforward: <strong className="text-foreground">understand what you need, build it well, and deliver on time.</strong> No unnecessary complexity, no bloated features — just clean, reliable software that does its job.
              </p>
              <p>
                Whether you're a startup looking to launch your first product or an established company that needs better tools, we treat every project with the same care. Your business matters to us because our reputation depends on your results.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-200 dark:border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-foreground font-display">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground font-display">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
