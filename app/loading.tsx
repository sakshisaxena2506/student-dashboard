export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0f1117] p-6">
      <div className="animate-pulse space-y-6">
        <div className="h-32 rounded-3xl bg-zinc-800" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="h-40 rounded-3xl bg-zinc-800" />
          <div className="h-40 rounded-3xl bg-zinc-800" />
          <div className="h-40 rounded-3xl bg-zinc-800" />
        </div>
      </div>
    </main>
  );
}