import { PropsWithChildren } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

import { Spacer } from '../../core';
import { WithTestID } from '../../utils/types';

type AllowedStyleProps = Exclude<ViewStyle, 'display' | 'flexDirection' | 'gap'>;

type A11YRelatedProps = Pick<
  ViewProps,
  'pointerEvents' | 'accessibilityElementsHidden' | 'importantForAccessibility'
>;

type Stack = PropsWithChildren<{
  space?: Spacer | 0;
  style?: AllowedStyleProps;
  allowScaleSpacing?: boolean;
}> &
  A11YRelatedProps;

type BaseStack = WithTestID<
  Stack & {
    orientation: 'vertical' | 'horizontal';
  }
>;

/**
Horizontal Stack component
@param {Spacer} space
 */

const Stack = ({
  space = 0,
  style,
  orientation = 'vertical',
  allowScaleSpacing,
  children,
  ...props
}: BaseStack) => {
  return (
    <View
      {...props}
      style={{
        display: 'flex',
        flexDirection: orientation === 'horizontal' ? 'row' : 'column',
        gap: space,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export const HStack = ({ children, ...props }: Stack) => (
  <Stack orientation="horizontal" {...props}>
    {children}
  </Stack>
);

/**
Vertical Stack component
@param {Spacer} space
 */

export const VStack = ({ children, ...props }: Stack) => (
  <Stack orientation="vertical" {...props}>
    {children}
  </Stack>
);
