import { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';

import { CustomText, CustomTextProps, TypographicStyleProps } from './CustomText';
import { useTheme } from '../../context';
import { FontSize } from '../../utils/fonts';

export const h5FontSize: FontSize = 14;
export const h5LineHeight = 16;

/**
 * `H5` typographic style
 */
export const H5 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useTheme();

    const H5Props: CustomTextProps = {
      ...props,
      dynamicTypeRamp: 'subheadline', // iOS only
      font: 'Titillio',
      weight: 'Semibold',
      size: h5FontSize,
      lineHeight: h5LineHeight,
      color: customColor ?? theme['textHeading-default'],
      textStyle: {
        textTransform: 'uppercase',
        letterSpacing: 0.5,
      },
    };

    return (
      <CustomText ref={ref} {...H5Props}>
        {props.children}
      </CustomText>
    );
  }
);
