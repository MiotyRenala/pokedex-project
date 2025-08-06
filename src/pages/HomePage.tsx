import BannerIntro from "@/components/templates/BannerIntro.tsx";
import {useState, useEffect} from "react";
import axios from "axios";
import type {Pokemon} from "@/types/types";
import Pagination from "@/components/templates/Pagination.tsx";
import {PokemonCard} from "@/components/ui/PokemonCard.tsx";
import {useSearchParams} from "react-router-dom";
import InputSearch from "@/components/search/InputSearch.tsx";
import FilterDropdown from "@/components/search/FilterDropdown.tsx";

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortFilter, setSortFilter] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const filteredPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue.toLowerCase()));

  filteredPokemon.sort((a, b) =>
    sortFilter === "A-Z"
      ? a.name.localeCompare(b.name)
      : sortFilter === "Z-A"
        ? b.name.localeCompare(a.name)
        : a.id - b.id
  );


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
    <div className="bg-white flex flex-col items-center">
      <BannerIntro/>

      <div className="w-full max-w-6xl">
        <div className="flex justify-center w-full gap-2 mb-4">
          <InputSearch value={searchValue} onChange={setSearchValue}/>
          <FilterDropdown value={sortFilter} onChange={setSortFilter}/>
        </div>

        {filteredPokemon.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPokemon.map((pokemon, index) => (
              <PokemonCard pokemon={pokemon} key={index}/>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-10 text-lg">
            Aucun Pokémon trouvé avec le nom {searchValue}.
          </div>
        )}
      </div>


      <div className="mt-6">
        <Pagination totalPages={totalPages}/>
      </div>
    </div>

  )
}

export default HomePage;

