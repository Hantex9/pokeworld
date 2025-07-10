import { VStack } from '@pokeworld/ui';
import React from 'react';
import { graphql, useFragment } from 'react-relay';

import { PokemonStatsFragment$key } from './__generated__/PokemonStatsFragment.graphql';
import { PokemonStat } from './common/PokemonStat';

type PokemonStatsProps = {
  stats?: PokemonStatsFragment$key | undefined | null;
};

export const PokemonStatsFragment = graphql`
  fragment PokemonStatsFragment on Pokemon {
    stats {
      base_stat
      stat {
        name
      }
    }
  }
`;

export const PokemonStats = ({ stats }: PokemonStatsProps) => {
  const data = useFragment(PokemonStatsFragment, stats);

  return (
    <VStack space={12} style={{ flex: 1 }}>
      {data?.stats?.map((statInfo) => (
        <PokemonStat
          key={statInfo?.stat?.name}
          name={statInfo?.stat?.name}
          value={statInfo?.base_stat}
          maxValue={255}
        />
      ))}
    </VStack>
  );
};
