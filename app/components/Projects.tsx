"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Stock Analysis Dashboard",
    image: "/images/stock-dashboard.png",
    description:
      "Interactive stock analysis dashboard with market insights, visualizations, and performance tracking.",
    tech: ["Python", "Pandas", "Plotly", "Streamlit"],
    github: "https://github.com/pratapmishra123/Stock_analysis",
    live: "https://pratapmishra123.github.io/Stock_Dashboard/",
    featured: true,
    features: [
      "Interactive stock charts",
      "Technical indicators",
      "Historical trend analysis",
      "Responsive dashboard",
      "Clean UI",
    ],
  },
  {
    title: "House Price Prediction",
    image: "/images/house-price.png",
    description:
      "Machine Learning web application that predicts house prices using regression models and Streamlit.",
    tech: ["Python", "Scikit-learn", "XGBoost", "Streamlit"],
    github: "https://github.com/pratapmishra123",
    live: "https://pratap-housepriceprediction.streamlit.app/",
    featured: false,
    features: [
      "Price prediction",
      "Feature engineering",
      "Model comparison",
      "Interactive UI",
      "Real-time prediction",
    ],
  },
  {
    title: "Employee Attrition Prediction",
    image: "/images/employee-attrition.png",
    description:
      "ML model to predict employee attrition with interactive analytics and feature importance visualization.",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/pratapmishra123/Employee-Attrition",
    live: "https://employee-attrition-seven.vercel.app/",
    featured: false,
    features: [
      "Employee risk prediction",
      "Feature importance",
      "Data visualization",
      "Model evaluation",
      "Interactive dashboard",
    ],
  },
  {
    title: "Sales Forecasting",
    image: "/images/sales-forecast.png",
    description:
      "Forecasts future sales using Prophet and visualizes trends with an interactive dashboard.",
    tech: ["Python", "Prophet", "Pandas"],
    github: "https://github.com/pratapmishra123/Sales_Forecasting_Dashboard",
    live: "https://salesforecastingdashboard-pratap.streamlit.app/",
    featured: false,
    features: [
      'Centralized Data Integration',
      'Automated Forcast Adjustments',
      'Predictive Analytics',
      'Pipeline Management',
      'Scenario Modeling',
    ],

  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  return (
    <section
      id="projects"
      className="py-28 bg-gradient-to-b from-black via-zinc-950 to-black px-6"
    >
      <Reveal>
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.0 }}
            className="text-center mb-16"
          >
            <p className="text-cyan-400 uppercase tracking-widest">
              Portfolio
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A selection of projects showcasing my skills in Machine Learning,
              Data Science, Full Stack Development, and Data Visualization.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">

            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
              >
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  scale={1.02}
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  transitionSpeed={1500}
                >
                  <div onClick={() => setSelectedProject(project)} className="group cursor-pointer overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]">

                    {/* Browser Header */}

                    <div className="flex items-center gap-2 bg-zinc-900 px-5 py-4">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>

                      <p className="ml-4 text-xs text-gray-400 truncate">
                        {project.title}
                      </p>
                    </div>

                    {/* Screenshot */}

                    <div className="overflow-hidden">

                      <Image
                        src={project.image}
                        alt={project.title}
                        width={900}
                        height={600}
                        className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                    </div>

                    <div className="p-8">

                      {project.featured && (
                        <span className="inline-block rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-black mb-5">
                          ⭐ Featured Project
                        </span>
                      )}

                      <h3 className="text-3xl font-bold text-white">
                        {project.title}
                      </h3>

                      <p className="mt-5 leading-8 text-gray-400">
                        {project.description}
                      </p>

                      {/* Tech */}

                      <div className="flex flex-wrap gap-3 mt-7">

                        {project.tech.map((item) => (
                          <motion.span
                            whileHover={{
                              scale: 1.08,
                              y: -3,
                            }}
                            key={item}
                            className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300"
                          >
                            {item}
                          </motion.span>
                        ))}

                      </div>

                      {/* Buttons */}

                      <div className="mt-8 flex flex-wrap gap-4">

                        <a
                          onClick={(e) => e.stopPropagation()}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </a>

                        <a
                          onClick={(e) => e.stopPropagation()}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-full border border-cyan-400 px-6 py-3 text-white transition-all duration-300 hover:bg-cyan-400 hover:text-black"
                        >
                          <FaGithub />
                          GitHub
                        </a>

                      </div>

                    </div>

                  </div>
                </Tilt>
              </motion.div>
            ))}

          </div>

        </div>
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Reveal>
    </section>
  );
}