import type {Pokemon} from "@/types/types.ts";
import PokemonBadgeType from "@/components/ui/PokemonBadgeType.tsx";

const typeColor: { [key: string]: string } = {
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  bug: "#A8B820",
  normal: "#A8A878",
};

export const PokemonCard = ({pokemon}: { pokemon: Pokemon }) => {
  const formatId = (id: number) => {
    if (id < 10) return `#00${id}`;
    if (id < 100) return `#0${id}`;
    return `#${id}`;
  };

  return (
    <a href={`/pokemon/${pokemon.id}`}>
      <div
        className="flex-col bg-black bg-[length:20px_20px] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] justify-center w-72 rounded-xl"
        style={{backgroundColor: typeColor[pokemon.types[0]] || "#888"}}
      >
        <div className="flex flex-col items-center p-3">
          <p className="text-xs self-end bg-black bg-opacity-20 px-2 rounded-2xl">
            {formatId(pokemon.id)}
          </p>

          <img src={pokemon.sprites} alt={pokemon.name} className="w-30"/>

          <div className="flex flex-col items-center mt-2">
            <strong className="capitalize">{pokemon.name}</strong>

            <div className="flex gap-1 mt-1 text-white">
              {pokemon.types.map((type, index) => (
               <PokemonBadgeType title={type} key={index} size={"xs"} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
