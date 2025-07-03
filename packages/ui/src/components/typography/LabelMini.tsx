import { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';

import {
  CustomText,
  CustomTextProps,
  TypographicStyleAsLinkProps,
  TypographicStyleProps,
} from './CustomText';
import { useTheme } from '../../context';
import { FontFamily, FontWeight } from '../../utils/fonts';

type LabelMiniProps = TypographicStyleProps & {
  weight?: Extract<FontWeight, 'Regular' | 'Semibold'>;
} & TypographicStyleAsLinkProps;

const fontName: FontFamily = 'Titillio';

/**
 * `LabelMini` typographic style
 */
export const LabelMini = forwardRef<View, LabelMiniProps>(
  (
    {
      weight: customWeight,
      color: customColor,
      asLink,
      accessibilityRole = 'link',
      textStyle: customTextStyle,
      ...props
    },
    ref?: ForwardedRef<View>
  ) => {
    const theme = useTheme();

    const defaultColor = asLink ? theme['interactiveElem-default'] : theme['textBody-tertiary'];

    const LabelMiniProps: CustomTextProps = {
      ...props,
      dynamicTypeRamp: 'footnote' /* iOS only */,
      font: fontName,
      weight: customWeight ? customWeight : 'Semibold',
      size: 12,
      lineHeight: 18,
      color: customColor ?? defaultColor,
      ...(asLink
        ? {
            accessibilityRole,
            textStyle: customTextStyle ?? { textDecorationLine: 'underline' },
          }
        : {}),
    };

    return (
      <CustomText ref={ref} {...LabelMiniProps}>
        {props.children}
      </CustomText>
    );
  }
);
