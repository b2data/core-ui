import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import type { Preview, Decorator } from "@storybook/react";
import { CssBaseline } from "../src/components/CssBaseline";
import {
  lightTheme,
  darkTheme,
  ThemeProvider
} from "../src/theming";

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export const decorators: Decorator[] = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline
  })
];
