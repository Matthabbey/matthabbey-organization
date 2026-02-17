import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] opacity-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-network.png')] bg-cover bg-center opacity-20 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-white/80 tracking-wide uppercase">Accepting New Ventures</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/50">
            Architecting the <br />
            <span className="text-primary text-glow">Digital Future</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            We build elite software ecosystems for visionary organizations and high-net-worth individuals. From concept to scale, we are your technical partner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-base">
              Initiate Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 text-white h-12 px-8 text-base">
              View Portfolio
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="font-mono text-sm space-y-2 text-blue-200/80">
              <div className="flex gap-2">
                <span className="text-purple-400">const</span>
                <span className="text-yellow-200">future</span>
                <span className="text-white">=</span>
                <span className="text-green-400">new</span>
                <span className="text-blue-300">Innovation</span>();
              </div>
              <div className="flex gap-2 pl-4">
                <span className="text-purple-400">await</span>
                <span className="text-yellow-200">future</span>.
                <span className="text-blue-300">deploy</span>({"{ scale: 'global' }"});
              </div>
              <div className="h-4" />
              <div className="text-muted-foreground">// System optimal. Ready for scale.</div>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <Terminal className="absolute -top-12 -right-8 text-primary/20 w-32 h-32 rotate-12" />
          <Code2 className="absolute -bottom-8 -left-12 text-blue-500/10 w-40 h-40 -rotate-12" />
        </motion.div>
      </div>
    </section>
  );
}