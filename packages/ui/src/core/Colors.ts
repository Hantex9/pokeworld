import { ColorValue } from 'react-native';

/*
TYPESCRIPT FUNCTIONS
*/

// Ensure the Type for IOColor without losing the inferred types
function asCustomColors<T extends { [key: string]: ColorValue }>(arg: T): T {
  return arg;
}

function asThemeColors<T extends { [key: string]: Colors }>(arg: T): T {
  return arg;
}

/*
ENTIRE COLOR SCALE
*/

export const Colors = asCustomColors({
  white: '#FFFFFF',
  'grey-50': '#F4F5F8',
  'grey-100': '#E8EBF1',
  'grey-200': '#D2D6E3',
  'grey-300': '#BBC2D6',
  'grey-450': '#99A3C1',
  'grey-650': '#636B82',
  'grey-700': '#555C70',
  'grey-850': '#2B2E38',
  'grey-900': '#1D1F26',
  black: '#0E0F13',
  'blue-850': '#031344',
  'blue-600': '#0932B6',
  'blue-500': '#0B3EE3',
  'blue-400': '#3C65E9',
  'blue-300': '#6D8BEE',
  'blue-200': '#9DB2F4',
  'blue-150': '#B6C5F7',
  'blue-100': '#CED8F9',
  'blue-50': '#E7ECFC',
  'hanPurple-850': '#1A0744',
  'hanPurple-500': '#5517E3',
  'hanPurple-250': '#CCB9F7',
  'hanPurple-100': '#DDD1F9',
  'hanPurple-50': '#EEE8FC',
  'turquoise-850': '#003B3D',
  'turquoise-500': '#00C5CA',
  'turquoise-450': '#19CBCF' /* Dark mode */,
  'turquoise-300': '#61DCDF',
  'turquoise-150': '#AAEEEF',
  'turquoise-100': '#C2F3F4',
  'turquoise-50': '#DBF9FA',
  'error-850': '#5D1313',
  'error-600': '#D13333',
  'error-500': '#FF4040',
  'error-400': '#FF6666' /* Dark mode */,
  'error-100': '#FFD9D9',
  'warning-850': '#614C15',
  'warning-700': '#A5822A',
  'warning-500': '#FFCB46',
  'warning-400': '#FFD56B' /* Dark mode */,
  'warning-100': '#FFF5DA',
  'success-850': '#224021',
  'success-700': '#427940',
  'success-500': '#6CC66A',
  'success-400': '#89D188' /* Dark mode */,
  'success-100': '#E1F4E1',
  'info-850': '#215C76',
  'info-700': '#418DAF',
  'info-500': '#6BCFFB',
  'info-400': '#89D9FC' /* Dark mode */,
  'info-100': '#E1F5FE',
  'blueItalia-850': '#001F3D',
  'blueItalia-600': '#0052A3',
  'blueItalia-500': '#0066CC',
  'blueItalia-100': '#C4DCF5',
  'blueItalia-50': '#DDEBFA',
});

export type Colors = keyof typeof Colors;

/*
░░░ COLORS SETS ░░░
*/

export const ColorsNeutral = asCustomColors({
  black: Colors.black,
  'grey-900': Colors['grey-900'],
  'grey-850': Colors['grey-850'],
  'grey-700': Colors['grey-700'],
  'grey-650': Colors['grey-650'],
  'grey-450': Colors['grey-450'],
  'grey-300': Colors['grey-300'],
  'grey-200': Colors['grey-200'],
  'grey-150': Colors['grey-100'],
  'grey-50': Colors['grey-50'],
  white: Colors.white,
});
export type ColorsNeutral = keyof typeof ColorsNeutral;

export const ColorsTints = asCustomColors({
  'blue-850': Colors['blue-850'],
  'blue-600': Colors['blue-600'],
  'blue-500': Colors['blue-500'],
  'blue-400': Colors['blue-400'],
  'blue-300': Colors['blue-300'],
  'blue-200': Colors['blue-200'],
  'blue-150': Colors['blue-150'],
  'blue-100': Colors['blue-100'],
  'blue-50': Colors['blue-50'],
  'turquoise-850': Colors['turquoise-850'],
  'turquoise-500': Colors['turquoise-500'],
  'turquoise-450': Colors['turquoise-450'],
  'turquoise-150': Colors['turquoise-150'],
  'turquoise-100': Colors['turquoise-100'],
  'turquoise-50': Colors['turquoise-50'],
});
export type ColorsTints = keyof typeof ColorsTints;

