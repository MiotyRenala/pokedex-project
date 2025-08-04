import type {TypeProp} from "@/types/types.ts";

const PokemonTypes = ({ types }: TypeProp) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
      {types.map((type) => (
        <span
          key={type.type.name}
          className="bg-white/20 px-4 py-2 rounded-full border-[0.5px] border-white text-sm capitalize font-bold"
        >
          {type.type.name}
        </span>
      ))}
    </div>
  );
};

export default PokemonTypes;
