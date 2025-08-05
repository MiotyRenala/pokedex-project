import BannerIntro from "@/components/templates/BannerIntro.tsx";
import React, { useState, useEffect } from "react";
import axios from "axios";
import type { Pokemon } from "@/types/types";

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  
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


  const fetchData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
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
    fetchData();
  }, []);


  return (
    <>
      <div className="bg-white flex flex-col items-center">
        <BannerIntro />
        <hr />
        <div className="grid grid-cols-4 gap-2.5 ">
          {pokemonList.map((pokemon) => (
            <a href="http://localhost:5173/pokemon/:id"
              onClick={"window.location.href='http://localhost:5173/pokemon/:id';"}>
              
            <div
              className="flex-col justify-center w-50 rounded-xl"
              style={{ backgroundColor: typeColor[pokemon.types[0]] }}
             
            >
              <div className="flex flex-col items-center p-3  ">
                {pokemon.id<10 && (
                  <p className="text-xs self-end bg-black bg-opacity-20 px-2 rounded-2xl">#00{pokemon.id}</p>

                )}
                {pokemon.id>9 && (
                  <p className="text-xs self-end bg-black bg-opacity-20 px-2 rounded-2xl">#0{pokemon.id}</p>
                )}
                {pokemon.id>99 && (
                  <p className="text-xs self-end bg-black bg-opacity-20 px-2 rounded-2xl">#{pokemon.id}</p>
                )}
                <img src={pokemon.sprites} alt="" className="w-30" />
                <div className="flex flex-col items-center ">
                  <strong>{pokemon.name}</strong>
                  <div className="flex gap-1">
                  <p className="p-1 px-2 text-white font-bold shadow-lg shadow-black-500/100 border-1  rounded-2xl text-xs"
                   style={{ backgroundColor: typeColor[pokemon.types[0]]}}>
                    {pokemon.types[0]}
                  </p>
                  {pokemon.types[1] && (
                    <p className="p-1 px-2 text-white font-bold shadow-lg shadow-black-500/100 border-1  rounded-2xl text-xs"
                     style={{ backgroundColor: typeColor[pokemon.types[1]]}}> {pokemon.types[1]}</p>
                  )}
                  </div>
                </div>
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
