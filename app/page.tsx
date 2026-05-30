import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import ActivityCard from "@/components/ActivityCard";
import AnimatedCourses from "@/components/AnimatedCourses";
import { supabase } from "@/lib/supabase";

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
        <HeroCard />

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
          <AnimatedCourses courses={courses || []} />
          <ActivityCard />
        </section>
      </section>
    </main>
  );
}