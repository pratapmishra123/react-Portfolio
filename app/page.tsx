"use client";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certification";
import Contact from "./components/Contact";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

import Reveal from "./components/Reveal";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

import BackToTop from "./components/BackToTop";
import Spotlight from "./components/Spotlight";
import dynamic from "next/dynamic";

const Loader = dynamic(() =>
import ("./components/Loader"),{
  ssr: false
});
export default function Hero() {
  return (
    <>
      <Reveal>
        <section
          id="home"
          className="relative min-h-screen overflow-hidden bg-black pt-24"
        >
          {/* Background Glow */}
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[180px]" />
          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-[200px]" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">

            <div className="grid w-full items-center gap-14 lg:grid-cols-2">

              {/* LEFT SIDE */}

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
              >
                <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
                  👋 Welcome to my portfolio
                </span>

                <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
                  Pratap
                  <br />
                  <span className="bg-gradient-to-r from-white via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                    Kumar Mishra
                  </span>
                </h1>

                <div className="mt-6 h-12 text-2xl font-bold text-cyan-400 md:text-3xl">
                  <TypeAnimation
                    sequence={[
                      "Data Scientist",
                      2000,
                      "Machine Learning Engineer",
                      2000,
                      "Python Developer",
                      2000,
                      "AI Enthusiast",
                      2000,
                    ]}
                    repeat={Infinity}
                    speed={50}
                  />
                </div>

                <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
                  Passionate about Machine Learning, Artificial Intelligence,
                  Data Analytics and building modern web applications with clean,
                  scalable and impactful solutions.
                </p>

                <div className="mt-10 flex flex-wrap gap-5">
                  <a
                    href="#projects"
                    className="flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
                  >
                    View Projects
                    <FaArrowRight />
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="flex items-center gap-2 rounded-full border border-cyan-400 px-8 py-4 text-white transition hover:bg-cyan-400 hover:text-black"
                  >
                    Resume
                    <FaDownload />
                  </a>
                </div>

                <div className="mt-10 flex gap-6">
                  <a
                    href="https://github.com/pratapmishra123"
                    target="_blank"
                    className="text-3xl text-gray-400 transition hover:text-cyan-400"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://linkedin.com/in/pratap-kumar-mishra"
                    target="_blank"
                    className="text-3xl text-gray-400 transition hover:text-cyan-400"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                {/* Stats */}

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4"
                >
                  {[
                    { number: "10+", label: "Projects" },
                    { number: "2+", label: "Internships" },
                    { number: "15+", label: "Technologies" },
                    { number: "2027", label: "Graduation" },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{
                        y: -8,
                        scale: 1.05,
                      }}
                      className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5 backdrop-blur-xl"
                    >
                      <h3 className="text-3xl font-bold text-cyan-400">
                        {item.number}
                      </h3>

                      <p className="mt-2 text-sm text-gray-400">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

              </motion.div>

              {/* RIGHT SIDE */}

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative flex justify-center"
              >

                {/* Outer Glow */}

                <div className="absolute h-[430px] w-[430px] rounded-full bg-cyan-500/20 blur-[120px]" />

                {/* Animated Rings */}

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[430px] w-[430px] rounded-full border border-cyan-400/20"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[360px] w-[360px] rounded-full border border-white/10"
                />

                {/* Floating Image */}

                <motion.div
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                relative
                rounded-[40px]
                border
                border-cyan-500/30
                bg-white/5
                p-4
                backdrop-blur-2xl
                shadow-[0_0_60px_rgba(34,211,238,0.25)]
              "
                >

                  <Image
                    src="/images/new.png"
                    alt="Pratap Kumar Mishra"
                    width={380}
                    height={380}
                    priority
                    className="rounded-22px object-cover"
                  />

                </motion.div>

              </motion.div>

            </div>
          </div>
          {/* Floating Background Decorations */}

          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-36 right-24 hidden h-24 w-24 rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl lg:block"
          />

          <motion.div
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-40 left-16 hidden h-16 w-16 rounded-full bg-cyan-400/20 blur-xl lg:block"
          />

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute right-1/4 top-1/3 hidden h-36 w-36 rounded-full border border-cyan-400/20 lg:block"
          />

          {/* Scroll Down Indicator */}

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, 10, 0],
            }}
            transition={{
              opacity: { delay: 1.2 },
              y: {
                duration: 2,
                repeat: Infinity,
              },
            }}
            className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center text-gray-400 md:flex"
          >
            <span className="mb-3 text-sm tracking-[0.3em] uppercase">
              Scroll
            </span>

            <div className="flex h-16 w-9 justify-center rounded-full border border-cyan-400/30">
              <motion.div
                animate={{
                  y: [4, 28, 4],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
                className="mt-2 h-3 w-3 rounded-full bg-cyan-400"
              />
            </div>
          </motion.a>
          {/* Floating Labels */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              delay: 1,
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute top-32 left-10 hidden lg:block"
          >
            <div className="rounded-full border border-cyan-400/30 bg-white/5 px-5 py-3 backdrop-blur-xl">
              <p className="text-sm text-cyan-300">
                🚀 Open to Internships
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, 12, 0],
            }}
            transition={{
              delay: 1.4,
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute right-12 top-44 hidden lg:block"
          >
            <div className="rounded-full border border-cyan-400/30 bg-white/5 px-5 py-3 backdrop-blur-xl">
              <p className="text-sm text-cyan-300">
                💡 AI • ML • Full Stack
              </p>
            </div>
          </motion.div>

          {/* Decorative Gradient Line */}

          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" >
          </div>
        </section>
      </Reveal>
      <Loader />

      <ScrollProgress />
      <Spotlight />
      <Navbar />

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />


      <Footer />

      <BackToTop />
    </>
  );
}