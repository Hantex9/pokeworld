import { useLocalSearchParams } from 'expo-router';
import { Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryLoader } from 'react-relay';

import { PokemonDetails, PokemonDetailsSkeleton } from '@/components/PokemonDetails';
import { GenericErrorPage } from '@/components/common/GenericErrorPage';
import { POKEMON_DETAILS_QUERY } from '@/queries/PokemonDetailsQuery';
import { PokemonDetailsQuery } from '@/queries/__generated__/PokemonDetailsQuery.graphql';

type PokemonDetailsScreenParams = {
  pokemonName: string;
  pokemonImage?: string;
};

export const PokemonDetailsScreen = () => {
  const { pokemonName, pokemonImage } = useLocalSearchParams<PokemonDetailsScreenParams>();
  const [queryRef, loadQuery] = useQueryLoader<PokemonDetailsQuery>(POKEMON_DETAILS_QUERY);

  useEffect(() => {
    if (pokemonName) {
      loadQuery({ name: pokemonName }, { fetchPolicy: 'store-or-network' });
    }
  }, []);

  if (!queryRef) return <PokemonDetailsSkeleton />;

  return (
    <ErrorBoundary
      fallback={
        <GenericErrorPage
          text="There was an error while fetching the Pokémon details"
          pictogram="umbrella"
        />
      }
    >
      <Suspense fallback={<PokemonDetailsSkeleton />}>
        <PokemonDetails queryRef={queryRef} pokemonImage={pokemonImage} />
      </Suspense>
    </ErrorBoundary>
  );
};
