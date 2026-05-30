"use client";

import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

type Course = {
  id: number;
  title: string;
  progress: number;
  icon_name: string;
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function AnimatedCourses({
  courses,
}: {
  courses: Course[];
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="contents"
    >
      {courses.map((course) => (
        <motion.div
          key={course.id}
          variants={item}
          whileHover={{
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <CourseCard
            title={course.title}
            progress={course.progress}
            icon_name={course.icon_name}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}