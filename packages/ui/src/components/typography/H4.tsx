import { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';

import { CustomText, CustomTextProps, TypographicStyleProps } from './CustomText';
import { useTheme } from '../../context';
import { FontSize } from '../../utils/fonts';

export const h4FontSize: FontSize = 20;
export const h4LineHeight = 24;

/**
 * `H4` typographic style
 */
export const H4 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useTheme();

    const H4Props: CustomTextProps = {
      ...props,
      dynamicTypeRamp: 'title3', // iOS only
      font: 'Titillio',
      weight: 'Semibold',
      size: h4FontSize,
      lineHeight: h4LineHeight,
      color: customColor ?? theme['textHeading-default'],
    };

    return (
      <CustomText ref={ref} {...H4Props}>
        {props.children}
      </CustomText>
    );
  }
);
