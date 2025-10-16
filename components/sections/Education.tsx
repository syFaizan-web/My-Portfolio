"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    year: "2017 - 2019",
    achievements: [
      "GPA: 3.9/4.0",
      "Specialization in Artificial Intelligence and Machine Learning",
      "Published research paper on neural networks",
      "Graduate Teaching Assistant for Data Structures course",
    ],
    icon: GraduationCap,
    color: "from-cyan-400 to-blue-500",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "University of California, Berkeley",
    year: "2013 - 2017",
    achievements: [
      "Graduated Summa Cum Laude",
      "Dean's List all semesters",
      "President of Computer Science Club",
      "Winner of Annual Hackathon 2016",
    ],
    icon: BookOpen,
    color: "from-purple-400 to-pink-500",
  },
  {
    degree: "Certifications & Training",
    institution: "Various Platforms",
    year: "2017 - Present",
    achievements: [
      "AWS Certified Solutions Architect",
      "Google Cloud Professional Developer",
      "Full Stack Web Development Bootcamp",
      "Advanced React and TypeScript Certification",
    ],
    icon: Award,
    color: "from-orange-400 to-red-500",
  },
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="education"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="w-20 h-0.5 bg-slate-900 dark:bg-white mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="relative group"
            >
              <div className="relative bg-white dark:bg-neutral-900 border border-slate-200 dark:border-white/10 rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-slate-900`}>
                    <edu.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-gray-400 font-medium">
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                  {edu.degree}
                </h3>
                <h4 className="text-lg text-cyan-700 dark:text-cyan-400 mb-6">
                  {edu.institution}
                </h4>

                <div className="space-y-3">
                  {edu.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + idx * 0.1,
                      }}
                      className="flex items-start"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-slate-900 dark:bg-white mt-2 mr-3 flex-shrink-0`}
                      />
                      <p className="text-sm text-slate-700 dark:text-gray-300">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-slate-900 dark:bg-white rounded-b-2xl`}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
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
