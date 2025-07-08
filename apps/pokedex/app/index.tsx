import { H4, Pictogram, VSpacer, VStack } from '@pokeworld/ui';
import { useRouter } from 'expo-router';
import debounce from 'lodash/debounce';
import { useCallback, useMemo } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { PokemonListItem } from '@/components/PokemonListItem';
import { PokemonListItemFragment$data } from '@/components/__generated__/PokemonListItemFragment.graphql';
import CustomHeader from '@/components/common/CustomHeader';
import {
  DEFAULT_POKEMON_PAGE_SIZE,
  usePaginatedPokemonList,
} from '@/hooks/usePaginatedPokemonList';
import { PokemonItem } from '@/types';

const PokemonListScreen = () => {
  const router = useRouter();
  const { items, loadMore, loading, canLoadMore } = usePaginatedPokemonList();

  const onLoadMore = useMemo(
    () =>
      debounce(() => {
        if (canLoadMore) {
          loadMore();
        }
      }, 200),
    [canLoadMore, loadMore]
  );

  const onPressPokemon = (pokemon: PokemonListItemFragment$data) => {
    router.push({
      pathname: '/details',
      params: {
        pokemonName: pokemon.name,
        pokemonImage: pokemon.artwork,
      },
    });
  };

  const renderItem = useCallback(
    ({ item }: { item: PokemonItem }) => (
      <PokemonListItem onPress={onPressPokemon} pokemon={item} />
    ),
    []
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => `${item?.name}`}
      ItemSeparatorComponent={() => <VSpacer />}
      renderItem={renderItem}
      contentContainerStyle={styles.containerContent}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.5}
      initialNumToRender={DEFAULT_POKEMON_PAGE_SIZE}
      maxToRenderPerBatch={DEFAULT_POKEMON_PAGE_SIZE}
      removeClippedSubviews
      ListHeaderComponent={<CustomHeader title="Pokédex" />}
      ListFooterComponent={loading ? LoadingSkeletons : undefined}
      ListEmptyComponent={!loading ? EmptyListContent : null}
      style={{ flex: 1 }}
    />
  );
};

const EmptyListContent = (
  <VStack
    space={12}
    style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 40 }}
  >
    <Pictogram name="emptyArchive" />
    <H4>No Pokémon found</H4>
  </VStack>
);

const LoadingSkeletons = (
  <>
    <PokemonListItem />
    <PokemonListItem />
    <PokemonListItem />
  </>
);

const styles = StyleSheet.create({
  containerContent: {
    paddingHorizontal: 14,
  },
});

export default PokemonListScreen;
