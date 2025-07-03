import React, { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';

import {
  CustomText,
  CustomTextProps,
  TypographicStyleAsLinkProps,
  TypographicStyleProps,
} from './CustomText';
import { useTheme } from '../../context';
import { FontFamily, FontWeight } from '../../utils/fonts';

type BodySmallProps = TypographicStyleProps & {
  weight?: Extract<FontWeight, 'Regular' | 'Semibold'>;
} & TypographicStyleAsLinkProps;

const fontName: FontFamily = 'Titillio';

/**
 * `BodySmall` typographic style
 */
export const BodySmall = forwardRef<View, BodySmallProps>(
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

    const BodySmallProps: CustomTextProps = {
      ...props,
      dynamicTypeRamp: 'footnote' /* iOS only */,
      font: fontName,
      weight: customWeight ?? 'Regular',
      size: 14,
      lineHeight: 21,
      color: customColor ?? defaultColor,
      ...(asLink
        ? {
            accessibilityRole,
            textStyle: customTextStyle ?? { textDecorationLine: 'underline' },
          }
        : {}),
    };

    return (
      <CustomText ref={ref} {...BodySmallProps}>
        {props.children}
      </CustomText>
    );
  }
);
