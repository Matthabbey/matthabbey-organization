import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We came to them with a rough idea and a tight deadline. They turned it into a working app in under two months. Really solid team.",
    author: "Tunde A.",
    role: "Founder, QuickPay",
    company: "QuickPay"
  },
  {
    quote: "What I liked most is they actually listened. They didn't just build what we asked for — they pointed out things we hadn't thought of.",
    author: "Chioma N.",
    role: "Product Lead, HealthBridge",
    company: "HealthBridge"
  },
  {
    quote: "Honest, responsive, and they know their stuff. Our e-commerce site loads fast, looks great, and our customers love it.",
    author: "David O.",
    role: "CEO, ShopRight",
    company: "ShopRight"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 border-y border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-white/10 relative shadow-sm"
            >
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-foreground/90 mb-8 leading-relaxed">"{t.quote}"</p>
              <div>
                <div className="font-bold text-foreground">{t.author}</div>
                <div className="text-sm text-primary">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
