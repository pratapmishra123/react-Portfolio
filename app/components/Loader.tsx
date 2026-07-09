"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const bootMessages = [
  "Initializing Neural Engine...",
  "Loading Portfolio Assets...",
  "Connecting AI Modules...",
  "Rendering Interface...",
  "Optimizing Performance...",
  "Launching Portfolio..."
];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    let value = 0;

    const timer = setInterval(() => {
      value += Math.floor(Math.random() * 3) + 1;

      if (value >= 100) {
        value = 100;

        clearInterval(timer);
        setBootComplete(true);
        setTimeout(() => {
          setLoading(false);
        }, 900);
      }

      setProgress(value);

      setMessageIndex(
        Math.min(
          Math.floor((value / 100) * (bootMessages.length - 1)),
          bootMessages.length - 1
        )
      );
    }, 55);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <AnimatePresence>

      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[9999] overflow-hidden bg-[#030712]"
      >

        {/* Background */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_65%)]" />

        {/* Starfield */}
        {/* Animated Starfield */}

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-cyan-300"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.8, 1],
                y: [0, -25, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Rotating Hexagon Grid */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-[0.06]"
        >
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="hex"
                width="60"
                height="52"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M30 1 L59 16 L59 36 L30 51 L1 36 L1 16 Z"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="0.7"
                />
              </pattern>
            </defs>

            <rect
              width="100%"
              height="100%"
              fill="url(#hex)"
            />
          </svg>
        </motion.div>

        {/* Floating Cyan Orbs */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-20 top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-16 right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]"
        />

        {/* Main Content */}

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="relative flex h-[420px] w-[420px] items-center justify-center">

            {/* Outer Glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute h-[360px] w-[360px] rounded-full bg-cyan-400/20 blur-[120px]"
            />

            {/* Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[360px] w-[360px] rounded-full border border-cyan-400/30"
            />

            {/* Ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[300px] w-[300px] rounded-full border-2 border-dashed border-cyan-300/40"
            />

            {/* Ring 3 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[220px] w-[220px] rounded-full border border-white/20"
            />

            {/* Scan Line */}
            <motion.div
              animate={{
                y: [-140, 140, -140],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[2px] w-[220px] bg-cyan-400 blur-sm"
            />

            {/* Floating Particles */}
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-cyan-300"
                initial={{
                  x: Math.random() * 260 - 130,
                  y: Math.random() * 260 - 130,
                }}
                animate={{
                  x: [
                    Math.random() * 260 - 130,
                    Math.random() * 260 - 130,
                  ],
                  y: [
                    Math.random() * 260 - 130,
                    Math.random() * 260 - 130,
                  ],
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.8, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                }}
              />
            ))}

            {/* Glass Core */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="relative z-20 flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/40 bg-white/10 backdrop-blur-2xl shadow-[0_0_80px_rgba(34,211,238,0.35)]"
            >
              <motion.h1
                animate={{
                  textShadow: [
                    "0 0 15px #22d3ee",
                    "0 0 45px #22d3ee",
                    "0 0 15px #22d3ee",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-6xl font-black text-transparent"
              >
                PM
              </motion.h1>
            </motion.div>

          </div>
          {/* Boot Terminal */}

          <div className="mt-16 w-[420px] rounded-3xl border border-cyan-500/20 bg-black/40 p-6 backdrop-blur-2xl">

            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />

              <span className="ml-4 text-xs tracking-widest text-gray-500">
                AI BOOT TERMINAL
              </span>
            </div>

            <div className="space-y-3 font-mono text-sm">

              {bootMessages.map((msg, index) => (
                <motion.div
                  key={msg}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: index <= messageIndex ? 1 : 0.15,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="flex items-center justify-between"
                >
                  <span className="text-cyan-300">
                    {">"} {msg}
                  </span>

                  {index < messageIndex ? (
                    <span className="text-green-400">✓</span>
                  ) : index === messageIndex ? (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                      }}
                      className="text-yellow-400"
                    >
                      ●
                    </motion.span>
                  ) : (
                    <span className="text-gray-600">•</span>
                  )}
                </motion.div>
              ))}

            </div>

            {/* Progress */}

            <div className="mt-8">

              <div className="mb-2 flex justify-between text-sm">

                <span className="text-gray-400">
                  System Progress
                </span>

                <span className="font-semibold text-cyan-400">
                  {progress}%
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">

                <motion.div
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300"
                />

              </div>

            </div>

          </div>
          {/* AI Boot Complete Flash */}

          <AnimatePresence>
            {bootComplete && (
              <>
                {/* Cyan Flash */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.8, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-cyan-400"
                />

                {/* Expanding Ring */}
                <motion.div
                  initial={{
                    scale: 0.2,
                    opacity: 0.8,
                  }}
                  animate={{
                    scale: 8,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-300"
                />

                {/* System Online */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.h1
                    animate={{
                      textShadow: [
                        "0 0 20px #22d3ee",
                        "0 0 60px #22d3ee",
                        "0 0 20px #22d3ee",
                      ],
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="text-5xl font-black tracking-[0.3em] text-cyan-300"
                  >
                    SYSTEM ONLINE
                  </motion.h1>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
