import type {Badge} from "@/types/types.ts";

const PokemonBadgeType = ({title}: Badge) => {
  return (
    <>
      <span
        key={title}
        className="bg-white/20 px-4 py-2 rounded-full text-sm capitalize font-semibold"
      >
        {title}
      </span>
    </>
  )
}

export default PokemonBadgeType;