import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Nova Fintech",
    category: "Mobile Application",
    description: "A next-generation banking interface focusing on real-time data visualization and secure crypto asset management.",
    image: "/images/project-fintech.png",
    tags: ["React Native", "Node.js", "Blockchain"],
  },
  {
    title: "MediScan AI",
    category: "Healthcare Platform",
    description: "AI-powered diagnostic dashboard allowing medical professionals to analyze patient scans with 99.8% accuracy.",
    image: "/images/project-health.png",
    tags: ["Python", "TensorFlow", "React"],
  },
  {
    title: "Luxe Mode",
    category: "E-Commerce",
    description: "Minimalist high-fashion marketplace with immersive 3D product previews and seamless checkout flow.",
    image: "/images/project-commerce.png",
    tags: ["Next.js", "Stripe", "WebGL"],
  },
];

export function Projects() {
  return (
    <section id="portfolio" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Featured <span className="text-primary">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A selection of our recent technical triumphs. We build software that defines industries.
            </p>
          </div>
          <Button variant="outline" className="border-white/10 hover:bg-white/5">
            View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 z-20">
                  <Badge variant="secondary" className="bg-black/50 backdrop-blur-md border-white/10 text-white hover:bg-black/70">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-20 -mt-12">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-white/60 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}