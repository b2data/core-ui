import { ComponentsOverrides } from "@mui/material";
import { Theme } from "@mui/system";

export default {
  styleOverrides: {
    root: {
      justifyContent: "start",
    },
  } as ComponentsOverrides<Theme>["MuiAvatarGroup"],
};
