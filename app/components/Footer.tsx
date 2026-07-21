"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.0}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            Pratap<span className="text-cyan-400">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-gray-400">
            Passionate Data Scientist and Full Stack Developer focused on
            building intelligent applications and beautiful user experiences.
          </p>

          <div className="mt-8 flex gap-5">
            <a
              href="https://github.com/pratapmishra123"
              target="_blank"
              className="rounded-full border border-white/10 p-4 text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/pratap-kumar-mishra"
              target="_blank"
              className="rounded-full border border-white/10 p-4 text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:pratapmishra581@gmail.com"
              className="rounded-full border border-white/10 p-4 text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaEnvelope size={22} />
            </a>
          </div>

          <a
            href="#home"
            className="mt-10 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-black transition hover:scale-110"
          >
            <FaArrowUp />
          </a>

          <div className="mt-10 h-px w-full bg-white/10"></div>

          <p className="mt-8 flex items-center gap-2 text-gray-500">
            Made with <FaHeart className="text-red-500" /> using Next.js,
            Tailwind CSS & Framer Motion
          </p>

          <p className="mt-2 text-sm text-gray-600">
            ©️ {new Date().getFullYear()} Pratap Kumar Mishra. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}