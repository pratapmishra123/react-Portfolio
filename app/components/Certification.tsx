"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

const certifications = [
  {
    title: "Data Science Internship",
    issuer: "DecodeLab",
    year: "2026",
    link: "#",
  },
  {
    title: "Artificial Intelligence Internship",
    issuer: "Xylofy AI",
    year: "2026",
    link: "#",
  },
  {
    title: "Python Programming",
    issuer: "Cisco / Coursera",
    year: "2025",
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-28 bg-gradient-to-b from-black via-zinc-950 to-black px-6"
    >
      <Reveal>
        <div className="max-w-6xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-5xl md:text-6xl font-bold text-white mb-16"
          >
            My <span className="text-cyan-400">Certifications</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8"
              >
                <Award className="text-cyan-400 mb-5" size={36} />

                <h3 className="text-2xl font-bold text-white">
                  {cert.title}
                </h3>

                <p className="mt-2 text-gray-300">
                  {cert.issuer}
                </p>

                <p className="text-cyan-400 mt-3">
                  {cert.year}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                >
                  View Certificate
                  <ExternalLink size={18} />
                </a>

              </motion.div>
            ))}

          </div>

        </div>
      </Reveal>
    </section>
  );
}