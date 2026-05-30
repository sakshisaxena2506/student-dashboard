"use client";

import { motion } from "framer-motion";

export default function DashboardGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6"
    >
      {children}
    </motion.section>
  );
}