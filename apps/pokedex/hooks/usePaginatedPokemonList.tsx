import { useCallback, useEffect, useState } from 'react';
import { useRelayEnvironment, fetchQuery } from 'react-relay';

import { POKEMON_LIST_QUERY } from '@/queries/PokemonListQuery';
import { PokemonListQuery } from '@/queries/__generated__/PokemonListQuery.graphql';

export const DEFAULT_POKEMON_PAGE_SIZE = 25;

export type PokemonItem = NonNullable<
  NonNullable<PokemonListQuery['response']['pokemons']>['results']
>[number];

/**
 * Custom  hook that fetches a paginated list of Pokémon using an offset/limit approach.
 * Since Relay doesn't natively support offset-based pagination, this hook uses `fetchQuery` to manually query data
 */
export function usePaginatedPokemonList() {
  const env = useRelayEnvironment();
  const [items, setItems] = useState<PokemonItem[]>([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const canLoadMore = total === null || (items?.length || 0) < total;

  const loadMore = useCallback(async () => {
    if (loading || !canLoadMore) return;

    setLoading(true);
    setError(null);

    try {
      const data = await fetchQuery<PokemonListQuery>(env, POKEMON_LIST_QUERY, {
        limit: DEFAULT_POKEMON_PAGE_SIZE,
        offset,
      }).toPromise();

      const newItems = data?.pokemons?.results?.filter(Boolean) ?? [];
      const newTotal = data?.pokemons?.count ?? null;

      setItems((prev) => (Array.isArray(prev) ? [...prev, ...newItems] : [...newItems]));
      setOffset((prev) => data?.pokemons?.nextOffset ?? prev + DEFAULT_POKEMON_PAGE_SIZE);
      if (total === null && newTotal !== null) {
        setTotal(newTotal);
      }
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [env, offset, total, canLoadMore, loading]);

  useEffect(() => {
    loadMore();
  }, []);

  return {
    items,
    loadMore,
    loading,
    error,
    canLoadMore,
  };
}
