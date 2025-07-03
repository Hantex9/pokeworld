import { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';

import { CustomText, CustomTextProps, TypographicStyleProps } from './CustomText';
import { useTheme } from '../../context';
import { FontSize } from '../../utils/fonts';

export const h6FontSize: FontSize = 16;
export const h6LineHeight = 24;

/**
 * `H6` typographic style
 */
export const H6 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useTheme();

    const H6Props: CustomTextProps = {
      ...props,
      dynamicTypeRamp: 'headline', // iOS only
      font: 'Titillio',
      weight: 'Semibold',
      size: h6FontSize,
      lineHeight: h6LineHeight,
      color: customColor ?? theme['textHeading-default'],
    };

    return (
      <CustomText ref={ref} {...H6Props}>
        {props.children}
      </CustomText>
    );
  }
);
