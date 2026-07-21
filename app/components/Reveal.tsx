"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
}

export default function Reveal({ children }: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      viewport={{ once: false, amount: 0.0 }}
    >
      {children}
    </motion.div>
  );
}