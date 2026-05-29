"use client";

import { motion } from "framer-motion";
import { BookOpen,Brain,Database,} from "lucide-react";

type Props = {
  title: string;
  progress: number;
  icon_name: string;
};

const icons = {BookOpen,Brain,Database,};

export default function CourseCard({title,progress,icon_name,
}: Props) {

  const Icon =
    icons[icon_name as keyof typeof icons] || BookOpen;

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

      <div className="flex items-center gap-3">

        <div className="p-3 rounded-xl bg-indigo-500/20">
          <Icon size={22} />
        </div>

        <h2 className="text-xl font-semibold">
          {title}
        </h2>

      </div>

      <p className="text-gray-400 mt-4">
        Progress: {progress}%
      </p>

      <div className="w-full h-3 bg-black/30 rounded-full mt-4 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
          className="h-3 bg-indigo-500 rounded-full"
        />

      </div>

    </motion.article>
  );
}