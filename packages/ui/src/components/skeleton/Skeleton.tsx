import { useEffect, useMemo, useRef } from 'react';
import { Animated, ColorValue, DimensionValue, Easing, ViewStyle } from 'react-native';
import { useReducedMotion } from 'react-native-reanimated';

import { useTheme } from '../../context';
import { Colors } from '../../core';
import { WithTestID } from '../../utils/types';

const ANIMATION_DURATION = 1250;
const [OPACITY_MIN, OPACITY_MAX] = [0.35, 0.75];
const OPACITY_REDUCED_MOTION = (OPACITY_MAX + OPACITY_MIN) / 2;

type SkeletonSquare = {
  shape: 'square';
  size: number;
  radius?: number;
  width?: never;
  height?: never;
};

type SkeletonRectangle = {
  shape: 'rectangle';
  width: DimensionValue;
  height: number;
  radius?: number;
  size?: never;
};

export type Skeleton = WithTestID<
  (SkeletonSquare | SkeletonRectangle) & {
    color?: ColorValue;
  }
>;

export const Skeleton = ({
  shape,
  size,
  width,
  height,
  radius: borderRadius,
  color,
  testID,
}: Skeleton) => {
  const reduceMotion = useReducedMotion();
  const theme = useTheme();

  const opacity = useRef(new Animated.Value(OPACITY_MAX)).current;

  const backgroundColor = color ?? Colors[theme['skeleton-background']];

  const baseStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor,
      width: shape === 'square' ? size : width,
      height: shape === 'square' ? size : height,
      borderRadius,
      borderCurve: 'continuous',
    }),
    [backgroundColor, shape, size, width, height, borderRadius]
  );

  useEffect(() => {
    if (reduceMotion) {
      opacity.setValue(OPACITY_REDUCED_MOTION);
      return;
    }

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: OPACITY_MIN,
          duration: ANIMATION_DURATION / 2,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: OPACITY_MAX,
          duration: ANIMATION_DURATION / 2,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [opacity, reduceMotion]);

  return <Animated.View testID={testID} style={[baseStyle, { opacity }]} />;
};
