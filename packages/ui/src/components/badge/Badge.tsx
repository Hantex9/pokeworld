import { ColorValue, Platform, StyleSheet, View, ViewStyle } from 'react-native';

import { useCustomThemeContext } from '../../context';
import { BadgeHSpacing, BadgeRadius, BadgeVSpacing, Colors } from '../../core';
import { hexToRgba } from '../../utils';
import { WithTestID } from '../../utils/types';
import { CustomText } from '../typography';

export type Badge = WithTestID<{
  outline?: boolean;
  text: string;
  allowFontScaling?: boolean;
  variant: 'default' | 'warning' | 'error' | 'success' | 'cgn' | 'highlight';
  accessible?: boolean;
}>;

type SolidVariantProps = {
  background: ColorValue;
  foreground: Colors;
};

type OutlinedVariantProps = {
  foreground: Colors;
  background?: never;
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderCurve: 'continuous',
    ...Platform.select({
      android: {
        textAlignVertical: 'center',
      },
    }),
  },
  badgeStaticStyle: {
    borderRadius: BadgeRadius,
    paddingHorizontal: BadgeHSpacing,
    paddingVertical: BadgeVSpacing,
  },
});

/**
 * Official badge component
 */
export const Badge = ({
  text,
  outline = false,
  allowFontScaling = true,
  variant,
  accessible = true,
  testID,
}: Badge) => {
  const { themeType } = useCustomThemeContext();

  const bgOpacityDarkMode = 0.2;

  const mapVariantsLightMode: Record<NonNullable<Badge['variant']>, SolidVariantProps> = {
    default: {
      foreground: 'blue-850',
      background: Colors['blue-50'],
    },
    warning: {
      foreground: 'warning-850',
      background: Colors['warning-100'],
    },
    success: {
      foreground: 'success-850',
      background: Colors['success-100'],
    },
    error: {
      foreground: 'error-850',
      background: Colors['error-100'],
    },
    cgn: {
      foreground: 'hanPurple-500',
      background: Colors['hanPurple-100'],
    },
    highlight: {
      foreground: 'turquoise-850',
      background: Colors['turquoise-50'],
    },
  };

  const mapVariantsDarkMode: Record<NonNullable<Badge['variant']>, SolidVariantProps> = {
    default: {
      foreground: 'blue-200',
      background: hexToRgba(Colors['blue-200'], bgOpacityDarkMode),
    },
    warning: {
      foreground: 'warning-400',
      background: hexToRgba(Colors['warning-400'], bgOpacityDarkMode),
    },
    success: {
      foreground: 'success-400',
      background: hexToRgba(Colors['success-400'], bgOpacityDarkMode),
    },
    error: {
      foreground: 'error-400',
      background: hexToRgba(Colors['error-400'], bgOpacityDarkMode),
    },
    cgn: {
      foreground: 'hanPurple-250',
      background: hexToRgba(Colors['hanPurple-250'], bgOpacityDarkMode),
    },
    highlight: {
      foreground: 'turquoise-300',
      background: hexToRgba(Colors['turquoise-300'], bgOpacityDarkMode),
    },
  };

  const mapOutlineVariantsLightMode: Record<NonNullable<Badge['variant']>, OutlinedVariantProps> = {
    default: {
      foreground: 'blue-850',
    },
    warning: {
      foreground: 'warning-850',
    },
    success: {
      foreground: 'success-850',
    },
    error: {
      foreground: 'error-850',
    },
    cgn: {
      foreground: 'hanPurple-500',
    },
    highlight: {
      foreground: 'turquoise-850',
    },
  };

  const mapOutlineVariantsDarkMode: Record<NonNullable<Badge['variant']>, OutlinedVariantProps> = {
    default: {
      foreground: 'blue-200',
    },
    warning: {
      foreground: 'warning-400',
    },
    success: {
      foreground: 'success-400',
    },
    error: {
      foreground: 'error-400',
    },
    cgn: {
      foreground: 'hanPurple-250',
    },
    highlight: {
      foreground: 'turquoise-300',
    },
  };

  // prettier-ignore
  const variantMap = themeType === "light"
    ? (outline ? mapOutlineVariantsLightMode : mapVariantsLightMode)
    : (outline ? mapOutlineVariantsDarkMode : mapVariantsDarkMode);

  const { background, foreground } = variantMap[variant];

  const dynamicStyle: ViewStyle = {
    borderRadius: BadgeRadius,
    paddingHorizontal: BadgeHSpacing,
    paddingVertical: BadgeVSpacing,
  };

  return (
    <View
      accessible={accessible}
      testID={testID}
      style={[
        styles.badge,
        allowFontScaling ? dynamicStyle : styles.badgeStaticStyle,
        outline
          ? {
              borderWidth: 1,
              borderColor: Colors[foreground],
            }
          : {
              backgroundColor: background ?? undefined,
            },
      ]}
    >
      <CustomText
        allowFontScaling={allowFontScaling}
        font="Titillio"
        weight={'Semibold'}
        size={12}
        lineHeight={16}
        color={foreground}
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          alignSelf: 'center',
          textTransform: 'uppercase',
          letterSpacing: 0.5,
          flexShrink: 1,
        }}
      >
        {text}
      </CustomText>
    </View>
  );
};
