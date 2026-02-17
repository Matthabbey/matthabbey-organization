import { Code, Cpu, Globe, Layout, Lock, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Ecosystems",
    description: "End-to-end web platforms built on scalable microservices architectures.",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Custom models and intelligent automation integration for enterprise workflows.",
  },
  {
    icon: Rocket,
    title: "MVP Acceleration",
    description: "Rapid prototyping and market-ready launches for high-growth startups.",
  },
  {
    icon: Layout,
    title: "Product Design",
    description: "World-class UI/UX design that focuses on conversion and user retention.",
  },
  {
    icon: Code,
    title: "Blockchain Solutions",
    description: "Smart contracts and decentralized application development for web3.",
  },
  {
    icon: Lock,
    title: "Cybersecurity Audit",
    description: "Enterprise-grade security infrastructure and vulnerability assessments.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-black/20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Engineering <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't just write code. We build robust, scalable, and secure digital assets that drive business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}