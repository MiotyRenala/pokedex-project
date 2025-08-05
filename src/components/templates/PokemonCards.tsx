import React from "react";

type PokemonCardsProps = {
  id: number;
  name: string;
  types: string[];
  sprites: { other: { "official-artwork": { front_default: string; }; }; };
  typeColor: { [key: string]: string };
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

const PokemonCards = ({
  id,
  name,
  types,
  sprites,
  typeColor,
}: PokemonCardsProps) => {
  return (
    <a href={`http://localhost:5173/pokemon/${id}`}>
      <div
        className="flex-col justify-center w-50 rounded-xl"
        style={{ backgroundColor: typeColor[types[0]] }}
      >
        <div className="flex flex-col items-center p-3  ">
          {id < 10 && (
            <p className="text-xs self-end bg-black bg-opacity-20 px-2 rounded-2xl">
              #00{id}
            </p>
          )}
          {id > 9 && (
            <p className="text-xs self-end bg-black bg-opacity-20 px-2 rounded-2xl">
              #0{id}
            </p>
          )}
          {id > 99 && (
            <p className="text-xs self-end bg-black bg-opacity-20 px-2 rounded-2xl">
              #{id}
            </p>
          )}
          <img src={sprites} alt="" className="w-30" />
          <div className="flex flex-col items-center ">
            <strong>{name}</strong>
            <div className="flex gap-1">
              <p
                className="p-1 px-2 text-white font-bold shadow-lg shadow-black-500/100 border-1  rounded-2xl text-xs"
                style={{ backgroundColor: typeColor[types[0]] }}
              >
                {types[0]}
              </p>
              {types[1] && (
                <p
                  className="p-1 px-2 text-white font-bold shadow-lg shadow-black-500/100 border-1  rounded-2xl text-xs"
                  style={{
                    backgroundColor: typeColor[types[1]],
                  }}
                >
                  {" "}
                  {types[1]}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
export default PokemonCards;
