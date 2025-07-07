import { Body } from '@pokeworld/ui';
import React, { memo } from 'react';
import { View } from 'react-native';
import { graphql, useFragment } from 'react-relay';

import { PokemonListItemFragment$key } from './__generated__/PokemonListItemFragment.graphql';

type PokemonListItemProps = {
  pokemon: PokemonListItemFragment$key | undefined | null;
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

const PokemonListItemComponent = ({ pokemon }: PokemonListItemProps) => {
  const data = useFragment(PokemonListItemFragment, pokemon);

  return (
    <View style={{ height: 80 }}>
      <Body>{data?.name}</Body>
      {/* <Image source={{ uri: data.image }} style={{ width: 50, height: 50 }} /> */}
    </View>
  );
};

export const PokemonListItem = memo(PokemonListItemComponent);
