import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We deep dive into your vision, market fit, and technical requirements to build a roadmap for success.",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description: "Our architects and designers craft the blueprint, focusing on scalability, security, and user experience.",
  },
  {
    number: "03",
    title: "Agile Development",
    description: "We build in two-week sprints, giving you full transparency and regular deliverables to test.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "We deploy your product to enterprise-grade infrastructure and monitor performance 24/7.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-background/90" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 hidden lg:block" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">The Nexus Protocol</h2>
          <p className="text-muted-foreground text-lg">
            A systematic approach to turning complex problems into elegant software solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pt-12"
            >
              {/* Node Point */}
              <div className="absolute top-0 left-0 lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-20 shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
              
              <div className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors h-full backdrop-blur-sm">
                <span className="text-6xl font-display font-bold text-white/5 absolute top-4 right-4 select-none">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold mb-4 mt-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}