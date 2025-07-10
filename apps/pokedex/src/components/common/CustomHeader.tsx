import { H2, useTheme, VisualCostants } from '@pokeworld/ui';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Variant = 'primary' | 'contrast';

export type CustomHeader = {
  title: string;
  variant?: Variant;
};

const styles = StyleSheet.create({
  headerInner: {
    height: VisualCostants.headerHeight,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerDivider: {
    position: 'absolute',
    width: '100%',
    height: StyleSheet.hairlineWidth,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export const CustomHeader = ({ title, variant = 'primary' }: CustomHeader) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const isPrimary = variant === 'primary';

  return (
    <View
      style={{
        paddingTop: insets.top,
      }}
      accessibilityRole="header"
    >
      <View style={styles.headerInner}>
        <H2
          weight="Bold"
          style={{ flexShrink: 1 }}
          numberOfLines={1}
          color={isPrimary ? theme['textHeading-default'] : theme['textHeading-constrast']}
        >
          {title}
        </H2>
      </View>
    </View>
  );
};

export default CustomHeader;
