 "use client";

import BentoCard from "./BentoCard";

const activity = Array.from(
  { length: 35 },
  () => Math.floor(Math.random() * 4)
);

export default function ActivityCard() {
  return (
    <BentoCard className="col-span-1 md:col-span-2">
      <h2 className="text-xl font-semibold">
        Learning Activity
      </h2>

      <p className="text-gray-400 text-sm mt-2">
        Last 5 weeks of progress
      </p>

      <div className="grid grid-cols-7 gap-2 mt-6">
        {activity.map((value, index) => (
          <div
            key={index}
            className={`
              h-6 w-6 rounded-md
              ${
                value === 0
                  ? "bg-zinc-800"
                  : value === 1
                  ? "bg-cyan-900"
                  : value === 2
                  ? "bg-cyan-700"
                  : "bg-cyan-500"
              }
            `}
          />
        ))}
      </div>
    </BentoCard>
  );
}