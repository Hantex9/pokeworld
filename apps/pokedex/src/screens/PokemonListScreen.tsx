import { H4, Pictogram, VSpacer, VStack } from '@pokeworld/ui';
import { useRouter } from 'expo-router';
import debounce from 'lodash/debounce';
import { useCallback, useMemo } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { PokemonListItem } from '@/components/PokemonListItem';
import CustomHeader from '@/components/common/CustomHeader';
import {
  DEFAULT_POKEMON_PAGE_SIZE,
  usePaginatedPokemonList,
} from '@/hooks/usePaginatedPokemonList';
import { PokemonItem } from '@/types';

export const PokemonListScreen = () => {
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

  const onPressPokemon = (pokemon: PokemonItem) => {
    router.push({
      pathname: '/details',
      params: {
        pokemonName: pokemon?.name,
        pokemonImage: pokemon?.artwork,
      },
    });
  };

  const renderItem = useCallback(
    ({ item }: { item: PokemonItem }) => (
      <PokemonListItem
        onPress={onPressPokemon}
        pokemon={item}
        testID={`item-${item?.progressiveId}`}
      />
    ),
    []
  );

  const filteredItems = useMemo(() => items.filter(Boolean), [items]);

  return (
    <FlatList
      data={filteredItems}
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
    <Pictogram name="empty" />
    <H4 testID="no-pokemon-label">No Pokémon found</H4>
  </VStack>
);

const LoadingSkeletons = (
  <VStack space={16}>
    <VSpacer />
    <PokemonListItem />
    <PokemonListItem />
    <PokemonListItem />
  </VStack>
);

const styles = StyleSheet.create({
  containerContent: {
    paddingHorizontal: 14,
  },
});
