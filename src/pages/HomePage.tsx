import BannerIntro from "@/components/templates/BannerIntro.tsx";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Heart, Swords, Shield, Zap, ArrowLeft} from "lucide-react";
import type { Pokemon } from "@/types/types";


const HomePage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=08');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPokemonList(data.results);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <>
      <div className="bg-white">
        <BannerIntro/>
        <hr/>
        <div className="">
         <ul>
            {pokemonList.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
         </ul>
        </div>
      </div>
    </>
  )
}

export default HomePage;