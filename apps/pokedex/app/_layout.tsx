import { ThemeContextProvider } from '@pokeworld/ui';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RelayEnvironmentProvider } from 'react-relay';
import 'react-native-reanimated';

import { useLoadFonts } from '@/hooks/useLoadFonts';
import { environment } from '@/lib/api';
import { AppStackNavigator } from '@/navigation/AppStackNavigator';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const loaded = useLoadFonts();

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <RelayEnvironmentProvider environment={environment}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <ThemeContextProvider theme={colorScheme}>
            <AppStackNavigator />
            <StatusBar style="auto" />
          </ThemeContextProvider>
        </ThemeProvider>
      </RelayEnvironmentProvider>
    </SafeAreaProvider>
  );
};

export default RootLayout;