export const ColorsStatus = asCustomColors({
  'error-850': Colors['error-850'],
  'error-600': Colors['error-600'],
  'error-500': Colors['error-500'],
  'error-400': Colors['error-400'],
  'error-100': Colors['error-100'],
  'warning-850': Colors['warning-850'],
  'warning-700': Colors['warning-700'],
  'warning-500': Colors['warning-500'],
  'warning-400': Colors['warning-400'],
  'warning-100': Colors['warning-100'],
  'success-850': Colors['success-850'],
  'success-700': Colors['success-700'],
  'success-500': Colors['success-500'],
  'success-400': Colors['success-400'],
  'success-100': Colors['success-100'],
  'info-850': Colors['info-850'],
  'info-700': Colors['info-700'],
  'info-500': Colors['info-500'],
  'info-400': Colors['info-400'],
  'info-100': Colors['info-100'],
});

export type ColorsStatus = keyof typeof ColorsStatus;

export type ColorsStatusForeground = Extract<
  ColorsStatus,
  'error-850' | 'warning-850' | 'info-850' | 'success-850'
>;
export type ColorsStatusBackground = Extract<
  ColorsStatus,
  'error-100' | 'warning-100' | 'info-100' | 'success-100'
>;

export const ColorsExtra = {
  'blueItalia-850': Colors['blueItalia-850'],
  'blueItalia-600': Colors['blueItalia-600'],
  'blueItalia-500': Colors['blueItalia-500'],
  'blueItalia-100': Colors['blueItalia-100'],
  'blueItalia-50': Colors['blueItalia-50'],
};

export type ColorsExtra = keyof typeof ColorsExtra;

/*
░░░ THEME COLORS ░░░
*/

const themeKeys = [
  // General
  'appBackground-primary',
  'appBackground-secondary',
  'appBackground-tertiary',
  'appBackground-accent',
  'interactiveElem-default',
  'interactiveElem-pressed',
  'interactiveElem-disabled',
  'interactiveOutline-disabled',
  'neutralButton-default',
  'neutralButton-pressed',
  'neutralButton-disabled',
  'buttonText-default',
  'buttonText-danger',
  'buttonText-disabled',
  'listItem-pressed',
  // Typography
  'textHeading-default',
  'textHeading-secondary',
  'textHeading-tertiary',
  'textHeading-constrast',
  'textBody-default',
  'textBody-secondary',
  'textBody-tertiary',
  // Design System related
  'cardBorder-default',
  'textInputBorder-default',
  'stepper-default',
  'icon-default',
  'icon-decorative',
  // Inputs
  'textInputBorder-default',
  'textInputLabel-default',
  'textInputValue-default',
  'textInputValue-disabled',
  // Layout
  'divider-header',
  'divider-default',
  'divider-bottomBar',
  'skeleton-background',
  // Tab Item
  'tab-item-border-default',
  'tab-item-foreground-default',
  'tab-item-foreground-selected',
  'tab-item-background-selected',
  // Status
  'errorIcon',
  'errorText',
  'successIcon',
  'successText',
  'warningIcon',
  'infoIcon',
  // Pictograms
  'pictogram-hands',
  'pictogram-tint-main',
  'pictogram-tint-secondary',
  'pictogram-tint-tertiary',
] as const;

export type Theme = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [K in (typeof themeKeys)[number]]: Colors;
};

export const ThemeLight: Theme = {
  // General
  'appBackground-primary': 'white',
  'appBackground-secondary': 'grey-50',
  'appBackground-tertiary': 'grey-100',
  'appBackground-accent': 'blue-500',
  'interactiveElem-default': 'blue-500',
  'interactiveElem-pressed': 'blue-600',
  'interactiveElem-disabled': 'grey-300',
  'interactiveOutline-disabled': 'grey-650',
  'neutralButton-default': 'black',
  'neutralButton-pressed': 'grey-850',
  'neutralButton-disabled': 'grey-450',
  'buttonText-default': 'white',
  'buttonText-danger': 'white',
  'buttonText-disabled': 'grey-700',
  'listItem-pressed': 'grey-50',
  // Typography
  'textHeading-default': 'black',
  'textHeading-secondary': 'grey-850',
  'textHeading-tertiary': 'grey-700',
  'textHeading-constrast': 'white',
  'textBody-default': 'black',
  'textBody-secondary': 'grey-850',
  'textBody-tertiary': 'grey-700',
  // Design System related
  'cardBorder-default': 'grey-100',
  'icon-default': 'grey-650',
  'stepper-default': 'grey-200',
  'icon-decorative': 'grey-300',
  // Layout
  'divider-header': 'grey-100',
  'divider-default': 'grey-200',
  'divider-bottomBar': 'grey-200',
  'skeleton-background': 'grey-100',
  // Tab Item
  'tab-item-border-default': 'grey-300',
  'tab-item-foreground-default': 'black',
  'tab-item-foreground-selected': 'blue-500',
  'tab-item-background-selected': 'blue-200',
  // Status
  errorIcon: 'error-600',
  errorText: 'error-600',
  successIcon: 'success-700',
  successText: 'success-700',
  warningIcon: 'warning-700',
  infoIcon: 'info-700',
  // Pictograms
  'pictogram-hands': 'blue-500',
  'pictogram-tint-main': 'turquoise-150',
  'pictogram-tint-secondary': 'turquoise-500',
  'pictogram-tint-tertiary': 'blue-400',
  // Inputs
  'textInputBorder-default': 'grey-100',
  'textInputLabel-default': 'grey-650',
  'textInputValue-default': 'black',
  'textInputValue-disabled': 'grey-450',
};

