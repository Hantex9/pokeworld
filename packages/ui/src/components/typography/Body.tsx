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

type BodyStyleProps = TypographicStyleProps & {
  weight?: Extract<FontWeight, 'Regular' | 'Semibold'>;
} & TypographicStyleAsLinkProps;

export const bodyFontSize = 16;
export const bodyLineHeight = 24;

const fontName: FontFamily = 'Titillio';

/**
 * `Body` typographic style
 */
export const Body = forwardRef<View, BodyStyleProps>(
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

    const BodyProps: CustomTextProps = {
      ...props,
      dynamicTypeRamp: 'body', // iOS only
      font: fontName,
      weight: customWeight ? customWeight : 'Regular',
      size: bodyFontSize,
      lineHeight: bodyLineHeight,
      color: customColor ?? defaultColor,
      ...(asLink
        ? {
            accessibilityRole,
            textStyle: customTextStyle ?? { textDecorationLine: 'underline' },
          }
        : {}),
    };

    return (
      <CustomText ref={ref} {...BodyProps}>
        {props.children}
      </CustomText>
    );
  }
);
