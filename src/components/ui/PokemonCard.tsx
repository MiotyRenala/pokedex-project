import type {Pokemon} from "@/types/types.ts";
import PokemonBadgeType from "@/components/ui/PokemonBadgeType.tsx";

const typeColor: { [key: string]: string } = {
  fire: "#f35050",
  water: "#3b82f6",
  grass: "#11b34e",
  electric: "#eab308",
  bug: "#50df83",
  normal: "#7e838a",
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
          <p className="text-xs self-end bg-black text-white py-2 px-3 flex items-center font-semibold bg-opacity-20 rounded-2xl">
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
