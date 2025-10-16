"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  X,
  Mail,
  Github,
  Linkedin,
  Instagram,
  MessageSquare,
} from "lucide-react";
import { socials } from "../lib/socials";

const socialLinks = [
  {
    icon: Mail,
    href: socials.email,
    label: "Email",
    color: "",
  },
  {
    icon: Github,
    href: socials.github,
    label: "GitHub",
    color: "",
  },
  {
    icon: Linkedin,
    href: socials.linkedin,
    label: "LinkedIn",
    color: "",
  },
  {
    icon: Instagram,
    href: socials.instagram,
    label: "Instagram",
    color: "",
  },

  {
    icon: MessageSquare,
    href: "#contact",
    label: "Message",
    color: "",
  },
];

export default function StickyContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [isOpen]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute bottom-20 right-0 flex flex-col gap-3"
            ref={panelRef}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, x: 50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 50, y: 20 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center"
              >
                <motion.div
                  className="absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  initial={{ x: 10 }}
                  whileHover={{ x: 0 }}
                >
                  {social.label}
                  <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 border-8 border-transparent border-l-gray-900" />
                </motion.div>

                <div
                  className={`p-3 rounded-full bg-slate-900 dark:bg-white border border-slate-300/40 dark:border-white/10`}
                >
                  <social.icon className="h-4 w-4 text-white dark:text-slate-900" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-4 rounded-full text-white bg-slate-900 dark:bg-white dark:text-slate-900 border border-slate-300 shadow-md hover:shadow-lg dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 dark:focus:ring-slate-500 focus:ring-offset-white dark:focus:ring-offset-transparent transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        <div className="relative">
          {isOpen ? (
            <X className="h-5 w-5 text-white dark:text-slate-900" />
          ) : (
            <Plus className="h-5 w-5 text-white dark:text-slate-900" />
          )}
        </div>
      </motion.button>
    </div>
  );
}
