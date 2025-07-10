import { graphql } from 'relay-runtime';

export const POKEMON_LIST_QUERY = graphql`
  query PokemonListQuery($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      nextOffset
      results {
        name
        url
        name
        image
        artwork
        dreamworld
      }
    }
  }
`;
