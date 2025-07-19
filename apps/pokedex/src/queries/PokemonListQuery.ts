import { graphql } from 'relay-runtime';

export const POKEMON_LIST_QUERY = graphql`
  query PokemonListQuery($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      nextOffset
      results {
        progressiveId: id
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
