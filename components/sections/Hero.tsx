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
      <div className="absolute inset-0 bg-background">
        {floatingElements.map((el) => (
          <motion.div
            key={el.id}
            className="absolute rounded-full opacity-25 md:opacity-15"
            style={{
              width: el.size,
              height: el.size,
              left: `${el.x}%`,
              top: `${el.y}%`,
              background: `linear-gradient(135deg, var(--accent-start), var(--accent-end))`,
              filter: "blur(56px)",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              delay: el.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-2"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-[var(--accent-start)] via-[var(--accent-end)] to-[var(--accent-start)] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Syed Faizan
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-800 dark:text-slate-300 font-light">
                MERN Stack Developer
              </h2>
              <div className="rounded-2xl p-6 max-w-3xl bg-white/70 dark:hero-panel border border-slate-200 dark:border-white/10">
                <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-100 leading-relaxed">
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
                className="inline-flex px-6 py-3 rounded-2xl bg-gradient-to-r from-[var(--accent-start)] to-[var(--accent-end)] text-slate-900 shadow-lg hover:-translate-y-1 transition duration-200 font-semibold"
              >
                <a href="/resume/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-slate-900/10 dark:border-white/10 text-slate-800 dark:text-slate-100 bg-white/60 dark:bg-transparent hover:bg-white/70 dark:hover:bg-white/5 px-6 py-3 rounded-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
              className="flex items-center gap-6 pt-4"
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
                  className="p-3 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 hover:border-cyan-500 dark:hover:border-cyan-400 hover:bg-cyan-600/10 dark:hover:bg-cyan-400/10 transition-all group focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-start)] to-[var(--accent-end)] rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full border-2 border-slate-200 dark:border-white/10 overflow-hidden bg-gradient-to-br from-[var(--accent-start)] to-[var(--accent-end)] p-1 shadow-[0_10px_30px_rgba(139,92,246,0.12)]">
                <Image
                  src="/images/profile.jpg"
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
            <ArrowDown className="h-6 w-6 text-cyan-400" />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
