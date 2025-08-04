import type { StatsType } from "@/types/types.ts";
import StatProgressBar from "@/components/ui/StatProgressBar.tsx";

const Stats = ({ stats }: StatsType) => {
  return (
    <div className="bg-white/20 border max-w-full border-white rounded-xl p-5 backdrop-blur-sm">
    <h3 className="text-2xl font-bold mb-4 text-white text-center">Statistiques</h3>
      <div className="space-y-5">
        {stats.map((stat, index) => (
          <StatProgressBar
            key={index}
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
