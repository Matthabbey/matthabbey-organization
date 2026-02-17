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
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl transform -rotate-3" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
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
            <div className="absolute -bottom-8 -right-8 bg-background border border-white/10 p-6 rounded-xl shadow-xl max-w-xs hidden md:block z-30">
              <Quote className="text-primary mb-2 h-8 w-8 opacity-50" />
              <p className="text-sm text-muted-foreground italic">
                "We don't just build software; we engineer digital legacies for visionary leaders."
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
              Driven by <span className="text-primary">Innovation</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Matthabbey Solutions Services, we believe that technology is the ultimate lever for human potential. Founded in Lagos, we have grown into a premier development house serving clients globally.
              </p>
              <p>
                Our philosophy is simple: <strong className="text-white">Excellence is not an act, but a habit.</strong> We combine cutting-edge engineering with refined aesthetics to create software that stands the test of time.
              </p>
              <p>
                Whether partnering with a high-net-worth individual on a passion project or digitally transforming a multinational corporation, we bring the same level of intensity, precision, and architectural mastery to every line of code.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-white font-display">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-display">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}