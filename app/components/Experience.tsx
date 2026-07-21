"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaPython,
} from "react-icons/fa";
import Reveal from "./Reveal";

const experiences = [
  {
    title: "B.Tech in Computer Science & Engineering",
    company: "Nalanda Institute of Technology, Bhubaneswar",
    year: "2023 - 2027",
    icon: <FaGraduationCap />,
    description:
      "Currently pursuing my Bachelor's degree with a focus on Data Science, Machine Learning, Artificial Intelligence and Full Stack Development.",
    technologies: [
      "Python",
      "Machine Learning",
      "SQL",
      "React",
      "Next.js",
    ],
  },

  {
    title: "IoT & Data Analyst Intern",
    company: "National Institute of Technology, Rourkela",
    year: "2025",
    icon: <FaBriefcase />,
    description:
      "Worked on IoT-based real-time analytics, dashboard development and predictive data analysis while collaborating on research-oriented projects.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Power BI",
      "IoT",
    ],
  },

  {
    title: "AI & Machine Learning Intern",
    company: "Xylofy AI",
    year: "2026",
    icon: <FaLaptopCode />,
    description:
      "Developed Machine Learning models, explored Generative AI concepts and deployed AI-powered applications using modern development practices.",
    technologies: [
      "Python",
      "TensorFlow",
      "Scikit-Learn",
      "Gen AI",
      "FastAPI",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 bg-black overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-500/20 blur-[160px]" />

      <Reveal>

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.0}}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >

            <p className="uppercase tracking-[8px] text-cyan-400 text-sm">
              Journey
            </p>

            <h2 className="mt-5 text-5xl md:text-7xl font-extrabold text-white">

              Education &
              <span className="text-cyan-400">
                {" "}Experience
              </span>

            </h2>

            <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-8">
              My journey through education, internships and practical
              experiences that shaped my skills in Artificial Intelligence,
              Data Science and Modern Web Development.
            </p>

          </motion.div>

          {/* Timeline Starts Here */}

          <div className="relative">
            {/* Glowing Timeline Line */}

            <div className="absolute left-6 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-cyan-300 to-blue-500 shadow-[0_0_30px_rgba(34,211,238,0.8)] -translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.25,
                }}
                className={`relative flex items-center mb-24
                    ${index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                  }
                  flex-col
                `}
              >

                {/* Timeline Icon */}

                <div
                  className=" absolute left-6 md:left-1/2 -translate-x-1/2 z-20 "
                >

                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className=" w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-2xl shadow-[0_0_40px_rgba(34,211,238,0.8)] "
                  >
                    {exp.icon}
                  </motion.div>

                </div>

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className=" ml-20 md:ml-0 w-full md:w-[44%] rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_10px_40px_rgba(0,255,255,0.08)] hover:border-cyan-400/50 hover:shadow-[0_15px_60px_rgba(34,211,238,0.2)] transition-all duration-500 "
                >

                  {/* Year */}

                  <span
                    className=" inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm font-semibold mb-5 "
                  >
                    {exp.year}
                  </span>

                  {/* Title */}

                  <h3
                    className=" text-3xl font-bold text-white "
                  >
                    {exp.title}
                  </h3>

                  {/* Company */}

                  <p
                    className=" mt-2 text-cyan-400 font-medium text-lg "
                  >
                    {exp.company}
                  </p>

                  {/* Description */}

                  <p
                    className=" mt-6 text-gray-300 leading-8 "
                  >
                    {exp.description}
                  </p>
                  {/* Technologies */}

                  <div className="mt-8 flex flex-wrap gap-3">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{
                          scale: 1.08,
                          y: -3,
                        }}
                        className=" px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm font-medium cursor-default transition-all "
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Bottom Information */}

                  <div className="mt-8 grid grid-cols-2 gap-4">

                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      className=" rounded-2xl border border-cyan-500/20 bg-white/5 p-5 text-center "
                    >
                      <FaPython
                        className=" mx-auto text-3xl text-cyan-400 mb-3 "
                      />

                      <h4 className="text-white font-semibold">
                        Core Skill
                      </h4>

                      <p className="text-gray-400 text-sm mt-2">
                        Python Development
                      </p>

                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      className=" rounded-2xl border border-cyan-500/20 bg-white/5 p-5 text-center "
                    >

                      <div className="text-4xl font-bold text-cyan-400">
                        ★
                      </div>

                      <h4 className="text-white font-semibold mt-3">
                        Achievement
                      </h4>

                      <p className="text-gray-400 text-sm mt-2">
                        Successfully completed practical projects and industry training.
                      </p>

                    </motion.div>

                  </div>

                </motion.div>

              </motion.div>
            ))}
            </div>

      {/* Bottom CTA */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mt-28"
      >
        <div className="rounded-[32px] border border-cyan-500/20 bg-white/5 backdrop-blur-2xl p-12 text-center">

          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Every Experience
            <span className="text-cyan-400"> Shapes My Journey</span>
          </h3>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
            Every internship, academic project and real-world application has
            strengthened my passion for Artificial Intelligence, Data Science
            and Full Stack Development. I'm always excited to learn, build and
            solve meaningful problems.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-cyan-300">
              🚀 Continuous Learning
            </span>

            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-cyan-300">
              💡 Innovation
            </span>

            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-cyan-300">
              🤝 Team Collaboration
            </span>

            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-cyan-300">
              📈 Problem Solving
            </span>

          </div>

        </div>
      </motion.div>

    </div>

      </Reveal>
    </section>
  );
}
          