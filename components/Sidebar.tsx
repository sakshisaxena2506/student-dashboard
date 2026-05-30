 "use client";

import { useState } from "react";
import {
  Home,
  BookOpen,
  BarChart3,
  User,
} from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Home, label: "Home" },
  { icon: BookOpen, label: "Courses" },
  { icon: BarChart3, label: "Analytics" },
  { icon: User, label: "Profile" },
];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  return (
    <>
     
      <nav className="hidden md:flex flex-col bg-[#151821] border-r border-white/10 min-h-screen w-20 lg:w-64 p-4">
        <div className="text-2xl font-bold mb-10 text-center">
          S
        </div>

        <div className="flex flex-col gap-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className="relative flex items-center gap-3 p-3 rounded-xl overflow-hidden"
              >
                {active === item.label && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/20 rounded-xl"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                )}

                <Icon
                  size={22}
                  className="relative z-10"
                />

                <span className="hidden lg:block relative z-10">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#151821] border-t border-white/10 flex justify-around p-4 z-50">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className="relative"
            >
              {active === item.label && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute -inset-2 rounded-xl bg-cyan-500/10"
                />
              )}

              <Icon
                size={22}
                className="relative z-10"
              />
            </button>
          );
        })}
      </nav>
    </>
  );
}