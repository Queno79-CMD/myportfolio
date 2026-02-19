"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}

