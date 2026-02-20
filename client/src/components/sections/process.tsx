import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "We Talk It Through",
    description: "You tell us what you need. We ask questions, figure out the scope, and put together a clear plan with timelines and costs.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "We map out the user experience, create mockups, and decide on the tech stack before writing any code.",
  },
  {
    number: "03",
    title: "Build & Test",
    description: "We develop in short sprints and share progress regularly. You see what's being built and can give feedback as we go.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy your product, make sure everything runs smoothly, and stick around to help with updates and fixes.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-white/90 dark:bg-gray-950/90" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">How We Work</h2>
          <p className="text-muted-foreground text-lg">
            No surprises, no disappearing acts. Here's what working with us looks like from start to finish.
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
              <div className="absolute top-0 left-0 lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-950 border-2 border-primary z-20 shadow-[0_0_15px_rgba(124,58,237,0.3)]" />

              <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 hover:border-primary/30 transition-colors h-full shadow-sm">
                <span className="text-6xl font-display font-bold text-gray-100 dark:text-white/5 absolute top-4 right-4 select-none">
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
