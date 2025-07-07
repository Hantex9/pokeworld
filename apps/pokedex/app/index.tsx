import { useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import { PokemonListItem } from '@/components/PokemonListItem';
import { usePaginatedPokemonList } from '@/hooks/usePaginatedPokemonList';

const PokemonListScreen = () => {
  const router = useRouter();
  const { items, loadMore, loading, canLoadMore } = usePaginatedPokemonList();

  const onLoadMore = () => {
    if (canLoadMore) {
      loadMore();
    }
  };

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => `${item?.name}`}
      renderItem={({ item }) => <PokemonListItem pokemon={item} />}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <ActivityIndicator size="large" /> : undefined}
      style={{ flex: 1 }}
    />
  );
};

export default PokemonListScreen;
