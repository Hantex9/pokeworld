import { Colors, H1, HStack, Skeleton, useCustomThemeContext } from '@pokeworld/ui';
import _ from 'lodash';
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { graphql, useFragment } from 'react-relay';

import {
  PokemonListItemFragment$data,
  PokemonListItemFragment$key,
} from './__generated__/PokemonListItemFragment.graphql';
import { Avatar } from './common/Avatar';
import { HapticPressable } from './common/HapticPressable';

type PokemonListItemProps = {
  pokemon?: PokemonListItemFragment$key | undefined | null;
  onPress?: (pokemon: PokemonListItemFragment$data) => void;
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

const PokemonListItemComponent = ({ pokemon, onPress }: PokemonListItemProps) => {
  if (!pokemon) {
    return <Skeleton shape="rectangle" radius={16} height={98} width="100%" />;
  }
  const data = useFragment(PokemonListItemFragment, pokemon);
  const { themeType } = useCustomThemeContext();

  if (!data) {
    return null;
  }

  return (
    <HapticPressable onPress={() => onPress?.(data)}>
      <HStack
        style={{
          backgroundColor: themeType === 'light' ? Colors['grey-450'] : Colors['grey-700'],
          ...styles.container,
        }}
        space={12}
      >
        <View style={styles.avatarContainer}>
          <Avatar source={data.artwork} size={90} />
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
