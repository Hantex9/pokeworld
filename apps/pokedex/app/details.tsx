import { useLocalSearchParams } from 'expo-router';
import { Suspense } from 'react';

import { PokemonDetails, PokemonDetailsSkeleton } from '@/components/PokemonDetails';

type PokemonDetailsScreenParams = {
  pokemonName: string;
  pokemonImage?: string;
};

const PokemonDetailsScreen = () => {
  const { pokemonName, pokemonImage } = useLocalSearchParams<PokemonDetailsScreenParams>();

  return (
    <Suspense fallback={<PokemonDetailsSkeleton />}>
      <PokemonDetails pokemonName={pokemonName} pokemonImage={pokemonImage} />
    </Suspense>
  );
};

export default PokemonDetailsScreen;
