import { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';

import { CustomText, CustomTextProps, TypographicStyleProps } from './CustomText';
import { useTheme } from '../../context';
import { FontSize, FontWeight } from '../../utils/fonts';

type H2StyleProps = TypographicStyleProps & {
  weight?: Extract<FontWeight, 'Semibold' | 'Bold'>;
};

export const h2FontSize: FontSize = 26;
export const h2LineHeight = 34;

/**
 * `H2` typographic style
 */
export const H2 = forwardRef<View, H2StyleProps>(
  ({ weight: customWeight, color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useTheme();

    const H2Props: CustomTextProps = {
      ...props,
      dynamicTypeRamp: 'title1', // iOS only
      font: 'Titillio',
      weight: customWeight ?? 'Semibold',
      size: h2FontSize,
      lineHeight: h2LineHeight,
      color: customColor ?? theme['textHeading-default'],
    };

    return (
      <CustomText ref={ref} {...H2Props}>
        {props.children}
      </CustomText>
    );
  }
);
