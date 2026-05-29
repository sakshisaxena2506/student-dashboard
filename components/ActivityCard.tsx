 "use client";

import { motion } from "framer-motion";

const activity = [40, 70, 55, 90, 60, 75, 45];

export default function ActivityTile() {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="bg-[#151821] rounded-3xl p-6 border border-white/10"
    >

      <h2 className="text-xl font-semibold">
        Weekly Activity
      </h2>

      <div className="flex items-end gap-3 h-40 mt-8">

        {activity.map((value, index) => (
          <div
            key={index}
            className="flex-1 bg-indigo-500/70 rounded-xl"
            style={{
              height: `${value}%`,
            }}
          />
        ))}

      </div>

    </motion.article>
  );
}