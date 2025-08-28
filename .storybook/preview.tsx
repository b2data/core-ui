import React from "react";
import type { Preview } from "@storybook/react";
import { CssBaseline } from "../src/components/CssBaseline";
import { lightTheme, ThemeProvider } from "../src/theming";

import "../src/styles.css";

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  // Theme decorator without the addon-themes dependency
  (Story: any) => (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];
