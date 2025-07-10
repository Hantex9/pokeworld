import { PokemonListQuery } from '@/queries/__generated__/PokemonListQuery.graphql';

export type PokemonItem = NonNullable<
  NonNullable<PokemonListQuery['response']['pokemons']>['results']
>[number];

export type PokemonTypes =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'stellar'
  | 'unknown'
  | 'shadow';

export type PokemonStats =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed';
