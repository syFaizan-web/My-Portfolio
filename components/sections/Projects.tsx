"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const categories = ["All", "Web App", "Mobile", "AI/ML", "Open Source"];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce platform with admin dashboard, payment integration, and real-time inventory management.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "#",
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "AI Content Generator",
    description:
      "Machine learning powered content generation tool using GPT models and natural language processing.",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team workspaces, and analytics.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "#",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Fitness Tracker Mobile",
    description:
      "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.",
    image:
      "https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React Native", "Firebase", "Redux", "Chart.js"],
    category: "Mobile",
    liveUrl: "#",
    githubUrl: "#",
    color: "from-green-400 to-teal-500",
  },
  {
    title: "Open Source UI Library",
    description:
      "Comprehensive component library with 50+ customizable components, dark mode support, and accessibility features.",
    image:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "TypeScript", "Storybook", "CSS"],
    category: "Open Source",
    liveUrl: "#",
    githubUrl: "#",
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "Real Estate Platform",
    description:
      "Property listing and management platform with virtual tours, mortgage calculator, and agent dashboard.",
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Vue.js", "Express", "MongoDB", "AWS"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "#",
    color: "from-yellow-400 to-orange-500",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8" />

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-0"
                    : "border-slate-300 dark:border-white/20 text-slate-700 dark:text-gray-300 hover:border-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-400"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
              />

              <div className="relative bg-white/70 dark:bg-[#1a1a2e]/90 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden group-hover:border-slate-300 dark:group-hover:border-white/20 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-60 dark:from-[#1a1a2e]" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 bg-black/10 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <a
                      href={project.liveUrl}
                      className="p-3 rounded-full bg-cyan-500 hover:bg-cyan-600 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-700 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-black/5 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
