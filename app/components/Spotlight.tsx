"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Spotlight() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    stiffness: 140,
    damping: 22,
    mass: 0.3,
  });

  const y = useSpring(mouseY, {
    stiffness: 140,
    damping: 22,
    mass: 0.3,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Cyan Glow */}
      <motion.div
        style={{ x, y }}
        className="fixed left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none z-0"
      />

      {/* Blue Glow */}
      <motion.div
        style={{
          x,
          y,
          scale: 0.65,
        }}
        className="fixed left-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[90px] pointer-events-none z-0"
      />

      {/* Bright Center */}
      <motion.div
        style={{
          x,
          y,
          scale: 0.3,
        }}
        className="fixed left-0 top-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-[45px] pointer-events-none z-0"
      />
    </>
  );
}