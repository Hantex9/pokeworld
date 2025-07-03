import React, { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';

import { CustomText, CustomTextProps, TypographicStyleProps } from './CustomText';
import { Colors } from '../../core';
import { FontFamily, FontSize } from '../../utils/fonts';

export const buttonTextFontSize: FontSize = 16;
export const buttonTextLineHeight = 20;

/* Needed to render `ButtonOutline` and`ButtonLink` because they use
`AnimatedText` for color transition through Reanimated */
const defaultColor: Colors = 'white';
const fontName: FontFamily = 'Titillio';

/**
 * `ButtonText` typographic style
 */
export const ButtonText = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const ButtonTextProps: CustomTextProps = {
      ...props,
      font: fontName,
      weight: 'Semibold',
      size: buttonTextFontSize,
      lineHeight: buttonTextLineHeight,
      /* Needed to render `ButtonOutline` and`ButtonLink` because they use
`AnimatedText` for color transition through Reanimated */
      color: customColor ?? defaultColor,
    };

    return (
      <CustomText ref={ref} {...ButtonTextProps}>
        {props.children}
      </CustomText>
    );
  }
);
