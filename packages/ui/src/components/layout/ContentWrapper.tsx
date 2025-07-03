import { forwardRef, ReactNode } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

import type { AppMargin } from '../../core';
import { VisualCostants } from '../../core';
import { WithTestID } from '../../utils/types';

type IOContentWrapperProps = WithTestID<
  Omit<ViewProps, 'style'> & {
    margin?: AppMargin;
    children: ReactNode;
    style?: Omit<ViewStyle, 'paddingHorizontal' | 'paddingLeft' | 'paddingRight'>;
  }
>;

/**
`ContentWrapper` is the main wrapper of the application. It automatically sets side margins,
depending on the size value
@param {IOContentWrapper} margin
 */
export const ContentWrapper = forwardRef<View, IOContentWrapperProps>(
  (
    {
      margin = VisualCostants.appMarginDefault,
      style,
      children,
      testID,
      ...rest
    }: IOContentWrapperProps,
    ref
  ) => (
    <View
      testID={testID}
      style={{
        paddingHorizontal: margin,
        ...style,
      }}
      ref={ref}
      {...rest}
    >
      {children}
    </View>
  )
);
