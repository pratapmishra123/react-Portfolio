"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-8 right-8 z-50 rounded-full bg-cyan-400 p-4 text-black shadow-xl transition hover:scale-110"
    >
      <ChevronUp size={24} />
    </button>
  );
}