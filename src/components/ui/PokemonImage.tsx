import type {PokemonImage} from "@/types/types.ts";

const PokemonImage = ({pokemon}: PokemonImage) => {
  return (
    <img
      src={pokemon.sprites.other["official-artwork"].front_default}
      alt={pokemon.name}
      className="w-72 h-auto p-3"
    />
  )
}

export default PokemonImage;