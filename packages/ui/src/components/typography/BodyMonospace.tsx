import { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';

import { bodyFontSize, bodyLineHeight } from './Body';
import { CustomText, CustomTextProps, TypographicStyleProps } from './CustomText';
import { useTheme } from '../../context';

/**
 * `BodyMonospace` typographic style
 */
export const BodyMonospace = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useTheme();

    const BodyProps: CustomTextProps = {
      ...props,
      dynamicTypeRamp: 'body', // iOS only
      font: 'DMMono',
      weight: 'Medium',
      size: bodyFontSize,
      lineHeight: bodyLineHeight,
      color: customColor ?? theme['textBody-tertiary'],
      textStyle: {
        letterSpacing: 0.5,
      },
    };

    return (
      <CustomText ref={ref} {...BodyProps}>
        {props.children}
      </CustomText>
    );
  }
);
