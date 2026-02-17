import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Nexus transformed our legacy infrastructure into a scalable, modern powerhouse. The ROI was immediate.",
    author: "Elena V.",
    role: "CTO, FinTech Global",
    company: "FinTech Global"
  },
  {
    quote: "Their attention to detail and architectural mastery is unmatched. They don't just build software; they build assets.",
    author: "Marcus Chen",
    role: "Founder, Stealth Startup",
    company: "Stealth"
  },
  {
    quote: "We needed a partner who could handle complexity. Nexus delivered a flawless platform ahead of schedule.",
    author: "Sarah Jenkins",
    role: "VP of Product, Enterprise Corp",
    company: "Enterprise Corp"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Trusted by Visionaries</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/5 relative"
            >
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">"{t.quote}"</p>
              <div>
                <div className="font-bold text-white">{t.author}</div>
                <div className="text-sm text-primary">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}