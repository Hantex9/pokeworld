import { Body, H6, HStack, ProgressBar, Skeleton } from '@pokeworld/ui';
import { StyleSheet, View } from 'react-native';

import { PokemonStats } from '@/types';
import { getPokemonStatName } from '@/utils';

type PokemonStatProps = {
  name?: string | null;
  value?: number | null;
  maxValue: number;
};

export const PokemonStat = ({ name, value, maxValue }: PokemonStatProps) => (
  <HStack style={styles.statContainer} space={12}>
    <Body style={{ minWidth: 85 }} weight="Semibold">
      {getPokemonStatName(name as PokemonStats)}
    </Body>
    <View style={{ flex: 1 }}>
      <ProgressBar height={12} value={value || 0} max={maxValue} />
    </View>
    <H6>{value}</H6>
  </HStack>
);

export const PokemonStatSkeleton = () => (
  <HStack style={{ width: '100%', ...styles.statContainer }} space={12}>
    <Skeleton width={70} height={16} shape="rectangle" radius={50} />
    <View style={{ flex: 1 }}>
      <Skeleton width="auto" height={16} shape="rectangle" radius={50} />
    </View>
    <Skeleton width={25} height={16} shape="rectangle" radius={50} />
  </HStack>
);

const styles = StyleSheet.create({
  statContainer: { flex: 1, alignItems: 'center' },
});
