import { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';

import { useTheme } from '../../../context';
import { CustomText, CustomTextProps, TypographicStyleProps } from '../CustomText';

/**
 * `MdH1` typographic style
 */
export const MdH1 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useTheme();

    const MdH1Props: CustomTextProps = {
      ...props,
      font: 'Titillio',
      weight: 'Semibold',
      size: 20,
      lineHeight: 24,
      color: customColor ?? theme['textHeading-default'],
    };

    return (
      <CustomText ref={ref} {...MdH1Props}>
        {props.children}
      </CustomText>
    );
  }
);
