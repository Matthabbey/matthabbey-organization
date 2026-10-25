import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { whatsappUrl } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppButton() {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onClick={() => trackEvent("contact_whatsapp", { location: "floating_button" })}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-medium text-white shadow-lg transition-colors duration-300 hover:bg-whatsapp-dark focus-visible:ring-offset-2 md:bottom-8 md:right-8 md:px-5"
      initial={reduce ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={reduce ? undefined : { scale: 1.05 }}
      whileTap={reduce ? undefined : { scale: 0.95 }}
    >
      <MessageCircle className="h-6 w-6 fill-current" aria-hidden="true" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap transition-[max-width] duration-300 ease-in-out group-hover:max-w-xs group-focus-visible:max-w-xs sm:inline-block">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
