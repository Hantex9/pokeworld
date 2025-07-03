/**
 * Utility functions to manage font properties to style mapping for both iOS and Android
 * Fonts are managed differently on Android and iOS.
 */

import { Platform, TextStyle } from 'react-native';

/**
 * Choose the font name based on the platform
 */
const fonts = {
  TitilliumSansPro: Platform.select({
    android: 'TitilliumSansPro',
    web: 'TitilliumSansPro',
    ios: 'Titillium Sans Pro',
    default: 'TitilliumSansPro',
  }),
  Titillio: Platform.select({
    android: 'Titillio',
    web: 'Titillio',
    ios: 'Titillio',
    default: 'Titillio',
  }),
  DMMono: Platform.select({
    android: 'DMMono',
    web: 'DMMono',
    ios: 'DM Mono',
    default: 'DMMono',
  }),
} as const;

export type FontFamily = keyof typeof fonts;

/*
 * Font Sizes
 */
const fontSizes = [12, 14, 16, 20, 22, 26, 28, 32] as const;
const fontSizesLegacy = [17, 28, 31, 35] as const;
const allFontSizes = [...new Set([...fontSizes, ...fontSizesLegacy])];
export type FontSize = (typeof allFontSizes)[number];

/*
 * Font Weights
 */

const weights = ['Thin', 'Light', 'Regular', 'Medium', 'Semibold', 'Bold', 'Black'] as const;
export type FontWeight = (typeof weights)[number];

const weightValues = ['200', '300', '400', '500', '600', '700', '900'] as const;
export type FontWeightNumeric = (typeof weightValues)[number];

/**
 * Mapping between the nominal description of the weight (also the postfix used on Android) and the numeric value
 * used on iOS
 */
export const fontWeights: Record<FontWeight, FontWeightNumeric> = {
  Thin: '200',
  Light: '300',
  Regular: '400',
  Medium: '500',
  Semibold: '600',
  Bold: '700',
  Black: '900',
};

type FontStyleObject = {
  fontSize: FontSize | number;
  /* We also accept `string` because Android needs a composed 
  fontFamily name, like `TitilliumSansPro-Regular` */
  fontFamily: string | FontFamily;
  fontWeight?: FontWeightNumeric;
  lineHeight?: TextStyle['lineHeight'];
  fontStyle?: TextStyle['fontStyle'];
  boldEnabled?: boolean;
};

/* Function that, given a certain weight, returns the next
available `FontWeight` value. 
For example, if I set it to `Regular`, the function 
should return `Medium`, and so on. If I set it to the last `FontWeight`
value, the function will return the same value.
*/
const getBolderFontWeight = (weight: FontWeight): FontWeight => {
  const currentWeight = weights.indexOf(weight);
  return currentWeight === weights.length - 1 ? weight : weights[currentWeight + 1];
};

/**
 * Get the correct `fontFamily` name on both Android and iOS.
 * @param font
 * @param weight
 * @param isItalic
 */
export const makeFontFamilyName = (
  font: FontFamily,
  weight: FontWeight = defaultWeight,
  fontStyle: TextStyle['fontStyle'] = 'normal'
): string =>
  Platform.select({
    web: fonts[font],
    android: `${fonts[font]}-${weight || 'Regular'}${fontStyle === 'italic' ? 'Italic' : ''}`,
    ios: fonts[font],
    default: fonts[font],
  });

/**
 * Default `Text` typography style
 */
const defaultFont: FontFamily = 'TitilliumSansPro';
const defaultWeight: FontWeight = 'Regular';
const defaultFontSize: FontSize = 16;
export const MaxFontSizeMultiplier = 1.5;

/**
 * Return a {@link FontStyleObject} with the fields filled based on the platform (iOS or Android).
 * @param size
 * @param font
 * @param weight
 * @param fontStyle
 */

export const makeFontStyleObject = (
  size: number = defaultFontSize,
  font: FontFamily = defaultFont,
  lineHeight: TextStyle['lineHeight'],
  weight: FontWeight = defaultWeight,
  fontStyle: TextStyle['fontStyle'] = 'normal',
  boldEnabled: boolean = false
): FontStyleObject => {
  const dynamicWeight = boldEnabled ? getBolderFontWeight(weight) : weight;

  return Platform.select({
    web: {
      fontSize: size,
      fontFamily: makeFontFamilyName(font, dynamicWeight, fontStyle),
      fontWeight: fontWeights[dynamicWeight],
      lineHeight,
      fontStyle,
    },
    android: {
      fontSize: size,
      fontFamily: makeFontFamilyName(font, dynamicWeight, fontStyle),
      lineHeight,
      includeFontPadding: false,
    },
    ios: {
      fontSize: size,
      fontFamily: makeFontFamilyName(font, dynamicWeight, fontStyle),
      fontWeight: fontWeights[dynamicWeight],
      lineHeight,
      fontStyle,
    },
    default: {
      fontSize: size,
      fontFamily: makeFontFamilyName(font, dynamicWeight, fontStyle),
    },
  });
};
