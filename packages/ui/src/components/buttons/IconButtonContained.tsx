import { GestureResponderEvent, Pressable } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useReducedMotion,
} from 'react-native-reanimated';

import { AnimatedIcon, AnimatedIconWithColorTransition, Icons } from '../../components/icons';
import { Colors, IconButtonStyles } from '../../core';
import { useScaleAnimation } from '../../hooks';
import { hexToRgba } from '../../utils';
import { WithTestID } from '../../utils/types';

export type IconButtonContained = WithTestID<{
  icon: Icons;
  color?: 'primary' | 'neutral' | 'contrast';
  disabled?: boolean;
  accessibilityLabel: string;
  accessibilityHint?: string;
  onPress: (event: GestureResponderEvent) => void;
}>;

type ColorStates = {
  background: {
    default: string;
    pressed: string;
    disabled: string;
  };
  icon: {
    default: string;
    pressed: string;
    disabled: string;
  };
};

const mapColorStates: Record<NonNullable<IconButtonContained['color']>, ColorStates> = {
  // Primary button
  primary: {
    background: {
      default: hexToRgba(Colors['blue-500'], 0),
      pressed: hexToRgba(Colors['blue-500'], 0.15),
      disabled: 'transparent',
    },
    icon: {
      default: Colors['blue-500'],
      pressed: Colors['blue-600'],
      disabled: hexToRgba(Colors['blue-500'], 0.25),
    },
  },
  // Neutral button
  neutral: {
    background: {
      default: Colors.white,
      pressed: Colors['grey-50'],
      disabled: 'transparent',
    },
    icon: {
      default: Colors['grey-700'],
      pressed: Colors.black,
      disabled: Colors['grey-450'],
    },
  },
  // Contrast button
  contrast: {
    background: {
      default: hexToRgba(Colors.white, 0),
      pressed: hexToRgba(Colors.white, 0.2),
      disabled: 'transparent',
    },
    icon: {
      default: Colors.white,
      pressed: Colors.white,
      disabled: hexToRgba(Colors.white, 0.25),
    },
  },
};

export const IconButtonContained = ({
  icon,
  color = 'primary',
  disabled = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID,
}: IconButtonContained) => {
  const { progress, onPressIn, onPressOut, scaleAnimatedStyle } = useScaleAnimation('exaggerated');
  const reducedMotion = useReducedMotion();

  const backgroundColorAnimationStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [mapColorStates[color].background.default, mapColorStates[color].background.pressed]
    ),
  }));

  // Animate the <Icon> color prop
  const iconColorAnimationStyle = useAnimatedProps(() => ({
    color: interpolateColor(
      progress.value,
      [0, 1],
      [mapColorStates[color].icon.default, mapColorStates[color].icon.pressed]
    ),
  }));

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={'button'}
      accessibilityState={{ disabled }}
      testID={testID}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessible={true}
      disabled={disabled}
      style={{ alignSelf: 'flex-start' }}
    >
      <Animated.View
        style={[
          IconButtonStyles.button,
          IconButtonStyles.buttonSizeDefault,
          !disabled && !reducedMotion && scaleAnimatedStyle,
          !disabled && backgroundColorAnimationStyle,
        ]}
      >
        {!disabled ? (
          <AnimatedIconWithColorTransition
            name={icon}
            animatedProps={iconColorAnimationStyle}
            color={mapColorStates[color]?.icon?.default}
          />
        ) : (
          <AnimatedIcon name={icon} color={mapColorStates[color]?.icon?.disabled} />
        )}
      </Animated.View>
    </Pressable>
  );
};

export default IconButtonContained;
