"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

interface Project {
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  features: string[];
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-zinc-950 border border-cyan-400/20"
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 rounded-full bg-black/50 p-3 text-white hover:bg-cyan-400 hover:text-black transition"
            >
              <FaTimes />
            </button>

            {/* Image */}

            <div className="relative h-[320px] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}

            <div className="p-8">

              <h2 className="text-4xl font-bold text-white">
                {project.title}
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                {project.description}
              </p>

              {/* Tech */}

              <h3 className="mt-8 text-xl font-semibold text-cyan-400">
                Technologies
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">

                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300"
                  >
                    {item}
                  </span>
                ))}

              </div>

              {/* Features */}

              <h3 className="mt-8 text-xl font-semibold text-cyan-400">
                Key Features
              </h3>

              <ul className="mt-4 space-y-3">

                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-gray-300"
                  >
                    ✅ {feature}
                  </li>
                ))}

              </ul>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-5">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black hover:scale-105 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-cyan-400 px-6 py-3 text-white hover:bg-cyan-400 hover:text-black transition"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}