 "use client";

import { motion } from "framer-motion";
import BentoCard from "./BentoCard";
import {
  BookOpen,
  Brain,
  Database,
} from "lucide-react";

type Props = {
  title: string;
  progress: number;
  icon_name: string;
};

const icons = {
  BookOpen,
  Brain,
  Database,
};

export default function CourseCard({
  title,
  progress,
  icon_name,
}: Props) {
  const Icon =
    icons[icon_name as keyof typeof icons] ||
    BookOpen;

  return (
    <BentoCard>
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
          <Icon size={22} />
        </div>

        <h2 className="text-lg font-semibold">
          {title}
        </h2>
      </div>

      <p className="text-gray-400 mt-4 text-sm">
        Progress: {progress}%
      </p>

      <div className="w-full h-3 bg-black/30 rounded-full mt-4 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />
      </div>
    </BentoCard>
  );
}