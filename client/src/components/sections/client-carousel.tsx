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
    <section className="py-12 border-y border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-muted-foreground uppercase tracking-widest"
        >
          Companies We've Worked With
        </motion.p>
      </div>

      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y items-center">
          {clients.map((client, index) => (
            <div className="flex-[0_0_18rem] min-w-0 px-8 flex flex-col items-center justify-center gap-4 group cursor-default" key={index}>
              <div className="h-24 w-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-110 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:border-gray-300 dark:group-hover:border-white/20 group-hover:shadow-md">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full w-auto object-contain transition-all duration-300"
                />
              </div>
              <span className="text-lg font-bold font-display text-foreground/80 group-hover:text-foreground transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
