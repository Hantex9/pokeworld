import { PokemonStats, PokemonTypes } from '@/types';

export const POKEMON_TYPES_COLOR_MAP: Record<PokemonTypes, string> = {
  normal: '#A8A77A',
  fighting: '#C22E28',
  flying: '#A98FF3',
  poison: '#A33EA1',
  ground: '#E2BF65',
  rock: '#B6A136',
  bug: '#A6B91A',
  ghost: '#735797',
  steel: '#B7B7CE',
  fire: '#EE8130',
  water: '#6390F0',
  grass: '#7AC74C',
  electric: '#F7D02C',
  psychic: '#F95587',
  ice: '#96D9D6',
  dragon: '#6F35FC',
  dark: '#705746',
  fairy: '#D685AD',
  stellar: '#5F5FD6',
  unknown: '#AAAAAA',
  shadow: '#493963',
};

export const POKEMON_STATS_NAME_MAP: Record<PokemonStats, string> = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  speed: 'Speed',
  'special-attack': 'Sp. Attack',
  'special-defense': 'Sp. Defense',
};
