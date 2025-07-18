import * as React from 'react';
import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { Icons, Icon } from './Icon';
import { VisualCostants, Colors } from '../../core';

type IconContained = {
  variant: 'tonal';
  color: 'neutral';
  icon: Icons;
};

type IconContainedVisualAttrs = {
  background: Colors;
  foreground: Colors;
};

type IconContainedColorVariants = Record<IconContained['color'], IconContainedVisualAttrs>;

const tonalColorMap: IconContainedColorVariants = {
  neutral: {
    background: 'blue-50',
    foreground: 'grey-450',
  },
};

const variantMap: Record<IconContained['variant'], IconContainedColorVariants> = {
  tonal: tonalColorMap,
};

const IconContainedDefaultSize = VisualCostants.iconContainedSizeDefault;

const styles = StyleSheet.create({
  iconContainedWrapper: {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: IconContainedDefaultSize,
    height: IconContainedDefaultSize,
    borderRadius: IconContainedDefaultSize / 2,
  },
});

/*
`IconContained` is just a special wrapper for the `Icon` component. 
It's also not an interactive component, unlike the `IconButton`.
When adding new styles, you should be aware of this context and be careful
not to add variants that look like interactive counterparts.
*/
export const IconContained = ({ variant, color, icon }: IconContained) => {
  const backgroundColor = useMemo(() => variantMap[variant][color].background, [variant, color]);

  const foregroundColor = useMemo(() => variantMap[variant][color].foreground, [variant, color]);

  return (
    <View style={[styles.iconContainedWrapper, { backgroundColor: Colors[backgroundColor] }]}>
      <Icon name={icon} color={foregroundColor} />
    </View>
  );
};
