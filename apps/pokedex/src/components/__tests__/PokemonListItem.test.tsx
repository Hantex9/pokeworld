import { PokemonListItem } from '../PokemonListItem';

import { PokemonItem } from '@/types';
import { render } from '@/utils/testWrapper';

describe('PokemonListItem', () => {
  const MOCKED_POKEMON: PokemonItem = {
    name: 'Bulbasaur',
    progressiveId: 1,
    artwork: 'MOCK',
    dreamworld: 'MOCK',
    image: 'MOCK',
    url: 'MOCK',
  };

  it('should display capitalized Pokemon name', () => {
    const { getByTestId } = render(<PokemonListItem pokemon={MOCKED_POKEMON} />);
    const pokemonNameItem = getByTestId('pokemon-name');
    expect(pokemonNameItem).toBeDefined();
    expect(pokemonNameItem).toHaveTextContent('Bulbasaur');
  });
});
