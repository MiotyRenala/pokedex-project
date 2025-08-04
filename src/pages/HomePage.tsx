import BannerIntro from "@/components/templates/BannerIntro.tsx";
import InputSearch from "@/components/search/InputSearch";
import React, { useState, useEffect } from "react";
import axios from "axios";
import type { Pokemon } from "@/types/types";

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const results = response.data.results;
      const detailedData = await Promise.all(
        results.map(async (pokemon: { url: string }) => {
          const res = await axios.get(pokemon.url);
          return {
            id: res.data.id,
            name: res.data.name,
            types: res.data.types.map((t: any) => t.type.name).join(", "),
            sprites: res.data.sprites.front_default,
          };
        })
      );
      setPokemonList(detailedData);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="bg-white">
        <BannerIntro />
        <InputSearch value={searchValue} onChange={setSearchValue} />
        <hr />
        <div className="grid grid-cols-4 gap-2.5 ml-5 ">
          {filteredPokemon.map((pokemon) => (
            <div className="flex-col justify-center items-center  border-2 " key={pokemon.id}>
              <p>{pokemon.id}</p>
              <img src={pokemon.sprites} alt="" />
              <div>
                <strong>{pokemon.name}</strong>
                <p>{pokemon.types}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
