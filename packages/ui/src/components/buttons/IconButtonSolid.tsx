import { GestureResponderEvent, Pressable } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useReducedMotion,
} from 'react-native-reanimated';

import { useTheme } from '../../context';
import { IconButtonStyles } from '../../core';
import { Colors } from '../../core/Colors';
import { useScaleAnimation } from '../../hooks';
import { hexToRgba } from '../../utils';
import { WithTestID } from '../../utils/types';
import { AnimatedIcon, Icons } from '../icons';

export type IconButtonSolid = WithTestID<{
  icon: Icons;
  color?: 'primary' | 'contrast';
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
    disabled: string;
  };
};

export const IconButtonSolid = ({
  icon,
  color = 'primary',
  disabled = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID,
}: IconButtonSolid) => {
  const theme = useTheme();
  const { progress, onPressIn, onPressOut, scaleAnimatedStyle } = useScaleAnimation('exaggerated');
  const reducedMotion = useReducedMotion();

  const mapColorStates: Record<NonNullable<IconButtonSolid['color']>, ColorStates> = {
    // Primary button
    primary: {
      background: {
        default: Colors[theme['interactiveElem-default']],
        pressed: Colors[theme['interactiveElem-pressed']],
        disabled: Colors[theme['interactiveElem-disabled']],
      },
      icon: {
        default: Colors[theme['buttonText-default']],
        disabled: Colors[theme['buttonText-disabled']],
      },
    },
    contrast: {
      background: {
        default: Colors.white,
        pressed: Colors['blue-50'],
        disabled: hexToRgba(Colors.white, 0.25),
      },
      icon: {
        default: Colors['blue-500'],
        disabled: Colors['blue-500'],
      },
    },
  };

  const backgroundColorAnimationStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [mapColorStates[color].background.default, mapColorStates[color].background.pressed]
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
          IconButtonStyles.buttonSizeLarge,
          !disabled && !reducedMotion && scaleAnimatedStyle,
          !disabled && backgroundColorAnimationStyle,
          disabled
            ? { backgroundColor: mapColorStates[color]?.background?.disabled }
            : { backgroundColor: mapColorStates[color]?.background?.default },
        ]}
      >
        <AnimatedIcon
          allowFontScaling
          name={icon}
          color={
            !disabled ? mapColorStates[color]?.icon?.default : mapColorStates[color]?.icon?.disabled
          }
        />
      </Animated.View>
    </Pressable>
  );
};

export default IconButtonSolid;
