import { useCallback } from 'react';
import { GestureResponderEvent } from 'react-native';
import { SharedValue, useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated';

import { SpringValues } from '../../core';

export const useSpringPressProgressValue = (
  springValue: SpringValues = 'button'
): {
  progress: SharedValue<number>;
  onPressIn: (event: GestureResponderEvent) => void;
  onPressOut: (event: GestureResponderEvent) => void;
} => {
  const isPressed: SharedValue<number> = useSharedValue(0);

  const progress = useDerivedValue(() => withSpring(isPressed.value, SpringValues[springValue]));

  const onPressIn = useCallback(() => {
    isPressed.value = 1;
  }, [isPressed]);
  const onPressOut = useCallback(() => {
    isPressed.value = 0;
  }, [isPressed]);

  return { onPressIn, onPressOut, progress };
};
