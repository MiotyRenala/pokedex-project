import type {FC} from "react";
import type {WheightType} from "@/types/types.ts"
import {Ruler, Box} from "lucide-react";

const Wheight: FC<WheightType> = ({height, weight}) => {
  return (
    <>
      <div className="flex gap-4 w-full text-white mt-6">
        <div className="bg-white/20 border border-white w-full px-4 py-2 rounded-xl flex items-center gap-2">
          <Ruler className="w-5 h-5"/>
          <span>
            <h5 className="text-xs">Taille</h5>
            <span className="text-white font-semibold">{height} m</span>
          </span>
        </div>

        <div className="bg-white/20 border border-white w-full px-4 py-2 rounded-xl flex items-center gap-2">
          <Box className="w-5 h-5"/>
          <span>
            <h5 className="text-xs">Poids</h5>
            <span className="text-white font-semibold">{weight} kg</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default Wheight;