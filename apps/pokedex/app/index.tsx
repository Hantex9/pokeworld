import { useRouter } from 'expo-router';
import { Button, View, Text } from 'react-native';
import { useLazyLoadQuery } from 'react-relay';
import { graphql } from 'relay-runtime';

import { appPokemonListQuery } from './__generated__/appPokemonListQuery.graphql';

import { PokemonListItem } from '@/components/PokemonListItem';

const PokemonListQuery = graphql`
  query appPokemonListQuery($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        ...PokemonListItemFragment
        name
      }
    }
  }
`;

const HomeScreen = () => {
  const router = useRouter();
  const data = useLazyLoadQuery<appPokemonListQuery>(PokemonListQuery, { limit: 20, offset: 0 });

  console.log(data);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Home with list of all pokémon</Text>
      <Button title="Go to details" onPress={() => router.push('/details')} />
      {data?.pokemons?.results?.map(
        (pokemon) => pokemon && <PokemonListItem key={pokemon.name} pokemon={pokemon} />
      )}
    </View>
  );
};

export default HomeScreen;
