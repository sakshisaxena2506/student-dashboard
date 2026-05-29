"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
      className="bg-[#151821] border border-white/10 rounded-3xl p-8"
    >

      <h1 className="text-3xl font-bold">
        Welcome back, Sakshi 👋
      </h1>

      <p className="text-gray-400 mt-3">
        You completed 3 lessons today.
      </p>

      <div className="mt-6 inline-block bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-xl">
        🔥 12 Day Streak
      </div>

    </motion.section>
  );
}