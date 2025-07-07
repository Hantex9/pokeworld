import { ThemeContextProvider } from '@pokeworld/ui';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RelayEnvironmentProvider } from 'react-relay';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useLoadFonts } from '@/hooks/useLoadFonts';
import { environment } from '@/lib/api';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const loaded = useLoadFonts();

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <RelayEnvironmentProvider environment={environment}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <ThemeContextProvider theme={colorScheme}>
            <Stack>
              <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
              <Stack.Screen name="details" options={{ title: 'Details', headerShown: true }} />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
          </ThemeContextProvider>
        </ThemeProvider>
      </RelayEnvironmentProvider>
    </SafeAreaProvider>
  );
};

export default RootLayout;
