'use client';

import {
  Badge,
  Body,
  Card,
  ContentWrapper,
  H1,
  H2,
  H4,
  HStack,
  Skeleton,
  useTheme,
  VSpacer,
  VStack,
} from '@pokeworld/ui';
import _ from 'lodash';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useLazyLoadQuery } from 'react-relay';

import { PokemonStats } from './PokemonStats';
import { Avatar } from './common/Avatar';

import { POKEMON_DETAILS_QUERY } from '@/queries/PokemonDetailsQuery';
import { PokemonDetailsQuery } from '@/queries/__generated__/PokemonDetailsQuery.graphql';
import { PokemonTypes } from '@/types';
import { getPokemonTypeColor, padToThreeDigits, toDecimal } from '@/utils';

type PokemonDetailsProps = {
  pokemonName: string;
  pokemonImage?: string;
};

export const PokemonDetails = ({ pokemonName, pokemonImage }: PokemonDetailsProps) => {
  const data = useLazyLoadQuery<PokemonDetailsQuery>(POKEMON_DETAILS_QUERY, {
    name: pokemonName,
  });
  const theme = useTheme();

  return (
    <ScrollView style={{ flex: 1 }}>
      <ContentWrapper>
        <View>
          <VStack>
            <H2 color={theme['skeleton-background']}>
              #{padToThreeDigits(data?.pokemon?.progressiveId || 0)}
            </H2>
            <H1>{_.upperFirst(data?.pokemon?.name ?? 'Unknown')}</H1>
            <HStack space={4}>
              {data.pokemon?.types?.map((pokemonType) => (
                <Badge
                  key={pokemonType?.type?.name}
                  text={pokemonType?.type?.name ?? 'Unknown'}
                  textColor={theme['buttonText-default']}
                  color={getPokemonTypeColor(pokemonType?.type?.name as PokemonTypes)}
                />
              ))}
            </HStack>
          </VStack>
          <VSpacer size={8} />
          <View style={styles.avatarContainer}>
            <Avatar source={pokemonImage} size={256} />
          </View>
        </View>
        <HStack space={16} style={styles.cardContainer}>
          <Card
            style={{
              flex: 1,
            }}
          >
            <VStack space={4} style={styles.cardContent}>
              <H4>{toDecimal(data.pokemon?.height ?? 0)} m</H4>
              <Body>Height</Body>
            </VStack>
          </Card>
          <Card style={{ flex: 1 }}>
            <VStack space={4} style={styles.cardContent}>
              <H4>{toDecimal(data.pokemon?.weight ?? 0)} kg</H4>
              <Body>Weight</Body>
            </VStack>
          </Card>
        </HStack>
        <VSpacer size={24} />
        <PokemonStats stats={data.pokemon} />
      </ContentWrapper>
    </ScrollView>
  );
};

export const PokemonDetailsSkeleton = () => (
  <ScrollView style={{ flex: 1 }}>
    <ContentWrapper>
      <View>
        <VStack space={12}>
          <Skeleton shape="rectangle" radius={100} width={110} height={30} />
          <Skeleton shape="rectangle" radius={100} width={250} height={35} />
          <HStack space={4}>
            <Skeleton shape="rectangle" radius={20} width={80} height={25} />
            <Skeleton shape="rectangle" radius={20} width={80} height={25} />
          </HStack>
        </VStack>
        <VSpacer size={12} />
        <View style={{ flex: 1, ...styles.avatarContainer }}>
          <Skeleton shape="rectangle" height={256} width="100%" />
        </View>
      </View>
      <VSpacer size={12} />
      <HStack space={16} style={styles.cardContainer}>
        <View style={{ flex: 1 }}>
          <Skeleton shape="rectangle" width="auto" height={100} radius={12} />
        </View>
        <View style={{ flex: 1 }}>
          <Skeleton shape="rectangle" width="auto" height={100} radius={12} />
        </View>
      </HStack>
      <VSpacer size={24} />
    </ContentWrapper>
  </ScrollView>
);

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 8,
  },
  cardContainer: {
    alignContent: 'center',
    flex: 1,
  },
});
