import { ComponentProps, forwardRef, useMemo } from 'react';
import { AccessibilityRole, GestureResponderEvent, Text, TextStyle, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { useTheme } from '../../context';
import { Colors } from '../../core';
import {
  FontFamily,
  FontWeight,
  MaxFontSizeMultiplier,
  makeFontStyleObject,
} from '../../utils/fonts';

/**
 * We exclude all of the following props when we define a new
 * typographic style in which all of these visual attributes
 * are already defined.
 */
export type CustomTextStyle = Omit<
  TextStyle,
  'fontFamily' | 'fontSize' | 'fontWeight' | 'lineHeight' | 'fontStyle'
>;

export type TypographicStyleProps = Omit<
  CustomTextProps,
  'style' | 'font' | 'size' | 'weight' | 'color' | 'lineHeight' | 'fontStyle'
> & { textStyle?: CustomTextStyle; style?: CustomTextStyle } & {
  color?: CustomTextBaseProps['color'];
};

/**
 * The specific properties needed to calculate the font style using {@link makeFontStyleObject} (these information
 * cannot be included in the default StyleProp<TextStyle>
 */
type CustomTextBaseProps = {
  size?: number;
  weight?: FontWeight;
  color?: Colors;
  font?: FontFamily;
  lineHeight?: TextStyle['lineHeight'];
  fontStyle?: TextStyle['fontStyle'];
  textStyle?: CustomTextStyle;
  style?: CustomTextStyle;
};

type CustomTextExcludedProps = Omit<ComponentProps<typeof Text>, 'style'>;

export type CustomTextProps = CustomTextBaseProps & CustomTextExcludedProps;

/**
 * Extend `TypographicStyleProps` with extra props for styles that
 * can be used as links
 */
export type TypographicStyleAsLinkProps =
  | {
      color?: Colors;
      asLink: true;
      onPress: (event: GestureResponderEvent) => void;
      accessibilityRole?: Extract<AccessibilityRole, 'button' | 'link'>;
    }
  | { color?: Colors; asLink?: false };

/**
 * Decorate the function {@link makeFontStyleObject} with the additional color calculation.
 * @param color A value key from {@link Colors}, transformed here in {@link ColorValue}
 * @param args the args of the function {@link makeFontStyleObject}
 */
const calculateTextStyle = (color: Colors, ...args: Parameters<typeof makeFontStyleObject>) => ({
  ...makeFontStyleObject(...args),
  color: Colors[color],
});

/**
 * `CustomText` is the core Typography component used to render a text.
 * It accepts all the default text style `StyleProp<TextStyle>` (excluding the ones already applied) in addition with {@link CustomTextBaseProps}
 * used to calculate at runtime the platform-dependent styles.
 * @param props
 * @constructor
 */
export const CustomText = forwardRef<View, CustomTextProps>(
  (
    {
      color,
      size,
      font,
      lineHeight,
      weight,
      fontStyle,
      textStyle,
      style,
      children,
      allowFontScaling = true,
      maxFontSizeMultiplier,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    const computedStyleObj = useMemo(
      () =>
        calculateTextStyle(
          color ?? theme['textBody-default'],
          size,
          font,
          lineHeight,
          weight,
          fontStyle
        ),
      [color, theme, size, font, lineHeight, weight, fontStyle]
    );

    /* In some cases, for example when we use color transitions with
    `reanimated` we need to manage chromatic values as `ColorValue`
    or `string` (not `Colors`). So we keep a way to override
    the the `color' attribute without giving the ability to
    override all other all other typographic attributes
    through the `style' prop. */
    const fontStyleObj = style?.color
      ? [{ ...computedStyleObj, color: style?.color }]
      : computedStyleObj;

    /* Some typographic styles like `H5` have certain `TextStyle` properties
     like `textTransform` or `letterSpacing` that we want to apply to the text.
     We use the `textStyle` prop to pass these properties to the `CustomText`
     component and preserve the ability to define the `style` prop as well.
     The `style` prop is the last one to be applied, so we can properly
     override the `color` attribute.
     */
    const styleObj = style
      ? [textStyle ?? {}, fontStyleObj ?? {}, style]
      : [textStyle ?? {}, fontStyleObj ?? {}];

    /* Accessible typography based on the `fontScale` parameter */
    const accessibleFontSizeProps: ComponentProps<typeof Text> = {
      allowFontScaling,
      maxFontSizeMultiplier: maxFontSizeMultiplier ?? MaxFontSizeMultiplier,
    };

    return (
      <Text ref={ref} style={styleObj} {...props} {...accessibleFontSizeProps}>
        {children}
      </Text>
    );
  }
);

export const AnimatedCustomText = Animated.createAnimatedComponent(CustomText);
