import { Colors, H1, HStack, Skeleton, useCustomThemeContext, WithTestID } from '@pokeworld/ui';
import _ from 'lodash';
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { Avatar } from './common/Avatar';
import { HapticPressable } from './common/HapticPressable';

import { PokemonItem } from '@/types';

type PokemonListItemProps = WithTestID<{
  pokemon?: PokemonItem;
  onPress?: (pokemon: PokemonItem) => void;
}>;

const PokemonListItemComponent = ({ pokemon, onPress, testID }: PokemonListItemProps) => {
  if (!pokemon) {
    return (
      <Skeleton testID="item-skeleton" shape="rectangle" radius={16} height={98} width="100%" />
    );
  }
  const { themeType } = useCustomThemeContext();

  return (
    <HapticPressable testID={testID} onPress={() => onPress?.(pokemon)}>
      <HStack
        style={{
          backgroundColor: themeType === 'light' ? Colors['grey-450'] : Colors['grey-700'],
          ...styles.container,
        }}
        space={12}
      >
        <View style={styles.avatarContainer}>
          <Avatar source={pokemon.artwork} size={90} />
        </View>
        <View style={styles.label}>
          <H1 color="white">{_.capitalize(pokemon.name || '')}</H1>
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
