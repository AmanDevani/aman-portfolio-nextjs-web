"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });

  return (
    <motion.div
      className="absolute inset-x-0 bottom-0 h-0.5 origin-left gradient-border"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
