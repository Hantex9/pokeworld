import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { useCustomThemeContext } from '../../context';
import { BannerBigSpacing, BannerRadius } from '../../core';
import { Colors } from '../../core/Colors';
import { hexToRgba } from '../../utils';
import { WithTestID } from '../../utils/types';

/* Styles */
const cardPadding = BannerBigSpacing;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'center',
    padding: cardPadding,
    borderRadius: BannerRadius,
    borderCurve: 'continuous',
  },
});

/* Component Types */

type BaseBannerProps = WithTestID<{
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}>;

export type Card = BaseBannerProps;

export const Card = ({ children, style, testID }: Card) => {
  const { themeType } = useCustomThemeContext();

  const dynamicContainerStyles: ViewStyle = {
    backgroundColor: themeType === 'dark' ? hexToRgba(Colors['grey-50'], 0.1) : Colors['grey-100'],
  };

  return (
    <View testID={testID} style={[styles.container, dynamicContainerStyles, style]}>
      {children}
    </View>
  );
};
