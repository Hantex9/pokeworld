import { Body } from '@pokeworld/ui';
import React from 'react';
import { View } from 'react-native';
import { graphql, useFragment } from 'react-relay';

import { PokemonListItemFragment$key } from './__generated__/PokemonListItemFragment.graphql';

type PokemonListItemProps = {
  pokemon: PokemonListItemFragment$key;
};

export const PokemonListItemFragment = graphql`
  fragment PokemonListItemFragment on PokemonItem {
    url
    name
    image
    artwork
    dreamworld
  }
`;

export const PokemonListItem = ({ pokemon }: PokemonListItemProps) => {
  const data = useFragment(PokemonListItemFragment, pokemon);

  return (
    <View>
      <Body>{data.name}</Body>
      {/* <Image source={{ uri: data.image }} style={{ width: 50, height: 50 }} /> */}
    </View>
  );
};
