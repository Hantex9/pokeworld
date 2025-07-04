import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const useLoadFonts = () => {
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

  return loaded;
};
