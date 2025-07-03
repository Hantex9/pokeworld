import {
  interpolateColor,
  SharedValue,
  useAnimatedProps,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { ButtonColor, ButtonProps, ButtonVariant } from './Button';
import { useTheme } from '../../../context';
import { Colors } from '../../../core/Colors';
import { hexToRgba } from '../../../utils';

type ColorStates = {
  background: {
    default: string;
    pressed: string;
    disabled: string;
  };
  foreground: {
    default: string;
    pressed: string;
    disabled: string;
  };
};

export const useButtonColorMap = (variant: ButtonVariant) => {
  const theme = useTheme();

  const mapColorStatesVariantSolid: Record<NonNullable<ButtonProps['color']>, ColorStates> = {
    // Primary
    primary: {
      background: {
        default: Colors[theme['interactiveElem-default']],
        pressed: Colors[theme['interactiveElem-pressed']],
        disabled: Colors[theme['interactiveElem-disabled']],
      },
      foreground: {
        default: Colors[theme['buttonText-default']],
        pressed: Colors[theme['buttonText-default']],
        disabled: Colors[theme['buttonText-disabled']],
      },
    },
    // Danger
    danger: {
      background: {
        default: Colors['error-600'],
        pressed: Colors['error-500'],
        disabled: Colors[theme['interactiveElem-disabled']],
      },
      foreground: {
        default: Colors[theme['buttonText-danger']],
        pressed: Colors[theme['buttonText-danger']],
        disabled: Colors[theme['buttonText-disabled']],
      },
    },
    // Contrast
    contrast: {
      background: {
        default: Colors.white,
        pressed: Colors['blue-50'],
        disabled: Colors['blue-50'],
      },
      foreground: {
        default: Colors['blue-500'],
        pressed: Colors['blue-500'],
        disabled: Colors['blue-500'],
      },
    },
  };

  const mapColorStatesVariantOutline: Record<NonNullable<ButtonProps['color']>, ColorStates> = {
    // Primary
    primary: {
      background: {
        default: hexToRgba(Colors[theme['interactiveElem-pressed']], 0),
        pressed: hexToRgba(Colors[theme['interactiveElem-pressed']], 0.1),
        disabled: 'transparent',
      },
      foreground: {
        default: Colors[theme['interactiveElem-default']],
        pressed: Colors[theme['interactiveElem-pressed']],
        disabled: Colors[theme['interactiveOutline-disabled']],
      },
    },
    // Danger
    danger: {
      background: {
        default: hexToRgba(Colors['error-600'], 0),
        pressed: hexToRgba(Colors['error-600'], 0.1),
        disabled: 'transparent',
      },
      foreground: {
        default: Colors[theme.errorText],
        pressed: Colors[theme.errorText],
        disabled: Colors[theme['buttonText-disabled']],
      },
    },
    // Contrast
    contrast: {
      background: {
        default: hexToRgba(Colors['blue-600'], 0),
        pressed: hexToRgba(Colors['blue-600'], 0.5),
        disabled: 'transparent',
      },
      foreground: {
        default: Colors.white,
        pressed: Colors.white,
        disabled: Colors['blue-200'],
      },
    },
  };

  const transparentLinkBackground: ColorStates['background'] = {
    default: 'transparent',
    pressed: 'transparent',
    disabled: 'transparent',
  };

  const mapColorStatesVariantLink: Record<NonNullable<ButtonProps['color']>, ColorStates> = {
    // Primary
    primary: {
      foreground: {
        default: Colors[theme['interactiveElem-default']],
        pressed: Colors[theme['interactiveElem-pressed']],
        disabled: hexToRgba(Colors[theme['interactiveElem-default']], 0.85),
      },
      background: transparentLinkBackground,
    },
    // Danger
    danger: {
      foreground: {
        default: Colors[theme.errorText],
        pressed: Colors[theme.errorText],
        disabled: hexToRgba(Colors[theme.errorText], 0.85),
      },
      background: transparentLinkBackground,
    },
    // Contrast
    contrast: {
      foreground: {
        default: Colors.white,
        pressed: hexToRgba(Colors.white, 0.85),
        disabled: hexToRgba(Colors.white, 0.5),
      },
      background: transparentLinkBackground,
    },
  };

  const colorMap = {
    solid: mapColorStatesVariantSolid,
    outline: mapColorStatesVariantOutline,
    link: mapColorStatesVariantLink,
  };

  return colorMap[variant];
};

export const useButtonAnimatedStyles = (
  variant: ButtonVariant,
  color: ButtonColor,
  progress: SharedValue<number>
) => {
  const mapColorStates = useButtonColorMap(variant);

  // Interpolate animatn values from `isPressed` values
  const pressedAnimatnStyle = useAnimatedStyle(() => {
    // `link` variant doesn't need this animated style
    if (variant === 'link') {
      return {};
    }

    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [mapColorStates[color].background.default, mapColorStates[color].background.pressed]
    );

    const borderColor = interpolateColor(
      progress.value,
      [0, 1],
      [mapColorStates[color].foreground.default, mapColorStates[color].foreground.pressed]
    );

    return variant === 'outline' ? { backgroundColor, borderColor } : { backgroundColor };
  });

  const pressedColorLabelAnimatnStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      progress.value,
      [0, 1],
      [mapColorStates[color].foreground.default, mapColorStates[color].foreground.pressed]
    ),
  }));

  const iconColorAnimatedStyle = useAnimatedProps(() => ({
    color: interpolateColor(
      progress.value,
      [0, 1],
      [mapColorStates[color]?.foreground?.default, mapColorStates[color]?.foreground?.pressed]
    ),
  }));

  return {
    buttonAnimatedStyle: pressedAnimatnStyle,
    labelAnimatedStyle: pressedColorLabelAnimatnStyle,
    iconColorAnimatedStyle,
  };
};
