import { Code, Cpu, Globe, Layout, Lock, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Web & Mobile Apps",
    description: "Full-stack websites, dashboards, and mobile apps built with modern tools like React, Node.js, and React Native.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "We integrate AI features into your products — from chatbots and recommendation engines to data processing pipelines.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Got a startup idea? We'll help you build a working product fast so you can test it with real users and get funding.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Clean, intuitive interfaces that your users will actually enjoy using. We design for people, not awards.",
  },
  {
    icon: Code,
    title: "Blockchain & Web3",
    description: "Smart contracts, dApps, and token systems. If your project involves blockchain, we can build it.",
  },
  {
    icon: Lock,
    title: "Security Audits",
    description: "We review your codebase and infrastructure for vulnerabilities, then help you fix them before they become problems.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            What We <span className="text-primary">Do</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Here's how we help businesses like yours. Pick what you need, or let's talk about a custom solution.
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
              className="group p-8 rounded-2xl bg-white dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
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
