"use client";

import { motion } from "framer-motion";

export function SiteBackground() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        animate={{
          scale: [1, 1.1, 1],
          rotateX: [0, 2, 0],
          rotateY: [0, 2, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute z-10 left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#5558ff36,#000)] hidden sm:block"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
