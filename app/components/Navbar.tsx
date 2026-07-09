"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaCertificate,
  FaEnvelope,
  FaFileDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const links = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "skills", label: "Skills", icon: <FaCode /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "certifications", label: "Certificates", icon: <FaCertificate /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) =>
        document.getElementById(link.id)
      );

      for (const section of sections) {
        if (!section) continue;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex
        items-center gap-2 rounded-full border border-white/10
        bg-black/60 backdrop-blur-xl px-3 py-3 shadow-2xl"
      >
        {links.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 ${
              active === item.id
                ? "bg-cyan-400 text-black"
                : "text-white hover:bg-white/10"
            }`}
          >
            {item.icon}
            <span className="hidden lg:block">{item.label}</span>
          </a>
        ))}

        <a
          href="/resume.pdf"
          target="_blank"
          className="ml-2 rounded-full bg-cyan-400 px-5 py-2 font-semibold text-black hover:scale-105 transition"
        >
          <FaFileDownload />
        </a>
      </motion.nav>

      {/* Mobile Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-5 right-5 z-50 rounded-xl bg-black/70 p-3 backdrop-blur-xl md:hidden"
      >
        {mobileOpen ? (
          <FaTimes className="text-white" />
        ) : (
          <FaBars className="text-white" />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 right-5 z-50 w-64 rounded-3xl border border-white/10 bg-black/90 backdrop-blur-xl p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-white hover:bg-cyan-400 hover:text-black transition"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-xl bg-cyan-400 px-4 py-3 text-center font-semibold text-black"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}