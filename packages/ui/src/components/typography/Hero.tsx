import { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';

import { CustomText, CustomTextProps, TypographicStyleProps } from './CustomText';
import { useTheme } from '../../context';
import { FontSize } from '../../utils/fonts';

export const heroFontSize: FontSize = 32;
export const heroLineHeight = 48;

/**
 * `Hero` typographic style
 */
export const Hero = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useTheme();

    const HeroProps: CustomTextProps = {
      ...props,
      font: 'Titillio',
      weight: 'Semibold',
      size: 32,
      lineHeight: 48,
      color: customColor ?? theme['textHeading-default'],
    };

    return (
      <CustomText ref={ref} {...HeroProps}>
        {props.children}
      </CustomText>
    );
  }
);
