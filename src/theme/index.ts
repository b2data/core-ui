// TODO:

import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink } from "@mui/material/colors";

import AvatarOverwrite from "../components/Avatar/theme";
import SvgIconOverwrite from "../components/SvgIcon/theme";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: cyan["A200"],
    },
    secondary: {
      main: pink["A400"],
    },
  },
  components: {
    MuiAvatar: AvatarOverwrite,
    MuiSvgIcon: SvgIconOverwrite,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: pink["A200"],
    },
    secondary: {
      main: cyan["A400"],
    },
    background: {
      default: blueGrey["800"],
      paper: blueGrey["700"],
    },
  },
});
