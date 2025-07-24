import { getPokemonTypeColor, getPokemonStatName, toDecimal, padToThreeDigits } from '../index';

import { POKEMON_TYPES_COLOR_MAP, POKEMON_STATS_NAME_MAP } from '@/constants';
import { PokemonTypes, PokemonStats } from '@/types';

describe('getPokemonTypeColor', () => {
  it('returns correct color for each PokemonType', () => {
    (Object.keys(POKEMON_TYPES_COLOR_MAP) as PokemonTypes[]).forEach((type) => {
      expect(getPokemonTypeColor(type)).toBe(POKEMON_TYPES_COLOR_MAP[type]);
    });
  });

  it('returns unknown color for undefined/null/empty case', () => {
    expect(getPokemonTypeColor(undefined)).toBe(POKEMON_TYPES_COLOR_MAP['unknown']);
    expect(getPokemonTypeColor(null)).toBe(POKEMON_TYPES_COLOR_MAP['unknown']);
    expect(getPokemonTypeColor()).toBe(POKEMON_TYPES_COLOR_MAP['unknown']);
  });
});

describe('getPokemonStatName', () => {
  it('returns correct name for each PokemonStat', () => {
    (Object.keys(POKEMON_STATS_NAME_MAP) as PokemonStats[]).forEach((stat) => {
      expect(getPokemonStatName(stat)).toBe(POKEMON_STATS_NAME_MAP[stat]);
    });
  });

  it('returns "Unknown" for undefined/null/empty case', () => {
    expect(getPokemonStatName(undefined)).toBe('Unknown');
    expect(getPokemonStatName(null)).toBe('Unknown');
    expect(getPokemonStatName()).toBe('Unknown');
  });
});

describe('toDecimal', () => {
  it('converts single digit to decimal', () => {
    expect(toDecimal(5)).toBe(0.5);
    expect(toDecimal(0)).toBe(0);
  });

  it('converts multi-digit numbers to decimal', () => {
    expect(toDecimal(72)).toBe(7.2);
    expect(toDecimal(123)).toBe(12.3);
    expect(toDecimal(10)).toBe(1.0);
  });

  it('returns NaN for non-number or NaN', () => {
    expect(isNaN(toDecimal(NaN))).toBe(true);
  });
});

describe('padToThreeDigits', () => {
  it('pads numbers to three digits', () => {
    expect(padToThreeDigits(1)).toBe('001');
    expect(padToThreeDigits(12)).toBe('012');
    expect(padToThreeDigits(123)).toBe('123');
    expect(padToThreeDigits(0)).toBe('000');
    expect(padToThreeDigits(9999)).toBe('9999');
  });
});
