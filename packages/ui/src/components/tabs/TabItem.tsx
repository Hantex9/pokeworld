import { forwardRef, Ref, useCallback, useMemo } from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useReducedMotion,
  withSpring,
} from 'react-native-reanimated';

import { useTheme } from '../../context';
import { Colors, SpringValues } from '../../core';
import { useScaleAnimation } from '../../hooks';
import { hexToRgba } from '../../utils';
import { WithTestID } from '../../utils/types';
import { Icons, Icon } from '../icons';
import { CustomText } from '../typography';

type ColorMode = 'light' | 'dark';

type TabItemState = 'default' | 'selected' | 'disabled';

export type TabItemProps = WithTestID<{
  label: string;
  color?: ColorMode;
  selected?: boolean;
  // Icons
  icon?: Icons;
  iconSelected?: Icons;
  // Accessibility
  accessibilityLabel: string;
  accessibilityHint?: string;
  // Events
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}>;

type ColorStates = {
  border: {
    default: string;
    selected: string;
  };
  background: {
    default: string;
    selected: string;
  };
  foreground: {
    default: Colors;
    selected: Colors;
    disabled: Colors;
  };
};

const DISABLED_OPACITY = 0.5;

const TabItem = forwardRef(
  (
    {
      label,
      color = 'light',
      selected = false,
      accessibilityLabel,
      accessibilityHint,
      testID,
      onPress,
      disabled = false,
      icon,
      iconSelected,
    }: TabItemProps,
    ref: Ref<View>
  ) => {
    const { onPressIn, onPressOut, scaleAnimatedStyle } = useScaleAnimation('medium');
    const theme = useTheme();
    const reducedMotion = useReducedMotion();

    const mapColorStates: Record<NonNullable<TabItemProps['color']>, ColorStates> = useMemo(
      () => ({
        light: {
          border: {
            default: Colors[theme['tab-item-border-default']],
            selected: hexToRgba(Colors[theme['tab-item-foreground-selected']], 0.5),
          },
          background: {
            default: hexToRgba(Colors[theme['tab-item-background-selected']], 0),
            selected: hexToRgba(Colors[theme['tab-item-background-selected']], 0.25),
            pressed: Colors[theme['appBackground-primary']],
          },
          foreground: {
            default: theme['tab-item-foreground-default'],
            selected: theme['tab-item-foreground-selected'],
            disabled: 'grey-700',
          },
        },
        dark: {
          border: {
            default: hexToRgba(Colors.white, 0),
            selected: Colors.white,
          },
          background: {
            default: hexToRgba(Colors.white, 0.1),
            selected: Colors.white,
            pressed: Colors.white,
          },
          foreground: {
            default: 'white',
            selected: 'black',
            disabled: 'white',
          },
        },
      }),
      [theme]
    );

    const itemState: TabItemState = selected ? 'selected' : disabled ? 'disabled' : 'default';

    const foregroundColor = mapColorStates[color].foreground[itemState];

    const selectedStateTransition = useDerivedValue(() =>
      withSpring(selected ? 1 : 0, SpringValues.selection)
    );

    // Interpolate animation values from `pressed` values
    const animatedStyle = useAnimatedStyle(() => ({
      backgroundColor: interpolateColor(
        selectedStateTransition.value,
        [0, 1],
        [mapColorStates[color].background.default, mapColorStates[color].background.selected]
      ),
      borderColor: interpolateColor(
        selectedStateTransition.value,
        [0, 1],
        [mapColorStates[color].border.default, mapColorStates[color].border.selected]
      ),
    }));

    const activeIcon = selected ? (iconSelected ?? icon) : icon;

    const handleOnPress = useCallback(
      (event: GestureResponderEvent) => {
        if (onPress) {
          onPress(event);
        }
      },
      [onPress]
    );

    return (
      <Pressable
        ref={ref}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        accessibilityRole="tab"
        accessibilityState={{ checked: !!selected }}
        testID={testID}
        onPress={handleOnPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        accessible={true}
        disabled={disabled}
      >
        <Animated.View
          style={[
            styles.container,
            { columnGap: 4 },
            !disabled && !reducedMotion && scaleAnimatedStyle,
            animatedStyle,
            disabled && { opacity: DISABLED_OPACITY },
          ]}
        >
          {activeIcon && <Icon name={activeIcon} color={foregroundColor} size={16} />}
          <CustomText size={14} font="Titillio" weight="Semibold" color={foregroundColor}>
            {label}
          </CustomText>
        </Animated.View>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 64,
    borderCurve: 'continuous',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
});

export { TabItem };
