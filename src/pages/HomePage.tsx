import BannerIntro from "@/components/templates/BannerIntro.tsx";
import axios from "axios";
import type {Pokemon} from "@/types/types";
import Pagination from "@/components/templates/Pagination.tsx";
import {PokemonCard} from "@/components/ui/PokemonCard.tsx";

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortFilter, setSortFilter] = useState("");
  
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
      const results = response.data.results;
      const detailedData = await Promise.all(
        results.map(async (pokemon: { url: string }) => {
          const res = await axios.get(pokemon.url);
          return {
            id: res.data.id,
            name: res.data.name[0].toUpperCase() + res.data.name.slice(1),
            types: res.data.types.map((t: string[]) => t.type.name),
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
    fetchData(5);
  }, []);

  let filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  if (sortFilter === "A-Z") {
    filteredPokemon.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortFilter === "Z-A") {
    filteredPokemon.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    filteredPokemon.sort((a, b) => a.id - b.id);
  }
  
  return (
    <>
      <div className="bg-white flex flex-col items-center">
        <BannerIntro />

        <div className="flex flex-row justify-center gap-2 w-[50vw] h-[20vh]">
          <InputSearch value={searchValue} onChange={setSearchValue} />
          <FilterDropdown value={sortFilter} onChange={setSortFilter} />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2.5">
          {pokemonList.map((pokemon, index) => (
            <PokemonCard pokemon={pokemon} key={index} />
          ))}
        </div>
        
        <Pagination/>
      </div>
    </>
  );
};

export default HomePage;