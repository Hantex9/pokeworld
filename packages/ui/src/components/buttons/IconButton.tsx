import { GestureResponderEvent, Pressable } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useReducedMotion,
} from 'react-native-reanimated';

import { useTheme } from '../../context';
import { Colors, IconButtonStyles, ThemeLight } from '../../core';
import { useScaleAnimation } from '../../hooks';
import { hexToRgba } from '../../utils';
import { WithTestID } from '../../utils/types';
import { AnimatedIcon, AnimatedIconWithColorTransition, IconSizeScale, Icons } from '../icons';

export type IconButton = WithTestID<{
  color?: 'primary' | 'neutral' | 'contrast';
  icon: Icons;
  iconSize?: IconSizeScale;
  disabled?: boolean;
  accessibilityLabel: string;
  accessibilityHint?: string;
  onPress: (event: GestureResponderEvent) => void;
  persistentColorMode?: boolean;
}>;

type ColorStates = {
  icon: {
    default: string;
    pressed: string;
    disabled: string;
  };
};

export const IconButton = ({
  color = 'primary',
  persistentColorMode = false,
  icon,
  iconSize = 24,
  disabled = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID,
}: IconButton) => {
  const theme = useTheme();
  const { progress, onPressIn, onPressOut, scaleAnimatedStyle } = useScaleAnimation('exaggerated');
  const reducedMotion = useReducedMotion();

  const mapColorStates: Record<NonNullable<IconButton['color']>, ColorStates> = {
    // Primary button
    primary: {
      icon: {
        default: Colors[theme['interactiveElem-default']],
        pressed: Colors[theme['interactiveElem-pressed']],
        disabled: Colors[theme['interactiveElem-disabled']],
      },
    },
    // Neutral button
    neutral: {
      icon: {
        default: persistentColorMode
          ? Colors[ThemeLight['neutralButton-default']]
          : Colors[theme['neutralButton-default']],
        pressed: persistentColorMode
          ? Colors[ThemeLight['neutralButton-pressed']]
          : Colors[theme['neutralButton-pressed']],
        disabled: persistentColorMode
          ? Colors[ThemeLight['neutralButton-disabled']]
          : Colors[theme['neutralButton-disabled']],
      },
    },
    // Contrast button
    contrast: {
      icon: {
        default: Colors.white,
        pressed: hexToRgba(Colors.white, 0.85),
        disabled: hexToRgba(Colors.white, 0.25),
      },
    },
  };

  // Animate the <Icon> color prop
  const animatedColor = useAnimatedProps(() => {
    const iconColor = interpolateColor(
      progress.value,
      [0, 1],
      [mapColorStates[color].icon.default, mapColorStates[color].icon.pressed]
    );
    return { color: iconColor };
  });

  return (
    <Pressable
      disabled={disabled}
      // Events
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      // Accessibility
      accessible={true}
      accessibilityRole={'button'}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      // Usability
      // Add a touchable area around the button
      hitSlop={8}
      // Test
      testID={testID}
    >
      <Animated.View
        style={[
          IconButtonStyles.button,
          IconButtonStyles.buttonSizeSmall,
          !disabled && !reducedMotion && scaleAnimatedStyle,
        ]}
      >
        {!disabled ? (
          <AnimatedIconWithColorTransition
            allowFontScaling
            name={icon}
            size={iconSize}
            animatedProps={animatedColor}
            color={mapColorStates[color]?.icon?.default}
          />
        ) : (
          <AnimatedIcon
            allowFontScaling
            name={icon}
            size={iconSize}
            color={mapColorStates[color]?.icon?.disabled}
          />
        )}
      </Animated.View>
    </Pressable>
  );
};

export default IconButton;
