import { graphql } from 'relay-runtime';

export const POKEMON_DETAILS_QUERY = graphql`
  query PokemonDetailsQuery($name: String!) {
    pokemon(name: $name) {
      progressiveId: id
      name
      weight
      height
      types {
        type {
          name
        }
      }
      ...PokemonStatsFragment
    }
  }
`;
