import type { StatsType } from "@/types/types.ts";
import StatProgressBar from "@/components/ui/StatProgressBar.tsx";

const Stats = ({ stats }: StatsType) => {
  return (
    <div className="bg-green-400/80 border border-white rounded-xl p-4">
      <h3 className="text-2xl font-bold mb-4 text-white text-center">Statistiques</h3>
      <div className="space-y-3">
        {stats.map((stat) => (
          <StatProgressBar
            key={stat.label}
            label={stat.label}
            icon={stat.icon}
            value={stat.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Stats;
