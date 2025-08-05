import type {Badge} from "@/types/types.ts";

const PokemonBadgeType = ({title, size}: Badge) => {
  switch (size) {
    case "xs":
      size = "text-xs"
      break;
    case "sm":
      size = "text-xsm"
      break;
    case "lg":
      size = "text-lg"
      break;
    case "xl":
      size = "text-x"
      break;
    default:
      size = "text-[1rem]"
      break;
  }

  return (
    <>
      <span
        key={title}
        className={`bg-white/20 px-4 py-2 rounded-full ${size} capitalize font-semibold`}
      >
        {title}
      </span>
    </>
  )
}

export default PokemonBadgeType;