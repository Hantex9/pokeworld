import { useMemo } from 'react';
import { Image } from 'react-native';

type AvatarProps = {
  source?: string | null;
  size?: number;
};

export const Avatar = ({ source, size }: AvatarProps) => {
  const defaultPlaceholderPokemonImage = useMemo(
    () => `https://placehold.co/${size}x${size}.png`,
    [size]
  );

  return (
    <Image
      source={{
        uri: source || defaultPlaceholderPokemonImage,
      }}
      defaultSource={{
        uri: defaultPlaceholderPokemonImage,
      }}
      height={size}
      width={size}
    />
  );
};
