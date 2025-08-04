import type {SpeciesType} from "@/types/types.ts";


const PokemonDescription = ({species}: SpeciesType) => {
  return (
    <p className="text-white/80 text-sm max-w-md">
      {species.flavor_text_entries.find((entry: any) => entry.language.name === "fr")?.flavor_text.replace(/\f/g, " ") ||
        "Aucune description."}
    </p>
  )
}

export default PokemonDescription;