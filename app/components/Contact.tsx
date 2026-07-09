"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-black via-zinc-950 to-black px-6"
    >
      <Reveal>
        <div className="max-w-6xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Let's <span className="text-cyan-400">Connect</span>
          </motion.h2>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            I'm always open to internships, collaborations, and exciting opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <motion.a
              whileHover={{ y: -6 }}
              href="mailto:pratapmishra581@gmail.com"
              className="flex items-center gap-5 rounded-3xl bg-white/5 border border-cyan-500/20 p-6"
            >
              <Mail className="text-cyan-400" size={30} />
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-400">pratapmishra581@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ y: -6 }}
              href="tel:+918018434817"
              className="flex items-center gap-5 rounded-3xl bg-white/5 border border-cyan-500/20 p-6"
            >
              <Phone className="text-cyan-400" size={30} />
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-400">+91 8018434817</p>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ y: -6 }}
              className="flex items-center gap-5 rounded-3xl bg-white/5 border border-cyan-500/20 p-6"
            >
              <MapPin className="text-cyan-400" size={30} />
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-gray-400">Bhubaneswar, Odisha</p>
              </div>
            </motion.div>

            <motion.a
              whileHover={{ y: -6 }}
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-5 rounded-3xl bg-cyan-400 p-6 text-black font-semibold"
            >
              <Download size={28} />
              Download Resume
            </motion.a>

          </div>

          <div className="flex justify-center gap-8 mt-14">

            <a
              href="https://github.com/pratapmishra123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 transition"
            >
              <FaGithub size={34} />
            </a>

            <a
              href="https://linkedin.com/in/pratap-kumar-mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 transition"
            >
              <FaLinkedin size={34} />
            </a>

          </div>

        </div>
      </Reveal>
    </section>
  );
}