"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black flex items-center px-6 py-24"
    >
      <Reveal>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

              <Image
                src="/images/profile.png"
                alt="Pratap Kumar Mishra"
                width={380}
                height={380}
                className="relative rounded-full border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.4)] object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-cyan-400 mb-6">
              About Me
            </h2>

            <p className="text-gray-300 text-lg leading-8">
              I'm <span className="text-cyan-400 font-semibold">Pratap Kumar Mishra</span>, a
              4th-year Computer Science & Engineering student at
              <span className="text-white font-semibold">
                {" "}Nalanda Institute of Technology, Bhubaneswar.
              </span>
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              I enjoy building Machine Learning models, Data Analytics
              dashboards, and modern web applications using Python,
              SQL, React, Next.js, and Streamlit.
              I'm always exploring new technologies and solving real-world
              problems through data.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-cyan-500/20 p-6 text-center hover:scale-105 transition">
                <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
                <p className="text-gray-300 mt-2">Projects</p>
              </div>

              <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-cyan-500/20 p-6 text-center hover:scale-105 transition">
                <h3 className="text-4xl font-bold text-cyan-400">3</h3>
                <p className="text-gray-300 mt-2">Internships</p>
              </div>

              <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-cyan-500/20 p-6 text-center hover:scale-105 transition">
                <h3 className="text-4xl font-bold text-cyan-400">12+</h3>
                <p className="text-gray-300 mt-2">Technologies</p>
              </div>

              <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-cyan-500/20 p-6 text-center hover:scale-105 transition">
                <h3 className="text-4xl font-bold text-cyan-400">2027</h3>
                <p className="text-gray-300 mt-2">Graduation</p>
              </div>

            </div>
          </motion.div>

        </div>
      </Reveal>
    </section>
  );
}