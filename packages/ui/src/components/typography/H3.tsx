import { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';

import { CustomText, CustomTextProps, TypographicStyleProps } from './CustomText';
import { useTheme } from '../../context';
import { FontSize } from '../../utils/fonts';

/* Common typographic styles */
export const h3FontSize: FontSize = 22;
export const h3LineHeight = 33;

/**
 * `H3` typographic style
 */
export const H3 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useTheme();

    const H3Props: CustomTextProps = {
      ...props,
      dynamicTypeRamp: 'title2', // iOS only
      font: 'Titillio',
      weight: 'Semibold',
      size: h3FontSize,
      lineHeight: h3LineHeight,
      color: customColor ?? theme['textHeading-default'],
    };

    return (
      <CustomText ref={ref} {...H3Props}>
        {props.children}
      </CustomText>
    );
  }
);
