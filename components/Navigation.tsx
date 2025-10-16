"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white dark:bg-black border-b border-black/10 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center justify-between h-16"
          animate={{
            height: scrolled ? 64 : 64,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href="#hero"
            className="text-xl font-bold text-slate-900 dark:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: scrolled ? 0.95 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            Faizan-Portfolio
          </motion.a>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  activeSection === item.href.substring(1)
                    ? "text-cyan-600 dark:text-cyan-400 bg-cyan-600/10 dark:bg-cyan-400/10 border border-cyan-600/20 dark:border-cyan-400/20"
                    : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                }`}
                aria-current={
                  activeSection === item.href.substring(1) ? "true" : "false"
                }
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={
                mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
              }
              aria-expanded={mobileMenuOpen}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </Button>
          </div>
        </motion.div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-black border-b border-black/10 dark:border-white/5"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`block py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  activeSection === item.href.substring(1)
                    ? "text-cyan-600 dark:text-cyan-400 bg-cyan-600/10 dark:bg-cyan-400/10 border border-cyan-600/20 dark:border-cyan-400/20"
                    : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.1 },
                }}
                aria-current={
                  activeSection === item.href.substring(1) ? "true" : "false"
                }
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
