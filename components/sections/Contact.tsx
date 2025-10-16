"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { socials } from "../../lib/socials";

const emailAddress = socials.email.startsWith("mailto:")
  ? socials.email.replace(/^mailto:/, "")
  : socials.email;

// Detect mobile devices to decide whether to trigger the dialer
const isMobileDevice = () => {
  if (typeof window === "undefined") return false;
  return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(
    navigator.userAgent
  );
};

// Phone setup
const phoneDisplay = "03085614147";
const phoneTel = `tel:${phoneDisplay.replace(/[^\d+]/g, "")}`;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: emailAddress,
    href: socials.email,
  },
  {
    icon: Phone,
    label: "Phone",
    value: phoneDisplay,
    href: phoneTel,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gujranwala,Pakistan",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    href: socials.github,
    label: "GitHub",
    color: "hover:text-cyan-400",
  },
  {
    icon: Linkedin,
    href: socials.linkedin,
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-0.5 bg-slate-900 dark:bg-white mx-auto mb-6" />
          <p className="text-slate-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  onClick={(e) => {
                    if (info.label === "Phone" && !isMobileDevice()) {
                      e.preventDefault();
                    }
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 10 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="p-3 rounded-lg bg-slate-900">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-semibold mb-1">
                      {info.label}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-slate-900 dark:text-white font-semibold mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className={`p-4 rounded-full bg-transparent border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors`}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <form
              onSubmit={handleSubmit}
              className="relative bg-white dark:bg-neutral-900 border border-slate-200 dark:border-white/10 rounded-2xl p-8"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-white border-slate-300 text-slate-900 focus:border-cyan-600 dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:border-cyan-400"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-white border-slate-300 text-slate-900 focus:border-cyan-600 dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:border-cyan-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-white border-slate-300 text-slate-900 focus:border-cyan-600 min-h-[150px] dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:border-cyan-400"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center"
                  >
                    Message sent successfully!
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-center"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 text-center text-slate-600 dark:text-gray-400"
        >
          <p>&copy; 2024 John Anderson. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
