import { StyleSheet, View } from 'react-native';

import { useTheme } from '../../context';
import { Colors } from '../../core/Colors';

const DEFAULT_BORDER_SIZE = StyleSheet.hairlineWidth;

/**
Horizontal `Divider` component
 */
export const Divider = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: Colors[theme['divider-default']],
        height: DEFAULT_BORDER_SIZE,
      }}
    />
  );
};
