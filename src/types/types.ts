import type {LucideIcon} from "lucide-react";

export type Badge = {
  title: string;
  size?: string
}

export interface WheightType {
  height: number;
  weight: number;
}

export interface Stat {
  label: string;
  icon: LucideIcon;
  value: number;
  color?: string
}

export interface StatsType {
  stats: Stat[];
}

export interface StatObject {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: StatObject[];
  types: any[];
  image: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export interface Species {
  text: object;
  color?: { name: string };
  growth_rate?: { name: string };
  shape?: { name: string };
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version: {
      name: string;
      url: string;
    }
  }
}

export interface PokemonImage {
  pokemon: Pokemon;
}

export interface TypeProp {
  types: {
    type: {
      name: string;
    };
  }[];
}

export interface SpeciesType {
  species: Species
}