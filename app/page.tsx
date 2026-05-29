 import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import CourseCard from "@/components/CourseCard";
import ActivityCard from "@/components/ActivityCard";

import { supabase } from "../lib/supabase";

type Course = {
  id: number;
  title: string;
  progress: number;
  icon_name: string;
};

export default async function Home() {

  const { data: courses } = await supabase
    .from<Course>("courses")
    .select("*");

  return (
    <main className="min-h-screen bg-[#0f1117] text-white flex">

      <Sidebar />

      <section className="flex-1 p-6">

        <HeroCard />

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">

          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
              icon_name={ course.icon_name}
            />
          ))}

          <ActivityCard/>

        </section>

      </section>

    </main>
  );
}