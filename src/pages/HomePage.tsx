import BannerIntro from "@/components/templates/BannerIntro.tsx";
import {useState, useEffect} from "react";
import axios from "axios";
import type {Pokemon} from "@/types/types";
import Pagination from "@/components/templates/Pagination.tsx";
import {PokemonCard} from "@/components/ui/PokemonCard.tsx";
import {useSearchParams} from "react-router-dom";

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortFilter, setSortFilter] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [ searchParams ] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const typeColor: { [key: string]: string } = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };


  const fetchData = async (page: number) => {
    const limit = 20;
    const offset = (page - 1) * limit;
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      const results = response.data.results;
      setTotalPages(Math.ceil(response.data.count / limit));

      const detailedData = await Promise.all(
        results.map(async (pokemon: { url: string }) => {
          const res = await axios.get(pokemon.url);
          return {
            id: res.data.id,
            name: res.data.name[0].toUpperCase() + res.data.name.slice(1),
            types: res.data.types.map((t: any) => t.type.name),
            sprites: res.data.sprites.other["official-artwork"].front_default,
          };
        })
      );

      setPokemonList(detailedData);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className="bg-white flex flex-col items-center">
        <BannerIntro/>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2.5">
          {pokemonList.map((pokemon, index) => (
            <PokemonCard pokemon={pokemon} key={index}/>
          ))}
        </div>
        <Pagination totalPages={totalPages}/>
      </div>
    </>
  )
}

export default HomePage;

