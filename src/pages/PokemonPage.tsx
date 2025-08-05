import {useQuery} from "@tanstack/react-query";
import {Link, useParams} from "react-router-dom";
import {ArrowLeft, Heart, Shield, Swords, Zap} from "lucide-react";
import type {Pokemon, Species, Stat} from "@/types/types"
import axios from "axios";
import Wheight from "@/components/ui/Wheight.tsx";
import Stats from "@/components/templates/Stats.tsx";
import PokemonTypes from "@/components/templates/PokemonTypes.tsx";
import PokemonDescription from "@/components/ui/PokemonDescription.tsx";
import PokemonImage from "@/components/ui/PokemonImage.tsx";

const PokemonPage = () => {
  const {id} = useParams<{ id: string }>();

  const fetchPokemon = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.data;
  };

  const fetchSpecies = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    return res.data;
  };

  const {
    data: pokemon,
    isLoading: loadingPokemon,
  } = useQuery<Pokemon>({
    queryKey: ["pokemon", id],
    queryFn: fetchPokemon,
  });

  const {
    data: species,
    isLoading: loadingSpecies,
  } = useQuery<Species>({
    queryKey: ["species", id],
    queryFn: fetchSpecies,
  });

  if (loadingPokemon || loadingSpecies || !pokemon || !species)
    return <p className="text-center mt-10 text-lg">Chargement...</p>;

  const statIconMap: Record<string, { label: string; icon: any }> = {
    hp: {label: "Hp", icon: Heart},
    attack: {label: "Attack", icon: Swords},
    defense: {label: "Defense", icon: Shield},
    "special-attack": {label: "Special Attack", icon: Zap},
    "special-defense": {label: "Special Defense", icon: Shield},
    speed: {label: "Speed", icon: Zap},
  };

  const formattedStats: Stat[] = pokemon.stats.map((stat) => {
    const map = statIconMap[stat.stat.name] || {
      label: stat.stat.name,
      icon: Heart,
    };
    return {
      label: map.label,
      icon: map.icon,
      value: stat.base_stat,
    };
  });

  console.log(pokemon)
  console.log(species)

  return (
    <div className={`min-h-screen w-full bg-${species.color.name}-600 text-white`}>
      <div className="max-w-6xl mx-auto p-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 border text-sm border-white/50 rounded bg-white/20 backdrop-blur px-4 py-2"
        >
          <ArrowLeft size={15} />
          Retour
        </Link>

        <div className="flex flex-col md:flex-row items-center gap-6 leading-6">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <PokemonImage pokemon={pokemon} />
          </div>

          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <p className="text-white/70 text-xl mb-2">
              #{pokemon.id.toString().padStart(3, "0")}
            </p>

            <h1 className="text-4xl font-semibold capitalize">{pokemon.name}</h1>

            <PokemonTypes types={pokemon.types} />

            <PokemonDescription species={species} />

            <Wheight height={pokemon.height / 10} weight={pokemon.weight / 10} />
          </div>
        </div>
      </div>

      <div className={`bg-${species.color.name}-400 py-12`}>
        <div className="max-w-6xl mx-auto px-6">
          <Stats stats={formattedStats} color={species.color.name} />
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
