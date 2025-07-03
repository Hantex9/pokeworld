import { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';

import { useTheme } from '../../../context';
import { CustomText, CustomTextProps, TypographicStyleProps } from '../CustomText';

/**
 * `MdH3` typographic style
 */
export const MdH3 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useTheme();

    const MdH3Props: CustomTextProps = {
      ...props,
      font: 'Titillio',
      weight: 'Semibold',
      size: 16,
      lineHeight: 24,
      color: customColor ?? theme['textHeading-default'],
    };

    return (
      <CustomText ref={ref} {...MdH3Props}>
        {props.children}
      </CustomText>
    );
  }
);
