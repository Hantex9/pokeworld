import { Platform, StyleSheet, View, ViewStyle } from 'react-native';

import { useTheme } from '../../context';
import {
  Colors,
  SpacingScale,
  TagHSpacing,
  TagRadius,
  TagVSpacing,
  Theme,
  ThemeLight,
} from '../../core';
import { WithTestID } from '../../utils/types';
import { IconSizeScale, Icons, Icon } from '../icons';
import { CustomText } from '../typography';

const IconColorsMap: Record<string, keyof Theme> = {
  primary: 'interactiveElem-default',
  warning: 'warningIcon',
  error: 'errorIcon',
  success: 'successIcon',
  info: 'infoIcon',
  grey: 'icon-default',
  lightGrey: 'icon-decorative',
};

type IconColorVariant = keyof typeof IconColorsMap;

type VariantProps = {
  color: IconColorVariant;
  name: Icons;
};

type TextProps =
  | {
      text: string;
      iconAccessibilityLabel?: string;
    }
  | {
      text?: never;
      iconAccessibilityLabel: string;
    };

export type Tag = TextProps & { forceLightMode?: boolean } & WithTestID<
    | {
        variant:
          | 'qrCode'
          | 'legalMessage'
          | 'info'
          | 'warning'
          | 'error'
          | 'success'
          | 'attachment'
          | 'noIcon';
        iconName?: never;
        icon?: never;
      }
    | {
        variant: 'custom';
        icon: VariantProps;
      }
  > & {
    allowFontScaling?: boolean;
  };

const TagIconMargin: SpacingScale = 6;
const TagIconSize: IconSizeScale = 16;

const styles = StyleSheet.create({
  tag: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      android: {
        textAlignVertical: 'center',
      },
    }),
    borderWidth: 1,
    borderCurve: 'continuous',
  },
  tagStatic: {
    borderRadius: TagRadius,
    borderCurve: 'continuous',
    paddingHorizontal: TagHSpacing,
    paddingVertical: TagVSpacing,
    columnGap: TagIconMargin,
  },
  iconWrapper: {
    flexShrink: 1,
  },
});

const getVariantProps = (
  variant: NonNullable<Tag['variant']>,
  customIcon?: VariantProps
): VariantProps | undefined => {
  if (variant === 'custom' && customIcon) {
    return customIcon;
  }
  switch (variant) {
    case 'qrCode':
      return {
        color: 'primary',
        name: 'qrCode',
      };
    case 'attachment':
      return {
        color: 'grey',
        name: 'attachment',
      };
    case 'legalMessage':
      return {
        color: 'primary',
        name: 'legalValue',
      };
    case 'info':
      return {
        color: 'info',
        name: 'infoFilled',
      };
    case 'warning':
      return {
        color: 'warning',
        name: 'warningFilled',
      };
    case 'error':
      return {
        color: 'error',
        name: 'errorFilled',
      };
    case 'success':
      return {
        color: 'success',
        name: 'success',
      };
    case 'noIcon':
      return undefined;
    default:
      return undefined;
  }
};

/**
 * Tag component, used mainly for message list and details
 */
export const Tag = ({
  text,
  variant,
  testID,
  icon,
  iconAccessibilityLabel,
  allowFontScaling = true,
  forceLightMode = false,
}: Tag) => {
  const theme = useTheme();

  const variantProps = getVariantProps(variant, icon);

  const borderColor = forceLightMode
    ? Colors[ThemeLight['cardBorder-default']]
    : Colors[theme['cardBorder-default']];

  const backgroundColor = forceLightMode
    ? Colors[ThemeLight['appBackground-primary']]
    : Colors[theme['appBackground-primary']];

  const tagDynamic: ViewStyle = {
    paddingHorizontal: TagHSpacing,
    paddingVertical: TagVSpacing,
    columnGap: TagIconMargin,
    borderRadius: TagRadius,
  };

  return (
    <View
      testID={testID}
      style={[
        styles.tag,
        allowFontScaling ? tagDynamic : styles.tagStatic,
        { borderColor, backgroundColor },
      ]}
    >
      {variantProps && (
        <View style={styles.iconWrapper}>
          <Icon
            allowFontScaling={allowFontScaling}
            name={variantProps.name}
            color={
              forceLightMode
                ? ThemeLight[IconColorsMap[variantProps.color]]
                : theme[IconColorsMap[variantProps.color]]
            }
            size={TagIconSize}
            accessible={!!iconAccessibilityLabel}
            accessibilityLabel={iconAccessibilityLabel}
          />
        </View>
      )}
      {text && (
        <CustomText
          allowFontScaling={allowFontScaling}
          font="Titillio"
          weight={'Semibold'}
          size={12}
          lineHeight={16}
          color={forceLightMode ? ThemeLight['textBody-tertiary'] : theme['textBody-tertiary']}
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
      )}
    </View>
  );
};
