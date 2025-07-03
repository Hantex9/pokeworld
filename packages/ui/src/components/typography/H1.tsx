import { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';

import { CustomText, CustomTextProps, TypographicStyleProps } from './CustomText';
import { useTheme } from '../../context';
import { FontSize } from '../../utils/fonts';

export const h1FontSize: FontSize = 28;
export const h1LineHeight = 42;

/**
 * `H1` typographic style
 */
export const H1 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useTheme();

    const H1Props: CustomTextProps = {
      ...props,
      dynamicTypeRamp: 'largeTitle', // iOS only
      font: 'Titillio',
      weight: 'Semibold',
      size: h1FontSize,
      lineHeight: h1LineHeight,
      color: customColor ?? theme['textHeading-default'],
    };

    return (
      <CustomText ref={ref} {...H1Props}>
        {props.children}
      </CustomText>
    );
  }
);
