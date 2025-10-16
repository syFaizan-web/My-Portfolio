"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { socials } from "../../lib/socials";

export default function Hero() {
  const floatingElements = Array.from({ length: 2 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 md:pt-24 overflow-hidden scroll-mt-24 bg-background"
    >
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:text-left text-center space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white">
                Syed Faizan
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl text-slate-800 dark:text-slate-300 font-light">
                MERN Stack Developer
              </h2>
              <div className="rounded-2xl p-5 max-w-3xl mx-auto lg:mx-0 bg-white dark:bg-neutral-900 border border-slate-200 dark:border-white/10">
                <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                  Crafting digital experiences with modern technologies and
                  creative solutions. Passionate about building scalable
                  applications that make a difference.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                asChild
                className="inline-flex w-full sm:w-auto justify-center px-6 py-3 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-sm transition font-semibold"
              >
                <a href="/resume/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-100 bg-white dark:bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 px-6 py-3 rounded-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-slate-400"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-2"
            >
              {[
                { icon: Github, href: socials.github, label: "GitHub" },
                { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
                { icon: Mail, href: socials.email, label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 sm:p-3 rounded-full bg-transparent border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors group focus:outline-none focus:ring-2 focus:ring-slate-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end mt-10 lg:mt-0"
          >
            <div className="relative group">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full border-2 border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-neutral-900 p-1">
                <Image
                  src="/images/faizan.jpg"
                  alt="Syed Faizan"
                  width={320}
                  height={320}
                  priority
                  className="w-full h-full rounded-full object-cover scale-110"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-sm text-slate-400 mb-2">Scroll Down</span>
            <ArrowDown className="h-6 w-6 text-slate-400" />
          </div>
        </motion.div>
      </div>

      {/* Gradient animation styles removed for a simpler, professional look */}
    </section>
  );
}