export const ThemeDark: Theme = {
  ...ThemeLight,
  // General
  'appBackground-primary': 'black',
  'appBackground-secondary': 'grey-900',
  'appBackground-tertiary': 'grey-700',
  'interactiveElem-default': 'blue-300',
  'interactiveElem-pressed': 'blue-400',
  'interactiveElem-disabled': 'grey-700',
  'interactiveOutline-disabled': 'grey-450',
  'neutralButton-default': 'white',
  'neutralButton-pressed': 'grey-100',
  'neutralButton-disabled': 'grey-850',
  'buttonText-default': 'black',
  'buttonText-danger': 'white',
  'buttonText-disabled': 'grey-300',
  'listItem-pressed': 'grey-900',
  // Typography
  'textHeading-default': 'white',
  'textHeading-secondary': 'grey-300',
  'textHeading-tertiary': 'grey-450',
  'textBody-default': 'white',
  'textBody-secondary': 'grey-100',
  'textBody-tertiary': 'grey-300',
  // Design System related
  'cardBorder-default': 'grey-850',
  'icon-default': 'grey-450',
  'icon-decorative': 'grey-650',
  'stepper-default': 'grey-700',
  // Inputs
  'textInputBorder-default': 'grey-850',
  'textInputLabel-default': 'grey-450',
  'textInputValue-default': 'white',
  'textInputValue-disabled': 'grey-100',
  // Tab Item
  'tab-item-border-default': 'grey-700',
  'tab-item-foreground-default': 'grey-200',
  'tab-item-foreground-selected': 'blue-200',
  'tab-item-background-selected': 'blue-400',
  // Layout
  'divider-header': 'grey-850',
  'divider-default': 'grey-850',
  'divider-bottomBar': 'grey-850',
  'skeleton-background': 'grey-850',
  // Status
  errorIcon: 'error-400',
  errorText: 'error-400',
  successText: 'success-400',
  successIcon: 'success-500',
  warningIcon: 'warning-500',
  infoIcon: 'info-500',
  // Pictograms
  'pictogram-hands': 'white',
  'pictogram-tint-main': 'turquoise-150',
  'pictogram-tint-secondary': 'turquoise-500',
};

export const themeStatusColorsLightMode = asThemeColors({
  errorMain: 'error-500',
  errorBackground: 'error-100',
  errorGraphics: 'error-600',
  errorTypography: 'error-850',
  warningMain: 'warning-500',
  warningBackground: 'warning-100',
  warningGraphics: 'warning-700',
  warningTypography: 'warning-850',
  successMain: 'success-500',
  successBackground: 'success-100',
  successGraphics: 'success-700',
  successTypography: 'success-850',
  infoMain: 'info-500',
  infoBackground: 'info-100',
  infoGraphics: 'info-700',
  infoTypography: 'info-850',
});

export type themeStatusColorsLightMode = keyof typeof themeStatusColorsLightMode;

export const themeStatusColorsDarkMode: Record<
  NonNullable<themeStatusColorsLightMode>,
  ColorsStatus
> = {
  errorMain: 'error-400',
  errorBackground: 'error-100',
  errorGraphics: 'error-600',
  errorTypography: 'error-850',
  warningMain: 'warning-400',
  warningBackground: 'warning-100',
  warningGraphics: 'warning-700',
  warningTypography: 'warning-850',
  successMain: 'success-400',
  successBackground: 'success-100',
  successGraphics: 'success-700',
  successTypography: 'success-850',
  infoMain: 'info-400',
  infoBackground: 'info-100',
  infoGraphics: 'info-700',
  infoTypography: 'info-850',
};

export type themeStatusColorsDarkMode = keyof typeof themeStatusColorsDarkMode;
