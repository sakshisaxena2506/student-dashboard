 export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0f1117] p-8">

      <div className="animate-pulse space-y-6">

        <div className="h-40 rounded-3xl bg-[#151821]" />

        <div className="grid grid-cols-3 gap-6">

          <div className="h-48 rounded-3xl bg-[#151821]" />
          <div className="h-48 rounded-3xl bg-[#151821]" />
          <div className="h-48 rounded-3xl bg-[#151821]" />

        </div>

      </div>

    </main>
  );
}