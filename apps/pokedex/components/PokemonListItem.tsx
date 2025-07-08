import { Colors, H1, HStack, Skeleton, useCustomThemeContext } from '@pokeworld/ui';
import _ from 'lodash';
import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { graphql, useFragment } from 'react-relay';

import { HapticPressable } from './HapticPressable';
import { PokemonListItemFragment$key } from './__generated__/PokemonListItemFragment.graphql';

type PokemonListItemProps = {
  pokemon?: PokemonListItemFragment$key | undefined | null;
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

const POKEMON_IMAGE_SIZE = 90;

const DEFAULT_PLACEHOLDER_IMAGE = `https://placehold.co/${POKEMON_IMAGE_SIZE}x${POKEMON_IMAGE_SIZE}`;

const PokemonListItemComponent = ({ pokemon }: PokemonListItemProps) => {
  const data = useFragment(PokemonListItemFragment, pokemon);
  const { themeType } = useCustomThemeContext();

  if (!data) {
    return <Skeleton shape="rectangle" radius={16} height={98} width="auto" />;
  }

  return (
    <HapticPressable>
      <HStack
        style={{
          backgroundColor: themeType === 'light' ? Colors['grey-450'] : Colors['grey-700'],
          ...styles.container,
        }}
        space={12}
      >
        <View style={styles.avatarContainer}>
          <Image
            alt="Malla"
            source={{
              uri: data.artwork || DEFAULT_PLACEHOLDER_IMAGE,
            }}
            defaultSource={{
              uri: DEFAULT_PLACEHOLDER_IMAGE,
            }}
            height={POKEMON_IMAGE_SIZE}
            width={POKEMON_IMAGE_SIZE}
          />
        </View>
        <View style={styles.label}>
          <H1 color="white">{_.capitalize(data.name || '')}</H1>
        </View>
      </HStack>
    </HapticPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    height: 98,
    overflow: 'hidden',
  },
  avatarContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#fff4',
  },
  label: {
    flex: 1,
    justifyContent: 'center',
  },
});

export const PokemonListItem = memo(PokemonListItemComponent);
