import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import ActivityCard from "@/components/ActivityCard";
import AnimatedCourses from "@/components/AnimatedCourses";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";

type Course = {
  id: number;
  title: string;
  progress: number;
  icon_name: string;
};

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="min-h-screen bg-[#0f1117] text-white flex items-center justify-center">
        Failed to load courses.
      </main>
    );
  }

   return (
  <main className="min-h-screen bg-[#0f1117] text-white flex">
    <Sidebar />

    <section className="flex-1 p-6">

      <div className="xl:col-span-2">
        <HeroCard />
      </div>

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
        <AnimatedCourses courses={courses || []} />

        <div className="md:col-span-2">
          <ActivityCard />
        </div>
      </motion.section>

    </section>
  </main>
);