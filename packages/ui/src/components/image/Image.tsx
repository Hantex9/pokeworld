import React from 'react';
import { FlexStyle, Image, ImageProps, StyleSheet } from 'react-native';

type AspectRatScale = '1:1' | '4:3' | '16:9' | '3:4' | '21:9';

const AspectRatioScaleMap: Record<AspectRatScale, number> = {
  '1:1': 1,
  '4:3': 4 / 3,
  '16:9': 16 / 9,
  '3:4': 3 / 4,
  '21:9': 21 / 9,
};

type CustomImageProps = {
  imageProps: Omit<ImageProps, 'alt' | 'style'>;
  alt: string;
  aspectRatio?: AspectRatScale;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    resizeMode: 'cover',
  },
});

/**
 * Image component that supports specific aspect rat scales and sets alt text as mandatory.
 * @param imageProps
 * @param alt
 * @param aspectRat
 */
export const CustomImage = ({ imageProps, alt, aspectRatio = '1:1' }: CustomImageProps) => {
  const aspectRatioStyle: Pick<FlexStyle, 'aspectRatio'> = React.useMemo(
    () => ({
      aspectRatio: AspectRatioScaleMap[aspectRatio],
    }),
    [aspectRatio]
  );

  return (
    <Image
      accessibilityIgnoresInvertColors
      {...imageProps}
      style={[styles.image, aspectRatioStyle]}
      alt={alt}
    />
  );
};
