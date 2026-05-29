"use client";

import { Home, BookOpen, BarChart3, User } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Home, label: "Home" },
  { icon: BookOpen, label: "Courses" },
  { icon: BarChart3, label: "Analytics" },
  { icon: User, label: "Profile" },
];

export default function Sidebar() {
  return (
    <nav className="w-20 md:w-24 bg-[#151821] border-r border-white/10 min-h-screen p-4 flex flex-col items-center">

      <div className="text-2xl font-bold mb-10">
        S
      </div>

      <div className="flex flex-col gap-4">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <motion.button
              key={item.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-2xl hover:bg-white/10 transition"
            >
              <Icon size={22} />
            </motion.button>
          );
        })}

      </div>

    </nav>
  );
} 
<div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#151821] border-t border-white/10 flex justify-around p-4">

  {items.map((item) => {
    const Icon = item.icon;

    return (
      <button key={item.label}>
        <Icon size={22} />
      </button>
    );
  })}

</div>