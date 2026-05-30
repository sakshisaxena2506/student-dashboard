 export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0f1117] text-white flex">
      <section className="flex-1 p-6">
        <div className="animate-pulse">
          {/* Hero Tile */}
          <div className="h-40 rounded-3xl bg-zinc-800 mb-6" />

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Course Cards */}
            <div className="h-44 rounded-3xl bg-zinc-800" />
            <div className="h-44 rounded-3xl bg-zinc-800" />
            <div className="h-44 rounded-3xl bg-zinc-800" />

            {/* Activity Tile */}
            <div className="md:col-span-2 h-56 rounded-3xl bg-zinc-800" />
          </div>
        </div>
      </section>
    </main>
  );
}