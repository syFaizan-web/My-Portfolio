"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Database, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", level: 93 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 78 },
      { name: "Vercel", level: 90 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Team Leadership", level: 88 },
      { name: "Time Management", level: 92 },
    ],
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 mx-auto mb-8" />
          <div className="rounded-2xl p-6 max-w-3xl mx-auto bg-white/70 dark:glass-panel border border-slate-200 dark:border-white/10">
            <p className="text-lg text-slate-700 dark:text-slate-100 leading-relaxed">
              I'm a passionate MERN Stack Developer with 5+ years of experience
              building scalable web applications. I specialize in creating
              elegant solutions to complex problems, with a focus on user
              experience and performance optimization. When I'm not coding,
              you'll find me exploring new technologies and contributing to
              open-source projects.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.32,
                delay: categoryIndex * 0.12,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
            >
              <div className="rounded-2xl p-6 h-full border border-slate-200 dark:border-white/10 bg-white/80 dark:glass-panel shadow-[0_12px_28px_-12px_rgba(2,6,23,0.18)] dark:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.45)]">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 mr-3">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-slate-700 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-sm text-cyan-600 dark:text-cyan-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="h-2 bg-slate-200 dark:bg-gray-700/50 rounded-full overflow-hidden"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} skill level: ${skill.level}%`}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 0.8,
                            delay: categoryIndex * 0.12 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
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
