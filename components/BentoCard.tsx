"use client";

import { motion } from "framer-motion";

type BentoCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function BentoCard({
  children,
  className = "",
}: BentoCardProps) {
  return (
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-5
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.article>
  );
}