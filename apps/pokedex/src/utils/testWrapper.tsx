import { ThemeContextProvider } from '@pokeworld/ui';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import { RelayEnvironmentProvider } from 'react-relay';

const mockEnvironment = {} as any;

export const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <RelayEnvironmentProvider environment={mockEnvironment}>
      <ThemeProvider value={DarkTheme}>
        <ThemeContextProvider theme="dark">{children}</ThemeContextProvider>
      </ThemeProvider>
    </RelayEnvironmentProvider>
  );
};

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: TestWrapper, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
