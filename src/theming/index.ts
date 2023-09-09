import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { default as ThemeProvider } from "@mui/material/styles/ThemeProvider";
import { default as withStyles } from "@mui/material/styles/withStyles";

import { darkTheme, lightTheme } from "./variants";

export * from "./utils";

export type Direction = "ltr" | "rtl";

export { ThemeProvider, withStyles, lightTheme, darkTheme };
