import { POKEMON_STATS_NAME_MAP, POKEMON_TYPES_COLOR_MAP } from '@/constants';
import { PokemonStats, PokemonTypes } from '@/types';

export const getPokemonTypeColor = (pokemonType?: PokemonTypes | undefined | null) => {
  if (!pokemonType) {
    return POKEMON_TYPES_COLOR_MAP['unknown'];
  }
  return POKEMON_TYPES_COLOR_MAP[pokemonType];
};

export const getPokemonStatName = (stat?: PokemonStats | undefined | null) => {
  if (!stat) {
    return 'Unknown';
  }
  return POKEMON_STATS_NAME_MAP[stat];
};

export const toDecimal = (num: number): number => {
  if (typeof num !== 'number' || isNaN(num)) return NaN;
  const numStr = num.toString();
  if (numStr.length === 1) {
    return num / 10;
  }
  const intPart = numStr.slice(0, -1);
  const decimalPart = numStr.slice(-1);
  return parseFloat(`${intPart}.${decimalPart}`);
};

export const padToThreeDigits = (num: number): string => {
  return num.toString().padStart(3, '0');
};
