"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Tech Innovators Inc.",
    role: "Senior Full Stack Developer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description:
      "Leading development of enterprise-scale web applications using React, Node.js, and AWS.",
    responsibilities: [
      "Architected and implemented microservices infrastructure serving 1M+ users",
      "Mentored team of 5 junior developers and conducted code reviews",
      "Reduced application load time by 60% through optimization techniques",
      "Implemented CI/CD pipelines and automated testing frameworks",
    ],
    color: "from-cyan-400 to-blue-500",
  },
  {
    company: "Digital Solutions Co.",
    role: "Full Stack Developer",
    duration: "2020 - 2022",
    location: "New York, NY",
    description:
      "Developed and maintained multiple client-facing applications and internal tools.",
    responsibilities: [
      "Built responsive web applications using React, TypeScript, and Tailwind CSS",
      "Integrated third-party APIs and payment gateways (Stripe, PayPal)",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Participated in agile development process and sprint planning",
    ],
    color: "from-purple-400 to-pink-500",
  },
  {
    company: "StartUp Ventures",
    role: "Junior Developer",
    duration: "2019 - 2020",
    location: "Remote",
    description:
      "Contributed to various startup projects and gained experience across the full stack.",
    responsibilities: [
      "Developed features for SaaS platform using Vue.js and Express.js",
      "Implemented RESTful APIs and database schemas",
      "Fixed bugs and improved application performance",
      "Participated in daily standups and team meetings",
    ],
    color: "from-orange-400 to-red-500",
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
              >
                <div
                  className="flex-1 md:text-right"
                  style={{ textAlign: index % 2 === 0 ? "right" : "left" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative group"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`}
                    />
                    <div className="relative bg-white/70 dark:bg-[#1a1a2e]/90 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl p-6 group-hover:border-slate-300 dark:group-hover:border-white/20 transition-all">
                      <div
                        className={`flex ${
                          index % 2 === 0 ? "justify-end" : "justify-start"
                        } mb-4`}
                      >
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-br ${exp.color}`}
                        >
                          <Briefcase className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl text-cyan-700 dark:text-cyan-400 mb-3">
                        {exp.company}
                      </h4>

                      <div
                        className="flex flex-wrap gap-4 mb-4"
                        style={{
                          justifyContent:
                            index % 2 === 0 ? "flex-end" : "flex-start",
                        }}
                      >
                        <div className="flex items-center text-slate-600 dark:text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center text-slate-600 dark:text-gray-400 text-sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-slate-700 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.li
                            key={idx}
                            initial={{
                              opacity: 0,
                              x: index % 2 === 0 ? 20 : -20,
                            }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.2 + idx * 0.1,
                            }}
                            className="text-sm text-slate-600 dark:text-gray-400 flex items-start"
                          >
                            <span
                              className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${
                                exp.color
                              } mt-1.5 ${
                                index % 2 === 0 ? "ml-2 order-2" : "mr-2"
                              }`}
                            />
                            <span className="flex-1">{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:flex items-center justify-center w-16 h-16 relative z-10">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} shadow-lg`}
                  />
                  <div
                    className={`absolute w-8 h-8 rounded-full bg-gradient-to-br ${exp.color} opacity-30 animate-ping`}
                  />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
