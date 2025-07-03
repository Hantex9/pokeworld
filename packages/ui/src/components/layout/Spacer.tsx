import { useMemo } from 'react';
import { View } from 'react-native';

import { Colors, Spacer } from '../../core';
import { hexToRgba } from '../../utils';

type BaseSpacerProps = {
  orientation: 'vertical' | 'horizontal';
  size: Spacer;
  allowScaleSpacing?: boolean;
};

type SpacerProps = {
  size?: Spacer;
  allowScaleSpacing?: boolean;
};

const DEFAULT_SIZE: Spacer = 16;

/* Debug Mode */
const debugMode = false;
const debugBg = hexToRgba(Colors['error-600'], 0.2);

/**
Native `Spacer` component
@param  {string} orientation
@param {Spacer} size
 */
const BaseSpacer = ({ allowScaleSpacing, orientation, size }: BaseSpacerProps) => {
  const style = useMemo(
    () => ({
      ...(orientation === 'vertical' && {
        height: allowScaleSpacing ? size : size,
      }),
      ...(orientation === 'horizontal' && {
        width: allowScaleSpacing ? size : size,
      }),
      ...((debugMode as boolean) && {
        backgroundColor: debugBg,
      }),
    }),
    [allowScaleSpacing, orientation, size]
  );

  return <View style={style} />;
};

/**
Horizontal spacer component
@param {Spacer} size
 */
export const HSpacer = ({ size = DEFAULT_SIZE }: SpacerProps) => (
  <BaseSpacer orientation={'horizontal'} size={size} />
);
/**
Vertical spacer component
@param {Spacer} size
 */
export const VSpacer = ({ size = DEFAULT_SIZE }: SpacerProps) => (
  <BaseSpacer orientation={'vertical'} size={size} />
);
