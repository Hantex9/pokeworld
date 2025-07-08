import { useLocalSearchParams } from 'expo-router';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { PokemonDetails, PokemonDetailsSkeleton } from '@/components/PokemonDetails';
import { GenericErrorPage } from '@/components/common/GenericErrorPage';

type PokemonDetailsScreenParams = {
  pokemonName: string;
  pokemonImage?: string;
};

const PokemonDetailsScreen = () => {
  const { pokemonName, pokemonImage } = useLocalSearchParams<PokemonDetailsScreenParams>();

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
        <PokemonDetails pokemonName={pokemonName} pokemonImage={pokemonImage} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default PokemonDetailsScreen;
