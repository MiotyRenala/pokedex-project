import type {Stat} from "@/types/types.ts";

const StatProgressBar = ({label, icon: Icon, value}: Stat) => {
  const width = Math.min((value / 150) * 100, 100);

  return (
    <div className="flex flex-col items-center gap-4 text-white text-sm">
      <div className="flex w-full items-center justify-between">
        <span className="flex items-center gap-2">
          <Icon className="w-5 h-5" />
          {label}
        </span>
        <span className="w-10 text-right font-bold">{value}</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
        <div
          className={`h-3 rounded-l-full bg-black transition-all duration-700`}
          style={{width: `${width}%`}}
        ></div>
      </div>
    </div>
  );
};

export default StatProgressBar;
