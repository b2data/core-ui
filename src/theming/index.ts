import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider, useTheme as MuiUseTheme } from "@mui/system";

import { darkTheme, lightTheme } from "./variants";

export * from "./utils";

export type Direction = "ltr" | "rtl";

export { ThemeProvider, lightTheme, darkTheme };

export type Theme = typeof lightTheme;

export const useTheme = MuiUseTheme<Theme>;
