import { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';

import { useTheme } from '../../../context';
import { CustomText, CustomTextProps, TypographicStyleProps } from '../CustomText';

/**
 * `MdH2` typographic style
 */
export const MdH2 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useTheme();

    const MdH2Props: CustomTextProps = {
      ...props,
      font: 'Titillio',
      weight: 'Semibold',
      size: 18,
      lineHeight: 24,
      color: customColor ?? theme['textHeading-default'],
    };

    return (
      <CustomText ref={ref} {...MdH2Props}>
        {props.children}
      </CustomText>
    );
  }
);
