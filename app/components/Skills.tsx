"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import Reveal from "./Reveal";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  description: string;
  color: string;
}

const skills: Skill[] = [
  {
    name: "Python",
    icon: <FaPython />,
    level: 95,
    description: "Automation, Data Analysis & Machine Learning",
    color: "text-yellow-400",
  },
  {
    name: "Pandas",
    icon: <SiPandas />,
    level: 92,
    description: "Data Cleaning & Data Manipulation",
    color: "text-cyan-400",
  },
  {
    name: "NumPy",
    icon: <SiNumpy />,
    level: 90,
    description: "Numerical Computing & Arrays",
    color: "text-blue-400",
  },
  {
    name: "Scikit-Learn",
    icon: <SiScikitlearn />,
    level: 88,
    description: "Machine Learning Models",
    color: "text-orange-400",
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow />,
    level: 75,
    description: "Deep Learning Framework",
    color: "text-orange-500",
  },
  {
    name: "SQL",
    icon: <SiMysql />,
    level: 90,
    description: "Database Design & Queries",
    color: "text-blue-500",
  },
  {
    name: "React",
    icon: <FaReact />,
    level: 85,
    description: "Modern UI Development",
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    level: 85,
    description: "Full Stack React Framework",
    color: "text-white",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    level: 90,
    description: "Utility-first CSS Framework",
    color: "text-cyan-300",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    level: 88,
    description: "Interactive Web Development",
    color: "text-yellow-300",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    level: 82,
    description: "Typed JavaScript",
    color: "text-blue-400",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    level: 95,
    description: "Semantic Web Structure",
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    level: 90,
    description: "Responsive Web Design",
    color: "text-blue-500",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    level: 85,
    description: "Version Control",
    color: "text-orange-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    level: 90,
    description: "Code Collaboration",
    color: "text-white",
  },
];



export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-gradient-to-b from-black via-zinc-950 to-black px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

      <Reveal>
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.0 }}
            className="mb-20 text-center"
          >
            <p className="uppercase tracking-[0.3em] text-cyan-400">
              Expertise
            </p>

            <h2 className="mt-4 text-5xl font-bold text-white md:text-6xl">
              Technical <span className="text-cyan-400">Skills</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Technologies, frameworks and tools that I use to build
              modern AI, Machine Learning and Full Stack applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">

            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: false, amount: 0.0 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
              >

                {/* FRONT */}

                <div
                  className=" absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 group-hover:-translate-y-full group-active:-translate-y-full "
                >
                  <div className={`text-7xl ${skill.color}`}>
                    {skill.icon}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {skill.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Hover or Tap
                  </p>

                </div>

                {/* BACK */}

                <div
                  className="absolute inset-0 translate-y-full p-6 transition-all duration-500 group-hover:translate-y-0 group-active:translate-y-0 flex flex-col justify-center">

                  <div className={`text-5xl ${skill.color}`}>
                    {skill.icon}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {skill.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {skill.description}
                  </p>

                  <div className="mt-8">

                    <div className="mb-2 flex justify-between">

                      <span className="text-sm text-gray-300">
                        Proficiency
                      </span>

                      <span className="font-semibold text-cyan-400">
                        {skill.level}%
                      </span>

                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-zinc-800">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        transition={{
                          duration: 1.2,
                        }}
                        viewport={{once: false, amount: 0.0}}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      />

                    </div>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>
          {/* Currently Learning */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.0 }}
            className="mt-24"
          >
            <div className="rounded-[32px] border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-10">

              <div className="text-center">

                <p className="uppercase tracking-[0.3em] text-cyan-400">
                  Currently Learning
                </p>

                <h3 className="mt-4 text-4xl font-bold text-white">
                  Always Improving My Skills
                </h3>

                <p className="mx-auto mt-5 max-w-2xl text-gray-400">
                  Technology evolves every day. I'm continuously learning new
                  frameworks, AI tools and cloud technologies to become a better
                  developer.
                </p>

              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-4">

                {[
                  "Generative AI",
                  "LangChain",
                  "Docker",
                  "AWS",
                  "FastAPI",
                  "Power BI",
                  "OpenCV",
                  "MongoDB",
                  "PostgreSQL",
                  "Node.js",
                  "LLMs",
                  "Data Engineering",
                ].map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                    }}
                    className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                  >
                    {item}
                  </motion.span>
                ))}

              </div>

            </div>
          </motion.div>

          {/* Bottom Quote */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
            className="mt-20 text-center"
          >
            <h3 className="text-3xl font-bold text-white">
              "Learning never stops."
            </h3>

            <p className="mt-4 text-gray-400">
              Every project is an opportunity to explore, improve and innovate.
            </p>
          </motion.div>
        </div >
      </Reveal >
    </section >
  );
}