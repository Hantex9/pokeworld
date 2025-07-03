import React, { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';

import { CustomText, CustomTextProps, TypographicStyleProps } from './CustomText';
import { useTheme } from '../../context';
import { FontSize } from '../../utils/fonts';

export const captionFontSize: FontSize = 12;

/**
 * `Caption` typographic style
 */
export const Caption = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useTheme();

    const CaptionProps: CustomTextProps = {
      ...props,
      dynamicTypeRamp: 'caption1', // iOS only
      font: 'Titillio',
      weight: 'Regular',
      size: captionFontSize,
      color: customColor ?? theme['textBody-default'],
      textStyle: {
        textTransform: 'uppercase',
        letterSpacing: 0.5,
      },
    };

    return (
      <CustomText ref={ref} {...CaptionProps}>
        {props.children}
      </CustomText>
    );
  }
);
