import { ThemeContextProvider } from '@pokeworld/ui';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    // TitilliumSansPro
    TitilliumSansProThinItalic: require('../assets/fonts/TitilliumSansPro/TitilliumSansPro-ThinItalic.otf'),
    TitilliumSansProSemiboldItalic: require('../assets/fonts/TitilliumSansPro/TitilliumSansPro-SemiboldItalic.otf'),
    TitilliumSansProThin: require('../assets/fonts/TitilliumSansPro/TitilliumSansPro-Thin.otf'),
    TitilliumSansProSemibold: require('../assets/fonts/TitilliumSansPro/TitilliumSansPro-Semibold.otf'),
    TitilliumSansProRegular: require('../assets/fonts/TitilliumSansPro/TitilliumSansPro-Regular.otf'),
    TitilliumSansProLightItalic: require('../assets/fonts/TitilliumSansPro/TitilliumSansPro-LightItalic.otf'),
    TitilliumSansProLight: require('../assets/fonts/TitilliumSansPro/TitilliumSansPro-Light.otf'),
    TitilliumSansProItalic: require('../assets/fonts/TitilliumSansPro/TitilliumSansPro-Italic.otf'),
    TitilliumSansProBoldItalic: require('../assets/fonts/TitilliumSansPro/TitilliumSansPro-BoldItalic.otf'),
    TitilliumSansProBold: require('../assets/fonts/TitilliumSansPro/TitilliumSansPro-Bold.otf'),
    TitilliumSansProBlackItalic: require('../assets/fonts/TitilliumSansPro/TitilliumSansPro-BlackItalic.otf'),
    TitilliumSansProBlack: require('../assets/fonts/TitilliumSansPro/TitilliumSansPro-Black.otf'),
    // Titillio
    TitillioThinItalic: require('../assets/fonts/Titillio/Titillio-ThinItalic.otf'),
    TitillioThin: require('../assets/fonts/Titillio/Titillio-Thin.otf'),
    TitillioSemiboldItalic: require('../assets/fonts/Titillio/Titillio-SemiboldItalic.otf'),
    TitillioSemibold: require('../assets/fonts/Titillio/Titillio-Semibold.otf'),
    TitillioRegularItalic: require('../assets/fonts/Titillio/Titillio-RegularItalic.otf'),
    TitillioRegular: require('../assets/fonts/Titillio/Titillio-Regular.otf'),
    TitillioLightItalic: require('../assets/fonts/Titillio/Titillio-LightItalic.otf'),
    TitillioLight: require('../assets/fonts/Titillio/Titillio-Light.otf'),
    TitillioExtrabold: require('../assets/fonts/Titillio/Titillio-Extrabold.otf'),
    TitillioExtraboldItalic: require('../assets/fonts/Titillio/Titillio-ExtraboldItalic.otf'),
    TitillioExtrablackItalic: require('../assets/fonts/Titillio/Titillio-ExtrablackItalic.otf'),
    TitillioExtrablack: require('../assets/fonts/Titillio/Titillio-Extrablack.otf'),
    TitillioBold: require('../assets/fonts/Titillio/Titillio-Bold.otf'),
    TitillioBoldItalic: require('../assets/fonts/Titillio/Titillio-BoldItalic.otf'),
    TitillioBlackItalic: require('../assets/fonts/Titillio/Titillio-BlackItalic.otf'),
    TitillioBlack: require('../assets/fonts/Titillio/Titillio-Black.otf'),
    // DMMono
    DMMonoMedium: require('../assets/fonts/DMMono/DMMono-Medium.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <ThemeContextProvider theme={'light'}>
          <Stack>
            <Stack.Screen name="index" options={{ title: 'Home', headerShown: true }} />
            <Stack.Screen name="details" options={{ title: 'Details', headerShown: true }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </ThemeContextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
