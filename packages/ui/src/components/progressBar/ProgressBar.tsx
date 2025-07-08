import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

import { useCustomThemeContext } from '../../context';
import { Colors } from '../../core/Colors';
import { RadiusScale } from '../../core/Shapes';

export interface ProgressBarProps {
  value: number;
  max: number;
  height?: number;
  style?: ViewStyle;
}

/**
 * Simple linear ProgressBar component.
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, height = 8, style }) => {
  const progress = Math.max(0, Math.min(1, max > 0 ? value / max : 0));

  const { themeType } = useCustomThemeContext();

  const backgroundColor = themeType === 'light' ? Colors['grey-200'] : Colors['grey-450'];
  const progressColor = themeType === 'light' ? Colors['blue-500'] : Colors['blue-600'];

  return (
    <View
      style={[styles.container, { height, backgroundColor, borderRadius: RadiusScale[1] }, style]}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max, now: value }}
    >
      <View
        style={[
          styles.progress,
          {
            width: `${progress * 100}%`,
            backgroundColor: progressColor,
            borderRadius: RadiusScale[1],
            height: '100%',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: Colors['grey-200'],
  },
  progress: {
    height: '100%',
    backgroundColor: Colors['blue-500'],
  },
});
