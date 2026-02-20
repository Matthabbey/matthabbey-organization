import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-white/10 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <span className="text-2xl font-bold font-display tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
              MATTHABBEY
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          <a href="https://wa.me/2348036202050" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-primary/20 hover:bg-primary/10 hover:text-primary text-foreground">
              Start a Project
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-4 mt-2">
                <ThemeToggle />
                <span className="text-sm text-muted-foreground">Toggle theme</span>
              </div>
              <a href="https://wa.me/2348036202050" target="_blank" rel="noopener noreferrer">
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">
                  Start a Project
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
