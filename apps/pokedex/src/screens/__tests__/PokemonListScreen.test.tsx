import { useRouter } from 'expo-router';
import React from 'react';

import { PokemonListScreen } from '../PokemonListScreen';

import { usePaginatedPokemonList } from '@/hooks/usePaginatedPokemonList';
import { render, fireEvent, waitFor } from '@/utils/testWrapper';

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/hooks/usePaginatedPokemonList', () => ({
  usePaginatedPokemonList: jest.fn(),
  DEFAULT_POKEMON_PAGE_SIZE: 25,
}));

jest.mock('react-native-safe-area-context', () => {
  const useSafeAreaInsets = () => ({ top: 0 });
  return {
    useSafeAreaInsets,
  };
});

const mockedUsePaginatedPokemonList = jest.mocked(usePaginatedPokemonList);

const MOCKED_POKEMON_LIST = [
  {
    name: 'Bulbasaur',
    progressiveId: 1,
    artwork: 'bulbasaur.png',
    dreamworld: 'bulbasaur-dream.png',
    image: 'bulbasaur-img.png',
    url: 'url',
  },
  {
    name: 'Charmander',
    progressiveId: 2,
    artwork: 'charmander.png',
    dreamworld: 'charmander-dream.png',
    image: 'charmander-img.png',
    url: 'url',
  },
];

describe('PokemonListScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders a list of Pokémon when items not empty and not in loading', () => {
    mockedUsePaginatedPokemonList.mockReturnValue({
      items: MOCKED_POKEMON_LIST,
      loadMore: jest.fn(),
      loading: false,
      canLoadMore: false,
      error: null,
    });
    const { getByTestId, getByText } = render(<PokemonListScreen />);
    MOCKED_POKEMON_LIST.forEach((mockedPokemon) => {
      expect(getByText(mockedPokemon.name)).toBeTruthy();
      expect(getByTestId(`item-${mockedPokemon.progressiveId}`)).toBeTruthy();
    });
  });

  it('shows empty state when no Pokémon are found', () => {
    mockedUsePaginatedPokemonList.mockReturnValue({
      items: [],
      loadMore: jest.fn(),
      loading: false,
      canLoadMore: false,
      error: null,
    });
    const { getByTestId } = render(<PokemonListScreen />);
    expect(getByTestId('no-pokemon-label')).toBeTruthy();
  });

  it('shows loading skeletons when loading', () => {
    mockedUsePaginatedPokemonList.mockReturnValue({
      items: [],
      loadMore: jest.fn(),
      loading: true,
      canLoadMore: false,
      error: null,
    });
    const { getAllByTestId } = render(<PokemonListScreen />);
    expect(getAllByTestId('item-skeleton')).toBeTruthy();
  });

  it('navigates to details screen on Pokémon press', async () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });
    mockedUsePaginatedPokemonList.mockReturnValue({
      items: MOCKED_POKEMON_LIST,
      loadMore: jest.fn(),
      loading: false,
      canLoadMore: false,
      error: null,
    });
    const { getByTestId } = render(<PokemonListScreen />);
    fireEvent.press(getByTestId('item-1'));
    await waitFor(() => {
      expect(push).toHaveBeenCalledWith({
        pathname: '/details',
        params: {
          pokemonName: MOCKED_POKEMON_LIST[0].name,
          pokemonImage: MOCKED_POKEMON_LIST[0].artwork,
        },
      });
    });
  });
});
