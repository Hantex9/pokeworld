import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const BASE_FONT_FOLDER = '../../assets/fonts';

export const useLoadFonts = () => {
  const [loaded] = useFonts({
    // TitilliumSansPro
    TitilliumSansProThinItalic: require(
      `${BASE_FONT_FOLDER}/TitilliumSansPro/TitilliumSansPro-ThinItalic.otf`
    ),
    TitilliumSansProSemiboldItalic: require(
      `${BASE_FONT_FOLDER}/TitilliumSansPro/TitilliumSansPro-SemiboldItalic.otf`
    ),
    TitilliumSansProThin: require(`${BASE_FONT_FOLDER}/TitilliumSansPro/TitilliumSansPro-Thin.otf`),
    TitilliumSansProSemibold: require(
      `${BASE_FONT_FOLDER}/TitilliumSansPro/TitilliumSansPro-Semibold.otf`
    ),
    TitilliumSansProRegular: require(
      `${BASE_FONT_FOLDER}/TitilliumSansPro/TitilliumSansPro-Regular.otf`
    ),
    TitilliumSansProLightItalic: require(
      `${BASE_FONT_FOLDER}/TitilliumSansPro/TitilliumSansPro-LightItalic.otf`
    ),
    TitilliumSansProLight: require(
      `${BASE_FONT_FOLDER}/TitilliumSansPro/TitilliumSansPro-Light.otf`
    ),
    TitilliumSansProItalic: require(
      `${BASE_FONT_FOLDER}/TitilliumSansPro/TitilliumSansPro-Italic.otf`
    ),
    TitilliumSansProBoldItalic: require(
      `${BASE_FONT_FOLDER}/TitilliumSansPro/TitilliumSansPro-BoldItalic.otf`
    ),
    TitilliumSansProBold: require(`${BASE_FONT_FOLDER}/TitilliumSansPro/TitilliumSansPro-Bold.otf`),
    TitilliumSansProBlackItalic: require(
      `${BASE_FONT_FOLDER}/TitilliumSansPro/TitilliumSansPro-BlackItalic.otf`
    ),
    TitilliumSansProBlack: require(
      `${BASE_FONT_FOLDER}/TitilliumSansPro/TitilliumSansPro-Black.otf`
    ),
    // Titillio
    TitillioThinItalic: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-ThinItalic.otf`),
    TitillioThin: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-Thin.otf`),
    TitillioSemiboldItalic: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-SemiboldItalic.otf`),
    TitillioSemibold: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-Semibold.otf`),
    TitillioRegularItalic: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-RegularItalic.otf`),
    TitillioRegular: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-Regular.otf`),
    TitillioLightItalic: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-LightItalic.otf`),
    TitillioLight: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-Light.otf`),
    TitillioExtrabold: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-Extrabold.otf`),
    TitillioExtraboldItalic: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-ExtraboldItalic.otf`),
    TitillioExtrablackItalic: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-ExtrablackItalic.otf`),
    TitillioExtrablack: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-Extrablack.otf`),
    TitillioBold: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-Bold.otf`),
    TitillioBoldItalic: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-BoldItalic.otf`),
    TitillioBlackItalic: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-BlackItalic.otf`),
    TitillioBlack: require(`${BASE_FONT_FOLDER}/Titillio/Titillio-Black.otf`),
    // DMMono
    DMMonoMedium: require(`${BASE_FONT_FOLDER}/DMMono/DMMono-Medium.ttf`),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return loaded;
};
