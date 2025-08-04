import type {LucideIcon} from "lucide-react";

export type Badge = {
  title: string
}

export interface WheightType {
  height: number;
  weight: number;
}

export interface Stat {
  label: string;
  icon: LucideIcon;
  value: number;
}

export interface StatsType {
  stats: Stat[]
}

export interface Pokemon {
  id: number;
  name: string;
  description?: string;
  types: string[];
  height: number;
  weight: number;
  image: string;
  stats: Stat[];
}

export interface Species {
  text: object;
  color?: { name: string };
  growth_rate?: { name: string };
  shape?: { name: string };
}