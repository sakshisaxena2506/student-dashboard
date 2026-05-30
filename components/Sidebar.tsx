 "use client";

import { useState } from "react";
import {
  Home,
  BookOpen,
  BarChart3,
  User,
  Menu,
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
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Desktop / Tablet Sidebar */}
      <nav
        className={`
          hidden md:flex flex-col
          bg-[#151821]
          border-r border-white/10
          min-h-screen
          p-4
          transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-2xl font-bold">S</div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            <Menu size={18} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className="
                  relative
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  overflow-hidden
                "
              >
                {active === item.label && (
                  <motion.div
                    layoutId="active-tab"
                    className="
                      absolute
                      inset-0
                      rounded-xl
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                    "
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

                {!collapsed && (
                  <span className="relative z-10">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav
        className="
          md:hidden fixed bottom-0
          left-0
          right-0
          z-50
          bg-[#151821] border-t
          border-white/10 flex
          justify-around p-4
        "
      >
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
                  className="
                    absolute
                    -inset-2
                    rounded-xl
                    bg-cyan-500/10
                  "
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
            </button>
          );
        })}
      </nav>
    </>
  );
}