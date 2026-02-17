import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { motion } from 'framer-motion'

const clients = [
  { name: "TechNova", logo: "/images/client-logo-1.png" },
  { name: "FinFlow", logo: "/images/client-logo-2.png" },
  { name: "MediCore", logo: "/images/client-logo-3.png" },
  { name: "ShopSphere", logo: "/images/client-logo-4.png" },
  { name: "CloudScale", logo: "/images/client-logo-5.png" },
  { name: "SecureNet", logo: "/images/client-logo-6.png" },
  { name: "TechNova", logo: "/images/client-logo-1.png" }, // Duplicate for seamless loop
  { name: "FinFlow", logo: "/images/client-logo-2.png" },
  { name: "MediCore", logo: "/images/client-logo-3.png" },
];

export function ClientCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1.5 })]
  )

  return (
    <section className="py-12 border-y border-white/5 bg-black/20 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-muted-foreground uppercase tracking-widest"
        >
          Trusted by Industry Leaders
        </motion.p>
      </div>
      
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {clients.map((client, index) => (
            <div className="flex-[0_0_15rem] min-w-0 px-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100" key={index}>
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-12 w-auto object-contain brightness-200 contrast-0 hover:brightness-100 hover:contrast-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}