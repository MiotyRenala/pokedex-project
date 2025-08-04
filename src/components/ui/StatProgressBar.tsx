import type {Stat} from "@/types/types";

const StatProgressBar = ({label, value, icon: Icon}: Stat) => {
  const width = Math.min((value / 150) * 100, 100);

  return (
    <div className="flex flex-col gap-2 text-white text-sm">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2 capitalize text-xs font-bold">
          <Icon size={20} color="white" />
          {label}
        </span>
        <span className="font-bold">{value}</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 rounded-l-full bg-black"
          style={{width: `${width}%`}}
        ></div>
      </div>
    </div>
  );
};

export default StatProgressBar;
