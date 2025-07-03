import React, { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

import { Theme, ThemeDark, ThemeLight } from '../core';

export const IOThemes = { light: ThemeLight, dark: ThemeDark };

type ThemeContextType = {
  themeType: ColorSchemeName;
  theme: Theme;
  setTheme: (theme: ColorSchemeName) => void;
};

export const ThemeContext: React.Context<ThemeContextType> = createContext<ThemeContextType>({
  themeType: Appearance.getColorScheme(),
  theme: Appearance.getColorScheme() === 'dark' ? IOThemes.dark : IOThemes.light,
  setTheme: (theme: ColorSchemeName) => Appearance.setColorScheme(theme),
});

export const useCustomThemeContext = () => useContext(ThemeContext);

export const useTheme = () => useCustomThemeContext().theme;

type ThemeContextProviderProps = {
  theme?: ColorSchemeName;
};

export const ThemeContextProvider = ({
  children,
  theme,
}: PropsWithChildren<ThemeContextProviderProps>) => {
  const [currentTheme, setCurrentTheme] = useState<ColorSchemeName>(
    theme ?? Appearance.getColorScheme()
  );

  const handleThemeChange = useCallback((newTheme: ColorSchemeName) => {
    setCurrentTheme(newTheme);
    Appearance.setColorScheme(newTheme);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: IOThemes[currentTheme ?? 'light'],
        setTheme: handleThemeChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
