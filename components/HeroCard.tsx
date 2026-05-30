 "use client";

import { motion } from "framer-motion";
import BentoCard from "./BentoCard";

export default function HeroCard() {
  return (
    <BentoCard className="min-h-[220px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold">
          Welcome back, Sakshi 👋
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Ready to continue your learning journey?
        </p>

        <div className="flex items-center gap-3 mt-8">
          <div className="px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20">
            🔥 12 Day Streak
          </div>

          <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            📚 3 Lessons Completed
          </div>
        </div>
      </motion.div>
    </BentoCard>
  );
}